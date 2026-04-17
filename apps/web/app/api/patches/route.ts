import { count, eq, sql } from "drizzle-orm";
import { type NextRequest, NextResponse } from "next/server";
import { getDb } from "../../../lib/db";
import { derivePatchMeta } from "../../../lib/patch-derive";
import type { PatchJson } from "../../../lib/schema";
import { patches, patchLoads, patchSounds } from "../../../lib/schema";

export const dynamic = "force-dynamic";
export const preferredRegion = "iad1";

const ALLOWED_HOSTS = [
  "raw.githubusercontent.com",
  "gist.githubusercontent.com",
  "audio.raphaelsalaja.com",
];

function isAllowedUrl(raw: string): URL | null {
  try {
    const parsed = new URL(raw);
    if (parsed.protocol !== "https:") return null;
    if (
      !ALLOWED_HOSTS.some(
        (h) => parsed.hostname === h || parsed.hostname.endsWith(`.${h}`),
      )
    )
      return null;
    return parsed;
  } catch {
    return null;
  }
}

function validatePatch(data: unknown): data is PatchJson {
  if (typeof data !== "object" || data === null) return false;
  const obj = data as Record<string, unknown>;
  return (
    typeof obj.name === "string" &&
    typeof obj.sounds === "object" &&
    obj.sounds !== null &&
    !Array.isArray(obj.sounds)
  );
}

export async function POST(request: NextRequest) {
  try {
    const db = await getDb();
    const body = await request.json();
    const { url } = body as { url?: string };

    if (!url || typeof url !== "string") {
      return NextResponse.json(
        { error: "Missing required field: url" },
        { status: 400 },
      );
    }

    const parsed = isAllowedUrl(url);
    if (!parsed) {
      return NextResponse.json(
        {
          error: `URL must be HTTPS from an allowed host: ${ALLOWED_HOSTS.join(", ")}`,
        },
        { status: 400 },
      );
    }

    const res = await fetch(parsed.href, {
      signal: AbortSignal.timeout(10_000),
      headers: { Accept: "application/json" },
    });
    if (!res.ok) {
      return NextResponse.json(
        { error: `Failed to fetch patch from URL: ${res.status}` },
        { status: 400 },
      );
    }

    let patchData: unknown;
    try {
      patchData = await res.json();
    } catch {
      return NextResponse.json(
        { error: "URL did not return valid JSON" },
        { status: 400 },
      );
    }

    if (!validatePatch(patchData)) {
      return NextResponse.json(
        { error: "Invalid patch format: must have name and sounds" },
        { status: 400 },
      );
    }

    const slug = patchData.name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "");
    const soundCount = Object.keys(patchData.sounds).length;
    const author = patchData.author ?? "unknown";
    const description = patchData.description ?? "";
    const derived = derivePatchMeta(patchData);

    const existing = await db
      .select({ id: patches.id })
      .from(patches)
      .where(eq(patches.name, slug));

    let patchId: number;

    if (existing.length > 0) {
      patchId = existing[0].id;
      await db
        .update(patches)
        .set({
          author,
          description,
          soundCount,
          sourceUrl: url,
          patchJson: patchData,
          version: patchData.version ?? null,
          license: patchData.license ?? null,
          compatibility: patchData.compatibility ?? null,
          updatedAt: new Date(),
          sourceTypes: derived.sourceTypes,
          hasEffects: derived.hasEffects,
          hasLayers: derived.hasLayers,
          fileSize: derived.fileSize,
        })
        .where(eq(patches.id, patchId));
    } else {
      const inserted = await db
        .insert(patches)
        .values({
          name: slug,
          author,
          description,
          soundCount,
          url: slug,
          sourceUrl: url,
          patchJson: patchData,
          version: patchData.version ?? null,
          license: patchData.license ?? null,
          compatibility: patchData.compatibility ?? null,
          sourceTypes: derived.sourceTypes,
          hasEffects: derived.hasEffects,
          hasLayers: derived.hasLayers,
          fileSize: derived.fileSize,
        })
        .returning({ id: patches.id });
      patchId = inserted[0].id;
    }

    await db.delete(patchSounds).where(eq(patchSounds.patchId, patchId));

    const soundEntries = Object.keys(patchData.sounds).map((soundName) => ({
      patchId,
      name: soundName,
      category: derived.categories.get(soundName) ?? "general",
    }));

    if (soundEntries.length > 0) {
      await db.insert(patchSounds).values(soundEntries);
    }

    return NextResponse.json({
      ok: true,
      name: slug,
      sounds: soundCount,
      url: `https://audio.raphaelsalaja.com/library/${slug}`,
    });
  } catch (err) {
    return NextResponse.json({ error: String(err) }, { status: 500 });
  }
}

export async function GET() {
  try {
    const db = await getDb();
    const rows = await db
      .select({
        name: patches.name,
        author: patches.author,
        description: patches.description,
        soundCount: patches.soundCount,
        sourceUrl: patches.sourceUrl,
        loads: count(patchLoads.id),
      })
      .from(patches)
      .leftJoin(patchLoads, eq(patchLoads.patchId, patches.id))
      .groupBy(patches.id)
      .orderBy(sql`count(${patchLoads.id}) DESC`);

    const result = rows.map((row) => ({
      name: row.name,
      file: `${row.name}.json`,
      author: row.author,
      description: row.description ?? "",
      soundCount: row.soundCount,
      sourceUrl: row.sourceUrl,
      loads: row.loads,
    }));

    return NextResponse.json(result, {
      headers: {
        "Cache-Control":
          "public, max-age=60, s-maxage=60, stale-while-revalidate=300",
      },
    });
  } catch (err) {
    return NextResponse.json({ error: String(err) }, { status: 500 });
  }
}
