import RffLogo from '../chrome/RffLogo'
import TriColorBar from '../chrome/TriColorBar'

const PILLAR_TEXT = {
  blue: 'text-rff-blue',
  orange: 'text-rff-orange',
  gold: 'text-rff-gold',
}

export default function SectionDivider({
  variant = 'dark',
  part,
  title,
  description,
  pillar = 'blue',
}) {
  const dark = variant === 'dark'
  return (
    <div
      className={`relative flex h-full w-full flex-col justify-center gap-[20px] px-[120px] ${
        dark ? 'bg-rff-navy text-white' : 'bg-rff-light text-rff-navy'
      }`}
    >
      <p className={`text-[20px] font-bold uppercase tracking-[0.15em] ${PILLAR_TEXT[pillar]}`}>
        Part {part}
      </p>
      <h1 className="text-[58px] font-bold leading-tight">{title}</h1>
      <TriColorBar />
      {description && <p className="max-w-[760px] text-[24px] opacity-80">{description}</p>}
      <RffLogo className="absolute bottom-[56px] right-[76px] h-[80px] w-[80px]" />
    </div>
  )
}
