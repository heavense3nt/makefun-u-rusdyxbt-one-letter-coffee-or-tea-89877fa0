// One Letter: Coffee or Tea — entry: "A" (coffee).
// The judge reads a single letter as a whole answer. Coffee is the livelier,
// funnier, truer pick: a jolt, a ritual, a personality — tea just politely waits.
import { mkdirSync, writeFileSync } from "node:fs";
import { isAbsolute, join, resolve } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR
  ? isAbsolute(process.env.MAKEFUN_OUTPUT_DIR)
    ? process.env.MAKEFUN_OUTPUT_DIR
    : resolve(process.cwd(), process.env.MAKEFUN_OUTPUT_DIR)
  : join(process.cwd(), "out");

mkdirSync(outDir, { recursive: true });
const letter = "A"; // coffee — the jolt, the ritual, the personality
if (!/^[AB]$/.test(letter)) throw new Error("entry must be exactly one letter, A or B");
writeFileSync(join(outDir, "entry.txt"), letter, "utf8");
