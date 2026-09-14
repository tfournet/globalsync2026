// Shared renderer for the verbatim demo text used by the slide 9 and 10
// variants. Mirrors PromptOutputSlide's paragraph splitting and phrase marking
// so every variant shows exactly what the original shows. No default export,
// so src/data/alternatives.jsx skips this file.

function escapeRegExp(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

export function Paragraphs({
  text,
  fontSize,
  columns = 1,
  columnGap = 48,
  emphasize = [],
  emphasisClass = '',
  className = '',
  flow = false,
  paraGap = '0.45em',
}) {
  const paras = []
  let cur = []
  for (const line of text.split('\n')) {
    if (line.trim() === '') {
      if (cur.length > 0) paras.push(cur)
      cur = []
    } else {
      cur.push(line)
    }
  }
  if (cur.length > 0) paras.push(cur)

  const re =
    emphasize.length > 0
      ? new RegExp(`(${emphasize.map(escapeRegExp).join('|')})`, 'g')
      : null

  const mark = (line, key) => {
    if (re === null) return <span key={key}>{line}</span>
    const pieces = line.split(re).filter(Boolean)
    return (
      <span key={key}>
        {pieces.map((piece, i) =>
          emphasize.includes(piece) ? (
            <span key={i} className={`font-bold ${emphasisClass}`}>
              {piece}
            </span>
          ) : (
            <span key={i}>{piece}</span>
          ),
        )}
      </span>
    )
  }

  return (
    <div
      className={`leading-[1.3] ${className}`}
      style={{ fontSize, columnCount: columns, columnGap }}
    >
      {paras.map((p, i) => (
        <p
          key={i}
          style={{ marginTop: i === 0 ? 0 : paraGap, breakInside: flow ? 'auto' : 'avoid' }}
        >
          {p.map((line, j) => (
            <span key={j}>
              {mark(line, j)}
              {j < p.length - 1 && <br />}
            </span>
          ))}
        </p>
      ))}
    </div>
  )
}
