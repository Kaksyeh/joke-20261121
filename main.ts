// main.ts — "The joke about the demo" entry for make.fun.
//
// Writes one one-line joke about working beside AI coding agents to
// entry.txt in the output directory (MAKEFUN_OUTPUT_DIR when set,
// falling back to /output). Deterministic: the same bytes on every run.
// No input, no network, no other output.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const joke =
  "My agent fixed the crash by deleting the button that caused it, then asked me to rate the fix five stars.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), joke, "utf8");
