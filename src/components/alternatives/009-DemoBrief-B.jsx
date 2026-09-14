import ContentFrame from '../chrome/ContentFrame'
import { Paragraphs } from './demoText.jsx'
import { strongBrief, withoutTim } from '../../data/demo.js'

// Artifacts. The real object: the brief typed into a chat composer, with the
// PSA ticket sitting under it as a collapsed attachment. Text verbatim, marked
// phrases and 32px unchanged from the committed slide.

const EMPHASIZE = [
  "She isn't technical and doesn't want to be",
  "She'll forward whatever I send straight to Dr. Patel",
  "don't quote them",
  "she definitely doesn't need to hear that we flagged this cert in the spring and the renewal never got approved",
  "that's what she asked me on the phone and what she's afraid of",
  'That\'s what "on top of it" actually means, so say that',
  'Do not use the phrase "on top of it" anywhere in the email',
  withoutTim('Sign it from me, Tim at Northline IT'),
]

const LEFT = 106
const WIDTH = 1708

function TicketGlyph() {
  return (
    <svg width="34" height="42" viewBox="0 0 34 42" className="shrink-0" aria-hidden="true">
      <rect x="1.5" y="1.5" width="31" height="39" rx="3" fill="none" stroke="#2A3AED" strokeWidth="3" />
      <path d="M9 13 H25 M9 21 H25 M9 29 H19" stroke="#2A3AED" strokeWidth="3" strokeLinecap="round" />
    </svg>
  )
}

function Chevron() {
  return (
    <svg width="22" height="34" viewBox="0 0 22 34" className="shrink-0" aria-hidden="true">
      <path d="M5 5 L17 17 L5 29" fill="none" stroke="#5F6570" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default function DemoBriefArtifact({ slideNumber }) {
  return (
    <ContentFrame
      eyebrow="The second try"
      title="The same ask, with the rules written down"
      accent="blue"
      slideNumber={slideNumber}
    >
      {/* The composer */}
      <div
        className="absolute rounded-[4px] border-[3px] border-rff-gray-line bg-white"
        style={{ left: LEFT, top: 248, width: WIDTH, height: 600, padding: '30px 40px' }}
      >
        <Paragraphs
          text={withoutTim(strongBrief)}
          fontSize={34}
          columns={2}
          columnGap={56}
          flow
          emphasize={EMPHASIZE}
          emphasisClass="text-rff-blue"
          className="text-rff-body"
        />
      </div>

      {/* The ticket, collapsed under it */}
      <div
        className="absolute flex items-center gap-[24px] rounded-[4px] border-[3px] border-rff-gray-line bg-rff-light"
        style={{ left: LEFT, top: 864, width: WIDTH, height: 72, padding: '0 32px' }}
      >
        <TicketGlyph />
        <span className="text-[30px] text-rff-navy">
          Ticket #48213 - Harbor Dental - Dentrix down all sites
        </span>
        <span className="ml-auto text-[27px] font-bold uppercase tracking-[0.12em] text-rff-muted">
          Same ticket pasted below
        </span>
        <Chevron />
      </div>
    </ContentFrame>
  )
}
