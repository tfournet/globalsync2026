import PromptOutputSlide from '../layouts/PromptOutputSlide'
import { askPrompt, askOutput } from '../../data/demo.js'

export default function DemoAsk({ slideNumber }) {
  return (
    <PromptOutputSlide
      eyebrow="Ask it"
      title="Let it tell you what was missing"
      accent="blue"
      slideNumber={slideNumber}
      prompt={askPrompt}
      output={askOutput}
      outputTruncateAfter={8}
      outputFontSize={22}
      footnote="Try this tonight on the last answer that disappointed you."
    />
  )
}
