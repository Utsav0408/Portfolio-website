import { cn } from '../../utils/classNames.js'

export function GlassCard({ className, children, ...props }) {
  return (
    <div className={cn('glass-surface rounded-[1.75rem]', className)} {...props}>
      {children}
    </div>
  )
}