import ContentFrame from '../chrome/ContentFrame'

// Editorial. Four numbered statements on hairline rules, and the oversized
// glyph is a question mark, because the last line is about the question that
// never gets asked.

const POINTS = [
  'AI demos give a little instruction and show something beautiful built from it.',
  'Beautiful does not mean the details are where you want them.',
  'You already know what a junior tech does with a ticket that thin: real effort, a reasonable guess, and something you would not put your name on.',
  'AI does that too, without the pause where a person asks you a question.',
]

export default function TheDemoNeverHadAClientA({ slideNumber }) {
  return (
    <ContentFrame
      eyebrow="What AI taught us to expect"
      title="We expect AI to do wonders with a little instruction"
      accent="blue"
      slideNumber={slideNumber}
    >
      <p
        className="absolute select-none text-[420px] font-bold leading-none text-rff-blue"
        style={{ left: 1580, top: 480, opacity: 0.12 }}
        aria-hidden="true"
      >
        ?
      </p>

      <div
        className="absolute border-b-2 border-rff-gray-line"
        style={{ left: 106, top: 268, width: 1464 }}
      >
        {POINTS.map((point, i) => (
          <div key={i} className="flex gap-[38px] border-t-2 border-rff-gray-line py-[40px]">
            <p className="w-[104px] shrink-0 text-[44px] font-bold leading-[1.15] text-rff-blue">{`0${i + 1}`}</p>
            <p className="text-[38px] leading-[1.35] text-rff-navy">{point}</p>
          </div>
        ))}
      </div>
    </ContentFrame>
  )
}
