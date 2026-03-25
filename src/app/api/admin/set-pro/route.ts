import { NextRequest, NextResponse } from "next/server";
import { setProUser, getSubscriptionByEmail } from "@/lib/subscriptions";

export async function POST(request: NextRequest) {
  try {
    const { email, secret } = await request.json();

    if (!secret || secret !== process.env.NEXTAUTH_SECRET) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    if (!email) {
      return NextResponse.json({ error: "Email required" }, { status: 400 });
    }

    await setProUser(email);
    const sub = await getSubscriptionByEmail(email);

    return NextResponse.json({
      success: true,
      message: `${email} is now Pro`,
      subscription: sub,
    });
  } catch (error) {
    console.error("[admin] set-pro error:", error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Failed" },
      { status: 500 }
    );
  }
}
