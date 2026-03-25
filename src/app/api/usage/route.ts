import { NextRequest, NextResponse } from "next/server";
import { checkRateLimit } from "@/lib/rate-limit";
import { isProUser } from "@/lib/subscriptions";

export async function GET(request: NextRequest) {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "unknown";

  // Check if user is Pro by email
  const email = request.nextUrl.searchParams.get("email");
  if (email && isProUser(email)) {
    return NextResponse.json({
      allowed: true,
      remaining: 999,
      used: 0,
      limit: 999,
      isPro: true,
    });
  }

  const usage = checkRateLimit(ip);
  return NextResponse.json({ ...usage, isPro: false });
}
