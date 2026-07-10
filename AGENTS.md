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
* **Frameworks/Libraries:** Next.js 16 (App Router), Tailwind CSS v4, Framer Motion, lucide-react
* **Build/Package Tools:** pnpm

---

## 🛑 Core Directives & Rules of Engagement

### 1. Code Generation Constraints
* **No Unauthorized Autonomy:** NEVER proactively write, modify, or refactor code without explicit user instruction. If the user asks you to "inspect", "review", or "analyze", do exactly that and wait for the next command. Do not assume the next logical step.
* **Do no harm:** Never blindly delete code without understanding its dependencies.
* **No placeholder code:** Do not output `// ... existing code ...` or `TODO: implement` unless explicitly asked to provide a high-level skeleton. Provide complete, functional snippets.
* **Keep it DRY:** Before writing new utility functions, search the existing `src/lib` or `src/hooks` directories to see if an equivalent already exists.
* **Implement best practices:** Follow the latest best practices for React, TypeScript, and Next.js. Avoid deprecated patterns.

### 2. Architecture & File Structure
Ensure all generated files are placed in the correct directories according to this architecture:
* `src/app`: Page routes and application entry points. Subpages manage their own sidebar UI by portaling `<SubMenu>` via `<SidebarPortal>` into the `#sidebar-root`.
* `src/components/ui`: Reusable UI components.
* `src/components/layout`: Core structural components (`app-shell`, `sidebar-portal`, `sub-menu`, etc). The `app-shell` handles global background crossfades using a dual-map system (`homeHoverBgMap` for home screen previewing and `pageBgMap` for active routes) driven by a `preview-route` window CustomEvent.
* `src/hooks`: Custom React hooks (e.g., `use-menu` for WASD navigation).
* `src/lib`: Utility functions and shared logic.

### 3. Formatting & Style Guide
* **Naming Conventions:** 
  * Variables/Functions: `camelCase`
  * Classes/Types/Interfaces: `PascalCase`
  * Files: `kebab-case`
* **Icons:** Use `lucide-react` for all icons.
* **Linting & Purity:** Code must strictly adhere to the project's `.eslint.config.mjs` configuration. Watch out for Next.js strict mode rules (e.g., avoid synchronous state updates in `useEffect`). NEVER use impure functions like `Math.random()` inside the render body of a component; generate random static data outside the component or within stable hooks to avoid hydration mismatches.
* **Comments:** Explain *why* a complex block of code exists, not *what* the syntax does. Use standard docstrings for public methods.
* **Styling (CSS Variables):** 
  * All coloring must use the variables defined in `src/app/globals.css`. Avoid hardcoding colors.
  * **CRITICAL:** Do NOT confuse `-foreground` with "text color". `--primary` is the raw color bucket used for `text-primary`, `bg-primary`, etc. The `--primary-foreground` bucket is STRICTLY the contrast color (e.g., white text) that sits *inside* a `bg-primary` element.

### 4. Animation & Portals
* **Motion Library:** You must import `motion` from `"motion/react"` (v12 style), not `"framer-motion"`.
* **Layout Shifts:** Avoid using Framer Motion's `layout` prop for responsive width changes; it injects pixel boundaries that override and break Tailwind responsive classes. Use pure CSS `transition-[width]` classes instead.
* **React Portals:** When injecting unique submenus into the sidebar, always use the `<SidebarPortal>` component. It safely handles hydration and `AnimatePresence mode="wait"` DOM delays using `requestAnimationFrame`.
* **Video Game UI Transitions:** Avoid generic, flat `easeOut` crossfades. Use punchy, weighted transitions (e.g. `ease: [0.33, 1, 0.68, 1]`) combined with subtle scale shifts (e.g., entering at `scale: 1.03`, exiting at `scale: 0.98`) to mimic the heavy, responsive feel of menus in Persona 5 and Yakuza.

### 5. Responsive Design
* **Mobile Background Anchoring:** When rendering full-screen backgrounds (especially landscape illustrations) on mobile devices (`object-cover`), DO NOT use generic anchors like `object-right` or `object-center` if the subject matter is off-center. Always use Tailwind arbitrary percentage values (e.g., `object-[75%_center] md:object-center`) so the exact framing of the character can be fine-tuned per device.

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