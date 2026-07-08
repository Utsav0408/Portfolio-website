import { motion } from 'framer-motion'

import { cn } from '../../utils/classNames.js'
import { fadeUp, wordContainer, wordItem } from '../../animations/motionVariants.js'

export function SectionHeading({ eyebrow, title, description, className, align = 'left' }) {
  return (
    <motion.div
      className={cn(align === 'center' && 'mx-auto max-w-3xl text-center', className)}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.45 }}
    >
      {eyebrow ? (
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.34em] text-sky-300/90">
          {eyebrow}
        </p>
      ) : null}
      <motion.h2
        className="text-xl font-semibold text-white md:text-5xl"
        variants={wordContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
      >
        {title.split(' ').map((word, index) => (
          <motion.span key={`${word}-${index}`} className="inline-block overflow-hidden">
            <motion.span className="inline-block pr-3" variants={wordItem}>
              {word}
            </motion.span>
          </motion.span>
        ))}
      </motion.h2>
      {description ? <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-300 md:text-base">{description}</p> : null}
    </motion.div>
  )
}