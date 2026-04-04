---
name: write-api-reference
description: >-
  Write API reference documentation for audio-kit functions, hooks, and utilities.
  Use when writing, creating, or updating docs under api/ or integrations/,
  or when documenting function signatures, parameters, return types, props tables,
  or MDX API reference pages in apps/web/content/docs/.
---

# Writing API Reference Pages

Produces API reference documentation for audio-kit APIs: core functions, React hooks, output utilities, and context helpers.

Each page documents **one API**. If the API has related types (like `PlayOptions`, `VoiceHandle`), document them on the same page. If two APIs are independent, they get separate pages.

## Structure

Every API reference page follows this arc:

1. Frontmatter with `title` (function name) and `description` (one sentence)
2. Opening sentence defining what it does
3. Minimal working code example
4. `## Signature` with full TypeScript signature
5. Parameter/option tables for related types
6. Usage examples for common patterns

## Template

````mdx
---
title: functionName
description: One sentence defining what it does.
---

Opening sentence. What it does, what it returns, and one key detail.

```ts
import { functionName } from "audio-kit";

// Minimal working example, 3-8 lines
const result = functionName({ /* ... */ });
```

## Signature

```ts
function functionName(param: Type): ReturnType;
```

## ParamType

Brief description of when/why you'd use these options.

| Property | Type     | Default | Description            |
| -------- | -------- | ------- | ---------------------- |
| `prop`   | `type`   | `val`   | What it does           |

```ts
// Short example showing the type in use
functionName({ prop: value });
```

## ReturnType

| Method/Property | Type   | Description        |
| --------------- | ------ | ------------------ |
| `method()`      | `type` | What it does       |
````

### React hooks

For hooks under `integrations/react/`, adjust the template:

- Import from `"audio-kit/react"` not `"audio-kit"`
- Show usage inside a component with JSX
- Include a `## Signature` section with the hook signature
- Document when the play function returns `undefined` (disabled state)

````mdx
## Usage

```tsx
import { useHook } from "audio-kit/react";

function Component() {
  const result = useHook(/* ... */);
  return <button onClick={() => result()}>Click</button>;
}
```
````

## Rules

1. **Lead with what it does.** First sentence defines the API. No preamble, no history.
2. **Show working code immediately.** A minimal example appears right after the opening sentence, before `## Signature`.
3. **All code uses `ts` or `tsx` fences.** Use `tsx` only when JSX is present.
4. **Tables for simple types, subsections for complex ones.** If a prop needs only a type and one-line description, use a table row. If it needs a code example, use a subsection.
5. **Omit Default column when no defaults exist.** Only include the Default column in tables when at least one property has a meaningful default value.
6. **No em dashes.** Use periods, commas, or parentheses.
7. **Mechanical, observable language.** "Returns an object" not "gives you an object". "Resolves immediately" not "conveniently resolves".
8. **No selling.** No "powerful", "easily", "simply", "convenient". State what it does.
9. **Keep it short.** Most API pages should be 20-60 lines of MDX. If a page exceeds 80 lines, consider whether related types belong on their own page.

| Don't | Do |
| --- | --- |
| "This powerful hook lets you easily play sounds" | "`useSound` takes a sound definition and returns a stable play function" |
| "You can conveniently access..." | "Returns an object containing..." |
| "The recommended way to handle audio" | "`ensureReady` resumes the AudioContext after a user gesture" |

## Workflow

1. **Read the source code.** Check `packages/audio-kit/src/` for the actual function signature, parameter types, return types, and edge cases. The types in `types.ts` are the source of truth.
2. **Check existing docs.** Read neighboring pages in the same section for linking opportunities and to match the established pattern.
3. **Write using the template.** Follow the rules above.
4. **Review.** Verify: one sentence opener, immediate code example, correct fence language, tables where appropriate, no em dashes, no selling.

## References

Read these pages before writing. They demonstrate the established patterns.

- `apps/web/content/docs/api/sounds/define-sound.mdx` - Function with signature, PlayOptions table, VoiceHandle table
- `apps/web/content/docs/api/patches/load-pack.mdx` - Async function with instance method table
- `apps/web/content/docs/api/context/ensure-ready.mdx` - Minimal API page (shortest possible)
- `apps/web/content/docs/api/sounds/shorthands.mdx` - Multiple related functions on one page
- `apps/web/content/docs/integrations/react/use-sound.mdx` - React hook with component examples
