---
name: write-guide
description: >-
  Write concept guide documentation for audio-kit. Use when writing, creating,
  or updating docs under concepts/, or when documenting audio synthesis concepts
  like sources, envelopes, effects, filters, layers, modulation, or spatial audio
  in apps/web/content/docs/concepts/.
---

# Writing Concept Guides

Produces concept documentation that teaches audio-kit features through progressive examples with interactive demos. Each page explains **one concept** and builds from basic usage to advanced patterns.

## Structure

Every concept guide follows this arc:

1. Frontmatter with `title` (concept name) and `description` (one sentence)
2. Opening paragraph defining the concept and how it fits into the signal path
3. `## Basic usage` with minimal code
4. Progressive sections showing variants, combinations, and advanced usage
5. Interactive `<Demo>` and `<DemoGrid>` components so readers can hear the difference
6. Property reference table at the end or inline with each variant

## Template

````mdx
---
title: ConceptName
description: One sentence about what this concept does.
---

Opening paragraph. What it is, where it sits in the signal path, and one practical detail. Keep to 1-2 sentences.

## Basic usage

```ts
{
  property: {
    key: value,
  },
}
```

Brief note about what's required vs. optional.

## Variant A

Description of this variant, 1-2 sentences.

```ts
{ property: { type: "variant-a", key: value } }
```

<Demo
  label="Variant A"
  definition={{ /* full sound definition */ }}
  controls={[
    { param: "property.key", label: "Label", min: 0, max: 1, step: 0.01 },
  ]}
/>

| Property | Type     | Description     |
| -------- | -------- | --------------- |
| `key`    | `type`   | What it does    |

## Variant B

Same pattern: description, code, demo, table.

## Common shapes

<DemoGrid>
  <Demo label="Shape 1" definition={{ /* ... */ }} controls={[ /* ... */ ]} />
  <Demo label="Shape 2" definition={{ /* ... */ }} controls={[ /* ... */ ]} />
</DemoGrid>

**Shape 1** - brief description:
```ts
{ property: { /* minimal config */ } }
```

**Shape 2** - brief description:
```ts
{ property: { /* minimal config */ } }
```
````

## Demo Components

Concept pages use interactive `<Demo>` and `<DemoGrid>` components. These are already registered as MDX components and don't need imports.

### `<Demo>`

Renders a single playable sound with parameter sliders.

```mdx
<Demo
  label="Display name"
  definition={{ /* full SoundDefinition object */ }}
  controls={[
    { param: "dotpath.to.param", label: "Slider label", min: 0, max: 1, step: 0.01 },
  ]}
/>
```

- `definition` must be a complete, self-contained `SoundDefinition` (source + envelope + gain at minimum)
- `param` uses dot notation matching the definition structure: `source.frequency`, `envelope.decay`, `effects.0.mix`, `layers.1.gain`, `lfo.depth`, `filter.frequency`
- Choose `min`/`max`/`step` values that produce audibly meaningful results

### `<DemoGrid>`

Wraps multiple `<Demo>` components in a responsive grid for side-by-side comparison.

```mdx
<DemoGrid>
  <Demo label="A" definition={{ /* ... */ }} controls={[ /* ... */ ]} />
  <Demo label="B" definition={{ /* ... */ }} controls={[ /* ... */ ]} />
</DemoGrid>
```

Use `<DemoGrid>` when comparing 2-4 variants of the same concept (waveform types, envelope shapes, noise colors).

## Rules

1. **Start with the simplest case.** Show the minimal config that produces an audible result. Add complexity only when showing a new capability.
2. **Every variant gets a demo.** If the reader can't hear the difference, the explanation doesn't land. Omit demos only for purely structural concepts (like the layer reference table).
3. **Code blocks show definition fragments, not full `defineSound` calls.** Readers are already inside a sound definition. Show just the relevant property:
   ```ts
   { envelope: { decay: 0.05 } }
   ```
   Not:
   ```ts
   defineSound({ source: { type: "sine", frequency: 440 }, envelope: { decay: 0.05 }, gain: 0.3 });
   ```
   Exception: the `## Basic usage` section and demos need full definitions for context.
4. **Demo definitions must be complete.** Unlike code fragments, `<Demo>` `definition` props need a full `SoundDefinition` with source, envelope, and gain so they actually play.
5. **One concept per page.** Effects, envelopes, layers, sources, filters, modulation, and spatial each get their own page. Don't combine.
6. **Reference tables go near the thing they describe.** If a page has multiple variants (like effect types), put each table right after its section, not at the bottom.
7. **No em dashes.** Use periods, commas, or parentheses.
8. **Mechanical, observable language.** "Ramps linearly to full volume" not "smoothly brings in the sound". "Modulates the filter cutoff at 6Hz" not "creates a cool wobble effect".
9. **No selling.** No "powerful", "amazing", "easily". State what happens.
10. **Practical framing.** Name common use cases inline: "Useful for percussion, textures, and risers" not "Can be used in various scenarios".

## Workflow

1. **Read the source types.** Check `packages/audio-kit/src/types.ts` for the actual property names, types, and structure. The types are the source of truth.
2. **Read the engine.** If documenting how something works (envelope curves, effect routing), check `packages/audio-kit/src/engine.ts` for the actual implementation.
3. **Check existing concept pages.** Read neighboring pages in `concepts/` for consistent style and linking opportunities.
4. **Write using the template.** Follow the rules above.
5. **Test demos mentally.** Each `<Demo>` definition should produce an audible, distinct result. Check that slider ranges make sense (don't set frequency min to 0, don't set gain max above 1).

## References

Read these pages before writing. They demonstrate the established patterns.

- `apps/web/content/docs/concepts/sources.mdx` - Multiple variants (6 source types), each with demos and tables
- `apps/web/content/docs/concepts/envelopes.mdx` - ADSR parameter table, common shapes with DemoGrid, practical examples
- `apps/web/content/docs/concepts/effects.mdx` - 14 effect types, each with demo + table, per-layer vs global distinction
- `apps/web/content/docs/concepts/layers.mdx` - Progressive complexity (single → multiple → onset delay → per-layer vs global effects)
- `apps/web/content/docs/concepts/modulation.mdx` - LFO concept with target table and DemoGrid showing all targets
