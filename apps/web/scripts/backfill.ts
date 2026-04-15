import { existsSync } from "node:fs";
import { readFile } from "node:fs/promises";
import { resolve } from "node:path";
import { neon } from "@neondatabase/serverless";
import { eq } from "drizzle-orm";
import { drizzle } from "drizzle-orm/neon-http";
import { derivePatchMeta } from "../lib/patch-derive";
import type { PatchJson } from "../lib/schema";
import * as schema from "../lib/schema";

const PATCHES_DIR = resolve(process.cwd(), "../../.web-kits");

async function main() {
  const url = process.env.DATABASE_URL;
  if (!url) throw new Error("DATABASE_URL is not set");

  const db = drizzle(neon(url), { schema });

  const allPatches = await db.select().from(schema.patches);

  console.log(`Found ${allPatches.length} patches to backfill`);

  for (const patch of allPatches) {
    const localPath = resolve(PATCHES_DIR, `${patch.name}.json`);
    let patchJson: PatchJson;

    if (existsSync(localPath)) {
      const raw = await readFile(localPath, "utf-8");
      patchJson = JSON.parse(raw) as PatchJson;
      console.log(`  loaded local file for ${patch.name}`);
    } else if (patch.patchJson) {
      patchJson = patch.patchJson;
    } else {
      console.log(`  skipping ${patch.name} (no patch_json or local file)`);
      continue;
    }

    const derived = derivePatchMeta(patchJson);

    await db
      .update(schema.patches)
      .set({
        description: patchJson.description ?? patch.description,
        version: patchJson.version ?? null,
        license: patchJson.license ?? null,
        compatibility: patchJson.compatibility ?? null,
        sourceTypes: derived.sourceTypes,
        hasEffects: derived.hasEffects,
        hasLayers: derived.hasLayers,
        fileSize: derived.fileSize,
        patchJson,
      })
      .where(eq(schema.patches.id, patch.id));

    await db
      .delete(schema.patchSounds)
      .where(eq(schema.patchSounds.patchId, patch.id));

    const soundEntries = Object.keys(patchJson.sounds).map((soundName) => ({
      patchId: patch.id,
      name: soundName,
      category: derived.categories.get(soundName) ?? "general",
    }));

    if (soundEntries.length > 0) {
      await db.insert(schema.patchSounds).values(soundEntries);
    }

    console.log(
      `  backfilled ${patch.name}: sources=[${derived.sourceTypes}] effects=${derived.hasEffects} layers=${derived.hasLayers} size=${derived.fileSize}`,
    );
  }

  console.log("Done!");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
