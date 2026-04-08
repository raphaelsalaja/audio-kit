import { describe, it, expect } from "vitest";
import { parseGitHubSource, isGitHubSource } from "../src/commands/utils.js";

describe("parseGitHubSource", () => {
  it("parses owner/repo shorthand", () => {
    const result = parseGitHubSource("raphaelsalaja/audio-kit");
    expect(result).toEqual({
      owner: "raphaelsalaja",
      repo: "audio-kit",
      branch: "main",
      path: "",
    });
  });

  it("parses full GitHub URL", () => {
    const result = parseGitHubSource(
      "https://github.com/raphaelsalaja/audio-kit",
    );
    expect(result).toEqual({
      owner: "raphaelsalaja",
      repo: "audio-kit",
      branch: "main",
      path: "",
    });
  });

  it("parses GitHub URL with branch", () => {
    const result = parseGitHubSource(
      "https://github.com/raphaelsalaja/audio-kit/tree/develop",
    );
    expect(result).toEqual({
      owner: "raphaelsalaja",
      repo: "audio-kit",
      branch: "develop",
      path: "",
    });
  });

  it("parses GitHub URL with branch and path", () => {
    const result = parseGitHubSource(
      "https://github.com/raphaelsalaja/audio-kit/tree/main/packs",
    );
    expect(result).toEqual({
      owner: "raphaelsalaja",
      repo: "audio-kit",
      branch: "main",
      path: "packs",
    });
  });

  it("returns null for a plain URL", () => {
    expect(parseGitHubSource("https://example.com/pack.json")).toBeNull();
  });

  it("returns null for a local path", () => {
    expect(parseGitHubSource("./packs/core.json")).toBeNull();
  });

  it("returns null for a single word", () => {
    expect(parseGitHubSource("audio-kit")).toBeNull();
  });

  it("returns null for empty string", () => {
    expect(parseGitHubSource("")).toBeNull();
  });
});

describe("isGitHubSource", () => {
  it("returns true for owner/repo", () => {
    expect(isGitHubSource("raphaelsalaja/audio-kit")).toBe(true);
  });

  it("returns true for GitHub URL", () => {
    expect(
      isGitHubSource("https://github.com/raphaelsalaja/audio-kit"),
    ).toBe(true);
  });

  it("returns false for a URL that is not GitHub", () => {
    expect(isGitHubSource("https://example.com/pack.json")).toBe(false);
  });

  it("returns false for a single word", () => {
    expect(isGitHubSource("packs")).toBe(false);
  });
});
