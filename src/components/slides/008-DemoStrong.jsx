import PromptOutputSlide from '../layouts/PromptOutputSlide'
import { strongOutput } from '../../data/demo.js'

export default function DemoStrong({ slideNumber }) {
  return (
    <PromptOutputSlide
      eyebrow="The mirror"
      title="Forwardable without edits"
      accent="blue"
      slideNumber={slideNumber}
      only="output"
      output={strongOutput}
      outputLines={[2, 11]}
      outputFontSize={34}
      punchline="Same tool. Same task. The only thing that changed was you."
    />
  )
}
