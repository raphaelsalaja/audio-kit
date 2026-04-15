import { faker } from "@faker-js/faker";
import type { PatchWithStats } from "./patches";

const SOURCE_TYPES = [
  "oscillator",
  "sampler",
  "noise",
  "wavetable",
  "granular",
];
const TAGS = [
  "ambient",
  "bass",
  "bells",
  "brass",
  "drums",
  "fx",
  "keys",
  "lead",
  "pad",
  "pluck",
  "strings",
  "synth",
  "texture",
  "vocal",
];

function pickRandom<T>(arr: T[], min = 1, max = 3): T[] {
  return faker.helpers.arrayElements(arr, { min, max });
}

function fakePatch(id: number): PatchWithStats {
  const name = faker.helpers.slugify(
    `${faker.word.adjective()}-${faker.word.noun()}`,
  );
  const author = faker.internet.username().toLowerCase();
  const tags = pickRandom(TAGS, 1, 4);
  const sourceTypes = pickRandom(SOURCE_TYPES, 1, 2);
  const soundCount = faker.number.int({ min: 1, max: 24 });
  const createdAt = faker.date.past({ years: 2 });
  const updatedAt = faker.date.between({ from: createdAt, to: new Date() });

  return {
    id,
    name,
    author,
    description: faker.lorem.sentence(),
    tags,
    soundCount,
    url: `https://example.com/patches/${name}`,
    source: faker.helpers.arrayElement(["github", "upload", null]),
    sourceUrl: faker.helpers.maybe(() => faker.internet.url()) ?? null,
    patchJson: {
      name,
      author,
      description: faker.lorem.sentence(),
      tags,
      sounds: Object.fromEntries(
        Array.from({ length: soundCount }, (_, i) => [
          `sound_${i}`,
          { type: faker.helpers.arrayElement(SOURCE_TYPES) },
        ]),
      ),
    },
    createdAt,
    version: faker.system.semver(),
    updatedAt,
    license: faker.helpers.arrayElement(["MIT", "CC0", "CC-BY-4.0", null]),
    compatibility: faker.helpers.arrayElement([">=1.0.0", ">=0.9.0", null]),
    featured: faker.datatype.boolean({ probability: 0.15 }),
    verified: faker.datatype.boolean({ probability: 0.4 }),
    forkedFrom:
      faker.helpers.maybe(() => faker.number.int({ min: 1, max: 100 })) ?? null,
    sourceTypes,
    hasEffects: faker.datatype.boolean(),
    hasLayers: faker.datatype.boolean(),
    fileSize: faker.number.int({ min: 512, max: 64000 }),
    loads: faker.number.int({ min: 0, max: 50000 }),
  };
}

export function generateFakePatches(count = 100): PatchWithStats[] {
  faker.seed(42);
  return Array.from({ length: count }, (_, i) => fakePatch(i + 1));
}
