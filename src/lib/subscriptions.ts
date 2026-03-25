import { getRedis } from "./redis";

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

const KV_PREFIX = "sub:";

/**
 * Pro whitelist from env var (fallback when Redis unavailable)
 */
function getProWhitelist(): Set<string> {
  const raw = process.env.ADMIN_PRO_EMAILS || "";
  return new Set(
    raw.split(",").map((e) => e.trim().toLowerCase()).filter(Boolean)
  );
}

/**
 * Upsert a subscription in Redis
 */
export async function upsertSubscription(sub: Subscription): Promise<void> {
  const redis = getRedis();
  if (!redis) {
    console.warn("[subscriptions] Redis not available, skipping upsert");
    return;
  }
  const key = `${KV_PREFIX}${sub.customerEmail.toLowerCase()}`;
  await redis.set(key, JSON.stringify(sub));
  await redis.sadd("sub:active_emails", sub.customerEmail.toLowerCase());
}

/**
 * Get subscription by email
 */
export async function getSubscriptionByEmail(email: string): Promise<Subscription | null> {
  const redis = getRedis();
  if (!redis) return null;
  try {
    const key = `${KV_PREFIX}${email.toLowerCase()}`;
    const data = await redis.get<string>(key);
    if (!data) return null;
    return typeof data === "string" ? JSON.parse(data) : data as unknown as Subscription;
  } catch (e) {
    console.error("[subscriptions] Redis read error:", e);
    return null;
  }
}

/**
 * Check if email is Pro (env whitelist OR active subscription in Redis)
 */
export async function isProUser(email: string): Promise<boolean> {
  if (!email) return false;
  const lower = email.toLowerCase();

  // 1. Env whitelist (instant, no network)
  if (getProWhitelist().has(lower)) return true;

  // 2. Redis lookup
  const sub = await getSubscriptionByEmail(lower);
  if (sub && ["active", "on_trial"].includes(sub.status)) return true;

  return false;
}

/**
 * Manually set a user as Pro in Redis
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
  const redis = getRedis();
  if (!redis) return [];
  try {
    const emails = await redis.smembers("sub:active_emails");
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
