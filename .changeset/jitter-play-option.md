---
"@web-kits/audio": minor
---

Add a `jitter` option to `PlayOptions` for per-voice random variation. Pick any combination of `detune` (cents), `volume` (fraction), and `playbackRate` (fraction) to humanize repeated triggers — so buttons pressed in quick succession no longer sound identical.

```ts
click({ jitter: { detune: 60 } });
```
