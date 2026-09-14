import ComparisonSlide from '../layouts/ComparisonSlide'

export default function AbdicateNotDelegate({ slideNumber }) {
  return (
    <ComparisonSlide
      eyebrow="How it got that way"
      title="Handing over the work is not the same as delegating"
      accent="blue"
      slideNumber={slideNumber}
      left={{
        heading: 'When you delegate',
        items: [
          'You hand them the queue.',
          'You wrote the rule down: call on any P1, and on anything from a client who has called twice.',
          'They check the ticket against that.',
        ],
      }}
      right={{
        heading: 'When you hand over the rules too',
        items: [
          'You hand them the queue.',
          'You left the rule to them: use your judgment.',
          'They guess, and with luck they guess right.',
        ],
      }}
      closing="Your best employees are the ones who usually guess right."
    />
  )
}
