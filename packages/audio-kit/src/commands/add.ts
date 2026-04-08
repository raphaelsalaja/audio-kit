import { existsSync, mkdirSync } from "node:fs";
import { readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";
import * as p from "@clack/prompts";
import pc from "picocolors";
import {
  type DiscoveredPack,
  discoverPacksFromGitHub,
  discoverPacksFromLocal,
  fetchPackIndex,
  fetchPackJson,
  getInstalledPacks,
  getPacksDir,
  isGitHubSource,
  isLocalSource,
  registerPack,
  validatePack,
} from "./utils.js";

export interface AddOptions {
  list?: boolean;
  yes?: boolean;
  pack?: string;
}

export function parseAddOptions(args: string[]): {
  source: string | undefined;
  options: AddOptions;
} {
  const options: AddOptions = {};
  let source: string | undefined;

  for (let i = 0; i < args.length; i++) {
    const arg = args[i];
    if (arg === "-y" || arg === "--yes") {
      options.yes = true;
    } else if (arg === "-l" || arg === "--list") {
      options.list = true;
    } else if (arg === "--pack") {
      options.pack = args[++i];
    } else if (arg && !arg.startsWith("-")) {
      source = arg;
    }
  }

  return { source, options };
}

export async function add(args: string[]) {
  const { source, options } = parseAddOptions(args);

  p.intro("audio-kit add");

  if (!source) {
    await addFromRegistry(options);
    return;
  }

  if (isLocalSource(source)) {
    await addFromLocal(source, options);
    return;
  }

  if (source.startsWith("http") && source.endsWith(".json")) {
    await addFromUrl(source, options);
    return;
  }

  if (isGitHubSource(source)) {
    await addFromGitHub(source, options);
    return;
  }

  await addFromUrl(source, options);
}

async function addFromLocal(source: string, options: AddOptions) {
  const s = p.spinner();
  s.start("Scanning local path for packs...");

  let discovered: DiscoveredPack[];
  try {
    discovered = await discoverPacksFromLocal(source);
    s.stop(`Found ${discovered.length} pack(s)`);
  } catch (err) {
    s.stop("Failed to scan local path.");
    p.log.error(String(err));
    process.exit(1);
  }

  if (discovered.length === 0) {
    p.log.warn("No valid sound packs found at this path.");
    p.outro("Packs must be JSON files with a name and sounds object.");
    return;
  }

  if (options.list) {
    printPackList(discovered);
    return;
  }

  const toInstall = selectPacks(discovered, options);
  if (!toInstall || toInstall.length === 0) return;

  const installed = await getInstalledPacks();
  const installedNames = new Set(installed.map((pk) => pk.name));

  const final = options.yes
    ? toInstall
    : await confirmOverwrites(toInstall, installedNames);
  if (!final || final.length === 0) return;

  const dl = p.spinner();
  dl.start(`Installing ${final.length} pack(s)...`);

  const results: string[] = [];
  for (const pack of final) {
    try {
      const raw = await readFile(pack.downloadUrl, "utf-8");
      const data = JSON.parse(raw) as Record<string, unknown>;
      if (!validatePack(data)) {
        p.log.warn(`Skipping ${pack.name}: invalid pack format`);
        continue;
      }
      await writePack(pack.name, data);
      results.push(data.name);
    } catch (err) {
      p.log.warn(`Failed to install ${pack.name}: ${err}`);
    }
  }

  dl.stop(`Installed ${results.length} pack(s)`);
  p.note(results.map((n) => `  - ${n}`).join("\n"), "Installed packs");
  p.outro("Done!");
}

async function addFromGitHub(source: string, options: AddOptions) {
  const s = p.spinner();
  s.start("Scanning repository for packs...");

  let discovered: DiscoveredPack[];
  try {
    discovered = await discoverPacksFromGitHub(source);
    s.stop(`Found ${discovered.length} pack(s)`);
  } catch (err) {
    s.stop("Failed to scan repository.");
    p.log.error(String(err));
    process.exit(1);
  }

  if (discovered.length === 0) {
    p.log.warn("No valid sound packs found in this repository.");
    p.outro("Packs must be JSON files with a name and sounds object.");
    return;
  }

  if (options.list) {
    printPackList(discovered);
    return;
  }

  const installed = await getInstalledPacks();
  const installedNames = new Set(installed.map((pk) => pk.name));

  const toInstall = await resolvePackSelection(
    discovered,
    installedNames,
    options,
  );
  if (!toInstall || toInstall.length === 0) return;

  const dl = p.spinner();
  dl.start(`Installing ${toInstall.length} pack(s)...`);

  const results: string[] = [];
  for (const pack of toInstall) {
    try {
      const data = await fetchPackJson(pack.downloadUrl);
      if (!validatePack(data)) {
        p.log.warn(`Skipping ${pack.name}: invalid pack format`);
        continue;
      }
      await writePack(pack.name, data);
      registerPack(pack.downloadUrl);
      results.push(data.name);
    } catch (err) {
      p.log.warn(`Failed to install ${pack.name}: ${err}`);
    }
  }

  dl.stop(`Installed ${results.length} pack(s)`);

  p.note(results.map((n) => `  - ${n}`).join("\n"), "Installed packs");
  p.outro("Done!");
}

async function addFromUrl(url: string, options: AddOptions) {
  const s = p.spinner();
  s.start("Fetching pack...");

  try {
    const data = await fetchPackJson(url);
    if (!validatePack(data)) {
      s.stop("Invalid pack format.");
      p.log.error(
        "The fetched JSON is not a valid sound pack (missing name or sounds).",
      );
      process.exit(1);
    }
    s.stop(`Fetched "${data.name}"`);

    if (options.list) {
      console.log(
        `  ${pc.bold(data.name)}  ${pc.dim(`${Object.keys(data.sounds).length} sounds`)}`,
      );
      console.log();
      return;
    }

    await writePack(data.name, data);
    registerPack(url);
  } catch (err) {
    s.stop("Failed to fetch pack.");
    p.log.error(String(err));
    process.exit(1);
  }
}

async function addFromRegistry(options: AddOptions) {
  const s = p.spinner();
  s.start("Fetching available packs...");

  let index: Awaited<ReturnType<typeof fetchPackIndex>>;
  try {
    index = await fetchPackIndex();
    s.stop(`Found ${index.length} packs`);
  } catch (err) {
    s.stop("Failed to fetch pack index.");
    p.log.error(String(err));
    process.exit(1);
  }

  if (options.list) {
    console.log();
    for (const entry of index) {
      console.log(`  ${pc.bold(entry.name)}  ${pc.dim(entry.description)}`);
    }
    console.log();
    return;
  }

  const installed = await getInstalledPacks();
  const installedNames = new Set(installed.map((pk) => pk.name));

  let names: string[];

  if (options.pack) {
    const packName = options.pack;
    names = [packName];
    const match = index.find(
      (e) => e.name.toLowerCase() === packName.toLowerCase(),
    );
    if (!match) {
      p.log.error(`Pack "${packName}" not found in registry.`);
      process.exit(1);
    }
  } else if (options.yes) {
    names = index.map((e) => e.name);
  } else {
    const selected = await p.multiselect({
      message: "Select packs to install",
      options: index.map((entry) => ({
        value: entry.name,
        label: `${entry.name}${installedNames.has(entry.name) ? " (installed)" : ""}`,
        hint: entry.description,
      })),
    });

    if (p.isCancel(selected)) {
      p.cancel("Cancelled.");
      process.exit(0);
    }

    names = selected as string[];
    if (names.length === 0) {
      p.outro("No packs selected.");
      return;
    }
  }

  if (!options.yes) {
    const existing = names.filter((n) => installedNames.has(n));
    if (existing.length > 0) {
      const overwrite = await p.confirm({
        message: `${existing.length} pack(s) already installed. Overwrite?`,
      });
      if (p.isCancel(overwrite) || !overwrite) {
        p.cancel("Cancelled.");
        process.exit(0);
      }
    }
  }

  const dl = p.spinner();
  dl.start(`Downloading ${names.length} pack(s)...`);

  const results: string[] = [];
  for (const name of names) {
    try {
      const data = await fetchPackJson(name);
      if (!validatePack(data)) {
        p.log.warn(`Skipping ${name}: invalid pack format`);
        continue;
      }
      await writePack(name, data);
      results.push(data.name);
    } catch (err) {
      p.log.warn(`Failed to download ${name}: ${err}`);
    }
  }

  dl.stop(`Downloaded ${results.length} pack(s)`);

  p.note(results.map((n) => `  - ${n}`).join("\n"), "Installed packs");
  p.outro("Done!");
}

function printPackList(packs: DiscoveredPack[]) {
  console.log();
  for (const pack of packs) {
    const desc = pack.description ? `  ${pc.dim(pack.description)}` : "";
    console.log(
      `  ${pc.bold(pack.name)}  ${pc.dim(`${pack.soundCount} sounds`)}${desc}`,
    );
  }
  console.log();
}

function selectPacks(
  discovered: DiscoveredPack[],
  options: AddOptions,
): DiscoveredPack[] {
  if (options.pack) {
    const packName = options.pack;
    const match = discovered.filter(
      (d) => d.name.toLowerCase() === packName.toLowerCase(),
    );
    if (match.length === 0) {
      p.log.error(`Pack "${packName}" not found.`);
      process.exit(1);
    }
    return match;
  }
  if (options.yes) return discovered;
  return discovered;
}

async function resolvePackSelection(
  discovered: DiscoveredPack[],
  installedNames: Set<string>,
  options: AddOptions,
): Promise<DiscoveredPack[]> {
  if (options.pack) {
    const packName = options.pack;
    const match = discovered.filter(
      (d) => d.name.toLowerCase() === packName.toLowerCase(),
    );
    if (match.length === 0) {
      p.log.error(`Pack "${packName}" not found.`);
      process.exit(1);
    }
    return match;
  }

  if (options.yes) return discovered;

  if (discovered.length === 1) return discovered;

  return await promptPackSelection(discovered, installedNames);
}

async function promptPackSelection(
  discovered: DiscoveredPack[],
  installedNames: Set<string>,
) {
  const selected = await p.multiselect({
    message: "Select packs to install",
    options: discovered.map((pack) => ({
      value: pack.name,
      label: `${pack.name}${installedNames.has(pack.name) ? " (installed)" : ""}`,
      hint: pack.description
        ? `${pack.soundCount} sounds — ${pack.description}`
        : `${pack.soundCount} sounds`,
    })),
  });

  if (p.isCancel(selected)) {
    p.cancel("Cancelled.");
    process.exit(0);
  }

  const names = new Set(selected as string[]);
  return discovered.filter((d) => names.has(d.name));
}

async function confirmOverwrites(
  packs: DiscoveredPack[],
  installedNames: Set<string>,
): Promise<DiscoveredPack[]> {
  const existing = packs.filter((pk) => installedNames.has(pk.name));
  if (existing.length === 0) return packs;

  const overwrite = await p.confirm({
    message: `${existing.length} pack(s) already installed. Overwrite?`,
  });
  if (p.isCancel(overwrite) || !overwrite) {
    p.cancel("Cancelled.");
    process.exit(0);
  }
  return packs;
}

async function writePack(filename: string, data: Record<string, unknown>) {
  const dir = getPacksDir();
  if (!existsSync(dir)) {
    mkdirSync(dir, { recursive: true });
  }

  const packData = {
    $schema: "node_modules/audio-kit/schemas/pack.schema.json",
    ...data,
  };

  const slug = filename
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

  const target = join(dir, `${slug}.json`);
  await writeFile(target, `${JSON.stringify(packData, null, 2)}\n`, "utf-8");
}
