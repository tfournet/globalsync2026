import RffLogo from '../chrome/RffLogo'
import TriColorBar from '../chrome/TriColorBar'
import Footer from '../chrome/Footer'
import { FOOTER } from '../../config/tokens'

export default function ClosingSlide({
  title = 'Next Step',
  action,
  ecosystemLine,
  copyrightLine,
  slideNumber,
}) {
  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center gap-[24px] bg-rff-navy px-[120px] text-center text-white">
      <RffLogo className="h-[100px] w-[100px]" />
      <h1 className="text-[48px] font-bold">{title}</h1>
      <TriColorBar />
      {action && <p className="max-w-[820px] text-[24px] text-rff-gold">{action}</p>}
      <p className="text-[20px] opacity-70">{FOOTER.site}</p>
      {ecosystemLine && <p className="text-[18px] opacity-60">{ecosystemLine}</p>}
      {copyrightLine && <p className="text-[14px] opacity-40">{copyrightLine}</p>}
      <Footer slideNumber={slideNumber} light />
    </div>
  )
}
