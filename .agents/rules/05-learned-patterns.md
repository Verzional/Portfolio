# Dynamic Learning Memory & Living Post-Mortem Ledger

> **Purpose**: This living rule file captures empirical developer corrections, framework quirks, and production post-mortems for Verzional's Portfolio.
> **Loading Invariant**: In accordance with the **Progressive Disclosure Principle**, Antigravity and subagents consult this ledger before proposing code changes in unfamiliar or breaking domains.

---

## 📋 Learned Patterns Index

| ID | Category | Title | Heuristic Summary | Date Added |
| :--- | :--- | :--- | :--- | :--- |
| **LP-001** | Performance | ExportedImage Fill Sizes Prop | `<ExportedImage fill>` must have responsive `sizes` prop to prevent downloading 4K `3840.WEBP` variants. | 2026-09-17 |
| **LP-002** | Animation | No Framer Motion Layout Prop for Width | Avoid Framer Motion `layout` prop on responsive width containers; use pure CSS `transition-[width]`. | 2026-09-10 |
| **LP-003** | React 19 | React Compiler No Manual Memoization | With `reactCompiler: true`, avoid manual `useMemo`, `useCallback`, or `React.memo`. | 2026-09-11 |
| **LP-004** | Portals | SidebarPortal requestAnimationFrame | SubMenu mounting into `#sidebar-root` requires `requestAnimationFrame` to avoid `AnimatePresence mode="wait"` delays. | 2026-09-12 |
| **LP-005** | Layout | Responsive 5-Tab Sidebar Fit | 5 category tabs in 20% desktop sidebar must use `md:w-9.5 xl:w-11.5` and `gap-2 md:gap-2.5` to avoid clipping. | 2026-10-03 |

---

## 🔍 Detailed Heuristic Profiles

### LP-001: ExportedImage Fill Sizes Prop
* **Context**: `next-image-export-optimizer` generates responsive derivatives (10px up to 3840px). When Next.js `<Image fill>` or `<ExportedImage fill>` lacks a `sizes` prop, the browser requests the largest image in `deviceSizes` (4K 3840px), causing extreme LCP slowdowns and GPU bandwidth spikes.
* **Bad Pattern**:
  ```tsx
  // ❌ Missing sizes prop causes browser to fetch 4K 3840px variant on all screens
  <ExportedImage src={project.images[0]} fill={true} alt="Screenshot" />
  ```
* **Good Pattern**:
  ```tsx
  // ✅ Responsive sizes limits browser download to ~1080px or 1200px
  <ExportedImage
    src={project.images[0]}
    fill={true}
    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 60vw, 50vw"
    alt="Screenshot"
  />
  ```

---

### LP-002: No Framer Motion Layout Prop for Width Transitions
* **Context**: When animating sidebar width transitions between Home (`40%`) and Subpages (`20%`), Framer Motion's `layout` prop injects fixed inline pixel style values (`width: 384px`) that override Tailwind responsive breakpoints upon browser window resizing.
* **Bad Pattern**:
  ```tsx
  // ❌ Injects fixed pixel dimensions that break Tailwind responsive classes
  <motion.aside layout className="w-full md:w-[35%] lg:w-[20%]" />
  ```
* **Good Pattern**:
  ```tsx
  // ✅ Pure CSS transition preserves responsive Tailwind percentage boundaries
  <aside className="w-full transition-sidebar md:w-[35%] lg:w-[20%]" />
  ```

---

### LP-003: React 19 Compiler & Manual Memoization
* **Context**: Next.js 16 with Babel React Compiler (`babel-plugin-react-compiler`) automatically memoizes components and hooks. Manual `useMemo` and `useCallback` clutter code and can interfere with compiler heuristics.
* **Bad Pattern**:
  ```tsx
  // ❌ Unnecessary boilerplate under React 19 compiler
  const filteredProjects = useMemo(() => projects.filter(p => p.cat === cat), [cat]);
  ```
* **Good Pattern**:
  ```tsx
  // ✅ Let the React Compiler handle memoization natively
  const filteredProjects = projects.filter(p => p.cat === cat);
  ```

---

### LP-004: SidebarPortal requestAnimationFrame
* **Context**: Portaling content into `#sidebar-root` during page transitions can crash or fail to mount if the DOM element isn't ready during `AnimatePresence mode="wait"`.
* **Bad Pattern**: Direct `createPortal(children, document.getElementById('sidebar-root'))` without mount verification.
* **Good Pattern**: Use `<SidebarPortal>` with `requestAnimationFrame` state update on mount.

---

### LP-005: Responsive 5-Tab Sidebar Fit
* **Context**: When adding a 5th category (`DESKTOP`) to the projects sidebar, using larger tab widths (`w-14` = 56px) and `gap-3` causes horizontal overflow on 1440px displays where the sidebar is 20% width (288px).
* **Good Pattern**: Use `w-11 md:w-9.5 xl:w-11.5` and `gap-2 md:gap-2.5` to ensure all 5 tabs fit seamlessly within 280px.
