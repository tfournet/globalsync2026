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
        "It works until the request comes from someone Mike doesn't know",
        'The OneDrive sync was in his head, not on the checklist',
        'The first automation attempt is when you find out',
      ]}
      cardTitle="Nothing failed"
      cardItems={[
        'You found out in a sandbox',
        "Not from the client's attorney",
        'Now write down what Mike does',
      ]}
    />
  )
}
