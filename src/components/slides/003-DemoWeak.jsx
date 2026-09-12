import PromptOutputSlide from '../layouts/PromptOutputSlide'
import { weakPrompt, weakOutput } from '../../data/demo.js'

export default function DemoWeak({ slideNumber }) {
  return (
    <PromptOutputSlide
      eyebrow="The bad conversation"
      title="What most of us typed the first time"
      accent="blue"
      slideNumber={slideNumber}
      prompt={weakPrompt}
      output={weakOutput}
      outputTruncateAfter={17}
      outputFontSize={17}
      punchline="AI didn't fail to read your mind. It did exactly what you wrote."
    />
  )
}
