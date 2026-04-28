import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Section from '../components/Section'

const PHRASES = [
  'je construis des apps qui tiennent la route.',
  'du backend au frontend, sans compromis.',
  'code propre. architecture solide. résultats nets.',
]

const SOCIALS = [
  {
    href: 'mailto:zoheriniaina.antonio@gmail.com',
    label: 'Email',
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <polyline points="2,4 12,13 22,4" />
      </svg>
    ),
  },
  {
    href: 'https://github.com/Antonio2772',
    label: 'GitHub',
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
      </svg>
    ),
  },
  {
    href: 'https://linkedin.com/in/zo-antonio',
    label: 'LinkedIn',
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  },
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
  const typed   = useTyping(PHRASES)
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <Section
      noBorder
      padding="pb-16 px-6"
      className="overflow-hidden"
      innerClassName="pt-16 md:pt-0 text-center"
    >
      {/* Ambient green glow — absolute, positioned relative to Section's outer div */}
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full blur-[120px]"
        style={{ background: 'rgba(74,222,128,0.04)' }}
      />

      {/* Label */}
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="font-mono text-sm sm:text-base tracking-[0.35em] uppercase text-[#4ade80] mb-5"
      >
        // full-stack developer
      </motion.p>

      {/* Main name */}
      <motion.h1
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="font-sans font-bold leading-none tracking-tighter text-white mb-6"
        style={{ fontSize: 'clamp(3rem, 8vw, 6rem)' }}
      >
        Zo<span className="text-[#4ade80]">.</span>
      </motion.h1>

      {/* Typing terminal line */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 1 }}
        className="font-mono text-[11px] sm:text-sm text-[#666] mb-8 h-6 flex items-center gap-2 overflow-hidden max-w-xs sm:max-w-md"
      >
        <span className="text-[#4ade80] select-none shrink-0">~$</span>
        <span className="text-[#aaa] min-w-0 flex-1 overflow-hidden whitespace-nowrap">{typed}</span>
        <span className="cursor-blink text-[#4ade80] font-bold shrink-0">▋</span>
      </motion.div>

      {/* CTAs */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.15 }}
        className="flex flex-wrap items-center justify-center gap-4"
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

      {/* Social badges — absolute relative to Section's outer div */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-24 md:bottom-10 right-6 md:right-10 flex items-center gap-2.5"
      >
        <span className="font-mono text-[8px] tracking-[0.3em] text-[#3a3a3a] uppercase mr-1 hidden sm:block">
          connect
        </span>
        {SOCIALS.map(({ href, label, icon }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith('mailto') ? '_self' : '_blank'}
            rel="noopener noreferrer"
            aria-label={label}
            className="w-9 h-9 rounded-full border border-[#2e2e2e] bg-[#0f0f0f] text-[#888] flex items-center justify-center hover:border-[#4ade80] hover:text-[#4ade80] hover:bg-[#0d0d0d] transition-all duration-200"
          >
            {icon}
          </a>
        ))}
      </motion.div>

      {/* Scroll indicator — desktop only, absolute relative to Section's outer div */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-3"
      >
        <span className="font-mono text-[9px] tracking-[0.4em] text-[#2a2a2a] uppercase">scroll</span>
        <div className="scroll-float w-px h-10 bg-gradient-to-b from-[#4ade80]/40 to-transparent" />
      </motion.div>
    </Section>
  )
}
