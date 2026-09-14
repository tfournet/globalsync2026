import ContentFrame from '../chrome/ContentFrame'

// Editorial. Four numbered rows, one pair per row: what the vendor sells on
// the left in navy, what it actually buys on the right in orange, with an
// arrow between them. No bullets, no panels, hairline rules only.

const PAIRS = [
  ['An agent that answers the support line and opens the ticket.', 'A phone that does not ring.'],
  ["An agent in the client's Teams, first message to closed ticket.", 'A ticket that closes without a conversation.'],
  ['Password resets with no tech involved.', 'An end user we never have to talk to.'],
  ['The quarterly review generated from the data.', 'A review meeting we do not have to sit in.'],
]

const LEFT = 106
const WIDTH = 1708
const NUM_W = 74
const ARROW_W = 108
const LEFT_W = 796
const RIGHT_W = WIDTH - NUM_W - ARROW_W - LEFT_W
const TOP = 300
const ROW_H = 126

function Arrow() {
  return (
    <svg width="84" height="22" viewBox="0 0 84 22" fill="none" aria-hidden="true">
      <path d="M0 11 H70" stroke="#FF5219" strokeWidth="5" />
      <path d="M63 3 L79 11 L63 19" stroke="#FF5219" strokeWidth="5" fill="none" />
    </svg>
  )
}

export default function TheWrongThingsA({ slideNumber }) {
  return (
    <ContentFrame
      eyebrow="Where the machinery goes"
      title="I keep seeing MSPs try to automate the wrong side of operations"
      accent="orange"
      slideNumber={slideNumber}
    >
      <div className="absolute" style={{ left: LEFT, top: TOP, width: WIDTH }}>
        <div className="flex items-end" style={{ height: 52 }}>
          <div style={{ width: NUM_W }} />
          <p
            className="text-[26px] font-bold uppercase tracking-[0.12em] text-rff-muted"
            style={{ width: LEFT_W }}
          >
            What is sold to answer the customer
          </p>
          <div style={{ width: ARROW_W }} />
          <p
            className="text-[26px] font-bold uppercase tracking-[0.12em] text-rff-orange"
            style={{ width: RIGHT_W }}
          >
            What we are actually buying
          </p>
        </div>

        {PAIRS.map(([sold, bought], i) => (
          <div key={sold} className="flex items-center border-t-[2px] border-rff-gray-line" style={{ height: ROW_H }}>
            <p className="text-[34px] font-bold text-rff-muted-dark" style={{ width: NUM_W }}>
              {i + 1}
            </p>
            <p className="text-[33px] leading-[1.28] text-rff-navy" style={{ width: LEFT_W, paddingRight: 32 }}>
              {sold}
            </p>
            <div className="flex justify-center" style={{ width: ARROW_W }}>
              <Arrow />
            </div>
            <p
              className="text-[34px] font-bold leading-[1.28] text-rff-orange"
              style={{ width: RIGHT_W, paddingLeft: 8 }}
            >
              {bought}
            </p>
          </div>
        ))}
        <div className="border-t-[2px] border-rff-gray-line" />
      </div>

      <p
        className="absolute text-center text-[33px] font-bold text-rff-navy"
        style={{ left: LEFT, top: 916, width: WIDTH }}
      >
        Automate to give time back to the customer, not to hide from them.
      </p>
    </ContentFrame>
  )
}
