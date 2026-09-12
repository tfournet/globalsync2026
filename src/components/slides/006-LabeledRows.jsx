// PLACEHOLDER: session copy for the Global Sync Meetup NYC talk, not final.
import LabeledRows from '../layouts/LabeledRows'

export default function Labeled({ slideNumber }) {
  return (
    <LabeledRows
      eyebrow="Definitions"
      title="Terms Worth Aligning On Before Table 3"
      accent="blue"
      slideNumber={slideNumber}
      rows={[
        { term: 'Runbook', definition: 'The single documented way a recurring request gets handled, reviewed on a cadence.' },
        { term: 'Automation coverage', definition: 'The share of ticket volume that never requires a human step to close.' },
        { term: 'Escalation path', definition: 'The named handoff that fires when a workflow hits a condition it cannot resolve.' },
        { term: 'Review cadence', definition: 'The fixed interval where coverage, owners, and exceptions get re-examined.' },
      ]}
    />
  )
}
