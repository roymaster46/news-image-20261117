// News image entry for 17 November 2026 (Node 22, standard library only).
// The image is drawn once and stored beside this file as entry.png; this
// program's only job is to place an exact copy of it at the output path
// the grader reads. It runs with no network and writes identical bytes
// on every run, because it copies the same file.
//
// Run locally with:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, statSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const source = new URL("./entry.png", import.meta.url);
const dest = join(outDir, "entry.png");
// The grader's output directory may not exist yet; create it first.
mkdirSync(outDir, { recursive: true });
copyFileSync(source, dest);
// Verify the copy is complete: same byte count as the source image.
const srcSize = statSync(source).size;
const dstSize = statSync(dest).size;
if (srcSize !== dstSize) {
  throw new Error(`entry.png copy incomplete: ${dstSize} of ${srcSize} bytes`);
}
