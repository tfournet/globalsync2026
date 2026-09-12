import { FOOTER } from '../../config/tokens'

export default function Footer({ slideNumber, light = false }) {
  const textClass = light ? 'text-white/70' : 'text-rff-body/60'
  return (
    <div
      data-testid="slide-footer"
      className={`absolute inset-x-0 bottom-0 flex items-center justify-between border-t px-[64px] py-[12px] text-[16px] ${textClass} ${
        light ? 'border-white/20' : 'border-rff-body/15'
      }`}
    >
      <span>{FOOTER.org}</span>
      <span>{FOOTER.site}</span>
      <span>{slideNumber}</span>
    </div>
  )
}
