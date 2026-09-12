import ContentFrame from '../chrome/ContentFrame'

const GAP = 42
const COL_WIDTH = (1708 - 2 * GAP) / 3
const COL_X = [106, 106 + COL_WIDTH + GAP, 106 + 2 * (COL_WIDTH + GAP)]
const TOP = 265
const HEIGHT = 590

export default function PresentersSlide({ eyebrow, title, presenters = [], accent = 'blue', slideNumber }) {
  const single = presenters.length === 1
  return (
    <ContentFrame eyebrow={eyebrow} title={title} accent={accent} slideNumber={slideNumber}>
      {presenters.map((p, i) => (
        <div
          key={i}
          className="absolute flex flex-col rounded-[4px] bg-rff-light p-[53px]"
          style={
            single
              ? { left: 106, top: TOP, width: COL_WIDTH, height: HEIGHT }
              : { left: COL_X[i], top: TOP, width: COL_WIDTH, height: HEIGHT }
          }
        >
          {p.headshot ? (
            <img
              src={p.headshot}
              alt={p.name}
              className="mb-[24px] h-[160px] w-[160px] rounded-full object-cover"
            />
          ) : (
            // TODO headshot
            <div className="mb-[24px] h-[160px] w-[160px] rounded-full bg-rff-gray-line" />
          )}
          <p className="text-[45px] font-bold text-rff-navy">{p.name}</p>
          <div className="mt-[8px] flex items-center">
            <p className="text-[29px] font-bold text-rff-blue">{p.role}</p>
            {p.logo}
          </div>
          <p className="mt-[16px] text-[32px] text-rff-body">{p.bio}</p>
        </div>
      ))}
    </ContentFrame>
  )
}
