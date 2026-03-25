import { NextRequest, NextResponse } from "next/server";
import { Client } from "@gradio/client";
import { checkRateLimit, recordUsage } from "@/lib/rate-limit";
import { isProUser } from "@/lib/subscriptions";

export async function POST(request: NextRequest) {
  try {
    // Get client IP
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      request.headers.get("x-real-ip") ||
      "unknown";

    const { image, email } = await request.json();

    // Pro users skip rate limit
    const userIsPro = email && isProUser(email);

    if (!userIsPro) {
      // Check rate limit for free users
      const { allowed, remaining } = checkRateLimit(ip);
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

    if (!image) {
      return NextResponse.json(
        { error: "No image provided" },
        { status: 400 }
      );
    }

    if (!image.startsWith("data:image/")) {
      return NextResponse.json(
        { error: "Invalid image format" },
        { status: 400 }
      );
    }

    const hfToken = process.env.HF_API_TOKEN;

    // Connect to BRIA RMBG-2.0 Space
    const client = await Client.connect("briaai/BRIA-RMBG-2.0", {
      hf_token: hfToken || undefined,
    } as Parameters<typeof Client.connect>[1]);

    // Upload base64 image as a Blob
    const base64Data = image.replace(/^data:image\/\w+;base64,/, "");
    const imageBuffer = Buffer.from(base64Data, "base64");
    const mimeMatch = image.match(/^data:(image\/\w+);base64,/);
    const mimeType = mimeMatch ? mimeMatch[1] : "image/png";
    const blob = new Blob([imageBuffer], { type: mimeType });

    // Call the model
    const result = await client.predict("/image", {
      image: blob,
    });

    // result.data[0] = [original, mask] gallery, result.data[1] = no_bg PNG file
    const resultData = result.data as Array<unknown>;
    const noBgFile = resultData[1] as { url: string; orig_name: string } | undefined;

    if (!noBgFile?.url) {
      return NextResponse.json(
        { error: "Failed to process image" },
        { status: 500 }
      );
    }

    // Fetch the processed PNG and convert to base64
    const imageResponse = await fetch(noBgFile.url);
    const resultBuffer = await imageResponse.arrayBuffer();
    const resultBase64 = Buffer.from(resultBuffer).toString("base64");
    const processedImage = `data:image/png;base64,${resultBase64}`;

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
