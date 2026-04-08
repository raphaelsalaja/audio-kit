# audio-kit

Declarative audio synthesis for the web. Describe sounds as plain objects, play them with one function call.

## Install

```bash
npm install audio-kit
```

## Usage

### Define and play a sound

```ts
import { defineSound, ensureReady } from "audio-kit";

const pop = defineSound({
  source: { type: "sine", frequency: { start: 1200, end: 300 } },
  envelope: { attack: 0.001, decay: 0.06, sustain: 0, release: 0.03 },
  gain: 0.3,
});

await ensureReady();
pop();
```

### Shorthand helpers

```ts
import { sine, noise } from "audio-kit";

const beep = sine(440, 0.1);
const click = noise("white", 0.02);

beep();
click();
```

### Sound packs (React)

```tsx
import { usePack } from "audio-kit/react";

function App() {
  const pack = usePack("/packs/core.json");

  return (
    <button onClick={() => pack.play("click")} disabled={!pack.ready}>
      Click me
    </button>
  );
}
```

### Sound packs (vanilla)

```ts
import { loadPack } from "audio-kit";

const pack = await loadPack("/packs/core.json");
pack.play("click");
```

## CLI

```bash
# Browse and install packs from the registry
npx audio-kit add

# Install packs from a GitHub repo
npx audio-kit add user/repo

# Create a new sound pack
npx audio-kit init

# List installed packs
npx audio-kit list

# Remove installed packs
npx audio-kit remove
```

## Pack authoring

Create a pack JSON file with `npx audio-kit init`, then add sound definitions to the `sounds` object:

```json
{
  "$schema": "node_modules/audio-kit/schemas/pack.schema.json",
  "name": "my-pack",
  "sounds": {
    "click": {
      "source": { "type": "noise", "color": "white" },
      "filter": { "type": "bandpass", "frequency": 2000 },
      "envelope": { "decay": 0.05 }
    }
  }
}
```

Push it to a GitHub repo. Others can install it with:

```bash
npx audio-kit add your-username/your-repo
```

## API

| Export | Description |
|--------|-------------|
| `defineSound(def)` | Create a reusable play function from a sound definition |
| `ensureReady()` | Initialize the audio context (call before first play) |
| `sine(freq, decay)` | Shorthand for sine oscillator |
| `triangle(freq, decay)` | Shorthand for triangle oscillator |
| `square(freq, decay)` | Shorthand for square oscillator |
| `sawtooth(freq, decay)` | Shorthand for sawtooth oscillator |
| `noise(color, decay)` | Shorthand for noise generator |
| `loadPack(url)` | Load a sound pack from a URL |
| `definePack(json)` | Create a pack from a JSON object |
| `usePack(url)` | React hook for loading and playing packs |

## Documentation

Full docs at [audio-kit.dev](https://audio-kit.dev).

## License

[MIT](https://github.com/raphaelsalaja/audio-kit/blob/main/LICENSE)
