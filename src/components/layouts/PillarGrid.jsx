import ContentFrame from '../chrome/ContentFrame'

const BLOCK_BG = {
  connection: 'bg-rff-blue text-white',
  education: 'bg-rff-orange text-white',
  innovation: 'bg-rff-gold text-rff-navy',
}

const GAP = 42
const COL_WIDTH = (1708 - 2 * GAP) / 3
const COL_X = [106, 106 + COL_WIDTH + GAP, 106 + 2 * (COL_WIDTH + GAP)]
const BLOCK_TOP = 265
const BLOCK_HEIGHT = 272
const DESC_TOP = 560
const DESC_WIDTH = 442

// blocks: [{ pillar: 'connection'|'education'|'innovation', label, body }]
export default function PillarGrid({ eyebrow, title, blocks = [], note, accent = 'blue', slideNumber }) {
  return (
    <ContentFrame eyebrow={eyebrow} title={title} accent={accent} slideNumber={slideNumber}>
      {blocks.map((block, i) => (
        <div
          key={block.pillar}
          className={`absolute flex items-center rounded-[4px] pl-[53px] ${BLOCK_BG[block.pillar]}`}
          style={{ left: COL_X[i], top: BLOCK_TOP, width: COL_WIDTH, height: BLOCK_HEIGHT }}
        >
          <p className="text-[53px] font-bold">{block.label}</p>
        </div>
      ))}
      {blocks.map((block, i) => (
        <p
          key={`${block.pillar}-desc`}
          className="absolute text-[33px] text-rff-body"
          style={{ left: COL_X[i], top: DESC_TOP, width: DESC_WIDTH }}
        >
          {block.body}
        </p>
      ))}
      {note && (
        <p className="absolute text-[31px] text-rff-muted" style={{ left: 106, top: 880, width: 1708 }}>
          {note}
        </p>
      )}
    </ContentFrame>
  )
}
