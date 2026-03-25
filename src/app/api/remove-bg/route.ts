import { NextRequest, NextResponse } from "next/server";
import { checkRateLimit, recordUsage } from "@/lib/rate-limit";
import { isProUser } from "@/lib/subscriptions";

const SPACE_URL = "https://briaai-bria-rmbg-2-0.hf.space";

/**
 * Call BRIA RMBG-2.0 Space via raw Gradio HTTP API (no @gradio/client needed)
 */
async function callGradioSpace(imageBuffer: Buffer, mimeType: string): Promise<string> {
  // Step 1: Upload image to Space
  const uploadForm = new FormData();
  const uint8 = new Uint8Array(imageBuffer);
  uploadForm.append("files", new Blob([uint8], { type: mimeType }), "image.png");

  const uploadRes = await fetch(`${SPACE_URL}/upload`, {
    method: "POST",
    body: uploadForm,
  });

  if (!uploadRes.ok) {
    throw new Error(`Upload failed: ${uploadRes.status}`);
  }

  const uploadedFiles = await uploadRes.json();
  const filePath = uploadedFiles[0]; // server path of uploaded file

  // Step 2: Call the /image endpoint
  const predictRes = await fetch(`${SPACE_URL}/api/predict`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      fn_index: 0,
      data: [{ path: filePath, meta: { _type: "gradio.FileData" } }],
    }),
  });

  if (!predictRes.ok) {
    // Try alternate endpoint format
    const predictRes2 = await fetch(`${SPACE_URL}/call/image`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        data: [{ path: filePath, meta: { _type: "gradio.FileData" } }],
      }),
    });

    if (!predictRes2.ok) {
      throw new Error(`Predict failed: ${predictRes2.status}`);
    }

    const callData = await predictRes2.json();
    const eventId = callData.event_id;

    // SSE stream to get result
    const resultRes = await fetch(`${SPACE_URL}/call/image/${eventId}`);
    const resultText = await resultRes.text();
    
    // Parse SSE response - find the "data:" line with the result
    const lines = resultText.split("\n");
    for (const line of lines) {
      if (line.startsWith("data: ")) {
        const data = JSON.parse(line.slice(6));
        if (Array.isArray(data) && data[1]?.url) {
          return data[1].url;
        }
      }
    }
    throw new Error("No result in SSE response");
  }

  const result = await predictRes.json();
  
  // result.data[1] is the no-bg PNG
  const noBgFile = result.data?.[1];
  if (noBgFile?.url) {
    return noBgFile.url;
  }
  if (noBgFile?.path) {
    return `${SPACE_URL}/file=${noBgFile.path}`;
  }

  throw new Error("No output image in response");
}

export async function POST(request: NextRequest) {
  try {
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      request.headers.get("x-real-ip") ||
      "unknown";

    const { image, email } = await request.json();

    // Pro users skip rate limit
    const userIsPro = email && isProUser(email);

    if (!userIsPro) {
      const { allowed } = checkRateLimit(ip);
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
      return NextResponse.json(
        { error: "Invalid image" },
        { status: 400 }
      );
    }

    // Decode base64 image
    const base64Data = image.replace(/^data:image\/\w+;base64,/, "");
    const imageBuffer = Buffer.from(base64Data, "base64");
    const mimeMatch = image.match(/^data:(image\/\w+);base64,/);
    const mimeType = mimeMatch ? mimeMatch[1] : "image/png";

    // Call BRIA RMBG-2.0
    const resultUrl = await callGradioSpace(imageBuffer, mimeType);

    // Fetch result and convert to base64
    const imageResponse = await fetch(resultUrl);
    const resultBuffer = await imageResponse.arrayBuffer();
    const resultBase64 = Buffer.from(resultBuffer).toString("base64");
    const contentType = imageResponse.headers.get("content-type") || "image/png";
    const processedImage = `data:${contentType};base64,${resultBase64}`;

    // Record usage for free users
    if (!userIsPro) {
      recordUsage(ip);
      const { remaining: newRemaining } = checkRateLimit(ip);
      return NextResponse.json({
        image: processedImage,
        remaining: newRemaining,
        isPro: false,
      });
    }

    return NextResponse.json({
      image: processedImage,
      remaining: 999,
      isPro: true,
    });
  } catch (error) {
    console.error("Background removal error:", error);
    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? error.message
            : "Failed to process image. Please try again.",
      },
      { status: 500 }
    );
  }
}

export const maxDuration = 60;
