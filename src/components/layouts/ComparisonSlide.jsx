import ContentFrame from '../chrome/ContentFrame'

export default function ComparisonSlide({
  eyebrow,
  title,
  left,
  right,
  accent = 'blue',
  slideNumber,
}) {
  return (
    <ContentFrame eyebrow={eyebrow} title={title} accent={accent} slideNumber={slideNumber}>
      <div className="grid h-full grid-cols-2 gap-[28px]">
        <div className="flex flex-col rounded-lg bg-rff-navy text-white">
          <p className="px-[24px] py-[16px] text-[20px] font-bold uppercase tracking-wide">
            {left.heading}
          </p>
          <ul className="flex flex-col gap-[12px] px-[24px] pb-[24px]">
            {left.items.map((item, i) => (
              <li key={i} className="text-[19px] opacity-90">
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col rounded-lg bg-rff-blue text-white">
          <p className="px-[24px] py-[16px] text-[20px] font-bold uppercase tracking-wide">
            {right.heading}
          </p>
          <ul className="flex flex-col gap-[12px] px-[24px] pb-[24px]">
            {right.items.map((item, i) => (
              <li key={i} className="text-[19px] opacity-90">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </ContentFrame>
  )
}
