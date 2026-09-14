import TwoColumnSlide from '../layouts/TwoColumnSlide'

// The growth beat, the customer audience of the three. The same communication
// problem lives inside every client, and the owner who just learned to write
// rules down is the one person they know who can do it for them.
export default function TheMore({ slideNumber }) {
  return (
    <TwoColumnSlide
      eyebrow="The more"
      title="Your customers have the same problem you do"
      accent="blue"
      slideNumber={slideNumber}
      paragraphSize={40}
      pointSize={34}
      cardSize={34}
      paragraph="They have a person the process lives in, and a month of work that only that person can do."
      points={[
        'Invoices that get retyped from one system into another.',
        'Approvals that wait on one manager\'s inbox.',
        'A month-end report built by hand from three spreadsheets.',
      ]}
      cardTitle="What you get for it"
      cardItems={[
        'Hours you spend in front of them instead of behind a screen.',
        'A story about your own operations they watched you live.',
        'A new revenue stream that solidifies your value to the customer.',
      ]}
    />
  )
}
