import PromptOutputSlide from '../layouts/PromptOutputSlide'
import { strongPrompt, strongOutput } from '../../data/demo.js'

export default function DemoStrong({ slideNumber }) {
  return (
    <PromptOutputSlide
      eyebrow="The same request"
      title="The brief a good tech would have needed anyway"
      accent="blue"
      slideNumber={slideNumber}
      prompt={strongPrompt}
      output={strongOutput}
      promptFontSize={16}
      outputFontSize={16}
      punchline="Your team has been covering for vague requests for years. AI is the first hire that won't."
    />
  )
}
