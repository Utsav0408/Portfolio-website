import { motion } from 'framer-motion'

import { useScrollProgress } from '../../hooks/useScrollProgress.js'

export function ScrollProgress() {
  const progress = useScrollProgress()

  return (
    <div className="fixed inset-x-0 top-0 z-[80] h-1.5 bg-white/6">
      <motion.div
        className="h-full origin-left bg-[linear-gradient(90deg,rgba(168,85,247,0.95),rgba(56,189,248,0.95),rgba(34,211,238,0.95))]"
        style={{ scaleX: progress }}
      />
    </div>
  )
}