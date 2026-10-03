---
name: ui-audit
description: Superpower skill for auditing UI/UX design, WCAG contrast ratios, typography scale, and responsive layout behavior.
---

# Superpower: UI/UX Audit

Use this skill to audit visual styling, responsive layouts, and contrast ratios.

## Audit Checklist:

1. **Design Tokens & Variables**:
   - Ensure all colors reference CSS variables in `app/globals.css`.
   - Verify native Tailwind classes are prioritized over arbitrary bracket values.
2. **Video Game Aesthetic (Persona / Yakuza)**:
   - Check that polygons, skewed badges, and font strokes render consistently.
   - Verify spring animations import from `motion/react` with weighted ease curves.
3. **Contrast & Readability**:
   - Verify text over dark backgrounds meets minimum 4.5:1 WCAG AA contrast.
   - Ensure project descriptions on hero overlays remain legible against bright screenshots via gradient or solid backdrops.
4. **Responsive Layout**:
   - Check mobile layout (< 768px) and desktop layout (> 1280px).
   - Ensure category tabs fit without unwanted horizontal scrollbars.
