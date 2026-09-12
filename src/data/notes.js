// Presenter notes keyed by slide id. Kept separate from slide content so the
// speaker-facing script can be edited without touching slide markup.
// Target minute marks are cumulative from a 0:00 start of the 30 minute slot;
// the beats sum to about 26.5, the rest is buffer before the hard stop.
export const notes = {
  cover: 'Target 0:00. No verbatim line, this is the open. Land straight after Dawn and Dave\'s people-and-margin framing, do not re-explain it. Welcome the room and go.',
  reflex: 'Target 0:30. No verbatim line. Name the hire as the default fix and cut it down fast: it is slow, it inherits the broken loop, it makes margin worse. Land on the reframe: the constraint was never headcount.',
  'the-real-constraint': 'Target 2:00. This is the thesis and the word AI has not been said yet. Read the four rows as things that happened in their shop this quarter. Pause on the owner row, that one is about them. Closing line: every lost hour goes to someone who was not told what done looks like. It is a communication problem and it is older than any tool. Do not rush this slide, the rest of the talk hangs on it.',
  'demo-weak': 'Target 4:00. Bridge: same problem, new participant. Hand the vague request to something that will not cover for you. Let the output sit a beat, the room should recognize the mediocrity themselves. Line to land: AI didn\'t fail to read your mind. It did exactly what you wrote.',
  'demo-brief': 'Target 6:00. No verbatim line. Read the brief out loud, fast. Everyone in the room recognizes it as the ticket they wish their techs wrote. That recognition is the point, not the AI.',
  'demo-strong': 'Target 7:00. Line to land: your team has been covering for vague requests for years. AI is the first hire that won\'t. Same tool, same task, only the brief changed.',
  'demo-ask': 'Target 8:30. No line to drop here, this is the practical takeaway. Read the missing pieces quickly, then land on the footnote: try this tonight on the last answer that disappointed you. The machine just described the communication problem from slide 3.',
  'aharons-law': 'Target 10:30. Line to land: you can\'t automate a process that doesn\'t exist, Aharon\'s first law. Let it sit in silence for two full seconds before moving on. Same law, different machine.',
  'we-have-a-process': 'Target 11:00. Line to land: hire for the exception, automate the rule. Ask the room the closing question instead of telling a story, let owners answer in their heads, that lands harder than a stranger\'s numbers.',
  'where-delivery-leaks': 'Target 14:00. The tactical slide, slow down here. Six delivery processes every shop in the room runs, and for each one the single sentence that has to exist before it can be automated. Read all six. Say: pick one. This list is what Table 3 works from at 4:15. Do not add a seventh from the stage.',
  'divider-where-ai-belongs': 'Target 16:00. Transition. Now that they can articulate, where does the probabilistic tool actually go.',
  'deterministic-vs-probabilistic': 'Target 16:30. Line to land: you already run a probabilistic system, it\'s called a tech at 4pm on a Tuesday, measure both. Read both columns aloud, do not just point at them.',
  'guardrail-sandwich': 'Target 18:30. Callback to Right of Boom, two minutes not eight. Emphasize the check step, most rooms do gather, validate, draft and skip it. Land on: the AI never touches the customer or the system of record unguarded.',
  'honest-limit': 'Target 21:30. Line to land: the cost of AI isn\'t tokens, it\'s review. Sets up Bradley Gross on contracts at 3:15: a client can\'t audit a vibe, they can audit a log.',
  'what-you-do-with-the-hours': 'Target 23:30. Close the loop with slide 3. You started with intent not surviving the handoff between people. The hours you get back go to the handoffs where it does: the QBR, the ticket update, the onboarding call with the human present. Line to land: your best ticket-note writer is your best automation engineer.',
  'one-action': 'Target 25:30. End on the Table 3 handoff, not a thank you. Point back at the six. One process, one hour, one page, bring it to the table.',
  presenter: 'Target 26:30. One breath. Name, company, one sentence, move on. Roughly 3 minutes left as buffer before the hard stop.',
}
