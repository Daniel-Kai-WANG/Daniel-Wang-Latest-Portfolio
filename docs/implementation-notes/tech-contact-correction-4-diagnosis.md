# Tech Contact Correction 4 Diagnosis

## Pre-code diagnosis

### A. Tech Stack logo ghosting / overlapping

- Requirement status: present in the prompt.
- Cause type: implementation incomplete plus technical bug.
- Exact cause: the carousel wraps all logo instances at the same global loop boundary. Future delayed instances with negative local time are wrapped into visible positions too early, which creates overlapping duplicate cards and ghosting.

### B. Tech Stack animation should revert to the previous version, but the last/first gap still must be fixed

- Requirement status: present in the prompt.
- Cause type: instruction not fully followed.
- Exact cause: the previous correction changed the animation behavior too much instead of keeping the earlier serpentine train-style motion as the base. The continuity fix also over-relied on repeated instances without preserving the original feel.

### C. Decorative elements in Tech Stack System are not arranged correctly

- Requirement status: present in the prompt.
- Cause type: instruction not followed.
- Exact cause: one shared accent component is reused across sections, so the exact light-mode and dark-mode corner assignments for Tech Stack were never implemented literally.

### D. Decorative elements in Featured Projects are not arranged correctly

- Requirement status: present in the prompt.
- Cause type: instruction not followed.
- Exact cause: decoration remains on the outer section shell instead of moving to the top-right corner of each right-side child block.

### E. Decorative elements in Ready to build a reliable product flow are not arranged correctly

- Requirement status: present in the prompt.
- Cause type: instruction not followed.
- Exact cause: Contact CTA still reuses the same section-level accent treatment as Tech Stack instead of using its own related but different decorative logic.

### F. Title size and child-block embellishments in Ready to build a reliable product flow are not correct

- Requirement status: present in the prompt.
- Cause type: implementation incomplete.
- Exact cause: the heading scale was not reduced, and the small contact blocks never received their required top-left embellishments.

### G. SVG / icon block inactive-active colour logic is not correct

- Requirement status: present in the prompt.
- Cause type: instruction not followed.
- Exact cause: icon blocks still use generic surface accent styling instead of the explicit light/dark active-inactive reversal rules.

### H. Local verification workflow must use `npm run dev` and Chrome on `http://localhost:5173`

- Requirement status: present in the prompt.
- Cause type: insufficient testing plus technical environment mismatch.
- Exact cause: this repo was not the one currently serving `localhost:5173`, and local dependencies are not yet aligned because `lottie-react` is missing from this repo's installed `node_modules`.

### I. Branch must be clean at the end

- Requirement status: present in the prompt.
- Cause type: workflow requirement.
- Exact cause: this is not a current bug, but it must be enforced after code changes, local verification, and a final commit.
