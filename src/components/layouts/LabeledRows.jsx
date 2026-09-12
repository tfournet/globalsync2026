import ContentFrame from '../chrome/ContentFrame'

const TERM_COLOR = ['text-rff-navy', 'text-rff-blue']
const ROW_BG = ['bg-rff-light', 'bg-white']
const TOP = 265
const BOTTOM = 940
const TERM_WIDTH = 640

// Rows share the content band equally so four short rows fill the slide
// instead of stacking at the top. Closing line sits inside the band.
export default function LabeledRows({ eyebrow, title, rows = [], closing, accent = 'blue', slideNumber }) {
  const closingSpace = closing ? 90 : 0
  const rowHeight = (BOTTOM - TOP - closingSpace) / Math.max(rows.length, 1)
  return (
    <ContentFrame eyebrow={eyebrow} title={title} accent={accent} slideNumber={slideNumber}>
      {rows.map((row, i) => (
        <div
          key={i}
          className={`absolute flex items-center px-[40px] ${ROW_BG[i % 2]}`}
          style={{ left: 106, right: 106, top: TOP + i * rowHeight, height: rowHeight }}
        >
          <p className={`text-[40px] font-bold ${TERM_COLOR[i % 2]}`} style={{ width: TERM_WIDTH, flexShrink: 0 }}>
            {row.term}
          </p>
          <p className="text-[36px] leading-snug text-rff-body">{row.definition}</p>
        </div>
      ))}
      {closing && (
        <p
          className="absolute flex items-center text-[36px] font-bold text-rff-navy"
          style={{ left: 106, top: BOTTOM - closingSpace, width: 1708, height: closingSpace }}
        >
          {closing}
        </p>
      )}
    </ContentFrame>
  )
}
