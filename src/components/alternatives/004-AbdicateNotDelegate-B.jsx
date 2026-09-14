import ContentFrame from '../chrome/ContentFrame'

// Artifacts. One ticket, handed to two people. The only thing that changes is
// what is written on the note that goes with it.

const PANELS = [
  {
    heading: 'When you delegate',
    headerBg: 'bg-rff-navy',
    first: 'You hand them the queue.',
    note: 'You wrote the rule down: call on any P1, and on anything from a client who has called twice.',
    last: 'They check the ticket against that.',
    written: true,
    x: 106,
  },
  {
    heading: 'When you hand over the rules too',
    headerBg: 'bg-rff-blue',
    first: 'You hand them the queue.',
    note: 'You left the rule to them: use your judgment.',
    last: 'They guess, and with luck they guess right.',
    written: false,
    x: 1014,
  },
]

const PANEL_W = 800
const PANEL_TOP = 456
const HEADER_H = 90

function Handoff() {
  return (
    <svg
      className="absolute"
      style={{ left: 106, top: 414, width: 1708, height: 40 }}
      viewBox="0 0 1708 40"
      aria-hidden="true"
    >
      <g stroke="#E0E0E0" strokeWidth="3" fill="none">
        <path d="M854 0 V 14" />
        <path d="M400 14 H 1308" />
        <path d="M400 14 V 28" />
        <path d="M1308 14 V 28" />
      </g>
      <polygon points="392,28 408,28 400,40" fill="#E0E0E0" />
      <polygon points="1300,28 1316,28 1308,40" fill="#E0E0E0" />
    </svg>
  )
}

export default function AbdicateNotDelegateB({ slideNumber }) {
  return (
    <ContentFrame
      eyebrow="How it got that way"
      title="Handing over the work is not the same as delegating"
      accent="blue"
      slideNumber={slideNumber}
    >
      {/* The ticket, once */}
      <div
        className="absolute rounded-[4px] border-[3px] border-rff-gray-line bg-white"
        style={{ left: 560, top: 236, width: 800 }}
      >
        <div className="flex items-center justify-between border-b-[3px] border-rff-gray-line bg-rff-light px-[32px] py-[16px]">
          <span className="text-[26px] font-bold uppercase tracking-[0.12em] text-rff-muted">Ticket 4471</span>
          <span className="text-[30px] font-bold text-rff-blue">P1</span>
        </div>
        <div className="flex items-baseline justify-between px-[32px] py-[20px]">
          <span className="text-[30px] text-rff-muted">Calls from this client today</span>
          <span className="text-[30px] font-bold text-rff-navy">2</span>
        </div>
      </div>

      <Handoff />

      {PANELS.map((panel) => (
        <div key={panel.heading} className="absolute" style={{ left: panel.x, top: PANEL_TOP, width: PANEL_W }}>
          <div className={`flex items-center px-[36px] ${panel.headerBg}`} style={{ height: HEADER_H }}>
            <p className="text-[30px] font-bold uppercase tracking-[0.08em] text-white">{panel.heading}</p>
          </div>
          <div className="bg-rff-light px-[36px] py-[28px]" style={{ height: 348 }}>
            <p className="text-[32px] leading-[1.3] text-rff-body">{panel.first}</p>
            <div
              className={`mt-[20px] rounded-[4px] bg-white px-[24px] py-[20px] ${
                panel.written
                  ? 'border-[2px] border-l-[10px] border-rff-gray-line border-l-rff-blue'
                  : 'border-[2px] border-dashed border-rff-gray-line'
              }`}
              style={{ transform: `rotate(${panel.written ? -1.2 : 1.2}deg)` }}
            >
              <p className="text-[24px] font-bold uppercase tracking-[0.12em] text-rff-muted">Rule</p>
              <p className="mt-[8px] text-[32px] leading-[1.3] text-rff-navy">{panel.note}</p>
            </div>
            <p className="mt-[20px] text-[32px] leading-[1.3] text-rff-body">{panel.last}</p>
          </div>
        </div>
      ))}

      <p className="absolute text-center text-[33px] font-bold text-rff-navy" style={{ left: 106, top: 922, width: 1708 }}>
        Your best employees are the ones who usually guess right.
      </p>
    </ContentFrame>
  )
}
