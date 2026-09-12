import HiddenDecisionSlide from '../layouts/HiddenDecisionSlide'

// The insight the rest of the deck assumes: every screen-to-screen step is
// motion fused to a small judgment. The judgment is why a person does the motion.
export default function TheTypingIsHidingADecision({ slideNumber }) {
  return (
    <HiddenDecisionSlide
      eyebrow="Why a person is doing this"
      title="The typing is hiding a decision"
      slideNumber={slideNumber}
      image="/illustrations/hidden-decision-trim.png"
      motionLabel="Five minutes. A computer could do all of this."
      decisionLabel="Five seconds. Only Mike does this."
      decision='"Standard build. Unless it is the client that always gets the exception."'
    />
  )
}
