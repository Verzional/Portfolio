---
name: scaffold-module
description: Superpower skill for contract-first component, route, or feature scaffolding.
---

# Superpower: Scaffold Module

Use this skill to scaffold new components, routes, or features following the repository architecture.

## Workflow:

1. **Architecture Placement**:
   - Subpages: `app/<route>/` (`page.tsx` + `client.tsx` + `_components/`).
   - Shared components: `components/`.
   - Data & constants: `data/`.
   - Custom hooks: `hooks/`.
2. **Contract First**:
   - Define TypeScript interfaces and props before writing JSX.
   - Use explicit return types for all components and utility functions.
3. **Sidebar Integration**:
   - When introducing a subpage with a custom sidebar, use `<SidebarPortal>` to inject the `<SubMenu>` into `#sidebar-root`.
4. **Autonomous Verification**:
   - Run `pnpm verify` immediately after scaffolding.
