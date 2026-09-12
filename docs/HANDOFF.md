# Handoff: state of the deck as of 12 September 2026, late afternoon

Read this, then docs/OUTLINE.md, then src/data/notes.js, then look at
docs/screenshots/01.png through 21.png. That is the whole state.

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

## Slides (21)

1 cover, 2 automatons (pull statement), 3 the typing is hiding a decision
(illustrated, see below), 4 abdicate vs delegate, 5 the demo never had a
client, 6 to 10 the mirror demo, 11 Aharon's law, 12 the list was followed
and the process still didn't exist (Mike, Adobe seats), 13 most MSPs automate
the wrong things, 14 six delivery processes, 15 divider where AI belongs,
16 deterministic vs probabilistic, 17 guardrail sandwich, 18 the honest limit,
19 the more, 20 one action (Table 3), 21 presenter.

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

## What is unresolved

Slide 3. Tim's last words on it: "reads like slop." The idea is his and it
is the hinge of the talk: every screen-to-screen step is five minutes of
motion fused to five seconds of judgment ("standard build, unless it is the
client that always gets the exception"), and the judgment is why a person is
still doing the motion. The previous session put a generated 3D conveyor
image on it with two captions and an invented quote. The captions and quote
have been stripped; the image remains, title only. Twelve generated
candidates are in docs/concepts/ with prompts. Options on the table: keep
image and title only; replace with the plain SVG belt (git history,
commit 860d38c^ has it); cut the slide and say the idea on slide 2. Decide
by arguing with Tim, not by polishing.

Other open items: headshot (none, card renders without one); GitHub repo
not created, nothing pushed; joint from slide 14 to the divider at 15 has a
placeholder bridge in the notes; Tim runs fast when nervous, SLOW slides
are marked in notes.

## How Tim works

Plain English. Opinions he will defend, not diagnoses. He corrects fast and
expects you to push back when he is wrong. "No notes" means silence. One
question at a time. He asked for structure and style before content, then
content in his voice. He noticed quality drop when the assistant started
executing suggestions one at a time instead of holding the whole talk.
