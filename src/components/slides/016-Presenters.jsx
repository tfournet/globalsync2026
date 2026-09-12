// PLACEHOLDER: session copy for the Global Sync Meetup NYC talk, not final.
import PresentersSlide from '../layouts/PresentersSlide'

export default function Presenters({ slideNumber }) {
  return (
    <PresentersSlide
      eyebrow="Who Is Speaking"
      title="About the Presenter"
      accent="blue"
      slideNumber={slideNumber}
      presenters={[
        {
          name: 'Tim Fournet',
          role: 'Rewst',
          bio: 'Works with MSPs on automating delivery workflows so growth does not require proportional headcount.',
        },
      ]}
    />
  )
}
