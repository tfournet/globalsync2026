// PLACEHOLDER: session copy for the Global Sync Meetup NYC talk, not final.
import RffLogo from '../chrome/RffLogo'
import TriColorBar from '../chrome/TriColorBar'
import Footer from '../chrome/Footer'

export default function Break({ slideNumber }) {
  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center gap-[24px] bg-rff-navy px-[120px] text-center text-white">
      <p className="text-[20px] font-bold uppercase tracking-[0.2em] text-rff-gold">Break</p>
      <h1 className="text-[56px] font-bold">Back in five minutes</h1>
      <TriColorBar />
      <p className="text-[20px] opacity-70">Table 3, Delivery and Automation, is next.</p>
      <RffLogo className="h-[100px] w-[100px]" />
      <Footer slideNumber={slideNumber} light />
    </div>
  )
}
