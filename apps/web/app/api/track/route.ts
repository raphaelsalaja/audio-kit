import { type NextRequest, NextResponse } from "next/server";
import { getDb } from "../../../lib/db";

export const dynamic = "force-dynamic";
export const preferredRegion = "iad1";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const patchId = body?.patch_id;

    if (typeof patchId !== "number" || !Number.isInteger(patchId)) {
      return NextResponse.json(
        { error: "patch_id must be an integer" },
        { status: 400 },
      );
    }

    const sql = await getDb();

    const existing = await sql`SELECT id FROM patches WHERE id = ${patchId}`;
    if (existing.length === 0) {
      return NextResponse.json({ error: "patch not found" }, { status: 404 });
    }

    await sql`INSERT INTO patch_loads (patch_id) VALUES (${patchId})`;

    return new NextResponse(null, { status: 204 });
  } catch (err) {
    console.error("POST /api/track", err);
    return NextResponse.json(
      { error: "internal server error" },
      { status: 500 },
    );
  }
}
