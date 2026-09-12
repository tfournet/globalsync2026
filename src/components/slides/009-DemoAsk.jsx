import PromptOutputSlide from '../layouts/PromptOutputSlide'
import { askPrompt, askOutputHeadings, askOutputConfession } from '../../data/demo.js'

// Headings only, then the model's own closing sentence as the punchline.
// It named the Q2 flag it had hidden. Nobody asked it to.
export default function DemoAsk({ slideNumber }) {
  return (
    <PromptOutputSlide
      eyebrow="The mirror"
      title="Ask it what you left out"
      accent="blue"
      slideNumber={slideNumber}
      prompt={askPrompt}
      promptFontSize={32}
      output={askOutputHeadings}
      outputFontSize={36}
      punchline={askOutputConfession}
      punchlineQuoted
    />
  )
}
