import PresentersSlide from '../layouts/PresentersSlide'
import RewstLogo from '../chrome/RewstLogo'

export default function Presenter({ slideNumber }) {
  return (
    <PresentersSlide
      eyebrow="Presenter"
      title="Who was that"
      accent="blue"
      slideNumber={slideNumber}
      presenters={[
        {
          name: 'Tim Fournet',
          role: 'Rewst',
          bio: 'Builds automation for MSPs. Spent a long time being the person the process lived in.',
          logo: <RewstLogo />,
        },
      ]}
    />
  )
}
