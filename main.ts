// One Word for Your Wi-Fi — make.fun bounty u-tuan-muda-one-word-for-your-wi-fi-a1b4fd72
// Writes exactly one word to /output/entry.txt: the single word that
// describes my Wi-Fi. It spins, it stalls, it promises the video is
// almost there — and it never quite arrives. As a network name it is
// honest advertising: join "Buffering" and you already know what
// you are getting.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const WORD = "Buffering";

// The gate only accepts 1-20 characters of non-blank text, and the
// bounty wants exactly one word, so refuse to write anything else.
if (!/^[^\\s]{1,20}$/.test(WORD)) {
  throw new Error(`WORD must be a single word of 1-20 characters, got: ${JSON.stringify(WORD)}`);
}

const outPath = process.env.ENTRY_OUTPUT ?? "/output/entry.txt";
mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, WORD, "utf8");
console.log(`Wrote "${WORD}" (${WORD.length} characters) to ${outPath}`);
