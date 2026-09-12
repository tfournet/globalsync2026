import LabeledRows from '../layouts/LabeledRows'

export default function WeHaveAProcess({ slideNumber }) {
  return (
    <LabeledRows
      eyebrow="We have a process"
      title="What that sentence usually means"
      accent="orange"
      slideNumber={slideNumber}
      rows={[
        {
          term: 'We have a process',
          definition: 'We have a person. It leaves when they do.',
        },
        {
          term: 'It broke on the first exception',
          definition: 'Nobody wrote the exception down.',
        },
        {
          term: 'Three techs, three ways',
          definition: 'Your first automation is your first honest audit.',
        },
        {
          term: 'The question',
          definition: 'When did you last watch your best tech do it?',
        },
      ]}
      closing="Hire for the exception. Automate the rule."
    />
  )
}
