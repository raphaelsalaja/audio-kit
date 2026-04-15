import { existsSync } from "node:fs";
import { readFile } from "node:fs/promises";
import { resolve } from "node:path";
import { eq, sql } from "drizzle-orm";
import { type NextRequest, NextResponse } from "next/server";
import { getDb } from "../../../../lib/db";
import { patches, patchLoads } from "../../../../lib/schema";

export const dynamic = "force-dynamic";
export const preferredRegion = "iad1";

const SLUG_RE = /^[a-z0-9-]+$/;
const PATCHES_DIR = resolve(process.cwd(), "../../.web-kits");
const CACHE_HEADERS = {
  "Cache-Control":
    "public, max-age=3600, s-maxage=3600, stale-while-revalidate=86400",
};

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ name: string }> },
) {
  const { name } = await params;

  if (SLUG_RE.test(name)) {
    const localPath = resolve(PATCHES_DIR, `${name}.json`);
    if (existsSync(localPath)) {
      const data = JSON.parse(await readFile(localPath, "utf-8"));
      recordLoad(name);
      return NextResponse.json(data, { headers: CACHE_HEADERS });
    }
  }

  const db = await getDb();

  const rows = await db
    .select({
      patchJson: patches.patchJson,
      sourceUrl: patches.sourceUrl,
    })
    .from(patches)
    .where(eq(patches.name, name));

  if (rows.length === 0) {
    return NextResponse.json({ error: "not found" }, { status: 404 });
  }

  const patch = rows[0];

  if (patch.patchJson) {
    return NextResponse.json(patch.patchJson, { headers: CACHE_HEADERS });
  }

  if (!patch.sourceUrl) {
    return NextResponse.json(
      { error: "Patch has no source URL or cached JSON" },
      { status: 404 },
    );
  }

  const res = await fetch(patch.sourceUrl);
  if (!res.ok) {
    return NextResponse.json(
      { error: `Failed to fetch patch from source: ${res.status}` },
      { status: 502 },
    );
  }

  const patchData = await res.json();

  await db
    .update(patches)
    .set({ patchJson: patchData })
    .where(eq(patches.name, name));

  return NextResponse.json(patchData, { headers: CACHE_HEADERS });
}

function recordLoad(name: string) {
  getDb()
    .then((db) =>
      db.insert(patchLoads).values({
        patchId: sql`(SELECT id FROM patches WHERE name = ${name})`,
      }),
    )
    .catch(() => {});
}
