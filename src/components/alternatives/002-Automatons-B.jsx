import Eyebrow from '../chrome/Eyebrow'
import TriColorBar from '../chrome/TriColorBar'
import { FOOTER } from '../../config/tokens'

// Artifacts: the question next to the form it lives on. The two fields the
// owner cannot fill in are left blank on purpose.
function Field({ label, value, top }) {
  return (
    <div className="absolute" style={{ left: 48, top, width: 664 }}>
      <p className="uppercase tracking-[0.12em] text-rff-muted" style={{ fontSize: 26 }}>
        {label}
      </p>
      {value ? (
        <p className="font-bold text-rff-navy" style={{ marginTop: 10, fontSize: 34 }}>
          {value}
        </p>
      ) : (
        <div style={{ marginTop: 34, width: 560, height: 3, background: '#C7CAD2' }} />
      )}
    </div>
  )
}

export default function AutomatonsB() {
  return (
    <div className="relative h-full w-full bg-white">
      <Eyebrow accent="blue" className="absolute left-[106px] top-[48px]">
        Where we are
      </Eyebrow>

      <p
        className="absolute font-bold text-rff-navy"
        style={{ left: 106, top: 196, width: 800, fontSize: 92, lineHeight: 1.14, letterSpacing: '-0.02em' }}
      >
        Whose vacation request do you dread approving?
      </p>

      <TriColorBar className="absolute" style={{ left: 106, top: 790 }} width={461} />
      <p className="absolute text-rff-muted" style={{ left: 106, top: 930, fontSize: 32 }}>
        {FOOTER.org}
      </p>

      <div
        className="absolute rounded-[4px] border border-rff-gray-line bg-rff-light"
        style={{ left: 1054, top: 150, width: 760, height: 800 }}
      >
        <p
          className="absolute uppercase tracking-[0.12em] text-rff-muted"
          style={{ left: 48, top: 44, fontSize: 26 }}
        >
          Time off request
        </p>
        <div className="absolute bg-rff-gray-line" style={{ left: 48, top: 100, width: 664, height: 1 }} />

        <Field label="Employee" top={140} />
        <Field label="Dates" value="Mon 21 Sep to Fri 25 Sep" top={288} />
        <Field label="Request type" value="Vacation" top={436} />
        <Field label="Coverage while out" top={584} />

        <div
          className="absolute flex items-center justify-center rounded-[4px] bg-rff-blue font-bold text-white"
          style={{ left: 48, top: 700, width: 300, height: 66, fontSize: 30 }}
        >
          Approve
        </div>
        <div
          className="absolute flex items-center justify-center rounded-[4px] border border-rff-gray-line bg-white font-bold text-rff-muted"
          style={{ left: 380, top: 700, width: 220, height: 66, fontSize: 30 }}
        >
          Deny
        </div>
      </div>
    </div>
  )
}
