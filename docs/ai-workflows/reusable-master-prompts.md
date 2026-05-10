# Reusable Master Prompts

## Full AI Team Workflow Prompt

```text
You are the main orchestrator for this portfolio project.

Follow `AGENTS.md`.

Task:
[PASTE TASK HERE]

Workflow:
1. Use `requirement-planner` to analyse the task and classify it as small, medium, or large.
2. Based on task size, choose:
   - `frontend-implementer-low` for small tasks
   - `frontend-implementer-medium` for medium tasks
   - `frontend-implementer-high` for large or risky tasks
3. Create a feature branch from `staging` using `ai/<short-feature-name>`.
4. Implement only the current feature on that branch.
5. Use `feature-verifier`.
6. Use `isolation-reviewer`.
7. If the feature is visual and does not match the target after one attempt, use `ui-mismatch-debugger`.
8. Merge into `staging` only if both checks pass.
9. After all requested tasks are merged into `staging`, use `final-auditor`.

Important:
- Do not make broad refactors.
- Do not change unrelated UI.
- Do not add dependencies unless approved.
- Keep each branch focused on one feature.
- Reuse existing implementations where reasonable.
- Prefer TypeScript and Tailwind CSS.
- Keep files modular and avoid files over 200 lines where possible.
- Avoid unnecessary comments.
- Use concise naming.
- Do not use Chinese in codebase-facing content.
- Avoid excessive validation and normalization.
- Use conventional commit messages.

Final output:
- Task classification
- Branch name
- Implementer used
- Files changed
- Reuse applied
- UI mismatch recovery used
- Feature verification result
- Isolation review result
- Merge status
- Final audit result if applicable
```

## UI Mismatch Recovery Prompt

```text
Follow `AGENTS.md`.

The current UI implementation does not match the requested target.

Use `ui-mismatch-debugger`.

Do not edit files yet.

Analyse:
1. What is visually wrong.
2. What the target should be.
3. Which CSS, component, DOM, or layout structure likely causes the mismatch.
4. Which selectors or files should be changed.
5. What should not be changed.
6. What the smallest targeted fix should be.

Output:
- Visual mismatch
- Code-level causes
- Relevant selectors/files/components
- Minimal fix direction
- Prompt for implementer
- Verification checklist
```

## Review Prompt

```text
Follow `AGENTS.md`.

Review the latest feature branch only.

Use:
1. `feature-verifier`
2. `isolation-reviewer`

Check:
- Whether the implementation matches the requirement.
- Whether only the intended feature was changed.
- Whether unrelated UI was affected.
- Whether mobile layout still works.
- Whether there is horizontal overflow.
- Whether there is duplicated code.
- Whether existing patterns should have been reused.
- Whether unnecessary comments, validation, normalization, or dependencies were added.
- Whether naming is concise.
- Whether codebase-facing content is English only.
- Whether commit messages follow conventional commit style.
- Whether unresolved UI mismatch remains.

Do not rewrite code unless a real issue is found.
```
