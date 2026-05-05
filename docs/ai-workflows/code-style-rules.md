# Code Style Rules for AI Agents

## Preferred stack
- Prefer TypeScript for new code.
- Prefer Tailwind CSS for layout, spacing, responsive design, and common styling.

## Modular development
- Keep code modular.
- Avoid files longer than 200 lines where possible.
- Split large files into components, helpers, constants, hooks, state management utilities, type files, and config files.

## Reuse-first implementation
Before writing new code, search for an existing similar implementation and reuse it where reasonable.

Check for:
- similar components
- similar section layouts
- similar helpers
- similar constants
- similar hooks
- similar state logic
- similar animation patterns
- similar responsive patterns
- similar styling patterns

Prefer extending existing code instead of creating a new parallel implementation.

## Avoid over-normalisation
- Do not add excessive validation, normalization, or defensive wrappers.
- Only add validation when necessary for correctness, user safety, data integrity, or runtime stability.

## UI mismatch handling
When a UI implementation does not match the target:
- Do not keep making random CSS changes.
- Do not blindly increase blur, opacity, shadows, borders, gradients, or animations.
- Identify the visual mismatch.
- Inspect relevant CSS, component, and layout structure.
- Translate the visual issue into code-level causes.
- Apply the smallest targeted fix.
- Re-run requirement and isolation checks.

## Comments
- Avoid comments in code.
- Only add comments when strictly necessary for non-obvious business logic, security-sensitive logic, unavoidable workaround, or browser/platform-specific issue.

## Naming
- Use concise and clear names.
- Avoid overly long or vague names.

## Language
Use English only in code, comments, file names, branch names, commit messages, codebase documentation, variable names, function names, and component names.

## Commit messages
Use conventional commit style.

```bash
<type>: <clear short description>
```

Common types:
- `feat:` new feature
- `fix:` bug fix
- `style:` visual or CSS-only change
- `refactor:` code restructuring without behaviour change
- `chore:` tooling, config, or maintenance
- `docs:` documentation update
- `test:` tests
- `perf:` performance improvement
