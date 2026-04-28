import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function Section({
  label,
  children,
  noBorder       = false,
  autoHeight     = false,
  className      = '',
  innerClassName = '',
  padding        = 'py-14 md:py-20 px-4 sm:px-6',
}) {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <div
      ref={ref}
      className={[
        'relative flex flex-col',
        !autoHeight && 'min-h-screen justify-center',
        padding,
        !noBorder && 'border-t border-[#1a1a1a]',
        className,
      ].filter(Boolean).join(' ')}
    >
      <div className={`max-w-6xl mx-auto w-full flex flex-col items-center ${innerClassName}`}>
        {label && (
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="font-mono text-3xl sm:text-4xl font-bold tracking-[0.12em] uppercase text-[#4ade80] mb-10 w-full text-center"
          >
            // {label}
          </motion.p>
        )}
        {typeof children === 'function' ? children(inView) : children}
      </div>
    </div>
  )
}
