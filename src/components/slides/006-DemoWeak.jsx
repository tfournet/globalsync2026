import PromptOutputSlide from '../layouts/PromptOutputSlide'
import { weakPrompt } from '../../data/demo.js'

// What owners actually do: one line, then paste the PSA ticket. Full width so
// the ticket is recognizable from the back row. Resolution block omitted.
// The paste marker is slide-only; the data file stays verbatim.
const lines = weakPrompt.split('\n')
const shown = [lines[0], '', '<pasted from the PSA>', '', ...lines.slice(2, 14)].join('\n')

export default function DemoWeak({ slideNumber }) {
  return (
    <PromptOutputSlide
      eyebrow="One sentence and a paste"
      title="What most of us actually type"
      accent="blue"
      slideNumber={slideNumber}
      only="prompt"
      askLabel=""
      prompt={shown}
      promptFontSize={34}
      promptColumns={2}
    />
  )
}
