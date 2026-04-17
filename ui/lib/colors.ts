const colors = [
  "gray",
  "gold",
  "bronze",
  "brown",
  "yellow",
  "amber",
  "orange",
  "tomato",
  "red",
  "ruby",
  "crimson",
  "pink",
  "plum",
  "purple",
  "violet",
  "iris",
  "indigo",
  "blue",
  "cyan",
  "teal",
  "jade",
  "green",
  "grass",
  "lime",
  "mint",
  "sky",
];

function hashStringToIndex(input: string, modulo: number) {
  let hash = 0x811c9dc5;
  for (let i = 0; i < input.length; i += 1) {
    hash ^= input.charCodeAt(i);
    hash = Math.imul(hash, 0x01000193);
  }

  return (hash >>> 0) % modulo;
}

export function generateRadixColorsScaleFromName(name: string) {
  const normalizedName = name.trim().toLowerCase();

  const radix = colors[hashStringToIndex(normalizedName, colors.length)];

  return {
    "--color-1": `var(--${radix}-${1})`,
    "--color-2": `var(--${radix}-${2})`,
    "--color-3": `var(--${radix}-${3})`,
    "--color-4": `var(--${radix}-${4})`,
    "--color-5": `var(--${radix}-${5})`,
    "--color-6": `var(--${radix}-${6})`,
    "--color-7": `var(--${radix}-${7})`,
    "--color-8": `var(--${radix}-${8})`,
    "--color-9": `var(--${radix}-${9})`,
    "--color-10": `var(--${radix}-${10})`,
    "--color-11": `var(--${radix}-${11})`,
    "--color-12": `var(--${radix}-${12})`,

    "--color-a1": `var(--${radix}-a1)`,
    "--color-a2": `var(--${radix}-a2)`,
    "--color-a3": `var(--${radix}-a3)`,
    "--color-a4": `var(--${radix}-a4)`,
    "--color-a5": `var(--${radix}-a5)`,
    "--color-a6": `var(--${radix}-a6)`,
    "--color-a7": `var(--${radix}-a7)`,
    "--color-a8": `var(--${radix}-a8)`,
    "--color-a9": `var(--${radix}-a9)`,
    "--color-a10": `var(--${radix}-a10)`,
    "--color-a11": `var(--${radix}-a11)`,
    "--color-a12": `var(--${radix}-a12)`,
  };
}
