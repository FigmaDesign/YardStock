import { useState, useCallback, memo } from 'react'
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder'
import CloseIcon from '@mui/icons-material/Close'
import VerifiedIcon from '@mui/icons-material/Verified'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'

import ActivityTabs from './ActivityTabs'
import { ACTIVITY_ITEMS, type ActivityItem } from './data'

interface ActivityCardProps {
  item: ActivityItem
}

const ActivityCard = memo(function ActivityCard({ item }: ActivityCardProps) {
  return (
    <div 
      className="flex flex-col @md:flex-row items-start @md:items-center justify-between p-4 mb-3 rounded-2xl mx-4 transition-all duration-200 shadow-[0_2px_10px_rgba(0,0,0,0.02)] border border-transparent hover:border-[#cfcfdb]"
      style={{ backgroundColor: item.cardBg || '#FFFFFF' }}
    >
      <div className="flex items-center gap-4 w-full @md:w-auto">
        {item.logoImg ? (
          <img src={item.logoImg} alt={item.company} className="w-14 h-14 rounded-full object-cover shadow-sm shrink-0" />
        ) : (
          <div 
            className="w-14 h-14 rounded-full flex items-center justify-center shrink-0 shadow-sm"
            style={{ backgroundColor: item.logoBg, color: item.logoColor }}
          >
            <span className="text-center font-bold text-[10px] leading-tight whitespace-pre-wrap tracking-wide" style={{ color: item.logoColor }}>
              {item.logoText}
            </span>
          </div>
        )}
        <div className="flex flex-col">
          <div className="flex items-center gap-1">
            <span className="text-[13px] font-bold text-[var(--color-text-primary)]">{item.company}</span>
            {item.verified && <VerifiedIcon sx={{ fontSize: 14 }} className="text-[#3B82F6]" />}
          </div>
          <h3 className="text-[15px] font-extrabold text-[var(--color-text-primary)] mt-0.5">{item.title}</h3>
          <div className="flex items-center gap-3 mt-2">
            <span 
              className="px-2.5 py-0.5 rounded text-[11px] font-bold tracking-wide"
              style={{ backgroundColor: item.tagBg, color: item.tagColor }}
            >
              {item.tag}
            </span>
            <span className="text-[13px] font-medium text-[var(--color-text-secondary)]">{item.detail}</span>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-end w-full @md:w-auto gap-4 shrink-0 mt-4 @md:mt-0 pt-4 @md:pt-0 border-t @md:border-t-0 @md:border-l border-[var(--color-border-default)] @md:pl-4">
        <button className="flex flex-col items-center gap-1 text-[var(--color-text-primary)] hover:text-[var(--color-brand-purple)] transition-colors">
          <BookmarkBorderIcon sx={{ fontSize: 20 }} />
          <span className="text-[10px] font-semibold">Save</span>
        </button>
        <button className="flex flex-col items-center gap-1 text-[var(--color-text-primary)] hover:text-red-500 transition-colors">
          <div className="w-5 h-5 rounded-full border border-current flex items-center justify-center">
            <CloseIcon sx={{ fontSize: 14 }} />
          </div>
          <span className="text-[10px] font-semibold whitespace-nowrap">Not Interested</span>
        </button>
        <button className="flex items-center gap-1 px-3 py-1.5 rounded-full text-[var(--color-brand-magenta)] font-bold text-[13px] transition-colors hover:bg-[var(--color-brand-magenta)]/10 ml-2">
          View <KeyboardArrowDownIcon sx={{ fontSize: 16 }} />
        </button>
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
    <div className="flex-1 w-full h-full overflow-y-auto scroll-smooth bg-white [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
      <div className="sticky top-0 z-20 bg-white/95 backdrop-blur-md">
        <ActivityTabs active={activeFilter} onChange={handleFilterChange} />
      </div>
      <div className="max-w-4xl mx-auto w-full pt-2 pb-6">
        {ACTIVITY_ITEMS.map((item) => (
          <ActivityCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  )
}
