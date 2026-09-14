import { Cog, Sparkles } from 'lucide-react'
import ComparisonSlide from '../layouts/ComparisonSlide'

// Which machine gets what, as Tim's rule for his own shop (first person, so
// it is not a vendor's law). Three paired rows: the kind of work, what
// happens when it runs, what it is allowed to own.
export default function DeterministicVsProbabilistic({ slideNumber }) {
  return (
    <ComparisonSlide
      eyebrow="Two machines"
      title="What I hand to each kind of step"
      accent="gold"
      slideNumber={slideNumber}
      top={265}
      bottom={878}
      fontSize={34}
      itemGap={16}
      aligned
      arrows={false}
      emphasizeRight={false}
      left={{
        heading: 'Deterministic',
        icon: Cog,
        items: [
          'Work with an exact rule, if this then that.',
          'It does the same thing every time, so you check it once.',
          'A gap in the rule shows up as an error.',
        ],
      }}
      right={{
        heading: 'Probabilistic',
        icon: Sparkles,
        items: [
          'Work where a good guess is enough: drafting, sorting, summarizing.',
          'It does something a little different every run, so someone checks every time.',
          'A gap in the brief shows up in the answer.',
        ],
      }}
      closing="You already run a probabilistic system: a tech at 4pm on a Tuesday."
    />
  )
}
