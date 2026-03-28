import { NextRequest, NextResponse } from "next/server";
import { setProUser, removeProUser } from "@/lib/subscriptions";
import { getAccessToken } from "@/lib/paypal";

const PAYPAL_MODE = process.env.PAYPAL_MODE || "sandbox";
const BASE_URL =
  PAYPAL_MODE === "live"
    ? "https://api-m.paypal.com"
    : "https://api-m.sandbox.paypal.com";

export async function POST(req: NextRequest) {
  try {
    const body = await req.text();
    const event = JSON.parse(body);
    const eventType = event.event_type;

    console.log(`[PayPal Webhook] ${eventType}`);

    // Extract subscriber email
    let email: string | null = null;

    if (event.resource?.subscriber?.email_address) {
      email = event.resource.subscriber.email_address.toLowerCase();
    } else if (event.resource?.id && eventType.startsWith("BILLING.SUBSCRIPTION")) {
      // Fetch subscription details to get email
      try {
        const token = await getAccessToken();
        const res = await fetch(`${BASE_URL}/v1/billing/subscriptions/${event.resource.id}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        const sub = await res.json();
        email = sub.subscriber?.email_address?.toLowerCase() || null;
      } catch (e) {
        console.error("[PayPal Webhook] Failed to fetch subscription:", e);
      }
    }

    if (!email) {
      console.log("[PayPal Webhook] No email found, skipping");
      return NextResponse.json({ received: true });
    }

    switch (eventType) {
      case "BILLING.SUBSCRIPTION.CREATED":
      case "BILLING.SUBSCRIPTION.ACTIVATED":
      case "BILLING.SUBSCRIPTION.UPDATED":
      case "BILLING.SUBSCRIPTION.RE-ACTIVATED": {
        const status = event.resource?.status;
        if (status === "ACTIVE" || status === "APPROVED") {
          console.log(`[PayPal Webhook] Setting Pro for ${email}`);
          await setProUser(email);
        }
        break;
      }

      case "BILLING.SUBSCRIPTION.CANCELLED":
      case "BILLING.SUBSCRIPTION.SUSPENDED":
      case "BILLING.SUBSCRIPTION.EXPIRED": {
        console.log(`[PayPal Webhook] Removing Pro for ${email}`);
        await removeProUser(email);
        break;
      }

      case "PAYMENT.SALE.COMPLETED": {
        console.log(`[PayPal Webhook] Payment completed for ${email}`);
        await setProUser(email);
        break;
      }

      default:
        console.log(`[PayPal Webhook] Unhandled: ${eventType}`);
    }

    return NextResponse.json({ received: true });
  } catch (error) {
    console.error("[PayPal Webhook] Error:", error);
    return NextResponse.json({ error: "Webhook error" }, { status: 500 });
  }
}
