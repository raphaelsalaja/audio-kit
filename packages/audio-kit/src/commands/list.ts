import * as p from "@clack/prompts";
import { getInstalledPacks, getPacksDir } from "./utils.js";

export async function list(_args: string[]) {
  p.intro("audio-kit list");

  const packs = await getInstalledPacks();

  if (packs.length === 0) {
    p.log.warn(`No packs found in ${getPacksDir()}`);
    p.outro("Run `audio-kit add` to install packs.");
    return;
  }

  const rows = packs.map(
    (pk) =>
      `  ${pk.name.padEnd(16)} ${String(pk.soundCount).padStart(3)} sounds   ${pk.description ?? ""}`,
  );

  p.note(rows.join("\n"), `${packs.length} pack(s) installed`);
  p.outro(getPacksDir());
}
