import { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search'
import FilterListIcon from '@mui/icons-material/FilterList'
import VerifiedIcon from '@mui/icons-material/Verified'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import { BUILDERS } from './data'

export default function Directory() {
  const [searchQuery, setSearchQuery] = useState('')
  const [visibleCount, setVisibleCount] = useState(4)
  const [isLoading, setIsLoading] = useState(false)

  const featuredBuilders = BUILDERS.filter(b => b.isFeatured)
  const allRecentlyJoined = BUILDERS.filter(b => b.isRecentlyJoined)
  const recentlyJoined = allRecentlyJoined.slice(0, visibleCount)
  const hasMore = visibleCount < allRecentlyJoined.length

  const handleLoadMore = () => {
    setIsLoading(true)
    setTimeout(() => {
      setVisibleCount(prev => prev + 4)
      setIsLoading(false)
    }, 600)
  }

  return (
    <div className="flex-1 w-full h-full overflow-y-auto bg-white font-['Outfit',sans-serif] [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] scrollbar-none @container  outline-none">
      <div className="w-full pt-4 pb-24 @md:pb-12 bg-white">
        <section className="px-4 @md:px-8 max-w-5xl mx-auto">
          
          <div className="group relative mb-6 @md:mb-8 flex items-center rounded-xl border border-[#e5e7eb] bg-linear-to-b from-[#ffffff] to-[#f9fafb] hover:border-[#d1d5db] focus-within:border-[#6a5fc1]/60! focus-within:ring-2 focus-within:ring-[#6a5fc1]/10 transition-all duration-300 shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
            <div className="pl-3 pr-2 text-[#79628c] group-focus-within:text-[#6a5fc1] flex items-center shrink-0 transition-colors duration-300">
              <SearchIcon sx={{ fontSize: 20 }} />
            </div>
            <input
              type="text"
              placeholder="Search by name, company or skill"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 min-w-0 py-2.5 px-1 bg-transparent text-[0.8rem] @md:text-[0.85rem] focus:outline-none text-[#1f1633] placeholder-[#79628c]"
            />
            <div className="w-px h-6 bg-[#e5e7eb] mx-1" />
            <button className="flex items-center gap-1.5 px-3 py-2.5 hover:text-[#422082] text-[#79628c] text-[0.75rem] @md:text-[0.8rem] font-semibold transition-colors shrink-0 focus-visible:outline-none rounded-r-xl">
              <FilterListIcon sx={{ fontSize: 18 }} />
              <span className="hidden @sm:inline">Filter</span>
            </button>
          </div>

          <div className="mb-8 @md:mb-10">
            <div className="flex justify-between items-center mb-3 @md:mb-4">
              <h2 className="text-[0.9rem] @md:text-[1.1rem] font-extrabold text-[#1f1633]">Featured Builders</h2>
              <button className="flex items-center text-[0.7rem] @md:text-[0.75rem] font-bold text-[#6a5fc1] hover:text-[#422082] transition-colors focus-visible:outline-none rounded-sm">
                See all
                <ChevronRightIcon sx={{ fontSize: 16, ml: 0.25 }} />
              </button>
            </div>
            
            <div className="flex @md:grid @md:grid-cols-3 @lg:grid-cols-4 gap-3 @md:gap-4 overflow-x-auto @md:overflow-visible pb-2 @md:pb-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] scrollbar-none -mx-4 px-4 @md:mx-0 @md:px-0">
              {featuredBuilders.map((builder) => (
                <div 
                  key={builder.id} 
                  className="flex flex-col items-center p-3.5 border border-[#e5e7eb] rounded-xl min-w-36 w-36 @md:w-auto @md:min-w-0 shadow-[0_2px_8px_rgba(0,0,0,0.02)] bg-white hover:border-[#d1d5db] hover:shadow-[0_4px_12px_rgba(0,0,0,0.04)] transition-all duration-300 cursor-pointer group"
                >
                  <div 
                    className="w-14 h-14 @md:w-16 @md:h-16 rounded-[10px] flex items-center justify-center mb-3 shadow-sm border border-black/5 group-hover:scale-105 transition-transform duration-300 shrink-0"
                    style={{ backgroundColor: builder.logoBg }}
                  >
                    <span className="text-[11px] @md:text-[13px] font-bold tracking-wide" style={{ color: builder.logoColor }}>
                      {builder.logoText}
                    </span>
                  </div>
                  
                  <div className="w-full flex items-start justify-center gap-1 mb-1 px-1">
                    <h3 className="font-bold text-[#1f1633] text-[0.8rem] @md:text-[0.85rem] text-center leading-tight wrap-break-word">
                      {builder.name}
                    </h3>
                    {builder.verified && (
                      <VerifiedIcon sx={{ fontSize: 14 }} className="text-[#3B82F6] shrink-0 mt-0.5" />
                    )}
                  </div>
                  
                  <p className="text-[0.7rem] @md:text-[0.75rem] font-medium text-[#79628c] mb-2 text-center w-full truncate px-1">
                    {builder.category}
                  </p>
                  
                  <div className="flex items-center justify-center text-[#79628c] text-[0.65rem] @md:text-[0.7rem] font-medium">
                    <LocationOnOutlinedIcon sx={{ fontSize: 13 }} className="mr-0.5 shrink-0" />
                    <span className="truncate max-w-24 @md:max-w-32">{builder.location}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="flex justify-between items-center mb-3 @md:mb-4">
              <h2 className="text-[0.9rem] @md:text-[1.1rem] font-extrabold text-[#1f1633]">Recently Joined</h2>
              <button className="flex items-center text-[0.7rem] @md:text-[0.75rem] font-bold text-[#6a5fc1] hover:text-[#422082] transition-colors focus-visible:outline-none rounded-sm">
                See all
                <ChevronRightIcon sx={{ fontSize: 16, ml: 0.25 }} />
              </button>
            </div>
            
            <div className="flex flex-col @md:grid @md:grid-cols-2 gap-3 @md:gap-4">
              {recentlyJoined.map((builder) => (
                <div 
                  key={builder.id}
                  className="flex items-center p-3 border border-[#e5e7eb] rounded-xl shadow-[0_2px_8px_rgba(0,0,0,0.02)] bg-white hover:border-[#d1d5db] hover:shadow-[0_4px_12px_rgba(0,0,0,0.04)] transition-all duration-300 gap-3 cursor-pointer group"
                >
                  <div 
                    className="w-12 h-12 @md:w-14 @md:h-14 rounded-[10px] flex items-center justify-center shrink-0 shadow-sm border border-black/5 group-hover:scale-105 transition-transform duration-300"
                    style={{ backgroundColor: builder.logoBg }}
                  >
                    <span className="text-[11px] @md:text-[12px] font-bold" style={{ color: builder.logoColor }}>
                      {builder.logoText}
                    </span>
                  </div>
                  
                  <div className="flex-1 min-w-0 pr-2 flex flex-col justify-center">
                    <div className="flex items-start gap-1 mb-0.5">
                      <h3 className="font-bold text-[#1f1633] text-[0.8rem] @md:text-[0.85rem] leading-tight wrap-break-word">
                        {builder.name}
                      </h3>
                      {builder.verified && (
                        <VerifiedIcon sx={{ fontSize: 14 }} className="text-[#3B82F6] shrink-0 mt-0.5" />
                      )}
                    </div>
                    <p className="text-[0.7rem] @md:text-[0.75rem] font-medium text-[#79628c] mb-1 truncate">
                      {builder.category}
                    </p>
                    <div className="flex items-center text-[#79628c] text-[0.65rem] @md:text-[0.7rem] font-medium truncate">
                      <LocationOnOutlinedIcon sx={{ fontSize: 12 }} className="mr-0.5 shrink-0" />
                      <span className="truncate">{builder.location}</span>
                    </div>
                  </div>
                  
                  <button className="shrink-0 px-4 py-2 bg-linear-to-r from-[#ec4899] to-[#db2777] hover:from-[#db2777] hover:to-[#ec4899] text-white rounded-md text-[0.7rem] @md:text-[0.75rem] font-bold transition-all duration-300 active:scale-[0.97] shadow-[0_2px_8px_rgba(236,72,153,0.2)] hover:shadow-[0_4px_12px_rgba(219,39,119,0.3)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ec4899]/50">
                    Connect
                  </button>
                </div>
              ))}
            </div>

            {hasMore && (
              <div className="mt-5 @md:mt-8 flex justify-center">
                <button
                  onClick={handleLoadMore}
                  disabled={isLoading}
                  className="flex items-center justify-center gap-2 px-6 py-2.5 min-w-35 text-[0.75rem] @md:text-[0.8rem] font-bold text-[#1f1633] bg-white border border-[#e5e7eb] rounded-xl hover:border-[#d1d5db] hover:bg-[#f9fafb] transition-all duration-300 active:scale-[0.97] disabled:opacity-60 disabled:cursor-not-allowed shadow-[0_2px_8px_rgba(0,0,0,0.02)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6a5fc1]/50"
                >
                  {isLoading ? (
                    <>
                      <svg className="animate-spin h-4 w-4 text-[#6a5fc1]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Loading...
                    </>
                  ) : (
                    'Load More'
                  )}
                </button>
              </div>
            )}
          </div>
          
        </section>
      </div>
    </div>
  )
}