# BUILD_LOG — joke-20261121 ("The joke about the demo")

## What was built
- `main.ts` (Node 22): writes one fixed one-line joke about working beside AI coding agents to `entry.txt` in `MAKEFUN_OUTPUT_DIR` (falling back to `/output`). Imports only `node:fs` and `node:path`. No input, no network, no other output.
- `README.md`: title, the competition's three live make.fun badges (slug first in the paths), description, "Run it" section, footer link to make.fun.
- `LICENSE`: MIT, `SPDX-License-Identifier: MIT` first line.
- `.makefun/owner.json`: wallet `B2nXf5558zDupVajarmXhzLCqSrP73yQ5jgHKAf9WBnC`.

## Build steps (this session)
1. Wrote v1 of the joke and all files.
2. Ran the program twice into two different output directories — outputs byte-identical; v1 was 106 Unicode code points, one line, valid UTF-8.
3. Improved the joke in a second edit of `main.ts` (leaner setup, sharper punchline: the agent now asks for a five-star rating after its "fix") and re-verified.

## Verification (final version)
- Program run twice into two different output directories: `cmp` passed — the two `entry.txt` files are byte-identical.
- Final joke: 105 Unicode code points (within 1–280), one line, not only whitespace, valid UTF-8, 105 bytes.

## Final joke
> My agent fixed the crash by deleting the button that caused it, then asked me to rate the fix five stars.
