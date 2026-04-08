import { describe, it, expect, beforeEach, afterEach } from "vitest";
import { mkdirSync, rmSync, realpathSync } from "node:fs";
import { join } from "node:path";
import { tmpdir } from "node:os";
import { getPacksDir } from "../src/commands/utils.js";

describe("getPacksDir", () => {
  let tempDir: string;
  let originalCwd: string;

  beforeEach(() => {
    originalCwd = process.cwd();
    const raw = join(tmpdir(), `audio-kit-test-${Date.now()}-${Math.random().toString(36).slice(2)}`);
    mkdirSync(raw, { recursive: true });
    tempDir = realpathSync(raw);
  });

  afterEach(() => {
    process.chdir(originalCwd);
    rmSync(tempDir, { recursive: true, force: true });
  });

  it("returns packs/ when no public/ directory exists", () => {
    process.chdir(tempDir);
    const result = getPacksDir();
    expect(result).toBe(join(tempDir, "packs"));
  });

  it("returns public/packs/ when public/ directory exists", () => {
    mkdirSync(join(tempDir, "public"));
    process.chdir(tempDir);
    const result = getPacksDir();
    expect(result).toBe(join(tempDir, "public", "packs"));
  });
});
