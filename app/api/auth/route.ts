import { scaleKit } from "@/lib/scaleKit";
import crypto from "crypto";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const state = crypto.randomBytes(16).toString("hex");

    (await cookies()).set("sk_state", state, {
      httpOnly: true,
      sameSite: "lax",
      path: "/",
    });

    const redirectUri = process.env.SCALEKIT_REDIREC!;

    const optons = {
      scopes: ["openid", "profile", "email", "offline_access"],
      state,
    };

    const authorizationUrl = scaleKit.getAuthorizationUrl(redirectUri, optons);

    return NextResponse.redirect(authorizationUrl);
  } catch (error) {
    return NextResponse.json(
      {
        error: "Failed to generate authorization URL",
      },
      { status: 500 },
    );
  }
}
