import Eyebrow from './Eyebrow'
import SlideTitle from './SlideTitle'
import Footer from './Footer'

// Shared positioning for every content (non-cover, non-divider, non-pull-statement)
// layout: eyebrow top left, left-aligned title directly under it, content area,
// footer pinned to the bottom. Coordinates are canvas-absolute (1920x1080) so
// each layout can place its own children the same way. Keeps every layout
// component visually consistent.
export default function ContentFrame({ eyebrow, title, accent = 'blue', slideNumber, children }) {
  return (
    <div className="relative h-full w-full bg-white">
      <Eyebrow accent={accent} className="absolute left-[106px] top-[48px]">
        {eyebrow}
      </Eyebrow>
      <SlideTitle className="absolute left-[106px] right-[106px] top-[96px]">{title}</SlideTitle>
      <div className="absolute inset-0">{children}</div>
      <Footer slideNumber={slideNumber} />
    </div>
  )
}
