import ContentFrame from '../chrome/ContentFrame'

const FIGURE_COLORS = ['text-rff-blue', 'text-rff-orange', 'text-rff-navy']

const GAP = 42
const COL_WIDTH = (1708 - 2 * GAP) / 3
const COL_X = [106, 106 + COL_WIDTH + GAP, 106 + 2 * (COL_WIDTH + GAP)]
const TOP = 340
const HEIGHT = 530

export default function StatCallout({
  eyebrow,
  title,
  intro,
  stats = [],
  takeaway,
  accent = 'blue',
  slideNumber,
}) {
  return (
    <ContentFrame eyebrow={eyebrow} title={title} accent={accent} slideNumber={slideNumber}>
      {intro && (
        <p className="absolute text-[35px] text-rff-body" style={{ left: 106, top: 265, width: 1708 }}>
          {intro}
        </p>
      )}
      {stats.map((stat, i) => (
        <div
          key={i}
          className="absolute flex flex-col items-center justify-center rounded-[4px] bg-rff-light text-center"
          style={{ left: COL_X[i], top: TOP, width: COL_WIDTH, height: HEIGHT }}
        >
          <p className={`text-[128px] font-bold ${FIGURE_COLORS[i % FIGURE_COLORS.length]}`}>{stat.value}</p>
          <p className="mt-[16px] text-[32px] text-rff-body">{stat.label}</p>
        </div>
      ))}
      {takeaway && (
        <p
          className="absolute text-[33px] font-bold text-rff-navy"
          style={{ left: 106, top: 900, width: 1708 }}
        >
          Takeaway: {takeaway}
        </p>
      )}
    </ContentFrame>
  )
}
