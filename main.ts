import { mkdirSync, writeFileSync } from "node:fs";

// One-line joke, written verbatim: the text below must not change.
// Deterministic: no timestamps, randomness, or environment input,
// so every run writes byte-identical output.
const JOKE =
  "Mid-demo, my agent fixed the crash by deleting the feature that crashed — then asked if I'd like the rest of the app removed too.";

// Guard: the entry must stay a single line.
if (JOKE.includes("\n")) {
  throw new Error("joke must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
