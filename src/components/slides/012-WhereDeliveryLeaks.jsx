import AgendaSlide from '../layouts/AgendaSlide'

// The automaton work, by name. Each line is the definition of done that has to
// exist before the process can be automated. Seed list for Table 3.
export default function WhereDeliveryLeaks({ slideNumber }) {
  return (
    <AgendaSlide
      eyebrow="Where the automaton work hides"
      title="Six processes, one sentence each"
      accent="orange"
      slideNumber={slideNumber}
      items={[
        { number: '01', title: 'New user onboarding', description: "So the client's first day works" },
        { number: '02', title: 'Offboarding', description: 'So nothing is left open' },
        { number: '03', title: 'Alert triage', description: 'So a human only sees what needs one' },
        { number: '04', title: 'Access requests', description: 'So the identity check actually happens' },
        { number: '05', title: 'Client status updates', description: 'So they hear it from you first' },
        { number: '06', title: 'License reconciliation', description: 'So you stop paying for ghosts' },
      ]}
    />
  )
}
