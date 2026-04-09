import { describe, expect, it } from "vitest";
import { validatePack } from "../src/commands/utils.js";

describe("validatePack", () => {
  it("returns true for a valid pack with name and sounds", () => {
    const data = {
      name: "test-pack",
      sounds: { click: { source: { type: "sine" } } },
    };
    expect(validatePack(data)).toBe(true);
  });

  it("returns true for a pack with empty sounds object", () => {
    const data = { name: "empty", sounds: {} };
    expect(validatePack(data)).toBe(true);
  });

  it("returns false when name is missing", () => {
    const data = { sounds: { click: {} } };
    expect(validatePack(data)).toBe(false);
  });

  it("returns false when name is not a string", () => {
    const data = { name: 42, sounds: {} };
    expect(validatePack(data as Record<string, unknown>)).toBe(false);
  });

  it("returns false when sounds is missing", () => {
    const data = { name: "test" };
    expect(validatePack(data as Record<string, unknown>)).toBe(false);
  });

  it("returns false when sounds is null", () => {
    const data = { name: "test", sounds: null };
    expect(validatePack(data as Record<string, unknown>)).toBe(false);
  });

  it("returns false when sounds is a string", () => {
    const data = { name: "test", sounds: "not-an-object" };
    expect(validatePack(data as Record<string, unknown>)).toBe(false);
  });

  it("returns false for empty object", () => {
    expect(validatePack({})).toBe(false);
  });
});
