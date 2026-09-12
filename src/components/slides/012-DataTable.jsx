// PLACEHOLDER: session copy for the Global Sync Meetup NYC talk, not final. Illustrative figures.
import DataTable from '../layouts/DataTable'

export default function Data({ slideNumber }) {
  return (
    <DataTable
      eyebrow="Scorecard View"
      title="Coverage by Request Type"
      accent="blue"
      slideNumber={slideNumber}
      columns={['Request Type', 'Coverage', 'Target', 'Owner']}
      rows={[
        ['Password reset', '91', '95', 'Service delivery'],
        ['Onboarding a new user', '64', '90', 'Service delivery'],
        ['Patch failure follow-up', '48', '85', 'Infrastructure'],
        ['Access request', '72', '90', 'Security lead'],
        ['Backup alert triage', '55', '90', 'Infrastructure'],
        ['Software install request', '80', '95', 'Service delivery'],
      ]}
      note="Coverage is the share of tickets of that type closed without a manual step. Replace with your own PSA export."
    />
  )
}
