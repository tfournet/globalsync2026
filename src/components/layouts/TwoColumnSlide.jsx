import ContentFrame from '../chrome/ContentFrame'

const ACCENT_TEXT = {
  blue: 'text-rff-blue',
  orange: 'text-rff-orange',
  gold: 'text-rff-gold',
}
const ACCENT_MARKER = {
  blue: 'marker:text-rff-blue',
  orange: 'marker:text-rff-orange',
  gold: 'marker:text-rff-gold',
}

const TOP = 265
const BOTTOM = 940
const LEFT_WIDTH = 845
const CARD_LEFT = 1066
const CARD_WIDTH = 691

// Left column flows top-down (lead, then points, no fixed gap); the card
// hugs its content and is vertically centered in the content band so short
// keynote copy does not leave a tall empty panel.
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
      <div
        className="absolute flex flex-col justify-center gap-[40px]"
        style={{ left: 106, top: TOP, width: LEFT_WIDTH, height: BOTTOM - TOP }}
      >
        {paragraph && <p className="text-[56px] leading-snug text-rff-navy">{paragraph}</p>}
        {points.length > 0 && (
          <ul className={`list-disc pl-[48px] text-[46px] leading-snug text-rff-body ${ACCENT_MARKER[accent]}`}>
            {points.map((point, i) => (
              <li key={i} className="mt-[28px] first:mt-0">
                {point}
              </li>
            ))}
          </ul>
        )}
      </div>
      {(cardTitle || cardItems.length > 0) && (
        <div
          className="absolute flex flex-col justify-center"
          style={{ left: CARD_LEFT, top: TOP, width: CARD_WIDTH, height: BOTTOM - TOP }}
        >
          <div className="rounded-[4px] bg-rff-light p-[48px]">
            <p className={`text-[32px] font-bold uppercase tracking-[0.12em] ${ACCENT_TEXT[accent]}`}>{cardTitle}</p>
            <ul className={`mt-[24px] list-disc pl-[44px] text-[44px] leading-snug text-rff-body ${ACCENT_MARKER[accent]}`}>
              {cardItems.map((item, i) => (
                <li key={i} className="mt-[28px] first:mt-0">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </ContentFrame>
  )
}
