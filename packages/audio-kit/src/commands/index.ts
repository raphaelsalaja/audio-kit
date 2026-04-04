import * as p from "@clack/prompts";
import { add } from "./add.js";
import { init } from "./init.js";
import { list } from "./list.js";
import { remove } from "./remove.js";

const COMMANDS: Record<string, (args: string[]) => Promise<void>> = {
  add,
  list,
  ls: list,
  remove,
  rm: remove,
  init,
};

export async function run() {
  const args = process.argv.slice(2);
  const command = args[0];

  if (!command) {
    p.intro("audio-kit");
    p.log.info("Manage sound packs for your project.\n");
    p.log.message(
      [
        "Commands:",
        "  add [source]  Install sound packs",
        "  list          List installed packs",
        "  remove        Remove installed packs",
        "  init          Create a new sound pack",
        "",
        "Source formats:",
        "  owner/repo                    GitHub shorthand",
        "  https://github.com/user/repo  Full GitHub URL",
        "  https://...pack.json          Direct URL to a pack file",
        "  (no argument)                 Browse the registry",
      ].join("\n"),
    );
    p.outro("Run audio-kit <command> to get started.");
    return;
  }

  const handler = COMMANDS[command];
  if (!handler) {
    p.log.error(`Unknown command: ${command}`);
    process.exit(1);
  }

  await handler(args.slice(1));
}
