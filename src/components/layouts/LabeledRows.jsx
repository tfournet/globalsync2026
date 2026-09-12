import ContentFrame from '../chrome/ContentFrame'

const ACCENT_TEXT = {
  blue: 'text-rff-blue',
  orange: 'text-rff-orange',
  gold: 'text-rff-gold',
}

export default function LabeledRows({ eyebrow, title, rows = [], accent = 'blue', slideNumber }) {
  return (
    <ContentFrame eyebrow={eyebrow} title={title} accent={accent} slideNumber={slideNumber}>
      <div className="flex h-full flex-col justify-center overflow-hidden rounded-lg">
        {rows.map((row, i) => (
          <div
            key={i}
            className={`grid grid-cols-[1fr_2fr] gap-[28px] px-[24px] py-[18px] ${
              i % 2 === 0 ? 'bg-white' : 'bg-transparent'
            }`}
          >
            <p className={`text-[20px] font-bold ${ACCENT_TEXT[accent]}`}>{row.term}</p>
            <p className="text-[19px] text-rff-body/90">{row.definition}</p>
          </div>
        ))}
      </div>
    </ContentFrame>
  )
}
