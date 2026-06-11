import { useState, useCallback, useRef, memo } from 'react'
import VerifiedIcon from '@mui/icons-material/Verified'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter'
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder'
import BookmarkIcon from '@mui/icons-material/Bookmark'
import CloseIcon from '@mui/icons-material/Close'

import ActivityTabs from './ActivityTabs'
import { ACTIVITY_ITEMS, type ActivityItem } from './data'

interface ActivityCardProps {
  item: ActivityItem
}

const ActivityCard = memo(function ActivityCard({ item }: ActivityCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  const [isSaved, setIsSaved] = useState(false)
  
  const [swipeOffset, setSwipeOffset] = useState(0)
  const [isSwiping, setIsSwiping] = useState(false)
  const [tooltipPos, setTooltipPos] = useState<'top' | 'bottom'>('top')
  
  const startX = useRef(0)
  const initialOffset = useRef(0)
  const maxSwipe = 80
  const saveBtnRef = useRef<HTMLDivElement>(null)

  const handleTouchStart = (e: React.TouchEvent) => {
    if (isExpanded) setIsExpanded(false)
    startX.current = e.touches[0].clientX
    initialOffset.current = swipeOffset
    setIsSwiping(true)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    const diff = e.touches[0].clientX - startX.current
    let nextOffset = initialOffset.current + diff
    
    if (nextOffset > 0) nextOffset = 0
    if (nextOffset < -maxSwipe) nextOffset = -maxSwipe
    
    setSwipeOffset(nextOffset)
  }

  const handleTouchEnd = () => {
    setIsSwiping(false)
    setSwipeOffset((prev) => (prev < -maxSwipe / 2 ? -maxSwipe : 0))
  }

  const toggleSave = (e: React.MouseEvent) => {
    e.stopPropagation()
    setIsSaved(!isSaved)
  }

  const handleTooltipPosition = () => {
    if (saveBtnRef.current) {
      const rect = saveBtnRef.current.getBoundingClientRect()
      if (rect.top < 50) {
        setTooltipPos('bottom')
      } else {
        setTooltipPos('top')
      }
    }
  }

  return (
    <div className="relative mb-3 mx-2">
      <div className="relative z-10 rounded-xl overflow-hidden shadow-sm">
        <div className="absolute inset-y-0 right-0 w-[80px] bg-red-500 flex flex-col items-center justify-center text-white md:hidden z-0">
          <button 
            type="button"
            className="flex flex-col items-center justify-center w-full h-full active:bg-red-600 transition-colors border-none outline-none cursor-pointer bg-transparent"
            onClick={() => console.log('Not Interested in', item.id)}
          >
            <CloseIcon sx={{ fontSize: 24 }} />
            <span className="text-[10px] font-semibold mt-1 px-2 text-center leading-tight">
              Not<br />Interested
            </span>
          </button>
        </div>

        <div 
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          style={{ 
            transform: `translateX(${swipeOffset}px)`,
            transitionDuration: isSwiping ? '0ms' : '200ms',
            backgroundColor: item.cardBg || '#FFFFFF'
          }}
          className="relative flex flex-col p-3 border border-[#E5E7EB] rounded-xl z-10 transition-colors min-h-[5rem] ease-out"
        >
          <div className="absolute top-2.5 right-2 bottom-3 z-20 flex flex-col items-end justify-between pointer-events-none">
            
            <div className="flex items-center pointer-events-auto">
              <div 
                ref={saveBtnRef}
                onMouseEnter={handleTooltipPosition}
                onTouchStart={handleTooltipPosition}
                className="relative group/save flex items-center justify-center"
              >
                <button 
                  onClick={toggleSave}
                  className={`flex items-center justify-center p-1.5 rounded-full focus:outline-none transition-all duration-300 active:scale-90 shadow-sm border ${
                    isSaved 
                      ? 'bg-[var(--color-brand-purple)]/10 text-[var(--color-brand-purple)] border-[var(--color-brand-purple)]/20 shadow-[0_2px_8px_rgba(107,33,168,0.15)]' 
                      : 'bg-white/80 text-[var(--color-text-secondary)] border-[#E5E7EB] hover:text-[var(--color-brand-purple)] hover:border-[var(--color-brand-purple)]/30 backdrop-blur-sm hover:bg-white'
                  }`}
                  aria-label={isSaved ? "Saved" : "Save"}
                >
                  {isSaved ? <BookmarkIcon sx={{ fontSize: 16 }} /> : <BookmarkBorderIcon sx={{ fontSize: 16 }} />}
                </button>
                
                <span 
                  className={`absolute right-0 px-2.5 py-1.5 bg-gray-900 text-white text-[10px] font-semibold rounded shadow-md opacity-0 group-hover/save:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-[100] ${
                    tooltipPos === 'top' ? 'bottom-full mb-2' : 'top-full mt-2'
                  }`}
                >
                  {isSaved ? 'Saved to List' : 'Save for Later'}
                  <div 
                    className={`absolute right-2.5 w-2 h-2 bg-gray-900 rotate-45 ${
                      tooltipPos === 'top' ? 'bottom-[-4px]' : 'top-[-4px]'
                    }`}
                  />
                </span>
              </div>
            </div>

            <button 
              onClick={(e) => { e.stopPropagation(); setIsExpanded(!isExpanded); }}
              className="flex items-center gap-0.5 px-2 py-1 bg-white hover:bg-gray-50 rounded border border-[var(--color-brand-magenta)]/20 text-[var(--color-brand-magenta)] font-bold text-[10px] transition-all active:scale-95 focus:outline-none shadow-sm pointer-events-auto"
            >
              {isExpanded ? 'Hide' : 'View'} 
              <KeyboardArrowDownIcon 
                sx={{ fontSize: 14 }} 
                className={`transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} 
              />
            </button>
          </div>

          <div className="flex items-start gap-2.5 w-full overflow-hidden pr-12">
            {item.logoImg ? (
              <img 
                src={item.logoImg} 
                alt={item.company} 
                className="w-10 h-10 rounded-full object-cover shadow-sm shrink-0 mt-0.5" 
              />
            ) : (
              <div 
                className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 shadow-sm mt-0.5"
                style={{ backgroundColor: item.logoBg, color: item.logoColor }}
              >
                <span 
                  className="text-center font-bold text-[9px] leading-tight whitespace-pre-wrap tracking-wide" 
                  style={{ color: item.logoColor }}
                >
                  {item.logoText}
                </span>
              </div>
            )}
            
            <div className="flex flex-col min-w-0 w-full">
              <div className="flex items-center gap-1">
                <span className="text-[12px] text-[var(--color-text-primary)] truncate">
                  {item.company}
                </span>
                {item.verified && <VerifiedIcon sx={{ fontSize: 12 }} className="text-[#3B82F6] shrink-0" />}
              </div>
              
              <h3 className="text-[13px] font-extrabold text-[var(--color-text-primary)] mt-0.5 leading-snug truncate">
                {item.title}
              </h3>
              
              <div className="flex items-center w-full mt-3 gap-1.5 min-w-0">
                <span 
                  className="px-1.5 py-0.5 rounded text-[9px] font-bold tracking-wide uppercase shrink-0 shadow-sm"
                  style={{ backgroundColor: item.tagBg, color: item.tagColor }}
                >
                  {item.tag}
                </span>
                <span className="text-[10px] font-medium text-[var(--color-text-secondary)] truncate">
                  {item.detail}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div 
        className={`transition-all duration-300 ease-in-out overflow-hidden transform origin-top ${
          isExpanded ? 'max-h-56 opacity-100 scale-y-100' : 'max-h-0 opacity-0 scale-y-95'
        }`}
      >
        <div className="mx-2 p-2.5 pt-4 -mt-2 bg-gradient-to-b from-white to-gray-50 rounded-b-xl border border-t-0 border-[#E5E7EB] shadow-sm flex flex-col relative z-0">
          <div className="flex items-start gap-2 text-[10px] text-[var(--color-text-secondary)] leading-relaxed">
            <BusinessCenterIcon sx={{ fontSize: 14 }} className="text-[#6B21A8] shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold text-[var(--color-text-primary)] block mb-0.5">Role Overview</span>
              We are actively looking for candidates/agencies specializing in <strong className="text-gray-700">{item.tag}</strong> to fulfill the requirements for <strong className="text-gray-700">{item.title}</strong>. 
            </div>
          </div>
          
          <div className="pl-4 text-[10px] text-[var(--color-text-secondary)] border-l-2 border-[#E5E7EB] ml-1.5 mt-2">
            <ul className="list-disc pl-3 space-y-0.5 marker:text-gray-400">
              <li><strong>Budget:</strong> {item.detail}</li>
              <li><strong>Company:</strong> {item.company} {item.verified ? '(Verified)' : ''}</li>
              <li>Portfolio and relevant experience required.</li>
            </ul>
          </div>

          <div className="mt-3 flex justify-end">
            <button className="px-4 py-1.5 rounded-md bg-[var(--color-brand-magenta)] text-white text-[10px] font-bold hover:bg-[var(--color-brand-magenta)]/90 transition-all shadow-sm active:scale-95 border border-transparent hover:border-black/10">
              Apply / Connect
            </button>
          </div>
        </div>
      </div>
    </div>
  )
})

export default function ActivityBoard() {
  const [activeFilter, setActiveFilter] = useState('all')

  const handleFilterChange = useCallback((key: string) => {
    setActiveFilter(key)
  }, [])

  return (
    <div className="flex-1 w-full h-full overflow-y-auto bg-[#F3F4F6] [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
      <div className="sticky top-0 z-30 bg-[#F3F4F6]/95 backdrop-blur-md">
        <ActivityTabs active={activeFilter} onChange={handleFilterChange} />
      </div>
      <div className="w-full pt-1 pb-8">
        {ACTIVITY_ITEMS.map((item) => (
          <ActivityCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  )
}