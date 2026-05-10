# AI Branch Workflow

## Goal
Every AI-generated feature should be isolated in its own branch, verified, then merged into `staging`.

## Standard workflow
1. Start from `staging`.
2. Create a feature branch.
3. Implement only the current feature.
4. Run `feature-verifier`.
5. Run `isolation-reviewer`.
6. Merge into `staging` only if both pass.
7. After all features are merged, run `final-auditor`.

```bash
git checkout staging
git checkout -b ai/<short-feature-name>
git checkout staging
git merge --no-ff ai/<short-feature-name>
```

## UI mismatch recovery in branch workflow
If a UI feature does not match the target after the first implementation:
1. Do not continue with random visual adjustments.
2. Use `ui-mismatch-debugger`.
3. Identify the visual mismatch and code-level causes.
4. Apply only the smallest targeted fix.
5. Run `feature-verifier` again.
6. Run `isolation-reviewer` again.

## Merge requirements
A branch can be merged only when:
- Feature requirement match: PASS
- Change isolation review: PASS
- No unresolved UI mismatch
- No unrelated UI pollution
- No known mobile overflow
- No broad refactor
- No accidental dependency changes
- No duplicate code
- No unnecessary validation, normalization, comments, or Chinese codebase-facing content
- Commit messages follow conventional commit style
