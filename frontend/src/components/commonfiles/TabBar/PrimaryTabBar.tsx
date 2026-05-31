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
          <stop offset="0%" stopColor="#0B3285" />
          <stop offset="100%" stopColor="#031F6E" />
        </linearGradient>
      </defs>
      <path d="M0 128 L0 28 Q0 0 28 0 L1372 0 Q1400 0 1400 28 L1400 128 Z" fill="url(#primaryShellGrad)" />
    </svg>
  )
}

interface TabCardProps {
  tabKey: string
  label: string
  Icon: ElementType
  isActive: boolean
  showDivider: boolean
  onClick: (key: string, el: HTMLButtonElement) => void
}

function TabCard({ tabKey, label, Icon, isActive, showDivider, onClick }: TabCardProps) {
  const [hovered, setHovered] = useState(false)

  const bg = isActive
    ? 'linear-gradient(180deg, #34E27A 0%, #167DFF 100%)'
    : hovered
      ? '#0A3D9E'
      : '#03327F'

  const style: CSSProperties = {
    width: isActive ? 100 : 86,
    height: 80,
    flexShrink: 0,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
    paddingLeft: 6,
    paddingRight: 6,
    paddingBottom: 12,
    borderRadius: '16px 16px 4px 4px',
    border: 'none',
    outline: 'none',
    position: 'relative',
    cursor: 'pointer',
    WebkitTapHighlightColor: 'transparent',
    background: bg,
    borderLeft: showDivider ? '1px solid rgba(255,255,255,0.07)' : 'none',
    boxShadow: isActive ? '0 -4px 24px rgba(52,226,122,0.18)' : 'none',
    transition: 'all 220ms cubic-bezier(0.4, 0, 0.2, 1)',
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
      <Icon
        size={24}
        strokeWidth={1.5}
        style={{
          color: '#ffffff',
          filter: isActive ? 'drop-shadow(0 0 6px rgba(52,226,122,0.5))' : 'none',
        }}
      />
      <span
        style={{
          fontSize: '0.62rem',
          fontWeight: isActive ? 700 : 400,
          color: isActive ? '#ffffff' : 'rgba(255,255,255,0.88)',
          textAlign: 'center',
          lineHeight: 1.2,
          maxWidth: 80,
        }}
      >
        {label}
      </span>

      {isActive && (
        <div
          style={{
            position: 'absolute',
            bottom: 8,
            left: '50%',
            transform: 'translateX(-50%)',
            width: 36,
            height: 3,
            borderRadius: 999,
            background: 'linear-gradient(90deg, #34E27A, #4AA3FF)',
          }}
        />
      )}
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
    <div className="shrink-0 relative" style={{ height: 96 }}>
      <ShellBackground />
      <div
        ref={scrollRef}
        style={{
          position: 'relative',
          zIndex: 10,
          display: 'flex',
          height: '100%',
          overflowX: 'auto',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none' as CSSProperties['msOverflowStyle'],
          paddingLeft: 6,
          paddingRight: 6,
          gap: 0,
          alignItems: 'flex-end',
        }}
      >
        {tabs.map(({ key, label, Icon }, idx) => {
          const isActive = key === active
          const prevIsActive = idx > 0 && tabs[idx - 1].key === active
          return (
            <TabCard
              key={key}
              tabKey={key}
              label={label}
              Icon={Icon}
              isActive={isActive}
              showDivider={idx > 0 && !isActive && !prevIsActive}
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
