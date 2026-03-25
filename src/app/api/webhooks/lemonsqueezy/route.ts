import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";
import { upsertSubscription, type Subscription } from "@/lib/subscriptions";

function verifySignature(
  payload: string,
  signature: string,
  secret: string
): boolean {
  const hmac = crypto.createHmac("sha256", secret);
  const digest = hmac.update(payload).digest("hex");
  
  try {
    return crypto.timingSafeEqual(
      Buffer.from(signature),
      Buffer.from(digest)
    );
  } catch {
    return false;
  }
}

export async function POST(request: NextRequest) {
  try {
    const rawBody = await request.text();
    const signature = request.headers.get("x-signature") || "";
    const secret = process.env.LEMONSQUEEZY_WEBHOOK_SECRET || "";

    // Verify webhook signature
    if (secret && !verifySignature(rawBody, signature, secret)) {
      console.error("[webhook] Invalid signature");
      return NextResponse.json({ error: "Invalid signature" }, { status: 401 });
    }

    const event = JSON.parse(rawBody);
    const eventName = event.meta?.event_name;
    const data = event.data;

    console.log(`[webhook] Received: ${eventName}`);

    // Handle subscription events
    if (eventName?.startsWith("subscription_")) {
      const attrs = data.attributes;

      const sub: Subscription = {
        subscriptionId: data.id,
        customerId: String(attrs.customer_id),
        customerEmail: attrs.user_email,
        variantId: String(attrs.variant_id),
        status: attrs.status, // active, cancelled, expired, paused, past_due
        renewsAt: attrs.renews_at,
        endsAt: attrs.ends_at,
        createdAt: attrs.created_at,
        updatedAt: attrs.updated_at,
      };

      upsertSubscription(sub);

      console.log(
        `[webhook] Subscription ${eventName}: ${sub.customerEmail} -> ${sub.status}`
      );
    }

    // Handle order events (one-time purchases, if we add them later)
    if (eventName === "order_created") {
      console.log(`[webhook] Order created: ${data.id}`);
    }

    return NextResponse.json({ received: true });
  } catch (error) {
    console.error("[webhook] Error:", error);
    return NextResponse.json(
      { error: "Webhook processing failed" },
      { status: 500 }
    );
  }
}
