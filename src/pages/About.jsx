import { motion } from 'framer-motion'
import Section from '../components/Section'
import heroImg from '../assets/hero.png'

const SKILLS = [
  'React', 'Node.js', 'Next.js', 'PostgreSQL',
  'TypeScript', 'Docker', 'Tailwind', 'Git',
]

const META = [
  { label: 'Localisation', value: 'Madagascar' },
  { label: 'Statut',       value: 'Full-Stack Developer' },
  { label: 'Langues',      value: 'FR · EN · MG' },
  { label: 'Disponible',   value: 'Open to work' },
]

export default function About() {
  return (
    <Section label="à propos">
      {(inView) => (
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start">

          {/* Left — image */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="w-full"
          >
            <div className="relative w-full aspect-[4/5] overflow-hidden border border-[#1a1a1a]">
              <img
                src={heroImg}
                alt="Zo"
                className="w-full h-full object-cover grayscale opacity-80"
              />
              {/* subtle green tint overlay */}
              <div className="absolute inset-0 bg-[#4ade80]/5 pointer-events-none" />
            </div>
          </motion.div>

          {/* Right — content */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-6"
          >
            {/* Title */}
            <h2
              className="font-sans font-semibold text-white leading-snug"
              style={{ fontSize: 'clamp(1.4rem, 4.5vw, 2.4rem)' }}
            >
              Développeur passionné par les interfaces{' '}
              <span className="text-[#4ade80]">qui durent.</span>
            </h2>

            {/* Bio */}
            <div className="flex flex-col gap-3">
              <p className="text-[#555] leading-relaxed text-sm sm:text-[0.95rem]">
                Je suis Zo — développeur full-stack basé à Madagascar, spécialisé dans
                la construction d'applications web robustes, scalables et bien architecturées.
                Du design système au déploiement, je m'investis dans chaque couche de la stack.
              </p>
              <p className="text-[#555] leading-relaxed text-sm sm:text-[0.95rem]">
                Curieux par nature, minutieux par discipline. J'aime le code qui tient à
                3h du matin autant qu'à la démo client.
              </p>
            </div>

            {/* Metadata grid */}
            <div className="grid grid-cols-2 gap-px bg-[#141414] border border-[#141414]">
              {META.map(({ label, value }) => (
                <div key={label} className="bg-[#0a0a0a] px-4 py-3">
                  <p className="font-mono text-[9px] tracking-[0.2em] text-[#2a2a2a] uppercase mb-1">
                    {label}
                  </p>
                  <p className="font-mono text-[11px] text-[#555]">{value}</p>
                </div>
              ))}
            </div>

            {/* Skills */}
            <div className="flex flex-col gap-3">
              <p className="font-mono text-[10px] tracking-[0.25em] text-[#3a3a3a] uppercase">
                // stack technique
              </p>
              <div className="flex flex-wrap gap-2">
                {SKILLS.map((skill, i) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, y: 8 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.35, delay: 0.3 + i * 0.06 }}
                    className="px-3 py-1.5 border border-[#1e1e1e] font-mono text-[11px] text-[#666] hover:border-[#4ade80] hover:text-[#4ade80] transition-all duration-200 cursor-default select-none"
                  >
                    {`<${skill} />`}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      )}
    </Section>
  )
}
