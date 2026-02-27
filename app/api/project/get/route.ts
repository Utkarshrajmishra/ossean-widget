import { db } from "@/db/client";
import { NextRequest, NextResponse } from "next/server";
import { project as Project } from "@/db/schema";
import { eq } from "drizzle-orm";

export async function GET(req: NextRequest) {
  try {
    const searchParams = req.nextUrl.searchParams;
    const organization_id = searchParams.get("organization_id");

    if (!organization_id) {
      return NextResponse.json(
        { error: "Organization Id not found" },
        { status: 401 },
      );
    }

    const projects = await db
      .select()
      .from(Project)
      .where(eq(Project.organization_id, organization_id));

    return NextResponse.json(
      {
        data: projects,
      },
      { status: 200 },
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Something went wrong!" },
      { status: 500 },
    );
  }
}
