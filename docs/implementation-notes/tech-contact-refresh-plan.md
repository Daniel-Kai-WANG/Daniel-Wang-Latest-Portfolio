# Tech Contact Refresh Plan

## Objective

Rebuild the Tech Stack System and Contact CTA sections so they match the written requirements, keep the current portfolio visual identity, and avoid unrelated UI changes.

## Task Size

- Classification: Large
- Intended implementer: `frontend-implementer-high` equivalent

## Relevant Existing Structure

- Tech stack section: [src/components/sections/TechStackSection.tsx](/Users/danielwang/Projects/code/daniel-wang-workflow-portfolio-ai-tech-contact/src/components/sections/TechStackSection.tsx)
- Contact section and current form flow: [src/components/sections/ContactSection.tsx](/Users/danielwang/Projects/code/daniel-wang-workflow-portfolio-ai-tech-contact/src/components/sections/ContactSection.tsx)
- Theme tokens and shared section surface styles: [src/styles/theme.css](/Users/danielwang/Projects/code/daniel-wang-workflow-portfolio-ai-tech-contact/src/styles/theme.css), [src/index.css](/Users/danielwang/Projects/code/daniel-wang-workflow-portfolio-ai-tech-contact/src/index.css)
- Shared icons: [src/components/common/Icons.tsx](/Users/danielwang/Projects/code/daniel-wang-workflow-portfolio-ai-tech-contact/src/components/common/Icons.tsx)
- Profile links and contact data: [src/data/profile.ts](/Users/danielwang/Projects/code/daniel-wang-workflow-portfolio-ai-tech-contact/src/data/profile.ts)
- Existing skill data shape to adapt or replace carefully: [src/data/skills.ts](/Users/danielwang/Projects/code/daniel-wang-workflow-portfolio-ai-tech-contact/src/data/skills.ts)

## Constraints

- Preserve current colour theme, gradients, typography system, and overall layout language.
- Do not edit unrelated sections.
- Keep codebase-facing content in English.
- Prefer reusable data/config files and narrow components.
- Avoid new dependencies unless required for the success animation.

## Implementation Plan

1. Add structured tech stack data and local logo assets under `src/assets/logos/`.
2. Rebuild the Tech Stack section into a two-column desktop layout and stacked mobile layout with:
   - selectable category list
   - active detail card
   - responsive multi-row animated logo carousel
3. Split Contact CTA into reusable contact-focused components while keeping the current section theme.
4. Replace redirect form submission with in-page async submission using a static-friendly service and environment placeholders.
5. Integrate the provided success animation JSON into an in-page success state with a soft tender-green background.
6. Document setup steps and verify lint, build, desktop/mobile layout, overflow, and submission states.

## Risks

- Form delivery cannot be fully live without service configuration.
- Logo aspect ratios may need normalization inside consistent logo tiles.
- Carousel sizing must stay within the left detail card height on desktop.

## Verification Plan

- Run `npm run build`
- Run `npm run lint`
- Browser-check desktop and mobile layouts
- Validate category switching, carousel containment, contact button links, form validation, loading, success, and error states
- Review changed files for isolation before handoff
