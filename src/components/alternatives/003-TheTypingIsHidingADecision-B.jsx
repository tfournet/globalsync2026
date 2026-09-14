import Eyebrow from '../chrome/Eyebrow'
import Footer from '../chrome/Footer'

// Artifacts: the three decisions drawn as the three things on the screen
// when they get made. An alert, a client email, a ticket.
const CARDS = [
  { source: 'Monitoring alert', meta: '02:14', line: 'Which alert is noise.' },
  { source: 'Client email', meta: '09:06', line: 'Which client wants the details.' },
  { source: 'PSA ticket', meta: '#48120', line: 'Which ticket gets a phone call.' },
]

export default function TheTypingIsHidingADecisionB({ slideNumber }) {
  return (
    <div className="relative h-full w-full bg-white">
      <Eyebrow accent="orange" className="absolute left-[106px] top-[48px]">
        What they decide all day
      </Eyebrow>

      {CARDS.map((card, i) => (
        <div
          key={card.source}
          className="absolute rounded-[4px] border border-rff-gray-line bg-rff-light"
          style={{ left: 106 + i * 584, top: 180, width: 540, height: 380 }}
        >
          <div className="absolute bg-rff-orange" style={{ left: 40, top: 44, width: 18, height: 18 }} />
          <p
            className="absolute uppercase tracking-[0.12em] text-rff-muted"
            style={{ left: 74, top: 40, fontSize: 26 }}
          >
            {card.source}
          </p>
          <p
            className="absolute text-right text-rff-muted"
            style={{ left: 300, top: 40, width: 200, fontSize: 26 }}
          >
            {card.meta}
          </p>
          <div className="absolute bg-rff-gray-line" style={{ left: 40, top: 100, width: 460, height: 1 }} />
          <p
            className="absolute font-bold text-rff-navy"
            style={{ left: 40, bottom: 40, width: 460, fontSize: 50, lineHeight: 1.2, letterSpacing: '-0.02em' }}
          >
            {card.line}
          </p>
        </div>
      ))}

      <p
        className="absolute font-bold text-rff-orange"
        style={{ left: 106, top: 660, width: 1708, fontSize: 62, letterSpacing: '-0.02em', whiteSpace: 'nowrap' }}
      >
        Those are decisions, and they are not in any document.
      </p>

      <Footer slideNumber={slideNumber} />
    </div>
  )
}
