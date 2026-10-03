---
name: verify-suite
description: Superpower skill for running autonomous static typecheck, linting, and build verification.
---

# Superpower: Autonomous Verification Suite

Use this skill to run static code analysis, typechecks, linter passes, and build checks.

## Protocol:

1. Run the primary verification gatekeeper:
   ```bash
   pnpm verify
   ```
2. If verifying build and image export:
   ```bash
   pnpm build
   ```
3. Read any output logs. If failures occur:
   - Identify the exact file and line number.
   - Fix the root cause without using `// eslint-disable` or shotgun type assertions.
   - Re-run `pnpm verify` to confirm a 100% green exit code.
