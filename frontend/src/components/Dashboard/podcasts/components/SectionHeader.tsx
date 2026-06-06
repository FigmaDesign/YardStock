import React from 'react'
import { ChevronRight } from 'lucide-react'

interface SectionHeaderProps {
  title: string
  onViewAll?: () => void
}

export default function SectionHeader({ title, onViewAll }: SectionHeaderProps) {
  return (
    <div className="flex items-center justify-between px-4 sm:px-6 py-4 sm:py-5">
      <h3 className="text-xl sm:text-2xl font-extrabold text-[#0f172a] tracking-tight drop-shadow-sm">
        {title}
      </h3>
      
      {onViewAll && (
        <button
          type="button"
          onClick={onViewAll}
          aria-label={`View all ${title}`}
          className="flex items-center gap-1 px-3 py-1.5 rounded-full text-xs sm:text-sm font-bold text-[#6B21A8] hover:text-[#5B21B6] hover:bg-[#7C3AED]/10 active:scale-95 transition-all duration-300 outline outline-1 outline-transparent hover:outline-[#7C3AED]/30 focus-visible:ring-2 focus-visible:ring-[#7C3AED] focus-visible:outline-none cursor-pointer group"
        >
          View all
          <ChevronRight 
            size={16} 
            strokeWidth={2.5} 
            className="group-hover:translate-x-1 transition-transform duration-300" 
            aria-hidden="true" 
          />
        </button>
      )}
    </div>
  )
}