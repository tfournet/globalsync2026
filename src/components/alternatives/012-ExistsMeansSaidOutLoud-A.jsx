import ContentFrame from '../chrome/ContentFrame'

// Editorial. The list runs down the left margin in small type with the invoice
// under it, and the one line everybody read differently is set at 100px on the
// right, with the two readings under it as footnotes. Order on the page is the
// order of the story: the list was worked, the bill arrived, then what the line
// had meant all along.

const STEPS = [
  'Disable the account',
  'Forward the mailbox',
  'Collect the laptop',
  'Cancel software licenses',
  'Remove from distribution lists',
  'Close the ticket',
]
const HIGHLIGHT = 3

const L = 106
const LW = 760
const R = 960
const RW = 854

function Rule({ left, top, width }) {
  return <div className="absolute bg-rff-gray-line" style={{ left, top, width, height: 2 }} />
}

export default function ExistsMeansSaidOutLoudEditorial({ slideNumber }) {
  return (
    <ContentFrame
      eyebrow="What the law means here"
      title="A client's employee leaves while Mike is on vacation"
      accent="orange"
      slideNumber={slideNumber}
    >
      {/* The list, worked start to finish */}
      <p
        className="absolute text-[26px] font-bold uppercase tracking-[0.12em] text-rff-muted"
        style={{ left: L, top: 252 }}
      >
        Checklist: employee departure
      </p>
      <p className="absolute text-[30px] text-rff-muted" style={{ left: L, top: 292 }}>
        Owner: Mike
      </p>
      {STEPS.map((step, i) => {
        const top = 352 + i * 56
        const hot = i === HIGHLIGHT
        return (
          <div key={step}>
            <Rule left={L} top={top} width={LW} />
            <p
              className={`absolute text-[32px] ${hot ? 'font-bold text-rff-orange' : 'text-rff-body'}`}
              style={{ left: L, top: top + 12, width: LW }}
            >
              {step}
            </p>
          </div>
        )
      })}
      <Rule left={L} top={352 + STEPS.length * 56} width={LW} />

      {/* A year later, the bill */}
      <p
        className="absolute text-[26px] font-bold uppercase tracking-[0.12em] text-rff-muted"
        style={{ left: L, top: 762 }}
      >
        Invoice, twelve months later
      </p>
      <Rule left={L} top={806} width={LW} />
      <div
        className="absolute flex items-baseline justify-between"
        style={{ left: L, top: 822, width: LW }}
      >
        <span className="text-[36px] text-rff-body">Adobe Creative Cloud</span>
        <span className="text-[36px] font-bold text-rff-navy">9 seats</span>
      </div>
      <Rule left={L} top={886} width={LW} />

      {/* What the line meant */}
      <p
        className="absolute font-bold text-rff-orange"
        style={{ left: R, top: 268, width: RW, fontSize: 100, lineHeight: 1.02 }}
      >
        Cancel software licenses
      </p>

      <Rule left={R} top={540} width={RW} />
      <p
        className="absolute text-[26px] font-bold uppercase tracking-[0.12em] text-rff-orange"
        style={{ left: R, top: 562 }}
      >
        That line means
      </p>

      <p className="absolute text-[28px] text-rff-muted" style={{ left: R, top: 620, width: RW }}>
        To whoever covers for him
      </p>
      <p
        className="absolute text-[42px] font-bold leading-[1.15] text-rff-navy"
        style={{ left: R, top: 660, width: RW }}
      >
        Microsoft 365
      </p>

      <p className="absolute text-[28px] text-rff-muted" style={{ left: R, top: 752, width: RW }}>
        To Mike
      </p>
      <p
        className="absolute text-[42px] font-bold leading-[1.15] text-rff-navy"
        style={{ left: R, top: 792, width: RW }}
      >
        Microsoft 365, Adobe, and the two tools he set up for that client
      </p>
    </ContentFrame>
  )
}
