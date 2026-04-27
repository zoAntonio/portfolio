import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const PROJECTS = [
  {
    num: '01',
    name: 'DevBoard',
    description:
      'Dashboard temps réel pour développeurs — métriques de déploiement, logs et alertes. Architecture microservices avec WebSockets.',
    stack: ['Next.js', 'Node.js', 'PostgreSQL', 'Redis'],
    github: 'https://github.com/Antonio2772',
    live:   '#',
  },
  {
    num: '02',
    name: 'NexChat',
    description:
      'Application de messagerie en temps réel : rooms, DMs et partage de fichiers. Chiffrement end-to-end côté client.',
    stack: ['React', 'Socket.io', 'Express', 'MongoDB'],
    github: 'https://github.com/Antonio2772',
    live:   '#',
  },
  {
    num: '03',
    name: 'ApiForge',
    description:
      'Générateur et documenteur d\'APIs REST. Crée des endpoints, schémas et docs Swagger depuis une interface visuelle.',
    stack: ['TypeScript', 'Next.js', 'PostgreSQL', 'Docker'],
    github: 'https://github.com/Antonio2772',
    live:   '#',
  },
]

function ProjectCard({ project, delay, inView }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay, ease: [0.16, 1, 0.3, 1] }}
      className="group relative flex flex-col bg-[#0a0a0a] border border-[#141414] p-8 hover:border-[#4ade80]/20 transition-colors duration-300"
    >
      {/* Top-right corner accent on hover */}
      <span
        className="pointer-events-none absolute top-0 right-0 w-8 h-8 border-t border-r border-[#4ade80]/0 group-hover:border-[#4ade80]/50 transition-colors duration-300"
      />

      <div className="font-mono text-5xl font-bold text-[#161616] group-hover:text-[#4ade80]/10 transition-colors duration-300 mb-6 select-none leading-none">
        {project.num}
      </div>

      <h3 className="font-sans text-xl font-semibold text-white group-hover:text-[#4ade80] transition-colors duration-300 mb-3">
        {project.name}
      </h3>

      <p className="text-[#4a4a4a] text-sm leading-relaxed mb-7 flex-1">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 mb-8">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="font-mono text-[10px] text-[#2e2e2e] border border-[#1a1a1a] px-2 py-0.5 group-hover:border-[#252525] group-hover:text-[#3a3a3a] transition-colors duration-200"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="flex items-center gap-5">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-[11px] text-[#333] hover:text-[#4ade80] transition-colors duration-200 flex items-center gap-1.5"
        >
          <span>→</span> GitHub
        </a>
        <a
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-[11px] text-[#333] hover:text-[#4ade80] transition-colors duration-200 flex items-center gap-1.5"
        >
          <span>↗</span> Live
        </a>
      </div>
    </motion.article>
  )
}

export default function Projects() {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <div ref={ref} className="py-32 px-6 border-t border-[#1a1a1a]">
      <div className="max-w-6xl mx-auto">

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="font-mono text-[11px] tracking-[0.35em] uppercase text-[#4ade80] mb-14"
        >
          // projets
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#141414]">
          {PROJECTS.map((project, i) => (
            <ProjectCard
              key={project.num}
              project={project}
              delay={0.1 + i * 0.12}
              inView={inView}
            />
          ))}
        </div>

      </div>
    </div>
  )
}
