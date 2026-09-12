export default function RffLogo({ className = 'h-[140px] w-[140px]' }) {
  return (
    <img
      src="/brand/rff-logo.png"
      alt="Rocket Fuel Factory"
      className={`select-none ${className}`}
      draggable={false}
    />
  )
}
