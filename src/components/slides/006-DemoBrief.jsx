import PromptOutputSlide from '../layouts/PromptOutputSlide'
import { strongPrompt } from '../../data/demo.js'

// The full brief gets its own slide so it stays legible from the back row.
export default function DemoBrief({ slideNumber }) {
  return (
    <PromptOutputSlide
      eyebrow="The mirror"
      title="Delegating to the same machine"
      accent="blue"
      slideNumber={slideNumber}
      only="prompt"
      askLabel="The ask, second try"
      prompt={strongPrompt}
      promptFontSize={32}
      promptColumns={2}
    />
  )
}
