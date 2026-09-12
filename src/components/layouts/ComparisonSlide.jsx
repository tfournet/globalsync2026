import ContentFrame from '../chrome/ContentFrame'

const GAP = 36
const COL_WIDTH = (1708 - GAP) / 2
const COL_X = [106, 106 + COL_WIDTH + GAP]
const HEADER_TOP = 265
const HEADER_HEIGHT = 126
const BODY_BOTTOM = 855

export default function ComparisonSlide({
  eyebrow,
  title,
  left,
  right,
  closing,
  accent = 'blue',
  slideNumber,
}) {
  const panels = [
    { data: left, headerBg: 'bg-rff-navy' },
    { data: right, headerBg: 'bg-rff-blue' },
  ]
  return (
    <ContentFrame eyebrow={eyebrow} title={title} accent={accent} slideNumber={slideNumber}>
      {panels.map((panel, i) => (
        <div key={i} className="absolute" style={{ left: COL_X[i], top: HEADER_TOP, width: COL_WIDTH }}>
          <div className={`flex items-center p-[48px] ${panel.headerBg}`} style={{ height: HEADER_HEIGHT }}>
            <p className="text-[32px] font-bold uppercase tracking-[0.1em] text-white">{panel.data.heading}</p>
          </div>
          <ul
            className="list-disc bg-rff-light p-[48px] pl-[68px] text-[33px] leading-snug text-rff-body marker:text-rff-navy"
            style={{ height: BODY_BOTTOM - HEADER_TOP - HEADER_HEIGHT }}
          >
            {panel.data.items.map((item, j) => (
              <li key={j} className="mt-[16px] first:mt-0">
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
      {closing && (
        <p
          className="absolute text-center text-[33px] font-bold text-rff-navy"
          style={{ left: 106, top: 910, width: 1708 }}
        >
          {closing}
        </p>
      )}
    </ContentFrame>
  )
}
