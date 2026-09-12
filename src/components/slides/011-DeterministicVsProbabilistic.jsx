import ComparisonSlide from '../layouts/ComparisonSlide'

export default function DeterministicVsProbabilistic({ slideNumber }) {
  return (
    <ComparisonSlide
      eyebrow="Two kinds of machine"
      title="Two different tools"
      accent="gold"
      slideNumber={slideNumber}
      left={{
        heading: 'Automation',
        items: [
          'Same in, same out',
          'Cheap to run, cheap to audit',
          'Owns the decision and the record',
        ],
      }}
      right={{
        heading: 'AI',
        items: [
          'Messy in, structured out',
          'Drafts, summarizes, classifies',
          'Never the decision, never the record',
        ],
      }}
      closing="You already run a probabilistic system. It's called a tech at 4pm on a Tuesday."
    />
  )
}
