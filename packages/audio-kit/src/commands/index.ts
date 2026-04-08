import pc from "picocolors";
import { add } from "./add.js";
import { check } from "./check.js";
import { find } from "./find.js";
import { init } from "./init.js";
import { list } from "./list.js";
import { remove } from "./remove.js";
import { update } from "./update.js";

const COMMANDS: Record<string, (args: string[]) => Promise<void>> = {
  add,
  a: add,
  find,
  search: find,
  f: find,
  s: find,
  list,
  ls: list,
  remove,
  rm: remove,
  check,
  update,
  upgrade: update,
  init,
};

function showBanner() {
  console.log();
  console.log(pc.bold("audio-kit"));
  console.log();
  console.log(pc.dim("Manage sound packs for your project."));
  console.log();
  console.log(
    `  ${pc.dim("$")} ${pc.reset("npx audio-kit add")} ${pc.dim("[source]")}    ${pc.dim("Install sound packs")}`,
  );
  console.log(
    `  ${pc.dim("$")} ${pc.reset("npx audio-kit find")} ${pc.dim("[query]")}    ${pc.dim("Search for packs")}`,
  );
  console.log(
    `  ${pc.dim("$")} ${pc.reset("npx audio-kit list")}              ${pc.dim("List installed packs")}`,
  );
  console.log(
    `  ${pc.dim("$")} ${pc.reset("npx audio-kit remove")}            ${pc.dim("Remove installed packs")}`,
  );
  console.log();
  console.log(
    `  ${pc.dim("$")} ${pc.reset("npx audio-kit check")}             ${pc.dim("Check for updates")}`,
  );
  console.log(
    `  ${pc.dim("$")} ${pc.reset("npx audio-kit update")}            ${pc.dim("Update installed packs")}`,
  );
  console.log();
  console.log(
    `  ${pc.dim("$")} ${pc.reset("npx audio-kit init")}              ${pc.dim("Create a new sound pack")}`,
  );
  console.log();
  console.log(
    `${pc.dim("try:")} npx audio-kit add raphaelsalaja/audio-kit`,
  );
  console.log();
}

function showHelp() {
  console.log(`
${pc.bold("Usage:")} audio-kit <command> [options]

${pc.bold("Manage Packs:")}
  add [source]    Install sound packs
  find [query]    Search for packs in the registry
  list, ls        List installed packs
  remove, rm      Remove installed packs

${pc.bold("Updates:")}
  check           Check for available updates
  update          Update all installed packs

${pc.bold("Project:")}
  init            Create a new sound pack

${pc.bold("Add Options:")}
  -l, --list      Preview available packs without installing
  -y, --yes       Skip confirmation prompts
  --pack <name>   Install a specific pack by name

${pc.bold("Remove Options:")}
  -y, --yes       Skip confirmation prompts

${pc.bold("Source Formats:")}
  ./local/path                    Local file or directory
  owner/repo                      GitHub shorthand
  https://github.com/user/repo    Full GitHub URL
  https://...pack.json            Direct URL to a pack file
  ${pc.dim("(no argument)")}                   Browse the registry

${pc.bold("Options:")}
  --help, -h      Show this help message
  --version, -v   Show version number

${pc.bold("Examples:")}
  ${pc.dim("$")} audio-kit add raphaelsalaja/audio-kit
  ${pc.dim("$")} audio-kit add ./packs/
  ${pc.dim("$")} audio-kit add raphaelsalaja/audio-kit --list
  ${pc.dim("$")} audio-kit add --pack core -y
  ${pc.dim("$")} audio-kit remove core -y
  ${pc.dim("$")} audio-kit find ambient
  ${pc.dim("$")} audio-kit check
  ${pc.dim("$")} audio-kit update
`);
}

export async function run() {
  const args = process.argv.slice(2);
  const command = args[0];

  if (!command) {
    showBanner();
    return;
  }

  if (command === "--help" || command === "-h") {
    showHelp();
    return;
  }

  if (command === "--version" || command === "-v") {
    try {
      const { readFileSync } = await import("node:fs");
      const { join, dirname } = await import("node:path");
      const { fileURLToPath } = await import("node:url");
      const __dirname = dirname(fileURLToPath(import.meta.url));
      const pkg = JSON.parse(
        readFileSync(join(__dirname, "..", "package.json"), "utf-8"),
      );
      console.log(pkg.version);
    } catch {
      console.log("0.0.0");
    }
    return;
  }

  const handler = COMMANDS[command];
  if (!handler) {
    console.log(pc.red(`Unknown command: ${command}`));
    console.log(
      `Run ${pc.bold("audio-kit --help")} for usage.`,
    );
    process.exit(1);
  }

  await handler(args.slice(1));
}
