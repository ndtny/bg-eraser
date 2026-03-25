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

// Hardcoded Pro users (admin whitelist, bypasses payment)
const PRO_WHITELIST = new Set([
  "ziqingai1024@gmail.com",
]);

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
  await kv.set(key, JSON.stringify(sub));
  // Also add to a set for listing
  await kv.sadd("sub:active_emails", sub.customerEmail.toLowerCase());
}

/**
 * Get subscription by email from KV
 */
export async function getSubscriptionByEmail(email: string): Promise<Subscription | null> {
  if (!isKvAvailable()) return null;
  try {
    const key = `${KV_PREFIX}${email.toLowerCase()}`;
    const data = await kv.get<string>(key);
    if (!data) return null;
    return typeof data === "string" ? JSON.parse(data) : data as unknown as Subscription;
  } catch (e) {
    console.error("[subscriptions] KV read error:", e);
    return null;
  }
}

/**
 * Check if email is a Pro user (whitelist OR active subscription)
 */
export async function isProUser(email: string): Promise<boolean> {
  if (PRO_WHITELIST.has(email.toLowerCase())) return true;
  const sub = await getSubscriptionByEmail(email);
  if (!sub) return false;
  return ["active", "on_trial"].includes(sub.status);
}

/**
 * Sync version for cases where we can't await (backward compat)
 * Only checks whitelist
 */
export function isProUserSync(email: string): boolean {
  return PRO_WHITELIST.has(email.toLowerCase());
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
