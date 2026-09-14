import ContentFrame from '../chrome/ContentFrame'
import { weakPrompt } from '../../data/demo.js'

// C. Stage. The whole prompt on a navy panel for the back of the room: the
// typed line behind an accent bar, then the paste below the blue rule. Same
// lines, same window as the original slide (line 0, then lines 2 to 13).
const lines = weakPrompt.split('\n')
const typed = lines[0]
const ticketTitle = lines[2]
const meta = lines.slice(3, 9)
const timeline = lines.slice(10, 14)

const PASTE = '<pasted from the PSA>'

export default function DemoWeakC({ slideNumber }) {
  return (
    <ContentFrame
      eyebrow="One sentence and a paste"
      title="How most people prompt"
      accent="blue"
      slideNumber={slideNumber}
    >
      <div className="absolute bg-rff-navy" style={{ left: 0, top: 196, width: 1920, height: 772 }} />

      <div className="absolute bg-rff-blue" style={{ left: 106, top: 238, width: 12, height: 60 }} />
      <p
        className="absolute text-white"
        style={{ left: 146, top: 236, width: 1668, fontSize: 40, lineHeight: 1.3 }}
      >
        {typed}
      </p>

      <div className="absolute bg-rff-blue" style={{ left: 106, top: 332, width: 1708, height: 3 }} />
      <p className="absolute text-rff-muted-dark" style={{ left: 106, top: 356, fontSize: 30 }}>
        {PASTE}
      </p>

      <p
        className="absolute font-bold text-white"
        style={{ left: 106, top: 412, width: 1708, fontSize: 36, lineHeight: 1.2 }}
      >
        {ticketTitle}
      </p>

      <div
        className="absolute leading-[1.3] text-rff-light-text"
        style={{ left: 106, top: 482, width: 560, fontSize: 34 }}
      >
        {meta.map((line) => (
          <p key={line}>{line}</p>
        ))}
      </div>

      <div
        className="absolute leading-[1.3] text-rff-light-text"
        style={{ left: 730, top: 482, width: 1084, fontSize: 34 }}
      >
        {timeline.map((line, i) => (
          <p key={line} className={i === 0 ? '' : 'mt-[0.45em]'}>
            {line}
          </p>
        ))}
      </div>
    </ContentFrame>
  )
}
