import { execSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";

interface ParsedCommit {
  hash: string;
  type: string;
  scope?: string;
  description: string;
  raw: string;
}

function getGitCommits(): ParsedCommit[] {
  try {
    const rawLog = execSync('git log --pretty=format:"%h%x09%s"', { encoding: "utf-8" });
    const lines = rawLog.split("\n").filter(Boolean);
    const commits: ParsedCommit[] = [];

    const conventionalRegex = /^([a-zA-Z]+)(?:\(([^)]+)\))?!?: (.+)$/;

    for (const line of lines) {
      const [hash, ...rest] = line.split("\t");
      const message = rest.join("\t").trim();
      const match = message.match(conventionalRegex);

      if (match) {
        const [, type, scope, description] = match;
        commits.push({
          hash,
          type: type.toLowerCase(),
          scope,
          description,
          raw: message,
        });
      } else {
        commits.push({
          hash,
          type: "other",
          description: message,
          raw: message,
        });
      }
    }

    return commits;
  } catch (error) {
    console.error("Failed to read git log:", error);
    return [];
  }
}

export function generateChangelogSummary(version = "Unreleased"): string {
  const commits = getGitCommits();
  if (commits.length === 0) {
    return "No commits found.";
  }

  const sections: Record<string, string[]> = {
    Added: [],
    Fixed: [],
    Changed: [],
    Performance: [],
    Documentation: [],
    Tooling: [],
  };

  for (const commit of commits) {
    const formatted = `- **${commit.scope ? `${commit.scope}: ` : ""}**${commit.description} (\`${commit.hash}\`)`;

    switch (commit.type) {
      case "feat":
        sections.Added.push(formatted);
        break;
      case "fix":
        sections.Fixed.push(formatted);
        break;
      case "perf":
        sections.Performance.push(formatted);
        break;
      case "refactor":
        sections.Changed.push(formatted);
        break;
      case "docs":
        sections.Documentation.push(formatted);
        break;
      case "build":
      case "test":
      case "chore":
        sections.Tooling.push(formatted);
        break;
      default:
        break;
    }
  }

  let output = `## [${version}] - ${new Date().toISOString().split("T")[0]}\n\n`;

  for (const [category, entries] of Object.entries(sections)) {
    if (entries.length > 0) {
      output += `### ${category}\n`;
      for (const entry of entries) {
        output += `${entry}\n`;
      }
      output += "\n";
    }
  }

  return output.trim();
}

function main() {
  const targetVersion = process.argv[2] || "Unreleased";
  const summary = generateChangelogSummary(targetVersion);
  
  const changelogPath = path.resolve(process.cwd(), "CHANGELOG.md");
  const header = "# Changelog\n\nAll notable changes to this project will be documented in this file.\n\nThe format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),\nand this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).\n\n";

  fs.writeFileSync(changelogPath, `${header}${summary}\n`, "utf-8");

  console.log("=== Generated Changelog Preview ===");
  console.log(summary);
  console.log("===================================");
  console.log(`✓ Updated ${changelogPath}`);
}

// Execute CLI if run directly
main();
