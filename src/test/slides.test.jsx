import { describe, expect, it } from 'vitest'
import { render } from '@testing-library/react'
import { slides } from '../data/slides.jsx'

const NO_FOOTER_IDS = new Set(['cover', 'section-people', 'section-margin', 'pull-statement', 'closing'])

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

  it('a content slide has a white background', () => {
    const twoColumn = slides.find((s) => s.id === 'two-column')
    const { container } = render(<twoColumn.component slideNumber={1} />)
    expect(container.querySelector('.bg-white')).toBeInTheDocument()
  })

  it('has no duplicate slide ids', () => {
    const ids = slides.map((s) => s.id)
    expect(new Set(ids).size).toBe(ids.length)
  })
})
