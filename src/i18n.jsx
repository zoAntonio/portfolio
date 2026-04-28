import { createContext, useContext, useState } from 'react'

const Ctx = createContext()

export const T = {
  fr: {
    nav: [
      { label: 'à propos', id: 'about'    },
      { label: 'stack',    id: 'stack'    },
      { label: 'projets',  id: 'projects' },
      { label: 'contact',  id: 'contact'  },
    ],
    sections: {
      about:    'à propos',
      stack:    'stack',
      projects: 'projets',
      contact:  'contact',
    },
    hero: {
      cta1: 'voir_projets',
      cta2: 'me_contacter',
    },
    about: {
      title:    'Développeur animé par une volonté constante',
      title_hl: 'de progresser.',
      bio1: "Diplômé d'une Licence en Informatique à IT University, j'ai acquis une expérience concrète en développement Full-Stack lors de stages au sein d'institutions publiques — ESPA et MESUPRES — avec Symfony, Next.js et PostgreSQL.",
      bio2: "Humble, curieux et rigoureux, je recherche un environnement ambitieux où contribuer à des projets à fort impact et évoluer dans ma carrière.",
      meta: [
        { label: 'Localisation', value: 'Antananarivo'        },
        { label: 'Statut',       value: 'Full-Stack Developer' },
        { label: 'Langues',      value: 'FR · EN · MG'        },
        { label: 'Disponible',   value: 'Open to work'        },
      ],
    },
    contact: {
      desc: "Un projet, une opportunité ou simplement envie d'échanger ? Je suis disponible via les canaux ci-dessous.",
    },
  },

  en: {
    nav: [
      { label: 'about',    id: 'about'    },
      { label: 'stack',    id: 'stack'    },
      { label: 'projects', id: 'projects' },
      { label: 'contact',  id: 'contact'  },
    ],
    sections: {
      about:    'about',
      stack:    'stack',
      projects: 'projects',
      contact:  'contact',
    },
    hero: {
      cta1: 'view_projects',
      cta2: 'contact_me',
    },
    about: {
      title:    'Developer driven by a constant will',
      title_hl: 'to grow.',
      bio1: "Graduated with a Bachelor's in Computer Science from IT University, I gained hands-on Full-Stack experience through internships at public institutions — ESPA and MESUPRES — using Symfony, Next.js and PostgreSQL.",
      bio2: "Humble, curious and meticulous, I'm looking for an ambitious environment where I can contribute to high-impact projects and grow in my career.",
      meta: [
        { label: 'Location',  value: 'Antananarivo'        },
        { label: 'Status',    value: 'Full-Stack Developer' },
        { label: 'Languages', value: 'FR · EN · MG'        },
        { label: 'Available', value: 'Open to work'        },
      ],
    },
    contact: {
      desc: "A project, an opportunity, or just want to connect? I'm available through the channels below.",
    },
  },
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('fr')
  const toggle = () => setLang((l) => (l === 'fr' ? 'en' : 'fr'))
  return (
    <Ctx.Provider value={{ lang, toggle, t: T[lang] }}>
      {children}
    </Ctx.Provider>
  )
}

export function useT() {
  return useContext(Ctx)
}
