import { slides } from './data/slides.jsx'

// Renders every slide stacked at exact 1920x1080 print size with a forced
// page break between each, so a single page.pdf() call (see
// scripts/generate-pdf.js) yields one PDF page per slide.
export default function PrintDeck() {
  return (
    <>
      {slides.map((slide, i) => {
        const Component = slide.component
        return (
          <div
            key={slide.id}
            style={{ width: 1920, height: 1080, breakAfter: 'page', position: 'relative', overflow: 'hidden' }}
          >
            <Component slideNumber={i + 1} />
          </div>
        )
      })}
    </>
  )
}
