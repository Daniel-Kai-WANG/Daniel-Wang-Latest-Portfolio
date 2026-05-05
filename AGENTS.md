# AGENTS.md

## Project context
This is a personal portfolio project. The goal is to keep the UI clean, modern, responsive, reusable, and maintainable. The workflow must protect existing UI and avoid unrelated changes.

## Core working rules
- Inspect relevant files before editing.
- Prefer minimal, targeted changes.
- Do not refactor unrelated code.
- Do not rename classes, components, files, routes, or branches unless explicitly requested.
- Do not change unrelated UI sections.
- Do not add dependencies unless explicitly approved.
- Preserve responsive behaviour and avoid horizontal overflow.
- Keep all codebase-facing content in English.

## Code style and architecture preferences
- Prefer TypeScript for new code.
- Prefer Tailwind CSS for layout, spacing, responsive design, and common styling.
- Keep code modular and easy to maintain.
- Avoid creating or expanding a file beyond 200 lines where possible.
- Split large files into components, helpers, constants, hooks, state utilities, config files, and type files.
- Prefer reuse-first development.
- Avoid over-engineering.
- Avoid excessive validation, normalization, and defensive code.
- Only add validation or normalization when required for correctness, user safety, data integrity, or runtime stability.
- Do not add generic `normalizeX`, `sanitizeX`, or validation helpers unless clearly required.
- Avoid code comments unless strictly necessary for non-obvious business logic, security-sensitive logic, browser-specific behaviour, or unavoidable workarounds.
- Use concise, clear names.
- Do not use Chinese in code, comments, file names, branch names, commit messages, variables, functions, components, or codebase documentation.

## Reuse-first implementation rule
- Before writing new code, search for an existing similar implementation and reuse it where reasonable.
- Check for similar components, helpers, constants, hooks, layouts, animation patterns, responsive patterns, and styling patterns.
- Prefer extending existing implementation instead of creating a new isolated version.
- Do not create parallel components or repeated logic when an existing pattern can be reused cleanly.
- If an existing implementation covers most of the new requirement, adapt it carefully instead of building a separate version.
- If reuse is not suitable, briefly explain why before creating new code.

## Branch workflow
All feature work must start from `staging`.

```bash
git checkout staging
git checkout -b ai/<short-feature-name>
```

Each branch should contain only one feature or one tightly related fix.

## Task size and agent selection
Before implementation, classify the task size.

### Small task
Use `frontend-implementer-low`.

Examples:
- Text updates
- One selector CSS refinement
- Small spacing changes
- Simple colour or typography updates
- Simple image replacement
- Minor copy or label changes

### Medium task
Use `frontend-implementer-medium`.

Examples:
- One section layout update
- Responsive changes for one component
- Animation refinement
- Small JavaScript behaviour update
- Component-level UI update
- Styling changes affecting one feature area

### Large task
Use `frontend-implementer-high`.

Examples:
- Multiple sections
- Cross-file changes
- Complex animation
- Routing changes
- State management changes
- Full-stack changes
- Changes that can affect multiple UI areas
- Ambiguous or high-risk implementation work

## Required subagent workflow
1. Use `requirement-planner` to convert the user request into a concise implementation brief.
2. Classify the task as small, medium, or large.
3. Create a feature branch from `staging`.
4. Use the appropriate implementer.
5. After implementation, use `feature-verifier`.
6. Use `isolation-reviewer`.
7. Merge into `staging` only when both verification checks pass.
8. If either check fails, do not merge. Fix the issue on the feature branch first.
9. After all tasks are merged into `staging`, use `final-auditor`.

## UI mismatch recovery workflow
When a UI implementation does not match the requested design after one attempt, do not keep making random visual adjustments.

Use this recovery workflow:
1. Stop direct implementation.
2. Compare the current UI against the target requirement or reference.
3. Identify the visual mismatch in plain language.
4. Inspect the relevant CSS, components, and layout structure.
5. Translate the visual issue into code-level causes.
6. Propose the smallest targeted fix.
7. Apply only that targeted fix.
8. Run `feature-verifier` again.
9. Run `isolation-reviewer` again.

If the UI still does not match after two implementation attempts:
- Use `ui-designer` to restate the visual target.
- Use `ui-mismatch-debugger` to analyse the current implementation.
- Do not continue with broad trial-and-error changes.
- Do not redesign unrelated UI.
- Do not keep increasing blur, shadow, border, opacity, gradients, or animation without identifying the code-level cause.

## Verification rules
A feature branch can only be merged into `staging` when both checks pass.

### Check 1: Requirement match
The implemented feature must match the original requirement and acceptance criteria.

### Check 2: Change isolation
The implementation must only affect the intended feature. It must not pollute or visually break unrelated components, pages, sections, layout, navigation, footer, or global styles.

## Merge rule
Do not merge into `staging` if:
- The feature does not match the requirement.
- Unrelated files or UI areas were changed.
- Tests or lint checks fail.
- Mobile layout is broken.
- There is horizontal overflow.
- The branch includes broad refactors not requested.
- The branch introduces unnecessary duplicate code.
- The branch adds unnecessary validation, normalization, comments, or dependencies.
- A UI mismatch was not diagnosed before repeated visual changes.

When safe to merge:

```bash
git checkout staging
git merge --no-ff <feature-branch-name>
```

## Commit message rules
Use clear conventional commit messages.

Format:

```bash
<type>: <clear short description>
```

Common types:
- `feat:` for new features
- `fix:` for bug fixes
- `style:` for visual-only CSS/UI changes
- `refactor:` for behaviour-preserving restructuring
- `chore:` for tooling/config/maintenance
- `docs:` for documentation
- `test:` for tests
- `perf:` for performance improvements

Examples:
```bash
feat: add project filter tabs
fix: prevent mobile card overflow
style: refine hero spacing
refactor: split portfolio sections
chore: update agent workflow config
docs: add branch workflow guide
```

## Output requirements
After each task, summarise:
- Task size classification
- Agent used
- Branch created
- Files changed
- Key selectors/components changed
- Reuse applied
- UI mismatch recovery used, if applicable
- Verification result
- Isolation review result
- Whether merged into `staging`
- Manual checks still needed
