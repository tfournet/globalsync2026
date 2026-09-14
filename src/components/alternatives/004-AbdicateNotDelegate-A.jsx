import ContentFrame from '../chrome/ContentFrame'

// Editorial. The two briefs are the same job step for step; only step two
// differs. Numbering both columns and setting that one numeral at 200px makes
// the divergence the thing the room sees first.

const ROWS = [
  {
    n: '01',
    left: 'You hand them the queue.',
    right: 'You hand them the queue.',
    top: 372,
    rule: 356,
  },
  {
    n: '02',
    left: 'You wrote the rule down: call on any P1, and on anything from a client who has called twice.',
    right: 'You left the rule to them: use your judgment.',
    top: 498,
    rule: 482,
  },
  {
    n: '03',
    left: 'They check the ticket against that.',
    right: 'They guess, and with luck they guess right.',
    top: 676,
    rule: 660,
  },
]

const COL_LEFT = { x: 390, w: 640 }
const COL_RIGHT = { x: 1130, w: 684 }

export default function AbdicateNotDelegateA({ slideNumber }) {
  return (
    <ContentFrame
      eyebrow="How it got that way"
      title="Handing over the work is not the same as delegating"
      accent="blue"
      slideNumber={slideNumber}
    >
      <div className="absolute bg-rff-gray-line" style={{ left: 106, top: 252, width: 1708, height: 2 }} />

      <p
        className="absolute text-[30px] font-bold uppercase tracking-[0.12em] text-rff-navy"
        style={{ left: COL_LEFT.x, top: 292, width: COL_LEFT.w }}
      >
        When you delegate
      </p>
      <p
        className="absolute text-[30px] font-bold uppercase tracking-[0.12em] text-rff-blue"
        style={{ left: COL_RIGHT.x, top: 292, width: COL_RIGHT.w }}
      >
        When you hand over the rules too
      </p>

      <div className="absolute bg-rff-gray-line" style={{ left: 1070, top: 292, width: 2, height: 470 }} />

      {ROWS.map((row, i) => (
        <div key={row.n}>
          <div className="absolute bg-rff-gray-line" style={{ left: 106, top: row.rule, width: 1708, height: 2 }} />
          {i === 1 ? (
            <p
              className="absolute text-[200px] font-bold leading-none text-rff-blue"
              style={{ left: 106, top: row.top - 24 }}
            >
              {row.n}
            </p>
          ) : (
            <p
              className="absolute text-[44px] font-bold tracking-[0.06em] text-rff-gray-line"
              style={{ left: 106, top: row.top }}
            >
              {row.n}
            </p>
          )}
          <p
            className="absolute text-[34px] leading-[1.35] text-rff-body"
            style={{ left: COL_LEFT.x, top: row.top, width: COL_LEFT.w }}
          >
            {row.left}
          </p>
          <p
            className={`absolute text-[34px] leading-[1.35] ${i === 1 ? 'font-bold text-rff-navy' : 'text-rff-body'}`}
            style={{ left: COL_RIGHT.x, top: row.top, width: COL_RIGHT.w }}
          >
            {row.right}
          </p>
        </div>
      ))}

      <div className="absolute bg-rff-gray-line" style={{ left: 106, top: 800, width: 1708, height: 2 }} />

      <div className="absolute bg-rff-blue" style={{ left: 390, top: 866, width: 8, height: 56 }} />
      <p className="absolute text-[36px] font-bold leading-[1.2] text-rff-navy" style={{ left: 430, top: 872, width: 1384 }}>
        Your best employees are the ones who usually guess right.
      </p>
    </ContentFrame>
  )
}
