import {
  SiNextdotjs, SiVuedotjs, SiReact, SiJavascript, SiTailwindcss,
  SiPhp, SiSymfony, SiLaravel, SiSpringboot,
  SiPostgresql, SiMysql,
  SiDocker, SiGit, SiGithub, SiPostman,
  SiSpring,
} from 'react-icons/si'
import { FiMail, FiGithub, FiLinkedin } from 'react-icons/fi'

// ─── Hero ────────────────────────────────────────────────────────────────────

export const PHRASES = [
  'je construis des apps qui tiennent la route.',
  'du backend au frontend, sans compromis.',
  'code propre. architecture solide. résultats nets.',
]

// ─── Shared social links (Hero + Contact) ────────────────────────────────────

export const SOCIALS = [
  { label: 'Email',    Icon: FiMail,     href: 'mailto:zoheriniaina.antonio@gmail.com' },
  { label: 'GitHub',   Icon: FiGithub,   href: 'https://github.com/ogsan-zo' },
  { label: 'LinkedIn', Icon: FiLinkedin, href: 'https://linkedin.com/in/zo-antonio' },
]

// ─── About ───────────────────────────────────────────────────────────────────

export const META = [
  { label: 'Localisation', value: 'Antananarivo' },
  { label: 'Statut',       value: 'Full-Stack Developer' },
  { label: 'Langues',      value: 'FR · EN · MG' },
  { label: 'Disponible',   value: 'Open to work' },
]

// ─── Stack ───────────────────────────────────────────────────────────────────

export const CATEGORIES = [
  { id: 'frontend',  label: 'Frontend'  },
  { id: 'backend',   label: 'Backend'   },
  { id: 'databases', label: 'Databases' },
  { id: 'tools',     label: 'Tools'     },
]

export const STACKS = {
  frontend: [
    { name: 'Next.js',      Icon: SiNextdotjs,   color: '#ffffff' },
    { name: 'Vue.js',       Icon: SiVuedotjs,    color: '#42B883' },
    { name: 'React',        Icon: SiReact,       color: '#61DAFB' },
    { name: 'JavaScript',   Icon: SiJavascript,  color: '#F7DF1E' },
    { name: 'Tailwind CSS', Icon: SiTailwindcss, color: '#06B6D4' },
  ],
  backend: [
    { name: 'PHP',         Icon: SiPhp,        color: '#777BB4' },
    { name: 'Symfony',     Icon: SiSymfony,    color: '#ffffff' },
    { name: 'Laravel',     Icon: SiLaravel,    color: '#FF2D20' },
    { name: 'Spring Boot', Icon: SiSpringboot, color: '#6DB33F' },
  ],
  databases: [
    { name: 'PostgreSQL', Icon: SiPostgresql, color: '#4169E1' },
    { name: 'MySQL',      Icon: SiMysql,      color: '#4479A1' },
  ],
  tools: [
    { name: 'Docker',  Icon: SiDocker,  color: '#2496ED' },
    { name: 'Git',     Icon: SiGit,     color: '#F05032' },
    { name: 'GitHub',  Icon: SiGithub,  color: '#ffffff'  },
    { name: 'Postman', Icon: SiPostman, color: '#FF6C37' },
  ],
}

// ─── Projects ────────────────────────────────────────────────────────────────

export const TECH_ICONS = {
  'Next.js':    { Icon: SiNextdotjs,  color: '#ffffff' },
  'PostgreSQL': { Icon: SiPostgresql, color: '#4169E1' },
  'Symfony':    { Icon: SiSymfony,    color: '#ffffff' },
  'Spring':     { Icon: SiSpring,     color: '#6DB33F' },
}

export const PROJECTS = [
  {
    num: '01',
    name: 'Inscriptions ESPA',
    type: 'Stage',
    period: 'Déc 2025 → Mars 2026',
    description: [
      "Système d'information complet pour la gestion des inscriptions étudiantes — back-end Symfony, front-end Next.js.",
      "Automatisation de la génération de documents officiels (attestations, relevés de notes), réduisant à zéro les saisies manuelles.",
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
      "Plateforme centralisée remplaçant les échanges manuels de rapports au niveau du Ministère de l'Enseignement Supérieur.",
      "Centralisation de 3 types de rapports (hebdomadaires, mensuels, semestriels) avec tableau de bord de suivi par agent.",
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
      "Framework MVC from scratch en Java, inspiré de Spring MVC — routeur dynamique avec mapping automatique des URLs.",
      "Système de sécurité d'accès basé sur des rôles et permissions, avec documentation complète de l'architecture.",
    ],
    stack: ['Java', 'Spring'],
    github: 'https://github.com/ogsan-zo',
    live: '#',
  },
]
