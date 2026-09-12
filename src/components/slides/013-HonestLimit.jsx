import TwoColumnSlide from '../layouts/TwoColumnSlide'

export default function HonestLimit({ slideNumber }) {
  return (
    <TwoColumnSlide
      eyebrow="The honest limit"
      title="The cost of AI isn't tokens. It's review."
      accent="gold"
      slideNumber={slideNumber}
      paragraph="If you can't check it cheaply, it's a human plus a subscription."
      points={[
        'Design the check before the draft',
        'Output a shape you can test',
        'Log every run',
      ]}
      cardTitle="What this buys you"
      cardItems={[
        "A client can't audit a vibe",
        'A client can audit a log',
        'Trust, margin, and legal in one artifact',
      ]}
    />
  )
}
