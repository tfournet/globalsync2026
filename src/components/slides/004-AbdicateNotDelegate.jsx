import ComparisonSlide from '../layouts/ComparisonSlide'

export default function AbdicateNotDelegate({ slideNumber }) {
  return (
    <ComparisonSlide
      eyebrow="How it got that way"
      title="The decisions went with the work"
      accent="blue"
      slideNumber={slideNumber}
      left={{
        heading: 'When you delegate',
        items: ['The work moves to them.', 'The standard stays with you, written down.', 'They can check themselves against it.'],
      }}
      right={{
        heading: 'When you hand over the decisions too',
        items: ['The work moves to them.', 'The standard stays with you, unwritten.', 'They guess, and with luck they guess right.'],
      }}
      closing="Your best employees are the ones who usually guess right."
    />
  )
}
