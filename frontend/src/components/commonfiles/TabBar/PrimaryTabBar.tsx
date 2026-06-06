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
          <stop offset="0%" stopColor="#2a1550" />
          <stop offset="100%" stopColor="#1A1A2E" />
        </linearGradient>
      </defs>
      <path d="M0 128 L0 16 Q0 0 16 0 L1384 0 Q1400 0 1400 16 L1400 128 Z" fill="url(#primaryShellGrad)" />
    </svg>
  )
})

const ActiveSwiggyCurve = memo(function ActiveSwiggyCurve() {
  return (
    <svg
      viewBox="0 0 106 64"
      aria-hidden="true"
      className="absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-[106px] h-[64px] drop-shadow-[0_-2px_8px_rgba(124,58,237,0.25)]"
    >
      <defs>
        <linearGradient id="activeTabGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#7C3AED" />
          <stop offset="100%" stopColor="#D946EF" />
        </linearGradient>
      </defs>
      <path
        d="M 0 64 C 8 64 14 56 14 44 L 14 20 C 14 8 22 0 34 0 L 72 0 C 84 0 92 8 92 20 L 92 44 C 92 56 98 64 106 64"
        fill="url(#activeTabGrad)"
        stroke="url(#activeTabGrad)"
        strokeWidth="1.5"
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
      className={`relative flex flex-col items-center justify-center shrink-0 border-none outline-none cursor-pointer transition-all duration-200 ease-[cubic-bezier(0.4,0,0.2,1)] [-webkit-tap-highlight-color:transparent] active:scale-[0.94] active:opacity-80 w-[64px] min-h-[66px] gap-[2px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D946EF] focus-visible:ring-inset motion-reduce:transition-none motion-reduce:transform-none ${
        isActive
          ? 'bg-transparent hover:bg-transparent rounded-[8px] z-50 pl-1 pr-1 pb-1.5'
          : 'bg-[rgba(42,21,80,0.5)] hover:bg-[rgba(60,30,110,0.4)] rounded-t-[8px] z-10 pl-2 pr-1'
      }`}
    >
      {isActive && <ActiveSwiggyCurve />}

      <Icon
        size={18}
        strokeWidth={1.5}
        aria-hidden="true"
        className={`transition-all duration-200 motion-reduce:transition-none motion-reduce:transform-none ${
          isActive
            ? 'text-white -translate-y-0.5 drop-shadow-[0_0_2px_rgba(255,255,255,0.3)]'
            : 'text-slate-400 translate-y-0'
        }`}
      />

      <span
        className={`text-center leading-tight max-w-[64px] transition-all duration-200 text-[0.55rem] motion-reduce:transition-none motion-reduce:transform-none ${
          isActive
            ? 'font-bold text-white -translate-y-0.5'
            : 'font-medium text-slate-400 translate-y-0'
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
        className="box-border relative z-10 flex min-h-[72px] overflow-x-auto items-end gap-0.5 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] border-b-2 border-b-transparent"
        style={{
          borderImage: 'linear-gradient(to right, #7C3AED, #D946EF) 1',
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