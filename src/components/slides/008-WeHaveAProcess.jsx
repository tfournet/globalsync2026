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
          definition: 'We have a person, and the process leaves when they do.',
        },
        {
          term: 'It broke on the first exception',
          definition: 'Nobody wrote down the exception. The rule was never finished.',
        },
        {
          term: 'Three techs, three ways',
          definition: 'The first automation attempt is the first honest audit of the shop. That is the finding, not the failure.',
        },
        {
          term: 'The question',
          definition: 'When did you last watch your best tech do the thing you think you have a process for?',
        },
      ]}
      closing="Hire for the exception. Automate the rule."
    />
  )
}
