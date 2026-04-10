import { existsSync, mkdirSync } from "node:fs";
import { writeFile } from "node:fs/promises";
import { join } from "node:path";
import * as p from "@clack/prompts";
import {
  fetchPatchIndex,
  fetchPatchJson,
  generateModule,
  getInstalledPatches,
  getPatchesDir,
  regenerateIndex,
  validatePatch,
} from "./utils.js";

export async function update(_args: string[]) {
  p.intro("@web-kits/audio update");

  const installed = await getInstalledPatches();

  if (installed.length === 0) {
    p.log.warn("No patches installed.");
    p.outro("Install patches with npx @web-kits/audio add");
    return;
  }

  const s = p.spinner();
  s.start("Fetching registry...");

  let registry: Awaited<ReturnType<typeof fetchPatchIndex>>;
  try {
    registry = await fetchPatchIndex();
    s.stop(`Found ${registry.length} registry patch(es)`);
  } catch (err) {
    s.stop("Failed to fetch registry.");
    p.log.error(String(err));
    process.exit(1);
  }

  const registryMap = new Map(registry.map((e) => [e.name.toLowerCase(), e]));

  const toUpdate = installed.filter((pk) =>
    registryMap.has(pk.name.toLowerCase()),
  );

  if (toUpdate.length === 0) {
    p.log.warn("No installed patches found in the registry.");
    p.outro("");
    return;
  }

  const dl = p.spinner();
  dl.start(`Updating ${toUpdate.length} patch(es)...`);

  let successCount = 0;
  let failCount = 0;

  const dir = getPatchesDir();
  if (!existsSync(dir)) {
    mkdirSync(dir, { recursive: true });
  }

  for (const entry of toUpdate) {
    try {
      const data = await fetchPatchJson(entry.name);
      if (!validatePatch(data)) {
        failCount++;
        continue;
      }

      const slug = entry.name
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-|-$/g, "");

      const moduleSource = generateModule(
        data as { name: string; sounds: Record<string, unknown> },
      );
      const target = join(dir, `${slug}.ts`);
      await writeFile(target, moduleSource, "utf-8");
      successCount++;
    } catch {
      failCount++;
    }
  }

  await regenerateIndex(dir);

  dl.stop(`Updated ${successCount} patch(es)`);

  if (failCount > 0) {
    p.log.warn(`Failed to update ${failCount} patch(es)`);
  }

  p.outro("Done!");
}
