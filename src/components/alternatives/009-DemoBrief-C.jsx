import Eyebrow from '../chrome/Eyebrow'
import SlideTitle from '../chrome/SlideTitle'
import Footer from '../chrome/Footer'
import { Paragraphs } from './demoText.jsx'
import { strongBrief, withoutTim } from '../../data/demo.js'

// Stage. Navy band across the room, the brief held down the page in a low
// tone, and the written rules burning white out of it. One accent shape: the
// blue bar that marks the whole thing as quoted. Text verbatim at 32px.

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

const BAND_TOP = 228
const BAND_HEIGHT = 740

export default function DemoBriefStage({ slideNumber }) {
  return (
    <div className="relative h-full w-full bg-white">
      <Eyebrow accent="blue" className="absolute left-[106px] top-[48px]">
        The second try
      </Eyebrow>
      <SlideTitle className="absolute left-[106px] right-[106px] top-[96px]">
        The same ask, with the rules written down
      </SlideTitle>

      <div className="absolute left-0 bg-rff-navy" style={{ top: BAND_TOP, width: 1920, height: BAND_HEIGHT }} />

      <div className="absolute bg-rff-blue" style={{ left: 106, top: 286, width: 14, height: 554 }} />

      <div className="absolute" style={{ left: 170, top: 282, width: 1644 }}>
        <Paragraphs
          text={withoutTim(strongBrief)}
          fontSize={34}
          columns={2}
          columnGap={56}
          flow
          emphasize={EMPHASIZE}
          emphasisClass="text-white"
          className="text-rff-muted-dark"
        />
      </div>

      <p
        className="absolute text-[27px] font-bold uppercase tracking-[0.12em] text-rff-blue-glow"
        style={{ left: 170, top: 880 }}
      >
        Same ticket pasted below
      </p>

      <Footer slideNumber={slideNumber} />
    </div>
  )
}
