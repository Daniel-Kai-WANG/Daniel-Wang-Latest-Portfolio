# WORK_LOG — Daniel Wang Portfolio

## 1. Project Summary
Built a single-page portfolio for Daniel Wang positioned as a Full-Stack Developer and AI Workflow Builder. The site now uses a more personalised dual-theme system that blends K-pop stage energy, sakura softness, and winter-snow atmosphere into both modes while keeping the site professional and recruiter-friendly.

## 2. Setup Work Completed
- Created a Vite + React + TypeScript project.
- Added Tailwind CSS with a token-based theme layer.
- Added Framer Motion for reveal and workflow animations.
- Added utility dependencies for class composition and Tailwind conflict handling.
- Added a GitHub Pages deployment workflow and a QR code generation script.
- Added the requested folder structure for data, layout, sections, animation, hooks, lib, styles, scripts, docs, and QR output.

## 3. Branch Workflow Used
- Local git repository initialized.
- `main` branch created for the root commit.
- `staging` branch created as the active follow-up branch.
- Enhancement work was split into small feature branches from `staging`:
  - `feature/personal-theme-aura`
  - `feature/celestial-pull-toggle`
  - `feature/signature-motion-effects`
  - `feature/update-work-log`
- Planned ongoing workflow remains `main -> staging -> feature/* -> staging`.
- Manual GitHub repository creation is still required because GitHub CLI is not installed in this environment.

## 4. Features Completed
### Light Theme Base
Implemented the page shell, floating navigation, theme tokens, responsive container system, and data-driven content structure.

### Theme Toggle
Replaced the basic slider with a custom celestial pull-toggle. Users pull a hanging charm downward to trigger the theme change, while the moon drops and the sun rises inside the switch chamber. The interaction keeps keyboard support and `localStorage` persistence.

### Hero Section
Built the hero with the exact badge, heading, subtitle, stats, CTA links, and a themed workflow panel. Added a mouse-reactive glow field plus more personal K-pop / sakura / snow visual storytelling.

### Experience Journey
Added all five experience entries from the resume using cloud-like cards in light mode and glossy stage-inspired cards in dark mode.

### Tech Stack
Added six grouped stack categories with themed metaphors and readable chip-based lists.

### Featured Projects
Added four featured project cards synthesized from resume work history with safe CTA behavior.

### Resume Unavailable Section
Added the playful “Resume temporarily out of office.” section with theme-specific visuals and a disabled secondary action.

### Contact CTA
Added email, LinkedIn, portfolio archive, and Brisbane location in a responsive contact section.

### Deployment and QR Code
Added a GitHub Pages workflow and `scripts/generate-qr.mjs`.
Generated provisional QR images for the anticipated GitHub Pages URL:
`https://daniel-kai-wang.github.io/daniel-ai-workflow-portfolio/`

### Personal Theme Enhancements
Expanded the visual direction so both themes feel more specific to Daniel instead of generic light/dark styling:
- Light mode now mixes spring-sky clarity, drifting sakura petals, and crisp snow-light accents.
- Dark mode now mixes K-pop concert polish, glossy stage lighting, neon-magazine energy, and cold winter atmosphere.
- Shared atmospheric effects keep both modes visually related rather than feeling like two separate websites.

### Signature Motion Effects
Added a stronger motion language inspired by high-quality animated portfolio sites while keeping the site readable and performant:
- a global atmospheric layer with drifting sakura petals and falling snow
- a custom section divider with looping motion
- mouse-reactive hero lighting
- hover tilt and lift on experience, project, and contact cards
- sweeping highlight passes across premium cards
- subtle stage beams and aura glows in dark mode

## 5. Animation / Visual Effects Added
- Section fade-up reveal on scroll.
- Gentle workflow motion in the hero panel.
- Floating sky-mode ambient orbs and soft card depth.
- Global sakura drift and snowflake fall through the page shell.
- Mouse-reactive hero glow that follows pointer movement.
- Custom pull-trigger moon/sun theme transition.
- Restrained dark-mode glow and stage-beam atmosphere for a premium stage feel.
- Hover tilt and lift behavior on experience, project, and contact cards.
- Sweep-light passes across premium cards.
- Motion divider band between hero and experience sections.
- Smooth theme transition timing across surfaces and borders.

## 6. Third-Party Libraries Used
| Library | Purpose | Why used | Maintenance check |
|---|---|---|---|
| framer-motion | animation | Mature React animation library for reveal and theme-adjacent motion | `npm view framer-motion version time.modified description` -> modified `2026-04-28` |
| clsx | conditional class names | Lightweight class composition utility | `npm view clsx version time.modified description` -> modified `2025-06-27` |
| tailwind-merge | class conflict handling | Keeps Tailwind class composition clean and predictable | `npm view tailwind-merge version time.modified description` -> modified `2026-04-26` |
| tailwindcss | styling system | Required utility CSS framework for the design system | `npm view tailwindcss version time.modified description` -> modified `2026-05-02` |
| postcss | Tailwind processing | Required Tailwind/PostCSS pipeline dependency | `npm view postcss version time.modified description` -> modified `2026-04-30` |
| autoprefixer | CSS prefixing | Required Tailwind/PostCSS pipeline dependency | `npm view autoprefixer version time.modified description` -> modified `2026-04-13` |
| qrcode | QR generation | Mature QR code package for generating deployment QR images | `npm view qrcode version time.modified description` -> modified `2025-11-13` |

## 7. Validation Results
- `npm run typecheck`: passed
- `npm run build`: passed
- `npm run lint`: passed
- Desktop manual check: partial
- Tablet manual check: pending
- Mobile manual check: pending
- Theme toggle check: partial DOM-level verification in local browser
- QR scan check: not verified against a live deployed URL yet

## 8. Git Reference Pattern Used
Enhancement commits followed Daniel's preferred short style:
- `feat: ...` for new visual or interaction additions
- `fixed: ...` reserved for future repair-only changes

This enhancement round was intentionally broken into smaller commits instead of one large batch commit so the history better reflects real feature delivery.

## 9. Known Issues
- GitHub repository creation and live deployment were not completed automatically because GitHub CLI is unavailable.
- The generated QR files are based on the expected GitHub Pages URL and still need real deployment verification.
- Browser-plugin screenshots in Arc did not faithfully show the rendered hero, so visual verification relied partly on DOM inspection rather than a full screenshot pass.

## 10. Next Recommended Steps
- Run validation commands and browser-based responsive checks.
- Create the GitHub repository manually and enable GitHub Pages.
- Run `node scripts/generate-qr.mjs <live-url>` after deployment.
- Replace private-project CTA copy with public case study links if they become available.
