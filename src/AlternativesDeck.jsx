import { useEffect, useState } from 'react'
import { alternatives } from './data/alternatives.jsx'

const W = 1920
const H = 1080

function Stage({ component: Component, slideNumber, scale = 1, shot }) {
  return (
    <div
      data-shot={shot}
      style={{ width: W * scale, height: H * scale, position: 'relative', overflow: 'hidden' }}
    >
      <div style={{ width: W, height: H, transform: `scale(${scale})`, transformOrigin: 'top left' }}>
        <Component slideNumber={slideNumber} />
      </div>
    </div>
  )
}

// ?alt=1&print=1: every original followed by its variants, full size, one per
// page, for scripts/screenshots.js --alt.
export function AlternativesPrint() {
  return (
    <>
      {alternatives.map(({ index, slide, variants }) => {
        const n = String(index + 1).padStart(2, '0')
        return [{ variant: 'orig', component: slide.component }, ...variants].map((v) => (
          <div key={`${n}-${v.variant}`} style={{ width: W, height: H, breakAfter: 'page', position: 'relative', overflow: 'hidden' }}>
            <Stage component={v.component} slideNumber={index + 1} shot={`${n}-${v.variant}`} />
          </div>
        ))
      })}
    </>
  )
}

// ?alt=1: one row per slide, original then A, B, C. Click a thumbnail to see
// it full size; Escape or click to close.
export default function AlternativesGallery() {
  const [open, setOpen] = useState(null)
  useEffect(() => {
    function onKey(e) {
      if (e.key === 'Escape') setOpen(null)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const scale = 0.23
  return (
    <div className="min-h-screen bg-rff-dark p-[32px] text-white">
      <p className="mb-[24px] text-[20px] text-rff-muted-dark">
        Alternatives. Original on the left, then A, B, C. Click to enlarge, Escape to close.
      </p>
      {alternatives.map(({ index, slide, variants }) => (
        <div key={slide.id} className="mb-[36px]">
          <p className="mb-[10px] text-[18px] font-bold text-rff-muted-dark">
            {index + 1}. {slide.id}
          </p>
          <div className="flex gap-[16px]">
            {[{ variant: 'original', component: slide.component }, ...variants].map((v) => (
              <button
                key={v.variant}
                type="button"
                onClick={() => setOpen({ ...v, index })}
                className="relative shrink-0 overflow-hidden rounded-[4px] border-2 border-transparent text-left outline-none hover:border-rff-blue"
              >
                <Stage component={v.component} slideNumber={index + 1} scale={scale} />
                <span className="absolute bottom-[6px] left-[8px] rounded-[4px] bg-black/60 px-[8px] text-[14px] font-bold">
                  {v.variant}
                </span>
              </button>
            ))}
          </div>
        </div>
      ))}
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black" onClick={() => setOpen(null)}>
          <Stage
            component={open.component}
            slideNumber={open.index + 1}
            scale={Math.min(window.innerWidth / W, window.innerHeight / H)}
          />
        </div>
      )}
    </div>
  )
}
