import { motion } from 'framer-motion'

export function AnimatedBadge({ children, className = '' }) {
  return (
    <motion.span
      className={`inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/6 px-3 py-1 text-xs font-medium text-white/80 ${className}`}
      whileHover={{ y: -1, scale: 1.02 }}
    >
      {children}
    </motion.span>
  )
}