import Cover from '../components/slides/001-Cover.jsx'
import Automatons from '../components/slides/002-Automatons.jsx'
import TheTypingIsHidingADecision from '../components/slides/003-TheTypingIsHidingADecision.jsx'
import AbdicateNotDelegate from '../components/slides/004-AbdicateNotDelegate.jsx'
import TheDemoNeverHadAClient from '../components/slides/005-TheDemoNeverHadAClient.jsx'
import DemoWeak from '../components/slides/006-DemoWeak.jsx'
import DemoWeakOutput from '../components/slides/007-DemoWeakOutput.jsx'
import DemoAsk from '../components/slides/008-DemoAsk.jsx'
import DemoBrief from '../components/slides/009-DemoBrief.jsx'
import DemoStrong from '../components/slides/010-DemoStrong.jsx'
import AharonsLaw from '../components/slides/011-AharonsLaw.jsx'
import ExistsMeansSaidOutLoud from '../components/slides/012-ExistsMeansSaidOutLoud.jsx'
import TheWrongThings from '../components/slides/013-TheWrongThings.jsx'
import WhereDeliveryLeaks from '../components/slides/014-WhereDeliveryLeaks.jsx'
import DividerWhereAiBelongs from '../components/slides/015-DividerWhereAiBelongs.jsx'
import DeterministicVsProbabilistic from '../components/slides/016-DeterministicVsProbabilistic.jsx'
import GuardrailSandwich from '../components/slides/017-GuardrailSandwich.jsx'
import HonestLimit from '../components/slides/018-HonestLimit.jsx'
import TheMore from '../components/slides/019-TheMore.jsx'
import OneAction from '../components/slides/020-OneAction.jsx'
import Presenter from '../components/slides/021-Presenter.jsx'

// Ordered slide registry. Each slide component owns its own content
// (see AGENTS.md); this file only wires order, identity, and notes.
export const slides = [
  { id: 'cover', component: Cover, notesKey: 'cover' },
  { id: 'automatons', component: Automatons, notesKey: 'automatons' },
  { id: 'the-typing-is-hiding-a-decision', component: TheTypingIsHidingADecision, notesKey: 'the-typing-is-hiding-a-decision' },
  { id: 'abdicate-not-delegate', component: AbdicateNotDelegate, notesKey: 'abdicate-not-delegate' },
  { id: 'the-demo-never-had-a-client', component: TheDemoNeverHadAClient, notesKey: 'the-demo-never-had-a-client' },
  { id: 'demo-weak', component: DemoWeak, notesKey: 'demo-weak' },
  { id: 'demo-weak-output', component: DemoWeakOutput, notesKey: 'demo-weak-output' },
  { id: 'demo-ask', component: DemoAsk, notesKey: 'demo-ask' },
  { id: 'demo-brief', component: DemoBrief, notesKey: 'demo-brief' },
  { id: 'demo-strong', component: DemoStrong, notesKey: 'demo-strong' },
  { id: 'aharons-law', component: AharonsLaw, notesKey: 'aharons-law' },
  { id: 'exists-means-said-out-loud', component: ExistsMeansSaidOutLoud, notesKey: 'exists-means-said-out-loud' },
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
