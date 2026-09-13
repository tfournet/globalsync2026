import ContentFrame from '../chrome/ContentFrame'

// Rant slide. The bullets are what Tim says, so the room can photograph it.
export default function TheDemoNeverHadAClient({ slideNumber }) {
  return (
    <ContentFrame
      eyebrow="Where you learned it"
      title="The demo never had a client"
      accent="blue"
      slideNumber={slideNumber}
    >
      <ul
        className="absolute list-disc pl-[48px] text-[44px] leading-snug text-rff-navy marker:text-rff-blue"
        style={{ left: 106, top: 340, width: 1500 }}
      >
        <li>Every AI keynote is one sentence, then magic.</li>
        <li className="mt-[36px]">It works because the presenter has no stake in what comes back.</li>
        <li className="mt-[36px]">Back at work, every detail is the job, and somebody else checks them.</li>
      </ul>
    </ContentFrame>
  )
}
