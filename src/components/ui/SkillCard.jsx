import { motion } from 'framer-motion'

import { GlassCard } from './GlassCard.jsx'

export function SkillCard({ item }) {
  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.01 }}
      transition={{ duration: 0.25 }}
      className="h-full"
    >
      <GlassCard className="flex h-full flex-col gap-4 p-5">
        <div className="flex items-center justify-between gap-3">
          <h3 className="text-lg font-semibold text-white">{item.name}</h3>
          <span className="rounded-full border border-white/10 bg-white/6 px-2.5 py-1 text-[11px] font-medium uppercase tracking-[0.22em] text-slate-300">
            {item.level}%
          </span>
        </div>
        <div className="h-2 overflow-hidden rounded-full bg-white/8">
          <motion.div
            className="h-full rounded-full bg-[linear-gradient(90deg,rgba(56,189,248,0.95),rgba(168,85,247,0.95),rgba(34,211,238,0.95))]"
            initial={{ width: 0 }}
            whileInView={{ width: `${item.level}%` }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
          />
        </div>
        <p className="text-sm leading-6 text-slate-300">
          Strong enough to ship production work, flexible enough to collaborate across product, brand, and engineering.
        </p>
      </GlassCard>
    </motion.div>
  )
}