---
"@web-kits/audio": patch
---

Migrate CLI output to use `@clack/prompts` consistently across all commands, replacing raw `console.log` + `picocolors` in `index`, `find`, `check`, and `update`.
