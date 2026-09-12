// PLACEHOLDER: session copy for the Global Sync Meetup NYC talk, not final.
import ThreeUpGrid from '../layouts/ThreeUpGrid'

export default function ThreeUp({ slideNumber }) {
  return (
    <ThreeUpGrid
      eyebrow="Delivery Model"
      title="Three Moves That Buy Back Capacity"
      accent="orange"
      slideNumber={slideNumber}
      cards={[
        { title: 'Standardize the request', body: 'One documented path per recurring ticket type, versioned and owned.' },
        { title: 'Automate the middle', body: 'Let a workflow gather context and execute the repeatable steps.' },
        { title: 'Review the exceptions', body: 'Technicians spend their time on the tickets that actually need judgment.' },
      ]}
    />
  )
}
