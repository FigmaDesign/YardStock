import { useRef, useState, type CSSProperties, type ElementType, type RefObject } from 'react'

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
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', display: 'block' }}
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
      style={{
        position: 'absolute',
        bottom: 0,
        left: '50%',
        transform: 'translateX(-50%)',
        width: 106,
        height: 64,
        zIndex: -1,
        pointerEvents: 'none',
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

  const inactiveBg = hovered ? 'rgba(30, 64, 138, 0.4)' : 'rgba(17, 42, 99, 0.5)'

  const style: CSSProperties = {
    width: 64,
    height: 52,
    flexShrink: 0,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 2,
    paddingLeft: isActive ? 4 : 8,
    paddingRight: 4,
    paddingBottom: 6,
    background: isActive ? 'transparent' : inactiveBg,
    borderRadius: isActive ? 0 : '16px 16px 0 0',
    border: 'none',
    outline: 'none',
    position: 'relative',
    cursor: 'pointer',
    WebkitTapHighlightColor: 'transparent',
    marginLeft: 0,
    zIndex: isActive ? 50 : 10,
    transition: '200ms cubic-bezier(0.4, 0, 0.2, 1)',
  }

  return (
    <button
      type="button"
      style={style}
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
        style={{
          color: isActive ? 'rgb(255, 255, 255)' : '#94a3b8',
          filter: isActive ? 'drop-shadow(rgba(255, 255, 255, 0.3) 0px 0px 2px)' : 'none',
          transition: 'color 200ms, transform 200ms',
          transform: isActive ? 'translateY(-2px)' : 'translateY(0)',
        }}
      />
      <span
        style={{
          fontSize: '0.55rem',
          fontWeight: isActive ? 700 : 500,
          color: isActive ? 'rgb(255, 255, 255)' : '#94a3b8',
          textAlign: 'center',
          lineHeight: 1.1,
          maxWidth: 64,
          transition: 'color 200ms, transform 200ms',
          transform: isActive ? 'translateY(-2px)' : 'translateY(0)',
        }}
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
        style={{
          boxSizing: 'border-box',
          position: 'relative',
          zIndex: 10,
          display: 'flex',
          height: '100%',
          overflowX: 'auto',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          paddingLeft: 12,
          paddingRight: 28,
          gap: 2, 
          alignItems: 'flex-end',
          borderBottom: '2px solid transparent', 
          borderImage: 'linear-gradient(to right, #10b981, #2563eb) 1', 
        }}
      >
        {tabs.map(({ key, label, Icon }, idx) => {
          return (
            <TabCard
              key={key}
              tabKey={key}
              label={label}
              Icon={Icon}
              isActive={key === active}
              idx={idx}
              onClick={onTabClick}
            />
          )
        })}
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