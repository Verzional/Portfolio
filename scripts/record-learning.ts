#!/usr/bin/env tsx

import fs from "node:fs";
import path from "node:path";

interface LearningArgs {
  id?: string;
  category?: string;
  title?: string;
  heuristic?: string;
  badPattern?: string;
  goodPattern?: string;
}

function parseArgs(): LearningArgs {
  const args = process.argv.slice(2);
  const result: Record<string, string> = {};

  for (let i = 0; i < args.length; i++) {
    if (args[i].startsWith("--")) {
      const key = args[i].slice(2);
      const value = args[i + 1] && !args[i + 1].startsWith("--") ? args[++i] : "true";
      result[key] = value;
    }
  }

  return {
    id: result.id,
    category: result.category || "General",
    title: result.title,
    heuristic: result.heuristic,
    badPattern: result.badPattern,
    goodPattern: result.goodPattern,
  };
}

export function recordLearning(args: LearningArgs): { success: boolean; id: string; message: string } {
  const rulePath = path.resolve(process.cwd(), ".agents/rules/05-learned-patterns.md");

  if (!fs.existsSync(rulePath)) {
    throw new Error(`Rules file not found at ${rulePath}`);
  }

  const fileContent = fs.readFileSync(rulePath, "utf-8");
  const today = new Date().toISOString().split("T")[0];

  // Auto-generate ID if not provided
  let id = args.id;
  if (!id) {
    const matches = fileContent.match(/LP-\d+/g);
    const maxNum = matches
      ? Math.max(...matches.map((m) => parseInt(m.replace("LP-", ""), 10)))
      : 5;
    id = `LP-${String(maxNum + 1).padStart(3, "0")}`;
  }

  const category = args.category || "General";
  const title = args.title || "Untitled Empirical Pattern";
  const heuristic = args.heuristic || "No heuristic description provided.";
  const badPattern = args.badPattern || "// ❌ Deprecated or anti-pattern code";
  const goodPattern = args.goodPattern || "// ✅ Recommended solution";

  // 1. Insert row into Index table
  const tableRow = `| **${id}** | ${category} | ${title} | ${heuristic} | ${today} |`;

  // 2. Append detailed profile section
  const sectionContent = `\n### ${id}: ${title}\n* **Context**: ${heuristic}\n* **Bad Pattern**:\n  \`\`\`typescript\n  ${badPattern}\n  \`\`\`\n* **Good Pattern**:\n  \`\`\`typescript\n  ${goodPattern}\n  \`\`\`\n`;

  // Write updated content
  const updatedContent = fileContent.replace(
    /(\|\s*\*\*LP-\d+\*\*.*\|\s*\n)(---)/,
    `$1${tableRow}\n\n$2`
  ) + `\n---\n${sectionContent}`;

  fs.writeFileSync(rulePath, updatedContent, "utf-8");

  return {
    success: true,
    id,
    message: `Recorded learned pattern ${id}: ${title} into .agents/rules/05-learned-patterns.md`,
  };
}

if (process.argv[1] && process.argv[1].endsWith("record-learning.ts")) {
  const parsed = parseArgs();
  if (!parsed.title && !parsed.heuristic) {
    console.log("Usage: pnpm learn-pattern --title <title> --heuristic <heuristic> [--category <cat>] [--bad <bad>] [--good <good>]");
    process.exit(0);
  }

  const res = recordLearning(parsed);
  console.log(`✓ ${res.message}`);
}
