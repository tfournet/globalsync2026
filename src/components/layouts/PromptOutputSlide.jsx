import ContentFrame from '../chrome/ContentFrame'

const ACCENT_TEXT = {
  blue: 'text-rff-blue',
  orange: 'text-rff-orange',
  gold: 'text-rff-gold',
}

const GAP = 36
const LEFT = 106
const CONTENT_WIDTH = 1708
const LEFT_WIDTH = Math.round((CONTENT_WIDTH - GAP) * 0.4)
const RIGHT_WIDTH = CONTENT_WIDTH - GAP - LEFT_WIDTH
const TOP = 265
const FOOTER_TOP = 1000
const BOTTOM_MARGIN = 20
const EXTRA_LINE_SPACE = 70
const QUOTED_LINE_SPACE = 110

// Pick a contiguous run of source lines. `lines` is [from, to) over the text
// split on newlines; omitted means the whole text. Windows are not marked on
// the slide; the full text lives in src/data/demo.js and docs/demo/.
function sliceLines(text, lines) {
  const all = text.split('\n')
  if (!lines) return { lines: all }
  const [from, to] = lines
  return { lines: all.slice(from, to) }
}

// Chat UIs render **bold** as bold; literal asterisks on a slide read as noise.
// Text is otherwise untouched.
function renderInline(line, key) {
  const parts = line.split(/(\*\*[^*]+\*\*)/g).filter(Boolean)
  return (
    <span key={key}>
      {parts.map((p, i) =>
        p.startsWith('**') && p.endsWith('**') ? (
          <strong key={i} className="font-bold text-rff-navy">
            {p.slice(2, -2)}
          </strong>
        ) : (
          <span key={i}>{p}</span>
        ),
      )}
    </span>
  )
}

// Blank source lines become paragraph gaps (about a third of a line) instead
// of full empty lines, which is what buys the room-legible font size.
function Paragraphs({ lines, fontSize, columns }) {
  const paras = []
  let cur = []
  for (const l of lines) {
    if (l.trim() === '') {
      if (cur.length) paras.push(cur)
      cur = []
    } else {
      cur.push(l)
    }
  }
  if (cur.length) paras.push(cur)
  return (
    <div
      className="leading-[1.3] text-rff-body"
      style={{ fontSize, columnCount: columns, columnGap: 48 }}
    >
      {paras.map((p, i) => (
        <p key={i} className={i === 0 ? '' : 'mt-[0.45em]'} style={{ breakInside: 'avoid' }}>
          {p.map((l, j) => (
            <span key={j}>
              {renderInline(l, j)}
              {j < p.length - 1 && <br />}
            </span>
          ))}
        </p>
      ))}
    </div>
  )
}

function Panel({ label, labelClass, text, lines, fontSize, columns, style }) {
  const w = sliceLines(text, lines)
  return (
    <div
      className="absolute flex flex-col overflow-hidden rounded-[4px] bg-rff-light p-[40px]"
      style={style}
    >
      <p className={`text-[27px] font-bold uppercase tracking-[0.12em] ${labelClass}`}>{label}</p>
      <div className="mt-[24px] min-h-0 flex-1 overflow-hidden">
        <Paragraphs lines={w.lines} fontSize={fontSize} columns={columns} />
      </div>

    </div>
  )
}

// Slides 3 to 5: a prompt and what came back. `only` renders a single
// full-width panel for long texts that need the whole stage to stay legible.
export default function PromptOutputSlide({
  eyebrow,
  title,
  accent = 'blue',
  slideNumber,
  askLabel = 'The ask',
  outputLabel = 'What came back',
  prompt,
  output,
  promptLines,
  outputLines,
  promptFontSize = 32,
  outputFontSize = 32,
  promptColumns = 1,
  outputColumns = 1,
  only,
  punchline,
  punchlineQuoted = false,
  footnote,
}) {
  const hasExtraLine = Boolean(punchline || footnote)
  const bottom = FOOTER_TOP - BOTTOM_MARGIN - (hasExtraLine ? (punchlineQuoted ? QUOTED_LINE_SPACE : EXTRA_LINE_SPACE) : 0)
  const height = bottom - TOP
  const labelClass = ACCENT_TEXT[accent]

  const leftStyle = only
    ? { left: LEFT, top: TOP, width: CONTENT_WIDTH, height }
    : { left: LEFT, top: TOP, width: LEFT_WIDTH, height }
  const rightStyle = only
    ? { left: LEFT, top: TOP, width: CONTENT_WIDTH, height }
    : { left: LEFT + LEFT_WIDTH + GAP, top: TOP, width: RIGHT_WIDTH, height }

  return (
    <ContentFrame eyebrow={eyebrow} title={title} accent={accent} slideNumber={slideNumber}>
      {only !== 'output' && (
        <Panel
          label={askLabel}
          labelClass={labelClass}
          text={prompt}
          lines={promptLines}
          fontSize={promptFontSize}
          columns={promptColumns}
          style={leftStyle}
        />
      )}
      {only !== 'prompt' && (
        <Panel
          label={outputLabel}
          labelClass={labelClass}
          text={output}
          lines={outputLines}
          fontSize={outputFontSize}
          columns={outputColumns}
          style={rightStyle}
        />
      )}
      {punchline && (
        <p
          className={`absolute text-[33px] font-bold text-rff-navy ${punchlineQuoted ? 'italic' : ''}`}
          style={{ left: LEFT, top: bottom + BOTTOM_MARGIN, width: CONTENT_WIDTH }}
        >
          {punchlineQuoted ? renderInline(punchline, 'q') : punchline}
        </p>
      )}
      {footnote && (
        <p
          className="absolute text-[27px] text-rff-muted"
          style={{ left: LEFT, top: bottom + BOTTOM_MARGIN, width: CONTENT_WIDTH }}
        >
          {footnote}
        </p>
      )}
    </ContentFrame>
  )
}
