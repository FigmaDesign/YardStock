import { useRef, useCallback, memo, type ElementType, type RefObject } from 'react'

export interface SubTabItem {
  label: string
  Icon?: ElementType
}

interface SubTabBarProps {
  subTabs: SubTabItem[]
  active: string
  onChange: (label: string) => void
  variant?: 'mobile' | 'desktop'
}

interface ItemProps {
  item: SubTabItem
  isActive: boolean
  isFirst: boolean
  onClick: (label: string, el: HTMLButtonElement) => void
  variant?: 'mobile' | 'desktop'
}

const SubTabItemComponent = memo(function SubTabItemComponent({ item, isActive, isFirst, onClick, variant = 'mobile' }: ItemProps) {
  const { label, Icon } = item
  const isDesktop = variant === 'desktop'

  return (
    <button
      type="button"
      role="tab"
      aria-selected={isActive ? 'true' : 'false'}
      id={`subtab-${label.toLowerCase().replace(/\s+/g, '-')}`}
      aria-controls={`subpanel-${label.toLowerCase().replace(/\s+/g, '-')}`}
      onClick={(e) => onClick(label, e.currentTarget)}
      className={`relative flex cursor-pointer bg-transparent border-none transition-all duration-200 [-webkit-tap-highlight-color:transparent] active:scale-[0.95] active:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#10b981] focus-visible:ring-inset motion-reduce:transition-none motion-reduce:transform-none ${
        isDesktop
          ? 'h-full min-w-[120px] flex-row items-center px-4 py-3 gap-2'
          : 'h-full min-w-[64px] flex-[1_0_auto] flex-col items-center justify-center gap-[5px] pb-2'
      } ${!isFirst ? 'border-l border-solid border-gray-100' : ''} ${
        !isActive ? 'hover:bg-[#0f1e3d]/[0.03]' : ''
      }`}
    >
      {Icon && (
        <Icon
          size={18}
          strokeWidth={1.5}
          aria-hidden="true"
          className={`transition-colors duration-200 motion-reduce:transition-none ${
            isActive ? 'text-emerald-500' : 'text-gray-400'
          } ${isDesktop ? 'inline-block' : ''}`}
        />
      )}
      
      <span
        className={`whitespace-nowrap transition-all duration-200 motion-reduce:transition-none ${
          isDesktop 
            ? 'text-[1.1rem] leading-[1.1] font-semibold' 
            : 'text-center text-[0.55rem] leading-[1.1]'
        } ${
          isActive 
            ? 'text-[#0a2a6e] font-bold' 
            : 'font-medium text-gray-500'
        }`}
      >
        {label}
      </span>

      {isActive && (
        <div 
          aria-hidden="true"
          className="absolute bottom-[3px] left-1/2 h-[3px] w-5 -translate-x-1/2 rounded-[8px] bg-gradient-to-r from-emerald-500 to-blue-500" 
        />
      )}
    </button>
  )
})

interface InnerProps {
  subTabs: SubTabItem[]
  active: string
  onItemClick: (label: string, el: HTMLButtonElement) => void
  scrollRef: RefObject<HTMLDivElement | null>
  variant?: 'mobile' | 'desktop'
}

const Inner = memo(function Inner({ subTabs, active, onItemClick, scrollRef, variant = 'mobile' }: InnerProps) {
  if (!subTabs?.length) return null

  return (
    <div className="w-full shrink-0 overflow-hidden">
      <div
        ref={scrollRef}
        role="tablist"
        aria-orientation="horizontal"
        className={`flex w-full items-stretch overflow-x-auto bg-white shadow-[0_2px_10px_rgba(0,0,0,0.05)] [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden ${
          variant === 'desktop' ? 'h-[60px]' : 'h-[50px]'
        }`}
      >
        {subTabs.map((item, idx) => (
          <SubTabItemComponent
            key={item.label}
            item={item}
            isActive={item.label === active}
            isFirst={idx === 0}
            onClick={onItemClick}
            variant={variant}
          />
        ))}
      </div>
    </div>
  )
})

export default function SubTabBar({ subTabs, active, onChange, variant = 'mobile' }: SubTabBarProps) {
  const scrollRef = useRef<HTMLDivElement>(null)

  const handleClick = useCallback(
    (label: string, el: HTMLButtonElement) => {
      onChange(label)
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
      subTabs={subTabs} 
      active={active} 
      onItemClick={handleClick} 
      scrollRef={scrollRef}
      variant={variant}
    />
  )
}