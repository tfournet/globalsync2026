import ContentFrame from '../chrome/ContentFrame'
import { askPrompt, askOutputHeadings } from '../../data/demo.js'

// A. Editorial. The follow-up runs full measure across the top, then an
// oversized numeral stands against the list it counts, one item to a rule.
// Same words as the original slide.
const lines = askOutputHeadings.split('\n')
const opener = lines[0]
const items = lines.slice(2).map((line) => {
  const at = line.indexOf(' ')
  return { marker: line.slice(0, at), text: line.slice(at + 1).replace(/\*\*/g, '') }
})

export default function DemoAskA({ slideNumber }) {
  return (
    <ContentFrame
      eyebrow="How to get unstuck"
      title="Ask it how to ask better"
      accent="blue"
      slideNumber={slideNumber}
    >
      <p
        className="absolute text-rff-body"
        style={{ left: 106, top: 218, width: 1708, fontSize: 40, lineHeight: 1.3 }}
      >
        {askPrompt}
      </p>

      <div className="absolute bg-rff-gray-line" style={{ left: 106, top: 400, width: 1708, height: 2 }} />

      <p
        className="absolute font-bold text-rff-blue"
        style={{ left: 106, top: 440, width: 300, fontSize: 240, lineHeight: 1 }}
      >
        5
      </p>

      <p className="absolute text-rff-muted" style={{ left: 460, top: 434, width: 1354, fontSize: 34 }}>
        {opener}
      </p>

      <div className="absolute" style={{ left: 460, top: 500, width: 1354 }}>
        {items.map((item, i) => (
          <p
            key={item.marker}
            className={
              i === 0
                ? 'font-bold text-rff-navy'
                : 'mt-[16px] border-t-2 border-rff-gray-line pt-[16px] font-bold text-rff-navy'
            }
            style={{ fontSize: 38, lineHeight: 1.3 }}
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
