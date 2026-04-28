import { motion } from 'framer-motion'
import Section from '../components/Section'
import {
  SiNextdotjs, SiPostgresql, SiSymfony, SiSpring,
} from 'react-icons/si'

const TECH_ICONS = {
  'Next.js':    { Icon: SiNextdotjs,  color: '#ffffff' },
  'PostgreSQL': { Icon: SiPostgresql, color: '#4169E1' },
  'Symfony':    { Icon: SiSymfony,    color: '#ffffff' },
  'Spring':     { Icon: SiSpring,     color: '#6DB33F' },
}

const PROJECTS = [
  {
    num: '01',
    name: 'Inscriptions ESPA',
    type: 'Stage',
    period: 'Déc 2025 → Mars 2026',
    description: [
      'Système d\'information complet pour la gestion des inscriptions étudiantes — back-end Symfony, front-end Next.js.',
      'Automatisation de la génération de documents officiels (attestations, relevés de notes), réduisant à zéro les saisies manuelles.',
    ],
    stack: ['Symfony', 'Next.js', 'PostgreSQL'],
    github: 'https://github.com/ogsan-zo',
    live: '#',
  },
  {
    num: '02',
    name: 'Rapports MESUPRES',
    type: 'Institutionnel',
    period: 'Oct → Déc 2025',
    description: [
      'Plateforme centralisée remplaçant les échanges manuels de rapports au niveau du Ministère de l\'Enseignement Supérieur.',
      'Centralisation de 3 types de rapports (hebdomadaires, mensuels, semestriels) avec tableau de bord de suivi par agent.',
    ],
    stack: ['Symfony', 'Next.js', 'PostgreSQL'],
    github: 'https://github.com/ogsan-zo',
    live: '#',
  },
  {
    num: '03',
    name: 'Mini-Framework MVC',
    type: 'Dev Tool',
    period: '2024 – 2025',
    description: [
      'Framework MVC from scratch en Java, inspiré de Spring MVC — routeur dynamique avec mapping automatique des URLs.',
      'Système de sécurité d\'accès basé sur des rôles et permissions, avec documentation complète de l\'architecture.',
    ],
    stack: ['Java', 'Spring'],
    github: 'https://github.com/ogsan-zo',
    live: '#',
  },
]

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
      {/* Header */}
      <div className="flex items-baseline gap-2 mb-0.5">
        <h3 className="font-sans font-bold text-white text-lg group-hover:text-[#4ade80] transition-colors duration-300">
          {project.name}
        </h3>
        <span className="font-mono text-[#4ade80] text-xs">· {project.type}</span>
      </div>
      <p className="font-mono text-[9px] tracking-[0.2em] text-[#555] uppercase mb-4">
        {project.period}
      </p>

      {/* Description bullets */}
      <ul className="flex flex-col gap-2 mb-5">
        {project.description.map((line, i) => (
          <li key={i} className="flex gap-2.5 text-sm text-[#999] leading-relaxed">
            <span className="text-[#4ade80] shrink-0 mt-0.5 select-none">·</span>
            {line}
          </li>
        ))}
      </ul>

      {/* Stack tags with icons */}
      <div className="flex flex-wrap gap-2 mb-5">
        {project.stack.map((tech) => (
          <TechTag key={tech} name={tech} />
        ))}
      </div>

      {/* Links */}
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

          {/* Animated vertical line — desktop only */}
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
                  {/* Card */}
                  <div className="md:w-[46%]">
                    <ProjectCard
                      project={project}
                      inView={inView}
                      delay={0.25 + i * 0.2}
                      isLeft={isLeft}
                    />
                  </div>

                  {/* Dot on the line */}
                  <div className="hidden md:flex md:w-[8%] items-start justify-center pt-7">
                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      animate={inView ? { scale: 1, opacity: 1 } : {}}
                      transition={{ duration: 0.35, delay: 0.4 + i * 0.2 }}
                      className="w-3 h-3 rounded-full border-2 border-[#4ade80] bg-[#0a0a0a] z-10 shadow-[0_0_8px_rgba(74,222,128,0.4)]"
                    />
                  </div>

                  {/* Empty side */}
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
