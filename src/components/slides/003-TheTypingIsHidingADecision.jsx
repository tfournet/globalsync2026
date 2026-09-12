import HiddenDecisionSlide from '../layouts/HiddenDecisionSlide'

// The insight the rest of the deck assumes: every screen-to-screen step is
// motion fused to a small judgment, and the judgment is why a person does the
// motion. Spoken, not captioned. See notes.
export default function TheTypingIsHidingADecision({ slideNumber }) {
  return (
    <HiddenDecisionSlide
      eyebrow="Why a person is doing this"
      title="The typing is hiding a decision"
      slideNumber={slideNumber}
      image="/illustrations/hidden-decision-trim.png"
    />
  )
}
