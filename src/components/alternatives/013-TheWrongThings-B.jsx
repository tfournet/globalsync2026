import ContentFrame from '../chrome/ContentFrame'

// Artifacts. The pitch as an order form: four line items, and a second
// description column that says what each line actually delivers. The pairing
// is the row, the way an invoice pairs a line with its charge.

const PAIRS = [
  ['An agent that answers the support line and opens the ticket.', 'A phone that does not ring.'],
  ["An agent in the client's Teams, first message to closed ticket.", 'A ticket that closes without a conversation.'],
  ['Password resets with no tech involved.', 'An end user we never have to talk to.'],
  ['The quarterly review generated from the data.', 'A review meeting we do not have to sit in.'],
]

const LEFT = 106
const WIDTH = 1708
const CARD_TOP = 286
const CARD_H = 600
const PAD = 44
const ITEM_W = 96
const DESC_W = 760
const ROW_H = 114

export default function TheWrongThingsB({ slideNumber }) {
  const deliversW = WIDTH - PAD * 2 - ITEM_W - DESC_W

  return (
    <ContentFrame
      eyebrow="Where the machinery goes"
      title="I keep seeing MSPs try to automate the wrong side of operations"
      accent="orange"
      slideNumber={slideNumber}
    >
      <div
        className="absolute rounded-[4px] border-[3px] border-rff-gray-line bg-white"
        style={{ left: LEFT, top: CARD_TOP, width: WIDTH, height: CARD_H }}
      >
        <div
          className="flex items-center justify-between border-b-[3px] border-rff-gray-line bg-rff-light"
          style={{ height: 76, padding: `0 ${PAD}px` }}
        >
          <p className="text-[26px] font-bold uppercase tracking-[0.12em] text-rff-muted">Order form</p>
        </div>

        <div
          className="absolute bg-rff-gray-line"
          style={{ left: PAD + ITEM_W + DESC_W - 24, top: 76, width: 2, bottom: 24 }}
        />

        <div style={{ padding: `0 ${PAD}px` }}>
          <div className="flex items-end border-b-[3px] border-rff-navy" style={{ height: 66 }}>
            <p className="pb-[12px] text-[26px] font-bold uppercase tracking-[0.12em] text-rff-muted" style={{ width: ITEM_W }}>
              Item
            </p>
            <p className="pb-[12px] text-[26px] font-bold uppercase tracking-[0.12em] text-rff-navy" style={{ width: DESC_W }}>
              What is sold to answer the customer
            </p>
            <p className="pb-[12px] text-[26px] font-bold uppercase tracking-[0.12em] text-rff-orange" style={{ width: deliversW }}>
              What we are actually buying
            </p>
          </div>

          {PAIRS.map(([sold, bought], i) => (
            <div
              key={sold}
              className="flex items-center border-b-[2px] border-dotted border-rff-gray-line last:border-b-0"
              style={{ height: ROW_H }}
            >
              <p className="text-[30px] font-bold text-rff-muted-dark" style={{ width: ITEM_W }}>
                {String(i + 1).padStart(2, '0')}
              </p>
              <p className="text-[32px] leading-[1.25] text-rff-navy" style={{ width: DESC_W, paddingRight: 40 }}>
                {sold}
              </p>
              <p className="text-[32px] font-bold leading-[1.25] text-rff-orange" style={{ width: deliversW }}>
                {bought}
              </p>
            </div>
          ))}
        </div>
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
