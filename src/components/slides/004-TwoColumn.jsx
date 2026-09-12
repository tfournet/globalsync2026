// PLACEHOLDER: session copy for the Global Sync Meetup NYC talk, not final.
import TwoColumnSlide from '../layouts/TwoColumnSlide'

export default function TwoColumn({ slideNumber }) {
  return (
    <TwoColumnSlide
      eyebrow="Delivery Model"
      title="The Manual Loop That Doesn't Scale"
      accent="blue"
      slideNumber={slideNumber}
      paragraph="Every unplanned request follows the same shape: triage, gather context, execute, document, close. When that loop lives in a technician's head, the only lever left is headcount."
      points={[
        'Each new client adds the same five manual steps',
        'Tribal knowledge walks out the door with tenure',
        'Growth becomes linear with staff, not with process',
      ]}
      cardTitle="What Good Looks Like"
      cardItems={[
        'Documented owner for every recurring request',
        'Trigger conditions written down, not remembered',
        'Escalation path tested before it is needed',
        'Evidence of the work captured automatically',
      ]}
    />
  )
}
