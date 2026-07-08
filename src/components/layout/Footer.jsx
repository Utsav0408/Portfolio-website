import { FiArrowUpRight, FiDownload, FiMail } from 'react-icons/fi'

import { Container } from '../ui/Container.jsx'
import { Button } from '../ui/Button.jsx'
import { socials, site } from '../../constants/site.js'
import { scrollToSection } from '../../utils/scroll.js'

const iconMap = {
  mail: FiMail,
  download: FiDownload,
}

export function Footer() {
  return (
    <footer className="relative mt-10 border-t border-white/10 py-8 sm:py-10">
      <Container className="space-y-8">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-xl space-y-4">
            <p className="text-sm uppercase tracking-[0.32em] text-sky-300/90">{site.name}</p>
            <h2 className="text-3xl font-semibold text-white md:text-4xl">Build clean, test-backed software that ships fast.</h2>
            <p className="max-w-lg text-sm leading-7 text-slate-300">
              Full stack and frontend development with reusable UI systems, automation coverage, and production-minded delivery.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button variant="secondary" onClick={() => scrollToSection('home')}>
              Back to top
              <FiArrowUpRight />
            </Button>
            <Button variant="ghost" href={`mailto:${site.email}`}>
              Contact
            </Button>
          </div>
        </div>
        <div className="flex flex-col gap-4 border-t border-white/10 pt-6 md:flex-row md:items-center md:justify-between">
          <p className="text-sm text-slate-400">© {new Date().getFullYear()} {site.name}. Crafted with React, GSAP, Framer Motion, and Three.js.</p>
          <div className="flex flex-wrap gap-3">
            {socials.map((social) => {
              const Icon = iconMap[social.icon]

              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/6 px-3 py-2 text-sm text-slate-200 transition hover:border-white/18 hover:bg-white/12"
                >
                  {Icon ? <Icon /> : null}
                  {social.label}
                </a>
              )
            })}
          </div>
        </div>
      </Container>
    </footer>
  )
}