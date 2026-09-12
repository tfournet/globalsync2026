import ContentFrame from '../chrome/ContentFrame'

const PILLAR_ORDER = ['blue', 'orange', 'gold']
const BAR_BG = {
  blue: 'bg-rff-blue',
  orange: 'bg-rff-orange',
  gold: 'bg-rff-gold',
}
const TEXT_COLOR = {
  blue: 'text-rff-blue',
  orange: 'text-rff-orange',
  gold: 'text-rff-navy',
}

export default function ThreeUpGrid({ eyebrow, title, cards = [], accent = 'blue', slideNumber }) {
  return (
    <ContentFrame eyebrow={eyebrow} title={title} accent={accent} slideNumber={slideNumber}>
      <div className="grid h-full grid-cols-3 gap-[28px]">
        {cards.map((card, i) => {
          const pillar = PILLAR_ORDER[i % PILLAR_ORDER.length]
          return (
            <div key={i} className="flex flex-col rounded-lg bg-white shadow-sm">
              <div className={`h-[10px] rounded-t-lg ${BAR_BG[pillar]}`} />
              <div className="flex flex-col gap-[10px] p-[24px]">
                <span className={`text-[20px] font-bold ${TEXT_COLOR[pillar]}`}>
                  {String(i + 1).padStart(2, '0')}
                </span>
                <p className="text-[20px] font-bold text-rff-navy">{card.title}</p>
                <p className="text-[18px] text-rff-body/80">{card.body}</p>
              </div>
            </div>
          )
        })}
      </div>
    </ContentFrame>
  )
}
