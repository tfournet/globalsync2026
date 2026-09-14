import { describe, expect, it } from 'vitest'
import { render } from '@testing-library/react'
import { alternatives } from '../data/alternatives.jsx'

describe('alternative designs', () => {
  const all = alternatives.flatMap(({ index, slide, variants }) =>
    variants.map((v) => [`${index + 1}-${v.variant} (${slide.id})`, v.component]),
  )
  if (all.length === 0) {
    it('has no alternatives yet', () => expect(all.length).toBe(0))
    return
  }
  it.each(all)('renders %s without throwing', (_name, Component) => {
    expect(() => render(<Component slideNumber={1} />)).not.toThrow()
  })
})
