import { motion } from 'framer-motion'
import Section from '../components/Section'
import { SOCIALS } from '../data'
import { useT } from '../i18n'

export default function Contact() {
  const { t } = useT()
  return ( 
    <Section>
    {(inView) => (
        <div className="flex flex-col items-center text-center max-w-2xl w-full gap-10">

          <motion.h2
            initial={{ opacity: 0, y: 22 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-sans font-bold text-white leading-tight tracking-tighter"
            style={{ fontSize: 'clamp(2.4rem, 7vw, 4.5rem)' }}
          >
            {t.contact.title} <span className="text-[#4ade80]">{t.contact.title_hl}</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="font-sans text-[#888] text-base leading-relaxed max-w-md"
          >
            {t.contact.desc}
          </motion.p>

          <div className="flex items-center gap-8">
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
                className="w-16 h-16 rounded-full bg-[#0f0f0f] border border-[#2a2a2a] flex items-center justify-center text-[#aaa] hover:text-[#4ade80] hover:border-[#4ade80]/40 hover:bg-[#0d0d0d] transition-all duration-200"
              >
                <Icon size={22} />
              </motion.a>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.55 }}
            className="flex flex-col gap-3"
          >
            <span className="font-mono text-sm text-[#aaa]">
              zoheriniaina.antonio@gmail.com
            </span>
            <span className="font-mono text-sm text-[#777]">
              034 60 14 447 , Antananarivo , Madagascar
            </span>
          </motion.div>

        </div>
      )}
    </Section>
  )
}
