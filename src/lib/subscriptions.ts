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

/**
 * Pro whitelist from env var ADMIN_PRO_EMAILS (comma-separated)
 * This is the reliable fallback — always works, no DB dependency
 */
function getProWhitelist(): Set<string> {
  const raw = process.env.ADMIN_PRO_EMAILS || "";
  return new Set(
    raw
      .split(",")
      .map((e) => e.trim().toLowerCase())
      .filter(Boolean)
  );
}

/**
 * Check if email is a Pro user
 * Uses env var whitelist (instant, no network call)
 */
export async function isProUser(email: string): Promise<boolean> {
  if (!email) return false;
  return getProWhitelist().has(email.toLowerCase());
}

/**
 * Sync check for Pro status (for places that can't be async)
 */
export function isProUserSync(email: string): boolean {
  if (!email) return false;
  return getProWhitelist().has(email.toLowerCase());
}

// Stub functions for webhook compatibility (LemonSqueezy integration)
// Will be implemented with proper DB when payment goes live

export async function upsertSubscription(sub: Subscription): Promise<void> {
  console.log("[subscriptions] upsertSubscription called for:", sub.customerEmail);
  // TODO: implement with real DB when LemonSqueezy goes live
}

export async function getSubscriptionByEmail(email: string): Promise<Subscription | null> {
  // Check whitelist
  if (getProWhitelist().has(email.toLowerCase())) {
    return {
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
  }
  return null;
}

export async function setProUser(email: string): Promise<void> {
  console.log(`[subscriptions] To add Pro user, set ADMIN_PRO_EMAILS env var. Email: ${email}`);
}

export async function getAllActiveSubscriptions(): Promise<Subscription[]> {
  const whitelist = getProWhitelist();
  return Array.from(whitelist).map((email) => ({
    subscriptionId: "admin-granted",
    customerId: "admin",
    customerEmail: email,
    variantId: "manual",
    status: "active",
    renewsAt: null,
    endsAt: null,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  }));
}
