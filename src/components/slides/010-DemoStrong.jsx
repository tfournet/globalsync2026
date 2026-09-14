import PromptOutputSlide from '../layouts/PromptOutputSlide'
import { strongOutput, withoutTim } from '../../data/demo.js'

export default function DemoStrong({ slideNumber }) {
  return (
    <PromptOutputSlide
      eyebrow="The second try"
      title="Read it, put your name on it, send it"
      accent="blue"
      slideNumber={slideNumber}
      only="output"
      outputLabel=""
      output={withoutTim(strongOutput)}
      outputFontSize={30}
      punchline="Those five questions work on any brief, to a person or a machine."
    />
  )
}
