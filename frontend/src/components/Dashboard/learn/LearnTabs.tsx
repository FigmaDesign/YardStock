import { memo, useRef, useState, useEffect } from 'react'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import TuneIcon from '@mui/icons-material/Tune'
import { LEARN_TABS } from './data'

interface LearnTabsProps {
  active: string
  onChange: (key: string) => void
}

const LearnTabs = memo(function LearnTabs({ active, onChange }: LearnTabsProps) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(false)

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current
      setCanScrollLeft(scrollLeft > 0)
      setCanScrollRight(Math.ceil(scrollLeft) < scrollWidth - clientWidth - 2)
    }
  }

  useEffect(() => {
    checkScroll()
    window.addEventListener('resize', checkScroll)
    return () => window.removeEventListener('resize', checkScroll)
  }, [])

  useEffect(() => {
    if (scrollRef.current) {
      const container = scrollRef.current
      const activeElement = container.querySelector('[data-active="true"]') as HTMLElement
      
      if (activeElement) {
        const scrollLeft = activeElement.offsetLeft - container.clientWidth / 2 + activeElement.clientWidth / 2
        container.scrollTo({ left: scrollLeft, behavior: 'smooth' })
      }
    }
  }, [active])

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 150
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      })
    }
  }

  return (
    <div className="relative flex items-center w-full group/container">
      {canScrollLeft && (
        <div className="absolute left-0 z-20 flex items-center h-full pl-1 pr-2 bg-linear-to-r from-[#F3F4F6] from-60% to-transparent pointer-events-none">
          <button
            type="button"
            onClick={() => scroll('left')}
            className="flex items-center justify-center w-6 h-6 bg-white rounded-full shadow-[0_2px_8px_rgba(0,0,0,0.15)] text-(--color-text-secondary) hover:text-(--color-brand-purple) hover:scale-110 active:scale-95 transition-all pointer-events-auto"
            aria-label="Scroll left"
          >
            <ChevronLeftIcon sx={{ fontSize: 18 }} />
          </button>
        </div>
      )}

      <div 
        ref={scrollRef}
        onScroll={checkScroll}
        className="flex items-center bg-white gap-1 px-2 py-2 overflow-x-auto w-full [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] scrollbar-none scroll-smooth relative z-10"
      >
        {LEARN_TABS.map((tab) => {
          const isActive = active === tab.key
          return (
            <button
              key={tab.key}
              type="button"
              data-active={isActive}
              onClick={() => onChange(tab.key)}
              className={`group shrink-0 flex items-center justify-center px-2 py-1 rounded-lg text-[11px] md:text-xs font-semibold transition-all duration-300 ease-out active:scale-95 border ${
                isActive
                  ? 'bg-(--color-brand-purple) text-white border-(--color-brand-purple) shadow-[0_4px_12px_rgba(107,33,168,0.35)] hover:shadow-[0_6px_16px_rgba(107,33,168,0.45)] hover:-translate-y-px'
                  : 'hover:shadow-sm hover:-translate-y-px'
              }`}
              style={!isActive && tab.color ? {
                backgroundColor: `${tab.color}15`,
                color: tab.color,
                borderColor: `${tab.color}40`,
              } : undefined}
            >
              <span>{tab.label}</span>
            </button>
          )
        })}

        <div className="w-px h-4 bg-[#E5E7EB] shrink-0 mx-0.5" aria-hidden="true" />

        <button
          type="button"
          className="group shrink-0 flex items-center gap-1 px-3 py-1.5 rounded-lg border border-(--color-border-default) bg-white text-(--color-text-primary) hover:bg-gray-50 transition-all duration-300 ease-out active:scale-95 hover:shadow-sm hover:-translate-y-px font-semibold text-[11px] md:text-xs"
          aria-label="Filter options"
        >
          <TuneIcon 
            sx={{ fontSize: 16 }} 
            className="text-(--color-brand-purple) transition-transform duration-300 ease-out group-hover:rotate-90" 
          />
          Filter
        </button>
      </div>

      {canScrollRight && (
        <div className="absolute right-0 z-20 flex items-center h-full pr-1 pl-4 bg-linear-to-l from-[#F3F4F6] from-60% to-transparent pointer-events-none">
          <button
            type="button"
            onClick={() => scroll('right')}
            className="flex items-center justify-center w-6 h-6 bg-white rounded-full shadow-[0_2px_8px_rgba(0,0,0,0.15)] text-(--color-text-secondary) hover:text-(--color-brand-purple) hover:scale-110 active:scale-95 transition-all pointer-events-auto"
            aria-label="Scroll right"
          >
            <ChevronRightIcon sx={{ fontSize: 18 }} />
          </button>
        </div>
      )}
    </div>
  )
})

export default LearnTabs;