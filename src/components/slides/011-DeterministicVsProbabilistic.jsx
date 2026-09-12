import ComparisonSlide from '../layouts/ComparisonSlide'

export default function DeterministicVsProbabilistic({ slideNumber }) {
  return (
    <ComparisonSlide
      eyebrow="Two kinds of machine"
      title="Deterministic and probabilistic are different tools"
      accent="gold"
      slideNumber={slideNumber}
      left={{
        heading: 'Automation',
        items: [
          'Same input, same output, every time',
          'Cheap to run, cheap to audit',
          'Fails loudly and predictably',
          'Owns the decision and the record',
        ],
      }}
      right={{
        heading: 'AI',
        items: [
          'Messy input in, structured output out',
          'Finds the pattern across more than a person can read',
          'Drafts, summarizes, classifies',
          'Never the decision, never the record',
        ],
      }}
      closing="You already run a probabilistic system. It's called a tech at 4pm on a Tuesday. Measure both."
    />
  )
}
