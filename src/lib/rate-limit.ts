import crypto from "crypto";

const FREE_LIMIT = 3;
const SECRET = process.env.NEXTAUTH_SECRET || "bgeraser-secret";

interface UsageData {
  count: number;
  date: string;
}

function getToday(): string {
  return new Date().toISOString().split("T")[0];
}

/**
 * Sign data to prevent tampering
 */
function sign(data: string): string {
  return crypto.createHmac("sha256", SECRET).update(data).digest("hex").slice(0, 16);
}

/**
 * Encode usage data into a signed cookie value
 */
export function encodeUsageCookie(data: UsageData): string {
  const payload = JSON.stringify(data);
  const sig = sign(payload);
  return Buffer.from(`${sig}.${payload}`).toString("base64");
}

/**
 * Decode and verify usage cookie
 */
export function decodeUsageCookie(cookie: string): UsageData | null {
  try {
    const decoded = Buffer.from(cookie, "base64").toString("utf-8");
    const dotIndex = decoded.indexOf(".");
    if (dotIndex === -1) return null;

    const sig = decoded.slice(0, dotIndex);
    const payload = decoded.slice(dotIndex + 1);
    
    if (sign(payload) !== sig) return null; // tampered

    const data: UsageData = JSON.parse(payload);
    
    // Reset if new day
    if (data.date !== getToday()) {
      return { count: 0, date: getToday() };
    }

    return data;
  } catch {
    return null;
  }
}

/**
 * Check rate limit from cookie value
 */
export function checkRateLimit(cookieValue: string | undefined): {
  allowed: boolean;
  remaining: number;
  used: number;
  limit: number;
} {
  if (!cookieValue) {
    return { allowed: true, remaining: FREE_LIMIT, used: 0, limit: FREE_LIMIT };
  }

  const data = decodeUsageCookie(cookieValue);
  if (!data) {
    return { allowed: true, remaining: FREE_LIMIT, used: 0, limit: FREE_LIMIT };
  }

  const remaining = Math.max(0, FREE_LIMIT - data.count);
  return {
    allowed: remaining > 0,
    remaining,
    used: data.count,
    limit: FREE_LIMIT,
  };
}

/**
 * Record a usage and return new cookie value
 */
export function recordUsage(cookieValue: string | undefined): {
  newCookie: string;
  remaining: number;
} {
  const today = getToday();
  let data: UsageData;

  if (cookieValue) {
    const decoded = decodeUsageCookie(cookieValue);
    if (decoded && decoded.date === today) {
      data = { count: decoded.count + 1, date: today };
    } else {
      data = { count: 1, date: today };
    }
  } else {
    data = { count: 1, date: today };
  }

  return {
    newCookie: encodeUsageCookie(data),
    remaining: Math.max(0, FREE_LIMIT - data.count),
  };
}
