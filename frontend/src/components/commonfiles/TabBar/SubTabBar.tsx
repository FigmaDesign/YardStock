import { useRef, useState, type CSSProperties, type ElementType, type RefObject } from 'react'

export interface SubTabItem {
  label: string
  Icon?: ElementType
}

interface SubTabBarProps {
  subTabs: SubTabItem[]
  active: string
  onChange: (label: string) => void
}

interface ItemProps {
  item: SubTabItem
  isActive: boolean
  isFirst: boolean
  onClick: (label: string, el: HTMLButtonElement) => void
}

function SubTabItem({ item, isActive, isFirst, onClick }: ItemProps) {
  const [hovered, setHovered] = useState(false)
  const { label, Icon } = item

  return (
    <button
      type="button"
      onClick={e => onClick(label, e.currentTarget)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onTouchStart={() => setHovered(true)}
      onTouchEnd={() => setHovered(false)}
      style={{
        flex: '1 0 auto',
        minWidth: 68,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 4,
        padding: '0 8px 10px',
        border: 'none',
        background: hovered && !isActive ? 'rgba(10,50,160,0.04)' : 'transparent',
        borderLeft: !isFirst ? '1px solid rgba(20,40,100,0.08)' : 'none',
        position: 'relative',
        cursor: 'pointer',
        WebkitTapHighlightColor: 'transparent',
        transition: 'background 200ms',
      } as CSSProperties}
    >
      {Icon && (
        <Icon
          size={20}
          strokeWidth={1.75}
          style={{
            color: isActive ? '#0A459F' : '#1A2B55',
            transition: 'color 200ms',
          }}
        />
      )}
      <span
        style={{
          fontSize: '0.62rem',
          fontWeight: isActive ? 700 : 400,
          color: isActive ? '#0A459F' : '#1A2B55',
          textAlign: 'center',
          lineHeight: 1.2,
          whiteSpace: 'nowrap',
          transition: 'color 200ms',
        }}
      >
        {label}
      </span>

      {isActive && (
        <div
          style={{
            position: 'absolute',
            bottom: 6,
            left: '50%',
            transform: 'translateX(-50%)',
            width: 32,
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
  subTabs: SubTabItem[]
  active: string
  onItemClick: (label: string, el: HTMLButtonElement) => void
  scrollRef: RefObject<HTMLDivElement | null>
}

function Inner({ subTabs, active, onItemClick, scrollRef }: InnerProps) {
  if (subTabs.length === 0) return null

  return (
    <div style={{ padding: '0 10px', marginTop: 8, paddingBottom: 6, flexShrink: 0 }}>
      <div
        ref={scrollRef}
        style={{
          display: 'flex',
          overflowX: 'auto',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none' as CSSProperties['msOverflowStyle'],
          background: '#ffffff',
          borderRadius: 14,
          boxShadow: '0 4px 14px rgba(0,0,0,0.07)',
          height: 72,
          alignItems: 'stretch',
        }}
      >
        {subTabs.map((item, idx) => (
          <SubTabItem
            key={item.label}
            item={item}
            isActive={item.label === active}
            isFirst={idx === 0}
            onClick={onItemClick}
          />
        ))}
      </div>
    </div>
  )
}

export default function SubTabBar({ subTabs, active, onChange }: SubTabBarProps) {
  const scrollRef = useRef<HTMLDivElement>(null)

  function handleClick(label: string, el: HTMLButtonElement) {
    onChange(label)
    el.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' })
  }

  return <Inner subTabs={subTabs} active={active} onItemClick={handleClick} scrollRef={scrollRef} />
}
