import { AnimatePresence, motion } from 'framer-motion'
import { useEffect } from 'react'
import { FiX } from 'react-icons/fi'

import { Button } from './Button.jsx'

export function Modal({ open, title, onClose, children, footer }) {
  useEffect(() => {
    if (!open) {
      return undefined
    }

    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    window.addEventListener('keydown', onKeyDown)

    return () => window.removeEventListener('keydown', onKeyDown)
  }, [onClose, open])

  return (
    <AnimatePresence>
      {open ? (
        <motion.div className="fixed inset-0 z-[70] flex items-end justify-center p-4 sm:items-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          <button type="button" aria-label="Close modal" className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm" onClick={onClose} />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={title}
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.98 }}
            transition={{ duration: 0.28 }}
            className="relative z-10 w-full max-w-3xl overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/90 shadow-[0_30px_100px_rgba(0,0,0,0.45)] backdrop-blur-2xl"
          >
            <div className="flex items-start justify-between gap-4 border-b border-white/10 px-5 py-4 sm:px-6">
              <div>
                <p className="text-[11px] uppercase tracking-[0.34em] text-sky-300/80">Project details</p>
                <h3 className="mt-2 text-2xl font-semibold text-white">{title}</h3>
              </div>
              <Button variant="ghost" size="sm" type="button" onClick={onClose} className="!px-3">
                <FiX />
              </Button>
            </div>
            <div className="max-h-[78vh] overflow-y-auto px-5 py-6 sm:px-6">{children}</div>
            {footer ? <div className="border-t border-white/10 px-5 py-5 sm:px-6">{footer}</div> : null}
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}