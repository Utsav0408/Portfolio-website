import { motion } from 'framer-motion'

export function Loader() {
  return (
    <div className="grid min-h-[65vh] place-items-center px-6 py-24 text-center">
      <motion.div
        className="glass-surface w-full max-w-md rounded-[2rem] px-8 py-12"
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <motion.div
          className="mx-auto h-14 w-14 rounded-full border border-white/20 border-t-white"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
        />
        <p className="mt-6 text-sm uppercase tracking-[0.3em] text-sky-300/90">Loading experience</p>
        <p className="mt-3 text-sm leading-6 text-slate-300">
          Preparing premium interactions, 3D assets, and route transitions.
        </p>
      </motion.div>
    </div>
  )
}