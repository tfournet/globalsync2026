import { slides } from './slides.jsx'

// Alternative designs for approved slides, discovered from the filesystem so
// several people can add variants without touching a shared registry.
// File name: src/components/alternatives/NNN-Anything-X.jsx where NNN is the
// 1-based position of the slide in the deck and X is the variant letter.
const modules = import.meta.glob('../components/alternatives/*.jsx', { eager: true })

const byIndex = new Map()
for (const [file, mod] of Object.entries(modules)) {
  const match = file.match(/\/(\d{3})-[^/]*-([A-Z])\.jsx$/)
  if (!match || !mod.default) continue
  const index = parseInt(match[1], 10) - 1
  if (!byIndex.has(index)) byIndex.set(index, [])
  byIndex.get(index).push({ variant: match[2], component: mod.default, file })
}

// [{ index, slide, variants: [{ variant, component }] }] for slides that have at least one variant.
export const alternatives = [...byIndex.entries()]
  .sort(([a], [b]) => a - b)
  .filter(([index]) => slides[index])
  .map(([index, variants]) => ({
    index,
    slide: slides[index],
    variants: variants.sort((a, b) => a.variant.localeCompare(b.variant)),
  }))
