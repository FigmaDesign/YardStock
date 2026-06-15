import { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search'
import FilterListIcon from '@mui/icons-material/FilterList'
import VerifiedIcon from '@mui/icons-material/Verified'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import { BUILDERS } from './data'

export default function Directory() {
  const [searchQuery, setSearchQuery] = useState('')

  const featuredBuilders = BUILDERS.filter(b => b.isFeatured)
  const recentlyJoined = BUILDERS.filter(b => b.isRecentlyJoined)

  return (
    <div className="flex-1 w-full h-full overflow-y-auto bg-white [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] scrollbar-none">
      <div className="w-full pb-1">
        <section className="px-2 md:px-2 max-w-4xl mx-auto">
          <div className="mb-4 mx-2">
          </div>

          <div className="relative mb-6 mx-2 flex items-center border border-(--color-border-default) rounded-xl overflow-hidden focus-within:border-(--color-brand-magenta)/30 transition-colors shadow-sm bg-white">
            <div className="pl-3 pr-2 text-(--color-text-secondary)">
              <SearchIcon sx={{ fontSize: 20 }} />
            </div>
            <input
              type="text"
              placeholder="Search by name, company or skill"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 py-3 px-2 bg-transparent text-[12px] focus:outline-none text-(--color-text-primary) placeholder-(--color-text-secondary)"
            />
            <button className="flex items-center gap-1.5 px-3 py-3 hover:bg-gray-50 border-l border-(--color-border-default) text-[12px] font-medium text-(--color-text-primary) transition-colors">
              <FilterListIcon sx={{ fontSize: 18 }} />
              Filter
            </button>
          </div>

          <div className="mb-8 mx-2">
            <div className="flex justify-between items-center mb-3">
              <h2 className="text-[14px] font-bold text-(--color-text-primary)">Featured Builders</h2>
              <button className="flex items-center text-[10px] font-bold text-(--color-brand-purple) hover:text-(--color-brand-purple-mid) transition-colors">
                See all
                <ChevronRightIcon sx={{ fontSize: 14, ml: 0.5 }} />
              </button>
            </div>
            <div className="flex gap-3 overflow-x-auto pb-2 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] scrollbar-none">
              {featuredBuilders.map((builder) => (
                <div 
                  key={builder.id} 
                  className="flex flex-col items-center p-3 border border-(--color-border-default) rounded-xl min-w-35 w-35 shadow-sm bg-white hover:border-(--color-brand-magenta)/20 transition-all"
                >
                  <div 
                    className="w-14 h-14 rounded-full flex items-center justify-center mb-3 shadow-sm"
                    style={{ backgroundColor: builder.logoBg }}
                  >
                    <span className="text-[10px] font-bold tracking-wide" style={{ color: builder.logoColor }}>
                      {builder.logoText}
                    </span>
                  </div>
                  <div className="w-full px-1 flex items-center justify-center gap-1 mb-1">
                    <h3 className="font-semibold text-(--color-text-primary) text-[12px] text-center truncate">
                      {builder.name}
                    </h3>
                    {builder.verified && (
                      <VerifiedIcon sx={{ fontSize: 14 }} className="text-[#3B82F6] shrink-0" />
                    )}
                  </div>
                  <p className="text-[9px] text-(--color-text-secondary) mb-2 text-center w-full truncate px-1">
                    {builder.category}
                  </p>
                  <div className="flex items-center text-(--color-text-secondary) text-[10px] mb-1">
                    <LocationOnOutlinedIcon sx={{ fontSize: 12 }} className="mr-0.5" />
                    <span className="truncate max-w-25">{builder.location}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mx-2">
            <div className="flex justify-between items-center mb-3">
              <h2 className="text-[14px] font-bold text-(--color-text-primary)">Recently Joined</h2>
              <button className="flex items-center text-[10px] font-bold text-(--color-brand-purple) hover:text-(--color-brand-purple-mid) transition-colors">
                See all
                <ChevronRightIcon sx={{ fontSize: 14, ml: 0.5 }} />
              </button>
            </div>
            <div className="flex flex-col gap-3">
              {recentlyJoined.map((builder) => (
                <div 
                  key={builder.id}
                  className="flex items-center p-2.5 border border-(--color-border-default) rounded-xl shadow-sm bg-white hover:border-(--color-brand-magenta)/20 transition-all gap-2.5"
                >
                  <div 
                    className="w-12 h-12 rounded-full flex items-center justify-center shrink-0 shadow-sm"
                    style={{ backgroundColor: builder.logoBg }}
                  >
                    <span className="text-[11px] font-bold" style={{ color: builder.logoColor }}>
                      {builder.logoText}
                    </span>
                  </div>
                  <div className="flex-1 min-w-0 pr-2">
                    <div className="flex items-center gap-1 mb-0.5">
                      <h3 className="font-semibold text-(--color-text-primary) text-[12px] truncate">
                        {builder.name}
                      </h3>
                      {builder.verified && (
                        <VerifiedIcon sx={{ fontSize: 14 }} className="text-[#3B82F6] shrink-0" />
                      )}
                    </div>
                    <p className="text-[9px] text-(--color-text-secondary) mb-1 truncate">
                      {builder.category}
                    </p>
                    <div className="flex items-center text-(--color-text-secondary) text-[10px] truncate">
                      <LocationOnOutlinedIcon sx={{ fontSize: 12 }} className="mr-0.5 shrink-0" />
                      <span className="truncate">{builder.location}</span>
                    </div>
                  </div>
                  <button className="shrink-0 px-3 py-1.5 bg-white border border-(--color-brand-magenta)/30 text-(--color-brand-magenta) hover:bg-(--color-brand-magenta) hover:text-white rounded-md text-[10px] font-bold transition-all active:scale-95 shadow-sm">
                    Connect
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}