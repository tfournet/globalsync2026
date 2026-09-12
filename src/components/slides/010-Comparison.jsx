// PLACEHOLDER: session copy for the Global Sync Meetup NYC talk, not final.
import ComparisonSlide from '../layouts/ComparisonSlide'

export default function Comparison({ slideNumber }) {
  return (
    <ComparisonSlide
      eyebrow="Current State vs Target State"
      title="Ticket Handling, Before and After"
      accent="blue"
      slideNumber={slideNumber}
      left={{
        heading: 'Current State',
        items: [
          'Every request triaged by a live technician',
          'Standards live in individual memory',
          'Coverage measured only when something breaks',
          'Hiring is the default response to growth',
        ],
      }}
      right={{
        heading: 'Target State',
        items: [
          'Common requests triaged and executed by workflow',
          'Standards published, versioned, and owned',
          'Coverage measured on a fixed cadence',
          'Hiring is reserved for judgment work',
        ],
      }}
    />
  )
}
