import ContentFrame from '../chrome/ContentFrame'

const PILLAR_ORDER = ['blue', 'orange', 'gold']
const BAR_BG = {
  blue: 'bg-rff-blue',
  orange: 'bg-rff-orange',
  gold: 'bg-rff-gold',
}
const NUMBER_TEXT = {
  blue: 'text-rff-blue',
  orange: 'text-rff-orange',
  gold: 'text-[#272B33]',
}

const GAP = 42
const COL_WIDTH = (1708 - 2 * GAP) / 3
const COL_X = [106, 106 + COL_WIDTH + GAP, 106 + 2 * (COL_WIDTH + GAP)]
const TOP = 265
const HEIGHT = 590
const BAR_HEIGHT = 29

export default function ThreeUpGrid({ eyebrow, title, cards = [], accent = 'blue', slideNumber }) {
  return (
    <ContentFrame eyebrow={eyebrow} title={title} accent={accent} slideNumber={slideNumber}>
      {cards.map((card, i) => {
        const pillar = PILLAR_ORDER[i % PILLAR_ORDER.length]
        return (
          <div
            key={i}
            className="absolute overflow-hidden rounded-[4px] bg-rff-light"
            style={{ left: COL_X[i], top: TOP, width: COL_WIDTH, height: HEIGHT }}
          >
            <div className={`w-full ${BAR_BG[pillar]}`} style={{ height: BAR_HEIGHT }} />
            <div className="p-[53px]">
              <p className={`text-[32px] font-bold ${NUMBER_TEXT[pillar]}`}>{String(i + 1).padStart(2, '0')}</p>
              <p className="mt-[16px] text-[45px] font-bold leading-tight text-rff-navy">{card.title}</p>
              <p className="mt-[16px] text-[32px] text-rff-body">{card.body}</p>
            </div>
          </div>
        )
      })}
    </ContentFrame>
  )
}
