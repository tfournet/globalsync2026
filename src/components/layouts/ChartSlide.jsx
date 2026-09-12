import ContentFrame from '../chrome/ContentFrame'

const ACCENT_TEXT = {
  blue: 'text-rff-blue',
  orange: 'text-rff-orange',
  gold: 'text-rff-gold',
}

export default function ChartSlide({
  eyebrow,
  title,
  children,
  readThis,
  source,
  accent = 'blue',
  slideNumber,
}) {
  return (
    <ContentFrame eyebrow={eyebrow} title={title} accent={accent} slideNumber={slideNumber}>
      <div className="grid h-full grid-cols-[2fr_1fr] gap-[32px]">
        <div className="flex items-center justify-center rounded-lg bg-white p-[24px] shadow-sm">
          {children}
        </div>
        <div className="rounded-lg bg-white p-[24px] shadow-sm">
          <p className={`text-[18px] font-bold uppercase tracking-wide ${ACCENT_TEXT[accent]}`}>
            Read this chart
          </p>
          <p className="mt-[12px] text-[19px] text-rff-body/90">{readThis}</p>
          {source && <p className="mt-[20px] text-[14px] text-rff-body/50">{source}</p>}
        </div>
      </div>
    </ContentFrame>
  )
}
