import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const SKILLS = [
  'React', 'Node.js', 'Next.js', 'PostgreSQL',
  'TypeScript', 'Docker', 'Tailwind', 'Git',
]

function FadeUp({ children, delay = 0, className = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 22 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default function About() {
  const sectionRef = useRef(null)
  const inView      = useInView(sectionRef, { once: true, margin: '-80px' })

  return (
    <div ref={sectionRef} className="py-32 px-6 border-t border-[#1a1a1a]">
      <div className="max-w-6xl mx-auto">

        <FadeUp delay={0}>
          <p className="font-mono text-[11px] tracking-[0.35em] uppercase text-[#4ade80] mb-14">
            // à propos
          </p>
        </FadeUp>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

          {/* Left: bio */}
          <FadeUp delay={0.12}>
            <h2
              className="font-sans font-semibold text-white mb-7 leading-tight text-balance"
              style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)' }}
            >
              Développeur passionné par les interfaces&nbsp;
              <span className="text-[#4ade80]">qui durent.</span>
            </h2>
            <p className="text-[#555] leading-relaxed text-[0.95rem] mb-4">
              Je suis Zo — développeur full-stack basé à Madagascar, spécialisé dans la
              construction d'applications web robustes, scalables et bien architecturées.
              Du design système au déploiement, je m'investis dans chaque couche de la stack.
            </p>
            <p className="text-[#555] leading-relaxed text-[0.95rem]">
              Curieux par nature, minutieux par discipline. J'aime le code qui tient à
              3h du matin autant qu'à la démo client.
            </p>
          </FadeUp>

          {/* Right: skills */}
          <div>
            <FadeUp delay={0.2}>
              <p className="font-mono text-[10px] tracking-[0.25em] text-[#2e2e2e] uppercase mb-6">
                // stack technique
              </p>
            </FadeUp>

            <div className="flex flex-wrap gap-2.5">
              {SKILLS.map((skill, i) => (
                <motion.span
                  key={skill}
                  ref={undefined}
                  initial={{ opacity: 0, y: 10 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.28 + i * 0.07 }}
                  className="px-3 py-1.5 border border-[#1e1e1e] font-mono text-[11px] text-[#666] hover:border-[#4ade80] hover:text-[#4ade80] transition-all duration-200 cursor-default select-none"
                >
                  {`<${skill} />`}
                </motion.span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
