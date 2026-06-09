import { useState, useCallback, memo } from 'react'
import VerifiedIcon from '@mui/icons-material/Verified'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter'
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder'
import CloseIcon from '@mui/icons-material/Close'

import ActivityTabs from './ActivityTabs'
import { ACTIVITY_ITEMS, type ActivityItem } from './data'

interface ActivityCardProps {
  item: ActivityItem
}

const ActivityCard = memo(function ActivityCard({ item }: ActivityCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="relative mb-3 mx-2">
      <div 
        className="relative flex flex-col p-3 rounded-xl shadow-sm border border-[#E5E7EB] z-10 transition-colors min-h-[5rem]"
        style={{ backgroundColor: item.cardBg || '#FFFFFF' }}
      >
        <div className="absolute top-2.5 right-2 bottom-3 z-20 flex flex-col items-end justify-between pointer-events-none">
          <div className="relative flex flex-col items-end pointer-events-auto">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              onBlur={() => setTimeout(() => setIsMenuOpen(false), 200)}
              className="p-1 text-[var(--color-text-secondary)] hover:bg-black/5 rounded-full focus:outline-none transition-colors"
            >
              <MoreVertIcon sx={{ fontSize: 18 }} className="rotate-90" />
            </button>

            <div 
              className={`absolute right-0 top-full mt-1 w-36 bg-white rounded-lg shadow-lg border border-[#E5E7EB] py-1 flex flex-col z-50 overflow-hidden transition-all origin-top-right ${
                isMenuOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
              }`}
            >
              <button className="flex items-center gap-2 px-3 py-2 text-[11px] font-semibold text-[var(--color-text-primary)] hover:bg-gray-50 transition-colors w-full text-left">
                <BookmarkBorderIcon sx={{ fontSize: 14 }} className="text-[var(--color-brand-purple)]" />
                Save
              </button>
              <button className="flex items-center gap-2 px-3 py-2 text-[11px] font-semibold text-red-600 hover:bg-red-50 transition-colors w-full text-left">
                <CloseIcon sx={{ fontSize: 14 }} />
                Not Interested
              </button>
            </div>
          </div>

          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center gap-0.5 px-2 py-1 bg-white/50 hover:bg-white rounded border border-[var(--color-brand-magenta)]/20 text-[var(--color-brand-magenta)] font-bold text-[10px] transition-all active:scale-95 focus:outline-none shadow-sm pointer-events-auto"
          >
            {isExpanded ? 'Hide' : 'View'} 
            <KeyboardArrowDownIcon 
              sx={{ fontSize: 14 }} 
              className={`transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} 
            />
          </button>
        </div>

        <div className="flex items-start gap-2.5 w-full overflow-hidden pr-16">
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
              <span className="text-[12px] font-bold text-[var(--color-text-primary)] truncate">
                {item.company}
              </span>
              {item.verified && <VerifiedIcon sx={{ fontSize: 12 }} className="text-[#3B82F6] shrink-0" />}
            </div>
            
            <h3 className="text-[13px] font-extrabold text-[var(--color-text-primary)] mt-0.5 leading-snug truncate">
              {item.title}
            </h3>
            
            <div className="flex items-center w-full mt-3 gap-1.5 min-w-0">
              <span 
                className="px-1.5 py-0.5 rounded text-[9px] font-bold tracking-wide uppercase shrink-0"
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

      <div 
        className={`transition-all duration-300 ease-in-out overflow-hidden transform origin-top ${
          isExpanded ? 'max-h-48 opacity-100 scale-y-100' : 'max-h-0 opacity-0 scale-y-95'
        }`}
      >
        <div className="mx-2 p-3 pt-4 -mt-2 bg-white rounded-b-xl border border-t-0 border-[#E5E7EB] shadow-sm flex flex-col gap-2">
          <div className="flex items-start gap-2 text-[11px] text-[var(--color-text-secondary)]">
            <BusinessCenterIcon sx={{ fontSize: 14 }} className="text-[#6B21A8] shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold text-[var(--color-text-primary)] block mb-0.5">Role Overview</span>
              We are actively looking for candidates/agencies specializing in <strong className="text-gray-700">{item.tag}</strong> to fulfill the requirements for <strong className="text-gray-700">{item.title}</strong>. 
            </div>
          </div>
          
          <div className="pl-5 text-[10px] text-[var(--color-text-secondary)] border-l-2 border-[#F3F4F6] ml-1.5 mt-1">
            <ul className="list-disc pl-3 space-y-0.5">
              <li><strong>Budget/Compensation:</strong> {item.detail}</li>
              <li><strong>Company:</strong> {item.company} {item.verified ? '(Verified)' : ''}</li>
              <li>Must have relevant portfolio and experience.</li>
            </ul>
          </div>

          <button className="mt-2 w-full py-2 rounded-lg bg-[var(--color-brand-magenta)] text-white text-[11px] font-bold hover:bg-[var(--color-brand-magenta)]/90 transition-colors shadow-sm">
            Apply / Connect
          </button>
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