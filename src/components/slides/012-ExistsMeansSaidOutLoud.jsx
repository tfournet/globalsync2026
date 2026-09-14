import ContentFrame from '../chrome/ContentFrame'

// What Aharon's law means in this talk, drawn instead of told: the checklist
// the room already has, every box ticked, one line read two ways, and the
// invoice line that finally surfaces it a year later.

const STEPS = [
  'Disable the account',
  'Forward the mailbox',
  'Collect the laptop',
  'Cancel software licenses',
  'Remove from distribution lists',
  'Close the ticket',
]
const HIGHLIGHT = 3

const TOP = 262

function Check({ accent }) {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" className="shrink-0" aria-hidden="true">
      <rect x="2" y="2" width="36" height="36" rx="6" fill="none" stroke={accent ? '#FF5219' : '#A9AEB8'} strokeWidth="3" />
      <path d="M10 21 L17 28 L30 13" fill="none" stroke={accent ? '#FF5219' : '#5F6570'} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default function ExistsMeansSaidOutLoud({ slideNumber }) {
  return (
    <ContentFrame
      eyebrow="What the law means here"
      title="A client's employee leaves while Mike is on vacation"
      accent="orange"
      slideNumber={slideNumber}
    >
      {/* The checklist */}
      <div
        className="absolute rounded-[4px] bg-rff-light"
        style={{ left: 106, top: TOP, width: 820, padding: '40px 48px 44px' }}
      >
        <p className="text-[26px] font-bold uppercase tracking-[0.12em] text-rff-muted">Checklist: employee departure</p>
        <p className="mt-[6px] text-[30px] text-rff-muted">Owner: Mike</p>
        <ul className="mt-[28px]">
          {STEPS.map((step, i) => {
            const hot = i === HIGHLIGHT
            return (
              <li key={step} className="flex items-center gap-[22px]" style={{ marginTop: i === 0 ? 0 : 18 }}>
                <Check accent={hot} />
                <span className={hot ? 'text-[40px] font-bold text-rff-orange' : 'text-[36px] text-rff-body'}>{step}</span>
              </li>
            )
          })}
        </ul>
      </div>

      {/* Two readings of the highlighted line */}
      <div className="absolute" style={{ left: 1010, top: TOP + 4, width: 804 }}>
        <p className="text-[26px] font-bold uppercase tracking-[0.12em] text-rff-orange">That line means</p>
        <p className="mt-[30px] text-[30px] text-rff-muted">To whoever covers for him</p>
        <p className="mt-[4px] text-[40px] font-bold leading-snug text-rff-navy">Microsoft 365</p>
        <p className="mt-[34px] text-[30px] text-rff-muted">To Mike</p>
        <p className="mt-[4px] text-[40px] font-bold leading-snug text-rff-navy">
          Microsoft 365, Adobe, and the two tools he set up for that client
        </p>
      </div>

      {/* The invoice line, a year later */}
      <div
        className="absolute rounded-[4px] border-[3px] border-rff-gray-line bg-white"
        style={{ left: 1010, top: 748, width: 804, padding: '28px 40px' }}
      >
        <p className="text-[26px] font-bold uppercase tracking-[0.12em] text-rff-muted">Invoice, twelve months later</p>
        <div className="mt-[14px] flex items-baseline justify-between">
          <span className="text-[38px] text-rff-body">Adobe Creative Cloud</span>
          <span className="text-[38px] font-bold text-rff-navy">9 seats</span>
        </div>
      </div>
    </ContentFrame>
  )
}
