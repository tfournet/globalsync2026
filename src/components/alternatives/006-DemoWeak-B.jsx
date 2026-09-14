import ContentFrame from '../chrome/ContentFrame'
import { weakPrompt } from '../../data/demo.js'

// B. Artifacts. The real object: a chat composer with one typed line and the
// ticket attached to it, drawn as the PSA card it came from. Same lines, same
// window as the original slide (line 0, then lines 2 to 13).
const lines = weakPrompt.split('\n')
const typed = lines[0]
const ticketTitle = lines[2]
const meta = lines.slice(3, 9)
const timeline = lines.slice(10, 14)

const PASTE = '<pasted from the PSA>'

const CARD = 142
const INNER = 174
const ROW1 = [0, 330, 620]
const ROW2 = [0, 560, 900]

function Clip() {
  return (
    <svg width="30" height="30" viewBox="0 0 24 24" aria-hidden="true" className="shrink-0">
      <path
        d="M16.5 6.5 L8 15a3 3 0 1 0 4.2 4.2l8.3-8.3a5 5 0 1 0-7-7L5 12.5"
        fill="none"
        stroke="#2A3AED"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  )
}

function MetaRow({ top, cells, offsets }) {
  return cells.map((line, i) => (
    <p
      key={line}
      className="absolute text-rff-body"
      style={{ left: INNER + offsets[i], top, fontSize: 34, lineHeight: 1.3 }}
    >
      {line}
    </p>
  ))
}

export default function DemoWeakB({ slideNumber }) {
  return (
    <ContentFrame
      eyebrow="One sentence and a paste"
      title="How most people prompt"
      accent="blue"
      slideNumber={slideNumber}
    >
      {/* The composer */}
      <div
        className="absolute rounded-[4px] border-[3px] border-rff-gray-line bg-white"
        style={{ left: 106, top: 200, width: 1708, height: 768 }}
      />
      <div className="absolute bg-rff-blue" style={{ left: 148, top: 236, width: 6, height: 46 }} />
      <p
        className="absolute text-rff-body"
        style={{ left: 176, top: 232, width: 1590, fontSize: 36, lineHeight: 1.3 }}
      >
        {typed}
      </p>

      {/* The attachment */}
      <div
        className="absolute flex items-center gap-[16px] rounded-[4px] border-2 border-rff-gray-line bg-rff-light"
        style={{ left: CARD, top: 304, height: 60, padding: '0 24px' }}
      >
        <Clip />
        <span className="text-rff-muted" style={{ fontSize: 30 }}>
          {PASTE}
        </span>
      </div>

      {/* The ticket it came from */}
      <div
        className="absolute rounded-[4px] bg-rff-light"
        style={{ left: CARD, top: 386, width: 1636, height: 546 }}
      />
      <p
        className="absolute font-bold text-rff-navy"
        style={{ left: INNER, top: 416, width: 1572, fontSize: 34, lineHeight: 1.3 }}
      >
        {ticketTitle}
      </p>
      <div className="absolute bg-rff-gray-line" style={{ left: INNER, top: 474, width: 1572, height: 2 }} />
      <MetaRow top={492} cells={meta.slice(0, 3)} offsets={ROW1} />
      <MetaRow top={540} cells={meta.slice(3, 6)} offsets={ROW2} />
      <div className="absolute bg-rff-gray-line" style={{ left: INNER, top: 598, width: 1572, height: 2 }} />

      <div className="absolute flex gap-[21px]" style={{ left: INNER, top: 616, width: 1572 }}>
        <p className="text-rff-body" style={{ width: 620, fontSize: 34, lineHeight: 1.3 }}>
          {timeline[0]}
        </p>
        <p className="text-rff-body" style={{ width: 520, fontSize: 34, lineHeight: 1.3 }}>
          {timeline[1]}
        </p>
        <div style={{ width: 390 }}>
          <p className="text-rff-body" style={{ fontSize: 34, lineHeight: 1.3 }}>
            {timeline[2]}
          </p>
          <p className="mt-[0.45em] text-rff-body" style={{ fontSize: 34, lineHeight: 1.3 }}>
            {timeline[3]}
          </p>
        </div>
      </div>
    </ContentFrame>
  )
}
