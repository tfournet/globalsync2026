import RffLogo from '../chrome/RffLogo'
import TriColorBar from '../chrome/TriColorBar'
import { FOOTER } from '../../config/tokens'

export default function ClosingSlide({
  title = 'Next Step',
  action,
  ecosystemLine,
  copyrightLine,
}) {
  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center gap-[24px] bg-rff-navy px-[120px] text-center text-white">
      <RffLogo variant="badge" className="h-[282px] w-[282px]" />
      <h1 className="text-[85px] font-bold">{title}</h1>
      <TriColorBar />
      {action && <p className="max-w-[1480px] text-[42px] leading-[1.35] text-rff-light-text">{action}</p>}
      <p className="text-[40px] text-rff-gold">{FOOTER.site}</p>
      {ecosystemLine && <p className="text-[31px] text-rff-muted-dark">{ecosystemLine}</p>}
      {copyrightLine && <p className="text-[24px] text-rff-muted-dark">{copyrightLine}</p>}
    </div>
  )
}
