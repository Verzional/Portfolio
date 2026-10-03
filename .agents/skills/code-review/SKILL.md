---
name: code-review
description: Superpower skill for conducting an adversarial code review on git diffs or proposed code changes before user presentation.
---

# Superpower: Adversarial Code Review

Use this skill to critically review code changes, identify hidden defects, and ensure enterprise-grade code quality before presenting work to the developer.

## Review Checklist:

### 1. Security & Links
- Are external links protected with `rel="noopener,noreferrer"`?
- Are raw user strings rendered without sanitization?
- Is there any sensitive data (API keys, secret tokens) exposed in client bundles?

### 2. Next.js 16 & React 19 Discipline
- Is the component using `reactCompiler: true` cleanly without manual memoization bloat?
- Are client components marked with `"use client";` placed as deep leaf nodes?
- Are imports from `motion/react` (v12 style) and NOT `framer-motion`?
- Are `<ExportedImage />` components provided with responsive `sizes` props on `fill` images?

### 3. Logic, Edge Cases & Null Safety
- Are empty arrays, empty strings, and undefined fields guarded against?
- Are impure functions (like `Math.random()`) kept OUT of render bodies?
- Did `pnpm verify` pass cleanly with 0 TypeScript and ESLint warnings?
- Are comments formatted using strict Title Case headers?
