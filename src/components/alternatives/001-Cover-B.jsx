import RffLogo from '../chrome/RffLogo'
import TriColorBar from '../chrome/TriColorBar'
import { EVENT, FOOTER } from '../../config/tokens'

// Artifacts cover: the session drawn as the calendar tile in the attendee's
// day. Time rail, event block, the room's own program entry.
export default function CoverB() {
  return (
    <div className="relative h-full w-full bg-white">
      <div className="absolute" style={{ left: 106, top: 56 }}>
        <RffLogo variant="rocket" className="h-[84px] w-[84px]" />
      </div>
      <p
        className="absolute font-bold leading-[1.05] tracking-[0.18em]"
        style={{ left: 212, top: 62, fontSize: 27 }}
      >
        <span className="block text-rff-blue">ROCKET FUEL</span>
        <span className="block text-rff-orange">FACTORY</span>
      </p>

      <div
        className="absolute rounded-[4px] border border-rff-gray-line bg-white"
        style={{ left: 106, top: 194, width: 1708, height: 640 }}
      >
        <div
          className="flex items-center rounded-t-[4px] bg-rff-light px-[40px]"
          style={{ height: 92, borderBottom: '1px solid #E0E0E0' }}
        >
          <p className="text-rff-muted" style={{ fontSize: 32 }}>
            Global Sync Meetup NYC, 17 September 2026
          </p>
        </div>

        <div className="relative" style={{ height: 548 }}>
          <div className="absolute bg-rff-gray-line" style={{ left: 216, top: 0, width: 1, height: 548 }} />
          <p className="absolute font-bold text-rff-navy" style={{ left: 40, top: 56, fontSize: 28 }}>
            1:45pm
          </p>
          <p className="absolute text-rff-muted" style={{ left: 40, top: 486, fontSize: 28 }}>
            2:15pm
          </p>
          <div className="absolute bg-rff-gray-line" style={{ left: 216, top: 50, width: 1492, height: 1 }} />
          <div className="absolute bg-rff-gray-line" style={{ left: 216, top: 480, width: 1492, height: 1 }} />

          <div
            className="absolute bg-rff-light"
            style={{ left: 216, top: 50, width: 1492, height: 430, borderLeft: '12px solid #FF5219' }}
          >
            <p
              className="font-bold text-rff-navy"
              style={{ marginLeft: 48, marginTop: 56, width: 1340, fontSize: 88, lineHeight: 1.06, letterSpacing: '-0.02em' }}
            >
              Doing More Without Adding Bodies
            </p>
            <p className="text-rff-muted" style={{ marginLeft: 48, marginTop: 30, fontSize: 32 }}>
              Tim Fournet | Rewst
            </p>
            <p className="text-rff-muted" style={{ marginLeft: 48, marginTop: 14, fontSize: 28 }}>
              {EVENT.venue}
            </p>
          </div>
        </div>
      </div>

      <TriColorBar className="absolute" style={{ left: 106, top: 900 }} width={461} />
      <p className="absolute text-right text-rff-blue" style={{ left: 1114, top: 892, width: 700, fontSize: 32 }}>
        {FOOTER.site}
      </p>
    </div>
  )
}
