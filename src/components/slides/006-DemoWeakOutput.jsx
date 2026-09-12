import PromptOutputSlide from '../layouts/PromptOutputSlide'
import { weakOutput } from '../../data/demo.js'

// Subject through "Going forward". Ticket number in the subject, VPN and SSL
// to an office manager, "we're on top of it" verbatim, and the Q2 flag
// quietly decided for you.
export default function DemoWeakOutput({ slideNumber }) {
  return (
    <PromptOutputSlide
      eyebrow="The mirror"
      title="What the client would have received"
      accent="blue"
      slideNumber={slideNumber}
      only="output"
      output={weakOutput}
      outputFontSize={24}
      outputColumns={2}
      punchline="You pasted the ticket. It decided what the client hears."
    />
  )
}
