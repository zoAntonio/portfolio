import { motion } from 'framer-motion'
import Section from '../components/Section'

const LINKS = [
  {
    label:   'email',
    display: 'zoheriniaina.antonio@gmail.com',
    href:    'mailto:zoheriniaina.antonio@gmail.com',
  },
  {
    label:   'github',
    display: 'github.com/Antonio2772',
    href:    'https://github.com/Antonio2772',
  },
  {
    label:   'linkedin',
    display: 'linkedin.com/in/zo-antonio',
    href:    'https://linkedin.com/in/zo-antonio',
  },
]

export default function Contact() {
  return (
    <Section label="contact">
      {(inView) => (
        <>
          <motion.h2
            initial={{ opacity: 0, y: 22 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-sans font-bold text-white leading-tight tracking-tighter mb-12 text-center"
            style={{ fontSize: 'clamp(1.5rem, 5vw, 2.8rem)' }}
          >
            Travaillons{' '}
            <span className="text-[#4ade80]">ensemble.</span>
          </motion.h2>

          <div className="flex flex-col max-w-xl w-full gap-px bg-[#141414]">
            {LINKS.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.label !== 'email' ? '_blank' : undefined}
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -14 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.22 + i * 0.09 }}
                className="group flex flex-col sm:flex-row sm:items-center sm:justify-between bg-[#0a0a0a] px-5 py-4 sm:py-3.5 hover:bg-[#0d0d0d] transition-colors duration-200"
              >
                <span className="font-mono text-[10px] tracking-[0.2em] text-[#2a2a2a] uppercase mb-1 sm:mb-0">
                  {link.label}
                </span>
                <span className="font-mono text-[11px] text-[#3a3a3a] group-hover:text-[#4ade80] transition-colors duration-200 flex items-center gap-1.5 break-all sm:break-normal">
                  {link.display}
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-200">↗</span>
                </span>
              </motion.a>
            ))}
          </div>
        </>
      )}
    </Section>
  )
}
