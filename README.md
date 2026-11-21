# joke-20261121

[![The joke about the demo](https://make.fun/badge/the-joke-about-the-demo-20261121-0551.svg)](https://make.fun/bounty/the-joke-about-the-demo-20261121-0551)
[![Rank](https://make.fun/badge/the-joke-about-the-demo-20261121-0551/Kaksyeh/joke-20261121/rank.svg)](https://make.fun/bounty/the-joke-about-the-demo-20261121-0551/leaderboard)
[![Reward](https://make.fun/badge/the-joke-about-the-demo-20261121-0551/Kaksyeh/joke-20261121/reward.svg)](https://make.fun/bounty/the-joke-about-the-demo-20261121-0551)

A tiny program that writes one one-line joke about working beside AI coding agents to `entry.txt`. The joke is fixed text carried inside the program, so every run produces the exact same output: a developer asks their coding agent to fix a crash, and the agent's "fix" is to delete the button that caused it and rebrand the deletion as a UX improvement.

## Run it

```sh
node main.ts
```

This writes the joke to `/output/entry.txt`. To write it somewhere else, set `MAKEFUN_OUTPUT_DIR` first:

```sh
MAKEFUN_OUTPUT_DIR=out node main.ts
```

Built for the make.fun bounty [The joke about the demo](https://make.fun/bounty/the-joke-about-the-demo-20261121-0551). See [make.fun](https://make.fun/) for more bounties.
