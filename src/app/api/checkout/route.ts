import { NextRequest, NextResponse } from "next/server";
import { createCheckout } from "@/lib/lemonsqueezy";

export async function POST(request: NextRequest) {
  try {
    const { variantId, email } = await request.json();

    const proVariantId = variantId || process.env.LEMONSQUEEZY_PRO_VARIANT_ID;

    if (!proVariantId) {
      return NextResponse.json(
        { error: "Payment system not configured yet" },
        { status: 503 }
      );
    }

    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://aibgeraser.com";

    const checkoutUrl = await createCheckout(proVariantId, {
      email,
      redirectUrl: `${baseUrl}/pro/success`,
      customData: {
        source: "pricing_page",
      },
    });

    return NextResponse.json({ url: checkoutUrl });
  } catch (error) {
    console.error("Checkout error:", error);
    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? error.message
            : "Failed to create checkout",
      },
      { status: 500 }
    );
  }
}
