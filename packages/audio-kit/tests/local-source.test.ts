import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { mkdirSync, writeFileSync, rmSync } from "node:fs";
import { join } from "node:path";
import { tmpdir } from "node:os";
import {
  isLocalSource,
  discoverPacksFromLocal,
} from "../src/commands/utils.js";

describe("isLocalSource", () => {
  let tempDir: string;

  beforeEach(() => {
    tempDir = join(tmpdir(), `audio-kit-test-${Date.now()}-${Math.random().toString(36).slice(2)}`);
    mkdirSync(tempDir, { recursive: true });
  });

  afterEach(() => {
    rmSync(tempDir, { recursive: true, force: true });
  });

  it("returns true for an existing directory", () => {
    expect(isLocalSource(tempDir)).toBe(true);
  });

  it("returns true for an existing file", () => {
    const file = join(tempDir, "pack.json");
    writeFileSync(file, "{}");
    expect(isLocalSource(file)).toBe(true);
  });

  it("returns false for a non-existent path", () => {
    expect(isLocalSource(join(tempDir, "nope"))).toBe(false);
  });

  it("returns false for HTTP URLs", () => {
    expect(isLocalSource("https://example.com/pack.json")).toBe(false);
  });

  it("returns false for owner/repo shorthand", () => {
    expect(isLocalSource("raphaelsalaja/audio-kit")).toBe(false);
  });
});

describe("discoverPacksFromLocal", () => {
  let tempDir: string;

  beforeEach(() => {
    tempDir = join(tmpdir(), `audio-kit-test-${Date.now()}-${Math.random().toString(36).slice(2)}`);
    mkdirSync(tempDir, { recursive: true });
  });

  afterEach(() => {
    rmSync(tempDir, { recursive: true, force: true });
  });

  it("discovers a single pack file", async () => {
    const file = join(tempDir, "core.json");
    writeFileSync(
      file,
      JSON.stringify({
        name: "Core",
        description: "Core UI sounds",
        sounds: { click: {}, pop: {}, toggle: {} },
      }),
    );

    const packs = await discoverPacksFromLocal(file);
    expect(packs).toHaveLength(1);
    expect(packs[0].name).toBe("Core");
    expect(packs[0].soundCount).toBe(3);
    expect(packs[0].description).toBe("Core UI sounds");
  });

  it("discovers packs from a directory", async () => {
    writeFileSync(
      join(tempDir, "pack-a.json"),
      JSON.stringify({ name: "A", sounds: { click: {} } }),
    );
    writeFileSync(
      join(tempDir, "pack-b.json"),
      JSON.stringify({ name: "B", sounds: { pop: {}, toggle: {} } }),
    );
    writeFileSync(join(tempDir, "not-a-pack.json"), JSON.stringify({ foo: 1 }));

    const packs = await discoverPacksFromLocal(tempDir);
    expect(packs).toHaveLength(2);

    const names = packs.map((p) => p.name).sort();
    expect(names).toEqual(["A", "B"]);
  });

  it("throws for an invalid single pack file", async () => {
    const file = join(tempDir, "bad.json");
    writeFileSync(file, JSON.stringify({ foo: "bar" }));

    await expect(discoverPacksFromLocal(file)).rejects.toThrow(
      "not a valid sound pack",
    );
  });

  it("skips index.json in directories", async () => {
    writeFileSync(
      join(tempDir, "index.json"),
      JSON.stringify({ name: "Index", sounds: { x: {} } }),
    );
    writeFileSync(
      join(tempDir, "real.json"),
      JSON.stringify({ name: "Real", sounds: { y: {} } }),
    );

    const packs = await discoverPacksFromLocal(tempDir);
    expect(packs).toHaveLength(1);
    expect(packs[0].name).toBe("Real");
  });

  it("returns empty array for directory with no valid packs", async () => {
    writeFileSync(join(tempDir, "readme.txt"), "not json");
    const packs = await discoverPacksFromLocal(tempDir);
    expect(packs).toEqual([]);
  });
});
