import { describe, expect, it } from 'vitest'
import { render } from '@testing-library/react'
import { slides } from '../data/slides.jsx'

const NO_FOOTER_IDS = new Set(['cover', 'section-people', 'section-margin', 'pull-statement'])

describe('slide registry', () => {
  it.each(slides.map((slide, i) => [slide, i]))('renders slide %#: %s without throwing', (slide) => {
    expect(() => render(<slide.component slideNumber={1} />)).not.toThrow()
  })

  for (const slide of slides) {
    it(`slide "${slide.id}" ${NO_FOOTER_IDS.has(slide.id) ? 'has no footer' : 'shows the footer'}`, () => {
      const { container } = render(<slide.component slideNumber={1} />)
      const footer = container.querySelector('[data-testid="slide-footer"]')
      if (NO_FOOTER_IDS.has(slide.id)) {
        expect(footer).not.toBeInTheDocument()
      } else {
        expect(footer).toBeInTheDocument()
      }
    })
  }

  it('has no duplicate slide ids', () => {
    const ids = slides.map((s) => s.id)
    expect(new Set(ids).size).toBe(ids.length)
  })
})
