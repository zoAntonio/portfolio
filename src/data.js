import {
  SiNextdotjs, SiVuedotjs, SiReact, SiJavascript, SiTailwindcss,
  SiPhp, SiSymfony, SiLaravel, SiSpringboot,
  SiPostgresql, SiMysql,
  SiDocker, SiGit, SiGithub, SiPostman,
  SiSpring,
} from 'react-icons/si'
import { FiMail, FiGithub, FiLinkedin } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'

// ─── Hero ────────────────────────────────────────────────────────────────────

export const PHRASES = {
  fr: [
    'full-stack · Madagascar.',
    'craft, vitesse, interfaces soignées.',
    'fonctionnel et beau — toujours les deux.',
  ],
  en: [
    'full-stack · Madagascar.',
    'craft, speed, interfaces that feel right.',
    'functional and beautiful — always both.',
  ],
}

// ─── Shared social links (Hero + Contact) ────────────────────────────────────

export const SOCIALS = [
  { label: 'Email',     Icon: FiMail,      href: 'mailto:zoheriniaina.antonio@gmail.com' },
  { label: 'GitHub',    Icon: FiGithub,    href: 'https://github.com/ogsan-zo' },
  { label: 'LinkedIn',  Icon: FiLinkedin,  href: 'https://linkedin.com/in/zo-antonio' },
  { label: 'WhatsApp',  Icon: FaWhatsapp,  href: 'https://wa.me/261346014447' },
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
    type: { fr: 'Stage', en: 'Internship' },
    period: 'Déc 2025 → Mar 2026',
    description: {
      fr: [
        "Système d'information complet pour la gestion des inscriptions étudiantes — back-end Symfony, front-end Next.js.",
        "Automatisation de la génération de documents officiels (attestations, relevés de notes), réduisant à zéro les saisies manuelles.",
      ],
      en: [
        "Complete information system for managing student enrollments — Symfony back-end, Next.js front-end.",
        "Automated generation of official documents (certificates, transcripts), reducing manual data entry to zero.",
      ],
    },
    stack: ['Symfony', 'Next.js', 'PostgreSQL'],
    github: 'https://github.com/ogsan-zo/inscription-frontend',
    live: '#',
  },
  {
    num: '02',
    name: 'Rapports MESUPRES',
    type: { fr: 'Institutionnel', en: 'Institutional' },
    period: 'Oct → Déc 2025',
    description: {
      fr: [
        "Plateforme centralisée remplaçant les échanges manuels de rapports au niveau du Ministère de l'Enseignement Supérieur.",
        "Centralisation de 3 types de rapports (hebdomadaires, mensuels, semestriels) avec tableau de bord de suivi par agent.",
      ],
      en: [
        "Centralized platform replacing manual report exchanges at the Ministry of Higher Education.",
        "Consolidation of 3 report types (weekly, monthly, semi-annual) with a per-agent tracking dashboard.",
      ],
    },
    stack: ['Symfony', 'Next.js', 'PostgreSQL'],
    github: 'https://github.com/ogsan-zo/rapports-backend',
    live: '#',
  },
  {
    num: '03',
    name: 'Mini-Framework MVC',
    type: { fr: 'Dev Tool', en: 'Dev Tool' },
    period: '2024 – 2025',
    description: {
      fr: [
        "Framework MVC from scratch en Java, inspiré de Spring MVC — routeur dynamique avec mapping automatique des URLs.",
        "Système de sécurité d'accès basé sur des rôles et permissions, avec documentation complète de l'architecture.",
      ],
      en: [
        "MVC framework built from scratch in Java, inspired by Spring MVC — dynamic router with automatic URL mapping.",
        "Role and permission-based access security system, with comprehensive architecture documentation.",
      ],
    },
    stack: ['Java', 'Spring'],
    github: 'https://github.com/ogsan-zo/framework',
    live: '#',
  },
]
