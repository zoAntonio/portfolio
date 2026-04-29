import { motion } from 'framer-motion'
import Section from '../components/Section'
import heroImg from '../assets/hero.png'
import { useT } from '../i18n'

export default function About() {
  const { t } = useT()
  return (
    <Section label={t.sections.about}>
      {(inView) => (
        <div className="w-full grid grid-cols-1 md:grid-cols-[280px_1fr] gap-10 md:gap-16 items-start">

          {/* Left — image */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="hidden md:block w-full md:max-w-none"
          >
            <div className="relative w-full aspect-[3/4] overflow-hidden border border-[#1a1a1a]">
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
              {t.about.title}{' '}
              <span className="text-[#4ade80]">{t.about.title_hl}</span>
            </h2>

            {/* Bio */}
            <div className="flex flex-col gap-3">
              <p className="text-[#999] leading-relaxed text-sm sm:text-[0.95rem]">{t.about.bio1}</p>
              <p className="text-[#999] leading-relaxed text-sm sm:text-[0.95rem]">{t.about.bio2}</p>
            </div>

            {/* Metadata grid */}
            <div className="grid grid-cols-2 gap-px bg-[#1a1a1a] border border-[#1a1a1a]">
              {t.about.meta.map(({ label, value }) => (
                <div key={label} className="bg-[#0a0a0a] px-4 py-3">
                  <p className="font-mono text-[9px] tracking-[0.2em] text-[#555] uppercase mb-1">
                    {label}
                  </p>
                  <p className="font-mono text-[12px] text-[#ccc]">{value}</p>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      )}
    </Section>
  )
}
