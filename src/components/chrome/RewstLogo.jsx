// Rewst wordmark, presenter and closing slides only (see docs/ASSETS.md).
// Clearspace equal to the lowercase "e" is approximated with a fixed margin.
const SRC = {
  light: '/brand/rewst-logo-on-light.svg',
  dark: '/brand/rewst-logo-on-dark.svg',
}

export default function RewstLogo({ onDark = false, className = '' }) {
  return (
    <img
      src={onDark ? SRC.dark : SRC.light}
      alt="Rewst"
      className={`ml-[16px] h-[40px] select-none ${className}`}
      draggable={false}
    />
  )
}
