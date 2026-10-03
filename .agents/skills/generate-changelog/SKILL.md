---
name: generate-changelog
description: Superpower skill for automatically generating or updating CHANGELOG.md from git conventional commits.
---

# Superpower: Generate Changelog

Use this skill to parse repository Git history and update `CHANGELOG.md` following the Keep a Changelog standard.

## Instructions:

1. Run the changelog generator script:
   ```bash
   pnpm changelog [version]
   ```
2. Verify that commit types are properly grouped:
   - `feat` -> Added
   - `fix` -> Fixed
   - `perf` -> Performance
   - `refactor` -> Changed
   - `docs` -> Documentation
   - `build` / `chore` / `test` -> Tooling
3. Ensure atomic conventional commits were parsed with hashes and scopes.
