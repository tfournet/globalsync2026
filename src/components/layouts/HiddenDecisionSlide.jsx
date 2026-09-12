import ContentFrame from '../chrome/ContentFrame'

// The one illustrated slide in the deck. A generated raster (docs/concepts/
// conveyor-1.png, trimmed) of a belt of identical gray boxes with one lid
// open on a small orange part. Two labels under it carry the argument.

const LEFT = 106
const WIDTH = 1708

export default function HiddenDecisionSlide({
  eyebrow,
  title,
  image,
  motionLabel,
  decisionLabel,
  decision,
  slideNumber,
}) {
  return (
    <ContentFrame eyebrow={eyebrow} title={title} accent="orange" slideNumber={slideNumber}>
      <img
        src={image}
        alt=""
        draggable={false}
        className="absolute select-none"
        style={{ left: LEFT, top: 300, width: WIDTH }}
      />
      {/* the open box sits about 57% across the trimmed image; hang its label there */}
      <div className="absolute" style={{ left: LEFT + WIDTH * 0.605, top: 630, width: 3, height: 60, background: '#FF5219' }} />
      <p
        className="absolute text-[33px] font-bold text-rff-orange"
        style={{ left: LEFT + WIDTH * 0.605 + 20, top: 652, width: 640 }}
      >
        {decisionLabel}
      </p>
      <p className="absolute text-[33px] text-rff-muted" style={{ left: LEFT, top: 652, width: 800 }}>
        {motionLabel}
      </p>
      <p
        className="absolute text-[40px] font-bold leading-tight text-rff-navy"
        style={{ left: LEFT, top: 780, width: WIDTH }}
      >
        {decision}
      </p>
    </ContentFrame>
  )
}
