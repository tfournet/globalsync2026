# Concept: PATH-WITH-ONE-FORK

Slide: "The typing is hiding a decision." All three generated with
`python3 scripts/gen_image.py --model gpt-image-2 --size 1536x1024 --quality high`.

## fork-1.png — railway track with one orange switch

**Prompt:**

> A single long straight railway track running horizontally across the full width of the image, placed in the lower half, drawn in line gray #E0E0E0 rails and light gray #F5F5F7 sleepers with identical evenly spaced ties, perfectly regular and repetitive. At exactly one point about 55 percent along the track there is one small railway switch point: a short second rail branches off at a shallow angle for a short distance and the switch blades and the little branch stub are the only elements colored bright RFF Orange #FF5219. The fork is small relative to the whole track. After the switch the main track continues perfectly straight to the right edge. Everything else is gray. Flat, clean, editorial vector illustration, Stripe or Linear marketing quality, minimal, no gradients, not photorealistic. Pure white background #FFFFFF. Neutral palette only: light gray #F5F5F7, line gray #E0E0E0, dark #272B33, navy #050B46. The single accent color RFF Orange #FF5219 is used ONLY for the fork. Leave the top third of the image completely empty white space. No text, no letters, no watermark. No people, no faces, no robots, no brains, no lightbulbs, no signposts.

**Verdict:** Works best — the track reads instantly as "machine-followable routine," the orange switch blades are tiny and correctly placed on the rails with a faint gray branch stub, and the top two-thirds are empty; the only weakness is the switch is so small it may need a slight zoom or thicker orange for projection.

## fork-2.png — stepping stones with one orange stone splitting two ways

**Prompt:**

> A long straight row of identical round flat stepping stones running horizontally across the full width of the image in the lower half, evenly spaced, all colored light gray #F5F5F7 with thin line gray #E0E0E0 outlines, perfectly regular and repetitive. At exactly one stone about 55 percent along the row, that single stone is bright RFF Orange #FF5219 and from it two small orange stones branch off diagonally, one slightly up and one slightly down, for just two short steps before the branches stop. The gray straight row continues to the right edge after the orange stone. The fork is small relative to the whole row. Everything else is gray. Flat, clean, editorial vector illustration, Stripe or Linear marketing quality, minimal, no gradients, not photorealistic. Pure white background #FFFFFF. Neutral palette only: light gray #F5F5F7, line gray #E0E0E0, dark #272B33, navy #050B46. The single accent color RFF Orange #FF5219 is used ONLY for the fork. Leave the top third of the image completely empty white space. No text, no letters, no watermark. No people, no faces, no robots, no brains, no lightbulbs, no signposts.

**Verdict:** Clean and the most legible fork (a two-way "<" of orange stones is unmistakably a choice), but the branch is symmetric and centered so it reads more like a chevron/arrow than a small deviation, and the whole row sits high enough that the top third is only barely clear.

## fork-3.png — dotted line with one orange node branching

**Prompt:**

> A long straight dotted line of identical small round dots running horizontally across the full width of the image in the lower half, evenly spaced, all dots colored line gray #E0E0E0 or dark #272B33, perfectly regular and repetitive like a data pipeline or a process diagram without labels. At exactly one node about 55 percent along the line, that single node is bright RFF Orange #FF5219 and slightly larger, and a short thin orange branch of three small orange dots splits off diagonally upward and then stops. The gray dotted line continues straight to the right edge after the orange node. The fork is small relative to the whole line. Everything else is gray. Flat, clean, editorial vector illustration, Stripe or Linear marketing quality, minimal, no gradients, not photorealistic. Pure white background #FFFFFF. Neutral palette only: light gray #F5F5F7, line gray #E0E0E0, dark #272B33, navy #050B46. The single accent color RFF Orange #FF5219 is used ONLY for the fork. Leave the top third of the image completely empty white space. No text, no letters, no watermark. No people, no faces, no robots, no brains, no lightbulbs, no signposts.

**Verdict:** Most minimal and brand-quiet; the enlarged orange node plus three shrinking dots feels like a diagram hint of "one node is different," but the shrinking branch reads as a trailing tail rather than an alternative route, so the "choice" idea is weaker than in 1 or 2.

**Pick:** fork-1 (railway switch), with fork-2 as fallback if the switch is too faint at slide scale.
