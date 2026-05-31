import { useRef, useState, type ElementType, type RefObject } from 'react'

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

function ShellBackground() {
  return (
    <svg
      viewBox="0 0 1400 128"
      preserveAspectRatio="none"
      aria-hidden
      className="absolute inset-0 w-full h-full block"
    >
      <defs>
        <linearGradient id="primaryShellGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#081e4f" />
          <stop offset="100%" stopColor="#020b24" />
        </linearGradient>
      </defs>
      <path d="M0 128 L0 16 Q0 0 16 0 L1384 0 Q1400 0 1400 16 L1400 128 Z" fill="url(#primaryShellGrad)" />
    </svg>
  )
}

function ActiveSwiggyCurve() {
  return (
    <svg
      viewBox="0 0 106 64"
      className="absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-none -z-10"
      style={{
        width: 106,
        height: 64,
        filter: 'drop-shadow(rgba(37, 99, 235, 0.25) 0px -2px 8px)',
      }}
    >
      <defs>
        <linearGradient id="activeTabGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#10b981" />
          <stop offset="100%" stopColor="#2563eb" />
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
}

interface TabCardProps {
  tabKey: string
  label: string
  Icon: ElementType
  isActive: boolean
  idx: number
  onClick: (key: string, el: HTMLButtonElement) => void
}

function TabCard({ tabKey, label, Icon, isActive, idx, onClick }: TabCardProps) {
  const [hovered, setHovered] = useState(false)

  return (
    <button
      type="button"
      className={[
        'relative flex flex-col items-center justify-center shrink-0 border-none outline-none cursor-pointer',
        'transition-all duration-200 ease-[cubic-bezier(0.4,0,0.2,1)]',
        '[WebkitTapHighlightColor:transparent]',
        isActive
          ? 'bg-transparent rounded-none z-50 pl-1 pr-1 pb-1.5'
          : 'rounded-t-2xl z-10 pl-2 pr-1',
      ].join(' ')}
      style={{
        width: 64,
        height: 66,
        gap: 2,
        background: isActive
          ? 'transparent'
          : hovered
          ? 'rgba(30, 64, 138, 0.4)'
          : 'rgba(17, 42, 99, 0.5)',
      }}
      onClick={e => onClick(tabKey, e.currentTarget)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onTouchStart={() => setHovered(true)}
      onTouchEnd={() => setHovered(false)}
      aria-current={isActive ? 'page' : undefined}
    >
      {isActive && <ActiveSwiggyCurve />}

      <Icon
        size={18}
        strokeWidth={1.5}
        className={[
          'transition-[color,transform] duration-200',
          isActive ? 'text-white -translate-y-0.5' : 'text-slate-400 translate-y-0',
        ].join(' ')}
        style={{
          filter: isActive ? 'drop-shadow(rgba(255, 255, 255, 0.3) 0px 0px 2px)' : 'none',
        }}
      />

      <span
        className={[
          'text-center leading-tight max-w-[64px] transition-[color,transform] duration-200',
          isActive
            ? 'font-bold text-white -translate-y-0.5'
            : 'font-medium text-slate-400 translate-y-0',
        ].join(' ')}
        style={{ fontSize: '0.55rem' }}
      >
        {label}
      </span>
    </button>
  )
}

interface InnerProps {
  tabs: PrimaryTabItem[]
  active: string
  onTabClick: (key: string, el: HTMLButtonElement) => void
  scrollRef: RefObject<HTMLDivElement | null>
}

function Inner({ tabs, active, onTabClick, scrollRef }: InnerProps) {
  return (
    <div className="shrink-0 relative" style={{ height: 66 }}>
      <ShellBackground />
      <div
        ref={scrollRef}
        className="box-border relative z-10 flex h-full overflow-x-auto items-end gap-0.5 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          borderBottom: '2px solid transparent',
          borderImage: 'linear-gradient(to right, #10b981, #2563eb) 1',
        }}
      >
        {tabs.map(({ key, label, Icon }, idx) => (
          <TabCard
            key={key}
            tabKey={key}
            label={label}
            Icon={Icon}
            isActive={key === active}
            idx={idx}
            onClick={onTabClick}
          />
        ))}
      </div>
    </div>
  )
}

export default function PrimaryTabBar({ tabs, active, onChange }: PrimaryTabBarProps) {
  const scrollRef = useRef<HTMLDivElement>(null)

  function handleClick(key: string, el: HTMLButtonElement) {
    onChange(key)
    el.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' })
  }

  return <Inner tabs={tabs} active={active} onTabClick={handleClick} scrollRef={scrollRef} />
}