import PromptOutputSlide from '../layouts/PromptOutputSlide'
import { weakPrompt } from '../../data/demo.js'

// What owners actually do: one line, then paste the PSA ticket. Full width so
// the ticket is recognizable from the back row. Resolution block omitted.
export default function DemoWeak({ slideNumber }) {
  return (
    <PromptOutputSlide
      eyebrow="The mirror"
      title="Abdicating to a machine"
      accent="blue"
      slideNumber={slideNumber}
      only="prompt"
      askLabel="The ask"
      prompt={weakPrompt}
      promptLines={[0, 14]}
      promptFontSize={28}
      promptColumns={2}
    />
  )
}
