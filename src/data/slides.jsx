import Cover from '../components/slides/001-Cover.jsx'
import Automatons from '../components/slides/002-Automatons.jsx'
import AbdicateNotDelegate from '../components/slides/003-AbdicateNotDelegate.jsx'
import TheDemoNeverHadAClient from '../components/slides/004-TheDemoNeverHadAClient.jsx'
import DemoWeak from '../components/slides/005-DemoWeak.jsx'
import DemoWeakOutput from '../components/slides/006-DemoWeakOutput.jsx'
import DemoAsk from '../components/slides/007-DemoAsk.jsx'
import DemoBrief from '../components/slides/008-DemoBrief.jsx'
import DemoStrong from '../components/slides/009-DemoStrong.jsx'
import AharonsLaw from '../components/slides/010-AharonsLaw.jsx'
import WeHaveAProcess from '../components/slides/011-WeHaveAProcess.jsx'
import TheWrongThings from '../components/slides/012-TheWrongThings.jsx'
import WhereDeliveryLeaks from '../components/slides/013-WhereDeliveryLeaks.jsx'
import DividerWhereAiBelongs from '../components/slides/014-DividerWhereAiBelongs.jsx'
import DeterministicVsProbabilistic from '../components/slides/015-DeterministicVsProbabilistic.jsx'
import GuardrailSandwich from '../components/slides/016-GuardrailSandwich.jsx'
import HonestLimit from '../components/slides/017-HonestLimit.jsx'
import TheMore from '../components/slides/018-TheMore.jsx'
import OneAction from '../components/slides/019-OneAction.jsx'
import Presenter from '../components/slides/020-Presenter.jsx'

// Ordered slide registry. Each slide component owns its own content
// (see AGENTS.md); this file only wires order, identity, and notes.
export const slides = [
  { id: 'cover', component: Cover, notesKey: 'cover' },
  { id: 'automatons', component: Automatons, notesKey: 'automatons' },
  { id: 'abdicate-not-delegate', component: AbdicateNotDelegate, notesKey: 'abdicate-not-delegate' },
  { id: 'the-demo-never-had-a-client', component: TheDemoNeverHadAClient, notesKey: 'the-demo-never-had-a-client' },
  { id: 'demo-weak', component: DemoWeak, notesKey: 'demo-weak' },
  { id: 'demo-weak-output', component: DemoWeakOutput, notesKey: 'demo-weak-output' },
  { id: 'demo-ask', component: DemoAsk, notesKey: 'demo-ask' },
  { id: 'demo-brief', component: DemoBrief, notesKey: 'demo-brief' },
  { id: 'demo-strong', component: DemoStrong, notesKey: 'demo-strong' },
  { id: 'aharons-law', component: AharonsLaw, notesKey: 'aharons-law' },
  { id: 'we-have-a-process', component: WeHaveAProcess, notesKey: 'we-have-a-process' },
  { id: 'the-wrong-things', component: TheWrongThings, notesKey: 'the-wrong-things' },
  { id: 'where-delivery-leaks', component: WhereDeliveryLeaks, notesKey: 'where-delivery-leaks' },
  { id: 'divider-where-ai-belongs', component: DividerWhereAiBelongs, notesKey: 'divider-where-ai-belongs' },
  { id: 'deterministic-vs-probabilistic', component: DeterministicVsProbabilistic, notesKey: 'deterministic-vs-probabilistic' },
  { id: 'guardrail-sandwich', component: GuardrailSandwich, notesKey: 'guardrail-sandwich' },
  { id: 'honest-limit', component: HonestLimit, notesKey: 'honest-limit' },
  { id: 'the-more', component: TheMore, notesKey: 'the-more' },
  { id: 'one-action', component: OneAction, notesKey: 'one-action' },
  { id: 'presenter', component: Presenter, notesKey: 'presenter' },
]
