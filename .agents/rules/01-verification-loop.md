# Autonomous Verification Protocol

Every agent working on this codebase must autonomously self-verify before requesting human review or declaring completion.

## Verification Gatekeeper
The primary gatekeeper command is:
```bash
pnpm verify
```
This runs the dual tiers of static verification:
1. **Typecheck (`pnpm typecheck`)**: Validates TypeScript contracts and syntax without emitting files (`tsc --noEmit`).
2. **Lint (`pnpm lint`)**: Validates code conventions, hook dependencies, React strict rules, and formatting (`eslint .`).

For full build verification, run:
```bash
pnpm build
```
This executes `next build && next-image-export-optimizer` to guarantee static export safety and image pipeline compilation.

## Autonomous Triage Procedure
If `pnpm verify` fails:
1. **Read the exact error stack trace**: Extract filename, line number, and error code.
2. **Do not guess or apply shotgun fixes**: Inspect the broken line in context using `view_file`.
3. **Fix the root cause natively**:
   - For type errors: check interface mismatches or missing nullability guards.
   - For lint errors: satisfy ESLint rules directly. **Never bypass with `// eslint-disable`**.
4. **Re-run `pnpm verify`**: Confirm the fix resolves the issue with zero regressions.
5. **Only when all green**: Report outcome with evidence of verification.
