import { motion } from 'framer-motion'

import { GlassCard } from './GlassCard.jsx'

export function Timeline({ items }) {
  return (
    <div className="relative space-y-5">
      <div className="absolute left-4 top-2 hidden h-full w-px bg-gradient-to-b from-sky-400/70 via-violet-400/50 to-transparent lg:block" />
      {items.map((item, index) => (
        <motion.div
          key={`${item.title}-${index}`}
          className="relative lg:pl-12"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: index * 0.05 }}
        >
          <span className="absolute left-2 top-8 hidden h-4 w-4 rounded-full border border-sky-300 bg-slate-950 shadow-[0_0_0_6px_rgba(56,189,248,0.08)] lg:block" />
          <GlassCard className="p-5 sm:p-6">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-sky-300/90">{item.period}</p>
                <h3 className="mt-2 text-xl font-semibold text-white">{item.title}</h3>
              </div>
              {item.company ? <p className="text-sm text-slate-300">{item.company}</p> : null}
            </div>
            {item.summary ? <p className="mt-4 text-sm leading-7 text-slate-300">{item.summary}</p> : null}
            {item.points ? (
              <ul className="mt-4 space-y-2 text-sm leading-6 text-slate-300">
                {item.points.map((point) => (
                  <li key={point} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-300" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            ) : null}
          </GlassCard>
        </motion.div>
      ))}
    </div>
  )
}