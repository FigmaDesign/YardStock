import { memo } from 'react'
import { Search } from 'lucide-react'

interface PageHeaderProps {
  title: string
  subtitle: string
}

export default memo(function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <div className="flex items-start justify-between px-4 sm:px-5 pt-5 sm:pt-6 pb-3 sm:pb-4">
      <div className="min-w-0">
        <h1 className="text-[1.5rem] sm:text-[1.75rem] font-extrabold text-[#0f172a] tracking-tight leading-tight">
          {title}
        </h1>
        <p className="text-[0.75rem] sm:text-[0.82rem] text-slate-500 mt-1 font-medium">
          {subtitle}
        </p>
      </div>
      <button
        type="button"
        aria-label="Search and filter"
        className="flex items-center gap-2 px-3.5 py-2 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 hover:border-slate-300 active:scale-95 transition-all duration-200 shadow-sm shrink-0 ml-3"
      >
        <Search size={16} strokeWidth={2} className="text-slate-500" aria-hidden="true" />
        <span className="text-[0.78rem] font-semibold text-slate-600 hidden sm:inline">Filter</span>
      </button>
    </div>
  )
})
