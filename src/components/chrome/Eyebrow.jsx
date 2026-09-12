const ACCENT_TEXT = {
  blue: 'text-rff-blue',
  orange: 'text-rff-orange',
  gold: 'text-rff-gold',
}

export default function Eyebrow({ children, accent = 'blue', className = '' }) {
  return (
    <p
      className={`text-[27px] font-bold uppercase tracking-[0.12em] ${ACCENT_TEXT[accent]} ${className}`}
    >
      {children}
    </p>
  )
}
