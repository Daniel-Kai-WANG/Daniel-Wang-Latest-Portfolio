# AI_WORKFLOW

purpose: Daniel Wang portfolio; full-stack + AI workflow positioning in a single-page experience.
stack: Vite, React, TypeScript, Tailwind CSS, Framer Motion, clsx, tailwind-merge.
branches: main -> staging -> feature/* -> staging.
themes: light=sakura + snowfall sky; dark=K-pop midnight stage + jellyfish drift + music-note accents.
content_source: resume-derived data in src/data/profile.ts, src/data/experience.ts, src/data/projects.ts, src/data/skills.ts.
features:
- fixed floating navbar
- circular ring-style theme toggle with localStorage persistence
- hero workflow section
- signature divider between hero and experience
- experience journey
- tech stack system
- featured projects
- resume unavailable section
- contact CTA
- GitHub Pages workflow
- QR generation script
validation:
- npm run typecheck
- npm run build
- npm run lint
- manual responsive review at 375, 390, 430, 768, 1024, 1440
- theme toggle persistence and anchor-link checks
- feature-specific validation was run after each theme UI branch before merging back to staging
components:
- layout/PageShell
- layout/Navbar
- theme/ThemeProvider
- theme/ThemeToggle
- animation/AtmosphericAura
- animation/ThemeShiftBackdrop
- animation/Reveal
- sections/HeroSection
- sections/ExperienceSection
- sections/TechStackSection
- sections/ProjectsSection
- sections/ResumeUnavailableSection
- sections/ContactSection
- sections/SignatureDivider
data_map:
- profile: hero copy, nav, workflow steps, contact links
- experience: timeline cards
- projects: featured cards + CTA behavior
- skills: grouped stack categories
animation:
- global reveal
- global sakura petal drift and snow fall in light mode
- floating music notes and jellyfish drift in dark mode
- block-level sunrise / moonrise transition backdrops during theme switch
- hero mouse-reactive glow and themed accents
- signature divider loop motion
- light: floating cards, seasonal workflow motion, soft gradient orbs, spring-air highlights
- dark: restrained glow, workflow pulse, jellyfish-stage atmosphere
- hover tilt/lift and lighter CSS sheen passes on key cards
theme_update_2026_05_04:
- created branch `feat/theme-toggle-ring`
- created branch `feat/light-mode-seasonal-decor`
- created branch `feat/theme-transition-sun-moon`
- created branch `docs/update-ai-workflow-theme-updates`
- replaced the previous capsule-like theme control with a premium circular ring toggle sized to fit the existing navbar without layout collisions
- removed the remaining light-mode plane-style decorative elements from hero and resume-related surfaces and replaced them with cherry blossom and snowflake motifs
- refined `ThemeShiftBackdrop` so large sections now show clearer vertical sun-down / moon-up and moon-down / sun-up motion during theme changes
implementation_notes:
- no new third-party libraries were added; the update stays on React, Tailwind CSS, and Framer Motion
- the repository currently has no configured `origin` remote, so the requested `git pull origin staging` step could not be executed locally
- theme transition logic remains centralized in `ThemeProvider` and `ThemeShiftBackdrop` to avoid duplicated animation code across sections
- light-mode decorative cleanup focused on visible section elements rather than deleting unused icon definitions from the shared icon file
remaining_risks:
- console-error verification was covered through successful production build rather than a full live browser console pass
- visual QA in an interactive browser is still recommended for final tuning of the new ring toggle proportions on smaller mobile widths
future:
- connect real public project links when available
- generate and verify QR after live deployment exists
- add screenshot-based regression checks
