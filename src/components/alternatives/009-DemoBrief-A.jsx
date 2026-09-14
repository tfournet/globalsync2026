import ContentFrame from '../chrome/ContentFrame'
import { Paragraphs } from './demoText.jsx'
import { strongBrief, withoutTim } from '../../data/demo.js'

// Editorial. The brief set as a magazine opener: an oversized quotation mark
// alone in the left margin, hairline rules above and below, two columns of
// running text. Same verbatim brief, same marked phrases, same 32px as the
// committed slide.

const EMPHASIZE = [
  "She isn't technical and doesn't want to be",
  "She'll forward whatever I send straight to Dr. Patel",
  "don't quote them",
  "she definitely doesn't need to hear that we flagged this cert in the spring and the renewal never got approved",
  "that's what she asked me on the phone and what she's afraid of",
  'That\'s what "on top of it" actually means, so say that',
  'Do not use the phrase "on top of it" anywhere in the email',
  withoutTim('Sign it from me, Tim at Northline IT'),
]

const LEFT = 300
const WIDTH = 1514

export default function DemoBriefEditorial({ slideNumber }) {
  return (
    <ContentFrame
      eyebrow="The second try"
      title="The same ask, with the rules written down"
      accent="blue"
      slideNumber={slideNumber}
    >
      {/* The one oversized element, alone in its own margin */}
      <p
        className="absolute font-bold leading-none text-rff-blue"
        style={{ left: 96, top: 250, fontSize: 300 }}
        aria-hidden="true"
      >
        {'“'}
      </p>

      <div className="absolute bg-rff-gray-line" style={{ left: LEFT, top: 252, width: WIDTH, height: 2 }} />

      <div className="absolute" style={{ left: LEFT, top: 300, width: WIDTH }}>
        <Paragraphs
          text={withoutTim(strongBrief)}
          fontSize={32}
          columns={2}
          columnGap={64}
          flow
          emphasize={EMPHASIZE}
          emphasisClass="text-rff-blue"
          className="text-rff-body"
        />
      </div>

      <div className="absolute bg-rff-gray-line" style={{ left: LEFT, top: 878, width: WIDTH, height: 2 }} />
      <p
        className="absolute text-[27px] font-bold uppercase tracking-[0.12em] text-rff-blue"
        style={{ left: LEFT, top: 900 }}
      >
        Same ticket pasted below
      </p>
    </ContentFrame>
  )
}
