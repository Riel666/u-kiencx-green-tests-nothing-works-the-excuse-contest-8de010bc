import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "All 214 tests pass — every one of them testing a feature the app never actually runs. The suite is green. The product is decorative.";

const OUT_DIR = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(OUT_DIR + "/entry.txt", LINE, "utf8");
