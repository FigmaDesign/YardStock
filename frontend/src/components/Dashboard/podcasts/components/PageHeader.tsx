import { Search } from 'lucide-react'

interface PageHeaderProps {
  title: string
  subtitle: string
}

export default function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <div className="flex items-center justify-between px-4 sm:px-6 py-4 sm:py-6 font-['Outfit',sans-serif]">
      <div className="min-w-0 pr-4 space-y-1">
        <h1 className="text-[24px] sm:text-[30px] font-bold text-[#1f1633] tracking-tight leading-tight drop-shadow-sm">
          {title}
        </h1>
        <p className="text-[13px] sm:text-[15px] text-[#79628c] font-medium truncate">
          {subtitle}
        </p>
      </div>
      
      <button
        type="button"
        aria-label="Search and filter"
        className="group flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-[8px] bg-[#ffffff] border border-[#cfcfdb] hover:border-[#79628c] hover:bg-[#f9fafb] hover:shadow-[0_4px_12px_rgba(31,22,51,0.05)] active:scale-95 transition-all duration-200 shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6a5fc1]/50 cursor-pointer"
      >
        <Search 
          size={16} 
          strokeWidth={2.5} 
          className="text-[#79628c] group-hover:text-[#6a5fc1] transition-colors" 
          aria-hidden="true" 
        />
        <span className="text-[12px] font-bold text-[#1f1633] group-hover:text-[#6a5fc1] transition-colors hidden sm:inline uppercase tracking-[0.2px]">
          Filter
        </span>
      </button>
    </div>
  )
}