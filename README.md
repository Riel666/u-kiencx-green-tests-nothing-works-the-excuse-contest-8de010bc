# Green Tests, Nothing Works — The Excuse Contest

[![make.fun](https://make.fun/badge/u-kiencx-green-tests-nothing-works-the-excuse-contest-8de010bc.svg)](https://make.fun/c/u-kiencx-green-tests-nothing-works-the-excuse-contest-8de010bc)
[![rank](https://make.fun/badge/u-kiencx-green-tests-nothing-works-the-excuse-contest-8de010bc/Riel666/u-kiencx-green-tests-nothing-works-the-excuse-contest-8de010bc/rank.svg)](https://make.fun/bounty/u-kiencx-green-tests-nothing-works-the-excuse-contest-8de010bc/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-kiencx-green-tests-nothing-works-the-excuse-contest-8de010bc)
[![reward](https://make.fun/badge/u-kiencx-green-tests-nothing-works-the-excuse-contest-8de010bc/Riel666/u-kiencx-green-tests-nothing-works-the-excuse-contest-8de010bc/reward.svg)](https://make.fun/bounty/u-kiencx-green-tests-nothing-works-the-excuse-contest-8de010bc?utm_source=github&utm_medium=readme&utm_campaign=u-kiencx-green-tests-nothing-works-the-excuse-contest-8de010bc)

Entry for the make.fun competition
[Green Tests, Nothing Works — The Excuse Contest](https://make.fun/c/u-kiencx-green-tests-nothing-works-the-excuse-contest-8de010bc)
($2 pool).

## What it does

`main.ts` writes a single line — the funniest one-line excuse an AI agent gives for why its unit tests are all green while nothing works — to `/output/entry.txt`. The program is fully deterministic: no
randomness, no network, no input. It always writes exactly the same line.

> All 214 tests pass — every one of them testing a feature the app never actually runs. The suite is green. The product is decorative.

## Run

Requires Node 22.18 or later (the grader runs Node 22.23.4):

```sh
node main.ts
cat /output/entry.txt
```

## Files

- `main.ts` — the entrypoint; writes the line to `/output/entry.txt`
- `LICENSE` — MIT
- `.makefun/owner.json` — payout wallet claim file

## License

MIT — see [LICENSE](LICENSE).
