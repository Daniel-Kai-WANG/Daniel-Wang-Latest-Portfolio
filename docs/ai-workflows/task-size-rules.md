# Task Size Rules

## Small task
Use `frontend-implementer-low`.

Examples:
- Text update
- One CSS selector change
- Small spacing adjustment
- Simple colour change
- Simple image replacement
- Minor copy update

## Medium task
Use `frontend-implementer-medium`.

Examples:
- Section layout update
- Responsive change
- One component behaviour update
- Small animation
- CSS or JS change affecting one feature
- Component-level UI improvement

## Large task
Use `frontend-implementer-high`.

Examples:
- Multiple sections
- Routing
- Full-stack feature
- Complex animation
- State management
- Global layout
- Cross-file refactor
- High-risk or ambiguous implementation

## UI mismatch task
Use `ui-designer` before implementation when the target is subjective.
Use `ui-mismatch-debugger` after a failed UI implementation attempt.

Do not keep asking implementers to randomly tweak visual values. Diagnose the code-level cause before further implementation.

## Agent selection rule
Use the lowest capable agent for the task. Use high effort only when the task is large, risky, cross-file, ambiguous, architecture-sensitive, or visually difficult after failed attempts.
