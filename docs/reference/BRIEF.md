# Global Sync Meetup NYC 2026 presentation app

Web-based slide deck for Tim Fournet (Rewst), modeled on the existing
Right of Boom 2026 deck at /home/tim/code/rightofboom2026 but modernized and
restyled to the Rocket Fuel Factory (RFF) brand template.

## The session

- Event: Global Sync Meetup NYC, "Scale Without Chaos", convened by Rocket Fuel Factory
- Date: Thursday, 17 September 2026
- Venue: 159 West 25th Street, Chelsea, New York, NY 10001 (third floor)
- Slot: 1:45pm to 2:15pm, 30 minutes, hard stop
- Published title: "Doing more without adding bodies" (Tim's working title: "Doing More with Less")
- Speaker: Tim Fournet, Rewst
- Rules from organizer: co-sponsor session, content only, no product pitch
- Audience: MSP owners and operators, up to 100 people, one room, one track
- Afternoon framing (set at 1:00pm by Henry Timm): the 5 things that break in MSPs
  are people, margin, delivery, the founder, and legal exposure. Tim's session
  follows "the two that break first: people and margin" and feeds roundtable
  Table 3, "Delivery and automation".
- Room: two 130-inch 4K laser projectors plus a 75-inch support display,
  1 Gb wifi and wired ethernet, presenter brings own laptop, tech check at lunch.

Source: docs/reference/run-of-show-v3.pdf

## Brand template (RFF)

Source: docs/reference/RFF-Presentation-Template.pptx, rendered to
docs/reference/template-slides/slide-01.png .. slide-18.png and
docs/reference/template-contact-sheet.png. Look at the PNGs.

Colors

| Token       | Hex     | Use |
|-------------|---------|-----|
| RFF Blue    | #2A3AED | primary accent, eyebrow labels, Connection pillar |
| Blue Glow   | #5966F1 | secondary blue, hover/glow |
| RFF Orange  | #FF5219 | accent, Education pillar |
| RFF Gold    | #FFCC32 | accent, Innovation pillar (always navy text on gold) |
| Space Navy  | #050B46 | dark backgrounds (covers, dividers), slide titles on light |
| Dark BG     | #1C1E2A | dark content backgrounds (pull statement) |
| Body Text   | #272B33 | body copy on light |
| Light BG    | #F5F5F7 | light slide background |

Type: Calibri in the pptx. For the web use a metric-compatible open substitute
(Carlito is the standard Calibri metric clone; bundle it locally under
src/fonts, do not load from a CDN, the venue network may be flaky). Scale, in
pptx points, to be translated to viewport-relative sizes: slide title bold 28pt
navy, eyebrow label bold 10pt uppercase tracked in RFF Blue, body 12.5pt,
stat figure bold 48pt in an accent color.

Structure of a content slide: eyebrow label top left, left-aligned title
directly under it, content area, thin footer with "Rocket Fuel Factory" left,
therocketfuelfactory.com center, slide number right.

Covers and section dividers: Space Navy background (light variants exist),
centered title, tri-color bar (blue, orange, gold) under the title, RFF
rocket logo. Divider "PART 0N" label color signals pillar: gold Innovation,
blue Connection, orange Education.

Template layouts (one React component each):

1. Cover A (dark) and Cover B (light)
2. Agenda: six numbered items in two columns (also four)
3. Section divider (dark) and (light)
4. Two-column: narrative left, checklist card right ("what good looks like")
5. Three-up grid: three cards, colored top bars in pillar order blue, orange, gold
6. Labeled rows: term on left, definition on right, alternating fill
7. Stat callout: 2 to 4 big figures with labels and one stated takeaway
8. Comparison: two columns, current state vs target state, equal line counts
9. Process flow: numbered circles in pillar order with a closing sentence
10. Data table: navy header, alternating rows, max six body rows
11. Chart with interpretation panel ("read this chart")
12. Pull statement: dark background, one sentence, no bullets
13. Pillar grid: three colored blocks (Connection blue, Education orange, Innovation gold)
14. Presenters: name, role, bio, optional headshot
15. Closing: one specific next action, ecosystem line
    "Global Sync Meetups | Accelerators | Workshops", copyright line

Brand rules (enforce in components and lint where practical):

- One accent color per slide, neutrals elsewhere
- Titles left aligned, centered only on covers and dividers
- No em dashes, no exclamation points, no emojis in slide copy
- Tri-color bar on covers and dividers only
- Never a stat without a label and a stated takeaway
- End on one action, not a thank-you slide

## Existing deck to model on

/home/tim/code/rightofboom2026 (read only, do not modify). Read its
AGENTS.md, src/PresentationApp.jsx, src/data/slides.jsx, src/config/*,
src/components/layout/*, src/components/ui/*, scripts/generate-pdf.js and
a couple of slide components. Reuse the ideas: keyboard navigation, presenter
notes, timer, break slide, sequential slide registry, one component per slide
with hardcoded content, PDF export. Do not copy the xterm/Express/Anthropic
demo server or any RoB slide content.
