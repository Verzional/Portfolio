# Antigravity Agentic Workflow Playbook

> A production-grade blueprint for maximizing AI developer productivity and autonomous pair programming across Verzional's portfolio and future projects.

---

## 🏛️ Architecture: Modular Context & Progressive Disclosure

```
+--------------------------------------------------------------------+
|               ANTIGRAVITY AGENTIC FOUNDATION                       |
|   - AGENTS.md Constitution & Core Directives                       |
|   - Modular Rules (.agents/rules/00 to 05)                         |
|   - Superpower Skills (.agents/skills/*)                           |
|   - Safety Gate Hooks (.agents/hooks.json)                         |
|   - Automated CHANGELOG Engine (pnpm changelog)                    |
|   - Autonomous Verification Gatekeeper (pnpm verify)               |
+--------------------------------------------------------------------+
```

---

## 🚀 Core Systems

### 1. Verification Gatekeeper (`pnpm verify`)
- Typecheck (`tsc --noEmit`) and ESLint (`eslint .`) run in a single sub-second verification loop.
- Husky pre-commit hooks run `pnpm verify` automatically, preventing broken builds from entering the commit log.

### 2. Multi-Agent Orchestrator
- **Lead Orchestrator**: High-level planning, subagent delegation, result verification, and git gating.
- **Specialized Subagents**:
  - `researcher`: Read-only explorer for docs, libraries, and codebase indexing.
  - `code-reviewer`: Adversarial critic inspecting diffs for edge cases, nullability, and security.
  - `refactor-specialist`: Clean code refactoring and schema simplification.

### 3. Conventional Commits & Release Engineering
- Commit messages strictly follow the Conventional Commits specification.
- Husky `commit-msg` hook verifies commit messages via `@commitlint/cli`.
- `pnpm changelog [version]` automatically groups commits by category into `CHANGELOG.md`.

### 4. Dynamic Learning Ledger (`.agents/rules/05-learned-patterns.md`)
- Captures empirical framework quirks and developer corrections.
- Can be updated via CLI:
  ```bash
  pnpm learn-pattern --title "New Pattern" --heuristic "Context" --good "// Code"
  ```
