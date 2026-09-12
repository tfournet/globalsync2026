export default function SlideTitle({ children, className = '' }) {
  return (
    <h1 className={`text-[75px] font-bold leading-[1.1] text-rff-navy ${className}`}>
      {children}
    </h1>
  )
}
