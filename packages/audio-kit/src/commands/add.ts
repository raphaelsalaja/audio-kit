import { existsSync, mkdirSync } from "node:fs";
import { writeFile } from "node:fs/promises";
import { join } from "node:path";
import * as p from "@clack/prompts";
import {
  discoverPacksFromGitHub,
  fetchPackIndex,
  fetchPackJson,
  getInstalledPacks,
  getPacksDir,
  isGitHubSource,
  registerPack,
  validatePack,
} from "./utils.js";

export async function add(args: string[]) {
  p.intro("audio-kit add");

  const source = args[0];

  if (!source) {
    await addFromRegistry();
    return;
  }

  if (source.startsWith("http") && source.endsWith(".json")) {
    await addFromUrl(source);
    return;
  }

  if (isGitHubSource(source)) {
    await addFromGitHub(source);
    return;
  }

  await addFromUrl(source);
}

async function addFromGitHub(source: string) {
  const s = p.spinner();
  s.start("Scanning repository for packs...");

  let discovered: Awaited<ReturnType<typeof discoverPacksFromGitHub>>;
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

  const installed = await getInstalledPacks();
  const installedNames = new Set(installed.map((pk) => pk.name));

  const toInstall =
    discovered.length === 1
      ? discovered
      : await promptPackSelection(discovered, installedNames);

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

async function promptPackSelection(
  discovered: Awaited<ReturnType<typeof discoverPacksFromGitHub>>,
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

async function addFromUrl(url: string) {
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
    await writePack(data.name, data);
    registerPack(url);
  } catch (err) {
    s.stop("Failed to fetch pack.");
    p.log.error(String(err));
    process.exit(1);
  }
}

async function addFromRegistry() {
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

  const installed = await getInstalledPacks();
  const installedNames = new Set(installed.map((pk) => pk.name));

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

  const names = selected as string[];
  if (names.length === 0) {
    p.outro("No packs selected.");
    return;
  }

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
