import ContentFrame from '../chrome/ContentFrame'
import { askPrompt, askOutputHeadings } from '../../data/demo.js'

// B. Artifacts. The same chat window, one turn later: what was typed back, and
// what came out of it. Same words as the original slide.
const lines = askOutputHeadings.split('\n')
const opener = lines[0]
const items = lines.slice(2).map((line) => {
  const at = line.indexOf(' ')
  return { marker: line.slice(0, at), text: line.slice(at + 1).replace(/\*\*/g, '') }
})

const LABEL = 'text-[26px] font-bold uppercase tracking-[0.12em] text-rff-muted'

export default function DemoAsk({ slideNumber }) {
  return (
    <ContentFrame
      eyebrow="How to get unstuck"
      title="Ask it how to ask better"
      accent="blue"
      slideNumber={slideNumber}
    >
      <p className={`absolute text-right ${LABEL}`} style={{ left: 414, top: 196, width: 1400 }}>
        You
      </p>
      <div
        className="absolute rounded-[8px] bg-rff-blue"
        style={{ left: 414, top: 230, width: 1400, padding: 32 }}
      >
        <p className="text-white" style={{ fontSize: 34, lineHeight: 1.3 }}>
          {askPrompt}
        </p>
      </div>

      <p className={`absolute ${LABEL}`} style={{ left: 106, top: 436 }}>
        The model
      </p>
      <div
        className="absolute rounded-[8px] border-[3px] border-rff-gray-line bg-rff-light"
        style={{ left: 106, top: 470, width: 1420, padding: 32 }}
      >
        <p className="text-rff-body" style={{ fontSize: 34, lineHeight: 1.3 }}>
          {opener}
        </p>
        {items.map((item, i) => (
          <p
            key={item.marker}
            className="font-bold text-rff-navy"
            style={{ fontSize: 38, lineHeight: 1.3, marginTop: i === 0 ? 22 : 12 }}
          >
            <span className="text-rff-blue">{item.marker} </span>
            {item.text}
          </p>
        ))}
      </div>

      <p
        className="absolute text-[33px] font-bold text-rff-navy"
        style={{ left: 106, top: 930, width: 1708 }}
      >
        Every one of those is a rule you already had in your head.
      </p>
    </ContentFrame>
  )
}
