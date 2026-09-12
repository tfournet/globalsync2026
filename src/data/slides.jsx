import Cover from '../components/slides/001-Cover.jsx'
import Reflex from '../components/slides/002-Reflex.jsx'
import DemoWeak from '../components/slides/003-DemoWeak.jsx'
import DemoStrong from '../components/slides/004-DemoStrong.jsx'
import DemoAsk from '../components/slides/005-DemoAsk.jsx'
import DividerArticulation from '../components/slides/006-DividerArticulation.jsx'
import AharonsLaw from '../components/slides/007-AharonsLaw.jsx'
import WeHaveAProcess from '../components/slides/008-WeHaveAProcess.jsx'
import DividerWhereAiBelongs from '../components/slides/009-DividerWhereAiBelongs.jsx'
import DeterministicVsProbabilistic from '../components/slides/010-DeterministicVsProbabilistic.jsx'
import GuardrailSandwich from '../components/slides/011-GuardrailSandwich.jsx'
import HonestLimit from '../components/slides/012-HonestLimit.jsx'
import WhatYouDoWithTheHours from '../components/slides/013-WhatYouDoWithTheHours.jsx'
import OneAction from '../components/slides/014-OneAction.jsx'
import Presenter from '../components/slides/015-Presenter.jsx'

// Ordered slide registry. Each slide component owns its own content
// (see AGENTS.md); this file only wires order, identity, and notes.
export const slides = [
  { id: 'cover', component: Cover, notesKey: 'cover' },
  { id: 'reflex', component: Reflex, notesKey: 'reflex' },
  { id: 'demo-weak', component: DemoWeak, notesKey: 'demo-weak' },
  { id: 'demo-strong', component: DemoStrong, notesKey: 'demo-strong' },
  { id: 'demo-ask', component: DemoAsk, notesKey: 'demo-ask' },
  { id: 'divider-articulation', component: DividerArticulation, notesKey: 'divider-articulation' },
  { id: 'aharons-law', component: AharonsLaw, notesKey: 'aharons-law' },
  { id: 'we-have-a-process', component: WeHaveAProcess, notesKey: 'we-have-a-process' },
  { id: 'divider-where-ai-belongs', component: DividerWhereAiBelongs, notesKey: 'divider-where-ai-belongs' },
  { id: 'deterministic-vs-probabilistic', component: DeterministicVsProbabilistic, notesKey: 'deterministic-vs-probabilistic' },
  { id: 'guardrail-sandwich', component: GuardrailSandwich, notesKey: 'guardrail-sandwich' },
  { id: 'honest-limit', component: HonestLimit, notesKey: 'honest-limit' },
  { id: 'what-you-do-with-the-hours', component: WhatYouDoWithTheHours, notesKey: 'what-you-do-with-the-hours' },
  { id: 'one-action', component: OneAction, notesKey: 'one-action' },
  { id: 'presenter', component: Presenter, notesKey: 'presenter' },
]
