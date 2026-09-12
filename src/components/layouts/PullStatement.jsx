import TriColorBar from '../chrome/TriColorBar'
import { FOOTER } from '../../config/tokens'

const ACCENT_TEXT = {
  blue: 'text-rff-blue-glow',
  orange: 'text-rff-orange',
  gold: 'text-rff-gold',
}

export default function PullStatement({ eyebrow, statement, accent = 'gold' }) {
  return (
    <div className="relative flex h-full w-full flex-col justify-center gap-[24px] bg-rff-dark px-[120px] text-white">
      <p className={`text-[20px] font-bold uppercase tracking-[0.15em] ${ACCENT_TEXT[accent]}`}>
        {eyebrow}
      </p>
      <p className="max-w-[920px] text-[44px] font-bold leading-snug">{statement}</p>
      <TriColorBar />
      <p className="text-[18px] opacity-60">{FOOTER.org}</p>
    </div>
  )
}
