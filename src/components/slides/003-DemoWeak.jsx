import PromptOutputSlide from '../layouts/PromptOutputSlide'
import { weakPrompt, weakOutput } from '../../data/demo.js'

// Output window: the model's own "I don't have any details" through the first
// bracketed placeholders. Stops before the signature block (see docs/demo/README.md).
export default function DemoWeak({ slideNumber }) {
  return (
    <PromptOutputSlide
      eyebrow="The bad conversation"
      title="What most of us typed the first time"
      accent="blue"
      slideNumber={slideNumber}
      prompt={weakPrompt}
      output={weakOutput}
      outputLines={[0, 11]}
      outputFontSize={28}
      punchline="AI didn't fail to read your mind. It did exactly what you wrote."
    />
  )
}
