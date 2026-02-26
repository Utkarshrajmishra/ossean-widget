import { db } from "@/db/client";
import {feedback as Feedback} from "@/db/schema";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};

export async function OPTIONS() {
  return new Response(null, { headers: corsHeaders });
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const {
      project_key,
      name,
      email,
      tag,
      organization_id,
      message,
      rating,
      image_url,
    } = body;

    if (!project_key && !message && !name && !email && !organization_id) {
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        { status: 400, headers: corsHeaders },
      );
    }

    await db.insert(Feedback).values({
        organization_id: organization_id,
        project_id: project_key,
        tag:tag,
        email:email,
        name:name,
        message:message,
        rating:rating,
        image_Url:''
    })

    return new Response(
        JSON.stringify("Feedback created"),
        {status:201, headers: corsHeaders }
    )
    
  } catch (error) {
    return new Response(
      JSON.stringify({ error: error }),
      { status: 500, headers: corsHeaders }
    );
 
  }
}
