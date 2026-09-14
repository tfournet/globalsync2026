import ContentFrame from '../chrome/ContentFrame'
import { weakPrompt } from '../../data/demo.js'

// A. Editorial. The one sentence is display type next to an oversized numeral,
// hairline rules split the page, and the pasted ticket is regrouped: a narrow
// rail of ticket fields against the wide measure of the tech's notes. Same
// lines, same window as the original slide (line 0, then lines 2 to 13).
const lines = weakPrompt.split('\n')
const typed = lines[0]
const ticketTitle = lines[2]
const meta = lines.slice(3, 9)
const timeline = lines.slice(10, 14)

const PASTE = '<pasted from the PSA>'

function Rule({ top, left = 106, width = 1708 }) {
  return <div className="absolute bg-rff-gray-line" style={{ left, top, width, height: 2 }} />
}

export default function DemoWeakA({ slideNumber }) {
  return (
    <ContentFrame
      eyebrow="One sentence and a paste"
      title="How most people prompt"
      accent="blue"
      slideNumber={slideNumber}
    >
      <Rule top={210} />

      <p
        className="absolute text-center font-bold text-rff-blue"
        style={{ left: 106, top: 216, width: 150, fontSize: 170, lineHeight: 1 }}
      >
        1
      </p>
      <p
        className="absolute text-rff-navy"
        style={{ left: 286, top: 246, width: 1528, fontSize: 44, lineHeight: 1.25 }}
      >
        {typed}
      </p>

      <Rule top={410} />
      <p className="absolute text-rff-muted" style={{ left: 106, top: 430, fontSize: 30 }}>
        {PASTE}
      </p>

      <p
        className="absolute font-bold text-rff-navy"
        style={{ left: 106, top: 484, width: 1708, fontSize: 38, lineHeight: 1.2 }}
      >
        {ticketTitle}
      </p>

      <div className="absolute bg-rff-gray-line" style={{ left: 666, top: 556, width: 2, height: 404 }} />

      <div
        className="absolute leading-[1.3] text-rff-body"
        style={{ left: 106, top: 552, width: 560, fontSize: 34 }}
      >
        {meta.map((line) => (
          <p key={line}>{line}</p>
        ))}
      </div>

      <div
        className="absolute leading-[1.3] text-rff-body"
        style={{ left: 730, top: 552, width: 1084, fontSize: 34 }}
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
