import TwoColumnSlide from '../layouts/TwoColumnSlide'

// The growth beat. Full slide, not a card item. This is the "more" in the title.
export default function TheMore({ slideNumber }) {
  return (
    <TwoColumnSlide
      eyebrow="The more"
      title="Your customers have automatons too"
      accent="blue"
      slideNumber={slideNumber}
      paragraph="Automating your own shop is the starting line."
      points={[
        'Invoices, approvals, new hires, renewals',
        'Same screens, same retyping, same 4pm Tuesday',
        'Nobody is selling them the fix',
      ]}
      cardTitle="What you get back"
      cardItems={[
        'Hours to be present with them',
        'A case study they watched you build',
        'The next line on the invoice',
      ]}
    />
  )
}
