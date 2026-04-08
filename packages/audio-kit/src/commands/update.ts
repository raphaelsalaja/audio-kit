import * as p from "@clack/prompts";
import pc from "picocolors";
import {
  fetchPackIndex,
  fetchPackJson,
  getInstalledPacks,
  getPacksDir,
  validatePack,
} from "./utils.js";
import { existsSync, mkdirSync } from "node:fs";
import { writeFile } from "node:fs/promises";
import { join } from "node:path";

export async function update(_args: string[]) {
  console.log();
  console.log(pc.bold("audio-kit update"));
  console.log();

  const installed = await getInstalledPacks();

  if (installed.length === 0) {
    console.log(pc.dim("No packs installed."));
    console.log(
      pc.dim(`Install packs with ${pc.reset("npx audio-kit add")}`),
    );
    console.log();
    return;
  }

  let registry: Awaited<ReturnType<typeof fetchPackIndex>>;
  try {
    registry = await fetchPackIndex();
  } catch (err) {
    console.log(pc.red(`Failed to fetch registry: ${err}`));
    process.exit(1);
  }

  const registryMap = new Map(registry.map((e) => [e.name.toLowerCase(), e]));

  const toUpdate = installed.filter((pk) =>
    registryMap.has(pk.name.toLowerCase()),
  );

  if (toUpdate.length === 0) {
    console.log(pc.dim("No installed packs found in the registry."));
    console.log();
    return;
  }

  const s = p.spinner();
  s.start(`Updating ${toUpdate.length} pack(s)...`);

  let successCount = 0;
  let failCount = 0;

  const dir = getPacksDir();
  if (!existsSync(dir)) {
    mkdirSync(dir, { recursive: true });
  }

  for (const pack of toUpdate) {
    try {
      const data = await fetchPackJson(pack.name);
      if (!validatePack(data)) {
        failCount++;
        continue;
      }

      const packData = {
        $schema: "node_modules/audio-kit/schemas/pack.schema.json",
        ...data,
      };

      const slug = pack.name
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-|-$/g, "");

      const target = join(dir, `${slug}.json`);
      await writeFile(
        target,
        `${JSON.stringify(packData, null, 2)}\n`,
        "utf-8",
      );
      successCount++;
    } catch {
      failCount++;
    }
  }

  s.stop("Update complete");

  console.log();
  if (successCount > 0) {
    console.log(`${pc.green("✓")} Updated ${successCount} pack(s)`);
  }
  if (failCount > 0) {
    console.log(`${pc.red("✗")} Failed to update ${failCount} pack(s)`);
  }
  console.log();
}
