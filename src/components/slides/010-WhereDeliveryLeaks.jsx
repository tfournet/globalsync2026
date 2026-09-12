import AgendaSlide from '../layouts/AgendaSlide'

// The tactical slide. Six recurring delivery processes and the one thing
// that has to be written down before any of them can be automated.
// Seed list for Table 3, Delivery and automation.
export default function WhereDeliveryLeaks({ slideNumber }) {
  return (
    <AgendaSlide
      eyebrow="Where delivery leaks first"
      title="Six processes, one sentence each"
      accent="orange"
      slideNumber={slideNumber}
      items={[
        { number: '01', title: 'New user onboarding', description: 'What done looks like, per client, per role' },
        { number: '02', title: 'Offboarding', description: 'The checklist, and who confirms it' },
        { number: '03', title: 'Alert triage', description: 'The rule for noise, and who owns the rest' },
        { number: '04', title: 'Access requests', description: 'The identity check you actually do' },
        { number: '05', title: 'Client status updates', description: 'Who gets told, when, in what words' },
        { number: '06', title: 'License reconciliation', description: 'The source of truth, and the tolerance' },
      ]}
    />
  )
}
