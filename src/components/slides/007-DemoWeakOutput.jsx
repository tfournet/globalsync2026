import PromptOutputSlide from '../layouts/PromptOutputSlide'
import { weakOutput, withoutTim } from '../../data/demo.js'

// Shown whole, two columns. Ticket number in the subject, a template with bold
// headers, a placeholder sign-off, and the Q2 flag disclosed to the client in
// writing. Emphasis marks the leak.
export default function DemoWeakOutput({ slideNumber }) {
  return (
    <PromptOutputSlide
      eyebrow="The mirror"
      title="What the client would have received"
      accent="blue"
      slideNumber={slideNumber}
      only="output"
      output={withoutTim(weakOutput)}
      outputFontSize={22}
      outputColumns={2}
      outputEmphasize={[
        'This certificate had actually been flagged for renewal in our Q2 review, and we\'re correcting the gap that let it lapse.',
      ]}
      punchline="You pasted the ticket. It told your client what you never approved."
    />
  )
}
