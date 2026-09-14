import ContentFrame from '../chrome/ContentFrame'

// Where the two-sentence brief came from. Tim's words.
export default function TheDemoNeverHadAClient({ slideNumber }) {
  return (
    <ContentFrame
      eyebrow="Where the two-sentence brief came from"
      title="The demo was impressive because nobody checked the details"
      accent="blue"
      slideNumber={slideNumber}
    >
      <ul
        className="absolute list-disc pl-[48px] text-[40px] leading-snug text-rff-navy marker:text-rff-blue"
        style={{ left: 106, top: 300, width: 1600 }}
      >
        <li>AI demos give a little instruction and show something beautiful built from it.</li>
        <li className="mt-[32px]">Beautiful does not mean the details are where you want them.</li>
        <li className="mt-[32px]">
          Hand a junior tech a ticket with the same little instruction and they work hard, do what they think is right,
          and give you something you would not put your name on.
        </li>
        <li className="mt-[32px]">AI does exactly the same thing, faster.</li>
      </ul>
    </ContentFrame>
  )
}
