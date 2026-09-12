// PLACEHOLDER: session copy for the Global Sync Meetup NYC talk, not final.
import PillarGrid from '../layouts/PillarGrid'

export default function Pillars({ slideNumber }) {
  return (
    <PillarGrid
      eyebrow="Brand Pillars"
      title="Connection, Education, Innovation"
      accent="blue"
      slideNumber={slideNumber}
      blocks={[
        { pillar: 'connection', label: 'Connection', body: 'Peer conversations across the room, starting at Table 3 right after this session.' },
        { pillar: 'education', label: 'Education', body: 'Practical delivery mechanics grounded in ticket data, not theory.' },
        { pillar: 'innovation', label: 'Innovation', body: 'New automation patterns MSPs are already running today.' },
      ]}
      note="This session sits mostly in Education, with a bridge to Innovation at Table 3."
    />
  )
}
