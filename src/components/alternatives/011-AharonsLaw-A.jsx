import TriColorBar from '../chrome/TriColorBar'

// Editorial. A magazine opener: one 420px quotation mark in gold, the law set
// large against it, and nothing else on the page.

const STATEMENT = "You can't automate a process that doesn't exist."

export default function AharonsLawA() {
  return (
    <div className="relative h-full w-full bg-white">
      <p
        className="absolute select-none text-[760px] font-bold leading-none text-rff-gold"
        style={{ left: 76, top: 214 }}
        aria-hidden="true"
      >
        {'“'}
      </p>

      <p
        className="absolute text-[29px] font-bold uppercase tracking-[0.15em] text-rff-navy"
        style={{ left: 600, top: 300 }}
      >
        Aharon's first law of automation
      </p>
      <TriColorBar className="absolute" style={{ left: 600, top: 356 }} width={300} />

      <p
        className="absolute text-[96px] font-bold leading-[1.12] text-rff-navy"
        style={{ left: 600, top: 434, width: 1214 }}
      >
        {STATEMENT}
      </p>

      <div className="absolute bg-rff-gray-line" style={{ left: 600, top: 744, width: 520, height: 2 }} />
      <p className="absolute text-[32px] text-rff-muted" style={{ left: 600, top: 780 }}>
        Aharon Chernin, Rewst
      </p>
    </div>
  )
}
