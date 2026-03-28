import { NextRequest, NextResponse } from "next/server";
import { createSubscription } from "@/lib/paypal";

const PAYPAL_PLAN_ID = process.env.PAYPAL_PLAN_ID || "P-5L6862009H695540GNHDUCHQ";

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();

    if (!email) {
      return NextResponse.json({ error: "Email required" }, { status: 400 });
    }

    const subscription = await createSubscription(PAYPAL_PLAN_ID, email);

    // Find the approval URL
    const approvalUrl = subscription.links?.find(
      (link: { rel: string; href: string }) => link.rel === "approve"
    )?.href;

    if (!approvalUrl) {
      console.error("[Checkout] No approval URL:", JSON.stringify(subscription));
      return NextResponse.json({ error: "Failed to create subscription" }, { status: 500 });
    }

    return NextResponse.json({
      subscriptionId: subscription.id,
      approvalUrl,
    });
  } catch (error) {
    console.error("[Checkout] Error:", error);
    return NextResponse.json({ error: "Failed to create checkout" }, { status: 500 });
  }
}
