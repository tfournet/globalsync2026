import TwoColumnSlide from '../layouts/TwoColumnSlide'

export default function WhatYouDoWithTheHours({ slideNumber }) {
  return (
    <TwoColumnSlide
      eyebrow="What you do with the hours"
      title="Fewer interruptions, not fewer conversations"
      accent="blue"
      slideNumber={slideNumber}
      paragraph="Automation's job is to deliver the human to the decision with everything already in front of them. Right data, right speed."
      points={[
        'The QBR that happens on time',
        'The ticket update that says something',
        "The onboarding call that isn't data entry",
      ]}
      cardTitle="Then"
      cardItems={[
        "Point the same method at your customers' manual work",
        'That is where growth comes from',
        'Your best ticket-note writer is your best automation engineer, promote for it',
      ]}
    />
  )
}
