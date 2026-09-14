import PromptOutputSlide from '../layouts/PromptOutputSlide'
import { strongBrief, withoutTim } from '../../data/demo.js'

// Earned by the previous slide: the machine said what was missing, this
// supplies it. Same ticket pasted underneath, not shown.
export default function DemoBrief({ slideNumber }) {
  return (
    <PromptOutputSlide
      eyebrow="The second try"
      title="The same ask, with the rules written down"
      accent="blue"
      slideNumber={slideNumber}
      only="prompt"
      askLabel="Same ticket pasted below"
      prompt={withoutTim(strongBrief)}
      promptFontSize={32}
      promptFlow
      promptColumns={2}
      promptEmphasize={[
        "She isn't technical and doesn't want to be",
        "She'll forward whatever I send straight to Dr. Patel",
        "don't quote them",
        "she definitely doesn't need to hear that we flagged this cert in the spring and the renewal never got approved",
        "that's what she asked me on the phone and what she's afraid of",
        'That\'s what "on top of it" actually means, so say that',
        'Do not use the phrase "on top of it" anywhere in the email',
        withoutTim('Sign it from me, Tim at Northline IT'),
      ]}
    />
  )
}
