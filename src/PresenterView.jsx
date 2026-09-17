import { useCallback, useEffect, useState } from 'react'
import { slides } from './data/slides.jsx'
import { notes } from './data/notes.js'
import { EVENT } from './config/tokens.js'
import { deckChannel } from './deckChannel.js'
import NoteText from './NoteText.jsx'

const W = 1920
const H = 1080
const BUDGET = EVENT.sessionDurationMinutes * 60
const WARN = 25 * 60

function fmt(total) {
  const m = Math.floor(total / 60)
  const s = total % 60
  return `${m}:${String(s).padStart(2, '0')}`
}

function Thumb({ index, scale, label }) {
  const slide = slides[index]
  if (!slide) return <div style={{ width: W * scale, height: H * scale }} className="rounded-[4px] bg-black/40" />
  const Component = slide.component
  return (
    <div>
      {label && <p className="mb-[8px] text-[14px] font-bold uppercase tracking-[0.12em] text-rff-muted-dark">{label}</p>}
      <div className="overflow-hidden rounded-[4px] border border-white/10" style={{ width: W * scale, height: H * scale }}>
        <div style={{ width: W, height: H, transform: `scale(${scale})`, transformOrigin: 'top left' }}>
          <Component slideNumber={index + 1} />
        </div>
      </div>
    </div>
  )
}

// Second window: current slide, next slide, note, clock. Opened from the deck
// with P. Navigation and the timer are shared over the broadcast channel, so
// arrow keys in either window move both.
export default function PresenterView() {
  const [index, setIndex] = useState(0)
  const [timer, setTimer] = useState({ running: false, elapsed: 0, at: Date.now() })
  const [now, setNow] = useState(Date.now())

  useEffect(() => {
    const off = deckChannel.listen((msg) => {
      if (msg.type === 'index') setIndex(msg.index)
      if (msg.type === 'timer') setTimer(msg)
    })
    deckChannel.send({ type: 'hello' })
    return off
  }, [])

  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 500)
    return () => clearInterval(id)
  }, [])

  const goTo = useCallback((next) => {
    const clamped = Math.max(0, Math.min(slides.length - 1, next))
    setIndex(clamped)
    deckChannel.send({ type: 'index', index: clamped })
  }, [])

  useEffect(() => {
    function onKey(e) {
      switch (e.key) {
        case 'ArrowRight':
        case ' ':
          e.preventDefault()
          goTo(index + 1)
          break
        case 'ArrowLeft':
          goTo(index - 1)
          break
        case 'Home':
          goTo(0)
          break
        case 'End':
          goTo(slides.length - 1)
          break
        case 't':
        case 'T':
          deckChannel.send({ type: 'toggle-timer' })
          break
        case 'r':
        case 'R':
          deckChannel.send({ type: 'reset-timer' })
          break
        default:
          break
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [index, goTo])

  const elapsed = timer.running ? timer.elapsed + Math.floor((now - timer.at) / 1000) : timer.elapsed
  const clockClass = elapsed >= BUDGET ? 'text-red-500' : elapsed >= WARN ? 'text-rff-orange' : 'text-white'
  const note = slides[index]?.notesKey ? notes[slides[index].notesKey] : undefined

  return (
    <div className="flex h-screen w-screen flex-col gap-[20px] overflow-hidden bg-rff-dark p-[24px] text-white">
      <div className="flex items-start gap-[24px]">
        <Thumb index={index} scale={0.42} label={`Slide ${index + 1} of ${slides.length}`} />
        <div className="flex flex-1 flex-col gap-[16px]">
          <Thumb index={index + 1} scale={0.22} label={index + 1 < slides.length ? 'Next' : 'Last slide'} />
          <div className="rounded-[4px] bg-black/30 p-[16px]">
            <p className={`font-mono text-[56px] font-bold leading-none ${clockClass}`}>{fmt(elapsed)}</p>
            <p className="mt-[6px] text-[14px] uppercase tracking-[0.12em] text-rff-muted-dark">
              {timer.running ? 'Running' : 'Stopped'}. T starts or stops, R resets, arrows move both windows.
            </p>
          </div>
        </div>
      </div>
      <div className="min-h-0 flex-1 overflow-y-auto rounded-[4px] bg-white/95 p-[24px] text-rff-body">
        <NoteText note={note} size={24} gap={12} />
      </div>
    </div>
  )
}
