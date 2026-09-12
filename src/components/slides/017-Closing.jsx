// PLACEHOLDER: session copy for the Global Sync Meetup NYC talk, not final.
import ClosingSlide from '../layouts/ClosingSlide'

export default function Closing({ slideNumber }) {
  return (
    <ClosingSlide
      title="Next Step"
      action="Before you leave the room, pick one request type and write down its trigger condition. Bring it to Table 3."
      ecosystemLine="Global Sync Meetups | Accelerators | Workshops"
      copyrightLine="Copyright Rocket Fuel Factory. All rights reserved."
      slideNumber={slideNumber}
    />
  )
}
