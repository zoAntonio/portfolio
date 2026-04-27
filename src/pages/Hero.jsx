import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const PHRASES = [
  'je construis des apps qui tiennent la route.',
  'du backend au frontend, sans compromis.',
  'code propre. architecture solide. résultats nets.',
]

function useTyping(phrases) {
  const [idx,      setIdx]      = useState(0)
  const [text,     setText]     = useState('')
  const [typing,   setTyping]   = useState(true)

  useEffect(() => {
    const phrase = phrases[idx]
    let timer

    if (typing) {
      if (text.length < phrase.length) {
        timer = setTimeout(() => setText(phrase.slice(0, text.length + 1)), 38)
      } else {
        timer = setTimeout(() => setTyping(false), 2200)
      }
    } else {
      if (text.length > 0) {
        timer = setTimeout(() => setText(text.slice(0, -1)), 18)
      } else {
        setIdx((i) => (i + 1) % phrases.length)
        setTyping(true)
      }
    }

    return () => clearTimeout(timer)
  }, [text, typing, idx, phrases])

  return text
}

export default function Hero() {
  const typed = useTyping(PHRASES)

  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <div className="relative min-h-screen flex flex-col justify-center dot-grid overflow-hidden">
      {/* Radial dark vignette over the grid */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 80% 70% at 50% 50%, transparent 20%, #0a0a0a 75%)',
        }}
      />

      {/* Ambient green glow */}
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full blur-[120px]"
        style={{ background: 'rgba(74,222,128,0.04)' }}
      />

      <div className="relative z-10 max-w-6xl mx-auto w-full px-6 pt-24 pb-32">
        {/* Label */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="font-mono text-[11px] tracking-[0.35em] uppercase text-[#4ade80] mb-8"
        >
          // full-stack developer
        </motion.p>

        {/* Main name */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="font-sans font-bold leading-none tracking-tighter text-white mb-10"
          style={{ fontSize: 'clamp(5.5rem, 16vw, 13rem)' }}
        >
          Zo<span className="text-[#4ade80]">.</span>
        </motion.h1>

        {/* Typing terminal line */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 1 }}
          className="font-mono text-sm text-[#666] mb-14 h-6 flex items-center gap-2"
        >
          <span className="text-[#4ade80] select-none">~$</span>
          <span className="text-[#aaa]">{typed}</span>
          <span className="cursor-blink text-[#4ade80] font-bold">▋</span>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.15 }}
          className="flex flex-wrap gap-4"
        >
          <button
            onClick={() => scrollTo('projects')}
            className="px-7 py-3 bg-[#4ade80] text-[#0a0a0a] font-mono text-xs font-bold tracking-[0.15em] uppercase hover:bg-[#22c55e] transition-colors duration-200 focus:outline-none"
          >
            voir_projets
          </button>
          <button
            onClick={() => scrollTo('contact')}
            className="px-7 py-3 border border-[#222] text-[#444] font-mono text-xs tracking-[0.15em] uppercase hover:border-[#4ade80] hover:text-[#4ade80] transition-all duration-200 focus:outline-none"
          >
            me_contacter
          </button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <span className="font-mono text-[9px] tracking-[0.4em] text-[#2a2a2a] uppercase">
          scroll
        </span>
        <div className="scroll-float w-px h-10 bg-gradient-to-b from-[#4ade80]/40 to-transparent" />
      </motion.div>
    </div>
  )
}
