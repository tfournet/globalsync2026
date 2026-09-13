import TwoColumnSlide from '../layouts/TwoColumnSlide'

// What Aharon's law means in this talk, shown on a shop, not on a prompt.
// The list was complete and followed; the meaning of one line was not.
export default function ExistsMeansSaidOutLoud({ slideNumber }) {
  return (
    <TwoColumnSlide
      eyebrow="What the law means here"
      title="The list was followed. The process still didn't exist."
      accent="orange"
      slideNumber={slideNumber}
      paragraph='"Cancel software licenses." Same words. Two meanings.'
      points={[
        'Mike meant Microsoft, Adobe, and two more',
        'The covering tech meant Microsoft',
        'Nine Adobe seats, billed for a year',
      ]}
      cardTitle="The cost, and the fix"
      cardItems={[
        'A senior tech who cannot take vacation',
        'Every departure handled twice',
        'One hour with Mike. Write down which licenses.',
      ]}
    />
  )
}
