import { useState } from 'react'

export function Tooltip({ label, children }) {
  const [open, setOpen] = useState(false)

  return (
    <span className="relative inline-flex" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      {children}
      {open ? (
        <span className="absolute left-1/2 top-full z-20 mt-2 -translate-x-1/2 rounded-full border border-white/12 bg-slate-950 px-3 py-1 text-[11px] font-medium text-white shadow-2xl">
          {label}
        </span>
      ) : null}
    </span>
  )
}