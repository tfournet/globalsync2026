import PromptOutputSlide from '../layouts/PromptOutputSlide'
import { strongOutput } from '../../data/demo.js'

export default function DemoStrong({ slideNumber }) {
  return (
    <PromptOutputSlide
      eyebrow="The same request"
      title="Forwardable without edits"
      accent="blue"
      slideNumber={slideNumber}
      only="output"
      output={strongOutput}
      outputFontSize={34}
      punchline="Your team has been covering for vague requests for years. AI is the first hire that won't."
    />
  )
}
