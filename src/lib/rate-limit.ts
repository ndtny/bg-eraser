import { readFileSync, writeFileSync, mkdirSync } from "fs";
import { join } from "path";

const FREE_LIMIT = 3;

// Use /tmp on Vercel (writable but ephemeral), project dir locally
const isVercel = !!process.env.VERCEL;
const DATA_DIR = isVercel ? "/tmp/usage-data" : join(process.cwd(), ".usage-data");
const DATA_FILE = join(DATA_DIR, "usage.json");

interface UsageStore {
  [ip: string]: { count: number; date: string };
}

function getToday(): string {
  return new Date().toISOString().split("T")[0];
}

// Use /24 subnet as key to handle rotating IPs (VPN/proxy)
function normalizeIp(ip: string): string {
  const parts = ip.split(".");
  if (parts.length === 4) {
    return parts.slice(0, 3).join(".") + ".0";
  }
  return ip;
}

function readStore(): UsageStore {
  try {
    const raw = readFileSync(DATA_FILE, "utf-8");
    return JSON.parse(raw);
  } catch {
    return {};
  }
}

function writeStore(store: UsageStore): void {
  try {
    mkdirSync(DATA_DIR, { recursive: true });
    writeFileSync(DATA_FILE, JSON.stringify(store), "utf-8");
  } catch (e) {
    console.error("[rate-limit] Failed to write store:", e);
  }
}

export function checkRateLimit(ip: string): {
  allowed: boolean;
  remaining: number;
  used: number;
  limit: number;
} {
  const store = readStore();
  const today = getToday();
  const key = normalizeIp(ip);
  const record = store[key];

  if (!record || record.date !== today) {
    return { allowed: true, remaining: FREE_LIMIT, used: 0, limit: FREE_LIMIT };
  }

  const remaining = Math.max(0, FREE_LIMIT - record.count);
  return {
    allowed: remaining > 0,
    remaining,
    used: record.count,
    limit: FREE_LIMIT,
  };
}

export function recordUsage(ip: string): void {
  const store = readStore();
  const today = getToday();
  const key = normalizeIp(ip);
  const record = store[key];

  if (!record || record.date !== today) {
    store[key] = { count: 1, date: today };
  } else {
    record.count += 1;
  }

  // Clean old entries
  for (const k of Object.keys(store)) {
    if (store[k].date !== today) {
      delete store[k];
    }
  }

  writeStore(store);
}
