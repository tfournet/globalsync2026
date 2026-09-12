# Seam concept: fused-then-separated

Slide: 'The typing is hiding a decision.' Generated with scripts/gen_image.py, model gpt-image-2, 1536x1024, quality high.

## seam-1.png

**Prompt:**

> Flat editorial vector illustration, Stripe or Linear marketing quality, on a pure white background #FFFFFF. A single long horizontal rectangular block made of light gray #F5F5F7 with a thin outline in line gray #E0E0E0, centered in the lower two-thirds of the frame, viewed straight on. The block looks like one solid object, but on close inspection there is a hairline vertical seam near its right end, and pressed into that seam is an extremely thin bright orange sliver in RFF Orange #FF5219, almost invisible, like a sheet of paper wedged between two slabs. The orange sliver is the only color in the image. Subtle soft shadow beneath the block in dark #272B33 at very low opacity. Everything else neutral: light gray #F5F5F7, line gray #E0E0E0, dark #272B33, navy #050B46. Flat, clean, minimal, no heavy gradients, no photorealism, no texture. Top third of the frame left completely empty white space. No text, no letters, no watermark. No people, faces, robots, brains, lightbulbs, or puzzle pieces.

**Note:** Works: the block genuinely reads as one object at a glance and the orange hairline only registers on a second look, which is exactly the slide's point; fails: the block is very pale against white and the seam sits inside the block without any hint that it could be pulled apart, so the 'two things' reading depends entirely on the speaker.

## seam-2.png

**Prompt:**

> Flat editorial vector illustration, Stripe or Linear marketing quality, on a pure white background #FFFFFF. A before-and-after diptych arranged left and right in the lower two-thirds of the frame. Left panel: a single long horizontal gray block in light gray #F5F5F7 with a thin outline in line gray #E0E0E0 that looks like one solid object, with a barely visible hairline vertical seam near its right end and a razor-thin bright orange sliver in RFF Orange #FF5219 pressed into the seam. Right panel: the same block pulled apart into two separate pieces with a clear gap between them: a large gray slab in light gray #F5F5F7 on the left and a tiny thin standalone orange sliver in RFF Orange #FF5219 standing upright on the right. A small thin neutral arrow or divider in line gray #E0E0E0 between the panels. Orange is used only for the sliver. Everything else neutral: light gray #F5F5F7, line gray #E0E0E0, dark #272B33, navy #050B46. Subtle soft shadows in dark #272B33 at low opacity. Flat, clean, minimal, no heavy gradients, no photorealism. Top third of the frame left completely empty white space. No text, no letters, no watermark. No people, faces, robots, brains, lightbulbs, or puzzle pieces.

**Note:** Works: the diptych makes the separation explicit and the tiny orange sliver standing alone on the right is the strongest 'one of them is tiny' moment of the three; fails: the sliver in the left panel sits on the block's outer edge rather than pressed inside a seam, so 'fused' reads as 'edge trim' and the arrow adds a diagram feel.

## seam-3.png

**Prompt:**

> Flat editorial technical exploded-view drawing, Stripe or Linear marketing quality, on a pure white background #FFFFFF. In the lower two-thirds of the frame, a long rectangular block in light gray #F5F5F7 with thin outlines in line gray #E0E0E0, drawn in a clean isometric or slight three-quarter view, has been split at a hairline seam into a large gray piece and a razor-thin bright orange sliver in RFF Orange #FF5219. The orange sliver floats just outside the seam, lifted a short distance away from the block along thin dashed guide lines in line gray #E0E0E0, exploded-view style, showing exactly where it was hidden inside the block. The gap between block and sliver is small and precise. Orange appears only on the sliver. Everything else neutral: light gray #F5F5F7, line gray #E0E0E0, dark #272B33, navy #050B46. Flat shading only, subtle soft shadow in dark #272B33 at low opacity, no heavy gradients, no photorealism, no texture. Top third of the frame left completely empty white space. No text, no letters, no watermark. No people, faces, robots, brains, lightbulbs, or puzzle pieces.

**Note:** Works: the isometric exploded view with dashed guide lines shows both where the sliver was hidden and that it is a separate part, and the volume makes it the most polished frame; fails: the sliver is a chunky slab rather than a hairline, so it looks less like something that was 'almost invisible' inside the block, and the block rises into the top third on the right.

## Pick

seam-3 is the best single frame (clean separation, reads as two parts without a diptych); seam-1 is the purest 'fused' statement if the deck can afford a build to seam-3 on the next click.
