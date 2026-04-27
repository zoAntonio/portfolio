import { useEffect, useRef, useCallback } from 'react'

const COUNT    = 85
const MAX_DIST = 150
const SPEED    = 0.25

export default function ParticleBackground() {
  const canvasRef = useRef(null)
  const stateRef  = useRef({ particles: [], raf: null })

  const resize = useCallback(() => {
    const c = canvasRef.current
    if (!c) return
    c.width  = window.innerWidth
    c.height = window.innerHeight
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx    = canvas.getContext('2d')
    const state  = stateRef.current

    resize()
    window.addEventListener('resize', resize)

    state.particles = Array.from({ length: COUNT }, () => ({
      x:  Math.random() * canvas.width,
      y:  Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * SPEED * 2,
      vy: (Math.random() - 0.5) * SPEED * 2,
    }))

    function tick() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      const ps = state.particles

      for (const p of ps) {
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0 || p.x > canvas.width)  p.vx *= -1
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1

        ctx.beginPath()
        ctx.arc(p.x, p.y, 1.5, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(74,222,128,0.5)'
        ctx.fill()
      }

      for (let i = 0; i < ps.length - 1; i++) {
        for (let j = i + 1; j < ps.length; j++) {
          const dx   = ps[i].x - ps[j].x
          const dy   = ps[i].y - ps[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < MAX_DIST) {
            ctx.beginPath()
            ctx.moveTo(ps[i].x, ps[i].y)
            ctx.lineTo(ps[j].x, ps[j].y)
            ctx.strokeStyle = `rgba(74,222,128,${(1 - dist / MAX_DIST) * 0.15})`
            ctx.lineWidth   = 0.5
            ctx.stroke()
          }
        }
      }

      state.raf = requestAnimationFrame(tick)
    }

    tick()

    return () => {
      cancelAnimationFrame(state.raf)
      window.removeEventListener('resize', resize)
    }
  }, [resize])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 0 }}
    />
  )
}
