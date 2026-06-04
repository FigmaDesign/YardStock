import React from 'react'
import { Search } from 'lucide-react'

interface PageHeaderProps {
  title: string
  subtitle: string
}

export default function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <div className="flex items-center justify-between px-4 sm:px-6 py-4 sm:py-6">
      <div className="min-w-0 pr-4 space-y-1">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-[#0f172a] tracking-tighter leading-tight drop-shadow-sm">
          {title}
        </h1>
        <p className="text-sm sm:text-base text-slate-500 font-medium truncate">
          {subtitle}
        </p>
      </div>
      
      <button
        type="button"
        aria-label="Search and filter"
        className="flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full bg-white hover:bg-slate-50 active:scale-95 transition-all duration-300 shadow-sm shadow-slate-200/50 hover:shadow-md shrink-0 outline outline-1 outline-slate-200 hover:outline-slate-300 focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:outline-none cursor-pointer group"
      >
        <Search 
          size={16} 
          strokeWidth={2.5} 
          className="text-slate-600 group-hover:text-[#0f172a] transition-colors" 
          aria-hidden="true" 
        />
        <span className="text-sm font-bold text-slate-600 group-hover:text-[#0f172a] transition-colors hidden sm:inline tracking-wide">
          Filter
        </span>
      </button>
    </div>
  )
}