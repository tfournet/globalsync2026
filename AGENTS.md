# Architecture rules

This is a single presentation, not a CMS. The rules below exist to keep it
that way. Read `docs/reference/BRIEF.md` for the full brief and brand
reference before making structural changes.

## Content lives in slide components, not in data files

`src/data/slides.jsx` is a registry only: `{ id, component, notesKey }`. It
must never contain titles, body copy, stats, or any other visible text.

All copy for a slide is hardcoded as local values inside
`src/components/slides/NNN-Name.jsx`, passed as props into the layout
component it uses. This means every slide file is self-contained: to change
what a slide says, open exactly one file.

The one exception is `src/data/notes.js` — presenter notes are kept out of
the slide files so the on-stage script can be edited without touching
layout code.

Placeholder copy (anything not yet confirmed against the real session
content) starts with a `// PLACEHOLDER` comment at the top of the file, so it
is easy to grep for before the real talk.

## One accent color per slide

Every content layout takes an `accent` prop: `blue | orange | gold`. Use
only that color for emphasis on the slide (numbers, labels, highlighted
text). Neutrals (navy, body text, light background) everywhere else. Do not
mix two accent colors on one content slide.

Pillar mapping, when a slide is about a specific pillar rather than general
content: Connection is blue, Education is orange, Innovation is gold
(always navy text on gold, never white, for contrast).

## Brand rules (from the brief, enforced by `scripts/lint-copy.js` where practical)

- No em dashes, no exclamation points, no emoji in slide copy.
- Titles are left aligned and start directly under the eyebrow label, except
  on covers, section dividers, and the pull statement, which are centered.
- The tri-color bar (blue, orange, gold) appears only on covers, section
  dividers, and the pull statement. Never on a content slide.
- A stat is never shown without a label and a stated takeaway.
- The deck ends on one specific action, not a thank-you slide.
- `npm test` runs `scripts/lint-copy.js` against every file in
  `src/components/slides/`. A brand rule violation fails the build.

## Minimum font sizes

The room is up to 100 people on two 130-inch projectors. The stage renders
at a fixed 1920x1080 design canvas that is scaled up or down as a whole via
CSS transform to fit the viewport (see `useStageScale` in
`PresentationApp.jsx`) — every layout must therefore size text in fixed
pixel values against that 1920x1080 canvas, never `vw`/`vh`/`%`, or the
transform scaling will distort relative proportions.

Minimums against that canvas, do not go below these:

- Body copy: 16px
- Slide title: 48px
- Eyebrow label: 18px
- Stat figure: 56px

## Type scale

Matched to the RFF template pptx (1440x810pt source, x1.333 to reach the
1920x1080 canvas). All sizes in px on that canvas.

| Element | Size | Weight | Notes |
|---|---|---|---|
| Eyebrow label | 27px | bold | uppercase, tracking 0.12em |
| Slide title | 75px | bold | navy, leading 1.1 |
| Lead paragraph / bullets | 35px | regular | two-column body copy |
| Card body | 33px | regular | inside `#F5F5F7` cards |
| Card eyebrow (e.g. "What Good Looks Like") | 27px | bold | uppercase, always blue |
| Footer | 23px | regular | org + slide number in `rff-muted`, URL in `rff-blue` |
| Stat figure | 128px | bold | stat callout cards |
| Section divider title | 107px | bold | leading 1.05 |
| Cover title | 88px | bold | max two lines |
| Pull statement | 72px | bold | leading 1.15 |

Left/right content margin is 106px. Eyebrow sits at y=48, title top at
y=96, content area starts at y=265, footer baseline region is y=1000-1030.
Cards use `#F5F5F7` fill, no shadow, `rounded-[4px]` at most, 48px padding.

The existing layout components in `src/components/layouts/` already respect
these. If you add a new layout, match the sizing pattern already in use
rather than inventing a new scale.

## Adding a layout

Only add a new file under `src/components/layouts/` if none of the existing
ones fit the content shape. Every layout that is not a cover, divider, or
pull statement must render `Eyebrow`, `SlideTitle`, and `Footer` in the same
position — use `src/components/chrome/ContentFrame.jsx` to get this for
free rather than re-implementing the positioning.

## Before finishing a change

Run, in order:

```bash
npm test    # brand copy lint + Vitest smoke suite (every slide renders, footer check)
npm run pdf # full build + PDF export, confirms the deck actually compiles end to end
```

Both must succeed before you consider a change done.
