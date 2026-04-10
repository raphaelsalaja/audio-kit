import * as p from "@clack/prompts";
import { fetchPatchIndex, getInstalledPatches } from "./utils.js";

export async function check(_args: string[]) {
  p.intro("@web-kits/audio check");

  const installed = await getInstalledPatches();

  if (installed.length === 0) {
    p.log.warn("No patches installed.");
    p.outro("Install patches with npx @web-kits/audio add");
    return;
  }

  const s = p.spinner();
  s.start("Checking for updates...");

  let registry: Awaited<ReturnType<typeof fetchPatchIndex>>;
  try {
    registry = await fetchPatchIndex();
    s.stop(`Checked ${registry.length} registry patch(es)`);
  } catch (err) {
    s.stop("Failed to fetch registry.");
    p.log.error(String(err));
    process.exit(1);
  }

  const registryMap = new Map(registry.map((e) => [e.name.toLowerCase(), e]));

  const available: string[] = [];
  const notInRegistry: string[] = [];

  for (const entry of installed) {
    const regEntry = registryMap.get(entry.name.toLowerCase());
    if (regEntry) {
      available.push(entry.name);
    } else {
      notInRegistry.push(entry.name);
    }
  }

  if (available.length === 0) {
    p.log.warn("No installed patches found in the registry.");
    p.outro("");
    return;
  }

  p.note(
    available.map((name) => `  ↑ ${name}`).join("\n"),
    `${available.length} patch(es) available`,
  );

  if (notInRegistry.length > 0) {
    p.log.warn(
      [
        `${notInRegistry.length} patch(es) not found in registry:`,
        ...notInRegistry.map((name) => `  • ${name}`),
      ].join("\n"),
    );
  }

  p.outro("Run npx @web-kits/audio update to re-download latest versions");
}
