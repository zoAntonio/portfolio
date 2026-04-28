import { motion } from 'framer-motion'
import Section from '../components/Section'
import { SOCIALS } from '../data'

export default function Contact() {
  return (
    <Section label="contact">
      {(inView) => (
        <div className="flex flex-col items-center text-center max-w-2xl w-full">

          <motion.h2
            initial={{ opacity: 0, y: 22 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-sans font-bold text-white leading-tight tracking-tighter mb-5"
            style={{ fontSize: 'clamp(2rem, 5.5vw, 3.4rem)' }}
          >
            Get in <span className="text-[#4ade80]">touch.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="font-sans text-[#888] text-sm leading-relaxed mb-12 max-w-sm"
          >
            Un projet, une opportunité ou simplement envie d'échanger ?
            Je suis disponible via les canaux ci-dessous.
          </motion.p>

          <div className="flex items-center gap-5 mb-12">
            {SOCIALS.map(({ label, Icon, href }, i) => (
              <motion.a
                key={label}
                href={href}
                target={label !== 'Email' ? '_blank' : undefined}
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
                title={label}
                className="w-14 h-14 rounded-full bg-[#0f0f0f] border border-[#2a2a2a] flex items-center justify-center text-[#888] hover:text-[#4ade80] hover:border-[#4ade80]/40 hover:bg-[#0d0d0d] transition-all duration-200"
              >
                <Icon size={20} />
              </motion.a>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.55 }}
            className="flex flex-col gap-1.5"
          >
            <span className="font-mono text-[11px] text-[#666]">
              zoheriniaina.antonio@gmail.com
            </span>
            <span className="font-mono text-[11px] text-[#555]">
              Antananarivo, Madagascar
            </span>
          </motion.div>

        </div>
      )}
    </Section>
  )
}
