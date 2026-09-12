import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { slides } from './data/slides.jsx'
import { notes } from './data/notes.js'
import { EVENT } from './config/tokens.js'

const STAGE_WIDTH = 1920
const STAGE_HEIGHT = 1080
const BUDGET_SECONDS = EVENT.sessionDurationMinutes * 60
const WARN_SECONDS = 25 * 60

const THUMB_WIDTH = 440
const THUMB_SCALE = THUMB_WIDTH / STAGE_WIDTH
const THUMB_HEIGHT = STAGE_HEIGHT * THUMB_SCALE

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
  const [showHud, setShowHud] = useState(false)
  const [showGrid, setShowGrid] = useState(false)
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

      if (showGrid) {
        if (key === 'Escape') setShowGrid(false)
        return
      }

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
          setShowHud((v) => !v)
          break
        case 'g':
        case 'G':
          setShowGrid(true)
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
          setShowHud(false)
          break
        default:
          break
      }
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [index, goTo, breakIndex, showGrid])

  const slide = slides[index]
  const Component = slide.component
  const slideNotes = slide.notesKey ? notes[slide.notesKey] : undefined

  let timerColorClass = 'text-rff-body'
  let timerDotClass = 'bg-rff-body'
  if (elapsed >= BUDGET_SECONDS) {
    timerColorClass = 'text-red-600'
    timerDotClass = 'bg-red-600'
  } else if (elapsed >= WARN_SECONDS) {
    timerColorClass = 'text-rff-orange'
    timerDotClass = 'bg-rff-orange'
  }

  return (
    <div className="relative flex h-screen w-screen items-center justify-center overflow-hidden bg-black">
      <div
        style={{
          width: STAGE_WIDTH,
          height: STAGE_HEIGHT,
          transform: `scale(${scale})`,
        }}
        className="shrink-0 overflow-hidden shadow-2xl"
      >
        <Component slideNumber={index + 1} />
      </div>

      {showHud && (
        <div className="absolute bottom-0 right-0 flex w-[480px] flex-col gap-[10px] rounded-[4px] bg-white p-[24px] text-rff-body shadow-2xl">
          <p className="text-[16px] font-bold text-rff-navy">
            Slide {index + 1} of {slides.length}
          </p>
          <div className="flex items-center gap-[12px]">
            <span className={`font-mono text-[28px] font-bold ${timerColorClass}`}>{formatTime(elapsed)}</span>
            <span className="text-[14px] uppercase tracking-wide text-rff-muted">
              {timerRunning ? 'Running' : 'Stopped'}
            </span>
          </div>
          <p className="max-h-[280px] overflow-y-auto whitespace-pre-wrap text-[15px]">
            {slideNotes || 'No notes for this slide.'}
          </p>
        </div>
      )}

      {timerRunning && !showHud && (
        <div className={`absolute bottom-0 right-0 h-[6px] w-[6px] ${timerDotClass}`} />
      )}

      {showGrid && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/90 p-[40px]">
          <div className="grid grid-cols-4 gap-[24px]">
            {slides.map((s, i) => {
              const SlideComponent = s.component
              return (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => {
                    goTo(i)
                    setShowGrid(false)
                  }}
                  className="relative overflow-hidden rounded-[4px] border-2 border-transparent outline-none focus:border-rff-blue"
                  style={{ width: THUMB_WIDTH, height: THUMB_HEIGHT }}
                >
                  <div
                    style={{
                      width: STAGE_WIDTH,
                      height: STAGE_HEIGHT,
                      transform: `scale(${THUMB_SCALE})`,
                      transformOrigin: 'top left',
                    }}
                  >
                    <SlideComponent slideNumber={i + 1} />
                  </div>
                  <span className="absolute bottom-[4px] right-[6px] rounded-[4px] bg-black/60 px-[6px] text-[12px] font-bold text-white">
                    {i + 1}
                  </span>
                </button>
              )
            })}
          </div>
        </div>
      )}
    </div>
  )
}
