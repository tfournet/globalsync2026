import Cover from '../components/slides/001-Cover.jsx'
import Reflex from '../components/slides/002-Reflex.jsx'
import TheRealConstraint from '../components/slides/003-TheRealConstraint.jsx'
import DemoWeak from '../components/slides/004-DemoWeak.jsx'
import DemoBrief from '../components/slides/005-DemoBrief.jsx'
import DemoStrong from '../components/slides/006-DemoStrong.jsx'
import DemoAsk from '../components/slides/007-DemoAsk.jsx'
import AharonsLaw from '../components/slides/008-AharonsLaw.jsx'
import WeHaveAProcess from '../components/slides/009-WeHaveAProcess.jsx'
import WhereDeliveryLeaks from '../components/slides/010-WhereDeliveryLeaks.jsx'
import DividerWhereAiBelongs from '../components/slides/011-DividerWhereAiBelongs.jsx'
import DeterministicVsProbabilistic from '../components/slides/012-DeterministicVsProbabilistic.jsx'
import GuardrailSandwich from '../components/slides/013-GuardrailSandwich.jsx'
import HonestLimit from '../components/slides/014-HonestLimit.jsx'
import WhatYouDoWithTheHours from '../components/slides/015-WhatYouDoWithTheHours.jsx'
import OneAction from '../components/slides/016-OneAction.jsx'
import Presenter from '../components/slides/017-Presenter.jsx'

// Ordered slide registry. Each slide component owns its own content
// (see AGENTS.md); this file only wires order, identity, and notes.
export const slides = [
  { id: 'cover', component: Cover, notesKey: 'cover' },
  { id: 'reflex', component: Reflex, notesKey: 'reflex' },
  { id: 'the-real-constraint', component: TheRealConstraint, notesKey: 'the-real-constraint' },
  { id: 'demo-weak', component: DemoWeak, notesKey: 'demo-weak' },
  { id: 'demo-brief', component: DemoBrief, notesKey: 'demo-brief' },
  { id: 'demo-strong', component: DemoStrong, notesKey: 'demo-strong' },
  { id: 'demo-ask', component: DemoAsk, notesKey: 'demo-ask' },
  { id: 'aharons-law', component: AharonsLaw, notesKey: 'aharons-law' },
  { id: 'we-have-a-process', component: WeHaveAProcess, notesKey: 'we-have-a-process' },
  { id: 'where-delivery-leaks', component: WhereDeliveryLeaks, notesKey: 'where-delivery-leaks' },
  { id: 'divider-where-ai-belongs', component: DividerWhereAiBelongs, notesKey: 'divider-where-ai-belongs' },
  { id: 'deterministic-vs-probabilistic', component: DeterministicVsProbabilistic, notesKey: 'deterministic-vs-probabilistic' },
  { id: 'guardrail-sandwich', component: GuardrailSandwich, notesKey: 'guardrail-sandwich' },
  { id: 'honest-limit', component: HonestLimit, notesKey: 'honest-limit' },
  { id: 'what-you-do-with-the-hours', component: WhatYouDoWithTheHours, notesKey: 'what-you-do-with-the-hours' },
  { id: 'one-action', component: OneAction, notesKey: 'one-action' },
  { id: 'presenter', component: Presenter, notesKey: 'presenter' },
]
