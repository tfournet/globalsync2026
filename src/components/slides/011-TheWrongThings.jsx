import ComparisonSlide from '../layouts/ComparisonSlide'

// The opinion most likely to bristle. Keep the examples; they make it an opinion.
export default function TheWrongThings({ slideNumber }) {
  return (
    <ComparisonSlide
      eyebrow="What gets automated"
      title="Most MSPs automate the wrong things"
      accent="orange"
      slideNumber={slideNumber}
      left={{
        heading: 'Automating the customer away',
        items: ['Ticket auto-replies', 'Templated QBRs', 'Onboarding nobody attends'],
      }}
      right={{
        heading: 'Automating the automaton',
        items: ['Reading one screen, typing into another', 'Checking the same thing every morning', 'Chasing the same approval'],
      }}
      closing="Automate to give time back to the customer. Not to hide from them."
    />
  )
}
