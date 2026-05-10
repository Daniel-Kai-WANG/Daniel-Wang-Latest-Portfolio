# AI_WORKFLOW

## Core
- Purpose: Daniel Wang personal portfolio; recruiter-friendly single page for full-stack + AI workflow positioning.
- Stack: Vite, React, TypeScript, Tailwind CSS, Framer Motion, clsx, tailwind-merge.
- Data: `src/data/profile.ts`, `src/data/experience.ts`, `src/data/projects.ts`, `src/data/skills.ts`.
- Main blocks: navbar, hero, experience journey, tech stack, projects, resume unavailable, contact.

## Theme
- Light: sakura pink + icy blue; soft sky gradients; clean botanical branch language.
- Dark: deep-ocean navy/cobalt with coral warmth; jellyfish/moon/starfish atmosphere; reef/coral language.
- Toggle: one decorative element per mode; light uses sakura; dark uses `src/assets/theme/jellyfish.gif`.
- Shared rule: reuse theme tokens and existing section shells; no duplicate parallel systems.

## Experience Journey
- Layout: keep left detail panel sticky/content-rich; rebuild only the right graph.
- Graph area: use full assigned panel height/width; avoid center-compressed diagrams.
- Endpoints: no cards/pods; each endpoint is one pearl/dot anchor + floating company label above it.
- Positioning: every node is centered on the exact terminal tip coordinate of its branch/coral arm; labels default to centered above node and shift only to avoid overflow.
- Interaction: hover/focus/click on endpoint updates the left detail panel; interaction model unchanged.

### Dark graph
- One reef-like base across the bottom.
- Exactly 5 major coral arms.
- Silhouette: fan coral / branching coral; wide spread; no wood trunk; no crossing limbs; rounded tips; sparse buds only.
- Material: glowing deep-sea coral, not bark or pipe rails.

### Light graph
- One main botanical base/trunk at the bottom.
- Exactly 5 major branches.
- Silhouette: clean sakura-tree composition; balanced left/right spread; minimal offshoots; no messy crossings.

### Graph animation
- Fixed order: base -> branch/coral growth -> small tip accents -> endpoint dot -> floating label -> active glow.
- Nodes must not appear before the branch/coral growth finishes.
- If a node looks detached from the branch end, the implementation is wrong.

## Atmosphere
- Light floating elements: sakura + uploaded snowflake assets together, subtle page-wide drift.
- Dark floating elements: project jellyfish + moon + starfish only.
- Ambient gradients/orbs may support the page but must not replace the requested themed objects.

## Assets
- Dark GIF: `src/assets/theme/jellyfish.gif`
- Dark floating raster assets: `src/assets/theme/starfish-pink.png`, `src/assets/theme/starfish-light.png`
- Light floating raster assets: `src/assets/theme/snowflake-soft.png`, `src/assets/theme/snowflake-cluster.png`
- Reference coral traits used in dark graph:
  - reef-like base
  - 5 upward/outward arms
  - blunt rounded tips
  - sparse buds/polyps
  - wide fan spread
  - no trunk / no bark / no random crossings

## Responsive
- Must remain readable at 375, 390, 430, 768, 1024, 1440.
- No horizontal overflow.
- Endpoint dots remain tappable on mobile.
- Floating labels must stay visually attached to their own node and avoid clipping near edges.

## Validation
- Run: `npm run typecheck`, `npm run lint`, `npm run build`
- Verify:
  - dark graph reads as coral, not tree/network
  - light graph reads as ordered sakura branching
  - exactly 5 main branches in both themes
  - graph fills panel intentionally
  - node timing/order follows the fixed animation sequence
  - atmosphere assets match theme rules
