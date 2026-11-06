---
name: digimon-evolution-tree
description: Create or edit a Digimon evolution-tree infographic (like veemon.html and agumon.html). Use whenever asked to build, extend, or restyle one of these evolution-tree HTML pages. The pages are config-only and share digivolution.css + digivolution.js; conventions live in README.md.
---

# Digimon evolution-tree infographic

This folder renders a Digimon's evolution tree as a large, self-consistent HTML
infographic (cards on a grid, colored SVG arrows, a trigger legend, appendix panels).
Every page must look and behave like the existing ones.

## Golden rule: pages are data, not markup

Styling and the rendering engine are shared. A page only supplies configuration.

- `digivolution.css` - ALL styling + the design-system grid. Never inline styles that
  belong here; only per-page dimensions go in the page's small `<style>` block.
- `digivolution.js` - the engine `DigiTree.mount({ legend, columns, nodes, edges })`.
  It builds the arrow markers, legend, column headers, node cards, and edges. Never copy
  this logic into a page.
- `README.md` - the source of truth for the term taxonomy, edge-label rule, trigger
  legend, and layout tokens. Read it before adding nodes or labels.

Read `README.md` and skim `agumon.html` (data-driven, has Bond/Burst + a badge) or
`veemon.html` (has an Armor appendix panel + Royal Knight badges) as your template.

Pages live under `src/evolution-lines/gen-*/`, split by the anime generation the partner
Digimon debuted in (`gen-1-adventure`, `gen-2-adventure-02`, `gen-3-tamers`, ...). The shared
`digivolution.css` / `digivolution.js` sit at the `src/` root, so every page is two levels
down and references them with a `../../` prefix. Put a new page in the folder for its
generation (create the folder if that generation has no page yet).

## Layout grid (must match across all pages)

- Card: `204px` wide, `min-height:198px`.
- Column pitch (x): `262px` between evolution-level columns.
- Row pitch (y): `240px` -> a uniform `42px` vertical gap. A node's `top = firstRow + rowIndex * 240`.
- Keep every row on the pitch so card bottoms line up. A card taller than 198px is only OK
  if it sits alone in its band (no row-mates to misalign).

## Steps for a new page

1. Research the line on DigimonWiki/Fandom. Collect stages, X-Antibody / Virus variants,
   DNA/Jogress fusions, mode changes, bond/burst forms, and external fusion partners.
   Keep only relations backed by the Reference Book or other official Bandai material, the
   anime, films or manga, the drama CDs or the V-pets released with the series (the D-3, the
   D-Ark and the D-Power);
   never by a card game or video game, and never by a DigimonWiki chart cell alone (README
   "Relation sources").
   For each node's `img`, use the official Reference Book slug (the `directory_name` in
   `https://digimon.net/reference_en/detail.php?directory_name=<slug>`); the engine turns it
   into `https://digimon.net/cimages/digimon/<slug>.jpg`. If the Digimon has no official
   entry, give an absolute Wikimon image URL instead (see README "Artwork sources").
   DigimonWiki/Fandom images can no longer be embedded.
2. Place nodes on the grid: pick a column x per level, a row index per node (`y = firstRow + i*240`).
   Keep the main spine on one horizontal row; branch variants to adjacent rows.
3. Copy `veemon.html`/`agumon.html` into the target `src/evolution-lines/gen-*/` folder as
   the skeleton (same `<head>` links, stylesheet and favicons, with the `../../` asset prefix,
   empty `.legend-grid`, `.columns`, `#nodes`, empty `#edges` svg, `#labels`, appendix panels,
   footer). Link the new page from its card in the generation `index.html`: that card also
   puts it in the generation pills the engine adds next to the `.backnav`. A card that links
   to another generation's tree adds `?gen=<its own folder>` to the href (README "Cross-page
   navigation").
4. Set the page `<style>` block: `.infographic{width;height}`, `.columns{top}`,
   `.legend{width}`, `.legend-grid{grid-template-columns}`, and each panel's `{top;width}`.
   Do NOT set a panel `height`: panels auto-size to content, so the gap below the last card
   is always the panel's 22px bottom padding (a fixed height leaves an uneven bottom band).
   Set each panel's `top` 22px below the element above it (lowest node for the first panel,
   previous panel's bottom for a stacked one) so the whole footer block keeps one uniform 22px
   rhythm: diagram -> panel -> panel -> footer.
   Size the canvas `height` so the footer clears the lowest element (last row or appendix panel) by
   only ~22px, not a large empty band: `height = lowestBottom + 22 + footerHeight + 16`
   (footerHeight ~32px for two lines). Keep the `<svg viewBox>` height == canvas height.
   See README.md "Canvas height and the footer".
5. Fill `DigiTree.mount({...})`: `legend` (only the triggers this page uses), `columns`,
   `nodes`, `edges`.
6. Verify (see below).

## Config reference

