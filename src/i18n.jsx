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
      label:   'développeur full-stack',
      cta1:    'voir_projets',
      cta2:    'me_contacter',
      cta3:    'télécharger_cv',
      connect: 'contact',
      scroll:  'défiler',
    },
    about: {
      title:    'Du code pensé,',
      title_hl: 'des projets qui durent.',
      bio1: "Je suis RANDRIANANDRIANINA Zo Heriniaina Antonio, développeur full-stack junior, titulaire d'une Licence en Sciences et Technologies Informatiques — option Développement Web. Curieux et motivé, je m'adapte rapidement aux nouvelles technologies et aux différents environnements de travail.",
      bio2: "Je crois au code intentionnel : architecture claire, bons choix par défaut, et le soin de rendre les choses à la fois fonctionnelles et belles. J'interviens sur toute la stack — là où se trouve le problème.",
      meta: [
        { label: 'Localisation', value: 'Antananarivo'        },
        { label: 'Téléphone',    value: '034 60 14 447'        },
        { label: 'Langues',      value: 'FR · EN · MG'         },
        { label: 'Disponible',   value: 'Ouvert aux opportunités' },
      ],
    },
    stack: {
      categories: {
        frontend:  'Frontend',
        backend:   'Backend',
        databases: 'Bases de données',
        tools:     'Outils',
      },
    },
    projects: {
      live: 'Démo',
    },
    contact: {
      title:    'Prenons',
      title_hl: 'contact.',
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
      label:   'full-stack developer',
      cta1:    'view_projects',
      cta2:    'contact_me',
      cta3:    'download_cv',
      connect: 'connect',
      scroll:  'scroll',
    },
    about: {
      title:    'Intentional code,',
      title_hl: 'projects that last.',
      bio1: "I'm RANDRIANANDRIANINA Zo Heriniaina Antonio, a junior full-stack developer holding a Bachelor's in Computer Science — Web Development specialization. Curious and motivated, I adapt quickly to new technologies and work environments.",
      bio2: "I care about code that's intentional: clean architecture, good defaults, and the craft of making things both functional and beautiful. I work across the full stack — wherever the problem lives.",
      meta: [
        { label: 'Location',  value: 'Antananarivo'   },
        { label: 'Phone',     value: '034 60 14 447'  },
        { label: 'Languages', value: 'FR · EN · MG'   },
        { label: 'Available', value: 'Open to work'   },
      ],
    },
    stack: {
      categories: {
        frontend:  'Frontend',
        backend:   'Backend',
        databases: 'Databases',
        tools:     'Tools',
      },
    },
    projects: {
      live: 'Live',
    },
    contact: {
      title:    'Get in',
      title_hl: 'touch.',
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
