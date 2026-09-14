# Handoff: state of the deck as of 14 September 2026, midday

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
before moving on. Slides 1 to 14 are approved (slide, note, outline beat).
Slides 15 to 20 still carry old copy and old-style notes. Ask before moving
from one slide to the next. Next up: slide 15, deterministic vs probabilistic
(the two-tools comparison, gold accent). Known issues there: footer quip
"You already run a probabilistic system. It's called a tech at 4pm on a
Tuesday." (two-sentence shape), and pitch risk: "automation owns the decision
and the record, AI never" said by someone from an automation vendor; Opus
suggested first person and evidence before assertion. Slide 17 title is the
quip shape ("The cost of AI isn't tokens. It's review."). Slide 19 (close) is
done in Tim's words; do not touch without asking.

## Alternatives gallery: decided

Tim asked for three alternative designs (A Editorial, B Artifacts, C Stage)
of slides 1 to 12. He picked B for 5, 6, 7, 8, 9, 10 and 12; those are now the
originals and their variants are deleted. Slides 1, 2, 3, 4 and 11 keep their
originals; their A/B/C variants remain in src/components/alternatives/ and the
gallery (http://localhost:1745/?alt=1, `npm run screenshots:alt`) in case he
wants them. Slide 13 also has A/B/C variants in the gallery; he rejected all
three and the current slide 13 is his own direction. See docs/ALTERNATIVES.md.

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
- No two-short-sentence titles, paragraphs, or footers, even when the second
  sentence is a fact. One plain sentence each.
- Scenarios are told in present tense (he cancels, not he canceled).
- If some people in a scenario are named, name everyone who acts (Mike,
  Chris, you). Do not leave "whoever covers for him".
- No vendor names on slides. Tim will push against their model but not name
  them; the room will not contain them.
- Resolutions belong on the slide as a general principle, not a situational
  fix ("an hour with Mike" was rejected as hand-wavy and too situational).
- A slide's title in Tim's own first-person observation beats a verdict on
  the room ("I keep seeing MSPs..." not "Most MSPs...").

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

## Slides 11 to 14 as approved

11 pull statement unchanged; note opens with the fear line, then "having a
process is not the same as having someone who knows how it is done", ends
"Here is the same thing happening to a checklist instead of an email."
12 title "A client's employee leaves while Mike is on vacation"; drawn ticked
checklist (Owner Mike, 6 of 6), "Cancel software licenses" lit; right column
"That line means": to Chris, covering for Mike, Microsoft 365; to Mike,
Microsoft 365, Adobe, and the two tools he set up for that client; Adobe
invoice twelve months later, 9 seats, bottom right; orange line across the
bottom: "A step is only documented if someone else can follow it without
asking for help." (Tim's wording, the principle not the fix). Note approved.
13 title (Tim's) "I keep seeing MSPs try to automate the wrong side of
operations"; paired rows with orange arrows (ComparisonSlide `aligned`):
what is sold to answer the customer (agent on the support line, agent in the
client's Teams, password resets with no tech, quarterly review from the data)
against what we are actually buying (a phone that does not ring, a ticket that
closes without a conversation, an end user we never have to talk to, a review
meeting we do not have to sit in). Footer "Automate to give time back to the
customer, not to hide from them." Left column came from web research on what
vendors sell MSPs in 2026 (summary in the session; no brands on the slide).
Note says the fear out loud in first person, adds the "sounds like relief,
here is the problem" beat (the call you did not take is where you hear Dana
is shopping; the review meeting is where the next thing gets sold), the demo
split (machine drafted, I called Dana), and points the machine at our side of
the desk. 14 divider: eyebrow "Two machines", title "Which machine gets what",
line "One follows the rules exactly, one makes a good guess, and that
difference decides what I hand it." Note promises the three-slide arc.

Layout changes this weekend: ComparisonSlide takes `top`, `bottom`,
`fontSize`, `itemGap`, `aligned` (paired grey boxes with arrows in the
gutter) and colors the right header by accent; TwoColumnSlide text enlarged;
Footer `light` uses the lighter blue link; notes HUD is 1040px wide with 20px
text so notes read without scrolling.

## The theme, as the assistant reads it (Tim asked, 14 Sep)

The only thing you actually own is the intent in your best people's heads,
and you never had to write it down because they kept guessing right for you.
Delegation without the rule, the AI demo, Aharon's law, Mike, where to point
the machine, which machine, and the close are that one idea from different
sides. The bodies were never the constraint; unspoken intent was.

## Slides 15 to 20, still to do

15 two different tools (footer quip; pitch risk). 16 guardrail sandwich
(Right of Boom callback in the note; two minutes). 17 the honest limit (title
quip). 18 the more (SLOW; "Your customers have automatons too"). 19 close in
Tim's words (done, do not touch without asking). 20 presenter. Every note
from 15 on is old style (stage directions, "Click", "Line to land") and needs
converting to spoken script.

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
