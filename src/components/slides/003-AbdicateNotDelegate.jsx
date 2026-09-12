import ComparisonSlide from '../layouts/ComparisonSlide'

export default function AbdicateNotDelegate({ slideNumber }) {
  return (
    <ComparisonSlide
      eyebrow="The habit"
      title="We abdicate. We think we delegate."
      accent="blue"
      slideNumber={slideNumber}
      left={{
        heading: 'Delegate',
        items: ['Hand over the work', 'Keep the definition of done', 'Say what good looks like'],
      }}
      right={{
        heading: 'Abdicate',
        items: ['Hand over both', 'Grade against the version in your head', 'Get away with it, until you don\'t'],
      }}
      closing="Your best tech has been filling in the blanks for years. The new hire couldn't. Neither can this."
    />
  )
}
