import ContentFrame from '../chrome/ContentFrame'
import { askPrompt, askOutputHeadings } from '../../data/demo.js'

// C. Stage. What was asked stays on white; the five things it wanted are on
// navy at the size the back row needs, each one against an accent bar. Same
// words as the original slide.
const lines = askOutputHeadings.split('\n')
const opener = lines[0]
const items = lines.slice(2).map((line) => {
  const at = line.indexOf(' ')
  return { marker: line.slice(0, at), text: line.slice(at + 1).replace(/\*\*/g, '') }
})

export default function DemoAskC({ slideNumber }) {
  return (
    <ContentFrame
      eyebrow="How to get unstuck"
      title="Ask it how to ask better"
      accent="blue"
      slideNumber={slideNumber}
    >
      <div className="absolute bg-rff-navy" style={{ left: 940, top: 190, width: 980, height: 722 }} />

      <p
        className="absolute text-rff-body"
        style={{ left: 106, top: 250, width: 760, fontSize: 40, lineHeight: 1.35 }}
      >
        {askPrompt}
      </p>

      <p
        className="absolute text-rff-muted-dark"
        style={{ left: 996, top: 240, width: 818, fontSize: 34, lineHeight: 1.3 }}
      >
        {opener}
      </p>

      <div className="absolute flex flex-col gap-[26px]" style={{ left: 996, top: 320, width: 818 }}>
        {items.map((item) => (
          <div key={item.marker} className="flex gap-[26px]">
            <div className="w-[8px] shrink-0 self-stretch bg-rff-blue" />
            <p className="font-bold text-white" style={{ fontSize: 38, lineHeight: 1.3 }}>
              <span className="text-rff-light-text">{item.marker} </span>
              {item.text}
            </p>
          </div>
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
