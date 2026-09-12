import ContentFrame from '../chrome/ContentFrame'

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
      <div className="absolute" style={{ left: 106, top: 265, width: 1220, height: 600 }}>
        {children}
      </div>
      <div
        className="absolute flex flex-col rounded-[4px] bg-rff-light p-[32px]"
        style={{ left: 1325, top: 265, width: 490, height: 590 }}
      >
        <p className="text-[27px] font-bold uppercase text-rff-blue">Read this chart</p>
        <p className="mt-[16px] text-[32px] text-rff-body">{readThis}</p>
        {source && <p className="mt-auto text-[27px] text-rff-muted">{source}</p>}
      </div>
    </ContentFrame>
  )
}
