import { useRef, type ElementType, type RefObject } from 'react'

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
  const { label, Icon } = item

  return (
    <button
      type="button"
      onClick={e => onClick(label, e.currentTarget)}
      className={`relative flex h-full min-w-[64px] flex-[1_0_auto] cursor-pointer flex-col items-center justify-center gap-[5px] border-none px-[6px] pb-2 transition-colors duration-200 [-webkit-tap-highlight-color:transparent] ${
        !isFirst ? 'border-l border-solid border-gray-100' : ''
      } ${!isActive ? 'hover:bg-[#0f1e3d]/[0.03]' : ''}`}
    >
      {Icon && (
        <Icon
          size={18}
          strokeWidth={1.5}
          color={isActive ? 'url(#active-icon-gradient)' : 'currentColor'}
          className={`transition-colors duration-200 ${
            !isActive ? 'text-gray-500' : ''
          }`}
        />
      )}
      
      <span
        className={`whitespace-nowrap text-center text-[0.55rem] leading-[1.1] transition-all duration-200 ${
          isActive 
            ? 'font-bold bg-gradient-to-r from-emerald-500 to-blue-500 bg-clip-text text-transparent' 
            : 'font-medium text-gray-500'
        }`}
      >
        {label}
      </span>

      {isActive && (
        <div className="absolute bottom-[3px] left-1/2 h-[3px] w-5 -translate-x-1/2 rounded-[8px] bg-gradient-to-r from-emerald-500 to-blue-500" />
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
    <div className=" shrink-0">
      <div
        ref={scrollRef}
        className="flex h-[50px] items-stretch overflow-x-auto bg-white shadow-[0_2px_10px_rgba(0,0,0,0.05)] [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
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

  return (
    <>
      <svg width="0" height="0" className="absolute">
        <defs>
          <linearGradient id="active-icon-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop stopColor="#10b981" offset="0%" />
            <stop stopColor="#3b82f6" offset="100%" />
          </linearGradient>
        </defs>
      </svg>

      <Inner 
        subTabs={subTabs} 
        active={active} 
        onItemClick={handleClick} 
        scrollRef={scrollRef} 
      />
    </>
  )
}