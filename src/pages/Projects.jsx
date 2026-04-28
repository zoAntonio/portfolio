import { motion } from 'framer-motion'
import Section from '../components/Section'
import { TECH_ICONS, PROJECTS } from '../data'

function TechTag({ name }) {
  const tech = TECH_ICONS[name]
  return (
    <span className="group/tag flex items-center gap-1.5 font-mono text-[10px] text-[#777] border border-[#2a2a2a] rounded-full px-3 py-1 hover:border-[#4ade80]/30 hover:text-[#aaa] transition-colors duration-200">
      {tech && (
        <tech.Icon size={11} style={{ color: tech.color }} className="opacity-70 group-hover/tag:opacity-100 transition-opacity duration-200" />
      )}
      {name}
    </span>
  )
}

function ProjectCard({ project, inView, delay, isLeft }) {
  return (
    <motion.article
      initial={{ opacity: 0, x: isLeft ? -28 : 28 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      className="group bg-[#0a0a0a] border border-[#1e1e1e] p-6 hover:border-[#4ade80]/25 transition-colors duration-300"
    >
      <div className="flex items-baseline gap-2 mb-0.5">
        <h3 className="font-sans font-bold text-white text-lg group-hover:text-[#4ade80] transition-colors duration-300">
          {project.name}
        </h3>
        <span className="font-mono text-[#4ade80] text-xs">· {project.type}</span>
      </div>
      <p className="font-mono text-[9px] tracking-[0.2em] text-[#555] uppercase mb-4">
        {project.period}
      </p>

      <ul className="flex flex-col gap-2 mb-5">
        {project.description.map((line, i) => (
          <li key={i} className="flex gap-2.5 text-sm text-[#999] leading-relaxed">
            <span className="text-[#4ade80] shrink-0 mt-0.5 select-none">·</span>
            {line}
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-2 mb-5">
        {project.stack.map((tech) => (
          <TechTag key={tech} name={tech} />
        ))}
      </div>

      <div className="flex gap-5">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-[11px] text-[#666] hover:text-[#4ade80] transition-colors duration-200 flex items-center gap-1.5"
        >
          <span>→</span> GitHub
        </a>
        {project.live !== '#' && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[11px] text-[#666] hover:text-[#4ade80] transition-colors duration-200 flex items-center gap-1.5"
          >
            <span>↗</span> Live
          </a>
        )}
      </div>
    </motion.article>
  )
}

export default function Projects() {
  return (
    <Section label="projets">
      {(inView) => (
        <div className="relative w-full max-w-3xl">

          <motion.div
            initial={{ scaleY: 0 }}
            animate={inView ? { scaleY: 1 } : {}}
            transition={{ duration: 1.4, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            style={{ transformOrigin: 'top' }}
            className="hidden md:block absolute left-1/2 -translate-x-1/2 top-8 bottom-8 w-px bg-gradient-to-b from-[#1e1e1e] via-[#1e1e1e] to-transparent"
          />

          <div className="flex flex-col gap-10">
            {PROJECTS.map((project, i) => {
              const isLeft = i % 2 === 0
              return (
                <div
                  key={project.num}
                  className={[
                    'relative flex flex-col md:items-start md:flex-row',
                    !isLeft && 'md:flex-row-reverse',
                  ].filter(Boolean).join(' ')}
                >
                  <div className="md:w-[46%]">
                    <ProjectCard
                      project={project}
                      inView={inView}
                      delay={0.25 + i * 0.2}
                      isLeft={isLeft}
                    />
                  </div>

                  <div className="hidden md:flex md:w-[8%] items-start justify-center pt-7">
                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      animate={inView ? { scale: 1, opacity: 1 } : {}}
                      transition={{ duration: 0.35, delay: 0.4 + i * 0.2 }}
                      className="w-3 h-3 rounded-full border-2 border-[#4ade80] bg-[#0a0a0a] z-10 shadow-[0_0_8px_rgba(74,222,128,0.4)]"
                    />
                  </div>

                  <div className="hidden md:block md:w-[46%]" />
                </div>
              )
            })}
          </div>

        </div>
      )}
    </Section>
  )
}
