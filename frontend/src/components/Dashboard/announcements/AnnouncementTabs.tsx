import { memo, type ElementType, useRef, useState, useEffect, useCallback } from 'react'
import { Layers, HardHat, Briefcase, Handshake, Bell, ChevronRight, ChevronLeft } from 'lucide-react'
import type { AnnouncementTab } from './data'
import { ANNOUNCEMENT_TABS } from './data'

const TAB_ICONS: Record<AnnouncementTab, ElementType> = {
  'All Posts':            Layers,
  'Builder Requirements': HardHat,
  'Job Posts':            Briefcase,
  'Vendor Requirements':  Handshake,
  'Updates':              Bell,
}

interface AnnouncementTabsProps {
  active: AnnouncementTab
  onChange: (tab: AnnouncementTab) => void
}

const AnnouncementTabs = memo(function AnnouncementTabs({ active, onChange }: AnnouncementTabsProps) {
  const scrollContainerRef = useRef<HTMLElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(false)

  const checkScroll = useCallback(() => {
    if (scrollContainerRef.current) {
      const { scrollWidth, clientWidth, scrollLeft } = scrollContainerRef.current
      setCanScrollLeft(Math.ceil(scrollLeft) > 1)
      setCanScrollRight(Math.ceil(scrollLeft + clientWidth) + 2 < scrollWidth)
    }
  }, [])

  useEffect(() => {
    checkScroll()
    
    const currentRef = scrollContainerRef.current
    if (!currentRef) return

    const resizeObserver = new ResizeObserver(() => checkScroll())
    resizeObserver.observe(currentRef)

    return () => resizeObserver.disconnect()
  }, [checkScroll])

  return (
    <nav
      ref={scrollContainerRef}
      onScroll={checkScroll}
      aria-label="Announcement categories"
      className="relative flex w-full items-stretch overflow-x-auto h-[52px] bg-[#ffffff] border-b border-[#cfcfdb] shadow-[0_2px_10px_rgba(31,22,51,0.02)] scrollbar-none [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden shrink-0 font-['Outfit',sans-serif]"
    >
      {canScrollLeft && (
        <button
          type="button"
          aria-label="Scroll tabs left"
          onClick={() => {
            const nav = scrollContainerRef.current
            if (nav) nav.scrollBy({ left: -150, behavior: 'smooth' })
          }}
          className="sticky left-0 flex h-full items-center justify-center bg-gradient-to-r from-[#ffffff] via-[#ffffff] to-transparent pr-6 pl-1 @md:hidden z-10 text-[#79628c] hover:text-[#422082] transition-colors"
        >
          <ChevronLeft size={18} />
        </button>
      )}

      {ANNOUNCEMENT_TABS.map((tab, idx) => {
        const Icon = TAB_ICONS[tab]
        const isActive = tab === active
        return (
          <button
            key={tab}
            type="button"
            aria-current={isActive ? 'page' : undefined}
            onClick={() => onChange(tab)}
            className={[
              'relative flex flex-col @md:flex-row items-center justify-center gap-1.5 @md:gap-2 px-3 pb-2 pt-1 h-full flex-[1_0_auto] min-w-[84px]',
              'cursor-pointer bg-transparent border-none transition-all duration-200',
              '[-webkit-tap-highlight-color:transparent] active:scale-[0.96]',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6a5fc1]/50 focus-visible:ring-inset',
              'motion-reduce:transition-none motion-reduce:transform-none',
              idx !== 0 ? 'border-l border-solid border-[#cfcfdb]/50' : '',
              !isActive ? 'hover:bg-[#f9fafb]' : '',
            ].join(' ')}
          >
            <Icon
              size={18}
              strokeWidth={isActive ? 2 : 1.5}
              aria-hidden="true"
              className={`transition-colors duration-200 motion-reduce:transition-none ${
                isActive ? 'text-[#6a5fc1]' : 'text-[#79628c]'
              }`}
            />

            <span
              className={`text-center text-[9px] @md:text-[11px] uppercase tracking-[0.2px] leading-[1.1] whitespace-normal wrap-break-word transition-all duration-200 motion-reduce:transition-none ${
                isActive ? 'font-bold text-[#1f1633]' : 'font-medium text-[#79628c]'
              }`}
            >
              {tab === 'Builder Requirements' || tab === 'Vendor Requirements' ? (
                <>
                  {tab.split(' ')[0]}
                  <br />
                  {tab.split(' ')[1]}
                </>
              ) : (
                tab
              )}
            </span>

            {isActive && (
              <div
                aria-hidden="true"
                className="absolute bottom-0 left-0 right-0 h-[3px] rounded-t-[4px] bg-gradient-to-r from-[#422082] via-[#6a5fc1] to-[#422082] shadow-[0_-2px_8px_rgba(106,95,193,0.4)] animate-[fadeScale_0.2s_ease-out]"
              />
            )}
          </button>
        )
      })}

      {canScrollRight && (
        <button
          type="button"
          aria-label="Scroll tabs right"
          onClick={() => {
            const nav = scrollContainerRef.current
            if (nav) nav.scrollBy({ left: 150, behavior: 'smooth' })
          }}
          className="sticky right-0 flex h-full items-center justify-center bg-gradient-to-l from-[#ffffff] via-[#ffffff] to-transparent pl-6 pr-1 @md:hidden z-10 text-[#79628c] hover:text-[#422082] transition-colors"
        >
          <ChevronRight size={18} />
        </button>
      )}
    </nav>
  )
})

export default AnnouncementTabs