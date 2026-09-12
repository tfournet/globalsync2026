# Demo material: generated honestly, recorded verbatim

Prompt/output pairs for the mirror slides. Generated 12 September 2026 with
Claude Sonnet 5 via the Claude Code CLI, tools disabled, system prompt
"You are a helpful assistant.", one run each, first output kept. No cherry
picking. The ask (3) was sent as a follow-up turn in the same session as
the weak prompt (1), so the model was critiquing its own first answer.

| Slide | Prompt file | Output file |
|-------|-------------|-------------|
| Abdicating to a machine | 1-weak-prompt.md | 1-weak-output.md |
| Delegating to the same machine (brief) and Forwardable without edits | 2-strong-prompt.md | 2-strong-output.md |
| Ask it what you left out | 3-ask-prompt.md | 3-ask-output.md |

Raw CLI JSON kept in weak.json, strong.json, ask.json (session ids inside).

Design of the weak prompt

The first version of this demo used a one-line ask ("Write an email to a
client about the outage today") and got a bracketed template back. That
proves nothing anyone in the room disputes. The weak prompt was rewritten
to be what an owner actually types: all the facts they were thinking about
(client, system, cause, duration, fixed, apologize, "on top of it"). The
output is competent and generic. What it gets wrong is exactly what stayed
in the owner's head: who Dana is and that she is not technical, that she
forwards this to the practice owner, what "on top of it" concretely means,
and the one thing she is afraid of (patient data). That is abdication.

Notes for the deck

- Outputs are quoted verbatim on the slides, including the model's em dashes.
  The brand copy lint exempts src/data/demo.js for that reason; everything
  Tim writes still follows the no-em-dash rule.
- The weak output signed itself "Tim" only; the slide window ends before the
  sign-off anyway.
- Harbor Dental Group, Dana Whitfield, Northline IT, and the Dentrix/VPN
  incident are invented for the brief. They are not a customer.
- The strong prompt was regenerated once. The first version said "say that
  instead of the phrase" and the model kept the phrase "on top of it" anyway.
  Rather than spin a story about that on stage, the line was made unambiguous
  ("Do not use the phrase...") and rerun. First result of the rerun kept.
  Both outputs are in strong.json history if anyone wants the record.

## Replay check

`./replay.sh 3` reruns each prompt three times in fresh sessions under the
same conditions and writes everything to `replays/`. Run on 12 September:

- Weak: ticket number in the subject 3/3, placeholder sign-off 2/3, invented
  monitoring promise 3/3, "certificate" explained to Dana 3/3. Jargon
  passthrough (VPN/SSL/Fortigate) 0/3 this time. The Q2 flag was hidden in
  the slide run but disclosed to Dana in 2/3 replays. The honest claim is
  "the machine decided what to do with the Q2 flag," not "the machine hid
  it." Notes for slide 6 say so.
- Ask: every replay named the Q2 decision and what "on top of it" should
  mean; 2/3 named the audience. The word "stance" appeared only in the slide
  run. The four-item list on the slide is representative; the italic
  punchline is one real phrasing, not the typical one.
- Strong: 3/3 under 170 words, no jargon, no Q2, patient data, Friday,
  signed, no "on top of it." Representative.
