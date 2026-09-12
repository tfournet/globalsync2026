import PromptOutputSlide from '../layouts/PromptOutputSlide'
import { weakPrompt, weakOutput } from '../../data/demo.js'

// Output window: the model's own "I don't have any details" through the first
// bracketed placeholders. Stops before the signature block (see docs/demo/README.md).
export default function DemoWeak({ slideNumber }) {
  return (
    <PromptOutputSlide
      eyebrow="The mirror"
      title="Abdicating to a machine"
      accent="blue"
      slideNumber={slideNumber}
      prompt={weakPrompt}
      promptFontSize={44}
      output={weakOutput}
      outputLines={[8, 11]}
      outputFontSize={34}
      punchline="It did exactly what you wrote. So did your tech. This one was fast enough for you to notice."
    />
  )
}
