import { useState, useEffect } from 'react'

const SECTIONS = [
  {
    id: 'hero',
    label: 'Accueil',
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="3.5,6.5 7.5,9 3.5,11.5" />
        <line x1="9.5" y1="11.5" x2="14.5" y2="11.5" />
      </svg>
    ),
  },
  {
    id: 'about',
    label: 'À propos',
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="currentColor" stroke="none">
        <circle cx="9" cy="5.5" r="2.5" />
        <path d="M3 16c0-3.314 2.686-6 6-6s6 2.686 6 6H3z" />
      </svg>
    ),
  },
  {
    id: 'projects',
    label: 'Projets',
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="5.5,4.5 2,9 5.5,13.5" />
        <polyline points="12.5,4.5 16,9 12.5,13.5" />
        <line x1="10.5" y1="4" x2="7.5" y2="14" />
      </svg>
    ),
  },
  {
    id: 'contact',
    label: 'Contact',
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4.5" width="14" height="9.5" rx="1" />
        <polyline points="2,4.5 9,10.5 16,4.5" />
      </svg>
    ),
  },
]

export default function Sidebar() {
  const [active, setActive] = useState('hero')

  useEffect(() => {
    const observers = SECTIONS.map(({ id }) => {
      const el = document.getElementById(id)
      if (!el) return null
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(id) },
        { threshold: 0.5 }
      )
      obs.observe(el)
      return obs
    }).filter(Boolean)

    return () => observers.forEach((o) => o.disconnect())
  }, [])

  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <aside
      className={[
        'fixed z-40 flex',
        'bottom-0 left-0 right-0 h-16 flex-row items-center justify-around px-6',
        'bg-[#0a0a0a]/95 backdrop-blur-md border-t border-[#1a1a1a]',
        'md:bottom-auto md:right-auto md:left-2 md:top-1/2 md:-translate-y-1/2',
        'md:h-auto md:w-14 md:flex-col md:justify-center md:items-center md:gap-3',
        'md:px-2 md:py-5',
        'md:bg-[#0f0f0f]/95 md:backdrop-blur-md md:border md:border-[#1e1e1e] md:rounded-2xl',
      ].join(' ')}
    >
      {SECTIONS.map(({ id, label, icon }) => (
        <button
          key={id}
          onClick={() => scrollTo(id)}
          title={label}
          aria-label={label}
          className={[
            'flex items-center justify-center rounded-full border transition-all duration-200',
            'w-10 h-10 md:w-9 md:h-9',
            active === id
              ? 'border-[#4ade80] text-[#4ade80] bg-[#4ade80]/10'
              : 'border-[#252525] text-[#505050] hover:border-[#4ade80]/40 hover:text-[#4ade80]/60',
          ].join(' ')}
        >
          {icon}
        </button>
      ))}
    </aside>
  )
}
