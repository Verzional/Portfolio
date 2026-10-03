---
name: perf-audit
description: Superpower skill for auditing bundle size, image optimization, LCP metrics, and animation frame rates.
---

# Superpower: Performance Audit

Use this skill to audit frontend performance, image optimization, and bundle footprints.

## Audit Checklist:

1. **Next Image Optimizer**:
   - Check that all static images under `public/images/` are optimized into WebP format.
   - Verify every `<ExportedImage fill>` has an explicit responsive `sizes` attribute.
   - Run `pnpm build` to verify `next-image-export-optimizer` generates all responsive derivatives without errors.

2. **DOM & Layout Shifts**:
   - Verify that CSS `transition-[width]` is used instead of Framer Motion `layout` prop on responsive width containers.
   - Check that heavy backgrounds do not cause layout reflow on route mount.

3. **Production Static Export**:
   - Verify static export compiles cleanly: `pnpm build`.
