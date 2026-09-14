# Handoff: state of the deck as of 13 September 2026

Read this, then docs/OUTLINE.md, then src/data/notes.js, then look at
docs/screenshots/01.png through 20.png. That is the whole state.

## What this is

Web deck (Vite, React 19, Tailwind 4) for Tim Fournet's 30 minute talk
"Doing More Without Adding Bodies" at Global Sync Meetup NYC, Thursday
17 September 2026, 1:45pm. Room: up to 100 MSP business owners. Organizer
(Rocket Fuel Factory) bans product pitches. Tim works at Rewst. Brand is the
RFF template; rules in AGENTS.md. Dev server: `npm run dev` on :1745.
`npm test`, `npm run build`, `npm run pdf`, `npm run screenshots` all pass.

## The argument, in Tim's words

Computers were built to do the work; we became the automatons. We abdicate
instead of delegate: we hand over the work and the definition of done, our
best tech fills in the blanks, so we never learn the brief was vague. AI made
the habit visible because it has no context and answers in eight seconds.
Aharon's first law of automation (Aharon Chernin, Rewst): you can't automate a
process that doesn't exist, and "exists" means said out loud. Most MSPs
automate the wrong things (the customer away). Automate the automaton work
instead, yours first, then your customers'. That is the more.

## Slides (20)

1 cover, 2 whose vacation request do you dread approving (question, no
footer), 3 the three decisions nobody asked about, 4 abdicate vs delegate,
5 the demo never had a client, 6 to 10 the mirror demo, 11 Aharon's law
(Tim's afraid-to-automate line is spoken here), 12 the list was followed and
the process still didn't exist (Mike, Adobe seats), 13 most MSPs automate
the wrong things, 14 divider where AI belongs, 15 deterministic vs
probabilistic, 16 guardrail sandwich, 17 the honest limit, 18 the more,
19 one action (Tim's words, no Table 3), 20 presenter. A bridge slide on a
stalled automation attempt was added and cut the same day; see OUTLINE
beat 2.

## The demo (slides 6 to 10) is real and verified

One line above a pasted PSA ticket, pre-generated with Claude Sonnet, no
tools, first run kept, then replayed 3x. The model disclosed the ticket's
"flagged in Q2, renewal never approved" line to the client in 2 of 3 runs;
that leak is what slide 7 shows. Slide 8 is the model asked how Tim should
have asked; its own line "I put it in. That's a 50/50 guess I shouldn't have
made silently" is the punchline. Slide 9 is the rewritten brief in prose
with the judgment calls highlighted; slide 10 the forwardable email.
Everything verbatim in docs/demo/ with README and replay counts. Do not
regenerate without reason; if you do, first run stays.

## Slide 5 (12 Sep evening)

Three plain bullets in Tim's own outline wording; he rants over them. Five
versions were tried and dropped the same evening: a comparison layout (its
desk-side example spoiled the demo), two stills from the GPT-6 Astra launch
video (a picture of a demo does not show the absence of a client), the
demo's verbatim dialogue (needed explaining), and two "three lines plus a
colored kicker" statements (Tim: AI-sounding slogans). Lesson: that shape
reads as a slogan regardless of words; use his sentences. Frames and sources remain in docs/astra/.
HiddenDecisionSlide.jsx is unused.

## Open problems flagged by Tim 12 Sep

1. Resolved 13 Sep. The run of show never asks speakers to brief the
   roundtables; attendees pick a table and bring their own problem. The
   close is Tim's own wording (sit with one employee you would hate to
   lose...). The six-process menu (old slide 14) was cut as a Rewst-shaped
   sales list; the close no longer needs it.

2. The deck leans on a "short sentence, period, twist" pattern in titles
   and footers (current numbering: 4, 7, 10, 12, 13, 14, 15, 17; slide 2 resolved as a question). Tim: AI slop,
   most of these must change. Rewrite as plain single sentences in his
   voice. Slide 8's line is the model's quote and stays; slides 3 and 5 are
   already plain. Do not propose new copy in the same shape.

## What is unresolved

Slide 3 is text-only: three concrete decisions (which alert is noise, which
client gets the short version, which ticket gets a phone call) and the claim
in orange: your best tech decides that all day, nobody has ever asked them
how. Changed 12 Sep evening. The earlier sentence repeated slide 2's footer;
a slogan replacement ("the knowing hides inside the doing") was rejected by
Tim as not saying anything. Rule from Tim: slides should make sense and be
worth photographing, not be clever one-liners. The conveyor is removed
from the slide; the generated assets remain in the repo.
The bridge to slide 4 uses slide 3's vocabulary (deciding, doing, asked):
nobody asked because it worked, so the owner handed over the deciding along
with the doing and never found out. Slide 4's note picks up "deciding" before
landing delegate vs abdicate. Slide 4 establishes abdication before
AI enters. Do not jump straight from slide 3 to AI, add an example, or replace
the statement with a metaphor. Notes, outline, and screenshot 03 are updated.

Repo: https://github.com/tfournet/globalsync2026 (private), main tracks
origin/main. No headshot by Tim's decision; the card renders without one.
The bridge into the AI section is in the slide 13 note. Tim runs fast when
nervous; SLOW slides are marked in notes.

## How Tim works

Plain English. Opinions he will defend, not diagnoses. He corrects fast and
expects you to push back when he is wrong. "No notes" means silence. One
question at a time. He asked for structure and style before content, then
content in his voice. He noticed quality drop when the assistant started
executing suggestions one at a time instead of holding the whole talk.
