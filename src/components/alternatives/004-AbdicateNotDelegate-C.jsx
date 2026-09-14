import Eyebrow from '../chrome/Eyebrow'
import SlideTitle from '../chrome/SlideTitle'
import Footer from '../chrome/Footer'

// Stage. One side is filled in, the other is not, and the slide is built that
// way: a solid navy panel that runs off the left edge against open white, with
// a single blue bar on the seam.

const LEFT = [
  'You hand them the queue.',
  'You wrote the rule down: call on any P1, and on anything from a client who has called twice.',
  'They check the ticket against that.',
]
const RIGHT = [
  'You hand them the queue.',
  'You left the rule to them: use your judgment.',
  'They guess, and with luck they guess right.',
]

const TOP = 250
const BOTTOM = 822

export default function AbdicateNotDelegateC({ slideNumber }) {
  return (
    <div className="relative h-full w-full bg-white">
      <Eyebrow accent="blue" className="absolute left-[106px] top-[48px]">
        How it got that way
      </Eyebrow>
      <SlideTitle className="absolute left-[106px] right-[106px] top-[96px]">
        Handing over the work is not the same as delegating
      </SlideTitle>

      {/* Filled in */}
      <div className="absolute bg-rff-navy" style={{ left: 0, top: TOP, width: 930, height: BOTTOM - TOP }} />
      <p
        className="absolute text-[30px] font-bold uppercase tracking-[0.1em] text-rff-blue-glow"
        style={{ left: 106, top: TOP + 56, width: 764 }}
      >
        When you delegate
      </p>
      <div className="absolute" style={{ left: 106, top: TOP + 130, width: 764 }}>
        {LEFT.map((item, i) => (
          <p key={i} className="mt-[36px] text-[40px] leading-[1.3] text-white first:mt-0">
            {item}
          </p>
        ))}
      </div>

      {/* The seam */}
      <div className="absolute bg-rff-blue" style={{ left: 930, top: TOP, width: 40, height: BOTTOM - TOP }} />

      {/* Left open */}
      <p
        className="absolute text-[30px] font-bold uppercase tracking-[0.1em] text-rff-blue"
        style={{ left: 1030, top: TOP + 56, width: 784 }}
      >
        When you hand over the rules too
      </p>
      <div className="absolute" style={{ left: 1030, top: TOP + 130, width: 784 }}>
        {RIGHT.map((item, i) => (
          <p key={i} className="mt-[36px] text-[40px] leading-[1.3] text-rff-navy first:mt-0">
            {item}
          </p>
        ))}
      </div>

      <p className="absolute text-center text-[36px] font-bold text-rff-navy" style={{ left: 106, top: 888, width: 1708 }}>
        Your best employees are the ones who usually guess right.
      </p>

      <Footer slideNumber={slideNumber} />
    </div>
  )
}
