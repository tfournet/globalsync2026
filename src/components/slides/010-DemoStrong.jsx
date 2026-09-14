import PromptOutputSlide from '../layouts/PromptOutputSlide'
import { strongOutput, withoutTim } from '../../data/demo.js'

export default function DemoStrong({ slideNumber }) {
  return (
    <PromptOutputSlide
      eyebrow="The second try"
      title="Forwardable without edits"
      accent="blue"
      slideNumber={slideNumber}
      only="output"
      output={withoutTim(strongOutput)}
      outputFontSize={28}
      punchline="Same tool. Same task. The only thing that changed was how you asked."
    />
  )
}
