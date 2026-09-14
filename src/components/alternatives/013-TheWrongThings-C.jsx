import ContentFrame from '../chrome/ContentFrame'

// Stage. Four cards, two per row. Each card holds one pair: the thing being
// sold on top in navy on light, and directly beneath it, on a navy block with
// an orange rule, what that thing actually buys.

const PAIRS = [
  ['An agent that answers the support line and opens the ticket.', 'A phone that does not ring.'],
  ["An agent in the client's Teams, first message to closed ticket.", 'A ticket that closes without a conversation.'],
  ['Password resets with no tech involved.', 'An end user we never have to talk to.'],
  ['The quarterly review generated from the data.', 'A review meeting we do not have to sit in.'],
]

const LEFT = 106
const WIDTH = 1708
const GAP = 32
const CARD_W = (WIDTH - GAP) / 2
const TOP = 330
const CARD_H = 252
const SOLD_H = 126

export default function TheWrongThingsC({ slideNumber }) {
  return (
    <ContentFrame
      eyebrow="Where the machinery goes"
      title="I keep seeing MSPs try to automate the wrong side of operations"
      accent="orange"
      slideNumber={slideNumber}
    >
      <div className="absolute flex items-center justify-between" style={{ left: LEFT, top: 276, width: WIDTH }}>
        <div className="flex items-center gap-[18px]">
          <span className="block h-[26px] w-[26px] bg-rff-light" />
          <p className="text-[26px] font-bold uppercase tracking-[0.12em] text-rff-muted">
            What is sold to answer the customer
          </p>
        </div>
        <div className="flex items-center gap-[18px]">
          <span className="block h-[26px] w-[26px] bg-rff-navy" />
          <p className="text-[26px] font-bold uppercase tracking-[0.12em] text-rff-orange">
            What we are actually buying
          </p>
        </div>
      </div>

      <div
        className="absolute grid"
        style={{
          left: LEFT,
          top: TOP,
          width: WIDTH,
          gridTemplateColumns: `${CARD_W}px ${CARD_W}px`,
          columnGap: GAP,
          rowGap: GAP,
        }}
      >
        {PAIRS.map(([sold, bought], i) => (
          <div key={sold} className="overflow-hidden rounded-[4px]" style={{ height: CARD_H }}>
            <div
              className="flex items-center bg-rff-light"
              style={{ height: SOLD_H, padding: '0 36px 0 30px' }}
            >
              <span className="mr-[24px] text-[34px] font-bold text-rff-muted-dark">{i + 1}</span>
              <p className="text-[32px] leading-[1.25] text-rff-navy">{sold}</p>
            </div>
            <div
              className="flex items-center border-t-[6px] border-rff-orange bg-rff-navy"
              style={{ height: CARD_H - SOLD_H, padding: '0 36px 0 88px' }}
            >
              <p className="text-[33px] font-bold leading-[1.25] text-rff-orange">{bought}</p>
            </div>
          </div>
        ))}
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
