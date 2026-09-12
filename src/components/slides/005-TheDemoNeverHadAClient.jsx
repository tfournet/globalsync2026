import TwoColumnSlide from '../layouts/TwoColumnSlide'

// The keynote critique. Twenty seconds, no vendor names.
export default function TheDemoNeverHadAClient({ slideNumber }) {
  return (
    <TwoColumnSlide
      eyebrow="Where you learned it"
      title="The demo never had a client"
      accent="blue"
      slideNumber={slideNumber}
      paragraph="Every AI keynote: one sentence, then magic."
      points={[
        'Build me a game',
        'Any game will do',
        'Nobody checks the details',
      ]}
      cardTitle="Then you go home"
      cardItems={[
        'Write the onboarding email',
        'Every detail is the job',
        'The client checks all of them',
      ]}
    />
  )
}
