// Bounty: u-suga-two-lines-to-your-past-self-f36c83ca — two lines to your past self:
// line 1 warns about one specific moment, line 2 says why it mattered.
// Why this wins: the warning names an exact, recognisable moment — the tired
// late-night "quick fix" before a holiday — and calls out the self-deception
// behind it. The second line makes the cost vivid and disproportionate: a whole
// ruined trip, against four calm minutes on Monday. Cause and effect, no waste.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY_BEATS = [
  "Don't ship that \"quick fix\" at 2 a.m. on the Friday before your holiday — you're not being efficient, you're just done checking.",
  "You'll spend the whole trip reading outage alerts from the beach, for a change that took four calm minutes on Monday.",
];

export function buildEntryLine(): string {
  return ENTRY_BEATS.join("\n");
}

export const ENTRY_LINE: string = buildEntryLine();

export const MAX_CHARS = 280;

export function charCount(text: string): number {
  return [...text].length;
}

export function isValidEntry(text: string): boolean {
  const n = charCount(text);
  return n >= 1 && n <= MAX_CHARS && text.trim().length > 0 && text.split("\n").length === 2;
}

if (!isValidEntry(ENTRY_LINE)) {
  throw new Error(`Invalid entry: ${charCount(ENTRY_LINE)} chars (max ${MAX_CHARS}) or not exactly two lines`);
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY_LINE, "utf8");
