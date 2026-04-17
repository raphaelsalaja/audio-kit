import { count, desc, eq, sql } from "drizzle-orm";
import { cache } from "react";
import { getDb } from "./db";
import type { Patch } from "./schema";
import { patches, patchLoads, patchSounds } from "./schema";

export type PatchWithStats = Patch & { loads: number };

export type PatchSound = {
  id: number;
  name: string;
  category: string;
  description: string | null;
};

export type PatchSoundsByCategory = {
  category: string;
  sounds: PatchSound[];
};

export type SortMode = "alltime" | "trending" | "hot" | "popular";

export async function getPatchesAllTime(): Promise<PatchWithStats[]> {
  const db = await getDb();
  const rows = await db
    .select({
      id: patches.id,
      name: patches.name,
      author: patches.author,
      description: patches.description,
      soundCount: patches.soundCount,
      url: patches.url,
      source: patches.source,
      sourceUrl: patches.sourceUrl,
      patchJson: patches.patchJson,
      createdAt: patches.createdAt,
      version: patches.version,
      updatedAt: patches.updatedAt,
      license: patches.license,
      compatibility: patches.compatibility,
      featured: patches.featured,
      verified: patches.verified,
      forkedFrom: patches.forkedFrom,
      sourceTypes: patches.sourceTypes,
      hasEffects: patches.hasEffects,
      hasLayers: patches.hasLayers,
      fileSize: patches.fileSize,
      loads: count(patchLoads.id),
    })
    .from(patches)
    .leftJoin(patchLoads, eq(patchLoads.patchId, patches.id))
    .groupBy(patches.id)
    .orderBy(desc(count(patchLoads.id)));

  return rows;
}

export async function getPatchesTrending(): Promise<PatchWithStats[]> {
  const db = await getDb();
  const result = await db.execute(sql`
    SELECT p.*, COUNT(pl.id)::int AS loads
    FROM patches p
    LEFT JOIN patch_loads pl ON pl.patch_id = p.id
      AND pl.loaded_at > NOW() - INTERVAL '24 hours'
    GROUP BY p.id
    ORDER BY loads DESC
  `);
  return mapRawRows(Array.from(result.rows));
}

export async function getPatchesHot(): Promise<PatchWithStats[]> {
  const db = await getDb();
  const result = await db.execute(sql`
    SELECT p.*,
      SUM(
        CASE WHEN pl.loaded_at IS NOT NULL
          THEN EXP(-0.1 * EXTRACT(EPOCH FROM (NOW() - pl.loaded_at)) / 86400.0)
          ELSE 0
        END
      )::float AS loads
    FROM patches p
    LEFT JOIN patch_loads pl ON pl.patch_id = p.id
      AND pl.loaded_at > NOW() - INTERVAL '7 days'
    GROUP BY p.id
    ORDER BY loads DESC
  `);
  return mapRawRows(Array.from(result.rows));
}

export const getPatchByName = cache(
  async (name: string): Promise<PatchWithStats | null> => {
    const db = await getDb();
    const rows = await db
      .select({
        id: patches.id,
        name: patches.name,
        author: patches.author,
        description: patches.description,
        soundCount: patches.soundCount,
        url: patches.url,
        source: patches.source,
        sourceUrl: patches.sourceUrl,
        patchJson: patches.patchJson,
        createdAt: patches.createdAt,
        version: patches.version,
        updatedAt: patches.updatedAt,
        license: patches.license,
        compatibility: patches.compatibility,
        featured: patches.featured,
        verified: patches.verified,
        forkedFrom: patches.forkedFrom,
        sourceTypes: patches.sourceTypes,
        hasEffects: patches.hasEffects,
        hasLayers: patches.hasLayers,
        fileSize: patches.fileSize,
        loads: count(patchLoads.id),
      })
      .from(patches)
      .leftJoin(patchLoads, eq(patchLoads.patchId, patches.id))
      .where(eq(patches.name, name))
      .groupBy(patches.id);

    if (rows.length === 0) return null;
    return rows[0];
  },
);

export async function getPatchSounds(
  patchId: number,
): Promise<PatchSoundsByCategory[]> {
  const db = await getDb();
  const rows = await db
    .select()
    .from(patchSounds)
    .where(eq(patchSounds.patchId, patchId))
    .orderBy(patchSounds.category, patchSounds.name);

  const grouped = new Map<string, PatchSound[]>();
  for (const row of rows) {
    const sound: PatchSound = {
      id: row.id,
      name: row.name,
      category: row.category,
      description: row.description,
    };
    const existing = grouped.get(sound.category);
    if (existing) existing.push(sound);
    else grouped.set(sound.category, [sound]);
  }

  return Array.from(grouped, ([category, sounds]) => ({ category, sounds }));
}

export async function getPatches(sort: SortMode): Promise<PatchWithStats[]> {
  switch (sort) {
    case "trending":
      return getPatchesTrending();
    case "hot":
      return getPatchesHot();
    case "popular":
      return getPatchesAllTime();
    default:
      return getPatchesAllTime();
  }
}

function mapRawRows(rows: Record<string, unknown>[]): PatchWithStats[] {
  return rows.map((r) => ({
    id: r.id as number,
    name: r.name as string,
    author: r.author as string,
    description: r.description as string,
    soundCount: (r.sound_count as number) ?? 0,
    url: r.url as string,
    source: (r.source as string) ?? null,
    sourceUrl: (r.source_url as string) ?? null,
    patchJson: r.patch_json as Patch["patchJson"],
    createdAt: r.created_at as Date,
    version: (r.version as string) ?? null,
    updatedAt: r.updated_at as Date,
    license: (r.license as string) ?? null,
    compatibility: (r.compatibility as string) ?? null,
    featured: (r.featured as boolean) ?? false,
    verified: (r.verified as boolean) ?? false,
    forkedFrom: (r.forked_from as number) ?? null,
    sourceTypes: (r.source_types as string[]) ?? [],
    hasEffects: (r.has_effects as boolean) ?? false,
    hasLayers: (r.has_layers as boolean) ?? false,
    fileSize: (r.file_size as number) ?? 0,
    loads: Number(r.loads),
  }));
}
