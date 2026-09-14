import PromptOutputSlide from '../layouts/PromptOutputSlide'
import { askPrompt, askOutputHeadings } from '../../data/demo.js'

// The path: ask it what it needed. Its five items are the rule list slide 3
// said did not exist. The model's own 50/50 confession is read from the note.
export default function DemoAsk({ slideNumber }) {
  return (
    <PromptOutputSlide
      eyebrow="How to get unstuck"
      title="Ask it how to ask better"
      accent="blue"
      slideNumber={slideNumber}
      askLabel=""
      outputLabel=""
      prompt={askPrompt}
      promptFontSize={34}
      output={askOutputHeadings}
      outputFontSize={38}
      punchline="Every one of those is a rule you already had in your head."
    />
  )
}
