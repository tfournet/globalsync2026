import TriColorBar from '../chrome/TriColorBar'
import { FOOTER } from '../../config/tokens'

const ACCENT_TEXT = {
  blue: 'text-rff-blue-glow',
  orange: 'text-rff-orange',
  gold: 'text-rff-gold',
}

export default function PullStatement({ eyebrow, statement, attribution, accent = 'gold' }) {
  return (
    <div className="relative h-full w-full bg-rff-dark text-white">
      <p
        className={`absolute text-[29px] font-bold uppercase tracking-[0.15em] ${ACCENT_TEXT[accent]}`}
        style={{ left: 106, top: 210 }}
      >
        {eyebrow}
      </p>
      <p
        className="absolute text-[72px] font-bold leading-[1.15]"
        style={{ left: 106, top: 327, width: 1613 }}
      >
        {statement}
      </p>
      <TriColorBar className="absolute" style={{ left: 106, top: 620 }} />
      <p className="absolute text-[32px] text-rff-muted-dark" style={{ left: 106, top: 930 }}>
        {attribution || FOOTER.org}
      </p>
    </div>
  )
}
