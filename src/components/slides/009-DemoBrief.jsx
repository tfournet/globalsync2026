import PromptOutputSlide from '../layouts/PromptOutputSlide'
import { strongBrief } from '../../data/demo.js'

// Earned by the previous slide: the machine said what was missing, this
// supplies it. Same ticket pasted underneath, not shown.
export default function DemoBrief({ slideNumber }) {
  return (
    <PromptOutputSlide
      eyebrow="The second try"
      title="Now with the judgment calls"
      accent="blue"
      slideNumber={slideNumber}
      only="prompt"
      askLabel="Same ticket pasted below. This went above it this time."
      prompt={strongBrief}
      promptFontSize={28}
      promptColumns={2}
      promptEmphasize={[
        "She isn't technical and doesn't want to be",
        "She'll forward whatever I send straight to Dr. Patel",
        "don't quote them",
        "That's a conversation for me and Dr. Patel, not this email",
        "that's what she asked me on the phone and what she's afraid of",
        'That\'s what "on top of it" actually means, so say that',
        'Do not use the phrase "on top of it" anywhere in the email',
        'Sign it from me, Tim at Northline IT',
      ]}
    />
  )
}
