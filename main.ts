// Replies queue up politely while the inbox learns patience on its own.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const text = "Away this week. All emails will be answered in the order they stop mattering.";
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), text, "utf8");
