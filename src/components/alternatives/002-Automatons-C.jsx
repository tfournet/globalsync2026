import TriColorBar from '../chrome/TriColorBar'
import { FOOTER } from '../../config/tokens'

// Stage: navy full bleed, one blue slab running the full height, the
// question sized for a 130 inch screen.
export default function AutomatonsC() {
  return (
    <div className="relative h-full w-full overflow-hidden bg-rff-navy text-white">
      <div className="absolute bg-rff-blue" style={{ left: 0, top: 0, width: 108, height: 1080 }} />

      <p
        className="absolute font-bold uppercase tracking-[0.15em] text-rff-blue-glow"
        style={{ left: 240, top: 210, fontSize: 29 }}
      >
        Where we are
      </p>

      <p
        className="absolute font-bold"
        style={{ left: 240, top: 300, width: 1540, fontSize: 122, lineHeight: 1.12, letterSpacing: '-0.02em' }}
      >
        Whose vacation request do you dread approving?
      </p>

      <TriColorBar className="absolute" style={{ left: 240, top: 760 }} width={512} />

      <p className="absolute text-rff-muted-dark" style={{ left: 240, top: 930, fontSize: 32 }}>
        {FOOTER.org}
      </p>
    </div>
  )
}
