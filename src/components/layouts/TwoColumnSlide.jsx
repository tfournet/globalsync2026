import ContentFrame from '../chrome/ContentFrame'

const ACCENT_TEXT = {
  blue: 'text-rff-blue',
  orange: 'text-rff-orange',
  gold: 'text-rff-gold',
}

export default function TwoColumnSlide({
  eyebrow,
  title,
  paragraph,
  points = [],
  cardTitle,
  cardItems = [],
  accent = 'blue',
  slideNumber,
}) {
  return (
    <ContentFrame eyebrow={eyebrow} title={title} accent={accent} slideNumber={slideNumber}>
      <div className="grid h-full grid-cols-[1.4fr_1fr] gap-[46px]">
        <div className="flex flex-col gap-[20px]">
          <p className="text-[22px] leading-snug text-rff-body">{paragraph}</p>
          <ul className="flex flex-col gap-[12px]">
            {points.map((point, i) => (
              <li key={i} className="text-[20px] text-rff-body/90">
                {point}
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-lg bg-white p-[28px] shadow-sm">
          <p className={`text-[18px] font-bold uppercase tracking-wide ${ACCENT_TEXT[accent]}`}>
            {cardTitle}
          </p>
          <ul className="mt-[16px] flex flex-col gap-[12px]">
            {cardItems.map((item, i) => (
              <li key={i} className="text-[19px] text-rff-body/90">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </ContentFrame>
  )
}
