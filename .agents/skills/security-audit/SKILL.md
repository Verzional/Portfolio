---
name: security-audit
description: Superpower skill for auditing dependencies, secret leaks, and external link security.
---

# Superpower: Security Audit

Use this skill to inspect repository dependencies, external link targets, and sensitive credentials.

## Audit Checklist:

1. **Dependency Audit**:
   - Run `pnpm audit` to check for known vulnerabilities in third-party packages.
2. **External Link Hardening**:
   - Grep for `<a` tags and `window.open` calls to ensure `rel="noopener,noreferrer"` is enforced on all external tabs.
3. **Secret Leak Detection**:
   - Check `.env*` files are listed in `.gitignore`.
   - Ensure no private tokens or API keys are committed to Git.
