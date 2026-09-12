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
        items: ['Hand over both', 'Grade against the version in your head', 'Blame the receiver'],
      }}
      closing="We have done this to our techs for years. The wrong result came back a week later, so we blamed the tech."
    />
  )
}
