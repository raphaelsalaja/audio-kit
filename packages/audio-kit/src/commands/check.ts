import pc from "picocolors";
import { fetchPackIndex, getInstalledPacks } from "./utils.js";

export async function check(_args: string[]) {
  console.log();
  console.log(pc.bold("audio-kit check"));
  console.log();
  console.log(pc.dim("Checking for updates..."));
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

  const available: string[] = [];
  const notInRegistry: string[] = [];

  for (const pack of installed) {
    const entry = registryMap.get(pack.name.toLowerCase());
    if (entry) {
      available.push(pack.name);
    } else {
      notInRegistry.push(pack.name);
    }
  }

  if (available.length === 0) {
    console.log(pc.dim("No installed packs found in the registry."));
    console.log();
    return;
  }

  console.log(`${pc.green("✓")} ${available.length} pack(s) can be refreshed from the registry:`);
  console.log();
  for (const name of available) {
    console.log(`  ${pc.cyan("↑")} ${name}`);
  }
  console.log();
  console.log(
    `${pc.dim("Run")} ${pc.reset("npx audio-kit update")} ${pc.dim("to re-download latest versions")}`,
  );

  if (notInRegistry.length > 0) {
    console.log();
    console.log(
      pc.dim(`${notInRegistry.length} pack(s) not found in registry:`),
    );
    for (const name of notInRegistry) {
      console.log(`  ${pc.dim("•")} ${name}`);
    }
  }

  console.log();
}
