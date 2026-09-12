import ContentFrame from '../chrome/ContentFrame'

const ACCENT_TEXT = {
  blue: 'text-rff-blue',
  orange: 'text-rff-orange',
  gold: 'text-rff-gold',
}

export default function AgendaSlide({ eyebrow = 'Agenda', title, items = [], accent = 'blue', slideNumber }) {
  return (
    <ContentFrame eyebrow={eyebrow} title={title} accent={accent} slideNumber={slideNumber}>
      <div className="grid h-full grid-cols-2 gap-x-[56px] gap-y-[30px] content-center">
        {items.map((item) => (
          <div key={item.number} className="flex gap-[20px]">
            <span className={`text-[26px] font-bold ${ACCENT_TEXT[accent]}`}>{item.number}</span>
            <div>
              <p className="text-[22px] font-bold text-rff-navy">{item.title}</p>
              <p className="text-[18px] text-rff-body/80">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </ContentFrame>
  )
}
