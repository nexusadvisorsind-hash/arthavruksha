import { NextResponse } from "next/server";

// TODO: replace with Supabase insert + email notification once the backend is set up
// (mirrors the pattern used for giftcityfunds.in's submit-contact-form edge function).
export async function POST(req: Request) {
  try {
    const body = await req.json();
    if (!body?.name || !body?.email || !body?.phone) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }
    console.log("Contact form submission (not yet persisted):", body);
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}
