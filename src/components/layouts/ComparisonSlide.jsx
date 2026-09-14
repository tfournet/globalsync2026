import ContentFrame from '../chrome/ContentFrame'

const GAP = 36
const COL_WIDTH = (1708 - GAP) / 2
const COL_X = [106, 106 + COL_WIDTH + GAP]
const HEADER_TOP = 265
const HEADER_HEIGHT = 126
const BODY_BOTTOM = 855
const ACCENT_BG = { blue: 'bg-rff-blue', orange: 'bg-rff-orange', gold: 'bg-rff-gold' }
const ACCENT_HEADER_TEXT = { blue: 'text-white', orange: 'text-white', gold: 'text-rff-navy' }

function Row({ leftText, rightText, fontSize, first, last }) {
  const pad = '0 48px 0 68px'
  const cell = 'relative flex items-center leading-snug text-rff-body'
  return (
    <>
      <div className={cell} style={{ padding: pad, fontSize }}>
        <ul className="list-disc marker:text-rff-navy"><li>{leftText}</li></ul>
      </div>
      <div />
      <div className={cell} style={{ padding: pad, fontSize }}>
        <ul className="list-disc marker:text-rff-navy"><li>{rightText}</li></ul>
      </div>
    </>
  )
}

export default function ComparisonSlide({
  eyebrow,
  title,
  left,
  right,
  closing,
  accent = 'blue',
  slideNumber,
  top = HEADER_TOP,
  bottom = BODY_BOTTOM,
  fontSize = 40,
  itemGap = 28,
  aligned = false,
}) {
  const panels = [
    { data: left, headerBg: 'bg-rff-navy', headerText: 'text-white' },
    { data: right, headerBg: ACCENT_BG[accent], headerText: ACCENT_HEADER_TEXT[accent] },
  ]
  return (
    <ContentFrame eyebrow={eyebrow} title={title} accent={accent} slideNumber={slideNumber}>
      {panels.map((panel, i) => (
        <div key={i} className="absolute" style={{ left: COL_X[i], top, width: COL_WIDTH }}>
          <div className={`flex items-center p-[48px] ${panel.headerBg}`} style={{ height: HEADER_HEIGHT }}>
            <p className={`text-[32px] font-bold uppercase tracking-[0.1em] ${panel.headerText}`}>{panel.data.heading}</p>
          </div>
          {!aligned && (
          <ul
            className="flex flex-col justify-center list-disc bg-rff-light p-[48px] pl-[68px] leading-snug text-rff-body marker:text-rff-navy"
            style={{ height: bottom - top - HEADER_HEIGHT, fontSize }}
          >
            {panel.data.items.map((item, j) => (
              <li key={j} className="first:mt-0" style={{ marginTop: j === 0 ? 0 : itemGap }}>
                {item}
              </li>
            ))}
          </ul>
          )}
        </div>
      ))}
      {aligned && (
        <div
          className="absolute grid"
          style={{
            left: 106,
            top: top + HEADER_HEIGHT,
            width: 1708,
            height: bottom - top - HEADER_HEIGHT,
            gridTemplateColumns: `${COL_WIDTH}px ${GAP}px ${COL_WIDTH}px`,
            gridAutoRows: 'auto',
            rowGap: itemGap,
            alignContent: 'center',
            padding: '40px 0',
          }}
        >
          <div className="absolute inset-y-0 bg-rff-light" style={{ left: 0, width: COL_WIDTH }} />
          <div className="absolute inset-y-0 bg-rff-light" style={{ left: COL_WIDTH + GAP, width: COL_WIDTH }} />
          {left.items.map((item, j) => (
            <Row key={j} leftText={item} rightText={right.items[j]} fontSize={fontSize} first={j === 0} last={j === left.items.length - 1} />
          ))}
        </div>
      )}
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
