import ContentFrame from '../chrome/ContentFrame'
import { Paragraphs } from './demoText.jsx'
import { strongOutput, withoutTim } from '../../data/demo.js'

// Editorial. The draft set like a letter printed in a magazine: the same
// oversized quotation mark alone in the left margin as slide 9's variant A,
// the subject line as the standfirst above a hairline, the body in two
// columns at 36px, four larger than the committed slide.

const EMAIL = withoutTim(strongOutput)
const SUBJECT = EMAIL.split('\n')[0]
const BODY = EMAIL.split('\n').slice(1).join('\n').replace(/^\n+/, '')

const LEFT = 300
const WIDTH = 1514

export default function DemoStrongEditorial({ slideNumber }) {
  return (
    <ContentFrame
      eyebrow="The second try"
      title="A draft you can put your name on"
      accent="blue"
      slideNumber={slideNumber}
    >
      <p
        className="absolute font-bold leading-none text-rff-blue"
        style={{ left: 96, top: 250, fontSize: 300 }}
        aria-hidden="true"
      >
        {'“'}
      </p>

      <p
        className="absolute text-[38px] font-bold text-rff-navy"
        style={{ left: LEFT, top: 256, width: WIDTH }}
      >
        {SUBJECT}
      </p>

      <div className="absolute bg-rff-gray-line" style={{ left: LEFT, top: 330, width: WIDTH, height: 2 }} />

      <div className="absolute" style={{ left: LEFT, top: 356, width: WIDTH }}>
        <Paragraphs text={BODY} fontSize={34} columns={2} columnGap={64} flow className="text-rff-body" />
      </div>

      <div className="absolute bg-rff-gray-line" style={{ left: LEFT, top: 892, width: WIDTH, height: 2 }} />
      <p
        className="absolute text-[34px] font-bold text-rff-navy"
        style={{ left: LEFT, top: 912, width: WIDTH }}
      >
        Those five questions work on any brief, to a person or a machine.
      </p>
    </ContentFrame>
  )
}
