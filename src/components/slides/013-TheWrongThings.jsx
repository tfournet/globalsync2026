import ComparisonSlide from '../layouts/ComparisonSlide'

// Tim's honest take: automation gets pointed at the customer because, deep
// down, we would rather not have the conversation. Left: what is actually
// being sold to MSPs in 2026 to stand between them and the customer
// (generalized from vendor pitches, see the 14 Sep research in the session
// notes; no brand names). Right: the reason, said in "we". Footer: his line.
export default function TheWrongThings({ slideNumber }) {
  return (
    <ComparisonSlide
      eyebrow="Where the machinery goes"
      title="I keep seeing MSPs try to automate the wrong side of operations"
      accent="orange"
      slideNumber={slideNumber}
      top={330}
      bottom={878}
      fontSize={36}
      itemGap={22}
      aligned
      left={{
        heading: 'What is sold to answer the customer',
        items: [
          'An agent that answers the support line and opens the ticket.',
          'An agent in the client\'s Teams, first message to closed ticket.',
          'Password resets with no tech involved.',
          'The quarterly review generated from the data.',
        ],
      }}
      right={{
        heading: 'What we are actually buying',
        items: [
          'A phone that does not ring.',
          'A ticket that closes without a conversation.',
          'An end user we never have to talk to.',
          'A review meeting we do not have to sit in.',
        ],
      }}
      closing="Automate to give time back to the customer, not to hide from them."
    />
  )
}
