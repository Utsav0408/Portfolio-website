import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'

import { Footer } from '../components/layout/Footer.jsx'
import { Navbar } from '../components/layout/Navbar.jsx'
import { ScrollProgress } from '../components/layout/ScrollProgress.jsx'
import { CommandPalette } from '../components/layout/CommandPalette.jsx'
import { ToastViewport } from '../components/ui/Toast.jsx'
import { useToast } from '../context/useToast.js'

export function AppLayout() {
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false)
  const [commandPaletteSession, setCommandPaletteSession] = useState(0)
  const location = useLocation()
  const { toast } = useToast()

  const openCommandPalette = () => {
    setCommandPaletteSession((currentSession) => currentSession + 1)
    setCommandPaletteOpen(true)
  }

  return (
    <>
      <ScrollProgress />
      <Navbar onOpenCommandPalette={openCommandPalette} />
      <main className="relative pt-6 sm:pt-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
      <CommandPalette
        key={commandPaletteSession}
        open={commandPaletteOpen}
        onClose={() => setCommandPaletteOpen(false)}
        onToast={toast}
      />
      <ToastViewport />
    </>
  )
}