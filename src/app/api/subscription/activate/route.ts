import { NextRequest, NextResponse } from "next/server";
import { setProUser } from "@/lib/subscriptions";
import { getAccessToken } from "@/lib/paypal";

const PAYPAL_MODE = process.env.PAYPAL_MODE || "sandbox";
const BASE_URL =
  PAYPAL_MODE === "live"
    ? "https://api-m.paypal.com"
    : "https://api-m.sandbox.paypal.com";

export async function POST(req: NextRequest) {
  try {
    const { subscriptionId, email } = await req.json();

    if (!subscriptionId || !email) {
      return NextResponse.json({ error: "Missing subscriptionId or email" }, { status: 400 });
    }

    // Verify subscription with PayPal
    const token = await getAccessToken();
    const res = await fetch(`${BASE_URL}/v1/billing/subscriptions/${subscriptionId}`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    if (!res.ok) {
      return NextResponse.json({ error: "Invalid subscription" }, { status: 400 });
    }

    const sub = await res.json();

    // Check subscription is active or approved
    if (sub.status === "ACTIVE" || sub.status === "APPROVED") {
      const subscriberEmail = sub.subscriber?.email_address?.toLowerCase() || email.toLowerCase();
      await setProUser(subscriberEmail);

      return NextResponse.json({
        success: true,
        email: subscriberEmail,
        status: sub.status,
      });
    }

    return NextResponse.json({
      success: false,
      status: sub.status,
      message: "Subscription not active yet",
    });
  } catch (error) {
    console.error("[Activate] Error:", error);
    return NextResponse.json({ error: "Failed to activate" }, { status: 500 });
  }
}
