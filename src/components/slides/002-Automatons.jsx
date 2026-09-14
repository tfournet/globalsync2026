import PullStatement from '../layouts/PullStatement'

// Opening question. Ask it, let the room name someone, click.
export default function Automatons() {
  return (
    <PullStatement
      eyebrow="Where we are"
      accent="blue"
      statement="Whose vacation request do you dread approving?"
    />
  )
}
