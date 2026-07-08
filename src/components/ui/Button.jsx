import { forwardRef } from 'react'
import { motion } from 'framer-motion'

import { cn } from '../../utils/classNames.js'

const baseStyles =
  'inline-flex items-center justify-center gap-2 rounded-full border px-5 py-3 text-sm font-semibold tracking-wide transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300/80'

const variantStyles = {
  primary:
    'border-transparent bg-white text-slate-950 shadow-[0_18px_50px_rgba(255,255,255,0.12)] hover:bg-sky-100',
  secondary:
    'border-white/12 bg-white/8 text-white hover:border-white/24 hover:bg-white/12',
  ghost: 'border-transparent bg-transparent text-white/80 hover:bg-white/6 hover:text-white',
}

const sizeStyles = {
  sm: 'px-4 py-2 text-xs',
  md: 'px-5 py-3 text-sm',
  lg: 'px-6 py-3.5 text-sm md:text-base',
}

export const Button = forwardRef(function Button(
  { href, className, variant = 'primary', size = 'md', children, ...props },
  ref,
) {
  const Component = href ? motion.a : motion.button

  return (
    <Component
      ref={ref}
      href={href}
      className={cn(baseStyles, variantStyles[variant], sizeStyles[size], className)}
      whileHover={{ y: -2, scale: 1.01 }}
      whileTap={{ scale: 0.985 }}
      {...props}
    >
      {children}
    </Component>
  )
})