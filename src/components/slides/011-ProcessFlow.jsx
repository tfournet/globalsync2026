// PLACEHOLDER: session copy for the Global Sync Meetup NYC talk, not final.
import ProcessFlow from '../layouts/ProcessFlow'

export default function Process({ slideNumber }) {
  return (
    <ProcessFlow
      eyebrow="Delivery Model"
      title="Four Steps to Standardize Delivery"
      accent="orange"
      slideNumber={slideNumber}
      steps={[
        { title: 'Measure', description: 'Pull ticket volume by request type for the last quarter.' },
        { title: 'Document', description: 'Write the one approved path for each recurring request.' },
        { title: 'Automate', description: 'Build the workflow for the steps that do not need judgment.' },
        { title: 'Review', description: 'Re-check coverage and owners on a fixed cadence.' },
      ]}
      closing="Each step has one owner and one exit condition before the next step starts."
    />
  )
}
