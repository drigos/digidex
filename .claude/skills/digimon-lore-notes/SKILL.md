---
name: digimon-lore-notes
description: Add or edit a "Lore notes" curiosities panel on an existing evolution-tree page (the wrapper that explains the unusual evolutions). Use whenever asked to add curiosities, lore explanations, or a lore/trivia panel to a tree page. Enforces source verification in both directions, the source-priority order, footer cleanup, and a mandatory plan-and-approve step before applying.
---

# Lore notes panel (curiosities wrapper)

Adds a "Lore notes" appendix panel to an existing evolution-tree page under
`src/evolution-lines/gen-*/`. The panel explains the unusual or atypical links in the
diagram (fallen forms, subspecies, design variants, one-continuity forms). It is a
reading companion for the arrows, not a trivia dump: every entry must explain something
visible on that page's diagram.

Read the `digimon-evolution-tree` skill and `README.md` first: the golden rule (pages are
data, shared CSS/JS), the layout grid, and the page-copy conventions all apply here.

## Golden rule: plan first, apply only after approval

This skill NEVER edits a file before the user approves the plan. The flow is:

1. **Research and verify** every candidate entry (see the verification rules below).
2. **Present the plan**: the proposed entries (title + the exact on-page text) with the
   source each claim rests on, plus which footer sentences will move into the panel.
3. **Wait for approval.** The user may cut, reword, or add entries; re-verify anything new.
4. Only then apply, and finish with the browser verification pass.

## Verification rules (be strict; we have been burned before)

- **Check official sources in BOTH directions.** For any evolution or corruption link
  A -> B, read BOTH official profiles: A's and B's (Digimon Reference Book, canonically
  via `https://digimon.net/reference_en/detail.php?directory_name=<slug>`). The link is
  often stated on only one side. Real case: Daemon's own profile only says "high-ranking
  Angel Digimon", but Seraphimon's profile explicitly names Daemon as its fallen form;
  checking only the destination page produced a wrong caveat that shipped to the footer.
- **Source priority** when continuities disagree or a claim needs backing:
  1. **Anime series and films** (Adventure, 02, the 2020 reboot, Frontier, tri., ...)
  2. **Manga** (V-Tamer 01, ...)
  3. **Drama CDs and the V-pets released with the series** (the D-3, the D-Ark, the
     D-Power and the D-Tector; README "Relation sources").
  The official Reference Book profiles sit alongside tier 1 as the species-lore baseline,
  with other official Bandai material (the Digital Monster Art Book, the digimon.net
  articles, Premium Bandai product texts); when a profile and a continuity disagree, present
  both rather than picking silently.
  Card games and video games are never a source, not even as a last resort: they adapt
  lore to serve mechanics (level caps, evolution items, roster balance).
- **Do not trust wiki summaries blindly.** Fandom and Wikimon paraphrase; when an entry
  hinges on wording ("is said to have originally been..."), quote the official profile.
  Watch for dub-name splits: the same Japanese Digimon can have two English pages
  (ShadowSeraphimon vs BlackSeraphimon).
- If a claim cannot be traced to a source in the tiers above, drop the entry or mark the
  uncertainty explicitly in its text ("is said to...").

## Footer sweep (mandatory)

Before writing the panel, read the page's `.footer`. Any lore explanation or caveat that
belongs to an entry (corruption arcs, "X is a design variant, not an evolution",
one-continuity forms) MOVES into the panel; do not duplicate it in both places. After the
sweep the footer keeps only its README-defined job: attribution, the reading key
(`Card labels show Level...`), and caveats that have no panel entry. The footer height
will change, so the canvas height must be recomputed (see layout).

## Panel conventions

- **Shared styling**: the panel is `.lore-panel`, styled once in `digivolution.css` (grey
  or slate accent, matching the grey `lore` trigger color, so the "lore = grey" vocabulary
  holds). If `.lore-panel` does not exist yet, create it there mirroring the
  `.armor-panel` structure (title + subtitle + card grid) and document it in `README.md`
  (page-copy table and panels section) in the same change. Never inline panel styling in
  a page.
- **Placement**: a full-width section placed 22px below the lowest existing element
  (usually the armor or partner panel), keeping the uniform rhythm:
  diagram -> panels -> lore notes -> footer. No fixed `height`; panels auto-size.
- **Structure**: panel title `Lore notes`; subtitle states the job (e.g. `the stories
  behind the unusual arrows`). Entries are small cards: a short bold title plus 2-3 lines
  of text. Keep the shared 4-column grid even when the last row does not fill completely;
  do not tweak the column count per page.
- **Entry content**: each entry ties to a node or arrow on the page. Name the continuity
  when the fact is continuity-specific (`Adventure 02`, `V-Tamer`, `Adventure: 2020`).
  On-page text in English, title case titles, no em dash (U+2014).
- **Naming**: Digimon, characters and series go by their DigimonWiki/Fandom names, the
  wiki every card links to (`Kentaurosmon`, not `Sleipmon`; `Kari`, not `Hikari`;
  `Data Squad`, not `Savers`). When the official Bandai name differs, the page footer may
  state the mapping, as the royal-knights and demon-lords footers do.
  Exceptions: `Yggdrasill` keeps its official name (DigimonWiki calls it `King Drasil`),
  and every Omnimon form goes by the official `Omnimon` (DigimonWiki keeps `Omegamon
  Alter-S`, `Omegamon Alter-B` and `Omegamon Zwart Defeat`).
- **Consistency**: if an entry corrects or refines something a card note or edge label
  says, fix that node/edge in the same change so the page never contradicts itself.

## Layout math (same rules as the tree skill)

- Set the panel's `top` 22px below the element above it; measure real bottoms in the
  browser, not from the config.
- Recompute the canvas: `height = lowestBottom + 22 + footerHeight + 16`. Measure
  `footerHeight` after the footer sweep (it changes with the text). Update the
  `<svg viewBox>` height to the exact same value.

## Verify before finishing

Open the page in a browser and check:

- No console errors; images load.
- The panel renders with the grey accent and its cards align with the shared grid look.
- Uniform 22px gaps: previous panel -> lore panel -> footer (measure with
  `getBoundingClientRect`).
- The footer no longer repeats anything the panel says.
- Screenshot the page and visually confirm nothing overlaps.
