import Eyebrow from '../chrome/Eyebrow'
import SlideTitle from '../chrome/SlideTitle'
import Footer from '../chrome/Footer'

// Stage. Navy runs off the bottom of the frame and the four statements are set
// large enough to read from the back row, with a blue spine off the left edge.

const POINTS = [
  'AI demos give a little instruction and show something beautiful built from it.',
  'Beautiful does not mean the details are where you want them.',
  'You already know what a junior tech does with a ticket that thin: real effort, a reasonable guess, and something you would not put your name on.',
  'AI does that too, without the pause where a person asks you a question.',
]

const PANEL_TOP = 292

export default function TheDemoNeverHadAClientC({ slideNumber }) {
  return (
    <div className="relative h-full w-full bg-white">
      <Eyebrow accent="blue" className="absolute left-[106px] top-[48px]">
        What AI taught us to expect
      </Eyebrow>
      <SlideTitle className="absolute left-[106px] right-[106px] top-[96px]">
        We expect AI to do wonders with a little instruction
      </SlideTitle>

      <div className="absolute bg-rff-navy" style={{ left: 0, top: PANEL_TOP, right: 0, bottom: 0 }} />
      <div className="absolute bg-rff-blue" style={{ left: 0, top: PANEL_TOP, width: 48, bottom: 0 }} />

      <div className="absolute" style={{ left: 130, top: PANEL_TOP + 170, width: 1560 }}>
        {POINTS.map((point, i) => (
          <p key={i} className={`text-[42px] leading-[1.3] ${i === 3 ? 'mt-[44px] font-bold text-rff-blue-glow' : 'mt-[44px] text-white first:mt-0'}`}>
            {point}
          </p>
        ))}
      </div>

      <Footer slideNumber={slideNumber} light />
    </div>
  )
}
