import PromptOutputSlide from '../layouts/PromptOutputSlide'
import { strongBrief } from '../../data/demo.js'

// Same ticket pasted underneath, not shown. These are the words Tim added
// above it: who Dana is, what she does with the email, what not to quote,
// what "on top of it" means, what she is afraid of.
export default function DemoBrief({ slideNumber }) {
  return (
    <PromptOutputSlide
      eyebrow="The mirror"
      title="Delegating to the same machine"
      accent="blue"
      slideNumber={slideNumber}
      only="prompt"
      askLabel="Same ticket pasted below. This went above it."
      prompt={strongBrief}
      promptFontSize={29}
      promptColumns={2}
    />
  )
}
