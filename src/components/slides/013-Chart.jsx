// PLACEHOLDER: session copy for the Global Sync Meetup NYC talk, not final. Illustrative figures.
import ChartSlide from '../layouts/ChartSlide'

const QUARTERS = [
  { label: 'Q1', margin: 41, target: 50 },
  { label: 'Q2', margin: 44, target: 50 },
  { label: 'Q3', margin: 49, target: 55 },
  { label: 'Q4', margin: 53, target: 55 },
]
const MAX = 70

function MarginBars() {
  return (
    <div className="flex h-full w-full flex-col gap-[16px]">
      <div className="flex items-center gap-[24px] text-[20px] text-rff-body">
        <span className="flex items-center gap-[8px]">
          <span className="inline-block h-[16px] w-[16px] rounded-sm bg-rff-blue" /> Gross margin
        </span>
        <span className="flex items-center gap-[8px]">
          <span className="inline-block h-[16px] w-[16px] rounded-sm bg-rff-orange" /> Target
        </span>
      </div>
      <div className="flex flex-1 items-end justify-around gap-[24px]">
        {QUARTERS.map((q) => (
          <div key={q.label} className="flex h-full flex-1 flex-col items-center justify-end gap-[16px]">
            <div className="flex h-full items-end gap-[12px]">
              <div
                className="w-[56px] rounded-t-sm bg-rff-blue"
                style={{ height: `${(q.margin / MAX) * 100}%` }}
              />
              <div
                className="w-[56px] rounded-t-sm bg-rff-orange"
                style={{ height: `${(q.target / MAX) * 100}%` }}
              />
            </div>
            <span className="text-[20px] text-rff-muted">{q.label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Chart({ slideNumber }) {
  return (
    <ChartSlide
      eyebrow="Margin Trend"
      title="Gross Margin by Quarter"
      accent="blue"
      slideNumber={slideNumber}
      readThis="Margin moved twelve points across four quarters. The gap to target closed after coverage crossed seventy percent, not when headcount changed."
      source="Source: internal reporting, illustrative"
    >
      <MarginBars />
    </ChartSlide>
  )
}
