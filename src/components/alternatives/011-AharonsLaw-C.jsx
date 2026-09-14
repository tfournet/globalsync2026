import TriColorBar from '../chrome/TriColorBar'

// Stage. Navy full bleed, the law centered and set at 108px so it carries the
// back of the room, with the two words the talk turns on in gold.

export default function AharonsLawC() {
  return (
    <div className="relative h-full w-full bg-rff-navy">
      <p
        className="absolute text-center text-[29px] font-bold uppercase tracking-[0.18em] text-rff-gold"
        style={{ left: 106, top: 292, width: 1708 }}
      >
        Aharon's first law of automation
      </p>

      <TriColorBar className="absolute" style={{ left: (1920 - 300) / 2, top: 352 }} width={300} />

      <p
        className="absolute text-center text-[108px] font-bold leading-[1.15] text-white"
        style={{ left: 160, top: 442, width: 1600 }}
      >
        You can't automate a process that <span className="text-rff-gold">doesn't exist.</span>
      </p>

      <p className="absolute text-center text-[32px] text-rff-muted-dark" style={{ left: 106, top: 860, width: 1708 }}>
        Aharon Chernin, Rewst
      </p>
    </div>
  )
}
