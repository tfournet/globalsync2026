// PLACEHOLDER: session copy for the Global Sync Meetup NYC talk, not final.
import AgendaSlide from '../layouts/AgendaSlide'

export default function Agenda({ slideNumber }) {
  return (
    <AgendaSlide
      eyebrow="Agenda"
      title="What This Session Covers"
      accent="blue"
      slideNumber={slideNumber}
      items={[
        { number: '01', title: 'Where headcount hides', description: 'The delivery tasks quietly absorbing your best technicians.' },
        { number: '02', title: 'The two breaks', description: 'Why people and margin fail first, and in that order.' },
        { number: '03', title: 'Automate the middle', description: 'Turning repeatable steps into owned, documented workflows.' },
        { number: '04', title: 'Standardize before you hire', description: 'What must be true before adding a seat solves anything.' },
        { number: '05', title: 'Measure the deflection', description: 'The metric that proves the work actually moved.' },
        { number: '06', title: 'One action for Monday', description: 'A concrete first step to bring to Table 3.' },
      ]}
    />
  )
}
