import ContentFrame from '../chrome/ContentFrame'

// Artifacts. The two documents this story actually leaves behind: a closed
// task list with every box ticked, and the bill that turns up a year later.
// The reading order is the order it happened, and the orange edge ties the
// line that was followed to the charge it produced.

const STEPS = [
  'Disable the account',
  'Forward the mailbox',
  'Collect the laptop',
  'Cancel software licenses',
  'Remove from distribution lists',
  'Close the ticket',
]
const HIGHLIGHT = 3

const META = [
  ['Owner', 'Mike'],
  ['Completed', '6 of 6'],
]

const L = 106
const LW = 820
const R = 966
const RW = 848

function Check({ hot }) {
  return (
    <svg width="36" height="36" viewBox="0 0 40 40" className="shrink-0" aria-hidden="true">
      <rect x="2" y="2" width="36" height="36" rx="6" fill="none" stroke={hot ? '#FF5219' : '#A9AEB8'} strokeWidth="3" />
      <path
        d="M10 21 L17 28 L30 13"
        fill="none"
        stroke={hot ? '#FF5219' : '#5F6570'}
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
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
      {/* The task list, closed */}
      <div
        className="absolute rounded-[4px] bg-rff-light"
        style={{ left: L, top: 248, width: LW, padding: '32px 40px 36px' }}
      >
        <p className="text-[26px] font-bold uppercase tracking-[0.12em] text-rff-muted">
          Checklist: employee departure
        </p>
        <div className="mt-[18px]">
          {META.map(([label, value]) => (
            <div key={label} className="flex items-baseline" style={{ height: 40 }}>
              <span className="w-[220px] shrink-0 text-[26px] font-bold uppercase tracking-[0.12em] text-rff-muted">
                {label}
              </span>
              <span className="text-[30px] text-rff-body">{value}</span>
            </div>
          ))}
        </div>
        <div className="mt-[18px] mb-[22px] h-[2px] w-full bg-rff-gray-line" />
        <ul>
          {STEPS.map((step, i) => {
            const hot = i === HIGHLIGHT
            return (
              <li key={step} className="flex items-center gap-[20px]" style={{ marginTop: i === 0 ? 0 : 22 }}>
                <Check hot={hot} />
                <span className={hot ? 'text-[36px] font-bold text-rff-orange' : 'text-[34px] text-rff-body'}>
                  {step}
                </span>
              </li>
            )
          })}
        </ul>
      </div>

      {/* The bill */}
      <div
        className="absolute overflow-hidden rounded-[4px] border-[3px] border-rff-gray-line bg-white"
        style={{ left: R, top: 248, width: RW }}
      >
        <div className="absolute left-0 top-0 h-full w-[10px] bg-rff-orange" />
        <div style={{ padding: '28px 36px 30px 46px' }}>
          <p className="text-[26px] font-bold uppercase tracking-[0.12em] text-rff-muted">
            Invoice, twelve months later
          </p>
          <div className="mt-[20px] h-[2px] w-full bg-rff-gray-line" />
          <div className="mt-[22px] flex items-baseline justify-between">
            <span className="text-[38px] text-rff-body">Adobe Creative Cloud</span>
            <span className="text-[38px] font-bold text-rff-navy">9 seats</span>
          </div>
        </div>
      </div>

      {/* What the line meant */}
      <div className="absolute" style={{ left: R, top: 540, width: RW }}>
        <p className="text-[26px] font-bold uppercase tracking-[0.12em] text-rff-orange">That line means</p>
        <p className="mt-[30px] text-[28px] text-rff-muted">To whoever covers for him</p>
        <p className="mt-[6px] text-[40px] font-bold leading-[1.15] text-rff-navy">Microsoft 365</p>
        <p className="mt-[34px] text-[28px] text-rff-muted">To Mike</p>
        <p className="mt-[6px] text-[40px] font-bold leading-[1.15] text-rff-navy">
          Microsoft 365, Adobe, and the two tools he set up for that client
        </p>
      </div>
    </ContentFrame>
  )
}
