import TwoColumnSlide from '../layouts/TwoColumnSlide'

export default function Reflex({ slideNumber }) {
  return (
    <TwoColumnSlide
      eyebrow="The reflex"
      title="The hire is the slowest, most expensive fix"
      accent="blue"
      slideNumber={slideNumber}
      paragraph="You just heard that people and margin break first. The reflex is a hire."
      points={[
        'The hire takes a quarter to be useful',
        'The hire inherits the same broken loop',
        'The hire makes the margin problem worse before it makes anything better',
      ]}
      cardTitle="What if"
      cardItems={[
        'The constraint was never headcount',
        'The constraint is that intent gets lost every time it changes hands',
        'That is fixable this month',
      ]}
    />
  )
}
