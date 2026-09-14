// Artifacts. The process everyone says they have, as the document nobody ever
// wrote: the form is there, the fields are blank, and that is the whole law.

const FIELDS = ['Process name', 'Owner', 'Last updated']
const STEPS = [1, 2, 3, 4, 5]

function BlankRule({ width = '100%' }) {
  return <div className="bg-rff-gray-line" style={{ width, height: 3 }} />
}

export default function AharonsLawB() {
  return (
    <div className="relative h-full w-full bg-white">
      <div className="absolute bg-rff-gold px-[24px] py-[10px]" style={{ left: 106, top: 248 }}>
        <p className="text-[27px] font-bold uppercase tracking-[0.12em] text-rff-navy">
          Aharon's first law of automation
        </p>
      </div>

      <p className="absolute text-[76px] font-bold leading-[1.15] text-rff-navy" style={{ left: 106, top: 340, width: 800 }}>
        You can't automate a process that doesn't exist.
      </p>

      <div className="absolute bg-rff-gray-line" style={{ left: 106, top: 700, width: 400, height: 2 }} />
      <p className="absolute text-[32px] text-rff-muted" style={{ left: 106, top: 734 }}>
        Aharon Chernin, Rewst
      </p>

      {/* The document nobody wrote */}
      <div
        className="absolute rounded-[4px] border-[3px] border-l-[12px] border-rff-gray-line border-l-rff-gold bg-rff-light"
        style={{ left: 1010, top: 160, width: 804, height: 760, padding: '40px 48px' }}
      >
        <p className="text-[26px] font-bold uppercase tracking-[0.12em] text-rff-muted">Process document</p>

        <div className="mt-[26px] flex flex-col gap-[22px]">
          {FIELDS.map((field) => (
            <div key={field}>
              <p className="text-[26px] uppercase tracking-[0.1em] text-rff-muted">{field}</p>
              <div className="mt-[16px]">
                <BlankRule />
              </div>
            </div>
          ))}
        </div>

        <p className="mt-[30px] text-[26px] font-bold uppercase tracking-[0.12em] text-rff-muted">Steps</p>
        <div className="mt-[22px] flex flex-col gap-[22px]">
          {STEPS.map((n) => (
            <div key={n} className="flex items-center gap-[22px]">
              <span className="w-[36px] shrink-0 text-[30px] text-rff-muted">{n}</span>
              <BlankRule />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
