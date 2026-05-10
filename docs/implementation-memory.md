# Implementation Memory

## Follow-up correction: Tech Stack and Contact Form

### What the previous implementation missed

1. The Tech Stack carousel used an always-looping duplicated marquee instead of a staged first-pass train animation.
Cause: instruction not followed, then implementation remained incomplete.

2. The carousel snap-back came from reset-based looping rather than a controlled row-by-row path.
Cause: technical limitation in the chosen animation approach.

3. The moving logo cards did not keep visible technology labels.
Cause: instruction not followed.

4. Several technology assets were still monochrome where coloured brand marks were expected.
Cause: implementation incomplete.

5. The `Resume temporarily out of office` section was still rendered as a standalone visible section.
Cause: instruction not followed.

6. The contact form only checked `response.ok`, even though FormSubmit can respond with HTTP `200` and `success: "false"`.
Cause: implementation incomplete.

7. Runtime debugging was briefly confused by a stale local preview/browser context that did not match the actively served branch.
Cause: technical environment mismatch rather than product logic.

### What changed in this correction pass

- Protected current `staging` work through a temporary save branch and merged that safe snapshot back before continuing feature work.
- Merged the latest `staging` updates into the working feature branch without destructive git commands.
- Replaced the Tech Stack logo marquee with a controlled serpentine animation that stages the first pass before the continuous loop.
- Kept the logo cards compact while restoring visible text labels beneath each logo.
- Refreshed local logo assets with coloured SVGs where suitable and kept local asset loading in place.
- Removed the standalone resume maintenance section from the page flow.
- Reused subtle sheen and glow accents from that removed section across Tech Stack, Featured Projects, and Contact.
- Tightened the contact form handler so it only enters the success state when the submission service reports actual success.
- Updated setup notes for FormSubmit response handling and local endpoint overrides.

### Rules to remember for future Codex tasks

1. Treat screenshots as layout references only unless explicitly told to copy visual style.
2. Preserve the current website colour theme unless explicitly asked to change it.
3. For complex animation requirements, inspect and fix positioning issues before changing the animation design.
4. For logo-based UI, always include visible labels when logos may be visually ambiguous.
5. Use official coloured logos when the user asks for technology logos.
6. Never leave form submission logic in a state where it redirects unexpectedly or throws unhandled promise errors.
7. Always test required behaviours after implementation rather than assuming they work.
8. Before starting new work, protect staging changes through a safe branch and merge workflow when requested.
9. Do not use destructive git commands unless explicitly approved.

## Second correction: Logo completeness, seamless carousel, and reused design elements

### Missed requirement: missing logos

- The prompt requirement was present. This was not a missing requirement issue.
- The failure came from incomplete implementation and insufficient testing.
- The data mapping existed, but the carousel still relied on plain `<img>` rendering without a stronger local fallback path or a visual verification pass across every listed technology.
- Some SVG assets were present locally but were not rendering clearly enough in the live carousel, and the implementation did not guarantee that every visible card would show both a readable logo mark and a text label.
- The fix was to move the logo registry to a dedicated helper, keep every logo local, add explicit `id`, `name`, `categoryId`, `logoPath`, `logoMarkup`, and `altText`, and render the artwork through a more reliable local inline-SVG path with documented local fallback icons for abstract workflow items.

### Missed requirement: carousel gap

- The prompt requirement was present. The problem was a misunderstanding of seamless-carousel behavior.
- The previous implementation handled the first-pass motion, but it never switched into a true duplicated-sequence loop afterward.
- The exact technical cause was that the code kept animating individual cards across a staged path instead of building a row track where `logoN` is immediately followed by `logo1`.
- A second technical issue was uneven row splitting, which could leave a tiny final row and make the repeated sequence feel visually weak even when duplication existed.
- The fix was to keep the staged first pass, then switch into a separate seamless loop state that duplicates each row sequence enough times to cover the viewport and resets only at an identical visual position.

### Missed requirement: reuse removed resume design elements

- The prompt requirement was present. The earlier pass implemented the removal, but not the reuse strongly enough.
- The previous change only carried over faint sheen and glow treatments, which were too subtle to count as visible reuse of the old section's design language.
- The reusable parts of the removed section were the rounded icon cluster, the frosted mini-panel treatment, and the polished floating accent composition.
- The fix was to keep the original resume text removed while introducing a shared accent component that reuses those decorative ideas in Tech Stack System, Featured Projects, and Contact CTA.

### Rules to remember for future tasks

1. When the user asks for all logos, every listed item must have a visible local asset or documented fallback.
2. For infinite carousel or marquee animations, duplicate the sequence so the last item is immediately followed by the first item.
3. Never leave a visual gap in a seamless carousel.
4. If asked to remove a section but reuse its design elements, do both: remove the content and visibly apply the design treatment elsewhere.
5. Do not mark a requirement complete unless it has been visually verified.
6. Screenshots are layout references only unless the user explicitly asks to copy the visual style.
7. Preserve the current website colour theme unless the user explicitly asks to change it.

## Third correction: React Native logo, seamless logo continuity, corner-based decorative layout, and local verification

### Missed requirement: incorrect React Native logo

- The prompt requirement was present. This was not a missing-requirement issue.
- The miss came from incomplete implementation plus a technical asset detail that was not checked closely enough.
- The local React Native SVG matched the official source artwork, but it was kept without a `viewBox`, which made the rendered mark scale poorly and look incorrect in the logo card.
- The fix was to keep the local asset, add the missing SVG sizing metadata, and verify that React Native stays visually distinct from React in the carousel card layout.

### Missed requirement: animation should revert to the previous version, but the end/start gap must still be fixed

