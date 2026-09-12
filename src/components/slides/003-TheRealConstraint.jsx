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
          definition: 'Copied last time. Nobody said last time was wrong.',
        },
        {
          term: 'The escalation',
          definition: 'Bounced three times. Everyone guessed.',
        },
        {
          term: 'The angry client',
          definition: 'They heard Tuesday. You meant Thursday. Both were clear.',
        },
        {
          term: 'The owner',
          definition: 'You know what done looks like. It lives in your head.',
        },
      ]}
      closing="Every lost hour goes to someone who was not told what done looks like."
    />
  )
}
