import { count, desc, eq } from "drizzle-orm";
import { cache } from "react";
import { getDb } from ".";
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