- The previous response changed the animation too much. The original serpentine train feel was replaced with a different looping approach.
- The seamless continuity gap remained because the first continuity patch repeated too much content and treated the whole duplicated list as always active, which created overlap and ghosting instead of a clean handoff from the last logo to the first.
- The technical cause was phase wrapping across more repeated instances than the travel cycle could support cleanly.
- The fix was to keep the earlier serpentine travel behavior as the base and only add the minimum repeated logo instances needed to bridge the cycle length without leaving a gap or stacking duplicates on top of one another.

### Missed requirement: decorative elements placement

- The instruction to reuse and adjust the decorative treatment was misunderstood in placement, not missing from the prompt.
- The previous implementation placed accents too far inside the content area or treated them like internal card ornaments, which made the sections feel busy rather than polished.
- The new rule is to keep the accents subtle and position them mainly around the four corners of the larger section shell, using the reference image for placement logic rather than style copying.

### Missed requirement: real local verification

- Previous validation was insufficient.
- Local verification must include:
  - `npm run dev`
  - Google Chrome
  - `http://localhost:5173`
  - browser console review
  - UI and interaction checks
  - opening the localhost page once and completing the required checks in the same browser session where possible

### Rules to remember

1. When the user asks to revert to a previous version, preserve that previous version’s main behavior and only fix the requested issue.
2. When fixing a carousel gap, ensure the last item is immediately followed by the first item via a seamless loop technique.
3. When a logo is called out as incorrect, verify the exact logo asset, not just the label.
4. When the user asks for decorative elements to follow a reference layout, use the reference mainly for placement logic.
5. Decorative accents for large blocks should often sit near the four corners if the user explicitly says so.
6. Always verify UI tasks locally with `npm run dev` and Chrome at `localhost:5173` when instructed.
7. Open the localhost page once and complete all checks in the same browser session instead of reopening a new page for each test.
8. Do not mark a branch as complete if it is not clean.

## Fourth correction: ghosting diagnosis, exact corner-element rules, Featured Projects child-block decoration, Contact CTA icon-state rules, and single-session localhost verification

### Missed requirement: logo ghosting

- The requirement was present in the prompt. The implementation was incorrect, not under-specified.
- The exact technical cause was that the carousel rendered more repeated logo instances than the visible travel window could support, while each instance reused the same serpentine loop timeline. That let delayed instances wrap back into visible positions at the same time as the current instances, which produced overlapping and ghosted logo cards.
- The fix was to keep the previous serpentine travel behavior as the base, stop rendering future instances before their row entry time, and limit the repeated instances to the minimum count needed to cover the visible travel duration so the last logo still hands off cleanly to the first logo without a gap.

### Missed requirement: Tech Stack exact decorative corner logic

- The earlier instruction was misunderstood. The prior pass added decorative polish, but not the literal corner assignments the prompt asked for.
- Light mode now follows the exact requested mapping:
  - top-left: leaf element only, with no extra visible wrapper block
  - top-right: sakura plus sun
  - bottom-left: the other sakura asset
  - bottom-right: snowflake
- Dark mode now follows the exact requested mapping:
  - top-left: first starfish
  - top-right: jellyfish plus moon
  - bottom-left: pearl
  - bottom-right: second starfish
- All Tech Stack corner elements use a consistent visual size and stay near the section corners instead of drifting into the content area.

### Missed requirement: Featured Projects decoration and content density

- The earlier section-level decoration was incorrect because the prompt asked for decoration on the right-side child blocks, not around the whole Featured Projects boundary.
- The new pattern removes the outer section decoration and places one same-sized accent at the top-right corner of each right-side preview card.
- The right-side content was reduced by roughly half by removing extra highlight density, shrinking the tech-chip count, and simplifying the right card footer so the left and right sides feel closer in height and less visually crowded.

### Missed requirement: Contact CTA / Ready to build a reliable product flow

- The title size was previously too large relative to the requested correction. It has been reduced to a smaller scale that matches the requested step-down while preserving the existing typography system.
- The decorative treatment is now intentionally different from Tech Stack. Tech Stack uses exact corner assets, while Contact CTA uses softer section-shell orbs and rounded accents so the sections feel related without repeating the same arrangement.
- Each small action block now includes a same-sized top-left embellishment, matching the requested child-block accent rule.

### Missed requirement: icon block active/inactive styling

- The light and dark mode icon-state rules were previously not implemented literally enough.
- The current state logic is:
  - light inactive: ice-blue icon on pink background
  - light active: pink icon on ice-blue background
  - dark inactive: coral-orange icon on ocean-blue background
  - dark active: ocean-blue icon on coral-orange background
- The shared icon block now also enforces the 60% inner SVG sizing rule so the icon area reads consistently across Tech Stack and Contact CTA.

### Missed requirement: real local verification

- Previous validation was insufficient and did not fully stay in the intended local-browser workflow.
- Local verification for this task must include:
  - `npm run dev`
  - Google Chrome
  - `http://localhost:5173`
  - browser console review
  - UI and interaction checks
  - opening the localhost page only once and completing checks in the same page/session where possible

### Rules to remember

1. First diagnose visual bugs like ghosting before trying random fixes.
2. When the user gives exact corner-element assignments, follow them literally.
3. When the user asks for different decorative logic across sections, do not reuse the same arrangement everywhere.
4. When the user asks to move decorative elements to child blocks, remove the previous section-level decoration.
5. When the user gives active and inactive icon colour rules, implement them exactly and verify in both light and dark modes.
6. Always verify UI tasks locally with `npm run dev` and Chrome at `localhost:5173` when instructed.
7. Open the localhost page once and complete all checks in the same browser session instead of reopening a new page for each test.
8. Do not mark a branch as complete if it is not clean.
