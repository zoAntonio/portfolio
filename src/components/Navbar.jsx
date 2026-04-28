import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useT } from '../i18n'

function scrollTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

function LangToggle({ lang, toggle, className = '' }) {
  return (
    <div className={`flex items-center gap-1 ${className}`}>
      <button
        onClick={() => lang !== 'fr' && toggle()}
        className={[
          'font-mono text-[10px] font-bold tracking-widest px-2.5 py-1 rounded transition-all duration-200 focus:outline-none',
          lang === 'fr'
            ? 'bg-[#4ade80] text-[#0a0a0a]'
            : 'text-[#444] hover:text-[#777] border border-[#2a2a2a] hover:border-[#444]',
        ].join(' ')}
        aria-label="Français"
      >
        FR
      </button>
      <button
        onClick={() => lang !== 'en' && toggle()}
        className={[
          'font-mono text-[10px] font-bold tracking-widest px-2.5 py-1 rounded transition-all duration-200 focus:outline-none',
          lang === 'en'
            ? 'bg-[#4ade80] text-[#0a0a0a]'
            : 'text-[#444] hover:text-[#777] border border-[#2a2a2a] hover:border-[#444]',
        ].join(' ')}
        aria-label="English"
      >
        EN
      </button>
    </div>
  )
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { lang, toggle, t } = useT()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0a0a0a]/92 backdrop-blur-md border-b border-[#1e1e1e]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <button
          onClick={() => scrollTo('hero')}
          className="font-mono text-sm font-bold tracking-wider focus:outline-none"
        >
          <span className="text-[#4ade80]">Zo</span>
          <span className="text-white/40">.dev</span>
        </button>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {t.nav.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className="group flex items-center gap-1.5 font-mono text-[11px] tracking-[0.2em] uppercase text-[#444] hover:text-[#4ade80] transition-colors duration-200 focus:outline-none"
            >
              <span className="text-[#4ade80] opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                //
              </span>
              {link.label}
            </button>
          ))}
          <LangToggle lang={lang} toggle={toggle} />
        </nav>

        {/* Mobile right side */}
        <div className="flex items-center gap-4 md:hidden">
          <LangToggle lang={lang} toggle={toggle} />
          <button
            className="font-mono text-[#444] text-xs tracking-wider focus:outline-none"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="menu"
          >
            {menuOpen ? '[ fermer ]' : '[ menu ]'}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          className="md:hidden border-t border-[#1e1e1e] bg-[#0a0a0a] px-6 py-4 flex flex-col gap-4"
        >
          {t.nav.map((link) => (
            <button
              key={link.id}
              onClick={() => { scrollTo(link.id); setMenuOpen(false) }}
              className="font-mono text-xs tracking-[0.2em] uppercase text-[#555] hover:text-[#4ade80] transition-colors text-left"
            >
              <span className="text-[#4ade80]">// </span>{link.label}
            </button>
          ))}
        </motion.div>
      )}
    </motion.header>
  )
}
