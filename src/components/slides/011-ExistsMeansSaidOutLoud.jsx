import TwoColumnSlide from '../layouts/TwoColumnSlide'

// What Aharon's law means in this talk, shown on a shop, not on a prompt.
export default function ExistsMeansSaidOutLoud({ slideNumber }) {
  return (
    <TwoColumnSlide
      eyebrow="What the law means here"
      title="Exists means said out loud"
      accent="orange"
      slideNumber={slideNumber}
      paragraph='"We have an offboarding process." You have Mike.'
      points={[
        'The list said "cancel software licenses"',
        'The covering tech canceled Microsoft. Mike meant Microsoft and Adobe.',
        'You find out at the next license reconciliation',
      ]}
      cardTitle="Nothing failed"
      cardItems={[
        'Everyone did what the list said',
        'The list said what Mike meant',
        'Now write down what Mike meant',
      ]}
    />
  )
}
