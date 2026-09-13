import ContentFrame from '../chrome/ContentFrame'

// The bridge from the fear on slide 2 to the hidden decisions on slide 4.
export default function WhereTheProjectStops({ slideNumber }) {
  return (
    <ContentFrame
      eyebrow="What happened when you tried"
      title="Where the automation project stops"
      accent="blue"
      slideNumber={slideNumber}
    >
      <ul
        className="absolute list-disc pl-[48px] text-[44px] leading-snug text-rff-navy marker:text-rff-blue"
        style={{ left: 106, top: 320, width: 1560 }}
      >
        <li>You pick a process and sit down to map it.</li>
        <li className="mt-[36px]">The first steps are easy. Then you reach one your tech does from memory.</li>
        <li className="mt-[36px]">Ask them what they decide there and the answer is "it depends."</li>
        <li className="mt-[36px]">The project stalls, and the tech keeps doing it by hand.</li>
      </ul>
    </ContentFrame>
  )
}
