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
  const wordmarkWords = FOOTER.org.toUpperCase().split(' ')
  const wordmarkLine1 = wordmarkWords.slice(0, -1).join(' ')
  const wordmarkLine2 = wordmarkWords[wordmarkWords.length - 1]

  return (
    <div
      className={`relative flex h-full w-full flex-col items-center justify-center gap-[24px] px-[120px] text-center ${
        dark ? 'bg-rff-navy text-white' : 'bg-rff-light text-rff-navy'
      }`}
    >
      <RffLogo variant={dark ? 'badge' : 'rocket'} className="h-[307px] w-[307px]" />
      <p className="leading-tight font-bold tracking-[0.18em] text-[45px]">
        <span className="block text-rff-blue-glow">{wordmarkLine1}</span>
        <span className="block text-rff-orange">{wordmarkLine2}</span>
      </p>
      <TriColorBar width={512} />
      <h1 className={`max-w-[1600px] text-[88px] font-bold leading-tight ${dark ? 'text-white' : 'text-rff-navy'}`}>
        {title}
      </h1>
      {subtitle && (
        <p className={`max-w-[1200px] text-[37px] ${dark ? 'text-rff-light-text' : 'text-rff-body'}`}>{subtitle}</p>
      )}
      {eventLine && (
        <p className={`text-[29px] ${dark ? 'text-rff-muted-dark' : 'text-rff-muted'}`}>{eventLine}</p>
      )}
      {presenters.length > 0 && (
        <p className={`text-[29px] ${dark ? 'text-rff-muted-dark' : 'text-rff-muted'}`}>
          {presenters.join('  |  ')}
        </p>
      )}
      <p className={`text-[29px] ${dark ? 'text-rff-gold' : 'text-rff-blue'}`}>{FOOTER.site}</p>
    </div>
  )
}
