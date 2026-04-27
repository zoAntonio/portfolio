import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const LINKS = [
  {
    label: 'email',
    display: 'zoheriniaina.antonio@gmail.com',
    href: 'mailto:zoheriniaina.antonio@gmail.com',
  },
  {
    label: 'github',
    display: 'github.com/Antonio2772',
    href: 'https://github.com/Antonio2772',
  },
  {
    label: 'linkedin',
    display: 'linkedin.com/in/zo-antonio',
    href: 'https://linkedin.com/in/zo-antonio',
  },
]

export default function Contact() {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <div ref={ref} className="py-32 px-6 border-t border-[#1a1a1a]">
      <div className="max-w-6xl mx-auto">

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="font-mono text-[11px] tracking-[0.35em] uppercase text-[#4ade80] mb-12"
        >
          // contact
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
          className="font-sans font-bold text-white leading-none tracking-tighter mb-16"
          style={{ fontSize: 'clamp(2.8rem, 8vw, 6.5rem)' }}
        >
          Travaillons<br />
          <span className="text-[#4ade80]">ensemble.</span>
        </motion.h2>

        {/* Link rows */}
        <div className="flex flex-col max-w-xl gap-px bg-[#141414]">
          {LINKS.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              target={link.label !== 'email' ? '_blank' : undefined}
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: -16 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.45, delay: 0.28 + i * 0.1 }}
              className="group flex items-center justify-between bg-[#0a0a0a] px-6 py-4 hover:bg-[#0d0d0d] transition-colors duration-200"
            >
              <span className="font-mono text-[10px] tracking-[0.2em] text-[#2a2a2a] uppercase">
                {link.label}
              </span>
              <span className="font-mono text-[11px] text-[#3a3a3a] group-hover:text-[#4ade80] transition-colors duration-200 flex items-center gap-2">
                {link.display}
                <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  ↗
                </span>
              </span>
            </motion.a>
          ))}
        </div>

      </div>
    </div>
  )
}
