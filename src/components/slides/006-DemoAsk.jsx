import PromptOutputSlide from '../layouts/PromptOutputSlide'
import { askPrompt, askOutput } from '../../data/demo.js'

// Output window: the model's intro and its first four missing items. Items 5
// and 6 and the closing offer are in docs/demo/3-ask-output.md.
export default function DemoAsk({ slideNumber }) {
  return (
    <PromptOutputSlide
      eyebrow="Ask it"
      title="Let it tell you what was missing"
      accent="blue"
      slideNumber={slideNumber}
      prompt={askPrompt}
      output={askOutput}
      outputLines={[0, 6]}
      outputFontSize={30}
      footnote="Try this tonight on the last answer that disappointed you."
    />
  )
}
