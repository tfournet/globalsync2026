import { FOOTER } from '../../config/tokens'

export default function Footer({ slideNumber, light = false }) {
  const mutedClass = light ? 'text-rff-muted-dark' : 'text-rff-muted'
  const linkClass = light ? 'text-rff-blue-glow' : 'text-rff-blue'
  return (
    <div
      data-testid="slide-footer"
      className={`absolute left-[106px] right-[106px] top-[1000px] flex h-[30px] items-center justify-between text-[23px] ${mutedClass}`}
    >
      <span>{FOOTER.org}</span>
      <span className={linkClass}>{FOOTER.site}</span>
      <span>{slideNumber}</span>
    </div>
  )
}
