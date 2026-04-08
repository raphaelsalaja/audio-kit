import { describe, it, expect } from "vitest";
import { parseAddOptions } from "../src/commands/add.js";
import { parseRemoveOptions } from "../src/commands/remove.js";

describe("parseAddOptions", () => {
  it("parses source with no flags", () => {
    const result = parseAddOptions(["raphaelsalaja/audio-kit"]);
    expect(result.source).toBe("raphaelsalaja/audio-kit");
    expect(result.options).toEqual({});
  });

  it("parses --yes flag", () => {
    const result = parseAddOptions(["raphaelsalaja/audio-kit", "--yes"]);
    expect(result.source).toBe("raphaelsalaja/audio-kit");
    expect(result.options.yes).toBe(true);
  });

  it("parses -y shorthand", () => {
    const result = parseAddOptions(["-y", "raphaelsalaja/audio-kit"]);
    expect(result.source).toBe("raphaelsalaja/audio-kit");
    expect(result.options.yes).toBe(true);
  });

  it("parses --list flag", () => {
    const result = parseAddOptions(["raphaelsalaja/audio-kit", "--list"]);
    expect(result.options.list).toBe(true);
  });

  it("parses -l shorthand", () => {
    const result = parseAddOptions(["-l", "raphaelsalaja/audio-kit"]);
    expect(result.options.list).toBe(true);
  });

  it("parses --pack flag with value", () => {
    const result = parseAddOptions(["--pack", "core"]);
    expect(result.options.pack).toBe("core");
    expect(result.source).toBeUndefined();
  });

  it("parses all flags together", () => {
    const result = parseAddOptions([
      "raphaelsalaja/audio-kit",
      "-y",
      "--pack",
      "core",
      "-l",
    ]);
    expect(result.source).toBe("raphaelsalaja/audio-kit");
    expect(result.options.yes).toBe(true);
    expect(result.options.list).toBe(true);
    expect(result.options.pack).toBe("core");
  });

  it("returns undefined source when no positional args", () => {
    const result = parseAddOptions(["--yes", "--list"]);
    expect(result.source).toBeUndefined();
  });

  it("handles empty args", () => {
    const result = parseAddOptions([]);
    expect(result.source).toBeUndefined();
    expect(result.options).toEqual({});
  });
});

describe("parseRemoveOptions", () => {
  it("parses pack names as positional args", () => {
    const result = parseRemoveOptions(["core", "minimal"]);
    expect(result.packs).toEqual(["core", "minimal"]);
    expect(result.options).toEqual({});
  });

  it("parses --yes flag", () => {
    const result = parseRemoveOptions(["core", "--yes"]);
    expect(result.packs).toEqual(["core"]);
    expect(result.options.yes).toBe(true);
  });

  it("parses -y shorthand", () => {
    const result = parseRemoveOptions(["-y", "core"]);
    expect(result.packs).toEqual(["core"]);
    expect(result.options.yes).toBe(true);
  });

  it("handles empty args", () => {
    const result = parseRemoveOptions([]);
    expect(result.packs).toEqual([]);
    expect(result.options).toEqual({});
  });
});
