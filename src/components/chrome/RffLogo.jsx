// Two brand marks ship in the RFF template: the bare rocket (rff-logo.png,
// used on light backgrounds) and the rocket inside a white disc
// (rff-badge.png, used on navy/dark backgrounds). Pick with `variant`.
const SRC = {
  rocket: '/brand/rff-logo.png',
  badge: '/brand/rff-badge.png',
}

export default function RffLogo({ variant = 'rocket', className = 'h-[140px] w-[140px]' }) {
  return (
    <img
      src={SRC[variant]}
      alt="Rocket Fuel Factory"
      className={`select-none ${className}`}
      draggable={false}
    />
  )
}
