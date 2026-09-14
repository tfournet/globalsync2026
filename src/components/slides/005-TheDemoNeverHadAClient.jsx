import ContentFrame from '../chrome/ContentFrame'

// Artifacts. The demo window itself: one short prompt, and a result that has
// the shape of something finished and nothing in it you could check.

const POINTS = [
  'AI demos give a little instruction and show something beautiful built from it.',
  'Beautiful does not mean the details are where you want them.',
  'You already know what a junior tech does with a ticket that thin: real effort, a reasonable guess, and something you would not put your name on.',
  'AI does that too, without the pause where a person asks you a question.',
]

const RESULT_LINES = [648, 596, 632, 540, 640, 604, 432]

function Bar({ width, height = 14 }) {
  return <div className="rounded-[2px] bg-rff-gray-line" style={{ width, height }} />
}

export default function TheDemoNeverHadAClient({ slideNumber }) {
  return (
    <ContentFrame
      eyebrow="What AI taught us to expect"
      title="We expect AI to do wonders with a little instruction"
      accent="blue"
      slideNumber={slideNumber}
    >
      <div className="absolute" style={{ left: 106, top: 286, width: 840 }}>
        {POINTS.map((point, i) => (
          <div key={i} className="mt-[32px] flex gap-[26px] first:mt-0">
            <div className="mt-[14px] shrink-0 bg-rff-blue" style={{ width: 16, height: 16 }} />
            <p className="text-[32px] leading-[1.35] text-rff-navy">{point}</p>
          </div>
        ))}
      </div>

      {/* The demo window */}
      <div
        className="absolute overflow-hidden rounded-[4px] border-[3px] border-rff-gray-line bg-white"
        style={{ left: 1010, top: 240, width: 804, height: 664 }}
      >
        <div className="flex items-center gap-[14px] border-b-[3px] border-rff-gray-line bg-rff-light px-[28px]" style={{ height: 62 }}>
          <div className="rounded-full bg-rff-gray-line" style={{ width: 14, height: 14 }} />
          <div className="rounded-full bg-rff-gray-line" style={{ width: 14, height: 14 }} />
          <div className="rounded-full bg-rff-gray-line" style={{ width: 14, height: 14 }} />
          <span className="ml-[18px] text-[26px] font-bold uppercase tracking-[0.12em] text-rff-muted">The demo</span>
        </div>

        <div className="px-[32px] pt-[24px]">
          <p className="text-[26px] font-bold uppercase tracking-[0.12em] text-rff-muted">Prompt</p>
          <div className="mt-[12px] flex items-center gap-[10px] rounded-[4px] border-[2px] border-rff-gray-line bg-rff-light px-[24px]" style={{ height: 78 }}>
            <Bar width={430} height={16} />
            <div className="bg-rff-blue" style={{ width: 4, height: 34 }} />
          </div>

          <p className="mt-[26px] text-[26px] font-bold uppercase tracking-[0.12em] text-rff-muted">Result</p>
          <div className="mt-[12px] rounded-[4px] border-[2px] border-rff-gray-line px-[28px] py-[26px]">
            <div className="rounded-[2px] bg-rff-gray-line" style={{ width: 460, height: 26 }} />
            <div className="mt-[22px] bg-rff-gray-line" style={{ width: '100%', height: 2 }} />
            <div className="mt-[22px] flex flex-col gap-[18px]">
              {RESULT_LINES.map((w, i) => (
                <Bar key={i} width={w} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </ContentFrame>
  )
}
