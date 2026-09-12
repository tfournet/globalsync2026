import Eyebrow from './Eyebrow'
import SlideTitle from './SlideTitle'
import Footer from './Footer'

// Shared positioning for every content (non-cover, non-divider, non-pull-statement)
// layout: eyebrow top left, left-aligned title directly under it, content area,
// footer pinned to the bottom. Keeps every layout component visually consistent.
export default function ContentFrame({
  eyebrow,
  title,
  accent = 'blue',
  slideNumber,
  children,
  contentClassName = '',
}) {
  return (
    <div className="relative flex h-full w-full flex-col bg-rff-light px-[64px] pt-[44px] pb-[64px]">
      <Eyebrow accent={accent}>{eyebrow}</Eyebrow>
      <SlideTitle className="mt-[8px]">{title}</SlideTitle>
      <div className={`mt-[28px] flex-1 min-h-0 ${contentClassName}`}>{children}</div>
      <Footer slideNumber={slideNumber} />
    </div>
  )
}
