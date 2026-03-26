import { NextRequest, NextResponse } from "next/server";
import { checkRateLimit, recordUsage } from "@/lib/rate-limit";
import { isProUser } from "@/lib/subscriptions";

const SPACE_URL = "https://briaai-bria-rmbg-2-0.hf.space";
const COOKIE_NAME = "bg_usage";

/**
 * Call BRIA RMBG-2.0 via Gradio API with timeout
 */
async function callGradioSpace(imageBuffer: Buffer, mimeType: string): Promise<Buffer> {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 30000); // 30s timeout

  try {
    // Step 1: Upload image
    const uploadForm = new FormData();
    uploadForm.append(
      "files",
      new Blob([new Uint8Array(imageBuffer)], { type: mimeType }),
      "image.png"
    );

    const uploadRes = await fetch(`${SPACE_URL}/upload`, {
      method: "POST",
      body: uploadForm,
      signal: controller.signal,
    });

    if (!uploadRes.ok) {
      throw new Error(`Upload failed: ${uploadRes.status}`);
    }

    const uploadedFiles = await uploadRes.json();
    const filePath = uploadedFiles[0];

    // Step 2: Try /api/predict first (faster, single request)
    const predictRes = await fetch(`${SPACE_URL}/api/predict`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        fn_index: 0,
        data: [{ path: filePath, meta: { _type: "gradio.FileData" } }],
      }),
      signal: controller.signal,
    });

    let resultUrl: string;

    if (predictRes.ok) {
      const result = await predictRes.json();
      const noBgFile = result.data?.[1];
      if (noBgFile?.url) {
        resultUrl = noBgFile.url;
      } else if (noBgFile?.path) {
        resultUrl = `${SPACE_URL}/file=${noBgFile.path}`;
      } else {
        throw new Error("No output image in predict response");
      }
    } else {
      // Fallback: /call/image SSE endpoint
      const callRes = await fetch(`${SPACE_URL}/call/image`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          data: [{ path: filePath, meta: { _type: "gradio.FileData" } }],
        }),
        signal: controller.signal,
      });

      if (!callRes.ok) {
        throw new Error(`Predict failed: ${callRes.status}`);
      }

      const callData = await callRes.json();
      const eventId = callData.event_id;

      const resultRes = await fetch(`${SPACE_URL}/call/image/${eventId}`, {
        signal: controller.signal,
      });
      const resultText = await resultRes.text();

      resultUrl = "";
      for (const line of resultText.split("\n")) {
        if (line.startsWith("data: ")) {
          try {
            const data = JSON.parse(line.slice(6));
            if (Array.isArray(data) && data[1]?.url) {
              resultUrl = data[1].url;
              break;
            }
          } catch {}
        }
      }
      if (!resultUrl) throw new Error("No result in SSE response");
    }

    // Step 3: Download result image
    const imageRes = await fetch(resultUrl, { signal: controller.signal });
    const resultBuffer = Buffer.from(await imageRes.arrayBuffer());
    return resultBuffer;
  } finally {
    clearTimeout(timeout);
  }
}

export async function POST(request: NextRequest) {
  try {
    const { image, email } = await request.json();

    // Pro users skip rate limit
    const userIsPro = email ? await isProUser(email) : false;
    const cookieValue = request.cookies.get(COOKIE_NAME)?.value;

    if (!userIsPro) {
      const { allowed } = checkRateLimit(cookieValue);
      if (!allowed) {
        return NextResponse.json(
          {
            error: "Daily free limit reached (3/day). Upgrade to Pro for unlimited access.",
            limitReached: true,
            remaining: 0,
          },
          { status: 429 }
        );
      }
    }

    if (!image || !image.startsWith("data:image/")) {
      return NextResponse.json({ error: "Invalid image" }, { status: 400 });
    }

    // Decode base64
    const base64Data = image.replace(/^data:image\/\w+;base64,/, "");
    const imageBuffer = Buffer.from(base64Data, "base64");
    const mimeMatch = image.match(/^data:(image\/\w+);base64,/);
    const mimeType = mimeMatch ? mimeMatch[1] : "image/png";

    // Process
    const resultBuffer = await callGradioSpace(imageBuffer, mimeType);
    const processedImage = `data:image/png;base64,${resultBuffer.toString("base64")}`;

    // Pro response
    if (userIsPro) {
      return NextResponse.json({
        image: processedImage,
        remaining: 999,
        isPro: true,
      });
    }

    // Free user — record usage
    const { newCookie, remaining } = recordUsage(cookieValue);
    const response = NextResponse.json({
      image: processedImage,
      remaining,
      isPro: false,
    });

    response.cookies.set(COOKIE_NAME, newCookie, {
      httpOnly: true,
      secure: true,
      sameSite: "lax",
      maxAge: 86400,
      path: "/",
    });

    return response;
  } catch (error) {
    console.error("Background removal error:", error);
    const msg = error instanceof Error ? error.message : "Failed to process image";
    const isTimeout = msg.includes("abort");
    return NextResponse.json(
      { error: isTimeout ? "Processing timed out. Try a smaller image." : msg },
      { status: isTimeout ? 504 : 500 }
    );
  }
}

export const maxDuration = 60;
