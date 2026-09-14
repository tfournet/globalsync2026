import Eyebrow from '../chrome/Eyebrow'
import SlideTitle from '../chrome/SlideTitle'
import Footer from '../chrome/Footer'
import { Paragraphs } from './demoText.jsx'
import { strongOutput, withoutTim } from '../../data/demo.js'

// Stage. The draft lit on navy for the back of the room: subject in white
// above the rule, the letter under it, the closing line last. One accent
// shape, the blue bar down the left edge.

const EMAIL = withoutTim(strongOutput)
const SUBJECT = EMAIL.split('\n')[0]
const BODY = EMAIL.split('\n').slice(1).join('\n').replace(/^\n+/, '')

const BAND_TOP = 228
const BAND_HEIGHT = 740

export default function DemoStrongStage({ slideNumber }) {
  return (
    <div className="relative h-full w-full bg-white">
      <Eyebrow accent="blue" className="absolute left-[106px] top-[48px]">
        The second try
      </Eyebrow>
      <SlideTitle className="absolute left-[106px] right-[106px] top-[96px]">
        A draft you can put your name on
      </SlideTitle>

      <div className="absolute left-0 bg-rff-navy" style={{ top: BAND_TOP, width: 1920, height: BAND_HEIGHT }} />
      <div className="absolute bg-rff-blue" style={{ left: 106, top: 284, width: 14, height: 566 }} />

      <p className="absolute text-[36px] font-bold text-white" style={{ left: 170, top: 272, width: 1644 }}>
        {SUBJECT}
      </p>

      <div className="absolute" style={{ left: 170, top: 340, width: 1644 }}>
        <Paragraphs text={BODY} fontSize={30} className="text-rff-light-text" />
      </div>

      <div className="absolute bg-white/25" style={{ left: 170, top: 866, width: 1644, height: 2 }} />
      <p className="absolute text-[36px] font-bold text-white" style={{ left: 170, top: 890, width: 1644 }}>
        Those five questions work on any brief, to a person or a machine.
      </p>

      <Footer slideNumber={slideNumber} />
    </div>
  )
}
