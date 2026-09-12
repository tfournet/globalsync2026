export default function TriColorBar({ className = '' }) {
  return (
    <div className={`flex h-[8px] w-[192px] overflow-hidden rounded-full ${className}`}>
      <div className="flex-1 bg-rff-blue" />
      <div className="flex-1 bg-rff-orange" />
      <div className="flex-1 bg-rff-gold" />
    </div>
  )
}
