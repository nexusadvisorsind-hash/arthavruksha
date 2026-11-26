import { NextResponse } from "next/server";
import { getPool } from "@/lib/db";
import { RETENTION_MONTHS } from "@/lib/privacy";

// Runs once a day (see vercel.json). Deletes website enquiries older than the retention
// period stated in the Privacy Policy. Vercel sends "Authorization: Bearer <CRON_SECRET>".
export const dynamic = "force-dynamic";

export async function GET(req: Request) {
  const secret = process.env.CRON_SECRET;
  if (!secret || req.headers.get("authorization") !== `Bearer ${secret}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const pool = getPool();
  if (!pool) return NextResponse.json({ deleted: 0, note: "No database configured" });
  try {
    const res = await pool.query(
      `DELETE FROM contact_submissions WHERE created_at < now() - ($1 || ' months')::interval`,
      [String(RETENTION_MONTHS)]
    );
    return NextResponse.json({ deleted: res.rowCount ?? 0 });
  } catch (e) {
    console.error("Enquiry purge failed:", e instanceof Error ? e.message : "unknown error");
    return NextResponse.json({ error: "Purge failed" }, { status: 500 });
  }
}
