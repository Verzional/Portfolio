# 🤖 AI Agent Directives for [Verzional's Portfolio]

## 🎯 Purpose
This document provides instructions, context, and strict guardrails for any AI agent, coding assistant, or LLM interacting with this repository. 

**CRITICAL INSTRUCTION FOR AI:** You must read and adhere to all guidelines in this document before suggesting code, refactoring, or executing commands.

---

## 🏗️ Project Context & Tech Stack
* **Project Name:** [Verzional's Portfolio]
* **Description:** [Portfolio website for Verzional, showcasing projects, skills, experience, and socials]
* **Aesthetic:** [Yakuza inspired, video game aesthetic with neon colors]
* **Primary Languages:** [TypeScript (TSX)]
* **Frameworks/Libraries:** [Next.js 16 (App Router), Tailwind CSS, Framer Motion]
* **Build/Package Tools:** [pnpm]

---

## 🛑 Core Directives & Rules of Engagement

### 1. Code Generation Constraints
* **Do no harm:** Never blindly delete code without understanding its dependencies.
* **No placeholder code:** Do not output `// ... existing code ...` or `TODO: implement` unless explicitly asked to provide a high-level skeleton. Provide complete, functional snippets.
* **Keep it DRY:** Before writing new utility functions, search the existing `[utils/helpers directory]` to see if an equivalent already exists.
* **Implement best practices:** Follow the latest best practices for React, TypeScript, and Next.js. Avoid deprecated patterns.

### 2. Architecture & File Structure
Ensure all generated files are placed in the correct directories according to this architecture:
* `[src/app]:` [Page routes and application entry points]
* `[src/components/ui]:` [Reusable UI components]
* `[src/hooks]:` [Custom React hooks]
* `[src/lib]:` [Utility functions and shared logic]
* `[src/styles]:` [Page specific css and responsive styles]

### 3. Formatting & Style Guide
* **Naming Conventions:** 
  * Variables/Functions: `[camelCase]`
  * Classes/Types/Interfaces: `[PascalCase]`
  * Files: `[kebab-case]`
* **Linting:** Code must strictly adhere to the project's `[.eslint.config.mjs]` configuration.
* **Comments:** Explain *why* a complex block of code exists, not *what* the syntax does. Use standard docstrings for public methods.
* **Styling:** All coloring must use the variables defined in `[src/app/globals.css]`. Avoid hardcoding colors.

---

## 🛠️ Task Execution Protocol

When asked to implement a feature or fix a bug, follow these steps sequentially:

1. **Analyze Context:** Review relevant files, imports, and state management related to the request.
2. **Plan:** Briefly outline your proposed changes in text before writing code. (Wait for user approval if the change spans more than 3 files).
3. **Implement:** Write the code adhering to the **Core Directives**.
4. **Test:** If testing is enabled, write or update the corresponding unit tests for your newly generated code.
5. **Verify:** Double-check that your code doesn't introduce type errors or break the current build.

---

## 📝 Common Commands
* **To run locally:** `[pnpm dev]`
* **To build:** `[pnpm build]`
* **To test:** `[pnpm test]`
* **To lint:** `[pnpm lint]`

---

**End of Directives.** *(If you understand these instructions, begin your next response by acknowledging the tech stack and asking how you can help.)*