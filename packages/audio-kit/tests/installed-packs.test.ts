import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";
import { mkdirSync, writeFileSync, rmSync } from "node:fs";
import { join } from "node:path";
import { tmpdir } from "node:os";
import { getInstalledPacks } from "../src/commands/utils.js";

describe("getInstalledPacks", () => {
  let tempDir: string;
  let originalCwd: string;

  beforeEach(() => {
    originalCwd = process.cwd();
    tempDir = join(tmpdir(), `audio-kit-test-${Date.now()}-${Math.random().toString(36).slice(2)}`);
    mkdirSync(tempDir, { recursive: true });
    process.chdir(tempDir);
  });

  afterEach(() => {
    process.chdir(originalCwd);
    rmSync(tempDir, { recursive: true, force: true });
  });

  it("returns empty array when packs directory does not exist", async () => {
    const packs = await getInstalledPacks();
    expect(packs).toEqual([]);
  });

  it("returns packs from the packs directory", async () => {
    const packsDir = join(tempDir, "packs");
    mkdirSync(packsDir, { recursive: true });

    const packData = {
      name: "Test Pack",
      sounds: {
        click: { source: { type: "sine", frequency: 440 } },
        pop: { source: { type: "sine", frequency: 880 } },
      },
      description: "A test pack",
      tags: ["test"],
    };

    writeFileSync(
      join(packsDir, "test-pack.json"),
      JSON.stringify(packData),
    );

    const packs = await getInstalledPacks();
    expect(packs).toHaveLength(1);
    expect(packs[0].name).toBe("Test Pack");
    expect(packs[0].soundCount).toBe(2);
    expect(packs[0].description).toBe("A test pack");
    expect(packs[0].file).toBe("test-pack.json");
  });

  it("skips invalid JSON files", async () => {
    const packsDir = join(tempDir, "packs");
    mkdirSync(packsDir, { recursive: true });

    writeFileSync(join(packsDir, "invalid.json"), "not json");
    writeFileSync(
      join(packsDir, "valid.json"),
      JSON.stringify({ name: "Valid", sounds: { click: {} } }),
    );

    const packs = await getInstalledPacks();
    expect(packs).toHaveLength(1);
    expect(packs[0].name).toBe("Valid");
  });

  it("skips JSON files without name or sounds", async () => {
    const packsDir = join(tempDir, "packs");
    mkdirSync(packsDir, { recursive: true });

    writeFileSync(
      join(packsDir, "no-sounds.json"),
      JSON.stringify({ name: "No Sounds" }),
    );
    writeFileSync(
      join(packsDir, "no-name.json"),
      JSON.stringify({ sounds: { click: {} } }),
    );

    const packs = await getInstalledPacks();
    expect(packs).toEqual([]);
  });

  it("skips index.json", async () => {
    const packsDir = join(tempDir, "packs");
    mkdirSync(packsDir, { recursive: true });

    writeFileSync(
      join(packsDir, "index.json"),
      JSON.stringify({ name: "Index", sounds: { click: {} } }),
    );

    const packs = await getInstalledPacks();
    expect(packs).toEqual([]);
  });
});
