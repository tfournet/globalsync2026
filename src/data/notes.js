// Presenter notes keyed by slide id. Kept separate from slide content so the
// speaker-facing script can be edited without touching slide markup.
// Target minute marks are cumulative from a 0:00 start of the 30 minute slot.
// Beats sum to about 26:30; the rest is buffer. Tim runs fast when nervous:
// the slides marked SLOW are where to spend the saved time.
export const notes = {
  cover: 'Target 0:00. No verbatim line. Land straight after Dawn and Dave. Do not summarize their talk, one sentence of thanks and go.',
  automatons: 'Target 0:20. SLOW. Say the line flat, then describe a tech\'s actual day: open one app, read it, type into another, repeat until five. That is the job the computer was supposed to have. Let it sit. This is the opinion the room did not expect.',
  'abdicate-not-delegate': 'Target 1:30. Line to land: delegating is handing over the work and keeping the definition of done. Abdicating is handing over both. Then the confession: we have done this to our techs for years. The wrong result came back a week later, so we blamed the tech.',
  'the-demo-never-had-a-client': 'Target 3:00. Twenty seconds. No vendor names. Every AI keynote is one sentence and magic, and it works because the presenter has no stake in which game he gets. Then you go home and ask for a client email, where every detail is the job. The demo taught you to abdicate. The demo never had a client.',
  'demo-weak': 'Target 3:40. The mirror. Read the ask aloud: it has every fact. The room will think it is fine. Then read the email. It is fine too, until you point: Dana is not technical and it explains certificates to her. She forwards this to the practice owner and it says we are on top of it with nothing behind it. It never mentions the one thing she is afraid of, patient data. Line to land: every fact you were thinking about, none of the ones in your head. Then: it did exactly what you wrote. So did your tech. This one was fast enough for you to notice.',
  'demo-brief': 'Target 5:45. Same facts. Point at what got added: who Dana is, what she does with the email, what on top of it actually means (monitoring by Friday), no data lost, forwardable without edits. That is what was in your head. This is delegating.',
  'demo-strong': 'Target 6:30. Line to land: same tool, same task, the only thing that changed was you. Dana can forward this to the practice owner without editing it.',
  'demo-ask': 'Target 7:45. Ask the machine what was missing. Read the headings: who is signing, the relationship, how technical Dana is, what on top of it should claim. It just described your head. Try this tonight on the last answer that disappointed you.',
  'aharons-law': 'Target 9:30. SLOW. Say the law, credit Aharon, two full seconds of silence. Same habit, bigger scale.',
  'we-have-a-process': 'Target 10:00. We have a process means we have a person we abdicated to. Your first automation is your first honest audit. Ask the room the question and wait. Line to land: hire for the exception, automate the rule.',
  'the-wrong-things': 'Target 12:30. The one that bristles. Some people in the room sell auto-replies and templated QBRs. Say it anyway: that is automating the customer away. Automate the automaton instead. Line to land: automate to give time back to the customer, not to hide from them.',
  'where-delivery-leaks': 'Target 14:30. SLOW. Read all six. Each description is who the process is for, not what it saves you. Say: pick one. This is what Table 3 works from at 4:15.',
  'divider-where-ai-belongs': 'Target 16:30. Transition. Speed is what these machines give you unconditionally. It exposes bad instructions instantly and executes them instantly. Fast is only a gift once you have said what good looks like.',
  'deterministic-vs-probabilistic': 'Target 17:00. Line to land: you already run a probabilistic system, it is called a tech at 4pm on a Tuesday. Read both columns aloud.',
  'guardrail-sandwich': 'Target 19:00. Callback to Right of Boom, two minutes not eight. Emphasize the check step. Land on: the AI never touches the customer or the record unguarded.',
  'honest-limit': 'Target 21:30. Line to land: the cost of AI is not tokens, it is review. A client cannot audit a vibe, they can audit a log. Sets up Bradley at 3:15.',
  'the-more': 'Target 23:00. SLOW. This is the title. Your own shop is the starting line. Your customers have the same automatons: invoices, approvals, renewals, same screens, same retyping. Nobody is selling them the fix. You just learned how. That is the more.',
  'one-action': 'Target 25:00. End on the Table 3 handoff, not a thank you. One of the six, one hour with your best tech, write down what done looks like. That is delegating. Erik and Atul are about to talk about the version of this where the person the process lives in is you.',
  presenter: 'Target 26:00. One breath. Name, company, one sentence. About four minutes of buffer before the hard stop.',
}
