# AI_WORKFLOW

purpose: Daniel Wang portfolio; full-stack + AI workflow positioning in a single-page experience.
stack: Vite, React, TypeScript, Tailwind CSS, Framer Motion, clsx, tailwind-merge.
branches: main -> staging -> feature/* -> staging.
themes: light=sky/clouds; dark=music-stage/glossy neon, toned down for professional use.
content_source: resume-derived data in src/data/profile.ts, src/data/experience.ts, src/data/projects.ts, src/data/skills.ts.
features:
- floating navbar
- sun/moon theme toggle with localStorage persistence
- hero workflow section
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
- animation/Reveal
- sections/HeroSection
- sections/ExperienceSection
- sections/TechStackSection
- sections/ProjectsSection
- sections/ResumeUnavailableSection
- sections/ContactSection
data_map:
- profile: hero copy, nav, workflow steps, contact links
- experience: timeline cards
- projects: featured cards + CTA behavior
- skills: grouped stack categories
animation:
- global reveal
- light: floating cards, sky-route motion, soft gradient orbs
- dark: restrained glow, workflow pulse, premium stage-card shimmer
future:
- connect real public project links when available
- generate and verify QR after live deployment exists
- add screenshot-based regression checks
