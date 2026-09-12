import ContentFrame from '../chrome/ContentFrame'

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
      <p className="absolute text-[35px] leading-snug text-rff-body" style={{ left: 106, top: 265, width: 845 }}>
        {paragraph}
      </p>
      <ul
        className="absolute list-disc pl-[32px] text-[35px] leading-snug text-rff-body marker:text-rff-navy"
        style={{ left: 106, top: 459, width: 845 }}
      >
        {points.map((point, i) => (
          <li key={i} className="mt-[16px] first:mt-0">
            {point}
          </li>
        ))}
      </ul>
      <div
        className="absolute rounded-[4px] bg-rff-light p-[48px]"
        style={{ left: 1066, top: 280, width: 691, height: 530 }}
      >
        <p className="text-[27px] font-bold uppercase text-rff-blue">{cardTitle}</p>
        <ul className="mt-[24px] list-disc pl-[32px] text-[33px] leading-snug text-rff-body marker:text-rff-blue">
          {cardItems.map((item, i) => (
            <li key={i} className="mt-[16px] first:mt-0">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </ContentFrame>
  )
}
