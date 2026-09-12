import ContentFrame from '../chrome/ContentFrame'

const ACCENT_TEXT = {
  blue: 'text-rff-blue',
  orange: 'text-rff-orange',
  gold: 'text-rff-gold',
}

const GAP = 36
const CONTENT_WIDTH = 1708
const LEFT_WIDTH = Math.round((CONTENT_WIDTH - GAP) * 0.4)
const RIGHT_WIDTH = CONTENT_WIDTH - GAP - LEFT_WIDTH
const TOP = 265
const FOOTER_TOP = 1000
const BOTTOM_MARGIN = 20
const EXTRA_LINE_SPACE = 70

function truncate(text, truncateAfter) {
  if (!truncateAfter) return { text, truncated: false }
  const lines = text.split('\n')
  if (lines.length <= truncateAfter) return { text, truncated: false }
  return { text: lines.slice(0, truncateAfter).join('\n'), truncated: true }
}

export default function PromptOutputSlide({
  eyebrow,
  title,
  accent = 'blue',
  slideNumber,
  askLabel = 'THE ASK',
  outputLabel = 'WHAT CAME BACK',
  prompt,
  output,
  promptTruncateAfter,
  outputTruncateAfter,
  promptFontSize = 30,
  outputFontSize = 24,
  punchline,
  footnote,
}) {
  const hasExtraLine = Boolean(punchline || footnote)
  const bottom = FOOTER_TOP - BOTTOM_MARGIN - (hasExtraLine ? EXTRA_LINE_SPACE : 0)
  const height = bottom - TOP
  const left = truncate(prompt, promptTruncateAfter)
  const right = truncate(output, outputTruncateAfter)
  const labelClass = ACCENT_TEXT[accent]

  return (
    <ContentFrame eyebrow={eyebrow} title={title} accent={accent} slideNumber={slideNumber}>
      <div
        className="absolute flex flex-col overflow-hidden rounded-[4px] bg-rff-light p-[40px]"
        style={{ left: 106, top: TOP, width: LEFT_WIDTH, height }}
      >
        <p className={`text-[27px] font-bold uppercase ${labelClass}`}>{askLabel}</p>
        <p className="mt-[24px] whitespace-pre-wrap leading-snug text-rff-body" style={{ fontSize: promptFontSize }}>
          {left.text}
        </p>
        {left.truncated && <p className="mt-[16px] text-[20px] text-rff-muted">continues</p>}
      </div>
      <div
        className="absolute flex flex-col overflow-hidden rounded-[4px] bg-rff-light p-[40px]"
        style={{ left: 106 + LEFT_WIDTH + GAP, top: TOP, width: RIGHT_WIDTH, height }}
      >
        <p className={`text-[27px] font-bold uppercase ${labelClass}`}>{outputLabel}</p>
        <p className="mt-[24px] whitespace-pre-wrap leading-snug text-rff-body" style={{ fontSize: outputFontSize }}>
          {right.text}
        </p>
        {right.truncated && <p className="mt-[16px] text-[20px] text-rff-muted">continues</p>}
      </div>
      {punchline && (
        <p
          className="absolute text-[33px] font-bold text-rff-navy"
          style={{ left: 106, top: bottom + BOTTOM_MARGIN, width: CONTENT_WIDTH }}
        >
          {punchline}
        </p>
      )}
      {footnote && (
        <p
          className="absolute text-[27px] text-rff-muted"
          style={{ left: 106, top: bottom + BOTTOM_MARGIN, width: CONTENT_WIDTH }}
        >
          {footnote}
        </p>
      )}
    </ContentFrame>
  )
}
