import ContentFrame from '../chrome/ContentFrame'

// Pays off slide 16's condition: the check is how you find out whether the
// AI understood you, and the log is the record of that conversation. Right
// side is the log drawn as an artifact, not another card of text.

const L = 106
const LW = 860
const R = 1032
const RW = 782
const TOP = 262

const POINTS = [
  'Decide what a good answer looks like before you build the step.',
  'Ask for the answer in a shape a rule can test, like a category, a yes or no, or a number.',
  'Write down what went in, what came out, and who approved it, on every run.',
]

const RUNS = [
  { when: '09:52', input: 'Ticket 48213, outage email', output: 'Draft, 138 words', check: 'Rules passed', by: 'Alex sent' },
  { when: '10:04', input: 'Ticket 48219, printer', output: 'Category: hardware', check: 'Rules passed', by: 'Auto' },
  { when: '10:11', input: 'Ticket 48220, billing question', output: 'Draft, 212 words', check: 'Over 150 words', by: 'Held for Chris' },
]

export default function HonestLimit({ slideNumber }) {
  return (
    <ContentFrame
      eyebrow="The check"
      title="The check is how you know it understood you"
      accent="gold"
      slideNumber={slideNumber}
    >
      <div className="absolute" style={{ left: L, top: TOP + 8, width: LW }}>
        <p className="text-[40px] leading-[1.3] text-rff-navy">
          You check the answer against the same rules you wrote for the step, which is why writing them down mattered.
        </p>
        <ul className="mt-[40px] list-disc pl-[46px] text-[34px] leading-[1.3] text-rff-body marker:text-rff-gold">
          {POINTS.map((p) => (
            <li key={p} className="mt-[24px] first:mt-0">
              {p}
            </li>
          ))}
        </ul>
      </div>

      {/* The log, drawn */}
      <div
        className="absolute overflow-hidden rounded-[4px] border-[3px] border-rff-gray-line bg-white"
        style={{ left: R, top: TOP, width: RW }}
      >
        <div className="absolute left-0 top-0 h-full w-[10px] bg-rff-gold" />
        <div style={{ padding: '26px 36px 26px 44px' }}>
          <p className="text-[26px] font-bold uppercase tracking-[0.12em] text-rff-muted">Run log, this morning</p>
          {RUNS.map((r, i) => (
            <div key={r.when} className={i === 0 ? 'mt-[22px]' : 'mt-[18px] border-t-[2px] border-rff-gray-line pt-[18px]'}>
              <div className="flex items-baseline gap-[18px]">
                <span className="w-[86px] shrink-0 text-[28px] font-bold text-rff-navy">{r.when}</span>
                <span className="text-[28px] text-rff-body">{r.input}</span>
              </div>
              <div className="mt-[6px] flex items-baseline gap-[18px]">
                <span className="w-[86px] shrink-0 text-[24px] uppercase tracking-[0.08em] text-rff-muted">Out</span>
                <span className="text-[28px] text-rff-body">{r.output}</span>
              </div>
              <div className="mt-[6px] flex items-baseline gap-[18px]">
                <span className="w-[86px] shrink-0 text-[24px] uppercase tracking-[0.08em] text-rff-muted">Check</span>
                <span className={`text-[28px] ${r.check === 'Rules passed' ? 'text-rff-body' : 'font-bold text-rff-navy'}`}>{r.check}</span>
                <span className="ml-auto text-[28px] font-bold text-rff-navy">{r.by}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <p className="absolute text-center text-[33px] font-bold text-rff-navy" style={{ left: L, top: 920, width: 1708 }}>
        When a client asks what the AI did with their data, you read them the run.
      </p>
    </ContentFrame>
  )
}
