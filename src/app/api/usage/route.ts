import { NextRequest, NextResponse } from "next/server";
import { checkRateLimit } from "@/lib/rate-limit";
import { isProUser } from "@/lib/subscriptions";

const COOKIE_NAME = "bg_usage";

export async function GET(request: NextRequest) {
  // Check if user is Pro by email
  const email = request.nextUrl.searchParams.get("email");
  if (email && await isProUser(email)) {
    return NextResponse.json({
      allowed: true,
      remaining: 999,
      used: 0,
      limit: 999,
      isPro: true,
    });
  }

  const cookieValue = request.cookies.get(COOKIE_NAME)?.value;
  const usage = checkRateLimit(cookieValue);
  return NextResponse.json({ ...usage, isPro: false });
}
