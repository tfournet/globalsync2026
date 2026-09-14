import ContentFrame from '../chrome/ContentFrame'
import { weakOutput, withoutTim } from '../../data/demo.js'

// C. Stage. The machine's answer on navy at the largest size the text allows,
// with the one leaked sentence blocked out in the accent so it carries to the
// back row. Whole and verbatim, as on the original.
const text = withoutTim(weakOutput)

const LEAK =
  'This certificate had actually been flagged for renewal in our Q2 review, and we\'re correcting the gap that let it lapse.'

const MARK = { boxDecorationBreak: 'clone', WebkitBoxDecorationBreak: 'clone' }

function Rich({ text: line }) {
  const parts = line.split(/(\*\*[^*]+\*\*)/g).filter(Boolean)
  return (
    <>
      {parts.map((p, i) =>
        p.startsWith('**') && p.endsWith('**') ? (
          <strong key={i} className="font-bold text-white">
            {p.slice(2, -2)}
          </strong>
        ) : (
          <span key={i}>
            {p.split(LEAK).map((chunk, j, all) => (
              <span key={j}>
                {chunk}
                {j < all.length - 1 && (
                  <span className="bg-rff-blue px-[8px] py-[3px] font-bold text-white" style={MARK}>
                    {LEAK}
                  </span>
                )}
              </span>
            ))}
          </span>
        ),
      )}
    </>
  )
}

function Flow({ text: source, fontSize, columns, columnGap, className }) {
  const paras = []
  let cur = []
  for (const l of source.split('\n')) {
    if (l.trim() === '') {
      if (cur.length) paras.push(cur)
      cur = []
    } else {
      cur.push(l)
    }
  }
  if (cur.length) paras.push(cur)
  return (
    <div className={`leading-[1.3] ${className}`} style={{ fontSize, columnCount: columns, columnGap }}>
      {paras.map((p, i) => (
        <p key={i} className={i === 0 ? '' : 'mt-[0.45em]'} style={{ breakInside: 'avoid' }}>
          {p.map((l, j) => (
            <span key={j}>
              <Rich text={l} />
              {j < p.length - 1 && <br />}
            </span>
          ))}
        </p>
      ))}
    </div>
  )
}

export default function DemoWeakOutputC({ slideNumber }) {
  return (
    <ContentFrame
      eyebrow=""
      title="What the client would have received"
      accent="blue"
      slideNumber={slideNumber}
    >
      <div className="absolute bg-rff-navy" style={{ left: 0, top: 190, width: 1920, height: 722 }} />
      <div className="absolute bg-rff-blue" style={{ left: 0, top: 190, width: 1920, height: 6 }} />

      <div className="absolute" style={{ left: 106, top: 230, width: 1708 }}>
        <Flow text={text} fontSize={28} columns={2} columnGap={60} className="text-rff-light-text" />
      </div>

      <p
        className="absolute text-[33px] font-bold text-rff-navy"
        style={{ left: 106, top: 930, width: 1708 }}
      >
        It leaked that line in two of three runs, and you had no say in which.
      </p>
    </ContentFrame>
  )
}
