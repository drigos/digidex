# Digidex: Digimon evolution infographics

Self-contained HTML infographics that render a Digimon's evolution tree, published as the
**Digidex** site. All site files live under `src/` (the folder deployed to GitHub Pages);
tree pages sit in `src/evolution-lines/`, split by the anime generation. The root
[src/index.html](src/index.html) is the site landing page: a selection screen with a
Generations section and a Special groups section, linking to each generation's own
`index.html` (which in turn links to the individual evolution-tree pages and back to the
root via its "Home" pill) and to each group roster:

- `src/index.html` - top-level selection screen (Generations + Special groups).
- `src/evolution-lines/gen-1-adventure/` - Digimon Adventure:
  - [index.html](src/evolution-lines/gen-1-adventure/index.html) - DigiDestined selection screen (by Crest).
  - [agumon.html](src/evolution-lines/gen-1-adventure/agumon.html) - Agumon line (Data Squad, Bond and Burst branches; AncientGreymon ancestral link).
  - [gabumon.html](src/evolution-lines/gen-1-adventure/gabumon.html) - Gabumon line (X, Virus and Bond branches; AncientGarurumon ancestral link).
  - [biyomon.html](src/evolution-lines/gen-1-adventure/biyomon.html) - Biyomon line (X line, dark bird branch, Ornismon variation, collective composition).
  - [tentomon.html](src/evolution-lines/gen-1-adventure/tentomon.html) - Tentomon line (Red/Blue MegaKabuterimon branches, HerculesKabuterimon X, AncientBeetlemon ancestral link, collective composition).
  - [palmon.html](src/evolution-lines/gen-1-adventure/palmon.html) - Palmon line (X line, Rookie side forms, Rosemon/Lillymon variants, Rafflesimon Jogress, collective composition).
  - [gomamon.html](src/evolution-lines/gen-1-adventure/gomamon.html) - Gomamon line (Gomamon X branch, collective composition).
  - [patamon.html](src/evolution-lines/gen-1-adventure/patamon.html) - Patamon line (Priest Mode and Goldramon 2020 branches, fallen angel dark branch, Shakkoumon Jogress, Armor Digivolutions, collective composition).
- `src/evolution-lines/gen-2-adventure-02/` - Digimon Adventure 02:
  - [index.html](src/evolution-lines/gen-2-adventure-02/index.html) - DigiDestined selection screen (by Digi-Egg).
  - [veemon.html](src/evolution-lines/gen-2-adventure-02/veemon.html) - Veemon line (includes the Armor branch).
- `src/evolution-lines/gen-3-tamers/` - Digimon Tamers:
  - [index.html](src/evolution-lines/gen-3-tamers/index.html) - Tamers selection screen (by Biomerge / peak form).
  - [guilmon.html](src/evolution-lines/gen-3-tamers/guilmon.html) - Guilmon line (X, Data/Yellow, Virus and Digital Hazard branches).
