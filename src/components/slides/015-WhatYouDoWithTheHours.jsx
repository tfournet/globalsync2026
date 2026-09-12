import TwoColumnSlide from '../layouts/TwoColumnSlide'

export default function WhatYouDoWithTheHours({ slideNumber }) {
  return (
    <TwoColumnSlide
      eyebrow="What you do with the hours"
      title="Fewer interruptions, not fewer conversations"
      accent="blue"
      slideNumber={slideNumber}
      paragraph="Deliver the human to the decision with everything in front of them."
      points={[
        'The QBR that happens',
        'The ticket update that says something',
        "The onboarding call that isn't data entry",
      ]}
      cardTitle="Then"
      cardItems={[
        "Point the method at your customers' busywork",
        'That is the growth',
        'Promote your best ticket-note writer',
      ]}
    />
  )
}
