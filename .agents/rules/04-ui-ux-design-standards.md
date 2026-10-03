# UI/UX & Layout Design Standards

This rule governs all frontend UI, layout, typography, and styling decisions within this codebase to ensure authentic video game aesthetic (Persona & Yakuza inspired) and high-fidelity visual finish.

---

## 1. Visual Identity & Game HUD Aesthetic
- **Color Variables**: All coloring must use CSS variables defined in `app/globals.css` (e.g. `--color-primary`, `bg-background`, `text-foreground`, `text-muted`). Avoid hardcoded hex colors except for specific graphic shadows.
- **Strict Native Tailwind**: Prioritize native Tailwind classes (e.g., `h-13`, `text-sm`, `tracking-widest`) over arbitrary bracket values (e.g., `h-[52px]`, `text-[14px]`). Only use arbitrary values for exact hex dropshadows or specific percentages.
- **Skew & Angle Polygon Geometry**: Slanted cards, tabs, and buttons use polygon clip-paths or `-skew-x-12` transforms with compensating `skew-x-12` child spans.
- **Contrast & Legibility**: Ensure text over project screenshots is backed by gradient backdrops or opaque parchment cards so foreground type never collides with screenshot detail.

---

## 2. Spacing & Proportion Invariants

### A. Sidebar Proportions
- In `components/app-shell.tsx`, the sidebar width is constrained to:
  - Home: `md:w-[50%] lg:w-[40%]`
  - Sub-routes (Projects, Experience, Skills, Socials): `md:w-[35%] lg:w-[20%]`
- Category tabs inside subpages must fit comfortably within the 20% desktop sidebar without triggering horizontal overflow or clipping.

### B. Mobile Background Anchoring
- When rendering full-screen backgrounds (landscape illustrations) on mobile devices (`object-cover`), DO NOT use generic anchors like `object-right` or `object-center` if the character subject matter is off-center.
- Use Tailwind arbitrary percentage values (e.g., `object-[75%_center] md:object-center`) so the exact framing of the character is tuned per device.

---

## 3. Dark Mode Hover Symmetry & Contrast

1. **Paired Hover Styles**: Never write `hover:bg-*` without accounting for dark mode typography contrast.
2. **Text Inversion**: Slanted active menu slots invert foreground/background colors with high-contrast text strokes (`[-webkit-text-stroke:0.5px_currentColor]`).

---

## 4. Visual Verification
Whenever modifying UI:
1. Verify via live browser inspection at `http://localhost:3000`.
2. Inspect layout across both mobile (< 768px) and desktop (> 1280px) viewports.
3. Confirm keyboard navigation (`W/S`, `A/D`, `Q/E`, `Enter`, `Esc`) remains fully operational.