- Node: `{ id, x, y, cls, name, lvl, note, wiki, img, badge? }`
  - `cls` (pill color): `normal | x | dna | mode | dark | lateral | armor | bond | burst | variant`.
  - `lvl` (card tag): `Level` optionally `+ / Virus + / X` only; omit it for a being with no
    Level (Grani). `Ultra` only for a Super Ultimate per README section 1 (V-Tamer 01, the
    Reference Book, or the Cyber Sleuth, ReArise, Survive and Time Stranger stage); the card sits
    in the Ultra column, and a tree with one ends its subtitle in `-> Ultra hierarchy`. See README section 1.
  - `badge`: `{ cls, text, href?, title? }` with `cls` one of `rk` (Royal Knight),
    `lw` (Legendary Warrior), `fgd` (Four Great Dragons), `vw` (Vortex Warrior),
    `cd` (Celestial Digimon), `aa` (Angelic Army), `fa` (Fallen Angel),
    `dl` (Demon Lord), `bc` (Bancho), `ox` (Olympos XII). With `href` (relative, e.g. a
    `groups/*.html` roster) the badge renders as a clickable link; without it, a plain label.
    Point the href at the member's card fragment (`groups/angelic.html#angemon`; ids are
    the lowercased hyphenated name) so the roster scrolls to and highlights that card.
    For a badge on a panel card (itself an `<a>`, so no nesting), add an
    `<a class="rk badge-link panel-badge">` sibling stacked into the same grid cell,
    setting the same explicit `grid-column`/`grid-row` on both the card and the badge
    (see Magnamon in veemon.html; README "Cross-page navigation").
  - `wiki`/`img`: the Fandom page slug (the card link) and the official Reference Book slug
    (or an absolute fallback image URL).
- Edge (inside `edges: function(edge){ ... }`):
  `edge(from, to, type, fromSide='right', toSide='left', opts)`
  - `type`: the trigger (`normal|x|dna|mode|dark|lateral|armor|bond|burst|variant|lore`);
    `variant` marks a separate species or subspecies, not an evolution (README trigger table).
  - sides: `left|right|top|bottom`.
  - `opts`: `shape:'vertical'|'leftbus'`, `busX`, `laneX`, `laneY`, `points:[[x,y],...]`,
    `label`, `lx`, `ly`, `width`, `opacity`, and `fromX/fromY/toX/toY` to override any anchor
    coordinate.
  - Edges are orthogonal (no curves). Give edges of different triggers that leave the same
    side of a card their own port (`fromY`/`fromX`) and lane (`laneX`), so no two colors share a
    run; keep every label on its own run inside a lane or row gap (README "Routing").
- Panels stay as HTML sections (partner/jogress = purple, armor = amber, lore notes = grey;
  the latter is added via the `digimon-lore-notes` skill); position them via
  the page `<style>` (`top` and `width` only; the shared CSS aligns every panel with the
  card grid). Panels stack as a pyramid: Jogress, then composition (sharing one row when both
  fit with a 58px gap), then Armor, Lore notes last; each Jogress/composition panel is wide
  enough for a one-line title and subtitle, so all are 333px tall; the Armor panel spans the
  full width with one left-aligned row of 136px x 198px cards 12px apart, 287px tall (README
  "Panel placement").
  Only the Armor panel gets a connector,
  from the line's node, e.g.
  `edge('veemon','armor-panel','armor','bottom','top',{shape:'vertical', toX:668, ...})`.
  A panel that feeds a node is titled by its result (`Shakkoumon: Jogress partner`), states
  the mechanic in its subtitle and has no connector.

## Conventions (enforce; details in README.md)

- Card tag: `Level [/ Virus] [/ X]`. Do not put "how it evolved" (Jogress, Mode, Bond, Burst)
  or loose descriptors (Composite, Ancient, Cyborg, Machine, Lateral, ...) in the tag; those
  go in the note or are shown by the edge color.
- Edge labels: NEVER restate the trigger color (no "X-Antibody" on a green arrow, no
  "DNA / Jogress" on a purple one). Label only for a specific event/continuity, a narrative
  cause, a lore/non-evolution link, or a specific partner.
- English on-image text. No em dash (U+2014). Identifiers in English.
- Print-friendly: pages are prepared to be printable. Never add modals, popups or
  hover-only content. Interaction is OK only when print loses nothing (badges print as
  category pills); purely navigational widgets (like the `.backnav` and `.gennav` pills) must be hidden by
  the `@media print` rule in `digivolution.css` and avoided in new features when possible.
  Cards carry at most two links: the card to DigimonWiki and the badge to its roster.

## Verify before finishing

Open the page in a browser and check:
- No console errors; `.node` count matches the data.
- Uniform 42px gaps and no column overlaps (compare `getBoundingClientRect` tops/bottoms).
- Images load (broken ones show a white box -> fix the `img` file name).
- Labels, badges, panels, and the legend render as intended.
