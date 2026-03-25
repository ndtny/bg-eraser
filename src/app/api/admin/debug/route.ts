import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const secret = request.nextUrl.searchParams.get("secret");
  if (secret !== process.env.NEXTAUTH_SECRET) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const redisUrl = process.env.KV_URL || process.env.KV_REDIS_URL || "";
  let restUrl = "";
  let hasToken = false;
  try {
    const parsed = new URL(redisUrl);
    restUrl = `https://${parsed.hostname}`;
    hasToken = !!parsed.password;
  } catch {}

  return NextResponse.json({
    hasKvRestApiUrl: !!process.env.KV_REST_API_URL,
    hasKvRestApiToken: !!process.env.KV_REST_API_TOKEN,
    hasKvUrl: !!process.env.KV_URL,
    hasKvRedisUrl: !!process.env.KV_REDIS_URL,
    parsedRestUrl: restUrl || "not parseable",
    parsedHasToken: hasToken,
  });
}
