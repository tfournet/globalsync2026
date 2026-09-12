import TwoColumnSlide from '../layouts/TwoColumnSlide'

export default function Reflex({ slideNumber }) {
  return (
    <TwoColumnSlide
      eyebrow="The reflex"
      title="The hire is the slowest, most expensive fix"
      accent="blue"
      slideNumber={slideNumber}
      paragraph="People and margin break first. You feel it in delivery. The reflex is a hire."
      points={[
        'A quarter before they are useful',
        'Inherits the same broken loop',
        'Margin gets worse first',
      ]}
      cardTitle="What if"
      cardItems={[
        'It was never headcount',
        'Intent is lost at every handoff',
        'Fixable this month',
      ]}
    />
  )
}
