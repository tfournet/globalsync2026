# Handoff: state of the deck as of 14 September 2026, about 4am

Read this, then docs/OUTLINE.md, then src/data/notes.js, then look at
docs/screenshots/01.png through 20.png. That is the whole state.

## What this is

Web deck (Vite, React 19, Tailwind 4) for Tim Fournet's 30 minute talk
"Doing More Without Adding Bodies" at Global Sync Meetup NYC, Thursday
17 September 2026, 1:45pm. Room: up to 100 MSP business owners. Organizer
(Rocket Fuel Factory) bans product pitches. Tim works at Rewst. Brand is the
RFF template; rules in AGENTS.md. Dev server: `npm run dev` on :1745.
`npm test`, `npm run build`, `npm run pdf`, `npm run screenshots` all pass.
Repo: https://github.com/tfournet/globalsync2026 (private), main tracks
origin/main, every change so far is committed and pushed.

## Where the walk-through stands

Tim is walking the deck slide by slide with the assistant and approving each
before moving on. Slides 1 to 11 are done. Slide 12 has new copy and a drawn
layout (checklist, two readings, invoice) that Tim called "still sloppish";
its note is a DRAFT he has not read. Slides 13 to 20 still carry the old copy
and old-style notes. Ask before moving from one slide to the next.

## First thing in the morning: the alternatives gallery

