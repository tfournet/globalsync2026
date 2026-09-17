// Renders a presenter note: first line is the target time, every following
// line is one bullet. Each bullet gets its own paragraph so the gap reads as
// a pause.
export default function NoteText({ note, size = 24, gap = 12 }) {
  if (!note) return <p style={{ fontSize: size }}>No notes for this slide.</p>
  const [target, ...lines] = note.split('\n').filter((l) => l.trim() !== '')
  return (
    <div style={{ fontSize: size, lineHeight: 1.4 }}>
      <p className="font-bold uppercase tracking-[0.1em] text-rff-muted" style={{ fontSize: size * 0.7 }}>
        {target}
      </p>
      {lines.map((line, i) => {
        const text = line.replace(/^•\s*/, '')
        const pivot = text.startsWith('PIVOT:') || text.startsWith('NEXT:')
        return (
          <div key={i} className="flex gap-[0.6em]" style={{ marginTop: gap }}>
            <span className="text-rff-muted">{'•'}</span>
            <p className={pivot ? 'font-bold text-rff-navy' : ''}>{text}</p>
          </div>
        )
      })}
    </div>
  )
}
