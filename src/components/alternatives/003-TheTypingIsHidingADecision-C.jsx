import Footer from '../chrome/Footer'

// Stage: navy full bleed, the three lines in white, the conclusion in a
// full width orange band.
export default function TheTypingIsHidingADecisionC({ slideNumber }) {
  return (
    <div className="relative h-full w-full overflow-hidden bg-rff-navy">
      <p
        className="absolute font-bold uppercase tracking-[0.12em] text-rff-orange"
        style={{ left: 106, top: 48, fontSize: 27 }}
      >
        What they decide all day
      </p>

      <p
        className="absolute font-bold text-white"
        style={{ left: 106, top: 208, width: 1708, fontSize: 84, lineHeight: 1.4, letterSpacing: '-0.02em' }}
      >
        <span className="block">Which alert is noise.</span>
        <span className="block">Which client wants the details.</span>
        <span className="block">Which ticket gets a phone call.</span>
      </p>

      <div className="absolute bg-rff-orange" style={{ left: 0, top: 690, width: 1920, height: 156 }} />
      <p
        className="absolute font-bold text-rff-navy"
        style={{ left: 106, top: 733, width: 1708, fontSize: 62, letterSpacing: '-0.02em', whiteSpace: 'nowrap' }}
      >
        Those are decisions, and they are not in any document.
      </p>

      <Footer slideNumber={slideNumber} light />
    </div>
  )
}
