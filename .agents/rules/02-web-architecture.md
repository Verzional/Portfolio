# Next.js 16 & Web Domain Architecture Standards

This rule governs frontend development within Verzional's Portfolio (Next.js 16 App Router, React 19, Tailwind CSS v4, Motion).

## 1. App Router, Static Export & RSC Boundaries
- **Static Export (`output: "export"`)**: The site is statically exported with `unoptimized: true` on Cloudflare Pages.
  - Sub-routes export explicit `metadata` with a `title` to leverage layout templates.
  - Interactive client pages mark `"use client";` at the top.
- **React 19 Compiler**: The project runs with `reactCompiler: true`. Do NOT write manual `React.memo`, `useMemo`, or `useCallback` unless strictly required by an ESLint dependency warning.
- **React Hooks**: Do NOT use `useEffect` to sync state or props to `useRef` just to bypass dependency arrays. Pass dependencies properly.
- **Portals (`<SidebarPortal>`)**: Subpages manage their own sidebar UI by portaling `<SubMenu>` via `<SidebarPortal>` into the `#sidebar-root`. It safely handles hydration and `AnimatePresence mode="wait"` DOM transitions.

## 2. Next Image Export Optimizer & Sizing
- Use `ExportedImage` from `next-image-export-optimizer` for optimized web asset serving.
- **Sizes Prop Invariant**: On images using `fill={true}`, ALWAYS supply responsive `sizes` (e.g. `sizes="(max-width: 768px) 100vw, (max-width: 1280px) 60vw, 50vw"`). Omitting `sizes` forces the browser to request the 4K variant (`3840.WEBP`), causing severe LCP degradation and GPU bandwidth spikes.
- Do NOT add `quality` attributes to `<ExportedImage />` components, as they are ignored by static export.

## 3. Motion & Animation Physics
- **Motion Library**: ALWAYS import `motion` from `"motion/react"` (v12 style), NEVER `"framer-motion"`.
- **Layout Shifts**: Avoid using Framer Motion's `layout` prop for responsive width changes; it injects inline pixel boundaries that break Tailwind responsive classes. Use pure CSS `transition-[width]` classes instead.
- **Video Game UI Transitions**: Avoid generic, flat `easeOut` crossfades. Use punchy, weighted transitions (e.g. `ease: [0.33, 1, 0.68, 1]`) combined with subtle scale shifts (e.g., entering at `scale: 1.03`, exiting at `scale: 0.98`) to mimic the heavy, tactile feel of menus in Persona 5 and Yakuza.

## 4. Security & Links
- Always append `"noopener,noreferrer"` when using `window.open(..., "_blank")` or `<a target="_blank" rel="noopener,noreferrer">`.
