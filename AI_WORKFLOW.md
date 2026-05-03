# AI_WORKFLOW

purpose: Daniel Wang portfolio; full-stack + AI workflow positioning in a single-page experience.
stack: Vite, React, TypeScript, Tailwind CSS, Framer Motion, clsx, tailwind-merge.
branches: main -> staging -> feature/* -> staging.
themes: light=sakura + snowfall sky; dark=K-pop midnight stage + jellyfish drift + music-note accents.
content_source: resume-derived data in src/data/profile.ts, src/data/experience.ts, src/data/projects.ts, src/data/skills.ts.
features:
- fixed floating navbar
- horizontal 3D theme toggle with localStorage persistence
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
- light: floating cards, sky-route motion, soft gradient orbs, spring-air highlights
- dark: restrained glow, workflow pulse, jellyfish-stage atmosphere
- hover tilt/lift and lighter CSS sheen passes on key cards
future:
- connect real public project links when available
- generate and verify QR after live deployment exists
- add screenshot-based regression checks
