# Digidex: Digimon evolution infographics

Self-contained HTML infographics that render a Digimon's evolution tree, published as the
**Digidex** site. All site files live under `src/` (the folder deployed to GitHub Pages);
tree pages sit in `src/evolution-lines/`, split by the anime generation. The root
[src/index.html](src/index.html) is the site landing page: three cards (Generations, Digital
World Cosmology and Special groups), each opening that section's own selection page, which
then lists the generations, the atlas pages or the group rosters:

- `src/index.html` - top-level selection screen: one card per section, nothing else.
- [src/evolution-lines/index.html](src/evolution-lines/index.html) - Generations selection screen: one card per anime generation in airing order, linking to each generation's own `index.html`, with a "done / total lines" pill while a generation still has "Coming soon" lines. Season numbers follow DigimonWiki's count (Hunters is Season 7), the TV film Digital Monster X-Evolution sits in airing order between Frontier and Data Squad, and a note explains why Season 9 (the Digimon Adventure: reboot) has no card.
- `src/evolution-lines/gen-1-adventure/` - Digimon Adventure:
  - [index.html](src/evolution-lines/gen-1-adventure/index.html) - DigiDestined selection screen (by Crest).
  - [agumon.html](src/evolution-lines/gen-1-adventure/agumon.html) - Agumon line (Data Squad, Bond and Burst branches, the Virus forms, the Agumon and Greymon subspecies; AncientGreymon ancestral link).
  - [gabumon.html](src/evolution-lines/gen-1-adventure/gabumon.html) - Gabumon line (X, Virus and Bond branches, the Gabumon and MetalGarurumon variants; AncientGarurumon ancestral link).
  - [biyomon.html](src/evolution-lines/gen-1-adventure/biyomon.html) - Biyomon line (X-Antibody forms, the Saberdramon variant, collective composition).
  - [tentomon.html](src/evolution-lines/gen-1-adventure/tentomon.html) - Tentomon line (Red/Blue MegaKabuterimon branches, HerculesKabuterimon X, AncientBeetlemon ancestral link, collective composition).
  - [palmon.html](src/evolution-lines/gen-1-adventure/palmon.html) - Palmon line (X-Antibody forms, the Aruraumon variant, the Adventure: 2020 Ponchomon, BanchoLillymon, Rosemon Burst Mode, collective composition).
  - [gomamon.html](src/evolution-lines/gen-1-adventure/gomamon.html) - Gomamon line (Gomamon X branch, collective composition).
  - [patamon.html](src/evolution-lines/gen-1-adventure/patamon.html) - Patamon line (Priest Mode and Goldramon 2020 branches, the Devimon and Daemon falls, the Adventure: 2020 Devimon line from Tsukaimon, Shakkoumon Jogress, Armor Digivolutions, collective composition).
  - [gatomon.html](src/evolution-lines/gen-1-adventure/gatomon.html) - Gatomon line (X-Antibody forms, Ophanimon and its Falldown Mode, the Junomon alternate Mega, Silphymon Jogress, BlackGatomon and its Uver. form, Mastemon holy-dark fusion, SkullKnightmon corruption, Armor Digivolutions, collective composition).
- `src/evolution-lines/gen-2-adventure-02/` - Digimon Adventure 02:
  - [index.html](src/evolution-lines/gen-2-adventure-02/index.html) - DigiDestined selection screen (by Digi-Egg; the Patamon and Gatomon cards link into the gen-1 trees, which already carry their Armor Digivolutions).
  - [veemon.html](src/evolution-lines/gen-2-adventure-02/veemon.html) - Veemon line (Paildramon and Dinobeemon Jogresses, Imperialdramon Mode Changes and its Black forms, the Veedramon variant line from V-Tamer with RedVeedramon, Armor Digivolutions).
  - [hawkmon.html](src/evolution-lines/gen-2-adventure-02/hawkmon.html) - Hawkmon line (the HippoGryphonmon alternate Ultimate with Gryphonmon and Zhuqiaomon, Silphymon Jogress up to Valkyrimon, Armor Digivolutions).
  - [armadillomon.html](src/evolution-lines/gen-2-adventure-02/armadillomon.html) - Armadillomon line (the Brachiomon alternate Ultimate up to UltimateBrachiomon, Shakkoumon Jogress up to SlashAngemon, Armor Digivolutions).
  - [wormmon.html](src/evolution-lines/gen-2-adventure-02/wormmon.html) - Wormmon line (Paildramon and Dinobeemon Jogresses, Imperialdramon Mode Changes and its Black forms, the JewelBeemon branch up to BanchoStingmon, Armor Digivolutions).