- `src/evolution-lines/gen-4-frontier/` - Digimon Frontier (Spirit Evolution; the children become Digimon, no partner):
  - [index.html](src/evolution-lines/gen-4-frontier/index.html) - Legendary Warriors selection screen (6 chosen + 4 Cherubimon's warriors).
  - [agunimon.html](src/evolution-lines/gen-4-frontier/agunimon.html) - Warrior of Flame line (Child Flamemon, Human/Beast Spirit, Fusion, Unified, Susanoomon).
  - [lobomon.html](src/evolution-lines/gen-4-frontier/lobomon.html) - Warrior of Light line (Child Strabimon, Human/Beast Spirit, Fusion, Unified, Susanoomon).
- `src/evolution-lines/gen-5-data-squad/` - Digimon Data Squad / Savers:
  - [index.html](src/evolution-lines/gen-5-data-squad/index.html) - DATS selection screen (by Burst Mode; the Agumon card links into the gen-1 Agumon tree).
- `src/groups/` - roster pages for special Digimon groups (no evolution arrows):
  - [angelic.html](src/groups/angelic.html) - Angelic Digimon roster (Celestial Digimon, Angelic Army, fallen counterparts), each card carrying its official angelic-rank Type.
  - [royal-knights.html](src/groups/royal-knights.html) - the thirteen Royal Knights plus Imperialdramon Paladin Mode as the order's origin.
  - [four-great-dragons.html](src/groups/four-great-dragons.html) - the Four Great Dragons, named after the Dragon Kings of the four seas.
  - [vortex-warriors.html](src/groups/vortex-warriors.html) - Witchelny's Vortex Warriors, led by the Whirlwind General MedievalGallantmon.
  - [demon-lords.html](src/groups/demon-lords.html) - the Seven Great Demon Lords, each card carrying its deadly sin as the rank pill.
  - [bancho.html](src/groups/bancho.html) - the five bearers of the Bancho title.

Each file is a fixed-size canvas with cards positioned by column (evolution level),
SVG arrows drawn between them, a trigger legend, and an optional bottom panel. Images
and links point to [DigimonWiki/Fandom](https://digimon.fandom.com).

## Files (shared design system)

Styling and the rendering engine are shared (they live at the `src/` root), so pages
cannot drift apart:

- `digivolution.css` - all styling + the layout-grid tokens.
- `digivolution.js` - the renderer `DigiTree.mount({ legend, columns, nodes, edges })`,
  which builds the arrow markers, legend, column headers, node cards, and edges.
- the `evolution-lines/gen-*/<partner>.html` tree pages - **config only**: each `<link>`s
  the CSS and `<script src>`s the JS with a `../../` prefix (they sit two levels below the
  `src/` root), then passes its data. Per-page dimensions live in a small inline `<style>`
  block; the graph is `nodes`/`edges` data; appendix panels are plain HTML sections.
- the `evolution-lines/gen-*/index.html` selection screens - a **different kind of page**:
  self-contained (own inline CSS, no `digivolution.js`), they render a responsive grid of
  partner cards linking to that generation's tree pages. They only `<link>` `digivolution.css`
  to inherit the shared color tokens, the font and the `.backnav` pill style.
- the root `index.html` - the same selection-screen pattern one level up: a self-contained
  page split into sections (Generations, Special groups) whose cards link to each
  `evolution-lines/gen-*/index.html` and `groups/*.html` page (assets are linked without
  a path prefix, since it sits at the `src/` root).
- the `groups/<group>.html` roster pages - selection-screen-style pages (self-contained
  CSS, no `digivolution.js`, one `../` asset prefix) for special Digimon groups. There are
  no evolution arrows: cards are grouped into power tiers by `.tier` section headings
  (e.g. Celestial Digimon on top, then the Angelic Army, then fallen counterparts), and
  each card shows the Digimon's level, an official-Type rank pill (`.rank`, accent-tinted
  by angelic sphere) and a short role line sourced from the official profile. Cards link
  to DigimonWiki/Fandom. Verify every rank and role in the official encyclopedia
  (`digimon.net/reference_en`) before adding a member, in both directions when the claim
  is a relationship (see the `digimon-lore-notes` skill rules).

To scaffold a new page consistently, use the `digimon-evolution-tree` skill
(`.claude/skills/digimon-evolution-tree/`), which walks through the steps and points
back to this file. To add a "Lore notes" curiosities panel to an existing page, use the
`digimon-lore-notes` skill (`.claude/skills/digimon-lore-notes/`), which enforces source
verification and a plan-and-approve step.

All on-image text is in English so the graphics are universal. This README is the
source of truth for the vocabulary. Keep both files consistent with the tables below;
when adding a node or edge, reuse an existing term instead of inventing a new one.

## 0. Layout grid (shared design system)

Both files use the same card and grid metrics so they read as one product:

| Token | Value | Notes |
|---|---|---|
| Card width | `204px` | Fixed. |
| Card `min-height` | `198px` | Uniform, so every card in a row shares a bottom edge. A card whose content is taller than this is only acceptable if it sits alone in its band (e.g. Agumon's `Agumon (Bond of Bravery)`). |
| Column pitch (x) | `262px` | Distance between evolution-level columns. |
| Row pitch (y) | `240px` | Uniform. Gives a constant `240 - 198 = 42px` vertical gap between stacked cards. |

Cards are placed on an implicit grid: each node's `left` is its level column and its
`top` is `firstRow + rowIndex * 240`. When a column skips a row, the gap is a multiple
of the pitch (282px, 522px, ...), which is expected. Keep rows aligned to the pitch so
bottoms line up across the whole graph.

### Canvas width

The canvas width is driven by the evolution line, not by the appendix panels. Nodes start
at `x: 42px`, so mirror that gutter on the right: `width = rightmostNodeRight + 42`, where
`rightmostNodeRight = maxNodeX + 204`. This keeps the diagram's left and right margins equal.
Appendix panels must never be the widest element: shrink their cards (or split them into two
rows) so every panel fits inside the line width. If a panel genuinely cannot fit, keep the
`42px` left gutter of the line and let the extra space fall on the right, rather than widening
the canvas past the line.

### Header band (title, legend, columns)

Every tree page uses the same header geometry so the pages read as one product:

| Element | Value | Notes |
|---|---|---|
| Column headers | `.columns { top: 200px }` | The level-name row sits `200px` from the canvas top. |
| First card row | `y: 250px` | The topmost node, a uniform `50px` below the column headers. |
| Legend | `.legend { width: 560px }` + `.legend-grid { repeat(3, 1fr) }`, both shared in `digivolution.css` | Constant size on every page (no per-page override): 3 columns sized for the longest label (`Fusion / DNA Digivolve`); rows grow with the trigger count. |

The legend is the same size on every page, including the narrow `agunimon.html` (`1598px`): the
`560px` box clears the title on all current pages. Do not override it per page; if a future page's
title would collide with it, shorten the title rather than shrinking the legend.

### Canvas height and the footer

The footer is pinned to the bottom of the canvas (`.footer { bottom:16px }`) and is not
part of the grid. Size the page's `.infographic { height }` so the footer sits just
below the lowest element (the last node row, or the bottom appendix panel) with only a
small gap, not a large empty band. Target about `22px` between that element's bottom and
the footer top.

- Formula: `height = lowestBottom + 22 + footerHeight + 16`, where `footerHeight` is
  about `32px` for a two-line footer. Measure it in the browser, since it depends on the
  footer text length (a three-line footer is taller).
- The SVG stretches to the canvas (`preserveAspectRatio="none"`), so whenever you change
  `.infographic { height }` you must set the `<svg viewBox>` height to the same value, or
  every arrow shifts vertically.

Appendix panels (`.partner-panel` / `.jogress-panel` / `.armor-panel` / `.lore-panel`) take
only `top` and `width` per page, never a `height`: they auto-size to their content, so the
gap below the last card is always the panel's `22px` bottom padding. A fixed panel height
leaves an uneven band under the cards, so do not set one.

Panel cards match the node card width so the whole page reads as one grid: `.partner-card` and
`.jogress-card` are `204px`, laid out in a `16px`-gap flex row, so a panel with `n` cards is
`220n + 28` wide (`248px` for one card, `908px` for four, `1348px` for six). The `.armor-panel`
is the exception: it holds many Digimon, so it keeps the fractional `repeat(12, 1fr)` grid of
smaller cards and spans the full `width - 48` (a `24px` gutter each side). The `.lore-panel`
(grey, matching the `lore` trigger color) also spans the full width with a fractional
`repeat(4, 1fr)` grid of text-only cards; its entries are source-verified explanations of the
page's unusual arrows and nodes, added via the `digimon-lore-notes` skill.

Set each panel's `top` so it sits `22px` below the element above it: the lowest node for the
first panel, or the previous panel's bottom for a stacked one. Together with the `22px`
panel-to-footer gap, this gives the whole footer block one uniform `22px` vertical rhythm
(diagram -> panel -> panel -> footer). Measure `top` in the browser, because a node's rendered
bottom depends on its note length. When you move a panel you must recompute the canvas
`height` (and the matching `<svg viewBox>` height) so the footer gap stays `22px`.

## 1. Card labels (the pill under each name)

Format: `Level` optionally followed by ` / Virus` and/or ` / X`, in that order.

### Level (exactly one, required)

| Level | Meaning |
|---|---|
| `Fresh` | Newborn stage. |
| `In-Training` | Baby / In-Training stage. |
| `Rookie` | Child / Rookie stage. |
| `Champion` | Adult / Champion stage. |
| `Ultimate` | Perfect / Ultimate stage. |
| `Mega` | Ultimate (JP) / Mega stage. |
| `Ultra` | Fusion pinnacle above Mega: Omnimon / Omegamon-class Jogress results and their variants. |
| `Armor` | Result of an Armor Digivolution (Digi-Egg). Veemon only. |

Frontier (`gen-4-frontier`) does not use these ranks; it has its own Spirit-rank levels.
See "Frontier: Spirit Evolution" under Notes on specific cases.

### Qualifiers (optional, only these two)

| Qualifier | Meaning |
|---|---|
| `Virus` | The Virus-attribute counterpart of a main (Vaccine) form on the same tree: e.g. `MetalGreymon (Virus)`, `BlackWarGreymon`, `Omnimon Zwart`, `Imperialdramon (Black)`. |
| `X` | A named X-Antibody form: e.g. `WarGreymon X`, `Magnamon X`. |

Combine as `Virus / X` for the X form of a Virus-line member
(e.g. `Ultimate / Virus / X`).

### Not in the label

The following are intentionally kept out of the label to keep it consistent. The
information lives in the edge color (how the digimon was reached) and/or the card note:

- **How it was reached** - `Jogress`, `Mode` (Change), `Bond`, `Burst`. Shown by the
  edge color instead.
- **Loose descriptors** - `Composite`, `Ancient`, `Subspecies`, `Cyborg`, `Machine`,
  `Lateral`, `Greymon-species`. These were dropped: some are digimon types that are not
  applied consistently, others (like `Lateral`) were only used on a few Mega-to-Mega
  side forms while many equivalent side forms went unlabeled. Put them in the note when
  they matter.

## 2. Edges (the arrows / triggers)

Every arrow is colored by the digivolution trigger. This is the single vocabulary for
"how you get from one digimon to the next".

| Trigger | Color | Meaning | Files |
|---|---|---|---|
| Normal evolution | blue | Standard or alternate in-line evolution. | both |
| X-Digivolution | green | Digivolution driven by the X-Antibody. | both |
| DNA / Jogress | purple | Fusion of two digimon into one. | both |
| Mode Change | teal | Same digimon switching mode / form. | both |
| Dark / Virus | red | Dark or Virus-attribute branch (including rage / loss of control). | both |
| Armor Digivolution | amber | Armor evolution via a Digi-Egg. | veemon |
| Bond Evolution | pink | Bond-driven evolution. | agumon |
| Burst Mode | gold | Burst Digivolution. | agumon |
| Ancestral link | grey (dotted, no arrowhead) | Lore ancestry, not an evolution: a Legendary Warrior linked to the root of the line it spawned. | agumon, gabumon, tentomon |

Alternate forms (e.g. `SnowAgumon`, `Agumon Expert`, `HiMachineDramon`) use the
**Normal evolution** color; they are just extra branches, not a distinct trigger.

Frontier reuses these colors under Spirit-Evolution names (Spirit = `normal`, Slide =
`mode`, Fusion = `dna`, Unified = `burst`); no new color tokens are added. See "Frontier:
Spirit Evolution" under Notes on specific cases.

### Edge text (labels)

The color already communicates the trigger, so **do not add a text label that only
restates it** (no "X-Antibody" on a green arrow, no "DNA / Jogress" on a purple one, no
"Mode Change" on a teal one, etc.). Add a label only when it carries information the
color cannot:

- a specific event or continuity: `Corrupted (2020)`, `Savers (2006)`
- a narrative cause: `Loss of control`
- the specific partner in an otherwise-ambiguous link: `Bond with Tai`

Ancestral (lore) links are the exception that needs **no** label: the dedicated dotted
grey **Ancestral link** trigger already communicates "ancestry, not evolution". See the
Lore section below.

Keep such labels short, in title case, and consistent across both files.

## 3. Legend

The on-image legend lists only the triggers that the file actually uses.

- Shared by both: Normal evolution, X-Digivolution, DNA / Jogress, Mode Change,
  Dark / Virus.
- Veemon adds: Armor Digivolution.
- Agumon adds: Bond Evolution, Burst Mode.
- Agumon, Gabumon and Tentomon add: Ancestral link.
- Frontier (agunimon) relabels the shared colors: Spirit Evolution, Slide Evolution,
  Fusion / DNA Digivolve, Unified Spirit.

## 4. Page copy (title, subtitle, panels, footer)

The four text slots form one orientation funnel, moving from identity to provenance. Each
has a single job; keep every page's copy serving that job so the whole set reads as one
product. A page states more or less detail depending on its size, but never repurposes a slot.

| Slot | Job | Convention |
|---|---|---|
| Title (`h1`) | Identity: whose tree, and what kind of artifact. | `<Partner>: evolution tree`. Frontier is Spirit Evolution, not Digivolution, so `agunimon` reads `Agunimon: Spirit Evolution tree`. |
| Subtitle (`.subtitle`) | Scope: the stage span plus the branches and appendices that make this line distinctive. | `<Stage1> -> ... -> <StageN> hierarchy, with <distinctive branches / appendices>.` Large trees summarize by trigger kind (`with X, DNA/Jogress, Mode Change ... branches`); small trees name the actual forms (`with the X-Antibody branch (Gomamon X) and the collective composition ...`). Frontier states its Spirit tiers instead of the Fresh->Mega ranks. |
| Panel title + subtitle | Local relationship: the off-grid relationship the appendix panel captures. | Title names the relationship **kind**; subtitle states the concrete **mechanic** (who + who = what). Kinds: `Jogress partner(s)` (external forms that fuse with this line - singular for one card, plural for many); `Collective composition` (this line's peak is one member of a larger fusion); `<Name>'s Armor Digivolutions` (Veemon's compact Digi-Egg branch); `Lore notes` (source-verified stories behind the page's unusual arrows; subtitle `the stories behind the unusual arrows`). Frontier keeps its own result-led titles (`Susanoomon: DNA Digivolve`, `EmperorGreymon: Unified Spirit`) since its vocabulary differs, but the subtitle still states the mechanic. |
| Footer (`.footer`) | Provenance + reading key + caveats. | Fixed lead: attribution to DigimonWiki/Fandom, then `Card labels show Level (+ Virus / X); edge colors show the digivolution trigger.` Then any page-specific caveats about non-obvious nodes/links (a synthesis with no incoming arrow, a lore link, a collective composition). Close with `See README.md for the full term conventions.` |

## Notes on specific cases

### `Virus` vs `Virus Mode`

`Imperialdramon Dragon Mode (Black)` and `Imperialdramon Fighter Mode (Black)` were
previously labeled `Mega / Virus` and `Mega / Virus Mode`. There is no real difference:
both are Mega-level, Virus-attribute Black forms. The Dragon vs Fighter distinction is a
**Mode Change**, already carried by the digimon name and shown by the Mode Change edge,
so it does not belong in the level label. Both are now `Mega / Virus`.

### Lore / non-evolution links

`AncientGreymon`, `AncientGarurumon` and `AncientBeetlemon` are Legendary Warriors: the
ancestral (lore) origin of the Greymon, Garurumon and Kabuterimon species, not a real
evolution path. Each is drawn with the dedicated **Ancestral link** trigger and these
conventions, so the relation is never mistaken for an evolution:

- **Trigger / style**: `cls:'lore'` on the node (grey level pill); the edge uses the
  `lore` type, a dotted grey line drawn with `{noArrow:true}` (no arrowhead) and no text
  label.
- **Direction**: from the Ancient to the root of the line (ancestor -> descendant), not
  the reverse.
- **Anchor**: the root of the line is its **Fresh** form (`Botamon`, `Punimon`,
  `Pabumon`), never an arbitrary mid-line member.
- **Placement**: the Ancient node sits at the top row of the **Fresh column** (`x` of the
  Fresh form), so the link is a short vertical connector down its own column.

`Kimeramon` is a synthesis of several Greymon-line data, so it has no incoming arrow and
only outputs to `Millenniummon`.

### Cross-page navigation

Every page links one level up with a `.backnav` pill (styled in `digivolution.css`),
placed as the first element inside `.wrap`: tree pages link to their generation's
`index.html` labeled with the partner group (`DigiDestined`, `The Tamers`, ...), and the
generation index and group roster pages link to the root `index.html` labeled `Home`.

A node may also carry `nav: { href, title }`: the engine then renders a round arrow button
(`.node-nav`, an inline SVG arrow) to the right of the card that jumps to another
infographic page, while the card itself keeps linking to the wiki. Use it when a node has
a dedicated tree on another page - currently `AncientGreymon` in `agumon.html` (links to
`../gen-4-frontier/agunimon.html`) and `AncientGarurumon` in `gabumon.html` (links to
`../gen-4-frontier/lobomon.html`). `AncientBeetlemon` (tentomon) gets the same arrow once
the Beetlemon Frontier page exists.
The `href` is relative to the page, and the button is placed at the card's right edge,
vertically centered on the 198px card, so keep that slot free of neighboring nodes.

A node's category `badge` may also carry an `href` (plus optional `title`): the engine
then renders it as a clickable link instead of a plain label, e.g. the `Celestial Digimon`
and `Angelic Army` badges in `patamon.html` linking to the `groups/angelic.html` roster.
The card itself keeps linking to the wiki.

### Frontier: Spirit Evolution

`gen-4-frontier` has no partner Digimon: the children Spirit-Evolve into these forms, so it
layers its own vocabulary on the shared engine instead of the Fresh->Mega ranks.

- **Levels** (the pill): `Child` (the chosen child's Rookie-level form, e.g. Flamemon),
  `Human Spirit`, `Beast Spirit`, `Fusion` (Double Spirit), `Unified` (Unified Spirit),
  `Susanoomon`, and `Ancient` (a Legendary Warrior origin).
- **Triggers** reuse existing colors with Frontier legend labels: Spirit Evolution =
  `normal`, Slide Evolution = `mode`, Fusion / DNA Digivolve = `dna`, Unified Spirit =
  `burst`, Ancestral link = `lore` (the `Ancient` origin ties to the `Child` root with a
  dotted, arrowless lore edge, as in the gen-1 pages). No new color tokens are added.
- **Columns** are relabeled to the Spirit tiers (`Ancestor`, `Child`, `Human / Beast Spirit`,
  `Fusion`, `Unified Spirit`, `Susanoomon`) rather than evolution levels.

The engine is otherwise unchanged: same `nodes`/`edges` config, same layout grid and
header band.

## Publishing (GitHub Pages)

The site is served from the `src/` folder by the
[`deploy-pages`](.github/workflows/deploy-pages.yml) GitHub Actions workflow, which
uploads `src/` as the Pages artifact on every push to `main` (branch-based deployment
does not support a `/src` folder, only root or `/docs`):

- `src/index.html` is the landing page (the top-level selection screen).
- Every internal link and asset reference is relative (`digivolution.css`,
  `../../digivolution.js`, `evolution-lines/gen-*/...`), so the site works both at a
  user/organization domain root and under a project subpath
  (`https://<user>.github.io/<repo>/`).
- Images are hotlinked from DigimonWiki/Fandom (`Special:Redirect/file/...` with
  `referrerpolicy="no-referrer"`); nothing is bundled locally.
- `src/.nojekyll` is kept as a safety net: artifact deployments never run Jekyll, but it
  keeps a fallback branch-based deployment (root folder) working as-is.

To publish: push this folder's contents as the root of a GitHub repository, then enable
**Settings > Pages > Build and deployment > GitHub Actions**. The first push to `main`
(or a manual `workflow_dispatch` run) deploys the site.
