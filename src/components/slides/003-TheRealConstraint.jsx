import LabeledRows from '../layouts/LabeledRows'

// The thesis, before the word AI is spoken. Every row is a human-to-human
// failure the room has lived through this quarter.
export default function TheRealConstraint({ slideNumber }) {
  return (
    <LabeledRows
      eyebrow="The real constraint"
      title="Intent doesn't survive the handoff"
      accent="blue"
      slideNumber={slideNumber}
      rows={[
        {
          term: 'The redo',
          definition: 'Your tech onboarded the client the way it was done last time. Nobody told them last time was wrong.',
        },
        {
          term: 'The escalation',
          definition: 'The ticket bounced three times because each person guessed what the last one meant.',
        },
        {
          term: 'The angry client',
          definition: 'They expected Tuesday. Nobody said Thursday out loud. Both sides are certain they were clear.',
        },
        {
          term: 'The owner',
          definition: 'You know exactly what done looks like. It has never been written down anywhere but your head.',
        },
      ]}
      closing="Every lost hour goes to someone who was not told what done looks like. That is older than any tool."
    />
  )
}
