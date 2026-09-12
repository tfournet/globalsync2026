import ContentFrame from '../chrome/ContentFrame'

// The one illustrated slide in the deck. Title and image only; Tim says the
// rest. Image: a belt of identical gray boxes, one lid open on a small orange
// part (generated, docs/concepts/conveyor-1.png, trimmed). If this still
// reads as decoration, the fallback is to cut the slide and say the idea on
// slide 2.

const LEFT = 106
const WIDTH = 1708

export default function HiddenDecisionSlide({ eyebrow, title, image, slideNumber }) {
  return (
    <ContentFrame eyebrow={eyebrow} title={title} accent="orange" slideNumber={slideNumber}>
      <img
        src={image}
        alt=""
        draggable={false}
        className="absolute select-none"
        style={{ left: LEFT, top: 420, width: WIDTH }}
      />
    </ContentFrame>
  )
}
