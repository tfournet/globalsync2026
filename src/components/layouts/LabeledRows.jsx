import ContentFrame from '../chrome/ContentFrame'

const TERM_COLOR = ['text-rff-navy', 'text-rff-blue']
const ROW_BG = ['bg-rff-light', 'bg-white']
const MAX_ROW_HEIGHT = 203
const TOP = 265
const BOTTOM = 990
const TERM_WIDTH = 640

export default function LabeledRows({ eyebrow, title, rows = [], accent = 'blue', slideNumber }) {
  const rowHeight = Math.min(MAX_ROW_HEIGHT, (BOTTOM - TOP) / Math.max(rows.length, 1))
  return (
    <ContentFrame eyebrow={eyebrow} title={title} accent={accent} slideNumber={slideNumber}>
      {rows.map((row, i) => (
        <div
          key={i}
          className={`absolute flex items-center ${ROW_BG[i % 2]}`}
          style={{ left: 106, right: 106, top: TOP + i * rowHeight, height: rowHeight }}
        >
          <p className={`text-[37px] font-bold ${TERM_COLOR[i % 2]}`} style={{ width: TERM_WIDTH, flexShrink: 0 }}>
            {row.term}
          </p>
          <p className="text-[33px] text-rff-body">{row.definition}</p>
        </div>
      ))}
    </ContentFrame>
  )
}
