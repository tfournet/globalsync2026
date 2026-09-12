export default function TriColorBar({ className = '', width = 461, style }) {
  return (
    <div className={`flex h-[14px] overflow-hidden ${className}`} style={{ width, ...style }}>
      <div className="flex-1 bg-rff-blue" />
      <div className="flex-1 bg-rff-orange" />
      <div className="flex-1 bg-rff-gold" />
    </div>
  )
}
