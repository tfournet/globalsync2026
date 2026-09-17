import ContentFrame from '../chrome/ContentFrame'

const GAP = 36
const ALIGNED_GAP = 120
const HEADER_TOP = 265
const HEADER_HEIGHT = 126
const BODY_BOTTOM = 855
const ACCENT_BG = { blue: 'bg-rff-blue', orange: 'bg-rff-orange', gold: 'bg-rff-gold' }
const ACCENT_HEADER_TEXT = { blue: 'text-white', orange: 'text-white', gold: 'text-rff-navy' }

const ARROW_STROKE = { blue: '#2A3AED', orange: '#FF5219', gold: '#FFCC32' }

function Arrow({ accent }) {
  const c = ARROW_STROKE[accent]
  return (
    <svg width="84" height="22" viewBox="0 0 84 22" fill="none" aria-hidden="true">
      <path d="M0 11 H70" stroke={c} strokeWidth="5" />
      <path d="M63 3 L79 11 L63 19" stroke={c} strokeWidth="5" fill="none" />
    </svg>
  )
}

// One pair: a grey box on each side, an arrow in the gutter between them.
function Row({ leftText, rightText, fontSize, accent, arrows, emphasizeRight, emphasizeLeft }) {
  const cell = 'flex items-center rounded-[4px] bg-rff-light leading-snug text-rff-body'
  return (
    <>
      <div className={`${cell} ${emphasizeLeft ? 'font-bold text-rff-navy' : ''}`} style={{ padding: '10px 36px', fontSize }}>
        {leftText}
      </div>
      <div className="flex items-center justify-center">{arrows && <Arrow accent={accent} />}</div>
      <div className={`${cell} ${emphasizeRight ? 'font-bold text-rff-navy' : ''}`} style={{ padding: '10px 36px', fontSize }}>
        {rightText}
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
  arrows = true,
  emphasizeRight = true,
  emphasizeLeft = false,
}) {
  const gap = aligned ? ALIGNED_GAP : GAP
  const headerHeight = aligned ? 96 : HEADER_HEIGHT
  const COL_WIDTH = (1708 - gap) / 2
  const COL_X = [106, 106 + COL_WIDTH + gap]
  const panels = [
    { data: left, headerBg: 'bg-rff-navy', headerText: 'text-white' },
    { data: right, headerBg: ACCENT_BG[accent], headerText: ACCENT_HEADER_TEXT[accent] },
  ]
  return (
    <ContentFrame eyebrow={eyebrow} title={title} accent={accent} slideNumber={slideNumber}>
      {panels.map((panel, i) => (
        <div key={i} className="absolute" style={{ left: COL_X[i], top, width: COL_WIDTH }}>
          <div className={`flex items-center px-[48px] ${panel.headerBg}`} style={{ height: headerHeight }}>
            {panel.data.icon && <panel.data.icon size={44} strokeWidth={2.25} className={`mr-[22px] shrink-0 ${panel.headerText}`} aria-hidden="true" />}
            <p className={`text-[32px] font-bold uppercase tracking-[0.1em] ${panel.headerText}`}>{panel.data.heading}</p>
          </div>
          {!aligned && (
          <ul
            className="flex flex-col justify-center list-disc bg-rff-light p-[48px] pl-[68px] leading-snug text-rff-body marker:text-rff-navy"
            style={{ height: bottom - top - headerHeight, fontSize }}
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
            top: top + headerHeight,
            width: 1708,
            height: bottom - top - headerHeight,
            gridTemplateColumns: `${COL_WIDTH}px ${gap}px ${COL_WIDTH}px`,
            gridAutoRows: 'minmax(0, 1fr)',
            rowGap: itemGap,
            paddingTop: itemGap,
          }}
        >
          {left.items.map((item, j) => (
            <Row key={j} leftText={item} rightText={right.items[j]} fontSize={fontSize} accent={accent} arrows={arrows} emphasizeRight={emphasizeRight} emphasizeLeft={emphasizeLeft} />
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
