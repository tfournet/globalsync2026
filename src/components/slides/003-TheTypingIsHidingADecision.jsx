import Eyebrow from '../chrome/Eyebrow'
import Footer from '../chrome/Footer'

export default function TheTypingIsHidingADecision({ slideNumber }) {
  return (
    <div className="relative h-full w-full bg-white">
      <Eyebrow accent="orange" className="absolute left-[106px] top-[48px]">
        Why the rule never got written
      </Eyebrow>
      <p
        className="absolute font-bold text-rff-navy"
        style={{ left: 106, top: 220, width: 1708, fontSize: 72, lineHeight: 1.3, letterSpacing: '-0.02em' }}
      >
        <span className="block">Which alert is noise.</span>
        <span className="block">Which client gets the short version.</span>
        <span className="block">Which ticket gets a phone call.</span>
      </p>
      <p
        className="absolute font-bold text-rff-orange"
        style={{ left: 106, top: 620, width: 1708, fontSize: 72, lineHeight: 1.2, letterSpacing: '-0.02em' }}
      >
        Your best tech decides that all day. Nobody has ever asked them how.
      </p>
      <Footer slideNumber={slideNumber} />
    </div>
  )
}
