import LabeledRows from '../layouts/LabeledRows'

export default function WeHaveAProcess({ slideNumber }) {
  return (
    <LabeledRows
      eyebrow="Same habit, bigger scale"
      title="What we have a process usually means"
      accent="orange"
      slideNumber={slideNumber}
      rows={[
        { term: 'We have a process', definition: 'We have a person we abdicated to.' },
        { term: 'It broke on the first exception', definition: 'Nobody ever said what the exception was.' },
        { term: 'Three techs, three ways', definition: 'Your first automation is your first honest audit.' },
        { term: 'The question', definition: 'When did you last watch your best tech do it?' },
      ]}
      closing="Hire for the exception. Automate the rule."
    />
  )
}
