import TwoColumnSlide from '../layouts/TwoColumnSlide'

export default function HonestLimit({ slideNumber }) {
  return (
    <TwoColumnSlide
      eyebrow="The honest limit"
      title="The cost of AI isn't tokens. It's review."
      accent="gold"
      slideNumber={slideNumber}
      paragraph="If you can't verify the output cheaply, the automation isn't cheaper than a human. It's a human plus a subscription."
      points={[
        'Design the check before the draft',
        'Make the output a shape you can test, not prose you have to read',
        'Log every run',
      ]}
      cardTitle="What this buys you"
      cardItems={[
        "A client can't audit a vibe",
        'A client can audit a log',
        '"Here is exactly what ran on your tenant and when" is a trust argument, a margin argument, and a legal argument.',
      ]}
    />
  )
}
