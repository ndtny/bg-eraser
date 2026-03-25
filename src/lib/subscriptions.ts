import { readFileSync, writeFileSync, mkdirSync } from "fs";
import { join } from "path";

const isVercel = !!process.env.VERCEL;
const DATA_DIR = isVercel ? "/tmp/usage-data" : join(process.cwd(), ".usage-data");
const SUBS_FILE = join(DATA_DIR, "subscriptions.json");

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

interface SubsStore {
  [email: string]: Subscription;
}

function readStore(): SubsStore {
  try {
    const raw = readFileSync(SUBS_FILE, "utf-8");
    return JSON.parse(raw);
  } catch {
    return {};
  }
}

function writeStore(store: SubsStore): void {
  mkdirSync(DATA_DIR, { recursive: true });
  writeFileSync(SUBS_FILE, JSON.stringify(store, null, 2), "utf-8");
}

export function upsertSubscription(sub: Subscription): void {
  const store = readStore();
  store[sub.customerEmail] = sub;
  writeStore(store);
}

export function getSubscriptionByEmail(email: string): Subscription | null {
  const store = readStore();
  return store[email] || null;
}

// Hardcoded Pro users (admin whitelist, bypasses payment)
const PRO_WHITELIST = new Set([
  "ziqingai1024@gmail.com",
]);

export function isProUser(email: string): boolean {
  if (PRO_WHITELIST.has(email.toLowerCase())) return true;
  const sub = getSubscriptionByEmail(email);
  if (!sub) return false;
  return ["active", "on_trial"].includes(sub.status);
}

export function getAllActiveSubscriptions(): Subscription[] {
  const store = readStore();
  return Object.values(store).filter((s) =>
    ["active", "on_trial"].includes(s.status)
  );
}
