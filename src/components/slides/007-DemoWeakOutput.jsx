import PromptOutputSlide from '../layouts/PromptOutputSlide'
import { weakOutput, withoutTim } from '../../data/demo.js'

// Shown whole, two columns. Ticket number in the subject, a template with bold
// headers, a placeholder sign-off, and the Q2 flag disclosed to the client in
// writing. Emphasis marks the leak.
export default function DemoWeakOutput({ slideNumber }) {
  return (
    <PromptOutputSlide
      eyebrow=""
      title="What the client would have received"
      accent="blue"
      slideNumber={slideNumber}
      only="output"
      outputLabel=""
      output={withoutTim(weakOutput)}
      outputFontSize={26}
      panelTop={215}
      outputColumns={2}
      outputEmphasize={[
        'This certificate had actually been flagged for renewal in our Q2 review, and we\'re correcting the gap that let it lapse.',
      ]}
      punchline="It leaked that line in two of three runs, and you had no say in which."
    />
  )
}
