export default function SlideTitle({ children, className = '', light = false }) {
  return (
    <h1
      className={`text-[56px] font-bold leading-tight ${light ? 'text-white' : 'text-rff-navy'} ${className}`}
    >
      {children}
    </h1>
  )
}
