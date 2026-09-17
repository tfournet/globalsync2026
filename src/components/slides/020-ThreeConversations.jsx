import { Users, Sparkles, Handshake } from 'lucide-react'
import ComparisonSlide from '../layouts/ComparisonSlide'

// The summary. The talk's undertext, in Tim's words: be armed to communicate
// better with our people, our AI, and our customers. Each audience gets the
// line the deck already gave it (slides 12, 16, 13), verbatim. Sits before the
// close so the deck still ends on one action.
export default function ThreeConversations({ slideNumber }) {
  return (
    <ComparisonSlide
      eyebrow="The whole talk"
      title="Better communication with your people, your AI, and your customers"
      accent="blue"
      slideNumber={slideNumber}
      top={330}
      bottom={900}
      fontSize={36}
      itemGap={18}
      aligned
      emphasizeLeft
      emphasizeRight={false}
      left={{
        heading: 'Who you are talking to',
        icon: Users,
        items: ['Your people', 'Your AI', 'Your customers'],
      }}
      right={{
        heading: 'What to take home',
        icon: Handshake,
        items: [
          'A step is only documented if someone else can follow it without asking for help.',
          'Tell it everything in writing before it starts, then check whether it understood.',
          'Automate to give time back to the customer, not to hide from them.',
        ],
      }}
    />
  )
}
