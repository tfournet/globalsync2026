import ContentFrame from '../chrome/ContentFrame'

// The bridge from the fear on slide 2 to the hidden decisions on slide 4.
export default function WhereTheProjectStops({ slideNumber }) {
  return (
    <ContentFrame
      eyebrow="What happened when you tried"
      title="Every automation project stalls at the same step"
      accent="blue"
      slideNumber={slideNumber}
    >
      <ul
        className="absolute list-disc pl-[48px] text-[44px] leading-snug text-rff-navy marker:text-rff-blue"
        style={{ left: 106, top: 320, width: 1600 }}
      >
        <li>You pick something they do, and the first six steps go fine.</li>
        <li className="mt-[36px]">Step seven is the one they do from memory.</li>
        <li className="mt-[36px]">You ask what they decide there, and they say it depends.</li>
        <li className="mt-[36px]">
          They keep doing it by hand, and you decide automation is not ready for your shop.
        </li>
      </ul>
    </ContentFrame>
  )
}
