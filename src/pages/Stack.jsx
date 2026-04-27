import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Section from '../components/Section'
import {
  SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiVite,
  SiNodedotjs, SiExpress, SiNestjs, SiPython,
  SiPostgresql, SiMongodb, SiRedis, SiMysql,
  SiDocker, SiGit, SiGithub, SiLinux, SiPostman, SiFigma,
} from 'react-icons/si'

const CATEGORIES = [
  { id: 'frontend',  label: 'Frontend'  },
  { id: 'backend',   label: 'Backend'   },
  { id: 'databases', label: 'Databases' },
  { id: 'tools',     label: 'Tools'     },
]

const STACKS = {
  frontend: [
    { name: 'React',        Icon: SiReact,           color: '#61DAFB' },
    { name: 'Next.js',      Icon: SiNextdotjs,       color: '#ffffff' },
    { name: 'TypeScript',   Icon: SiTypescript,      color: '#3178C6' },
    { name: 'Tailwind CSS', Icon: SiTailwindcss,     color: '#06B6D4' },
    { name: 'Vite',         Icon: SiVite,            color: '#646CFF' },
  ],
  backend: [
    { name: 'Node.js',  Icon: SiNodedotjs, color: '#339933' },
    { name: 'Express',  Icon: SiExpress,   color: '#ffffff'  },
    { name: 'NestJS',   Icon: SiNestjs,    color: '#E0234E' },
    { name: 'Python',   Icon: SiPython,    color: '#3776AB' },
  ],
  databases: [
    { name: 'PostgreSQL', Icon: SiPostgresql, color: '#4169E1' },
    { name: 'MongoDB',    Icon: SiMongodb,    color: '#47A248' },
    { name: 'Redis',      Icon: SiRedis,      color: '#DC382D' },
    { name: 'MySQL',      Icon: SiMysql,      color: '#4479A1' },
  ],
  tools: [
    { name: 'Docker',   Icon: SiDocker,           color: '#2496ED' },
    { name: 'Git',      Icon: SiGit,              color: '#F05032' },
    { name: 'GitHub',   Icon: SiGithub,           color: '#ffffff'  },
    { name: 'Linux',    Icon: SiLinux,            color: '#FCC624' },
    { name: 'Postman',  Icon: SiPostman,          color: '#FF6C37' },
    { name: 'Figma',    Icon: SiFigma,            color: '#F24E1E' },
  ],
}

function TechCard({ tech, delay, inView }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay, ease: [0.16, 1, 0.3, 1] }}
      className="group bg-[#0a0a0a] flex flex-col items-center justify-center gap-3 py-8 px-4 hover:bg-[#0d0d0d] transition-colors duration-200 cursor-default"
    >
      <tech.Icon
        size={36}
        style={{ color: tech.color }}
        className="opacity-80 group-hover:opacity-100 transition-opacity duration-200"
      />
      <span className="font-mono text-[10px] text-[#3a3a3a] group-hover:text-[#555] transition-colors duration-200 text-center">
        {tech.name}
      </span>
    </motion.div>
  )
}

export default function Stack() {
  const [active, setActive] = useState('frontend')

  return (
    <Section label="stack">
      {(inView) => (
        <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-[160px_1fr] gap-8 md:gap-12">

          {/* Category tabs */}
          <div className="flex flex-row md:flex-col gap-2 overflow-x-auto md:overflow-visible pb-2 md:pb-0">
            {CATEGORIES.map((cat, i) => (
              <motion.button
                key={cat.id}
                initial={{ opacity: 0, x: -12 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.1 + i * 0.07 }}
                onClick={() => setActive(cat.id)}
                className={[
                  'font-mono text-xs tracking-[0.15em] uppercase px-5 py-2.5 text-left transition-all duration-200 whitespace-nowrap focus:outline-none',
                  active === cat.id
                    ? 'bg-[#4ade80] text-[#0a0a0a] font-bold'
                    : 'text-[#444] border border-[#1a1a1a] hover:border-[#4ade80]/30 hover:text-[#4ade80]',
                ].join(' ')}
              >
                {cat.label}
              </motion.button>
            ))}
          </div>

          {/* Tech grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-px bg-[#141414]"
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
      )}
    </Section>
  )
}
