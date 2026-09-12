import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { slides } from './data/slides.jsx'
import { notes } from './data/notes.js'
import { EVENT } from './config/tokens.js'

const STAGE_WIDTH = 1920
const STAGE_HEIGHT = 1080
const BUDGET_SECONDS = EVENT.sessionDurationMinutes * 60
const WARN_SECONDS = 25 * 60

function slideIndexFromHash() {
  const match = window.location.hash.match(/^#\/(\d+)$/)
  if (!match) return 0
  const n = parseInt(match[1], 10) - 1
  if (Number.isNaN(n) || n < 0 || n >= slides.length) return 0
  return n
}

function formatTime(totalSeconds) {
  const m = Math.floor(totalSeconds / 60)
  const s = totalSeconds % 60
  return `${m}:${String(s).padStart(2, '0')}`
}

function useStageScale() {
  const [scale, setScale] = useState(1)
  useEffect(() => {
    function update() {
      setScale(Math.min(window.innerWidth / STAGE_WIDTH, window.innerHeight / STAGE_HEIGHT))
    }
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])
  return scale
}

export default function PresentationApp() {
  const [index, setIndex] = useState(slideIndexFromHash)
  const [showNotes, setShowNotes] = useState(false)
  const [timerRunning, setTimerRunning] = useState(false)
  const [elapsed, setElapsed] = useState(0)
  const numberBufferRef = useRef('')
  const scale = useStageScale()

  const breakIndex = useMemo(() => slides.findIndex((s) => s.id === 'break'), [])

  const goTo = useCallback((next) => {
    const clamped = Math.max(0, Math.min(slides.length - 1, next))
    setIndex(clamped)
  }, [])

  useEffect(() => {
    window.history.replaceState(null, '', `#/${index + 1}`)
  }, [index])

  useEffect(() => {
    function onHashChange() {
      setIndex(slideIndexFromHash())
    }
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  useEffect(() => {
    if (!timerRunning) return undefined
    const id = setInterval(() => setElapsed((e) => e + 1), 1000)
    return () => clearInterval(id)
  }, [timerRunning])

  useEffect(() => {
    function onKeyDown(e) {
      const key = e.key

      if (/^[0-9]$/.test(key)) {
        numberBufferRef.current += key
        return
      }

      if (key === 'Enter' && numberBufferRef.current) {
        const n = parseInt(numberBufferRef.current, 10) - 1
        numberBufferRef.current = ''
        goTo(n)
        return
      }

      numberBufferRef.current = ''

      switch (key) {
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
        case 'n':
        case 'N':
          setShowNotes((v) => !v)
          break
        case 't':
        case 'T':
          setTimerRunning((v) => !v)
          break
        case 'r':
        case 'R':
          setElapsed(0)
          setTimerRunning(false)
          break
        case 'b':
        case 'B':
          if (breakIndex >= 0) goTo(breakIndex)
          break
        case 'f':
        case 'F':
          if (document.fullscreenElement) {
            document.exitFullscreen()
          } else {
            document.documentElement.requestFullscreen()
          }
          break
        case 'Escape':
          setShowNotes(false)
          break
        default:
          break
      }
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [index, goTo, breakIndex])

  const slide = slides[index]
  const Component = slide.component
  const slideNotes = slide.notesKey ? notes[slide.notesKey] : undefined

  let timerColorClass = 'text-white'
  if (elapsed >= BUDGET_SECONDS) timerColorClass = 'text-red-500'
  else if (elapsed >= WARN_SECONDS) timerColorClass = 'text-orange-400'

  return (
    <div className="flex h-screen w-screen flex-col bg-black">
      <div className="relative flex flex-1 items-center justify-center overflow-hidden">
        <div
          style={{
            width: STAGE_WIDTH,
            height: STAGE_HEIGHT,
            transform: `scale(${scale})`,
          }}
          className="relative shrink-0 overflow-hidden bg-rff-light shadow-2xl"
        >
          <Component slideNumber={index + 1} />
        </div>

        <div className="pointer-events-none absolute left-4 top-4 flex items-center gap-3 font-mono text-sm text-white/80">
          <span className={timerColorClass}>{formatTime(elapsed)}</span>
          {timerRunning && <span className="text-emerald-400">running</span>}
        </div>

        {showNotes && (
          <div className="absolute bottom-6 right-6 flex max-h-[45vh] w-[420px] flex-col gap-2 overflow-y-auto rounded-lg bg-white/95 p-4 text-sm text-rff-body shadow-2xl">
            <p className="text-xs font-bold uppercase tracking-wide text-rff-blue">
              Presenter notes — slide {index + 1} of {slides.length}
            </p>
            <p className="whitespace-pre-wrap">{slideNotes || 'No notes for this slide.'}</p>
          </div>
        )}
      </div>

      <div className="h-1 w-full bg-white/10">
        <div
          className="h-full bg-rff-blue transition-all duration-300 ease-out"
          style={{ width: `${((index + 1) / slides.length) * 100}%` }}
        />
      </div>
    </div>
  )
}
