import { unlink } from "node:fs/promises";
import { join } from "node:path";
import * as p from "@clack/prompts";
import { getInstalledPacks, getPacksDir } from "./utils.js";

export async function remove(_args: string[]) {
  p.intro("audio-kit remove");

  const packs = await getInstalledPacks();

  if (packs.length === 0) {
    p.log.warn("No packs installed.");
    p.outro("Nothing to remove.");
    return;
  }

  const selected = await p.multiselect({
    message: "Select packs to remove",
    options: packs.map((pk) => ({
      value: pk.file,
      label: pk.name,
      hint: `${pk.soundCount} sounds`,
    })),
  });

  if (p.isCancel(selected)) {
    p.cancel("Cancelled.");
    process.exit(0);
  }

  const files = selected as string[];
  if (files.length === 0) {
    p.outro("No packs selected.");
    return;
  }

  const confirmed = await p.confirm({
    message: `Remove ${files.length} pack(s)?`,
  });

  if (p.isCancel(confirmed) || !confirmed) {
    p.cancel("Cancelled.");
    process.exit(0);
  }

  const dir = getPacksDir();
  const removed: string[] = [];

  for (const file of files) {
    try {
      await unlink(join(dir, file));
      const pk = packs.find((p) => p.file === file);
      removed.push(pk?.name ?? file);
    } catch (err) {
      p.log.warn(`Failed to remove ${file}: ${err}`);
    }
  }

  p.note(removed.map((n) => `  - ${n}`).join("\n"), "Removed packs");
  p.outro("Done!");
}
