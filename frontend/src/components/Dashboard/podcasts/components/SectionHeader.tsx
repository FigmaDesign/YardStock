import { ChevronRight } from 'lucide-react'

interface SectionHeaderProps {
  title: string
  onViewAll?: () => void
}

export default function SectionHeader({ title, onViewAll }: SectionHeaderProps) {
  return (
    <div className="flex items-center justify-between px-4 sm:px-6 py-4 sm:py-5 font-['Outfit',sans-serif]">
      <h3 className="text-[18px] sm:text-[22px] font-bold text-[#1f1633] tracking-tight drop-shadow-sm">
        {title}
      </h3>
      
      {onViewAll && (
        <button
          type="button"
          onClick={onViewAll}
          aria-label={`View all ${title}`}
          className="group flex items-center gap-1 px-3 py-1.5 rounded-[6px] text-[12px] sm:text-[13px] font-bold uppercase tracking-[0.2px] text-[#6a5fc1] hover:text-[#422082] hover:bg-[#6a5fc1]/10 active:scale-95 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6a5fc1]/50 cursor-pointer"
        >
          View all
          <ChevronRight 
            size={16} 
            strokeWidth={2.5} 
            className="group-hover:translate-x-1 transition-transform duration-200" 
            aria-hidden="true" 
          />
        </button>
      )}
    </div>
  )
}