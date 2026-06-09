import { useRef, useCallback, memo, type ElementType, type RefObject } from 'react'

export interface PrimaryTabItem {
  key: string
  label: string
  Icon: ElementType
}

interface PrimaryTabBarProps {
  tabs: PrimaryTabItem[]
  active: string
  onChange: (key: string) => void
}

const ShellBackground = memo(function ShellBackground() {
  return (
    <svg
      viewBox="0 0 1400 128"
      preserveAspectRatio="none"
      aria-hidden="true"
      className="absolute inset-0 w-full h-full block pointer-events-none"
    >
      <defs>
        <linearGradient id="primaryShellGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1A1A2E" stopOpacity="0.95" />
          <stop offset="50%" stopColor="#16213E" stopOpacity="0.98" />
          <stop offset="100%" stopColor="#16213E" stopOpacity="1" />
        </linearGradient>
      </defs>
      <path d="M0 128 L0 16 Q0 0 16 0 L1384 0 Q1400 0 1400 16 L1400 128 Z" fill="url(#primaryShellGrad)" />
    </svg>
  )
})

const ActiveCurve = memo(function ActiveCurve() {
  return (
    <svg
      viewBox="0 0 106 64"
      aria-hidden="true"
      className="absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-[106px] h-[64px] drop-shadow-[0_-3px_10px_rgba(124,58,237,0.35)]"
    >
      <defs>
        <linearGradient id="activeTabGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#6B21A8" />
          <stop offset="50%" stopColor="#7C3AED" />
          <stop offset="100%" stopColor="#6B21A8" />
        </linearGradient>
        <linearGradient id="activeTabStroke" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#7C3AED" stopOpacity="0.4" />
          <stop offset="50%" stopColor="#22C55E" stopOpacity="0.75" />
          <stop offset="100%" stopColor="#7C3AED" stopOpacity="0.4" />
        </linearGradient>
      </defs>
      <path
        d="M 0 64 C 8 64 14 56 14 44 L 14 20 C 14 8 22 0 34 0 L 72 0 C 84 0 92 8 92 20 L 92 44 C 92 56 98 64 106 64"
        fill="url(#activeTabGrad)"
        stroke="url(#activeTabStroke)"
        strokeWidth="1.25"
      />
    </svg>
  )
})

interface TabCardProps {
  tabKey: string
  label: string
  Icon: ElementType
  isActive: boolean
  onClick: (key: string, el: HTMLButtonElement) => void
}

const TabCard = memo(function TabCard({ tabKey, label, Icon, isActive, onClick }: TabCardProps) {
  return (
    <button
      type="button"
      role="tab"
      aria-selected={isActive ? 'true' : 'false'}
      id={`tab-${tabKey}`}
      aria-controls={`panel-${tabKey}`}
      onClick={(e) => onClick(tabKey, e.currentTarget)}
      className={`relative flex flex-col items-center justify-center shrink-0 outline-none cursor-pointer transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] [-webkit-tap-highlight-color:transparent] active:scale-[0.94] active:opacity-80 w-[64px] min-h-[66px] gap-[4px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D946EF]/60 focus-visible:ring-inset motion-reduce:transition-none motion-reduce:transform-none ${
        isActive
          ? 'bg-transparent hover:bg-transparent rounded-[8px] z-50 px-1 pb-1.5 border-none'
          : 'bg-gradient-to-b from-[#1A1A2E]/80 to-[#16213E]/40 hover:from-[#6B21A8]/25 hover:to-[#1A1A2E]/60 rounded-t-[10px] z-10 px-1.5 border-t border-x border-[#E5E7EB]/5 hover:border-[#E5E7EB]/15 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]'
      }`}
    >
      {isActive && <ActiveCurve />}

      <div className={`relative transition-transform duration-300 motion-reduce:transform-none ${isActive ? '-translate-y-1' : 'translate-y-0'}`}>
        {isActive && (
          <div aria-hidden="true" className="absolute inset-0 bg-[#22C55E] blur-[10px] opacity-35 rounded-full" />
        )}
        <Icon
          size={22}
          strokeWidth={isActive ? 2 : 1.5}
          aria-hidden="true"
          className={`relative transition-colors duration-300 motion-reduce:transition-none ${
            isActive
              ? 'text-white drop-shadow-[0_2px_5px_rgba(0,0,0,0.4)]'
              : 'text-[#E5E7EB]/50 group-hover:text-[#E5E7EB]/90'
          }`}
        />
      </div>

      <span
        className={`text-center leading-tight max-w-[64px] transition-all duration-300 text-[0.6rem] tracking-wide motion-reduce:transition-none motion-reduce:transform-none ${
          isActive
            ? 'font-semibold text-transparent bg-clip-text bg-gradient-to-b from-white to-[#E5E7EB] -translate-y-0.5 drop-shadow-sm'
            : 'font-medium text-[#E5E7EB]/50 translate-y-0'
        }`}
      >
        {label}
      </span>
    </button>
  )
})

interface InnerProps {
  tabs: PrimaryTabItem[]
  active: string
  onTabClick: (key: string, el: HTMLButtonElement) => void
  scrollRef: RefObject<HTMLDivElement | null>
}

const Inner = memo(function Inner({ tabs, active, onTabClick, scrollRef }: InnerProps) {
  return (
    <div className="shrink-0 relative min-h-[72px]">
      <ShellBackground />
      <div
        ref={scrollRef}
        role="tablist"
        aria-orientation="horizontal"
        className="box-border relative z-10 flex min-h-[72px] overflow-x-auto items-end gap-[3px] px-1 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] border-b-[2px] border-b-transparent"
        style={{
          borderImage: 'linear-gradient(to right, transparent, rgba(124,58,237,0.4), rgba(217,70,239,0.7), rgba(124,58,237,0.4), transparent) 1',
        }}
      >
        {tabs.map(({ key, label, Icon }) => (
          <TabCard
            key={key}
            tabKey={key}
            label={label}
            Icon={Icon}
            isActive={key === active}
            onClick={onTabClick}
          />
        ))}
      </div>
    </div>
  )
})

export default function PrimaryTabBar({ tabs, active, onChange }: PrimaryTabBarProps) {
  const scrollRef = useRef<HTMLDivElement>(null)

  const handleClick = useCallback(
    (key: string, el: HTMLButtonElement) => {
      onChange(key)
      
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      el.scrollIntoView({ 
        behavior: prefersReducedMotion ? 'auto' : 'smooth', 
        block: 'nearest', 
        inline: 'center' 
      })
    },
    [onChange]
  )

  return (
    <Inner 
      tabs={tabs} 
      active={active} 
      onTabClick={handleClick} 
      scrollRef={scrollRef} 
    />
  )
}