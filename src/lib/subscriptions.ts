import { kv } from "@vercel/kv";

export interface Subscription {
  subscriptionId: string;
  customerId: string;
  customerEmail: string;
  variantId: string;
  status: string;
  renewsAt: string | null;
  endsAt: string | null;
  createdAt: string;
  updatedAt: string;
}

// No hardcoded whitelist — all Pro status stored in KV

const KV_PREFIX = "sub:";

/**
 * Check if Vercel KV is available (has env vars configured)
 */
function isKvAvailable(): boolean {
  return !!(process.env.KV_REST_API_URL && process.env.KV_REST_API_TOKEN);
}

/**
 * Upsert a subscription in KV store
 */
export async function upsertSubscription(sub: Subscription): Promise<void> {
  if (!isKvAvailable()) {
    console.warn("[subscriptions] KV not available, skipping upsert");
    return;
  }
  const key = `${KV_PREFIX}${sub.customerEmail.toLowerCase()}`;
  // Store as object directly (kv handles JSON serialization)
  await kv.set(key, sub);
  await kv.sadd("sub:active_emails", sub.customerEmail.toLowerCase());
}

/**
 * Get subscription by email from KV
 */
export async function getSubscriptionByEmail(email: string): Promise<Subscription | null> {
  if (!isKvAvailable()) return null;
  try {
    const key = `${KV_PREFIX}${email.toLowerCase()}`;
    const data = await kv.get<Subscription>(key);
    if (!data) return null;
    return data;
  } catch (e) {
    console.error("[subscriptions] KV read error:", e);
    return null;
  }
}

/**
 * Check if email is a Pro user (whitelist OR active subscription)
 */
export async function isProUser(email: string): Promise<boolean> {
  const sub = await getSubscriptionByEmail(email);
  if (!sub) return false;
  return ["active", "on_trial"].includes(sub.status);
}

/**
 * Manually set a user as Pro in KV (for admin use)
 */
export async function setProUser(email: string): Promise<void> {
  const sub: Subscription = {
    subscriptionId: "admin-granted",
    customerId: "admin",
    customerEmail: email.toLowerCase(),
    variantId: "manual",
    status: "active",
    renewsAt: null,
    endsAt: null,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };
  await upsertSubscription(sub);
}

/**
 * Get all active subscriptions
 */
export async function getAllActiveSubscriptions(): Promise<Subscription[]> {
  if (!isKvAvailable()) return [];
  try {
    const emails = await kv.smembers("sub:active_emails");
    const subs: Subscription[] = [];
    for (const email of emails) {
      const sub = await getSubscriptionByEmail(email as string);
      if (sub && ["active", "on_trial"].includes(sub.status)) {
        subs.push(sub);
      }
    }
    return subs;
  } catch {
    return [];
  }
}
