import RffLogo from '../chrome/RffLogo'
import TriColorBar from '../chrome/TriColorBar'
import { FOOTER } from '../../config/tokens'

// Stage cover: navy full bleed, one orange slab, title sized for the back row.
export default function CoverC() {
  return (
    <div className="relative h-full w-full overflow-hidden bg-rff-navy">
      <div className="absolute bg-rff-orange" style={{ left: 0, top: 332, width: 820, height: 26 }} />

      <div className="absolute" style={{ right: 106, top: 96 }}>
        <RffLogo variant="badge" className="h-[200px] w-[200px]" />
      </div>
      <p
        className="absolute text-right font-bold leading-[1.05] tracking-[0.18em]"
        style={{ right: 106, top: 320, fontSize: 30 }}
      >
        <span className="block text-rff-blue-glow">ROCKET FUEL</span>
        <span className="block text-rff-orange">FACTORY</span>
      </p>

      <h1
        className="absolute font-bold text-white"
        style={{ left: 106, top: 396, width: 1500, fontSize: 142, lineHeight: 1.04, letterSpacing: '-0.03em' }}
      >
        Doing More Without Adding Bodies
      </h1>

      <TriColorBar className="absolute" style={{ left: 106, top: 792 }} width={512} />

      <p className="absolute text-rff-light-text" style={{ left: 106, top: 856, fontSize: 40 }}>
        Global Sync Meetup NYC, 17 September 2026
      </p>
      <p className="absolute text-rff-muted-dark" style={{ left: 106, top: 920, fontSize: 32 }}>
        Tim Fournet | Rewst
      </p>
      <p className="absolute text-right text-rff-gold" style={{ right: 106, top: 920, width: 700, fontSize: 32 }}>
        {FOOTER.site}
      </p>
    </div>
  )
}
