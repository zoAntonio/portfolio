import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Section from '../components/Section'
import { CATEGORIES, STACKS } from '../data'
import { useT } from '../i18n'

function TechCard({ tech, delay, inView }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay, ease: [0.16, 1, 0.3, 1] }}
      className="group bg-[#0d0d0d] border border-[#1a1a1a] rounded-lg flex flex-col items-center justify-center gap-3 py-8 px-4 sm:py-10 sm:px-6 hover:bg-[#111] hover:border-[#252525] transition-all duration-200 cursor-default"
    >
      <tech.Icon
        size={40}
        style={{ color: tech.color }}
        className="opacity-80 group-hover:opacity-100 transition-opacity duration-200"
      />
      <span className="font-mono text-xs text-[#555] group-hover:text-[#777] transition-colors duration-200 text-center">
        {tech.name}
      </span>
    </motion.div>
  )
}

export default function Stack() {
  const [active, setActive] = useState('frontend')
  const { t } = useT()
  const activeLabel = CATEGORIES.find(c => c.id === active)?.label ?? active

  return (
    <Section label={t.sections.stack}>
      {(inView) => (
        <div className="w-full max-w-5xl flex flex-col gap-10">

          {/* Tabs + grid */}
          <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-8 md:gap-12">

            {/* Category tabs */}
            <div className="flex flex-row md:flex-col gap-2 overflow-x-auto md:overflow-visible pb-2 md:pb-0 shrink-0">
              {CATEGORIES.map((cat, i) => (
                <motion.button
                  key={cat.id}
                  initial={{ opacity: 0, x: -12 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.15 + i * 0.07 }}
                  onClick={() => setActive(cat.id)}
                  className={[
                    'font-sans text-sm font-medium px-5 py-3 rounded-md text-center transition-all duration-200 whitespace-nowrap focus:outline-none w-full',
                    active === cat.id
                      ? 'bg-[#4ade80] text-[#0a0a0a] font-bold'
                      : 'border border-[#1e1e1e] text-[#555] hover:border-[#4ade80]/40 hover:text-[#4ade80]',
                  ].join(' ')}
                >
                  {cat.label}
                </motion.button>
              ))}
            </div>

            {/* Tech grid */}
            <div>
              <motion.p
                key={active + '-label'}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.2 }}
                className="font-mono text-sm text-[#4ade80] mb-5 tracking-wide"
              >
                ✦ {activeLabel}
              </motion.p>

              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4"
                >
                  {STACKS[active].map((tech, i) => (
                    <TechCard
                      key={tech.name}
                      tech={tech}
                      delay={i * 0.06}
                      inView={inView}
                    />
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>

          </div>
        </div>
      )}
    </Section>
  )
}
