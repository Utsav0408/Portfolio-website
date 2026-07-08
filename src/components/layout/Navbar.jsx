import { useState } from 'react'
import { FiCommand, FiMenu, FiMoon, FiSun } from 'react-icons/fi'

import { navigation, site, socials } from '../../constants/site.js'
import { scrollToSection } from '../../utils/scroll.js'
import { Button } from '../ui/Button.jsx'
import { Container } from '../ui/Container.jsx'
import { Drawer } from '../ui/Drawer.jsx'
import { useTheme } from '../../context/useTheme.js'
import { Tooltip } from '../ui/Tooltip.jsx'

export function Navbar({ onOpenCommandPalette }) {
  const [open, setOpen] = useState(false)
  const { isDark, toggleTheme } = useTheme()

  const handleNavigate = (target) => {
    if (target === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      scrollToSection(target)
    }

    setOpen(false)
  }

  return (
    <>
      <header className="sticky top-3 z-[60] px-3 sm:top-4 sm:px-4">
        <Container className="glass-surface-strong flex items-center justify-between rounded-full px-4 py-3 sm:px-5">
          <a href="#home" onClick={(event) => { event.preventDefault(); handleNavigate('home') }} className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[linear-gradient(135deg,rgba(168,85,247,0.98),rgba(56,189,248,0.96),rgba(34,211,238,0.98))] text-sm font-semibold text-white shadow-[0_14px_35px_rgba(56,189,248,0.22)]">
              UR
            </span>
            <div className="hidden sm:block">
              <p className="text-[11px] uppercase tracking-[0.34em] text-sky-300/90">Portfolio</p>
              <p className="mt-1 text-sm font-semibold text-white">{site.name}</p>
            </div>
          </a>

          <nav className="hidden items-center gap-1 lg:flex">
            {navigation.map((item) => (
              <button
                key={item.href}
                type="button"
                onClick={() => handleNavigate(item.href)}
                className="rounded-full px-4 py-2 text-sm text-slate-300 transition hover:bg-white/8 hover:text-white"
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Tooltip label="Command palette">
              <Button variant="ghost" size="sm" type="button" onClick={onOpenCommandPalette} className="hidden sm:inline-flex !px-3">
                <FiCommand />
              </Button>
            </Tooltip>
            <Tooltip label="Toggle theme">
              {/* <Button variant="ghost" size="sm" type="button" onClick={toggleTheme} className="!px-3">
                {isDark ? <FiSun /> : <FiMoon />}
              </Button> */}
            </Tooltip>
            <Button variant="secondary" size="sm" href={`mailto:${site.email}`} className="hidden md:inline-flex">
              Contact
            </Button>
            <Button variant="ghost" size="sm" type="button" onClick={() => setOpen(true)} className="lg:hidden !px-3">
              <FiMenu />
            </Button>
          </div>
        </Container>
      </header>

      <Drawer open={open} title={site.name} onClose={() => setOpen(false)}>
        <div className="space-y-6">
          <div className="grid gap-2">
            {navigation.map((item) => (
              <button
                key={item.href}
                type="button"
                onClick={() => handleNavigate(item.href)}
                className="rounded-2xl border border-white/10 bg-white/6 px-4 py-3 text-left text-base text-white transition hover:border-white/18 hover:bg-white/10"
              >
                {item.label}
              </button>
            ))}
          </div>
          <div className="flex flex-wrap gap-3">
            <Button variant="secondary" size="sm" type="button" onClick={onOpenCommandPalette}>
              <FiCommand />
              Command palette
            </Button>
          </div>
          <div className="space-y-3 border-t border-white/10 pt-6">
            <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Social</p>
            <div className="flex flex-col gap-2">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-2xl border border-white/10 bg-white/6 px-4 py-3 text-sm text-white transition hover:border-white/18 hover:bg-white/10"
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </Drawer>
    </>
  )
}