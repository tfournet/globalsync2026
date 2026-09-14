import ContentFrame from '../chrome/ContentFrame'
import { weakOutput, withoutTim, SPEAKER_STAND_IN } from '../../data/demo.js'

// B. Artifacts. The same email as the object it is: a message open in Dana's
// mail client, header fields first, the body whole and verbatim underneath,
// with the leaked sentence in the accent as on the original.
const text = withoutTim(weakOutput)
const lines = text.split('\n')
const subject = lines[0]
const body = lines.slice(2).join('\n')

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

function Field({ left, label, value }) {
  return (
    <>
      <span
        className="absolute text-[26px] font-bold uppercase tracking-[0.12em] text-rff-muted"
        style={{ left, top: 224 }}
      >
        {label}
      </span>
      <span className="absolute text-rff-navy" style={{ left: left + 110, top: 218, fontSize: 30 }}>
        {value}
      </span>
    </>
  )
}

export default function DemoWeakOutputB({ slideNumber }) {
  return (
    <ContentFrame
      eyebrow=""
      title="What the client would have received"
      accent="blue"
      slideNumber={slideNumber}
    >
      <div
        className="absolute rounded-[4px] border-[3px] border-rff-gray-line bg-white"
        style={{ left: 106, top: 195, width: 1708, height: 715 }}
      />
      <div className="absolute bg-rff-light" style={{ left: 109, top: 198, width: 1702, height: 118 }} />

      <Field left={146} label="From" value={SPEAKER_STAND_IN} />
      <Field left={700} label="To" value="Dana Whitfield" />

      <p
        className="absolute font-bold text-rff-navy"
        style={{ left: 146, top: 262, width: 1628, fontSize: 32, lineHeight: 1.3 }}
      >
        {subject}
      </p>
      <div className="absolute bg-rff-gray-line" style={{ left: 109, top: 316, width: 1702, height: 2 }} />

      <div className="absolute" style={{ left: 146, top: 344, width: 1628 }}>
        <Flow text={body} fontSize={27} columns={2} columnGap={60} className="text-rff-body" />
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