Tim asked, just before sleeping, for three alternative designs of every
finished slide (1 to 12) so he can pick per slide. They exist. Read
docs/ALTERNATIVES.md for the three directions (A Editorial, B Artifacts,
C Stage; the same letter means the same visual language on every slide, so
mixed picks still hang together). To review: `npm run dev`, then
http://localhost:1745/?alt=1 (row per slide: original, A, B, C; click to
enlarge, Escape to close). Screenshots in docs/alternatives/NN-{orig,A,B,C}.png.
Originals are untouched; variants live in src/components/alternatives/ and
are discovered by filename. To adopt a pick: copy the variant's JSX over the
original slide file (keep the original's export name), delete the variant
files for that slide, rerun `npm test` and `npm run screenshots`. Copy is
verbatim on every variant; only artifact chrome (labels such as Owner, To,
Subject) was added. Known soft spots: slide 4 variants run body text near
32px; slide 3 B has dead space above the sentences; slide 1 B has a large
empty calendar block.

New rule learned at slide 12: no two-short-sentence titles, paragraphs, or
footers, even when the second sentence is a fact ("The list was followed.
The process still didn't exist." was rejected). One plain sentence each.
Also: scenarios are told in present tense, not past ("he cancels", not "he
canceled"); Tim does not want rhetorical scenarios narrated as history.

## Rules Tim set this weekend (all of these were learned from rejections)

- Slide copy is plain sentences he could say, that an owner can photograph
  and explain to their team. No slogans. No "short sentence, period, twist"
  quips (he called them AI slop). No inside jokes that assume the room saw
  a particular demo. No generalizations he cannot back: no "every", "never",
  "you are about to", "you tried".
- Prefer his own sentences (outline, notes, what he said in chat) over new
  copy. When he gives a line, use it as given.
- Never say "onboarding" or "offboarding". Name the concrete event.
- His name does not appear on demo slides. `withoutTim()` in
  src/data/demo.js swaps "Tim" for "Alex" at display time; the recorded
  prompts and outputs stay verbatim (docs/demo/README.md notes this).
- Presenter notes are the words he says, in prose, with a target time. No
  stage directions, no predictions about the room, no reading the slide
  aloud, no switching into the model's voice mid-note (paraphrase it).
  "We" for shared demo steps; "I" only for his own experience.
- Beat lens, not a rule: here is what you should be doing, you probably
  tried it, here is what went wrong, here is how to get unstuck.
- The word for what the owner should keep is "rule" (what gets written),
  not "decision" (what the tech does) or "judgment" (what is in their head).
- The demo stays a client email. Opus and Tim agreed the leak only lands
  because an outsider reads it. The send step is human and is now on the
  slide (slide 10) and in the note. Do not regenerate the demo.
- Text on demo slides should be as large as fits; panel labels and eyebrows
  were dropped where they cost space (ContentFrame and PromptOutputSlide
  now accept empty eyebrow/label, plus `panelTop` and `promptFlow` props).
- When asked for a critique or options, spawn an Opus agent with full
  context and Tim's rules; relay condensed, add own read, ask before applying.

## Slides 1 to 10 as approved

1 cover. 2 dark question, no footer: "Whose vacation request do you dread
approving?" 3 three decisions (which alert is noise, which client wants the
details, which ticket gets a phone call) and orange "Those are decisions,
and they are not in any document." 4 comparison "Handing over the work is
not the same as delegating": when you delegate / when you hand over the
rules too, with one written rule (call on any P1 and any client who has
called twice) against "use your judgment"; footer, Tim's line, "Your best
employees are the ones who usually guess right." 5 "We expect AI to do
wonders with a little instruction", four bullets in Tim's words, junior tech
as the known case, AI "without the pause where a person asks you a
question." 6 "How most people prompt": one line, <pasted from the PSA>, the
ticket, 34px. 7 "What the client would have received": the leaked email,
26px, footer "It leaked that line in two of three runs, and you had no say in
which." 8 "Ask it how to ask better", eyebrow "How to get unstuck", footer
"Every one of those is a rule you already had in your head." 9 "The same
ask, with the rules written down", brief at 32px flowing across columns,
highlight on "she definitely doesn't need to hear..." 10 "A draft you can put
your name on", footer "Those five questions work on any brief, to a person
or a machine."

Cut this weekend: a bridge slide about a stalled automation attempt (it
generalized and brought automation in at minute one) and the six-process
menu (a Rewst-shaped sales list). Tim's line "we built computers to be
automation machines, but we're afraid to actually automate anything with
them" is spoken at slide 11, where Aharon's law answers it.

## Slides 11 and 12

11 approved: pull statement unchanged; note rewritten (a424eae) and opens
with the fear line, then "having a process is not the same as having someone
who knows how it is done", ends "Here is the same thing happening to a
checklist instead of an email." 12: title "A client's employee leaves while
Mike is on vacation", eyebrow "What the law means here", drawn checklist with
"Cancel software licenses" lit, two readings, invoice line "Adobe Creative
Cloud, 9 seats". Tim wants the image drawn in the attendee's mind, in the
order it happens: covered, a year passes, invoice, then what Mike meant.
Note is a draft marked DRAFT in notes.js.

## Slides 13 to 20, still to do

13 most MSPs automate the
wrong things (footer is the quip shape; this is where Opus said the
client-email demo should be collected: the machine never talked to Dana).
14 divider, eyebrow "The second machine". 15 two different tools (footer
quip). 16 guardrail sandwich. 17 the honest limit (title quip). 18 the
more. 19 close in Tim's words (done, do not touch without asking). 20
presenter. Every note from 11 on is old style and needs converting.

## The argument, in Tim's words

Computers were built to do the work; we became the automatons. We abdicate
instead of delegate: we hand over the work and the definition of done, our
best tech fills in the blanks, so we never learn the brief was vague. AI made
the habit visible because it has no context and answers in eight seconds.
Aharon's first law of automation (Aharon Chernin, Rewst): you can't automate a
process that doesn't exist, and "exists" means said out loud. Most MSPs
automate the wrong things (the customer away). Automate the automaton work
instead, yours first, then your customers'. That is the more.

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

## Other state

No headshot by Tim's decision; the presenter card renders without one.
Tim runs fast when nervous; SLOW marks in notes are where to spend time.
About five minutes of buffer before the hard stop. Tech check at lunch
Thursday, 11:45 to 12:45.

## How Tim works

Plain English. Opinions he will defend, not diagnoses. He corrects fast and
expects you to push back when he is wrong. "No notes" means silence. One
question at a time. He asked for structure and style before content, then
content in his voice. He noticed quality drop when the assistant started
executing suggestions one at a time instead of holding the whole talk.
