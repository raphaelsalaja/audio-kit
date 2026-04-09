import { unlink } from "node:fs/promises";
import { join } from "node:path";
import * as p from "@clack/prompts";
import { getInstalledPacks, getPacksDir } from "./utils.js";

export interface RemoveOptions {
  yes?: boolean;
}

export function parseRemoveOptions(args: string[]): {
  packs: string[];
  options: RemoveOptions;
} {
  const options: RemoveOptions = {};
  const packs: string[] = [];

  for (let i = 0; i < args.length; i++) {
    const arg = args[i];
    if (arg === "-y" || arg === "--yes") {
      options.yes = true;
    } else if (arg && !arg.startsWith("-")) {
      packs.push(arg);
    }
  }

  return { packs, options };
}

export async function remove(args: string[]) {
  const { packs: packNames, options } = parseRemoveOptions(args);

  p.intro("@web-kits/audio remove");

  const packs = await getInstalledPacks();

  if (packs.length === 0) {
    p.log.warn("No packs installed.");
    p.outro("Nothing to remove.");
    return;
  }

  let files: string[];

  if (packNames.length > 0) {
    const matched = packs.filter((pk) =>
      packNames.some((n) => n.toLowerCase() === pk.name.toLowerCase()),
    );
    if (matched.length === 0) {
      p.log.error(`No matching packs found for: ${packNames.join(", ")}`);
      return;
    }
    files = matched.map((pk) => pk.file);
  } else {
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

    files = selected as string[];
    if (files.length === 0) {
      p.outro("No packs selected.");
      return;
    }
  }

  if (!options.yes) {
    const confirmed = await p.confirm({
      message: `Remove ${files.length} pack(s)?`,
    });

    if (p.isCancel(confirmed) || !confirmed) {
      p.cancel("Cancelled.");
      process.exit(0);
    }
  }

  const dir = getPacksDir();
  const removed: string[] = [];

  for (const file of files) {
    try {
      await unlink(join(dir, file));
      const pk = packs.find((item) => item.file === file);
      removed.push(pk?.name ?? file);
    } catch (err) {
      p.log.warn(`Failed to remove ${file}: ${err}`);
    }
  }

  p.note(removed.map((n) => `  - ${n}`).join("\n"), "Removed packs");
  p.outro("Done!");
}
