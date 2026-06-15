import { useRef, useCallback, memo } from 'react'

export interface PrimaryTabItem {
  key: string
  label: string
  Icon: string
  badge?: string
}

export interface PrimaryTabBarProps {
  tabs: PrimaryTabItem[]
  active: string
  onChange: (key: string) => void
}

interface TabCardProps extends Omit<PrimaryTabItem, 'key'> {
  tabKey: string
  isActive: boolean
  onClick: (key: string, el: HTMLButtonElement) => void
}

const TabCard = memo(({ tabKey, label, Icon, badge, isActive, onClick }: TabCardProps) => (
  <button
    type="button"
    role="tab"
    aria-selected={isActive}
    id={`tab-${tabKey}`}
    aria-controls={`panel-${tabKey}`}
    onClick={(e) => onClick(tabKey, e.currentTarget)}
    className={`relative shrink-0 flex flex-col items-center justify-center gap-0.5 transition-all duration-300 outline-none cursor-pointer w-18 h-18 px-1 py-1 rounded-[18px] ${
      isActive
        ? 'bg-linear-to-b from-[#FAF7FF] to-[#F2EAFF] shadow-[0_4px_16px_rgba(124,58,237,0.18)] border border-[#C4B5FD] -py-2'
        : 'bg-transparent border border-gray-200'
    }`}
  >
    {badge && (
      <span className="absolute -top-1 left-1/2 -translate-x-1/2 whitespace-nowrap text-[9px] font-semibold px-1.5 py-0.5 rounded-full bg-[#7C3AED] text-white leading-none z-10">
        {badge}
      </span>
    )}

    <span className={`flex items-center justify-center transition-all duration-300 ${isActive ? 'h-8 w-8 text-[22px]' : 'h-7 w-7 text-[20px]'}`}>
      {Icon.includes('/') || Icon.includes('.png') ? (
        <img src={Icon} alt={`${label} icon`} className="w-full h-full object-contain" />
      ) : (
        <span>{Icon}</span>
      )}
    </span>
    
    <span
      title={label}
      className={`w-full px-0.5 text-[10px] leading-[1.2] text-center line-clamp-2 wrap-break-word transition-all duration-300 ${
        isActive ? 'font-semibold text-[#7C3AED]' : 'font-medium text-[#374151]'
      }`}
    >
      {label}
    </span>

    {isActive && (
      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-1 bg-[#7C3AED] rounded-t-md" />
    )}
  </button>
))

TabCard.displayName = 'TabCard'

export const PrimaryTabBar = memo(function PrimaryTabBar({ tabs, active, onChange }: PrimaryTabBarProps) {
  const scrollRef = useRef<HTMLDivElement>(null)

  const handleClick = useCallback((key: string, el: HTMLButtonElement) => {
    onChange(key)
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    el.scrollIntoView({
      behavior: prefersReducedMotion ? 'auto' : 'smooth',
      block: 'nearest',
      inline: 'center',
    })
  }, [onChange])

  return (
    <div className="relative bg-white">
      <div
        ref={scrollRef}
        role="tablist"
        aria-orientation="horizontal"
        className="relative z-10 flex items-center gap-1.5 overflow-x-auto px-2 py-2 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] scrollbar-none"
      >
        {tabs.map(({ key, label, Icon, badge }) => (
          <TabCard
            key={key}
            tabKey={key}
            label={label}
            Icon={Icon}
            badge={badge}
            isActive={key === active}
            onClick={handleClick}
          />
        ))}
      </div>
    </div>
  )
})

export default PrimaryTabBar