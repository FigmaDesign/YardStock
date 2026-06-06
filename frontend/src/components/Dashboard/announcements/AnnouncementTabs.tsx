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
      className="relative flex w-full items-stretch overflow-x-auto h-12.5 bg-white shadow-[0_2px_10px_rgba(0,0,0,0.05)] scrollbar-none [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden shrink-0"
    >
      {canScrollLeft && (
        <button
          type="button"
          aria-label="Scroll tabs left"
          onClick={() => {
            const nav = scrollContainerRef.current
            if (nav) nav.scrollBy({ left: -150, behavior: 'smooth' })
          }}
          className="sticky left-0 flex h-full items-center justify-center bg-linear-to-r from-white via-white to-transparent pr-6 pl-1 @md:hidden z-10 text-gray-400 hover:text-[#6B21A8]"
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
              'relative flex flex-col @md:flex-row items-center justify-center gap-1.5 @md:gap-2 px-2 pb-2 h-full flex-[1_0_auto] min-w-20',
              'cursor-pointer bg-transparent border-none transition-all duration-200',
              '[-webkit-tap-highlight-color:transparent] active:scale-[0.95] active:opacity-80',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7C3AED] focus-visible:ring-inset',
              'motion-reduce:transition-none motion-reduce:transform-none',
              idx !== 0 ? 'border-l border-solid border-gray-100' : '',
              !isActive ? 'hover:bg-[#7C3AED]/[0.03]' : '',
            ].join(' ')}
          >
            <Icon
              size={18}
              strokeWidth={1.5}
              aria-hidden="true"
              className={`transition-colors duration-200 motion-reduce:transition-none ${
                isActive ? 'text-[#7C3AED]' : 'text-gray-400'
              }`}
            />

            <span
              className={`text-center text-[0.55rem] @md:text-xs leading-[1.1] whitespace-normal wrap-break-word transition-all duration-200 motion-reduce:transition-none ${
                isActive ? 'font-bold text-[#6B21A8]' : 'font-medium text-gray-500'
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
                className="absolute bottom-0.75 left-1/2 h-0.75 w-3/4 -translate-x-1/2 rounded-lg bg-linear-to-r from-[#7C3AED] to-[#D946EF]"
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
          className="sticky right-0 flex h-full items-center justify-center bg-linear-to-l from-white via-white to-transparent pl-6 pr-1 @md:hidden z-10 text-gray-400 hover:text-[#6B21A8]"
        >
          <ChevronRight size={18} />
        </button>
      )}
    </nav>
  )
})

export default AnnouncementTabs