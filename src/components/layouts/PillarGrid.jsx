import ContentFrame from '../chrome/ContentFrame'

const BLOCK_BG = {
  connection: 'bg-rff-blue text-white',
  education: 'bg-rff-orange text-white',
  innovation: 'bg-rff-gold text-rff-navy',
}

// blocks: [{ pillar: 'connection'|'education'|'innovation', label, body }]
export default function PillarGrid({ eyebrow, title, blocks = [], note, accent = 'blue', slideNumber }) {
  return (
    <ContentFrame eyebrow={eyebrow} title={title} accent={accent} slideNumber={slideNumber}>
      <div className="flex h-full flex-col justify-center gap-[20px]">
        <div className="grid grid-cols-3 gap-[28px]">
          {blocks.map((block) => (
            <div key={block.pillar} className={`rounded-lg p-[24px] ${BLOCK_BG[block.pillar]}`}>
              <p className="text-[22px] font-bold">{block.label}</p>
              <p className="mt-[10px] text-[18px] opacity-90">{block.body}</p>
            </div>
          ))}
        </div>
        {note && <p className="text-[16px] text-rff-body/70">{note}</p>}
      </div>
    </ContentFrame>
  )
}
