import { motion } from 'framer-motion'
import { FiArrowUpRight, FiMail } from 'react-icons/fi'

import { Button } from './Button.jsx'
import { GlassCard } from './GlassCard.jsx'
import { scrollToSection } from '../../utils/scroll.js'

export function ProjectCard({ project, onOpen }) {
  return (
    <motion.article
      className="group h-full"
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
    >
      <GlassCard className="flex h-full flex-col overflow-hidden border-white/12">
        <div className={`relative min-h-[220px] overflow-hidden bg-gradient-to-br ${project.accent} p-5`}>
          {project.image && (
            <img
              src={project.image}
              alt={project.title}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          )}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.28),transparent_32%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.12),transparent_25%)]" />
          {project.image && (
            <div className="absolute inset-0 bg-gradient-to-b from-slate-950/45 via-transparent to-slate-950/60" />
          )}
          <div className="absolute inset-x-5 top-5 flex items-center justify-between text-[11px] uppercase tracking-[0.32em] text-white/70">
            <span>{project.category}</span>
            <span>{project.year}</span>
          </div>
          {project.frames?.length > 0 && (
            <motion.div
              className="absolute inset-0"
              initial={false}
              whileHover={{ scale: 1.05, rotate: -1.5 }}
              transition={{ duration: 0.45 }}
            >
              {/* <div className="absolute inset-x-6 bottom-6 rounded-[1.6rem] border border-white/18 bg-slate-950/22 p-4 backdrop-blur-2xl">
                <p className="text-sm font-medium text-white/90">{project.title}</p>
                <div className="mt-3 space-y-2">
                  {project.frames.map((frame) => (
                    <div key={frame} className="rounded-2xl border border-white/12 bg-white/8 px-3 py-2 text-xs text-white/78">
                      {frame}
                    </div>
                  ))}
                </div>
              </div> */}
            </motion.div>
          )}
        </div>
        <div className="flex flex-1 flex-col gap-5 p-5 sm:p-6">
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
              <span className="rounded-full border border-white/10 bg-white/6 px-2.5 py-1 text-[11px] uppercase tracking-[0.22em] text-slate-300">
                {project.slug}
              </span>
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-300">{project.summary}</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {project.stack.map((item) => (
              <span key={item} className="rounded-full border border-white/10 bg-white/6 px-3 py-1 text-[11px] font-medium text-slate-200">
                {item}
              </span>
            ))}
          </div>
          <div className="mt-auto flex flex-wrap gap-3">
            <Button variant="secondary" size="sm" type="button" onClick={() => onOpen(project)}>
              View case study
              <FiArrowUpRight />
            </Button>
            <Button variant="ghost" size="sm" type="button" onClick={() => scrollToSection('contact')}>
              <FiMail />
              Contact
            </Button>
          </div>
        </div>
      </GlassCard>
    </motion.article>
  )
}