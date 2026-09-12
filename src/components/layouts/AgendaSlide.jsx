import ContentFrame from '../chrome/ContentFrame'

const ACCENT_TEXT = {
  blue: 'text-rff-blue',
  orange: 'text-rff-orange',
}

const ROW_Y = [337, 563, 790]
const COL_TEXT_X = [225, 1108]
const COL_TEXT_WIDTH = [764, 706]
const NUMBER_OFFSET = 119

export default function AgendaSlide({ eyebrow = 'Agenda', title, items = [], accent = 'blue', slideNumber }) {
  return (
    <ContentFrame eyebrow={eyebrow} title={title} accent={accent} slideNumber={slideNumber}>
      {items.map((item, i) => {
        const col = i % 2
        const row = Math.floor(i / 2)
        const textX = COL_TEXT_X[col]
        const numberAccent = i % 2 === 0 ? 'blue' : 'orange'
        return (
          <div key={item.number}>
            <span
              className={`absolute text-[48px] font-bold ${ACCENT_TEXT[numberAccent]}`}
              style={{ left: textX - NUMBER_OFFSET, top: ROW_Y[row] }}
            >
              {item.number}
            </span>
            <div className="absolute" style={{ left: textX, top: ROW_Y[row], width: COL_TEXT_WIDTH[col] }}>
              <p className="text-[40px] font-bold leading-tight text-rff-navy">{item.title}</p>
              <p className="mt-[8px] text-[31px] text-rff-body">{item.description}</p>
            </div>
          </div>
        )
      })}
    </ContentFrame>
  )
}
