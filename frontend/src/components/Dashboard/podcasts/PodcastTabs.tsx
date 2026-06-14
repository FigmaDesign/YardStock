import { memo, useRef, useState, useEffect } from 'react'
import TuneIcon from '@mui/icons-material/Tune'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import { FILTER_TABS } from './data'

interface PodcastTabsProps {
  active: string
  onChange: (key: string) => void
}

interface TabType {
  key: string
  label: string
  color?: string
}

const TabButton = memo(function TabButton({ 
  tab, 
  isActive, 
  onClick 
}: { 
  tab: TabType
  isActive: boolean
  onClick: (key: string) => void 
}) {
  return (
    <button
      type="button"
      aria-pressed={isActive}
      data-active={isActive}
      onClick={() => onClick(tab.key)}
      className={`group shrink-0 flex items-center justify-center px-2 py-1 rounded-lg text-[11px] md:text-xs font-semibold transition-all duration-300 ease-out active:scale-95 border outline-none ${
        isActive
          ? 'bg-(--color-brand-purple) text-white border-(--color-brand-purple) shadow-[0_4px_12px_rgba(107,33,168,0.35)] hover:shadow-[0_6px_16px_rgba(107,33,168,0.45)] hover:-translate-y-px'
          : 'bg-white text-(--color-text-secondary) border-(--color-border-default) hover:shadow-sm hover:-translate-y-px'
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
})

const PodcastTabs = memo(function PodcastTabs({ active, onChange }: PodcastTabsProps) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current
      setCanScrollLeft(scrollLeft > 0)
      setCanScrollRight(Math.ceil(scrollLeft + clientWidth) < scrollWidth - 1)
    }
  }

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

  useEffect(() => {
    handleScroll()
    window.addEventListener('resize', handleScroll)
    return () => window.removeEventListener('resize', handleScroll)
  }, [])

  const scrollByAmount = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 150
      scrollRef.current.scrollBy({ 
        left: direction === 'left' ? -scrollAmount : scrollAmount, 
        behavior: 'smooth' 
      })
    }
  }

  return (
    <div className="relative flex items-center w-full group/container bg-white">
      {canScrollLeft && (
        <div className="absolute left-0 z-20 flex items-center h-full pl-1 pr-2 bg-linear-to-r from-[#F3F4F6] from-60% to-transparent pointer-events-none transition-opacity duration-300">
          <button
            type="button"
            onClick={() => scrollByAmount('left')}
            className="flex items-center justify-center w-6 h-6 bg-white rounded-full shadow-[0_2px_8px_rgba(0,0,0,0.15)] text-(--color-text-secondary) hover:text-(--color-brand-purple) hover:scale-110 active:scale-95 transition-all pointer-events-auto cursor-pointer outline-none"
            aria-label="Scroll left"
          >
            <ChevronLeftIcon sx={{ fontSize: 18 }} />
          </button>
        </div>
      )}

      <div 
        ref={scrollRef}
        onScroll={handleScroll}
        className="flex items-center gap-1 px-2 py-2 overflow-x-auto w-full scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] scrollbar-width:none relative z-10"
      >
        <div 
          role="group" 
          aria-label="Podcast category filters" 
          className="flex items-center gap-1 shrink-0"
        >
          {FILTER_TABS.map((tab) => (
            <TabButton 
              key={tab.key} 
              tab={tab} 
              isActive={active === tab.key} 
              onClick={onChange} 
            />
          ))}
        </div>

        <div className="w-px h-4 bg-[#E5E7EB] shrink-0 mx-0.5" aria-hidden="true" />

        <button
          type="button"
          className="group shrink-0 flex items-center gap-1 px-3 py-1.5 rounded-lg border border-(--color-border-default) bg-white text-(--color-text-primary) hover:bg-gray-50 transition-all duration-300 ease-out active:scale-95 hover:shadow-sm hover:-translate-y-px font-semibold text-[11px] md:text-xs outline-none cursor-pointer"
          aria-label="Filter options"
        >
          <TuneIcon 
            sx={{ fontSize: 16 }} 
            className="text-(--color-brand-purple) transition-transform duration-300 ease-out group-hover:rotate-90" 
            aria-hidden="true"
          />
          Filter
        </button>
      </div>

      {canScrollRight && (
        <div className="absolute right-0 z-20 flex items-center h-full pr-1 pl-4 bg-linear-to-l from-[#F3F4F6] from-60% to-transparent pointer-events-none transition-opacity duration-300">
          <button
            type="button"
            onClick={() => scrollByAmount('right')}
            className="flex items-center justify-center w-6 h-6 bg-white rounded-full shadow-[0_2px_8px_rgba(0,0,0,0.15)] text-(--color-text-secondary) hover:text-(--color-brand-purple) hover:scale-110 active:scale-95 transition-all pointer-events-auto cursor-pointer outline-none"
            aria-label="Scroll right"
          >
            <ChevronRightIcon sx={{ fontSize: 18 }} />
          </button>
        </div>
      )}
    </div>
  )
})

export default PodcastTabs;