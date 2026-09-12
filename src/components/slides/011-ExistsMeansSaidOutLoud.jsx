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
        "It works until Mike isn't the one doing it",
        'The OneDrive sync was in his head, not on the checklist',
        'The first time someone else runs it, you find out',
      ]}
      cardTitle="Nothing failed"
      cardItems={[
        'The automation ran the checklist perfectly',
        'OneDrive was never on it',
        'Now you know what Mike knows',
      ]}
    />
  )
}
