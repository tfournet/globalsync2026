import PromptOutputSlide from '../layouts/PromptOutputSlide'
import { strongBrief } from '../../data/demo.js'

// Earned by the previous slide: the machine said what was missing, this
// supplies it. Same ticket pasted underneath, not shown.
export default function DemoBrief({ slideNumber }) {
  return (
    <PromptOutputSlide
      eyebrow="The second try"
      title="Say it the way you would say it to your best tech"
      accent="blue"
      slideNumber={slideNumber}
      only="prompt"
      askLabel="Same ticket pasted below. This went above it this time."
      prompt={strongBrief}
      promptFontSize={29}
      promptColumns={2}
    />
  )
}
