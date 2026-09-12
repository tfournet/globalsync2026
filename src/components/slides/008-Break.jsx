// PLACEHOLDER: session copy for the Global Sync Meetup NYC talk, not final.
import RffLogo from '../chrome/RffLogo'
import TriColorBar from '../chrome/TriColorBar'
import Footer from '../chrome/Footer'

export default function Break({ slideNumber }) {
  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center gap-[24px] bg-rff-navy px-[120px] text-center text-white">
      <p className="text-[29px] font-bold uppercase tracking-[0.15em] text-rff-gold">Break</p>
      <h1 className="text-[107px] font-bold leading-[1.05]">Back in five minutes</h1>
      <TriColorBar />
      <p className="text-[35px] text-rff-muted-dark">Table 3, Delivery and Automation, is next.</p>
      <RffLogo variant="badge" className="h-[140px] w-[140px]" />
      <Footer slideNumber={slideNumber} light />
    </div>
  )
}
