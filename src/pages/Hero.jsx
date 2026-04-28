import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Section from '../components/Section'
import { PHRASES, SOCIALS } from '../data'
import { useT } from '../i18n'

function useTyping(phrases) {
  const [idx,    setIdx]    = useState(0)
  const [text,   setText]   = useState('')
  const [typing, setTyping] = useState(true)

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
  const { lang, t } = useT()
  const typed       = useTyping(PHRASES[lang])
  const scrollTo    = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <Section
      noBorder
      padding="pb-16 px-6"
      className="overflow-hidden"
      innerClassName="text-center"
    >
      {/* Ambient green glow */}
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
        // {t.hero.label}
      </motion.p>

      {/* Main name */}
      <motion.h1
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="font-sans font-bold leading-none tracking-tighter text-white mb-6"
        style={{ fontSize: 'clamp(3rem, 8vw, 6rem)' }}
      >
        Zo<span className="text-[#4ade80]"> . Antonio </span>
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
          {t.hero.cta1}
        </button>
        <button
          onClick={() => scrollTo('contact')}
          className="px-7 py-3 border border-[#222] text-[#444] font-mono text-xs tracking-[0.15em] uppercase hover:border-[#4ade80] hover:text-[#4ade80] transition-all duration-200 focus:outline-none"
        >
          {t.hero.cta2}
        </button>
        <a
          href="/Zo-CV.pdf"
          download
          className="px-7 py-3 border border-[#222] text-[#444] font-mono text-xs tracking-[0.15em] uppercase hover:border-[#4ade80] hover:text-[#4ade80] transition-all duration-200 focus:outline-none"
        >
          {t.hero.cta3}
        </a>
      </motion.div>

      {/* Social badges */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-24 md:bottom-10 right-6 md:right-10 flex items-center gap-2.5"
      >
        <span className="font-mono text-[8px] tracking-[0.3em] text-[#3a3a3a] uppercase mr-1 hidden sm:block">
          {t.hero.connect}
        </span>
        {SOCIALS.map(({ href, label, Icon }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith('mailto') ? '_self' : '_blank'}
            rel="noopener noreferrer"
            aria-label={label}
            className="w-9 h-9 rounded-full border border-[#2e2e2e] bg-[#0f0f0f] text-[#888] flex items-center justify-center hover:border-[#4ade80] hover:text-[#4ade80] hover:bg-[#0d0d0d] transition-all duration-200"
          >
            <Icon size={15} />
          </a>
        ))}
      </motion.div>

      {/* Scroll indicator — desktop only */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-3"
      >
        <span className="font-mono text-[9px] tracking-[0.4em] text-[#2a2a2a] uppercase">{t.hero.scroll}</span>
        <div className="scroll-float w-px h-10 bg-gradient-to-b from-[#4ade80]/40 to-transparent" />
      </motion.div>
    </Section>
  )
}
