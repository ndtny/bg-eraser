import { NextRequest, NextResponse } from "next/server";

const PADDLE_PRICE_ID = process.env.PADDLE_PRICE_ID || "pri_01kmmjpjytkcmrmq9y36d5sq2t";

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();

    if (!email) {
      return NextResponse.json({ error: "Email required" }, { status: 400 });
    }

    // Return Paddle client-side checkout config
    // Paddle.js handles the checkout overlay on the frontend
    return NextResponse.json({
      priceId: PADDLE_PRICE_ID,
      email,
    });
  } catch (error) {
    console.error("[Checkout] Error:", error);
    return NextResponse.json({ error: "Failed to create checkout" }, { status: 500 });
  }
}
