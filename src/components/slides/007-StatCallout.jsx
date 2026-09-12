// PLACEHOLDER: session copy for the Global Sync Meetup NYC talk, not final. Illustrative figures.
import StatCallout from '../layouts/StatCallout'

export default function Stats({ slideNumber }) {
  return (
    <StatCallout
      eyebrow="Baseline the Numbers"
      title="The Numbers That Frame the Decision"
      accent="gold"
      slideNumber={slideNumber}
      intro="Three figures worth tracking before deciding the next hire is the answer."
      stats={[
        { value: '62%', label: 'of ticket volume is the same five request types' },
        { value: '3.5x', label: 'more tickets closed per technician after workflow coverage' },
        { value: '9 wks', label: 'typical time to document and automate the top requests' },
      ]}
      takeaway="the constraint is documentation and coverage, not headcount."
    />
  )
}
