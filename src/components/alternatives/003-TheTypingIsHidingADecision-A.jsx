import Eyebrow from '../chrome/Eyebrow'
import Footer from '../chrome/Footer'

// Editorial: a contents page. One oversized numeral, three ruled entries,
// the conclusion under a heavy rule.
const DECISIONS = [
  'Which alert is noise.',
  'Which client wants the details.',
  'Which ticket gets a phone call.',
]

export default function TheTypingIsHidingADecisionA({ slideNumber }) {
  return (
    <div className="relative h-full w-full overflow-hidden bg-white">
      <Eyebrow accent="orange" className="absolute left-[106px] top-[48px]">
        What they decide all day
      </Eyebrow>

      <p
        className="absolute select-none font-bold text-rff-orange"
        style={{ left: 90, top: 156, fontSize: 540, lineHeight: 1, opacity: 0.13, letterSpacing: '-0.04em' }}
      >
        3
      </p>

      {DECISIONS.map((line, i) => (
        <div key={line}>
          <div
            className="absolute bg-rff-gray-line"
            style={{ left: 520, top: 200 + i * 168, width: 1294, height: 1 }}
          />
          <p
            className="absolute font-bold text-rff-navy"
            style={{ left: 520, top: 236 + i * 168, width: 1294, fontSize: 68, letterSpacing: '-0.02em' }}
          >
            {line}
          </p>
        </div>
      ))}
      <div className="absolute bg-rff-gray-line" style={{ left: 520, top: 704, width: 1294, height: 1 }} />

      <div className="absolute bg-rff-orange" style={{ left: 106, top: 806, width: 1708, height: 6 }} />
      <p
        className="absolute font-bold text-rff-orange"
        style={{ left: 106, top: 848, width: 1708, fontSize: 62, letterSpacing: '-0.02em', whiteSpace: 'nowrap' }}
      >
        Those are decisions, and they are not in any document.
      </p>

      <Footer slideNumber={slideNumber} />
    </div>
  )
}
