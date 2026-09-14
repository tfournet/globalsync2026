import ContentFrame from '../chrome/ContentFrame'

// Where the two-sentence brief came from. Tim's words.
export default function TheDemoNeverHadAClient({ slideNumber }) {
  return (
    <ContentFrame
      eyebrow="What AI taught us to expect"
      title="We expect AI to do wonders with a little instruction"
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
          You already know what a junior tech does with a ticket that thin: real effort, a reasonable guess, and
          something you would not put your name on.
        </li>
        <li className="mt-[32px]">AI does that too, without the pause where a person asks you a question.</li>
      </ul>
    </ContentFrame>
  )
}
