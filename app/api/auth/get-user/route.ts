import { getUserSession } from "@/lib/isAuthorized";
import { NextResponse } from "next/server";
import { user as User } from "@/db/schema";
import { db } from "@/db/client";
import { eq } from "drizzle-orm";

export async function GET() {
  try {
    const user = await getUserSession();
    if (!user) {
      return NextResponse.json(
        { error: "Organization Id not found" },
        { status: 401 },
      );
    }

    const userInfo = await db
      .select()
      .from(User)
      .where(eq(User.organization_id, user?.organization_id));

    return NextResponse.json({ data: userInfo }, { status: 500 });
  } catch (error) {
    return NextResponse.json(
      { error: "Something went wrong!" },
      { status: 500 },
    );
  }
}
