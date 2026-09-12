import RffLogo from '../chrome/RffLogo'
import TriColorBar from '../chrome/TriColorBar'

const PILLAR_TEXT = {
  blue: 'text-rff-blue',
  orange: 'text-rff-orange',
  gold: 'text-rff-gold',
}

const PILLAR_BG = {
  blue: 'bg-rff-blue',
  orange: 'bg-rff-orange',
  gold: 'bg-rff-gold',
}

export default function SectionDivider({
  variant = 'dark',
  part,
  title,
  description,
  pillar = 'blue',
}) {
  const dark = variant === 'dark'
  const partNumber = String(part).padStart(2, '0')
  return (
    <div
      className={`relative flex h-full w-full flex-col justify-center gap-[24px] px-[106px] ${
        dark ? 'bg-rff-navy text-white' : 'bg-rff-light text-rff-navy'
      }`}
    >
      {!dark && <div className={`absolute inset-y-0 left-0 w-[60px] ${PILLAR_BG[pillar]}`} />}
      <p className={`text-[29px] font-bold uppercase tracking-[0.15em] ${PILLAR_TEXT[pillar]}`}>
        Part {partNumber}
      </p>
      <h1 className="max-w-[1600px] text-[107px] font-bold leading-[1.05]">{title}</h1>
      <TriColorBar />
      {description && (
        <p className={`max-w-[900px] text-[35px] ${dark ? 'text-rff-muted-dark' : 'text-rff-body'}`}>
          {description}
        </p>
      )}
      <RffLogo
        variant={dark ? 'badge' : 'rocket'}
        className={dark ? 'absolute bottom-[80px] right-[106px] h-[192px] w-[192px]' : 'absolute bottom-[80px] right-[106px] h-[282px] w-[282px]'}
      />
    </div>
  )
}
