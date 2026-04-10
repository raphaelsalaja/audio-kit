import { describe, expect, it } from "vitest";
import { generateModule } from "../src/commands/utils.js";

describe("generateModule", () => {
  it("produces a TS module with defineSound exports", () => {
    const data = {
      name: "retro",
      sounds: {
        click: { source: { type: "sine", frequency: 440 } },
        pop: { source: { type: "sine", frequency: 880 } },
      },
    };

    const output = generateModule(data);

    expect(output).toContain(
      'import type { SoundDefinition, SoundPatch } from "@web-kits/audio"',
    );
    expect(output).toContain("export const click: SoundDefinition =");
    expect(output).toContain("export const pop: SoundDefinition =");
    expect(output).toContain("export const _patch: SoundPatch =");
    expect(output).toContain('"name":"retro"');
  });

  it("camelCases hyphenated sound names", () => {
    const data = {
      name: "ui",
      sounds: {
        "tab-switch": { source: { type: "sine" } },
      },
    };

    const output = generateModule(data);
    expect(output).toContain("export const tabSwitch: SoundDefinition =");
    expect(output).not.toContain("tab-switch: SoundDefinition =");
  });

  it("includes a patch comment for scanning", () => {
    const data = { name: "My Patch", sounds: {} };
    const output = generateModule(data);
    expect(output).toContain("// patch: My Patch");
  });
});
