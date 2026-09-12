# Demo material: generated honestly, recorded verbatim

Three prompt/output pairs for slides 3 to 5. Generated 12 September 2026
with Claude Sonnet 5 via the Claude Code CLI, tools disabled, system prompt
"You are a helpful assistant.", one run each, first output kept. No cherry
picking. The ask (3) was sent as a follow-up turn in the same session as
the weak prompt (1), so the model was critiquing its own first answer.

| Slide | Prompt file | Output file |
|-------|-------------|-------------|
| 3 weak brief | 1-weak-prompt.md | 1-weak-output.md |
| 4 full brief | 2-strong-prompt.md | 2-strong-output.md |
| 5 ask it | 3-ask-prompt.md | 3-ask-output.md |

Raw CLI JSON kept in weak.json, strong.json, ask.json (session ids inside).

Notes for the deck

- Outputs are quoted verbatim on the slides, including the model's em dashes.
  The brand copy lint exempts src/data/demo.js for that reason; everything
  Tim writes still follows the no-em-dash rule.
- The weak output signed itself "tim@rewst.io" because the CLI session
  carries the operator identity. It is honest output, but consider whether
  to show the signature block or truncate the draft before it.
- Harbor Dental Group, Dana Whitfield, Northline IT, and the Dentrix/VPN
  incident are invented for the brief. They are not a customer.
