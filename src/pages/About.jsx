import { motion } from 'framer-motion'
import Section from '../components/Section'

const SKILLS = [
  'React', 'Node.js', 'Next.js', 'PostgreSQL',
  'TypeScript', 'Docker', 'Tailwind', 'Git',
]

const fadeUp = (inView, delay = 0) => ({
  initial:    { opacity: 0, y: 20 },
  animate:    inView ? { opacity: 1, y: 0 } : {},
  transition: { duration: 0.55, delay, ease: [0.16, 1, 0.3, 1] },
})

export default function About() {
  return (
    <Section label="à propos">
      {(inView) => (
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start">

          {/* Left : bio */}
          <motion.div {...fadeUp(inView, 0.1)}>
            <h2
              className="font-sans font-semibold text-white mb-5 leading-snug"
              style={{ fontSize: 'clamp(1.4rem, 4.5vw, 2.4rem)' }}
            >
              Développeur passionné par les interfaces{' '}
              <span className="text-[#4ade80]">qui durent.</span>
            </h2>
            <p className="text-[#555] leading-relaxed text-sm sm:text-[0.95rem] mb-3">
              Je suis Zo — développeur full-stack basé à Madagascar, spécialisé dans
              la construction d'applications web robustes, scalables et bien architecturées.
              Du design système au déploiement, je m'investis dans chaque couche de la stack.
            </p>
            <p className="text-[#555] leading-relaxed text-sm sm:text-[0.95rem]">
              Curieux par nature, minutieux par discipline. J'aime le code qui tient à
              3h du matin autant qu'à la démo client.
            </p>
          </motion.div>

          {/* Right : skills */}
          <motion.div {...fadeUp(inView, 0.18)}>
            <p className="font-mono text-[10px] tracking-[0.25em] text-[#3a3a3a] uppercase mb-5">
              // stack technique
            </p>
            <div className="flex flex-wrap gap-2">
              {SKILLS.map((skill, i) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, y: 8 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.35, delay: 0.24 + i * 0.06 }}
                  className="px-3 py-1.5 border border-[#1e1e1e] font-mono text-[11px] text-[#666] hover:border-[#4ade80] hover:text-[#4ade80] transition-all duration-200 cursor-default select-none"
                >
                  {`<${skill} />`}
                </motion.span>
              ))}
            </div>
          </motion.div>

        </div>
      )}
    </Section>
  )
}
