import PromptOutputSlide from '../layouts/PromptOutputSlide'
import { weakPrompt, weakOutput } from '../../data/demo.js'

// The realistic weak ask: every fact Tim was thinking about, none of the
// ones in his head. Output shown whole (minus subject and sign-off) because
// the point is that it looks fine.
export default function DemoWeak({ slideNumber }) {
  return (
    <PromptOutputSlide
      eyebrow="The mirror"
      title="Abdicating to a machine"
      accent="blue"
      slideNumber={slideNumber}
      prompt={weakPrompt}
      promptFontSize={34}
      output={weakOutput}
      outputLines={[2, 9]}
      outputFontSize={28}
      punchline="Every fact you were thinking about. None of the ones in your head."
    />
  )
}
