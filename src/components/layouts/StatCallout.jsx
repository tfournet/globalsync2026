import ContentFrame from '../chrome/ContentFrame'

const ACCENT_TEXT = {
  blue: 'text-rff-blue',
  orange: 'text-rff-orange',
  gold: 'text-rff-gold',
}

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
      <div className="flex h-full flex-col justify-center gap-[28px]">
        {intro && <p className="text-[20px] text-rff-body/80">{intro}</p>}
        <div className="grid grid-cols-3 gap-[28px]">
          {stats.map((stat, i) => (
            <div key={i} className="rounded-lg bg-white p-[24px] text-center shadow-sm">
              <p className={`text-[64px] font-bold ${ACCENT_TEXT[accent]}`}>{stat.value}</p>
              <p className="mt-[8px] text-[18px] text-rff-body/80">{stat.label}</p>
            </div>
          ))}
        </div>
        {takeaway && (
          <p className="text-[20px] font-bold text-rff-navy">Takeaway: {takeaway}</p>
        )}
      </div>
    </ContentFrame>
  )
}
