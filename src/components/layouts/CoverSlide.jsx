import RffLogo from '../chrome/RffLogo'
import TriColorBar from '../chrome/TriColorBar'
import { FOOTER } from '../../config/tokens'

export default function CoverSlide({
  variant = 'dark',
  title,
  subtitle,
  presenters = [],
  eventLine,
}) {
  const dark = variant === 'dark'

  return (
    <div
      className={`relative flex h-full w-full flex-col items-center justify-center gap-[28px] px-[120px] text-center ${
        dark ? 'bg-rff-navy text-white' : 'bg-rff-light text-rff-navy'
      }`}
    >
      <RffLogo className="h-[140px] w-[140px]" />
      <p className="text-[20px] font-bold uppercase tracking-[0.2em]">{FOOTER.org}</p>
      <TriColorBar />
      <h1 className="text-[64px] font-bold leading-tight">{title}</h1>
      {subtitle && <p className="max-w-[860px] text-[26px] opacity-80">{subtitle}</p>}
      {eventLine && <p className="text-[20px] opacity-70">{eventLine}</p>}
      {presenters.length > 0 && (
        <p className="text-[20px] opacity-90">{presenters.join(' | ')}</p>
      )}
      <p className={`text-[20px] ${dark ? 'text-rff-gold' : 'text-rff-blue'}`}>{FOOTER.site}</p>
    </div>
  )
}
