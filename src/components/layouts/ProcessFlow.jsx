import ContentFrame from '../chrome/ContentFrame'

const PILLAR_ORDER = ['blue', 'orange', 'gold']
const CIRCLE_BG = {
  blue: 'bg-rff-blue',
  orange: 'bg-rff-orange',
  gold: 'bg-rff-gold',
}
const CIRCLE_TEXT = {
  blue: 'text-white',
  orange: 'text-white',
  gold: 'text-rff-navy',
}

export default function ProcessFlow({
  eyebrow,
  title,
  steps = [],
  closing,
  accent = 'blue',
  slideNumber,
}) {
  return (
    <ContentFrame eyebrow={eyebrow} title={title} accent={accent} slideNumber={slideNumber}>
      <div className="flex h-full flex-col justify-center gap-[32px]">
        <div className="flex items-start justify-between">
          {steps.map((step, i) => {
            const pillar = PILLAR_ORDER[i % PILLAR_ORDER.length]
            return (
              <div key={i} className="flex flex-1 flex-col items-center gap-[12px] px-[12px] text-center">
                <div
                  className={`flex h-[60px] w-[60px] items-center justify-center rounded-full text-[24px] font-bold ${CIRCLE_BG[pillar]} ${CIRCLE_TEXT[pillar]}`}
                >
                  {i + 1}
                </div>
                <p className="text-[20px] font-bold text-rff-navy">{step.title}</p>
                <p className="text-[16px] text-rff-body/80">{step.description}</p>
              </div>
            )
          })}
        </div>
        {closing && (
          <p className="text-center text-[20px] font-bold text-rff-navy">{closing}</p>
        )}
      </div>
    </ContentFrame>
  )
}
