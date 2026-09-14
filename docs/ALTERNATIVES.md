# Alternative designs for slides 1 to 12

Tim (14 Sep 2026, late): "have Opus build 3 alternative slides for each slide
we've done so far. Use the same typography, colors, etc, but add creative
elements that really add some context and style to the slides. We are
presenting in an impressive venue, we should have an impressive deck. Keep
the originals. Make sure the styles aren't in conflict with the original or
each other. I will decide on each in the morning."

## Where things live

- Originals: `src/components/slides/NNN-Name.jsx`, untouched.
- Variants: `src/components/alternatives/NNN-Name-A.jsx`, `-B`, `-C`. NNN is
  the slide's 1-based position in `src/data/slides.jsx` (001 to 012). Discovered
  automatically by `src/data/alternatives.jsx`; nothing to register.
- Gallery: `npm run dev`, open http://localhost:1745/?alt=1. One row per
  slide: original, A, B, C. Click to enlarge, Escape to close.
- Screenshots: `npm run screenshots:alt` writes `docs/alternatives/NN-orig.png`,
  `NN-A.png`, `NN-B.png`, `NN-C.png`.
- `npm test` lints every variant for em dashes, exclamation points, emoji, and
  renders each one.

## Three directions, the same on every slide

Each letter is one consistent visual language across all twelve slides, so
Tim can pick A for one slide and C for another and the deck still hangs
together. Every variant uses the existing palette, Carlito, the chrome
components (Eyebrow, SlideTitle, Footer, TriColorBar, ContentFrame) and the
1920x1080 absolute canvas. No new colors, no new fonts, no images from the
internet, no icons libraries. SVG drawn inline is fine.

**A. Editorial.** Type does the work. One oversized element per slide (a
number, a word, a glyph, a quotation mark) at 200px or larger in the accent
color or navy at low opacity, hairline rules in `rff-gray-line`, wide margins,
strong left alignment. The feel of a magazine opener. White background stays.

**B. Artifacts.** Draw the real object the slide is about: a PSA ticket, an
email in a mail client, a checklist, an invoice line, a chat pane, a calendar
tile, a phone notification, an approval form. Rendered flat in `rff-light`
cards with `rff-gray-line` borders, muted labels at 26px uppercase, body at
30px or larger. The room recognizes the object before reading a word. Slide
12 as committed is this direction.

**C. Stage.** Built for the big room. Navy (`rff-navy`) full-bleed or
half-bleed panel with white type, one accent shape (a bar, a block, a circle,
a diagonal) in the slide's accent color, high contrast, fewer words visible at
once where the copy allows (never fewer words than the original; use
opacity or position, not deletion). The tri-color bar stays where the brand
allows it (covers, dividers, pull statements) and nowhere else.

## Rules that do not bend

- Copy is approved. Every word on the original slide appears on the variant,
  verbatim. Artifact chrome (labels like "Owner", "Subject", "To", a ticket
  number) may be added when it is what the real object would carry. No new
  sentences, no slogans, no quips, no two-short-sentence pairs, no
  exclamation points, no em dashes, no emoji, never "onboarding" or
  "offboarding", never Tim's name on a demo slide (use `withoutTim`).
- One accent color per content slide, the same accent as the original.
- Type minimums: body 30px on these slides (the room is 100 people on two
  130-inch screens), eyebrow 27px, title 60px or larger. Nothing clipped,
  nothing overflowing 1920x1080. Check the screenshot.
- Titles left aligned except covers, dividers, pull statements.
- Demo slides (6 to 10) read their text from `src/data/demo.js` exactly as
  the originals do, through `withoutTim`.
- Component signature `export default function Name({ slideNumber })`.
  Footer via the `Footer` chrome component (or `ContentFrame`) on content
  slides; none on cover, slide 2, slide 11.
- Must pass `npm test` and render in jsdom (no `window` access at module
  scope).
