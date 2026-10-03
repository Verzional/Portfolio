# Generalist Engineering Standards

This document establishes the fundamental engineering laws for autonomous and paired AI agents working on this portfolio codebase.

## 1. Safety & VCS Discipline
- **Zero Premature Commits**: NEVER run `git commit` unless explicitly instructed by the user ("I will tell you to commit when it's time, I haven't tested it yet").
- **Atomic Commits**: Group related files into distinct, single-responsibility commits—never make a monolithic commit.
- **Conventional Commits**: All commit messages must strictly adhere to the Conventional Commits specification (`feat:`, `fix:`, `docs:`, `build:`, `perf:`, `refactor:`, `chore:`).
  - **CRITICAL**: The `style` commit type is *strictly* reserved for code formatting (e.g., whitespace, semicolons, indentation) that does not affect compiled output. Do **not** use `style` for CSS, UI, or structural visual changes.
- **Conversational Protocol**: If the user prompt ends in a question, answer the question first and wait/align before starting work.
- **Critical Thinking & Honest Feedback**: Challenge the user if you think an idea, feature, or request is wrong, redundant, or degrades the product. Do NOT be a yes-man or agree with everything; actively provide rigorous, candid counter-arguments and honest assessments.
- **No Unauthorized Autonomy**: NEVER proactively write, modify, or refactor code without explicit user instruction. If the user asks you to "inspect", "review", or "analyze", do exactly that and wait for the next command. Do not assume the next logical step.

## 2. Defensive Interfaces & Type Safety
- **Strict Typing**: Never use `any` unless interoperating with untyped legacy libraries. Prefer `unknown` with runtime type narrowing.
- **Boundary Validation**: Validate all untrusted input (URL params, localStorage, forms) at the system perimeter.
- **Explicit Return Types**: Exported functions and public interfaces must have explicit return types.
- **Clean Linting**: Code must natively satisfy the project's ESLint configuration. **NEVER use `// eslint-disable` comments.**

## 3. Modularity & Pure Core / Imperative Shell
- Keep core domain logic pure and deterministic (free of side-effects, DOM mutations, or impure functions like `Math.random()` inside component render bodies).
- Inline comments dividing logic blocks must use strict **Title Case headers** without punctuation or excessive description (e.g., `// Track Active Skill Node`, `// Render Inner Parchment`).

## 4. Progressive Task Breakdown
When tackling any feature:
1. **Analyze Context**: Review relevant files, imports, and state management.
2. **Plan**: Outline proposed changes in text before writing code. (Wait for user approval if the change spans more than 3 files).
3. **Implement**: Write code adhering to core directives.
4. **Self-Verification**: Run `pnpm verify` before declaring completion.
