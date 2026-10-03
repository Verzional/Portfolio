#!/usr/bin/env node
import fs from "node:fs";

try {
  const input = fs.readFileSync(0, "utf-8");
  const data = JSON.parse(input);
  const command = data?.toolCall?.args?.CommandLine || "";

  if (/(git push.*--force|git reset --hard origin|rm -rf \/|mkfs)/i.test(command)) {
    process.stdout.write(
      JSON.stringify({
        decision: "deny",
        reason: `Destructive command blocked by Antigravity Safety Gate: ${command}`,
      })
    );
  } else {
    process.stdout.write(JSON.stringify({ decision: "allow" }));
  }
} catch {
  process.stdout.write(JSON.stringify({ decision: "allow" }));
}
