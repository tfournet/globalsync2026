import Eyebrow from '../chrome/Eyebrow'
import SlideTitle from '../chrome/SlideTitle'
import Footer from '../chrome/Footer'

// Stage. The whole list goes dark except the one line, which is the only thing
// in orange on the slide. The bill sits in white to the right, because that is
// the part the room remembers, and the two readings close it out.

const STEPS = [
  'Disable the account',
  'Forward the mailbox',
  'Collect the laptop',
  'Cancel software licenses',
  'Remove from distribution lists',
  'Close the ticket',
]
const HIGHLIGHT = 3

const BAND_TOP = 228
const BAND_HEIGHT = 740
const L = 170
const R = 1010
const RW = 804

export default function ExistsMeansSaidOutLoudStage({ slideNumber }) {
  return (
    <div className="relative h-full w-full bg-white">
      <Eyebrow accent="orange" className="absolute left-[106px] top-[48px]">
        What the law means here
      </Eyebrow>
      <SlideTitle className="absolute left-[106px] right-[106px] top-[96px]">
        A client&apos;s employee leaves while Mike is on vacation
      </SlideTitle>

      <div className="absolute left-0 bg-rff-navy" style={{ top: BAND_TOP, width: 1920, height: BAND_HEIGHT }} />

      {/* The list, one line lit */}
      <p
        className="absolute text-[26px] font-bold uppercase tracking-[0.12em] text-rff-muted-dark"
        style={{ left: L, top: 282 }}
      >
        Checklist: employee departure
      </p>
      <p className="absolute text-[30px] text-rff-muted-dark" style={{ left: L, top: 322 }}>
        Owner: Mike
      </p>
      {STEPS.map((step, i) => {
        const hot = i === HIGHLIGHT
        const top = 400 + i * 70
        return (
          <div key={step}>
            {hot && <div className="absolute bg-rff-orange" style={{ left: 106, top: top + 8, width: 14, height: 54 }} />}
            <p
              className={`absolute ${hot ? 'text-[46px] font-bold text-rff-orange' : 'text-[38px] text-rff-muted-dark opacity-70'}`}
              style={{ left: L, top, width: 760 }}
            >
              {step}
            </p>
          </div>
        )
      })}

      {/* A year later */}
      <p
        className="absolute text-[26px] font-bold uppercase tracking-[0.12em] text-rff-muted-dark"
        style={{ left: R, top: 282 }}
      >
        Invoice, twelve months later
      </p>
      <div className="absolute bg-white/25" style={{ left: R, top: 326, width: RW, height: 2 }} />
      <div className="absolute flex items-baseline justify-between" style={{ left: R, top: 350, width: RW }}>
        <span className="text-[44px] text-white">Adobe Creative Cloud</span>
        <span className="text-[44px] font-bold text-white">9 seats</span>
      </div>
      <div className="absolute bg-white/25" style={{ left: R, top: 428, width: RW, height: 2 }} />

      {/* What the line meant */}
      <p
        className="absolute text-[26px] font-bold uppercase tracking-[0.12em] text-rff-orange"
        style={{ left: R, top: 556 }}
      >
        That line means
      </p>
      <p className="absolute text-[28px] text-rff-muted-dark" style={{ left: R, top: 606, width: RW }}>
        To whoever covers for him
      </p>
      <p className="absolute text-[42px] font-bold leading-[1.15] text-white" style={{ left: R, top: 646, width: RW }}>
        Microsoft 365
      </p>
      <p className="absolute text-[28px] text-rff-muted-dark" style={{ left: R, top: 742, width: RW }}>
        To Mike
      </p>
      <p className="absolute text-[42px] font-bold leading-[1.15] text-white" style={{ left: R, top: 782, width: RW }}>
        Microsoft 365, Adobe, and the two tools he set up for that client
      </p>

      <Footer slideNumber={slideNumber} />
    </div>
  )
}
