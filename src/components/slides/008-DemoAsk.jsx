import PromptOutputSlide from '../layouts/PromptOutputSlide'
import { askPrompt, askOutputHeadings } from '../../data/demo.js'

// Headings only. The model's explanations and closing offer are in
// docs/demo/3-ask-output.md and src/data/demo.js askOutput.
export default function DemoAsk({ slideNumber }) {
  return (
    <PromptOutputSlide
      eyebrow="The mirror"
      title="Ask it what you left out"
      accent="blue"
      slideNumber={slideNumber}
      prompt={askPrompt}
      promptFontSize={34}
      output={askOutputHeadings}
      outputFontSize={32}
      footnote="It just described your head. Try this tonight on the last answer that disappointed you."
    />
  )
}
