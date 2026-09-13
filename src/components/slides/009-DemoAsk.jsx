import PromptOutputSlide from '../layouts/PromptOutputSlide'
import { askPrompt, askOutputHeadings, askOutputConfession } from '../../data/demo.js'

// The turn. Where most people quit, ask it how to ask better instead.
// Excerpt of its answer, then one of its own sentences as the punchline.
export default function DemoAsk({ slideNumber }) {
  return (
    <PromptOutputSlide
      eyebrow="Where most people stop"
      title="Ask it how to ask better"
      accent="blue"
      slideNumber={slideNumber}
      prompt={askPrompt}
      promptFontSize={30}
      output={askOutputHeadings}
      outputFontSize={34}
      punchline={askOutputConfession}
      punchlineQuoted
    />
  )
}
