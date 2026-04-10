import { type NextRequest, NextResponse } from "next/server";
import { getDb } from "../../../lib/db";

export const dynamic = "force-dynamic";
export const preferredRegion = "iad1";

interface PatchJson {
  name: string;
  author?: string;
  version?: string;
  description?: string;
  tags?: string[];
  sounds: Record<string, unknown>;
}

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
    const sql = await getDb();
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
    const tags = patchData.tags ?? [];
    const author = patchData.author ?? "unknown";
    const description = patchData.description ?? "";

    const existing = await sql`
      SELECT id FROM patches WHERE name = ${slug}
    `;

    let patchId: number;

    if (existing.length > 0) {
      patchId = existing[0].id as number;
      await sql`
        UPDATE patches SET
          author = ${author},
          description = ${description},
          tags = ${tags as string[]},
          sound_count = ${soundCount},
          source_url = ${url},
          patch_json = ${JSON.stringify(patchData)}::jsonb
        WHERE id = ${patchId}
      `;
    } else {
      const inserted = await sql`
        INSERT INTO patches (name, author, description, tags, sound_count, url, source_url, patch_json)
        VALUES (
          ${slug},
          ${author},
          ${description},
          ${tags as string[]},
          ${soundCount},
          ${slug},
          ${url},
          ${JSON.stringify(patchData)}::jsonb
        )
        RETURNING id
      `;
      patchId = inserted[0].id as number;
    }

    await sql`DELETE FROM patch_sounds WHERE patch_id = ${patchId}`;

    const soundNames = Object.keys(patchData.sounds);
    await Promise.all(
      soundNames.map(
        (soundName) =>
          sql`
          INSERT INTO patch_sounds (patch_id, name, category)
          VALUES (${patchId}, ${soundName}, ${"sounds"})
        `,
      ),
    );

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
    const sql = await getDb();
    const rows = await sql`
      SELECT
        p.name,
        p.author,
        p.description,
        p.tags,
        p.sound_count,
        p.source_url,
        COUNT(pl.id)::int AS loads
      FROM patches p
      LEFT JOIN patch_loads pl ON pl.patch_id = p.id
      GROUP BY p.id
      ORDER BY loads DESC
    `;

    const patches = rows.map((row) => ({
      name: row.name as string,
      file: `${row.name as string}.json`,
      author: row.author as string,
      description: (row.description as string) ?? "",
      tags: (row.tags as string[]) ?? [],
      soundCount: row.sound_count as number,
      sourceUrl: (row.source_url as string) ?? null,
      loads: Number(row.loads),
    }));

    return NextResponse.json(patches, {
      headers: {
        "Cache-Control":
          "public, max-age=60, s-maxage=60, stale-while-revalidate=300",
      },
    });
  } catch (err) {
    return NextResponse.json({ error: String(err) }, { status: 500 });
  }
}
