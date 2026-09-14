import { slides } from './data/slides.jsx'
import { notes } from './data/notes.js'

const W = 1920
const H = 1080

// Renders every slide stacked at exact 1920x1080 print size with a forced
// page break between each, so a single page.pdf() call (see
// scripts/generate-pdf.js) yields one PDF page per slide. With `withNotes`,
// each page carries the slide at 60% with its presenter note underneath.
export default function PrintDeck({ withNotes = false }) {
  if (!withNotes) {
    return (
      <>
        {slides.map((slide, i) => {
          const Component = slide.component
          return (
            <div key={slide.id} style={{ width: W, height: H, breakAfter: 'page', position: 'relative', overflow: 'hidden' }}>
              <Component slideNumber={i + 1} />
            </div>
          )
        })}
      </>
    )
  }

  const scale = 0.5
  return (
    <>
      {slides.map((slide, i) => {
        const Component = slide.component
        const note = slide.notesKey ? notes[slide.notesKey] : undefined
        return (
          <div
            key={slide.id}
            className="bg-white text-rff-body"
            style={{ width: W, height: H, breakAfter: 'page', position: 'relative', overflow: 'hidden', padding: 48 }}
          >
            <div
              className="rounded-[4px] border border-rff-gray-line"
              style={{ width: W * scale, height: H * scale, overflow: 'hidden', margin: '0 auto' }}
            >
              <div style={{ width: W, height: H, transform: `scale(${scale})`, transformOrigin: 'top left' }}>
                <Component slideNumber={i + 1} />
              </div>
            </div>
            <p className="mt-[22px] text-[20px] font-bold uppercase tracking-[0.12em] text-rff-muted">
              Slide {i + 1} of {slides.length}
            </p>
            <p className="mt-[8px] whitespace-pre-wrap text-[22px] leading-[1.4]">
              {note || 'No notes for this slide.'}
            </p>
          </div>
        )
      })}
    </>
  )
}
