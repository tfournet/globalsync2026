import ComparisonSlide from '../layouts/ComparisonSlide'

export default function AbdicateNotDelegate({ slideNumber }) {
  return (
    <ComparisonSlide
      eyebrow="How it got that way"
      title="You handed over the work and the decisions at the same time"
      accent="blue"
      slideNumber={slideNumber}
      left={{
        heading: 'When you delegate',
        items: ['The work moves to them.', 'The standard stays with you, written down.', 'They can check themselves against it.'],
      }}
      right={{
        heading: 'When you hand over the decisions too',
        items: ['The work moves to them.', 'The standard stays with you, unwritten.', 'They guess, and if you are lucky they guess right.'],
      }}
    />
  )
}
