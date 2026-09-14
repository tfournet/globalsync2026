import Eyebrow from '../chrome/Eyebrow'
import TriColorBar from '../chrome/TriColorBar'
import { FOOTER } from '../../config/tokens'

// Editorial: the question set as a magazine opener against one oversized
// question mark, hairline rules above and below.
export default function AutomatonsA() {
  return (
    <div className="relative h-full w-full overflow-hidden bg-white">
      <p
        className="absolute select-none font-bold text-rff-blue"
        style={{ left: 1210, top: 20, fontSize: 760, lineHeight: 1, opacity: 0.12 }}
      >
        ?
      </p>

      <Eyebrow accent="blue" className="absolute left-[106px] top-[48px]">
        Where we are
      </Eyebrow>

      <div className="absolute bg-rff-gray-line" style={{ left: 106, top: 300, width: 1060, height: 1 }} />

      <p
        className="absolute font-bold text-rff-navy"
        style={{ left: 106, top: 366, width: 1060, fontSize: 100, lineHeight: 1.14, letterSpacing: '-0.02em' }}
      >
        Whose vacation request do you dread approving?
      </p>

      <div className="absolute bg-rff-gray-line" style={{ left: 106, top: 688, width: 1060, height: 1 }} />

      <TriColorBar className="absolute" style={{ left: 106, top: 744 }} width={461} />

      <p className="absolute text-rff-muted" style={{ left: 106, top: 930, fontSize: 32 }}>
        {FOOTER.org}
      </p>
    </div>
  )
}
