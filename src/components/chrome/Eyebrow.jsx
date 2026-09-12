const ACCENT_TEXT = {
  blue: 'text-rff-blue',
  orange: 'text-rff-orange',
  gold: 'text-rff-gold',
}

export default function Eyebrow({ children, accent = 'blue', className = '' }) {
  return (
    <p
      className={`text-[20px] font-bold uppercase tracking-[0.15em] ${ACCENT_TEXT[accent]} ${className}`}
    >
      {children}
    </p>
  )
}
