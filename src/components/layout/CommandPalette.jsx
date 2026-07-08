import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useMemo, useState } from 'react'
import { FiSearch } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'

import { commands } from '../../constants/site.js'
import { useTheme } from '../../context/useTheme.js'
import { useAmbientAudio } from '../../hooks/useAmbientAudio.js'
import { scrollToSection } from '../../utils/scroll.js'

export function CommandPalette({ open, onClose, onToast }) {
  const [query, setQuery] = useState('')
  const navigate = useNavigate()
  const { toggleTheme } = useTheme()
  const ambientAudio = useAmbientAudio()

  const filteredCommands = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase()

    if (!normalizedQuery) {
      return commands
    }

    return commands.filter((command) => command.label.toLowerCase().includes(normalizedQuery))
  }, [query])

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

  const executeCommand = (command) => {
    switch (command.type) {
      case 'scroll':
        scrollToSection(command.target)
        break
      case 'theme':
        toggleTheme()
        break
      case 'music':
        ambientAudio.toggle()
        break
      case 'link':
        window.open(command.href, '_blank', 'noreferrer')
        break
      case 'route':
        navigate(command.href)
        break
      default:
        break
    }

    onToast({
      title: command.label,
      message: 'Command executed successfully.',
      tone: 'success',
    })
    onClose()
  }

  return (
    <AnimatePresence>
      {open ? (
        <motion.div className="fixed inset-0 z-[85] flex items-start justify-center px-4 py-10 sm:px-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          <button type="button" aria-label="Close command palette" className="absolute inset-0 bg-slate-950/84 backdrop-blur-md" onClick={onClose} />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Command palette"
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.98 }}
            transition={{ duration: 0.25 }}
            className="relative z-10 w-full max-w-2xl overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/92 shadow-[0_34px_120px_rgba(0,0,0,0.5)] backdrop-blur-2xl"
          >
            <div className="flex items-center gap-3 border-b border-white/10 px-5 py-4 sm:px-6">
              <FiSearch className="text-sky-300" />
              <input
                autoFocus
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search sections, commands, and actions..."
                className="w-full bg-transparent text-base text-white placeholder:text-slate-500 focus:outline-none"
              />
            </div>
            <div className="max-h-[60vh] overflow-y-auto p-2 sm:p-3">
              {filteredCommands.map((command) => (
                <button
                  key={command.id}
                  type="button"
                  onClick={() => executeCommand(command)}
                  className="flex w-full items-center justify-between rounded-2xl border border-transparent px-4 py-3 text-left transition hover:border-white/10 hover:bg-white/6"
                >
                  <span className="text-sm font-medium text-white">{command.label}</span>
                  <span className="text-[11px] uppercase tracking-[0.26em] text-slate-400">Enter</span>
                </button>
              ))}
              {filteredCommands.length === 0 ? (
                <div className="px-4 py-10 text-center text-sm text-slate-400">No commands matched your search.</div>
              ) : null}
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}