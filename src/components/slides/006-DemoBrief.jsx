import PromptOutputSlide from '../layouts/PromptOutputSlide'
import { strongPrompt } from '../../data/demo.js'

// Same facts, plus the things that were in Tim's head: who Dana is, what
// she does with the email, what "on top of it" means, what she is afraid of.
export default function DemoBrief({ slideNumber }) {
  return (
    <PromptOutputSlide
      eyebrow="The mirror"
      title="Delegating to the same machine"
      accent="blue"
      slideNumber={slideNumber}
      only="prompt"
      askLabel="Same facts, plus what was in your head"
      prompt={strongPrompt}
      promptFontSize={32}
      promptColumns={2}
    />
  )
}
