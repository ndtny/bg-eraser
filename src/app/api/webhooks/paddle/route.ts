import { NextRequest, NextResponse } from "next/server";
import { setProUser, removeProUser } from "@/lib/subscriptions";

// Paddle webhook secret for signature verification
const WEBHOOK_SECRET = process.env.PADDLE_WEBHOOK_SECRET || "";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const eventType = body.event_type;

    console.log(`[Paddle Webhook] ${eventType}`, JSON.stringify(body.data?.custom_data));

    // Extract customer email from the event data
    const customerEmail =
      body.data?.custom_data?.email || // from checkout custom data
      body.data?.customer?.email || // from subscription events
      null;

    if (!customerEmail) {
      console.log("[Paddle Webhook] No customer email found, skipping");
      return NextResponse.json({ received: true });
    }

    const email = customerEmail.toLowerCase();

    switch (eventType) {
      case "subscription.created":
      case "subscription.activated":
      case "subscription.resumed":
      case "subscription.updated": {
        const status = body.data?.status;
        if (status === "active" || status === "trialing") {
          console.log(`[Paddle Webhook] Setting Pro for ${email}`);
          await setProUser(email);
        }
        break;
      }

      case "subscription.canceled":
      case "subscription.paused": {
        console.log(`[Paddle Webhook] Removing Pro for ${email}`);
        await removeProUser(email);
        break;
      }

      case "transaction.completed": {
        // One-time payment or first subscription payment
        if (customerEmail) {
          console.log(`[Paddle Webhook] Transaction completed for ${email}`);
          await setProUser(email);
        }
        break;
      }

      case "transaction.payment_failed": {
        console.log(`[Paddle Webhook] Payment failed for ${email}`);
        break;
      }

      default:
        console.log(`[Paddle Webhook] Unhandled event: ${eventType}`);
    }

    return NextResponse.json({ received: true });
  } catch (error) {
    console.error("[Paddle Webhook] Error:", error);
    return NextResponse.json({ error: "Webhook error" }, { status: 500 });
  }
}