- `src/evolution-lines/gen-3-tamers/` - Digimon Tamers:
  - [index.html](src/evolution-lines/gen-3-tamers/index.html) - Tamers selection screen (by Biomerge / peak form).
  - [guilmon.html](src/evolution-lines/gen-3-tamers/guilmon.html) - Guilmon line (Gallantmon Biomerge, the D-Ark's dark line up to ChaosGallantmon, Digital Hazard, X-Antibody forms, the Data (Yellow) variant line).
  - [renamon.html](src/evolution-lines/gen-3-tamers/renamon.html) - Renamon line (Sakuyamon Biomerge, the D-Ark's alternate line up to Kuzuhamon, X-Antibody forms, Maid Mode changes).
  - [terriermon.html](src/evolution-lines/gen-3-tamers/terriermon.html) - Terriermon line (MegaGargomon Biomerge, Black Digitron variants, the golden Rapidmon of the Digi-Egg of Destiny and its X form).
  - [cyberdramon.html](src/evolution-lines/gen-3-tamers/cyberdramon.html) - Cyberdramon line (Justimon Biomerge and its three arms, the D-Power line from Monodramon, the Beatbreak branch, X-Antibody forms).
  - [lopmon.html](src/evolution-lines/gen-3-tamers/lopmon.html) - Lopmon line (Celestial line up to Cherubimon (Good), the Adventure 02 film's dark line to Cherubimon (Evil), the Frontier corruption, X-Antibody forms).
  - [guardromon.html](src/evolution-lines/gen-3-tamers/guardromon.html) - Guardromon line (the D-Power line from Kokuwamon to HiAndromon, the Ghost Game branch from Hagurumon, X-Antibody forms).
  - [marineangemon.html](src/evolution-lines/gen-3-tamers/marineangemon.html) - MarineAngemon line (the D-Power line from Penguinmon, the Digimon Next link from Pichimon).
  - [leomon.html](src/evolution-lines/gen-3-tamers/leomon.html) - Leomon line (the D-Power line from Elecmon to SaberLeomon and Dinotigermon, the BanchoLeomon and IceLeomon branches, the Xros Wars MadLeomon, X-Antibody forms).
- `src/evolution-lines/gen-4-frontier/` - Digimon Frontier (Spirit Evolution; the children become Digimon, no partner):
  - [index.html](src/evolution-lines/gen-4-frontier/index.html) - Legendary Warriors selection screen (6 chosen + 4 Cherubimon's warriors).
  - [agunimon.html](src/evolution-lines/gen-4-frontier/agunimon.html) - Warrior of Flame line (Child Flamemon, Human/Beast Spirit, Fusion, Unified, Susanoomon).
  - [lobomon.html](src/evolution-lines/gen-4-frontier/lobomon.html) - Warrior of Light line (Child Strabimon, Human/Beast Spirit, Fusion, Unified, Susanoomon).
  - [kazemon.html](src/evolution-lines/gen-4-frontier/kazemon.html) - Warrior of Wind line (Human/Beast Spirit, Fusion JetSilphymon, the Spirits unified into EmperorGreymon, Susanoomon).
  - [beetlemon.html](src/evolution-lines/gen-4-frontier/beetlemon.html) - Warrior of Thunder line (Human/Beast Spirit, Fusion RhinoKabuterimon, the Spirits unified into MagnaGarurumon, Susanoomon).
  - [kumamon.html](src/evolution-lines/gen-4-frontier/kumamon.html) - Warrior of Ice line (Human/Beast Spirit, Fusion Daipenmon, the Spirits unified into EmperorGreymon, Susanoomon).
  - [loweemon.html](src/evolution-lines/gen-4-frontier/loweemon.html) - Warrior of Darkness line (corrupted Duskmon/Velgemon purified into Loweemon/JagerLoweemon, Fusion Rhihimon, the Spirits unified into MagnaGarurumon, Susanoomon).
  - [grumblemon.html](src/evolution-lines/gen-4-frontier/grumblemon.html) - Warrior of Earth line, one of Cherubimon's warriors (Human/Beast Spirit, the Spirits unified into EmperorGreymon, Susanoomon).
  - [arbormon.html](src/evolution-lines/gen-4-frontier/arbormon.html) - Warrior of Wood line, one of Cherubimon's warriors (Human/Beast Spirit, the Spirits unified into EmperorGreymon, Susanoomon).
  - [ranamon.html](src/evolution-lines/gen-4-frontier/ranamon.html) - Warrior of Water line, one of Cherubimon's warriors (Human/Beast Spirit, the Spirits unified into MagnaGarurumon, Susanoomon).
  - [mercurymon.html](src/evolution-lines/gen-4-frontier/mercurymon.html) - Warrior of Steel line, one of Cherubimon's warriors (Human/Beast Spirit, the Spirits unified into MagnaGarurumon, Susanoomon).
- `src/evolution-lines/gen-5-data-squad/` - Digimon Data Squad / Savers:
  - [index.html](src/evolution-lines/gen-5-data-squad/index.html) - DATS selection screen (by Burst Mode; the Agumon card links into the gen-1 Agumon tree).
- Generations whose selection screen exists but whose trees are all "Coming soon" (partners and peak forms taken from the DigimonWiki character infoboxes):
  - [film-x-evolution/index.html](src/evolution-lines/film-x-evolution/index.html) - Digital Monster X-Evolution (TV film, no human partners): Dorumon, WarGreymon X and MetalGarurumon X.
  - [gen-6-fusion/index.html](src/evolution-lines/gen-6-fusion/index.html) - Digimon Fusion: the Fusion Fighters' partners (Shoutmon, Greymon, Sparrowmon, Cutemon).
  - [gen-7-hunters/index.html](src/evolution-lines/gen-7-hunters/index.html) - The Young Hunters Who Leapt Through Time: Xros Heart (Gumdramon, Shoutmon (King Version), Damemon) and the other Hunters (Psychemon, Opossummon).
  - [gen-8-app-monsters/index.html](src/evolution-lines/gen-8-app-monsters/index.html) - Digimon Universe App Monsters: the App Drivers' Appmon by God grade; Appmon have no official Reference Book entry, so this page's artwork comes from Wikimon.
  - [gen-10-ghost-game/index.html](src/evolution-lines/gen-10-ghost-game/index.html) - Digimon Ghost Game: Gammamon, Angoramon and Jellymon.
  - [gen-11-beatbreak/index.html](src/evolution-lines/gen-11-beatbreak/index.html) - Digimon Beatbreak: Glowing Dawn's partners (Gekkomon, Pristimon, Chiropmon, Murasamemon).
- `src/cosmology/` - the Digital World Cosmology atlas (see "Digital World Cosmology" below):
  - [index.html](src/cosmology/index.html) - the atlas overview: Homeostasis, the Kernel, the Net Ocean holding the three worlds and their underworlds, Cocytus, a comparison table and the reading rules.
  - [classic.html](src/cosmology/classic.html) - Digital World (Classic): Yggdrasill, Royal Knights, Four Sovereigns with their Deva, Ten Legendary Warriors, and Anubismon's Dark Area.
  - [iliad.html](src/cosmology/iliad.html) - Digital World: Iliad: Homeros, the six guardian regions of the Olympos XII, the Titans, Plutomon's Dark Area, and the Celestial Walker / Astral Sentinel line-ups.
  - [shambala.html](src/cosmology/shambala.html) - Digital World: Shambala: Kunlun, Susanoomon's founding legend, the Tentei Hachibushu hierarchy, the Shikyoju, the Saiyu Warriors / Toho Braves line-ups, and Yomi.
  - [kernel.html](src/cosmology/kernel.html) - the Kernel: the chain Kernel -> Three Great Angels -> Angelic Army, related fallen forms and Rasielmon.
  - [dark-areas.html](src/cosmology/dark-areas.html) - Dark Areas & Cocytus: the three underworld authorities compared, the Seven Great Demon Lords, the Embodiment of the Seven Sins, GranDracmon and Gulfmon.
- `src/groups/` - roster pages for Digimon groups (no evolution arrows). The folder holds every roster; the section pages decide where each one is listed. URLs never move.
  - [index.html](src/groups/index.html) - Special groups selection screen: one card per special group, then "Organizations of the Digital Worlds", a directory of the cosmology-filed rosters grouped by world.
  - Rosters filed under Digital World Cosmology (breadcrumb `Home / Cosmology / <world> / <page>`):
    - [royal-knights.html](src/groups/royal-knights.html) - the thirteen Royal Knights plus Imperialdramon Paladin Mode as the order's origin.
    - [four-sovereigns.html](src/groups/four-sovereigns.html) - the Four Holy Beasts guarding the compass points, with Fanglongmon as the emperor of the Center.
    - [deva.html](src/groups/deva.html) - the twelve Deva serving the Four Sovereigns, three per master, each card carrying its zodiac animal as the rank pill.
    - [ten-legendary-warriors.html](src/groups/ten-legendary-warriors.html) - the ten ancient warriors of the Ancient Digital World, each card carrying its element.
    - [three-great-angels.html](src/groups/three-great-angels.html) - Seraphimon, Ophanimon and Cherubimon (Good) as the Kernel's guardians, with related forms as chips.
    - [angelic.html](src/groups/angelic.html) - Angelic Digimon roster (Celestial Digimon, Angelic Army, fallen counterparts), each card carrying its official angelic-rank Type.
    - [olympos-xii.html](src/groups/olympos-xii.html) - the twelve gods of Iliad ordered by guardian pair, each card carrying its region and Roman god, plus GraceNovamon as a related fusion.
    - [titans.html](src/groups/titans.html) - Iliad's ancient faction: Titamon as its principal figure, connected figures as chips, no fixed roster.
    - [tentei-hachibushu.html](src/groups/tentei-hachibushu.html) - Shambala's eight guardians in their hierarchy: Shakamon, the Saneiketsu, the Sanmyojin and Enmamon.
    - [shikyoju.html](src/groups/shikyoju.html) - the Four Perilous Beasts sealed in Jakeizan, each card carrying its Peril.
    - [demon-lords.html](src/groups/demon-lords.html) - the Seven Great Demon Lords, each card carrying its deadly sin as the rank pill, plus Ogudomon and Ogudomon X as the Embodiment of the Seven Sins.
  - Rosters listed under Special groups (breadcrumb `Home / Special groups / <page>`):
    - [four-great-dragons.html](src/groups/four-great-dragons.html) - the Four Great Dragons, named after the Dragon Kings of the four seas.
    - [vortex-warriors.html](src/groups/vortex-warriors.html) - Witchelny's Vortex Warriors, led by the Whirlwind General MedievalGallantmon.
    - [bancho.html](src/groups/bancho.html) - the five bearers of the Bancho title.
    - [d-brigade.html](src/groups/d-brigade.html) - the D-Brigade: operational personnel, the missing Darkdramon, cadets, and Digimon tied to its history (Chaosmon, Ludomon).
    - [mark-of-evil.html](src/groups/mark-of-evil.html) - a themed category, not an organization: each card records where its bearer wears the Mark of Evil.

Each file is a fixed-size canvas with cards positioned by column (evolution level),
SVG arrows drawn between them, a trigger legend, and an optional bottom panel. Cards link
to [DigimonWiki/Fandom](https://digimon.fandom.com); the artwork comes from the official
[Digimon Reference Book](https://digimon.net/reference_en/) (see "Artwork sources" below).

**Print-friendly by design.** Every page is prepared to be printable, so no content may
depend on interaction: no modals, popups or hover-only information. Interaction that does
not hurt print is fine - the group badges are the good example (on paper they still read
as a category pill). Purely navigational widgets are the bad example (the `.backnav` pill,
the generation pills and the breadcrumb add nothing on paper): they are hidden via the `@media print` rule in
`digivolution.css`, and new features should avoid needing such elements at all. This is why
tree cards carry no cross-page arrow (see "Cross-page navigation").

## Files (shared design system)

Styling and the rendering engine are shared (they live at the `src/` root), so pages
cannot drift apart:

- `digivolution.css` - all styling + the layout-grid tokens. The page and canvas backgrounds
  use fixed-size gradients (px radii and offsets, never `%` or a default size), because a
  gradient sized by the page would tint each tree differently with its height and width.
- `digivolution.js` - the renderer `DigiTree.mount({ legend, columns, nodes, edges })`,
  which builds the arrow markers, legend, column headers, node cards, edges and the
  generation pills next to the back pill. Every generation `index.html` loads it too, at the
  end of its `<body>`, only to answer the trees' request for its partner list.
- `favicon.svg`, `favicon.ico` (16, 32 and 48px) and `apple-touch-icon.png` (180px) - the
  site icon, a gold "D" on the navy tile. The `.ico` and the `.png` are rasterized from the
  `.svg`; redo them whenever it changes. Every page links all three in its `<head>`, right
  after the viewport `<meta>`, with the `../` prefix of its depth.
- the `evolution-lines/gen-*/<partner>.html` tree pages - **config only**: each `<link>`s
  the CSS and `<script src>`s the JS with a `../../` prefix (they sit two levels below the
  `src/` root), then passes its data. Per-page dimensions live in a small inline `<style>`
  block; the graph is `nodes`/`edges` data; appendix panels are plain HTML sections.
- the `evolution-lines/gen-*/index.html` selection screens - a **different kind of page**:
  self-contained (own inline CSS, no `digivolution.js`), they render a responsive grid of
  partner cards linking to that generation's tree pages. They only `<link>` `digivolution.css`
  to inherit the shared color tokens, the font and the `.crumbs` breadcrumb style.
  `evolution-lines/index.html` (Generations) and `groups/index.html` (Special groups) are
  the same pattern one level up. Every selection screen shows an entry without a page yet
  as a "Coming soon" card (`.card.soon` + `.badge-soon`, a `div` instead of a link).
- the root `index.html` - the same selection-screen pattern at the top: a self-contained
  page with one card per section (Generations, Digital World Cosmology, Special groups),
  each showing three sample thumbnails and linking to `evolution-lines/index.html`,
  `cosmology/index.html` or `groups/index.html` (assets are linked without a path prefix,
  since it sits at the `src/` root). Details belong on the section pages, not here.
- the `cosmology/*.html` atlas pages - self-contained like the rosters (one `../` asset
  prefix), carrying the roster card styles they need for their few full cards; their shared
  atlas components (chips, organization panels, region cards, interpretation labels,
  relationship lists, comparison tables, breadcrumbs) live in `digivolution.css`.
- the `groups/<group>.html` roster pages - selection-screen-style pages (self-contained
  CSS, no `digivolution.js`, one `../` asset prefix) for special Digimon groups. There are
  no evolution arrows: cards are grouped into power tiers by `.tier` section headings
  (e.g. Celestial Digimon on top, then the Angelic Army, then fallen counterparts), and
  each card shows the Digimon's official level (`Mega`, never the tree pages' `Ultra`: every
  member of a group is special, so the roster does not rank one above another), an official-Type rank pill (`.rank`, accent-tinted
  by angelic sphere) and a short role line sourced from the official profile. Cards link
  to DigimonWiki/Fandom. Verify every rank and role in the official encyclopedia
  (`digimon.net/reference_en`) before adding a member, in both directions when the claim
  is a relationship (see the `digimon-lore-notes` skill rules).
  A roster may end with a lore notes section before the footer (`.lore-section`, see
  `angelic.html`): a static, responsive wrapper around the shared `.lore-grid` /
  `.lore-card` styles (the tree pages' `.lore-panel` is absolute-positioned and does not
  fit these pages), with the grid collapsing to 2 and 1 columns at 1100px and 640px.
  Two optional card fields exist: a `.myth` line under the rank pill naming the
  mythological inspiration (Olympos XII, Tentei Hachibushu, Shikyoju), and the Mark of Evil
  record, a `dl.mark` whose first row is the mark location followed by count, color and a
  form-specific note. Data a source leaves open is written as `Not stated` or
  `Not recorded`, never guessed.

To scaffold a new page consistently, use the `digimon-evolution-tree` skill
(`.claude/skills/digimon-evolution-tree/`), which walks through the steps and points
back to this file. To add a "Lore notes" curiosities panel to an existing page, use the
`digimon-lore-notes` skill (`.claude/skills/digimon-lore-notes/`), which enforces source
verification and a plan-and-approve step.

All on-image text is in English so the graphics are universal, and Digimon, characters
and series go by their DigimonWiki/Fandom names, the wiki every card links to
(`Kentaurosmon`, not `Sleipmon`); when the official Bandai name differs, the page footer
may state the mapping. Exceptions: `Yggdrasill` keeps its official name (DigimonWiki
calls it `King Drasil`), and every Omnimon form goes by the official `Omnimon`, as in the
Reference Book, although DigimonWiki keeps `Omegamon Alter-S`, `Omegamon Alter-B` and
`Omegamon Zwart Defeat` (the cards still link to those articles, and the footer states the
mapping). This README is the
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
bottoms line up across the whole graph. Frontier is the one exception: a node that merges the
Human and Beast rows (the Ancient, the Fusion, the Unified form and Susanoomon) sits half a
pitch down (`y: 370`), centered between them, with no row-mates in its column.

A level column between the first and last levels stays in place even when no card fills it,
and it keeps its header, so the column scale reads without gaps; the footer says why it is
empty (the In-Training column on marineangemon).

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

The legend is the same size on every page, including the narrowest Frontier pages (`1336px`):
the `560px` box clears the title on all current pages. On those `1336px` pages the default
`920px` subtitle would run under the legend, so the page caps it with `.subtitle { max-width:680px; }`.
Do not override the legend per page; if a future page's title would collide with it, shorten
the title rather than shrinking the legend.

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
at least `220n + 28` wide (`908px` for four, `1348px` for six). A panel with one or two cards
grows past that until its title and its subtitle each fit on one line (`350px` to `490px`),
so every Jogress, composition, DNA and Unified Spirit panel is `333px` tall, alone or side by
side. The `.armor-panel` holds ten to twelve Digimon in one row, so its cards are smaller but
just as fixed: `136px` wide, enough for the longest name and Digi-Egg label on one line, and
at least `198px` tall, the node card's height. The panel spans the card grid, `width - 84`
(the `42px` margin each side), while its cards keep a fixed `12px` gap and align left, like the
cards of a Jogress panel: ten cards fill the narrowest canvas (`1598px`) exactly, and a wider
canvas leaves room on the right (`114px` on patamon and gatomon, `228px` on veemon, `524px` on
wormmon). Every Armor panel is `287px` tall. The `.lore-panel`
(grey, matching the `lore` trigger color) also spans the full width with a fractional
`repeat(4, 1fr)` grid of text-only cards; its entries are source-verified explanations of the
page's unusual arrows and nodes, added via the `digimon-lore-notes` skill.

Set each panel's `top` so it sits `22px` below the element above it: the lowest node for the
first panel, or the previous panel's bottom for a stacked one. Together with the `22px`
panel-to-footer gap, this gives the whole footer block one uniform `22px` vertical rhythm
(diagram -> panel -> panel -> footer). Measure `top` in the browser, because a node's rendered
bottom depends on its note length. When you move a panel you must recompute the canvas
`height` (and the matching `<svg viewBox>` height) so the footer gap stays `22px`.

### Panel placement

Panels sit on the card grid: the shared CSS places every panel at `left: 42px`, the first
column's margin, and a full-width panel ends at the last column's right edge. Panels stack
as a pyramid, the narrowest on top and the widest at the bottom:

1. the reference panels: `Jogress partner(s)`, then the collective composition (on Frontier
   the DNA panel, then the Unified Spirit one);
2. the Armor panel, the widest, under them;
3. `Lore notes`, last.

A Jogress panel and a composition panel share one row when both fit with a `58px` gap
between them, the same as between card columns (gatomon, gabumon): the
Jogress panel stays at the left margin and the composition panel ends flush with the last
column (page style `left = canvas width - 42 - panel width`); on a wider canvas the Jogress
panel takes the rest of the row (gabumon). Since both are `333px` tall, their bottoms
line up. Where they do not fit (Frontier, agumon, patamon), each takes its own row at the left
margin.

The Armor panel is the only panel with a connector, an amber edge from the line's node down
to it, because the line evolves into its forms. The edge passes the panels above it: down the
middle of the shared row's gap, beside a lone Jogress panel (Adventure 02), or around the right
of a stacked Jogress and composition pair (patamon): there the panels start a row gap (`42px`)
below the last card row instead of `22px`, and the connector runs along that gap to the right
of the stack, then down to the Armor panel.

A panel that feeds a node (Jogress, composition, DNA, Unified Spirit) has no connector: its
title names the result and its subtitle and cards state who fuses into it, which is enough to
tell several fusions apart (the Omnimon forms on agumon and gabumon) and keeps the bottom of
the canvas free of long lines.

## 1. Card labels (the pill under each name)

Format: `Level` optionally followed by ` / Virus` and/or ` / X`, in that order.

### Level (exactly one)

| Level | Meaning |
|---|---|
| `Fresh` | Newborn stage. |
| `In-Training` | Baby / In-Training stage. |
| `Rookie` | Child / Rookie stage. |
| `Champion` | Adult / Champion stage. |
| `Ultimate` | Perfect / Ultimate stage. |
| `Mega` | Ultimate (JP) / Mega stage. |
| `Ultra` | Super Ultimate (超究極体): a Mega that V-Tamer 01 or the Reference Book calls Super Ultimate (Daemon (Ultra), UlforceVeedramon Future Mode, Armageddemon), or that Digimon Story: Cyber Sleuth ("Ultra"), Digimon ReArise, Digimon Survive ("Super Ultimate") or Digimon Story: Time Stranger ("Mega+") place in that stage (the Omnimon forms, Imperialdramon Paladin Mode, the Bond and Burst Mode forms, Gallantmon Crimson Mode, Millenniummon). No official stage exists above Mega: the Reference Book lists them all as Mega, and Kenji Watanabe calls Super Ultimate a title for the strongest Megas. So the label is editorial, taken from those games because they share one list, and only tree pages use it, where it marks the exceptional power a Digimon gains; rosters and the cosmology keep the official Mega. Other games do not count (Digimon New Century and Digimon Masters have their own longer lists), and a game never supports a relation or a claim. An Ultra card sits in the Ultra column. Wikimon's "Super Ultimate" page tags each member with the media that classify it. |
| `Armor` | Result of an Armor Digivolution (Digi-Egg). The Adventure 02 partners' lines (Veemon, Hawkmon, Armadillomon, Wormmon, Patamon, Gatomon) and the golden Rapidmon on terriermon, the one Armor form drawn as a tree card (`cls:'armor'`, amber pill). An Armor card sits in the column of the power its profile gives it: the golden Rapidmon in the Mega column ("on par with a Mega Digimon"), with Rapidmon X in the same column. Ponchomon on palmon keeps its official Armor level with a Normal pill, since Palmon reaches it without a Digi-Egg (Adventure: 2020). |

Frontier (`gen-4-frontier`) does not use these ranks; it has its own Spirit-rank levels.
See "Frontier: Spirit Evolution" under Notes on specific cases.

A card for a being DigimonWiki gives no Level (Grani, Gallantmon's steed) has no pill: leave
`lvl` out of the node and the engine skips it. Never invent a rank such as `Support` for it.

### Qualifiers (optional, only these two)

| Qualifier | Meaning |
|---|---|
| `Virus` | A Virus-attribute form of the tree's dark line, the forms reached by Dark / Virus edges: e.g. `MetalGreymon (Virus)`, `BlackWarGreymon`, `Imperialdramon (Black)`, `BlackGrowlmon`. It marks the dark line, not the attribute: the main line stays unmarked even when the Reference Book gives it Virus (Guilmon's), and so does a dark-line form the Reference Book gives as Vaccine (`Omnimon Zwart`, `Ophanimon Falldown Mode`). |
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
| Mode Change | teal | Same digimon switching mode / form, including the temporary forms Black Digitron causes (Omnimon Zwart, Omnimon Alter-B). | both |
| Dark / Virus | red | Dark or Virus-attribute branch (including rage / loss of control). | both |
| Armor Digivolution | amber | Armor evolution via a Digi-Egg. | veemon, hawkmon, armadillomon, wormmon, patamon, gatomon, terriermon |
| Bond Evolution | pink | Bond-driven evolution. | agumon, gabumon |
| Burst Mode | gold | Burst Digivolution. | agumon, palmon |
| Variant / subspecies | silver | Not an evolution: the target is a separate species or subspecies of the source ("a separate species of Agumon", "a subspecies of Greymon"). | agumon, gabumon, biyomon, palmon, patamon, veemon, guilmon, terriermon |
| Ancestral link | grey (dotted, no arrowhead) | Lore ancestry, not an evolution: a Legendary Warrior linked to the root of the line it spawned. | agumon, gabumon, tentomon, gen-4-frontier |

A form the Reference Book describes as a separate species or a subspecies (`SnowAgumon`,
`Agumon Expert`, `Gaiomon`) uses **Variant / subspecies** and `cls:'variant'` (silver pill),
so it never reads as an evolution. The edge starts at the species the profile names, even when
that is another level (`Gaiomon`, "a subspecies of Greymon", hangs from Greymon), or when only
the other Digimon's profile names it (`Veedramon`, which ExVeemon's profile calls its derivative
species, hangs from ExVeemon). A subspecies reached by digivolution keeps **Normal evolution** (`BlitzGreymon`, a subspecies of
WarGreymon, digivolves from MetalGreymon Alterous Mode in Adventure: 2020), and one reached by
absorbing other Digimon is a **DNA / Jogress** (`HiMachineDramon`, Machinedramon after
absorbing a SkullScorpionmon army in Digimon Fusion episode 14), and the Jogress panel carries
the absorbed Digimon as a partner card (`SkullScorpionmon` for `HiMachineDramon` on agumon,
`Arcadiamon (Ultra)` for `Daemon (Ultra)` on patamon).

A Warp Digivolution gets no arrow of its own (Agumon -> WarGreymon, or Leomon -> SaberLeomon in
Adventure episode 47): it passes through the skipped levels in one step, so the line already
covers it, and the scene does not show which form it passed through. The footer may mention it.

### Routing

Edges are orthogonal: horizontal and vertical runs joined by rounded corners, never curves.
The engine leaves along the source side's axis, enters along the target side's axis and,
between different rows, turns in the lane just before the target column (`laneX` picks
another lane, `laneY` another row gap for top/bottom edges, `points` gives the corners).
Anchors come from the cards' layout position, so a hovered card never skews its arrows.

- An edge runs in a lane or row gap, never under a card or panel, and crosses no other edge
  unless no route can avoid it, and a card may move to clear one: on agumon, Gaiomon and
  Agumon (Bond of Bravery) sit above the Virus and Data Squad lines, and on gabumon the Bond of
  Friendship sits above the Virus line, so their long edges never cross them. A single
  crossing is preferred to a detour around the canvas edge.
- A run alone in a row gap or lane sits on its centerline (21px below the card above, 29px
  past the card's side); ports and lanes are split only where edges compete for the space.
- Edges of the same trigger may share a trunk (a fan, or two Spirits merging into a Fusion).
  Edges of different triggers never share a run: each leaves from its own port (`fromY` /
  `fromX`) and, when both turn, in its own lane. On a downward fan the higher port takes the
  outer lane (an upward fan mirrors it), so the runs do not cross.

Frontier reuses these colors under Spirit-Evolution names (Spirit = `normal`, Slide =
`mode`, Fusion = `dna`, Unified = `burst`); no new color tokens are added. See "Frontier:
Spirit Evolution" under Notes on specific cases.

### Edge text (labels)

The color already communicates the trigger, so **do not add a text label that only
restates it** (no "X-Antibody" on a green arrow, no "DNA / Jogress" on a purple one, no
"Mode Change" or Frontier "Slide" on a teal one, no "Digi-Eggs" on an amber one). Add a label
only when it carries information the color cannot:

- a specific event or continuity: `Corrupted (Adventure: 2020)`, `Data Squad`
- a narrative cause: `Loss of control`
- the specific partner in an otherwise-ambiguous link: `Bond with Tai`, `Unified by Takuya`,
  `Biomerge with Rika`

A continuity is named the way the site names the series (`Adventure: 2020`, `Data Squad`,
`Adventure 02`, `V-Tamer`); an event label puts it in parentheses. Descriptors of the target
(`Subspecies`, `Data variant`, `Blue form`) belong in its card note, and a group title
(`Bancho`) in its badge. A label sits on its own edge inside a free lane or row gap, never over
a card or another edge: when the lane is narrower than the label, place it where the edge
crosses a row gap or route the edge through one (see the Daemon -> Daemon (Ultra) arch on
patamon). When no spot fits and the card note already says it, drop the label.

Ancestral (lore) links are the exception that needs **no** label: the dedicated dotted
grey **Ancestral link** trigger already communicates "ancestry, not evolution". See the
Lore section below.

Keep such labels short, in title case, and consistent across both files.

## 3. Legend

The on-image legend lists only the triggers that the file actually uses.

- Shared by both: Normal evolution, X-Digivolution, DNA / Jogress, Mode Change,
  Dark / Virus.
- The Adventure 02 partners (Veemon, Hawkmon, Armadillomon, Wormmon, Patamon, Gatomon) and Terriermon add: Armor Digivolution.
- Agumon adds: Bond Evolution, Burst Mode, Variant / subspecies.
- Gabumon adds: Bond Evolution, Variant / subspecies.
- Biyomon, Patamon, Veemon, Guilmon and Terriermon add: Variant / subspecies.
- Palmon adds: Burst Mode, Variant / subspecies.
- Agumon, Gabumon and Tentomon add: Ancestral link.
- Frontier relabels the shared colors: Spirit Evolution, Slide Evolution,
  Fusion / DNA Digivolve, Unified Spirit, plus Ancestral link. Pages without a Child or a
  purification step draw no blue edge and so omit Spirit Evolution.

## 4. Page copy (title, subtitle, panels, footer)

The four text slots form one orientation funnel, moving from identity to provenance. Each
has a single job; keep every page's copy serving that job so the whole set reads as one
product. A page states more or less detail depending on its size, but never repurposes a slot.

| Slot | Job | Convention |
|---|---|---|
| Title (`h1`) | Identity: whose tree, and what kind of artifact. | `<Partner>: evolution tree`. Frontier is Spirit Evolution, not Digivolution, so `agunimon` reads `Agunimon: Spirit Evolution tree`. |
| Subtitle (`.subtitle`) | Scope: the stage span plus the branches and appendices that make this line distinctive. | `<Stage1> -> ... -> <StageN> hierarchy, with <distinctive branches / appendices>.` Large trees summarize by trigger kind (`with X, DNA/Jogress, Mode Change ... branches`); small trees name the actual forms (`with the X-Antibody branch (Gomamon X) and the collective composition ...`). Frontier states its Spirit tiers instead of the Fresh->Mega ranks. |
| Panel title + subtitle | Local relationship: the off-grid relationship the appendix panel captures. | A panel that feeds a node names that result first, then the relationship kind: `<Result>: Jogress partner(s)` (singular for one card, plural for many; `Omnimon forms` when one panel feeds several variants), `Omnimon Merciful Mode: collective composition`, and on Frontier `Susanoomon: DNA Digivolve` and `EmperorGreymon: Unified Spirit`. The subtitle states the concrete **mechanic** (`Aquilamon + Gatomon = Silphymon`). Panels that feed no single node keep a kind title: `<Name>'s Armor Digivolutions` (the compact Digi-Egg branch) and `Lore notes` (source-verified stories behind the page's unusual arrows; subtitle `the stories behind the unusual arrows`). The members of Omnimon Merciful Mode are listed in the Adventure partner order, without the page's own member. |
| Footer (`.footer`) | Provenance + reading key + caveats. | Fixed lead: attribution (`Names link to DigimonWiki/Fandom (Fandom community, CC BY-SA unless noted otherwise); artwork © Bandai, via the official Reference Book.`, adding `and Wikimon` when the page uses a Wikimon image), then `Card labels show Level (+ Virus / X); edge colors show the digivolution trigger.` Frontier pages read `Card labels show the Spirit tier; edge colors show the Spirit trigger.` instead. Then any page-specific caveats about non-obvious nodes/links (a synthesis with no incoming arrow, a lore link, a collective composition), and the official names that differ (`Susanoomon is DigimonWiki's name for the official Susanomon.`). Public pages never point at this README. |

## Notes on specific cases

### `Virus` vs `Virus Mode`

`Imperialdramon Dragon Mode (Black)` and `Imperialdramon Fighter Mode (Black)` were
previously labeled `Mega / Virus` and `Mega / Virus Mode`. There is no real difference:
both are Mega-level, Virus-attribute Black forms. The Dragon vs Fighter distinction is a
**Mode Change**, already carried by the digimon name and shown by the Mode Change edge,
so it does not belong in the level label. Both are now `Mega / Virus`.

### Lore / non-evolution links

`AncientGreymon`, `AncientGarurumon` and `AncientBeetlemon` are Legendary Warriors: the
ancestral (lore) origin of the Greymon species and of the Beast and Insectoid Digimon, not a
real evolution path. The AncientGarurumon and AncientBeetlemon profiles name no single species
("Its abilities were subsequently passed on to Beast Digimon", "would later be inherited by
Insectoid Digimon and others"), so the Gabumon and Tentomon links rest on Garurumon being a
Beast Digimon and Kabuterimon an Insectoid one, and their card notes quote that wording. Each
is drawn with the dedicated **Ancestral link** trigger and these conventions, so the relation
is never mistaken for an evolution:

- **Trigger / style**: `cls:'lore'` on the node (grey level pill); the edge uses the
  `lore` type, a dotted grey line drawn with `{noArrow:true}` (no arrowhead) and no text
  label.
- **Direction**: from the Ancient to the root of the line (ancestor -> descendant), not
  the reverse.
- **Anchor**: the root of the line is its **Fresh** form (`Botamon`, `Punimon`,
  `Pabumon`), never an arbitrary mid-line member.
- **Placement**: the Ancient node sits at the top row of the **Fresh column** (`x` of the
  Fresh form), so the link is a short vertical connector down its own column.

`Kimeramon` is a composite of parts from various Digimon (Reference Book), so it has no
incoming arrow and only outputs to `Millenniummon`.

### Virus lines on agumon and gabumon

Each Virus form of these two lines is the Virus counterpart of a Vaccine one in its profile
(BlackAgumon is "an Agumon that Digivolved into a Virus type", Greymon (Blue) "the Virus type
of Greymon", MetalGarurumon (Black) "a Virus type MetalGarurumon"), but no accepted source shows
the Virus forms digivolving into one another, and linking every Vaccine form to its Virus
counterpart fills the tree with crossing edges. To keep the two trees readable, only the
Rookie takes a Dark edge from its Vaccine form, and the Virus forms follow as one Dark chain:
BlackAgumon -> Greymon (Blue) -> MetalGreymon (Virus) -> BlackWarGreymon, and BlackGabumon ->
BlackGarurumon -> ShadowWereGarurumon -> BlackMetalGarurumon. The chain is an editorial reading
of the profiles, an exception to "Relation sources", and the footer says so. It also states
that the BlackWarGreymon of Adventure 02 was built by Arukenimon from 100 Control Spires.

### X-Antibody forms

Every X form hangs from its base form by a vertical X-Digivolution edge (Gatomon -> Gatomon X,
Omnimon -> Omnimon X). The X forms of a line are not chained to one another, even where a
source shows the step (Digimon Chronicle X has Gatomon X -> Angewomon X): an X form follows the
line of its base form, so the chain is implied and the extra edges add nothing. Megidramon X on
guilmon is the one X form beside its base, since cards fill Megidramon's column above and below.

### Cross-page navigation

Every page places its way back as the first element inside `.wrap` (both styled in
`digivolution.css` and hidden in print):

- tree pages use a `.backnav` pill to their generation's `index.html`, labeled with the
  partner group (`DigiDestined`, `The Tamers`, ...). Next to it the engine adds a `nav.gennav`
  row with one pill per partner, the current one highlighted. The partners are the linked
  cards of that same `index.html`, in their order, so the index is the only list: a new tree
  joins the row once its index card links to it, a "Coming soon" card never does, and a
  generation with a single linked card (Data Squad) shows no row. The tree opens the index in a
  hidden frame (`index.html#partners`) and the index posts back its `h1` and its cards; unlike
  `fetch`, this also works on a page opened straight from disk (`file://`). The index images
  are `loading="lazy"`, so the hidden frame downloads none of them.
  A card linking to another generation's tree adds `?gen=<folder>` to its href (Patamon and
  Gatomon on Adventure 02, `?gen=gen-2-adventure-02`; Agumon on Data Squad). The tree then
  points its back pill at that index, takes the index's `h1` as the label (`DigiDestined 02`)
  and shows that generation's pills, which carry the parameter on, so the visitor stays in the
  generation they came from. The printed page is the same either way;
- every other page uses a `nav.crumbs` breadcrumb trail from Home down to itself:
  `Home / Generations / <partner group>` for the generation indexes,
  `Home / Special groups / <page>` for the special group rosters, and
  `Home / Cosmology / <world> / <page>` for the atlas pages and the rosters filed under it
  (their files stay in `groups/`; the trail follows the navigation, not the folder).

Every page with a breadcrumb uses the same frame, `.wrap { padding: 40px 22px 56px;
max-width: 1280px; }`, so the trail stays in the same spot while navigating. A page that
needs a narrower or differently packed card layout caps or tunes its `.grid` (or its
`.section`), never the `.wrap`.

A tree card carries at most two links: the card itself (DigimonWiki) and its category
badge (the roster). There is no per-card arrow to another tree page: a related tree is
reached through the badge's roster, e.g. every Ancient card in
`groups/ten-legendary-warriors.html` links its `Spirit tree`, or through the selection
screens.

A node's category `badge` may also carry an `href` (plus optional `title`): the engine
then renders it as a clickable link instead of a plain label, e.g. the `Celestial Digimon`
and `Angelic Army` badges in `patamon.html` linking to the `groups/angelic.html` roster, or
the `Legendary Warrior` badge of every Ancient node linking to its card in
`groups/ten-legendary-warriors.html`.
The card itself keeps linking to the wiki.
Every roster card has an `id` (the Digimon name lowercased, parentheses dropped,
separators hyphenated: `#angemon`, `#cherubimon-good`, `#ophanimon-falldown-mode`), so a
badge `href` should point at the member's own card (`groups/angelic.html#angemon`): the
browser scrolls to it and the roster's `:target` CSS keeps it highlighted in its accent
color.
A panel card (e.g. Magnamon in Veemon's Armor panel) cannot nest a badge link, since the
card is itself an `<a>`. Instead, place an `<a class="rk badge-link panel-badge">` as a
grid sibling stacked into the same cell, giving the card **and** the badge the same
explicit inline `grid-column`/`grid-row` (without the explicit placement on the card,
auto-placement skips the badge's occupied cell and pushes the card to the next row).
A roster card has the same constraint; there the card and the badge are wrapped in a
`.card-cell` (a positioned flex wrapper that takes the card's grid cell) with the badge
absolutely positioned in its top-right corner, e.g. the `Demon Lord` badges on the
Daemon and Lilithmon cards of `groups/angelic.html` linking into
`groups/demon-lords.html`. These badges are how the rosters express many-to-many
membership: Azulongmon carries `Great Dragon` / `Sovereign` badges between the two rosters
that list it, Lilithmon and Belphemon Rage Mode link between the Demon Lords and the Mark of
Evil, and Enmamon's `Rules Yomi` badge points at the Shambala page. Badge classes, all in
`digivolution.css`: `.rk`, `.lw`, `.fgd`, `.vw`, `.cd`, `.aa`, `.fa`, `.dl`, `.fs` (Four
Sovereigns), `.moe` (Mark of Evil), `.db` (D-Brigade), `.bc` (Bancho), `.ul` (underworld
authority), `.ox` (Olympos XII).

### Tamers: Biomerge and the D-Ark lines

- **Biomerge** (Matrix Evolution): the partner merges with its Tamer into the Mega. Tamers
  episode 45 shows it from the Ultimate (WarGrowlmon, Taomon, Rapidmon), as the D-Ark and
  D-Power do, and Cyberdramon is the only form Ryo's partner merges from. The edge is a Normal
  evolution from the Ultimate to the Mega, labeled `Biomerge with <Tamer>`, and arches over the
  row gap above the main line, between ports that clear the X-Antibody edges. Most episodes
  merge the Rookie straight into the Mega instead; like a Warp Digivolution, that jump gets no
  arrow of its own, and the footer mentions it.
- **D-Ark / D-Power alternate line**: the V-pet picks one form per level by a condition, so
  any Champion of the line can lead to any Ultimate. The alternate forms are drawn as their
  own chain, one edge per level, in a row under the main line (Renamon -> Youkomon -> Doumon
  -> Kuzuhamon), and the mixed paths the conditions allow are not drawn. The chain is a
  Normal evolution, or Dark / Virus when its forms are the dark counterparts of the main line
  (Guilmon -> BlackGrowlmon -> BlackWarGrowlmon -> ChaosGallantmon). The footer names the
  V-pet.

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

Only Takuya and Koji have a Child and a Unified form of their own. The other eight pages
follow these rules:

- **No Child column**: the `Ancient` ties straight to the Human and Beast Spirits with the
  lore fan, and the canvas is `1336px` (five columns).
- **Unified and Susanoomon stay as nodes**: the warrior's Spirits feed Takuya's
  EmperorGreymon (Flame, Earth, Wood, Ice, Wind) or Koji's MagnaGarurumon (Light, Thunder,
  Darkness, Water, Steel). Both Spirits reach the Unified node with `burst` edges labeled
  `Unified by Takuya` or `Unified by Koji`, since the form is not the line's own. The
  `<Unified>: Unified Spirit` panel marks the line's Ancient card `(this line)`. Both
  panels sit below the diagram, the narrow DNA panel above the Unified one (see "Panel
  placement").
- **Fusion**: the Wind, Thunder, Ice and Darkness Fusions exist only outside the Frontier
  anime (Reference Book, D-Tector 3.0, figures), which the node note states. Earth, Wood,
  Water and Steel have none recorded: their Fusion column stays empty and unlabeled, and
  the Unified label sits in the gap.
- **Darkness** (`loweemon.html`, `1598px`): a `Corrupted Spirit` column in the Child slot
  holds Duskmon and Velgemon (`cls:'dark'` pill), and Spirit Evolution edges lead to
  Loweemon (H -> L Spirit) and JagerLoweemon (B -> K Spirit), whose notes say purified.
- **Cherubimon's warriors** (Grumblemon, Arbormon, Ranamon, Mercurymon) draw no extra
  nodes; the footer states that Cherubimon gave the H Spirit life and that the Spirits end
  in the Unified form.
- **Footer**: game forms with other species, card-game evolutions into an Ancient and
  `{{DSR}}` entries stay out, as on the Flame and Light pages. Official Reference Book
  names that differ are mapped (`Susanomon`, `AncientTroymon`, `AncientMermaimon`,
  `Lanamon`, `Sephirothmon`, `Velgrmon`, `DaiPenmon`).

The engine is otherwise unchanged: same `nodes`/`edges` config, same layout grid and
header band.

## Digital World Cosmology

The cosmology section explains how the Digital Worlds relate without inventing canon. It is
an editorial model built from official Bandai material, and every page says so in its footer.

### Information architecture

`cosmology/index.html` is the overview: Homeostasis and the Kernel on top, the Net Ocean
holding the three world columns (each world above its own underworld), and Cocytus at the
bottom. Each box links to a detail page; complete rosters appear only on the roster pages.
World pages share one section order: facts strip (host computer, cultural theme, main
guardians, underworld), the world, its organizations, historical groups, line-ups or
regional ecosystems, the underworld, notable relationships, and sources.

### The data model, expressed in static HTML

The site has no build step and no data files, so the entity model maps onto markup:

| Entity | Where it lives |
|---|---|
| World | A `cosmology/<world>.html` page and its `.facts` strip. |
| Region | A `.region` card with an `id` (`#guardian-palace`, `#genshi-continent`, `#yomi`). |
| Organization | A `groups/<org>.html` roster, summarized on its world page by an `.org` panel. |
| Digimon | One full card (`a.card` with an `id`) on its home roster or page; every other mention is a `.chip` linking to that card. |
| Relationship | An item in a `.relations` list: subject, `.rel` predicate, object, interpretation label. Cross-roster memberships are badge links. |

The one-full-card rule keeps species data in one place: Enmamon has its card in
`tentei-hachibushu.html#enmamon`, and the Shambala page, the Yomi section and the Dark
Areas page reference it with chips. Digimon without a roster get their full card on the
page that explains them (Susanoomon, Plutomon, Anubismon on their world pages; GranDracmon
and Gulfmon on the Dark Areas page). A roster still shows a full card for each of its own
members, which is why Azulongmon has one card on each of its two rosters.

### Interpretation labels

`.lore-tag` pills mark how firmly a statement is established. Each carries a glyph and text,
so nothing depends on color:

| Class | Label | Use for |
|---|---|---|
| `.tag-established` | Established Lore | Stated in official material. |
| `.tag-continuity` | Continuity-Specific | True in one anime, manga or game only. |
| `.tag-legendary` | Legendary | Told as ancient history or legend. |
| `.tag-parallel` | Thematic Parallel | Shared inspiration with no stated tie. |
| `.tag-unconfirmed` | Unconfirmed | Plausible, not stated (e.g. Yomi's link to Cocytus). |

Use them where ambiguity matters, not on every sentence. The atlas overview has the key.

### Content rules specific to the section

- Do not invent a chain of command: host computers are presented as equivalent
  administrators, the Kernel is not placed under Yggdrasill, and nobody is named ruler of
  Cocytus.
- Fixed counts are only shown where the source fixes them (13 Royal Knights, 12 Olympos XII,
  8 Tentei Hachibushu, ...). The Titans and the Angelic Army have no universal roster; the
  Angelic Army page follows the official poll of eleven and says so.
- Product line-ups (Saiyu Warriors, Toho Braves, Celestial Walker, Astral Sentinel) are
  presented as line-ups, never as organizations.
- No collapsible sections: they would hide content in print. Navigation is the `.jump` bar
  of in-page anchors (hidden in print) plus links between pages.
- New pages add `loading="lazy"` to their images; the official artwork files are small.
- Every world page ends with a `.sources` list. Official digimon.net pages first, Wikimon and
  DigimonWiki only for terminology and continuity details.

## Relation sources

Every evolution relation on a tree (an edge, or a card in an Armor panel), and every other
claim on a page (a card note, a roster role, a lore note, a footer sentence), must rest on one
of the sources below. A few editorial exceptions keep a relation that only a game or the
design supports, because it is plain from the Digimon themselves; each page states its own in
the footer:

- the Virus chain of agumon and gabumon (see "Virus lines on agumon and gabumon");
- YukimiBotamon on gatomon, which only a game links to Nyaromon: its profile makes it a variant
  of Botamon, and the Fresh forms mirror the partners, Agumon's line (Tai's) starting at Botamon
  and Gatomon's (Kari's) at YukimiBotamon;
- Saberdramon on biyomon, drawn as a variant of Birdramon: no profile links them, but it is
  Birdramon in dark flames;
- Tsukaimon on patamon, drawn as a variant of Patamon: the Reference Book only says it looks
  like Patamon, and only the encyclopedia of the Digimon Life mobile game calls it a subspecies;
- Daemon (Mantled) on patamon, drawn as a variant of Daemon: it is Daemon's look in Adventure
  02, and only a game links the two designs;
- Junomon, Mastemon and LadyDevimon on gatomon: only games draw Angewomon -> Junomon,
  Angewomon + LadyDevimon -> Mastemon and BlackGatomon -> LadyDevimon, and no other source
  reaches these Digimon (the Reference Book only says BlackGatomon digivolves into Dark Angels
  and Mastemon fuses an Angel with a Dark Angel);
- BanchoLeomon on leomon: only games draw Leomon -> BanchoLeomon and its profile never names
  Leomon, but it is a Leomon that earned the Bancho title, the way BanchoLillymon's profile
  ties it to Lillymon;
- RedVeedramon on veemon, drawn as Veedramon's Dark evolution: only Digimon World: Next Order
  links them (Veedramon becomes it at the peak of anger), and no other source reaches it;
- HippoGryphonmon on hawkmon: only games draw Aquilamon -> HippoGryphonmon, but the eagle
  Aquilamon fits the line of bird-headed beasts that HippoGryphonmon's profile continues into
  Gryphonmon (Adventure tri. adds Zhuqiaomon);
- JewelBeemon and BanchoStingmon on wormmon: only games draw Stingmon -> JewelBeemon ->
  BanchoStingmon, but no other source reaches JewelBeemon, and BanchoStingmon is a Stingmon that
  earned the Bancho title;
- Brachiomon, UltimateBrachiomon and SlashAngemon on armadillomon: only games draw Ankylomon ->
  Brachiomon -> UltimateBrachiomon and Shakkoumon -> SlashAngemon, and no other source reaches
  these Digimon (Shakkoumon's profile adds that it may be an Angel Digimon);
- Kapurimon -> Kokuwamon on guardromon: Kazu's Guardromon regresses to Kapurimon in Tamers
  episode 51 and Kokuwamon is the Rookie of the D-Power's line, but only games join the two
  (DigimonWiki cites the D-Power 3.0, whose known data starts at Rookie).

The sources are:

1. the official Reference Book profile. Read the profiles at both ends: GoldVeedramon's is
   the only Armor profile that names its Rookie ("Armor Digivolved from Veemon with the
   Digi-Egg of Destiny"). When the English text is silent, read the Japanese edition
   (`https://digimon.net/reference/detail.php?directory_name=<slug>`): only its Growlmon
   profile says the form follows Guilmon. The "See related Digimon" list under a profile is
   thematic (Guilmon is related to Guardromon and Yaamon), so it proves nothing;
2. other official Bandai material: the Digital Monster Art Book, the digimon.net articles
   (Digimon Chronicle X, Digimon Profile) and Bandai's own product texts (Premium Bandai).
   Imperialdramon Paladin Mode as founder of the Royal Knights rests on the Art Book, and
   Jesmon filling the thirteenth seat on a Premium Bandai text;
3. the anime series and films, then the manga (V-Tamer 01, ...);
4. the drama CDs (`Digimon Adventure 02: Armor Evolution to the Unknown`, the Tamers 15th
   Blu-ray BOX drama CD, ...);
5. the V-pets released with the series:
   - the D-3 (Adventure 02). Version 1 covers Veemon and Wormmon, Version 2 Hawkmon and
     Gatomon, and Version 3 Armadillomon and Patamon. Each gives its partners one Armor form
     per Digi-Egg and none for Destiny. The Mega of each Jogress line takes a second Jogress
     with a Digimon of the WonderSwan games (Silphymon + Garudamon = Valkyrimon), a mechanic
     of linking the toys rather than a relation, so the tree draws the step as a Normal
     evolution from the Jogress form (Silphymon -> Valkyrimon). It is left out when the Mega's
     profile ties it to another species: Vikemon heads the Ikkakumon and Zudomon corps, and
     GranKuwagamon is the ultimate form of the Kuwagamon species;
   - the D-Ark and D-Power (Tamers): D-Ark Version 1.0, 1.5, 2.0 and Ultimate (Japan) and
     the D-Power Digivice Version 1 to 3 (Europe and Asia; the North American D-Power is a
     different game with no lines of its own). Each gives a partner one form per level,
     picked by a condition (wins, losses, Notes entries), which yields an alternate line
     (Youkomon, Doumon, Kuzuhamon for Renamon). D-Power Version 2 adds the Monodramon and
     Lopmon lines, and Version 3 the Elecmon, Kokuwamon and Penmon lines. In Version 3 the
     Champion and Ultimate also follow the type of the area (Fire, Forest, Wind, Sea); the
     line drawn keeps the Rookie's own type and is the only one that reaches the line's Mega
     (Elecmon -> Leomon -> GrapLeomon -> SaberLeomon, all Forest). Wikimon's Version 3 data
     comes from the instruction manual.

   Later re-releases (D-Ark Ver.15th of 2017, D-Ark 25th COLOR EVOLUTION) and V-pets of other
   lines (Pendulum, Vital Bracelet) do not count.

Card games and video games are not sources, not even as a fallback: they multiply relations
to serve their mechanics. The one use of a game is the `Ultra` label on tree cards (section 1),
since no official stage exists above Mega. Neither are the D-Cyber manhua, the British comic `Ryo's Story!`
(it retells the WonderSwan games) or manga adaptations of video games (`Digimon Story: Cyber
Sleuth`). DigimonWiki's "Digi-Egg Digivolution Chart" mixes every medium in
one table, so a cell there proves nothing by itself; trace it to a source above. Wikimon
cites a source per relation, but those citations are incomplete on both sides (the Rookie's
"Evolves To" and the Armor's "Evolves From"). Its `D-3 Version 1` to `3` pages list each
partner's full Armor set. Wikimon uses the Japanese Digi-Egg names: Purity is DigimonWiki's
Sincerity, Sincerity (also written Faith) is Reliability, and Fate is Destiny.

An anime or film relation is read first from the DigimonWiki episode or film article, through
the MediaWiki API: its "Digivolutions" section lists every digivolution shown (forward and warp
arrows, red arrows for a regression, blue for a form change). The Agumon (Burst Mode) and
Machinedramon cases were settled this way. Wikimon's episode summaries are empty, so there the
relation is read from the Digimon's own page (its anime section and its `rfe` episode
citations) or from a Tamers character page (`Renamon (Tamers)`), whose evolution box cites
every form that does not come from the anime. When the two wikis disagree, the episode
article decides. Tamers episode 51 sends the partners back as In-Training forms, and its
article lists all six regressions (Gigimon, Gummymon, Viximon, Hopmon, Kokomon, Kapurimon). A
regression shows which In-Training form belongs to the partner; the step up to the Rookie
needs a source of its own (Cyberdramon also regresses to Monodramon in episode 41).

A partner with no form for a Digi-Egg says so in its footer (`Patamon has no recorded form
for the Digi-Egg of Destiny.`). The six Armor panels, the eight Adventure trees and the four
Adventure 02 trees were checked against this rule in November 2026. The edges of the other trees have not been checked
yet, and some of them still rest on a game.

## Artwork sources

Since November 2026 DigimonWiki/Fandom answers embedded images with a Cloudflare bot
challenge, on both `digimon.fandom.com/wiki/Special:Redirect/file/...` and its CDN
`static.wikia.nocookie.net`, so the site no longer loads any image from Fandom. Cards still
link to DigimonWiki articles. The article pages answer scripts with the same challenge, but
the MediaWiki API does not: one request to
`https://digimon.fandom.com/api.php?action=query&format=json&redirects=1&titles=<A>|<B>|...`
(up to 50 titles) tells which `wiki` slugs exist and which redirect. Check the slugs of a new
page with it; a slug that lands on a disambiguation page (`Justimon`) needs the specific one
(`Justimon_(Blitz_Arm)`).

- Primary source: the official Digimon Reference Book,
  `https://digimon.net/cimages/digimon/<slug>.jpg`. The slug is the `directory_name` of the
  Digimon's page (`https://digimon.net/reference_en/detail.php?directory_name=<slug>`); find it
  with the Reference Book search. Official slugs often follow the Japanese name and differ
  from DigimonWiki's (`vamdemon` for Myotismon, `lordknightmon` for Crusadermon,
  `rucemonfalldownmode` for Lucemon Chaos Mode, `agumon_x` for Agumon X).
- Tree pages give the bare slug, `img:'agumon'`, and `digivolution.js` builds the URL;
  selection screens, rosters and cosmology pages write the full URL in `src`.
- Fallback for a Digimon with no Reference Book entry (game-only forms, toys, card art,
  recolors): an absolute Wikimon image URL (`https://wikimon.net/images/...`, the infobox
  image of its Wikimon page), also as `img` on tree pages. When the infobox image is an anime
  frame, a full-body render from the page's gallery reads better on a card: HiMachineDramon
  uses the 320px thumbnail of its Digimon Super Rumble model (artwork only; a game is still
  no relation source). A Reference Book image drawn over a scenery background can also give way
  to the same official art on a plain background from Wikimon (BanchoGolemon on the Bancho
  roster). Pages that use one add
  `and Wikimon` to the footer's artwork credit. Eighteen images use it today, among them
  Agumon (Burst Mode), HiMachineDramon, Grani, Daemon (Ultra), Daemon (Mantled), Arcadiamon
  (Ultra), BanchoGolemon, PetitMamon, UltimateBrachiomon and the App Monsters cards.
- Do not try to get around a source that blocks embedding (no user-agent or referrer
  tricks); switch to another source instead.

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
- Images are hotlinked (with `referrerpolicy="no-referrer"`); nothing is bundled locally.
  See "Artwork sources" below.
- `src/.nojekyll` is kept as a safety net: artifact deployments never run Jekyll, but it
  keeps a fallback branch-based deployment (root folder) working as-is.

To publish: push this folder's contents as the root of a GitHub repository, then enable
**Settings > Pages > Build and deployment > GitHub Actions**. The first push to `main`
(or a manual `workflow_dispatch` run) deploys the site.
