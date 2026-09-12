// Presenter notes keyed by slide id. Kept separate from slide content so the
// speaker-facing script can be edited without touching slide markup.
// Target minute marks are cumulative from a 0:00 start of the 30 minute slot;
// the outline's per-beat minutes sum to about 22, the rest is buffer.
export const notes = {
  cover: 'Target 0:00. No verbatim line, this is the open. Land straight after Dawn and Dave\'s people-and-margin framing, do not re-explain it. Welcome the room and go.',
  reflex: 'Target 0:30. No verbatim line. Name the hire as the default fix and cut it down fast: it is slow, it inherits the broken loop, it makes margin worse. Land on the reframe, the constraint was never headcount.',
  'demo-weak': 'Target 2:30. Line to land: AI didn\'t fail to read your mind. It did exactly what you wrote. Let the weak output sit on screen a beat before saying it, the room should recognize the mediocrity themselves.',
  'demo-brief': 'Target 4:30. No verbatim line. Read the brief out loud, fast. Everyone in the room recognizes it as the ticket they wish their techs wrote. That recognition is the point, not the AI.',
  'demo-strong': 'Target 5:30. Line to land: Your team has been covering for vague requests for years. AI is the first hire that won\'t. Same tool, same task, only the brief changed.',
  'demo-ask': 'Target 7:30. No line to drop here, this is the practical takeaway. Read the missing pieces quickly, then land on the footnote: try this tonight on the last answer that disappointed you.',
  'divider-articulation': 'Target 9:30. Quick transition into part one, articulation. One breath, then move.',
  'aharons-law': 'Target 10:00. Line to land: you can\'t automate a process that doesn\'t exist, Aharon\'s first law. Let it sit in silence for two full seconds before moving on.',
  'we-have-a-process': 'Target 10:30. Line to land: hire for the exception, automate the rule. Ask the room the closing question instead of telling a story, let owners answer in their heads, that lands harder than a stranger\'s numbers.',
  'divider-where-ai-belongs': 'Target 13:30. Quick transition into part two, where AI belongs.',
  'deterministic-vs-probabilistic': 'Target 14:00. Line to land: you already run a probabilistic system, it\'s called a tech at 4pm on a Tuesday, measure both. Read both columns aloud, do not just point at them.',
  'guardrail-sandwich': 'Target 16:00. Callback to Right of Boom, two minutes not eight. Emphasize the check step, most rooms do gather, validate, draft and skip it. Land on: the AI never touches the customer or the system of record unguarded.',
  'honest-limit': 'Target 19:00. Line to land: the cost of AI isn\'t tokens, it\'s review. Sets up Bradley Gross on contracts at 3:15: a client can\'t audit a vibe, they can audit a log.',
  'what-you-do-with-the-hours': 'Target 21:00. Line to land: your best ticket-note writer is your best automation engineer. The goal is not fewer conversations, it is conversations where the human is present with the right data at the right speed.',
  'one-action': 'Target 23:00. End on the Table 3 handoff, not a thank you. Point at the room. One hour, one page, bring it to the table.',
  presenter: 'Target 24:00. One breath. Name, company, one sentence, move on. Roughly 5:30 left as buffer before the hard stop.',
}
