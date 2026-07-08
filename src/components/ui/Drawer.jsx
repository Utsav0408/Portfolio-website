import { AnimatePresence, motion } from 'framer-motion'
import { FiX } from 'react-icons/fi'

import { Button } from './Button.jsx'

export function Drawer({ open, title, onClose, children }) {
  return (
    <AnimatePresence>
      {open ? (
        <motion.div className="fixed inset-0 z-[75] lg:hidden" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          <button type="button" aria-label="Close drawer" className="absolute inset-0 bg-slate-950/72 backdrop-blur-sm" onClick={onClose} />
          <motion.aside
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 280 }}
            className="absolute right-0 top-0 flex h-full w-full max-w-sm flex-col border-l border-white/10 bg-slate-950/96 p-5"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[11px] uppercase tracking-[0.34em] text-sky-300/80">Navigation</p>
                <h3 className="mt-2 text-xl font-semibold text-white">{title}</h3>
              </div>
              <Button variant="ghost" size="sm" type="button" onClick={onClose} className="!px-3">
                <FiX />
              </Button>
            </div>
            <div className="mt-8 flex-1 overflow-y-auto">{children}</div>
          </motion.aside>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}