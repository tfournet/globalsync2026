import ContentFrame from '../chrome/ContentFrame'
import { weakOutput, withoutTim } from '../../data/demo.js'

// A. Editorial. The subject line sits above the masthead and the greeting is
// set as display type, because the point of the slide is who opens this. The
// email runs under it in two columns, whole and verbatim, with the leaked
// sentence in the accent as on the original.
const text = withoutTim(weakOutput)
const lines = text.split('\n')
const subject = lines[0]
const greeting = lines[2]
const body = lines.slice(4).join('\n')

const LEAK =
  'This certificate had actually been flagged for renewal in our Q2 review, and we\'re correcting the gap that let it lapse.'

function Rich({ text: line }) {
  const parts = line.split(/(\*\*[^*]+\*\*)/g).filter(Boolean)
  return (
    <>
      {parts.map((p, i) =>
        p.startsWith('**') && p.endsWith('**') ? (
          <strong key={i} className="font-bold text-rff-navy">
            {p.slice(2, -2)}
          </strong>
        ) : (
          <span key={i}>
            {p.split(LEAK).map((chunk, j, all) => (
              <span key={j}>
                {chunk}
                {j < all.length - 1 && <span className="font-bold text-rff-blue">{LEAK}</span>}
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

export default function DemoWeakOutputA({ slideNumber }) {
  return (
    <ContentFrame
      eyebrow=""
      title="What the client would have received"
      accent="blue"
      slideNumber={slideNumber}
    >
      <div className="absolute bg-rff-gray-line" style={{ left: 106, top: 206, width: 1708, height: 2 }} />
      <p className="absolute text-rff-muted" style={{ left: 106, top: 226, width: 1708, fontSize: 28 }}>
        {subject}
      </p>
      <p
        className="absolute font-bold text-rff-navy"
        style={{ left: 106, top: 262, width: 1708, fontSize: 78, lineHeight: 1.3 }}
      >
        {greeting}
      </p>
      <div className="absolute bg-rff-gray-line" style={{ left: 106, top: 388, width: 1708, height: 2 }} />

      <div className="absolute" style={{ left: 106, top: 408, width: 1708 }}>
        <Flow text={body} fontSize={26} columns={2} columnGap={68} className="text-rff-body" />
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
