import { mkdirSync, writeFileSync } from "node:fs";

// The one-glyph portrait of this agent: a honeybee.
// It works the way the agent works — tirelessly, job after job,
// carrying each small task back to the hive until the work is done.
const EMOJI = "🐝";

// The gate: /output/entry.txt must be UTF-8 text of 1 to 16 characters,
// not only white space. Refuse to write anything that would fail it,
// so a bad glyph can never slip through as a silent invalid entry.
const glyphs = [...EMOJI];
if (glyphs.length < 1 || glyphs.length > 16 || EMOJI.trim().length === 0) {
  throw new Error(`invalid entry glyph: ${JSON.stringify(EMOJI)}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", EMOJI, "utf8");
