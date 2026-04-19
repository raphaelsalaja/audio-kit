import type { PatchJson } from "./schema";

interface SoundDef {
  source?: { type?: string };
  layers?: { source?: { type?: string }; effects?: unknown[] }[];
  effects?: unknown[];
}

export interface DerivedPatchMeta {
  sourceTypes: string[];
  hasEffects: boolean;
  hasLayers: boolean;
  fileSize: number;
  categories: Map<string, string>;
}

const CATEGORY_PATTERNS: [RegExp, string][] = [
  [/^(tap|click|press)/, "interaction"],
  [/^(toggle|switch|checkbox|radio)/, "toggle"],
  [/^(hover|focus)/, "feedback"],
  [/^(select|deselect|option)/, "selection"],
  [/^(expand|collapse|open|close|slide)/, "transition"],
  [/^(success|error|warning|info|alert|notification)/, "notification"],
  [/^(key|type)/, "input"],
  [/^(tab|nav|menu|page)/, "navigation"],
  [/^(drag|drop|move|resize)/, "gesture"],
  [/^(load|save|upload|download|sync)/, "system"],
];

function categorizeSound(name: string): string {
  const lower = name.toLowerCase();
  for (const [re, cat] of CATEGORY_PATTERNS) {
    if (re.test(lower)) return cat;
  }
  return "general";
}

export function derivePatchMeta(patchJson: PatchJson): DerivedPatchMeta {
  const sourceTypeSet = new Set<string>();
  let hasEffects = false;
  let hasLayers = false;
  const categories = new Map<string, string>();

  const sounds = patchJson.sounds as Record<string, SoundDef>;

  for (const [name, sound] of Object.entries(sounds)) {
    categories.set(name, categorizeSound(name));

    if (sound.effects?.length) hasEffects = true;

    if (sound.source?.type) {
      sourceTypeSet.add(sound.source.type);
    }

    if (sound.layers) {
      hasLayers = true;
      for (const layer of sound.layers) {
        if (layer.source?.type) sourceTypeSet.add(layer.source.type);
        if (layer.effects?.length) hasEffects = true;
      }
    }
  }

  return {
    sourceTypes: Array.from(sourceTypeSet).sort(),
    hasEffects,
    hasLayers,
    fileSize: JSON.stringify(patchJson).length,
    categories,
  };
}
