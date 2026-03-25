const API_BASE = "https://api.lemonsqueezy.com/v1";

function getApiKey(): string {
  const key = process.env.LEMONSQUEEZY_API_KEY;
  if (!key) throw new Error("LEMONSQUEEZY_API_KEY is not set");
  return key;
}

function getStoreId(): string {
  return process.env.LEMONSQUEEZY_STORE_ID || "325401";
}

async function lsApi(path: string, options?: RequestInit) {
  const res = await fetch(`${API_BASE}${path}`, {
    ...options,
    headers: {
      Accept: "application/vnd.api+json",
      "Content-Type": "application/vnd.api+json",
      Authorization: `Bearer ${getApiKey()}`,
      ...options?.headers,
    },
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`LemonSqueezy API error ${res.status}: ${text}`);
  }

  return res.json();
}

/**
 * Create a checkout session for a variant
 */
export async function createCheckout(
  variantId: string,
  options?: {
    email?: string;
    customData?: Record<string, string>;
    redirectUrl?: string;
  }
) {
  const body: Record<string, unknown> = {
    data: {
      type: "checkouts",
      attributes: {
        checkout_options: {
          embed: true, // For overlay checkout
          media: false,
          desc: false,
        },
        checkout_data: {
          email: options?.email || undefined,
          custom: options?.customData || undefined,
        },
        product_options: {
          redirect_url: options?.redirectUrl || undefined,
        },
      },
      relationships: {
        store: {
          data: {
            type: "stores",
            id: getStoreId(),
          },
        },
        variant: {
          data: {
            type: "variants",
            id: variantId,
          },
        },
      },
    },
  };

  const result = await lsApi("/checkouts", {
    method: "POST",
    body: JSON.stringify(body),
  });

  return result.data.attributes.url as string;
}

/**
 * Verify a webhook signature
 */
export function verifyWebhookSignature(
  payload: string,
  signature: string,
  secret: string
): boolean {
  const crypto = require("crypto");
  const hmac = crypto.createHmac("sha256", secret);
  const digest = hmac.update(payload).digest("hex");
  return crypto.timingSafeEqual(
    Buffer.from(signature),
    Buffer.from(digest)
  );
}

/**
 * Get subscription status by subscription ID
 */
export async function getSubscription(subscriptionId: string) {
  const result = await lsApi(`/subscriptions/${subscriptionId}`);
  return result.data;
}
