import ContentFrame from '../chrome/ContentFrame'

const FILL_ORDER = ['blue', 'blue-glow', 'orange', 'gold']
const CIRCLE_BG = {
  blue: 'bg-rff-blue',
  'blue-glow': 'bg-rff-blue-glow',
  orange: 'bg-rff-orange',
  gold: 'bg-rff-gold',
}
const CIRCLE_TEXT = {
  blue: 'text-white',
  'blue-glow': 'text-white',
  orange: 'text-white',
  gold: 'text-rff-navy',
}

const CIRCLE_SIZE = 167
const CIRCLE_CENTER_Y = 480
const CIRCLE_TOP = CIRCLE_CENTER_Y - CIRCLE_SIZE / 2
const CONNECTOR_HEIGHT = 13

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
      <div
        className="absolute bg-rff-gray-line"
        style={{ left: 106, right: 106, top: CIRCLE_CENTER_Y - CONNECTOR_HEIGHT / 2, height: CONNECTOR_HEIGHT }}
      />
      <div className="absolute flex justify-between" style={{ left: 106, right: 106, top: CIRCLE_TOP }}>
        {steps.map((step, i) => {
          const fill = FILL_ORDER[i % FILL_ORDER.length]
          return (
            <div key={i} className="flex flex-1 flex-col items-center px-[12px] text-center">
              <div
                className={`flex items-center justify-center rounded-full ${CIRCLE_BG[fill]} ${CIRCLE_TEXT[fill]}`}
                style={{ width: CIRCLE_SIZE, height: CIRCLE_SIZE }}
              >
                <span className="text-[53px] font-bold">{i + 1}</span>
              </div>
              <p className="mt-[24px] max-w-[490px] text-[40px] font-bold leading-tight text-rff-navy">
                {step.title}
              </p>
              <p className="mt-[12px] max-w-[490px] text-[31px] text-rff-body">{step.description}</p>
            </div>
          )
        })}
      </div>
      {closing && (
        <p
          className="absolute text-center text-[33px] font-bold text-rff-navy"
          style={{ left: 106, top: 900, width: 1708 }}
        >
          {closing}
        </p>
      )}
    </ContentFrame>
  )
}
