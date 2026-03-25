import { Redis } from "@upstash/redis";

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
 * Create Redis client from available env vars
 * Supports: KV_REST_API_URL+TOKEN, KV_URL, KV_REDIS_URL (Vercel Redis)
 */
function getRedis(): Redis | null {
  // REST API (preferred)
  if (process.env.KV_REST_API_URL && process.env.KV_REST_API_TOKEN) {
    return new Redis({
      url: process.env.KV_REST_API_URL,
      token: process.env.KV_REST_API_TOKEN,
    });
  }
  // Vercel Redis URL (rediss://default:TOKEN@HOST:PORT)
  const redisUrl = process.env.KV_URL || process.env.KV_REDIS_URL;
  if (redisUrl) {
    try {
      const parsed = new URL(redisUrl);
      const restUrl = `https://${parsed.hostname}`;
      const token = parsed.password;
      if (token) {
        return new Redis({ url: restUrl, token });
      }
    } catch (e) {
      console.error("[subscriptions] Failed to parse Redis URL:", e);
    }
  }
  return null;
}

function isKvAvailable(): boolean {
  return getRedis() !== null;
}

/**
 * Upsert a subscription in KV store
 */
export async function upsertSubscription(sub: Subscription): Promise<void> {
  const redis = getRedis();
  if (!redis) {
    console.warn("[subscriptions] KV not available, skipping upsert");
    return;
  }
  const key = `${KV_PREFIX}${sub.customerEmail.toLowerCase()}`;
  await redis.set(key, JSON.stringify(sub));
  await redis.sadd("sub:active_emails", sub.customerEmail.toLowerCase());
}

/**
 * Get subscription by email from KV
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
    console.error("[subscriptions] KV read error:", e);
    return null;
  }
}

/**
 * Check if email is a Pro user (active subscription)
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
