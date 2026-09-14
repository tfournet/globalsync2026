import ContentFrame from '../chrome/ContentFrame'
import { Paragraphs } from './demoText.jsx'
import { strongOutput, withoutTim } from '../../data/demo.js'

// Artifacts. The draft in a mail client, addressed and ready, with the send
// still sitting there as a thing a person does. The machine wrote what is in
// the window; the button belongs to whoever is standing on stage.

const EMAIL = withoutTim(strongOutput)
const SUBJECT = EMAIL.split('\n')[0].replace(/^Subject:\s*/, '')
const BODY = EMAIL.split('\n').slice(1).join('\n').replace(/^\n+/, '')

const LEFT = 106
const WIDTH = 1708
const TOP = 214
const HEIGHT = 700
const INNER = WIDTH - 80

function Field({ label, value, bold = false, top }) {
  return (
    <div className="absolute flex items-baseline" style={{ left: 40, top, width: INNER }}>
      <span className="w-[160px] shrink-0 text-[26px] font-bold uppercase tracking-[0.12em] text-rff-muted">
        {label}
      </span>
      <span className={`text-[30px] ${bold ? 'font-bold text-rff-navy' : 'text-rff-body'}`}>{value}</span>
    </div>
  )
}

export default function DemoStrongArtifact({ slideNumber }) {
  return (
    <ContentFrame
      eyebrow="The second try"
      title="A draft you can put your name on"
      accent="blue"
      slideNumber={slideNumber}
    >
      <div
        className="absolute overflow-hidden rounded-[4px] border-[3px] border-rff-gray-line bg-white"
        style={{ left: LEFT, top: TOP, width: WIDTH, height: HEIGHT }}
      >
        <div className="absolute left-0 top-0 bg-rff-light" style={{ width: WIDTH, height: 98 }} />
        <div className="absolute left-0 bg-rff-gray-line" style={{ top: 98, width: WIDTH, height: 2 }} />
        <Field label="To" value="Dana Whitfield" top={12} />
        <Field label="Subject" value={SUBJECT} bold top={52} />

        <div className="absolute" style={{ left: 40, top: 116, width: INNER }}>
          <Paragraphs text={BODY} fontSize={30} className="text-rff-body" />
        </div>

        {/* The send, which is a person's job */}
        <div className="absolute left-0 bg-rff-gray-line" style={{ top: 626, width: WIDTH, height: 2 }} />
        <div className="absolute left-0 bg-rff-light" style={{ top: 628, width: WIDTH, height: 70 }} />
        <div
          className="absolute flex items-center justify-center rounded-[4px] bg-rff-blue text-[30px] font-bold text-white"
          style={{ left: 40, top: 640, width: 176, height: 48 }}
        >
          Send
        </div>
      </div>

      <p
        className="absolute text-[33px] font-bold text-rff-navy"
        style={{ left: LEFT, top: 928, width: WIDTH }}
      >
        Those five questions work on any brief, to a person or a machine.
      </p>
    </ContentFrame>
  )
}
