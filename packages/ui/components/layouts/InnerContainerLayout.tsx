import type { ReactNode } from 'react'
import clsx from 'clsx'

interface InnerContainerLayoutProps {
  children: ReactNode
  className?: string
}

export default function InnerContainerLayout({ children, className }: InnerContainerLayoutProps) {
  return (
    <div className={clsx(
      'max-w-[1024px] w-full mx-auto px-4',
      className
    )}>
      {children}
    </div>
  )
}
