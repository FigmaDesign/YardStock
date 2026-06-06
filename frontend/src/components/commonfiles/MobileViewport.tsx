import { type ReactNode } from 'react'

interface MobileViewportProps {
  children: ReactNode
  isMobile?: boolean
}

export default function MobileViewport({ children, isMobile = false }: MobileViewportProps) {
  if (isMobile) {
    return (
      <div 
        role="main"
        aria-label="Mobile Viewport"
        className="flex flex-col h-full w-full overflow-hidden bg-[var(--ys-ink)] @container" 
      >
        {children}
      </div>
    )
  }

  return (
    <div
      role="region"
      aria-label="Desktop Preview Environment"
      className="flex items-center justify-center h-full overflow-auto box-border bg-[var(--ys-canvas-soft)] p-[clamp(12px,3vh,28px)]"
    >
      <div
        role="region"
        aria-label="Mobile Device Simulator"
        className="relative shrink-0 overflow-hidden bg-[var(--ys-canvas)] my-0.5 rounded-[8px] border-[1.5px] border-[var(--ys-mute)] shadow-[0_4px_24px_rgba(0,0,0,0.08),0_1px_4px_rgba(0,0,0,0.04)] aspect-9/19.5 h-[min(92vh,900px)]"
      >
        <div className="h-full w-full overflow-hidden @container">
          {children}
        </div>
      </div>
    </div>
  )
}