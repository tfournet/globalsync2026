import { Cog, Sparkles } from 'lucide-react'
import ContentFrame from '../chrome/ContentFrame'

// The sandwich drawn as a sandwich: navy bread above and below (automation,
// cog), gold filling in the middle (AI, sparkles). Same five steps as before,
// in plain sentences. Inspired by the Right of Boom 2026 stack, not copied.

const LEFT = 106
const WIDTH = 1708
const TOP = 262
const GAP = 16
const BREAD_H = 184
const FILL_H = 210
const LABEL_W = 400

// Alignment: every circle in a band shares one top, every step's first line of
// text shares one baseline, and the circle centre sits on that first line. The
// label icon rides the same 52px row, so icon, circle and first line all agree.
const LINE_H = 37.5 // text-[30px] leading-[1.25]
const CIRCLE = 52
const TEXT_DROP = (CIRCLE - LINE_H) / 2 // text sits below the circle top

// rows = the tallest step in the band, so the whole group centres as one block.
function circleTop(height, rows) {
  return (height - (rows * LINE_H + TEXT_DROP)) / 2
}

function Step({ n, text, light }) {
  return (
    <div className="flex items-start gap-[18px]">
      <span
        className={`flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-full text-[28px] font-bold ${
          light ? 'bg-white/15 text-white' : 'bg-rff-navy text-white'
        }`}
      >
        {n}
      </span>
      <p
        className={`text-[30px] leading-[1.25] ${light ? 'text-white' : 'text-rff-body'}`}
        style={{ marginTop: TEXT_DROP }}
      >
        {text}
      </p>
    </div>
  )
}

function Band({ top, height, rows, bg, light, edge, Icon, label, children }) {
  const pad = circleTop(height, rows)
  return (
    <div className="absolute flex rounded-[4px]" style={{ left: LEFT, top, width: WIDTH, height }} data-band>
      <div className={`absolute inset-0 rounded-[4px] ${bg}`} />
      {edge && <div className="absolute left-0 top-0 h-full w-[12px] rounded-l-[4px] bg-rff-gold" />}
      <div className="relative shrink-0 pl-[44px]" style={{ width: LABEL_W, paddingTop: pad }}>
        <div className="flex h-[52px] items-center gap-[20px]">
          <Icon size={48} strokeWidth={2.25} className={light ? 'text-white' : 'text-rff-navy'} aria-hidden="true" />
          <span className={`text-[27px] font-bold uppercase tracking-[0.12em] ${light ? 'text-white' : 'text-rff-navy'}`}>
            {label}
          </span>
        </div>
      </div>
      <div className="relative flex flex-1 items-start gap-[36px] pr-[44px]" style={{ paddingTop: pad }}>
        {children}
      </div>
    </div>
  )
}

export default function GuardrailSandwich({ slideNumber }) {
  const t1 = TOP
  const t2 = t1 + BREAD_H + GAP
  const t3 = t2 + FILL_H + GAP
  return (
    <ContentFrame
      eyebrow="The Guardrail Sandwich"
      title="Put the probabilistic part in the middle"
      accent="gold"
      slideNumber={slideNumber}
    >
      <Band top={t1} height={BREAD_H} rows={3} bg="bg-rff-light" Icon={Cog} label="Deterministic">
        <div className="flex-1"><Step n={1} text="Gather the facts from the systems that hold them." /></div>
        <div className="flex-1"><Step n={2} text="Validate that it is complete and that we are allowed to act." /></div>
        <div className="flex-1"><Step n={3} text="Attach the rules you wrote for this job." /></div>
      </Band>
      <Band top={t2} height={FILL_H} rows={1} bg="bg-rff-gold/20" edge Icon={Sparkles} label="Probabilistic">
        <div className="flex-1"><Step n={4} text="Make the first pass: draft it, sort it, or summarize it." /></div>
      </Band>
      <Band top={t3} height={BREAD_H} rows={2} bg="bg-rff-light" Icon={Cog} label="Deterministic">
        <div className="flex-1"><Step n={5} text="Check it against those same rules, or hand it to a person." /></div>
        <div className="flex-1"><Step n={6} text="Log what happened and tell the person who owns it." /></div>
      </Band>
      <p className="absolute text-center text-[33px] font-bold text-rff-navy" style={{ left: LEFT, top: 916, width: WIDTH }}>
        The AI never touches the customer or the record unguarded.
      </p>
    </ContentFrame>
  )
}
