import RffLogo from '../chrome/RffLogo'
import TriColorBar from '../chrome/TriColorBar'
import { FOOTER } from '../../config/tokens'

// Editorial cover: magazine opener. The title is the oversized element,
// left aligned under a masthead, between two hairline rules.
export default function CoverA() {
  return (
    <div className="relative h-full w-full bg-white">
      <div className="absolute" style={{ left: 106, top: 64 }}>
        <RffLogo variant="rocket" className="h-[104px] w-[104px]" />
      </div>
      <p
        className="absolute font-bold leading-[1.05] tracking-[0.18em]"
        style={{ left: 236, top: 72, fontSize: 32 }}
      >
        <span className="block text-rff-blue">ROCKET FUEL</span>
        <span className="block text-rff-orange">FACTORY</span>
      </p>

      <div className="absolute bg-rff-gray-line" style={{ left: 106, top: 216, width: 1708, height: 1 }} />

      <TriColorBar className="absolute" style={{ left: 106, top: 276 }} width={461} />

      <h1
        className="absolute font-bold text-rff-navy"
        style={{ left: 106, top: 336, width: 1640, fontSize: 150, lineHeight: 1.02, letterSpacing: '-0.03em' }}
      >
        Doing More Without Adding Bodies
      </h1>

      <div className="absolute bg-rff-gray-line" style={{ left: 106, top: 724, width: 1708, height: 1 }} />

      <p className="absolute text-rff-body" style={{ left: 106, top: 764, fontSize: 40 }}>
        Global Sync Meetup NYC, 17 September 2026
      </p>
      <p className="absolute text-rff-muted" style={{ left: 106, top: 836, fontSize: 32 }}>
        Tim Fournet | Rewst
      </p>
      <p
        className="absolute text-right text-rff-blue"
        style={{ left: 1114, top: 836, width: 700, fontSize: 32 }}
      >
        {FOOTER.site}
      </p>
    </div>
  )
}
