import { AnimatePresence, motion } from 'framer-motion'

import { useToast } from '../../context/useToast.js'

const toneStyles = {
  info: 'border-sky-400/25 bg-sky-400/10',
  success: 'border-emerald-400/25 bg-emerald-400/10',
  warning: 'border-amber-400/25 bg-amber-400/10',
  error: 'border-rose-400/25 bg-rose-400/10',
}

export function ToastViewport() {
  const { toasts, removeToast } = useToast()

  return (
    <div className="pointer-events-none fixed right-4 top-4 z-[90] flex w-[calc(100vw-2rem)] max-w-sm flex-col gap-3 sm:right-6 sm:top-6">
      <AnimatePresence>
        {toasts.map((toast) => (
          <motion.div
            key={toast.id}
            initial={{ opacity: 0, y: -12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            className={`pointer-events-auto rounded-2xl border px-4 py-4 text-sm backdrop-blur-xl ${toneStyles[toast.tone]}`}
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="font-semibold text-white">{toast.title}</p>
                {toast.message ? <p className="mt-1 text-xs leading-5 text-slate-300">{toast.message}</p> : null}
              </div>
              <button
                type="button"
                className="text-xs uppercase tracking-[0.22em] text-slate-300 transition hover:text-white"
                onClick={() => removeToast(toast.id)}
              >
                Close
              </button>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
}