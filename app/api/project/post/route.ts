import { getUserSession } from "@/lib/isAuthorized";
import { NextRequest, NextResponse } from "next/server";
import { db } from "@/db/client";
import { project as Project } from "@/db/schema";

export async function GET(req: NextRequest) {
  try {
    if (!getUserSession()) {
      return NextResponse.json(
        {
          error: "The user is unauthorized",
        },
        { status: 401 },
      );
    }
    const body = await req.json();
    const { organization_id, websiteLink, name } = body;

    if (!organization_id || !websiteLink || !name) {
      return NextResponse.json(
        { error: "Required Field is missing." },
        { status: 400 },
      );
    }

    await db.insert(Project).values({
      organization_id: organization_id,
      websiteLink: websiteLink,
      name: name,
    });
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
}
