import { useState, useMemo, useRef, useEffect } from 'react'
import { ChevronLeft, ChevronRight, ChevronDown, Loader2 } from 'lucide-react'
import AnnouncementTabs from './AnnouncementTabs'
import PostCard from './PostCard'
import { POSTS, TAB_POST_TYPE_MAP, type AnnouncementTab } from './data'

const PAGE_SIZE_OPTIONS = [5, 10, 20] as const

export default function Announcements() {
  const [activeTab, setActiveTab] = useState<AnnouncementTab>('All Posts')
  const [page, setPage] = useState(1)
  const [pageSize, setPageSize] = useState<5 | 10 | 20>(10)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [mobileVisibleCount, setMobileVisibleCount] = useState(3)
  const [isLoadingMore, setIsLoadingMore] = useState(false)
  
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const filtered = useMemo(() => {
    const typeFilter = TAB_POST_TYPE_MAP[activeTab]
    if (typeFilter === null) return POSTS
    return POSTS.filter((p) => p.type === typeFilter)
  }, [activeTab])

  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize))
  const safePage = Math.min(page, totalPages)
  const desktopStartIndex = (safePage - 1) * pageSize
  const desktopEndIndex = safePage * pageSize

  const maxNeededItems = Math.max(desktopEndIndex, mobileVisibleCount)
  const displayPosts = filtered.slice(0, maxNeededItems)

  function handleTabChange(tab: AnnouncementTab) {
    setActiveTab(tab)
    setPage(1)
    setMobileVisibleCount(3)
    setIsLoadingMore(false)
  }

  function handlePageSizeChange(size: 5 | 10 | 20) {
    setPageSize(size)
    setPage(1)
    setIsDropdownOpen(false)
  }

  function handleLoadMore() {
    setIsLoadingMore(true)
    setTimeout(() => {
      setMobileVisibleCount((c) => c + 3)
      setIsLoadingMore(false)
    }, 800)
  }

  const pageNumbers = buildPageNumbers(safePage, totalPages)

  return (
    <div className="flex flex-col h-full overflow-hidden">
      <AnnouncementTabs active={activeTab} onChange={handleTabChange} />

      <div className="flex-1 overflow-y-auto bg-slate-50/30 @md:bg-white scrollbar-none [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden p-1 @md:p-0">
        {displayPosts.length === 0 ? (
          <div className="flex items-center justify-center h-40 text-[0.82rem] text-slate-400 font-medium">
            No posts found in this category.
          </div>
        ) : (
          <div className="flex flex-col">
            {displayPosts.map((post, index) => {
              const isVisibleMobile = index < mobileVisibleCount
              const isVisibleDesktop = index >= desktopStartIndex && index < desktopEndIndex

              let visibilityClass = ''
              if (isVisibleMobile && isVisibleDesktop) {
                visibilityClass = ''
              } else if (isVisibleMobile && !isVisibleDesktop) {
                visibilityClass = '@md:hidden'
              } else if (!isVisibleMobile && isVisibleDesktop) {
                visibilityClass = 'hidden @md:block'
              } else {
                visibilityClass = 'hidden'
              }

              return (
                <div key={post.id} className={visibilityClass}>
                  <PostCard post={post} />
                </div>
              )
            })}

            {isLoadingMore && (
              <div className="@md:hidden flex flex-col gap-3 pt-2">
                {Array.from({ length: Math.min(3, filtered.length - mobileVisibleCount) }).map((_, i) => (
                  <div key={`skeleton-${i}`} className="flex p-4 gap-4 bg-white/80 rounded-2xl border border-slate-100/60 shadow-[0_2px_12px_rgba(0,0,0,0.02)] animate-pulse">
                    <div className="w-12 h-12 rounded-xl bg-slate-200/80 shrink-0"></div>
                    <div className="flex-1 space-y-3 py-1.5">
                      <div className="h-3.5 bg-slate-200/80 rounded-md w-2/3"></div>
                      <div className="space-y-2">
                        <div className="h-2.5 bg-slate-200/80 rounded-md w-full"></div>
                        <div className="h-2.5 bg-slate-200/80 rounded-md w-4/5"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
        
        {mobileVisibleCount < filtered.length && (
          <div className="flex @md:hidden items-center justify-center pt-3 pb-4 relative z-10">
            <button
              type="button"
              onClick={handleLoadMore}
              disabled={isLoadingMore}
              aria-label="Load more posts"
              className="group flex items-center justify-center gap-2.5 px-6 py-3 rounded-lg text-white font-bold text-[0.85rem] bg-linear-to-r from-[#7C3AED] to-[#D946EF] shadow-[0_4px_16px_rgba(124,58,237,0.3)] hover:shadow-[0_6px_20px_rgba(217,70,239,0.4)] hover:opacity-90 active:scale-[0.97] disabled:opacity-80 disabled:active:scale-100 disabled:cursor-wait transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#7C3AED]/40"
            >
              {isLoadingMore ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" strokeWidth={3} aria-hidden="true" />
                  <span>Loading...</span>
                </>
              ) : (
                <>
                  <span>Load More</span>
                  <ChevronDown 
                    className="w-4 h-4 group-hover:translate-y-0.5 transition-transform duration-300" 
                    strokeWidth={3} 
                    aria-hidden="true" 
                  />
                </>
              )}
            </button>
          </div>
        )}
      </div>

      <footer className="hidden @md:flex shrink-0 items-center justify-between px-6 py-4 border-t border-slate-100 bg-white gap-4 flex-wrap shadow-[0_-4px_20px_rgba(0,0,0,0.02)] z-10">
        <div className="flex items-center gap-3 text-[0.75rem] font-medium text-slate-500">
          <span>Show</span>
          
          <div className="relative" ref={dropdownRef}>
            <button
              type="button"
              id="page-size-menu-button"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              aria-haspopup="listbox"
              aria-expanded={isDropdownOpen ? 'true' : 'false'}
              aria-controls="page-size-listbox"
              className="flex items-center justify-between w-16 px-3 py-1.5 border border-slate-200 rounded-lg text-slate-700 bg-slate-50 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-[#7C3AED]/20 focus:border-[#7C3AED] transition-all font-semibold"
            >
              {pageSize}
              <ChevronRight 
                size={12} 
                aria-hidden="true"
                className={`text-slate-400 transition-transform duration-200 ${isDropdownOpen ? '-rotate-90' : 'rotate-90'}`} 
              />
            </button>

            {isDropdownOpen && (
              <div 
                id="page-size-listbox"
                role="listbox"
                aria-labelledby="page-size-menu-button"
                className="absolute bottom-full mb-2 left-0 w-full bg-white border border-slate-100 rounded-lg shadow-lg overflow-hidden z-20 py-1"
              >
                {PAGE_SIZE_OPTIONS.map((n) => (
                  <button
                    type="button"
                    key={n}
                    role="option"
                    aria-selected={pageSize === n ? 'true' : 'false'}
                    onClick={() => handlePageSizeChange(n)}
                    className={`w-full text-left px-3 py-1.5 text-[0.75rem] font-semibold transition-colors ${
                      pageSize === n
                        ? 'bg-[#7C3AED]/10 text-[#6B21A8]'
                        : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                    }`}
                  >
                    {n}
                  </button>
                ))}
              </div>
            )}
          </div>
          
          <span>per page</span>
        </div>

        <nav aria-label="Pagination" className="flex items-center gap-1 p-1 bg-slate-50/80 border border-slate-200/80 rounded-xl">
          <button
            type="button"
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={safePage === 1}
            aria-label="Previous page"
            className="w-8 h-8 flex items-center justify-center rounded-lg text-slate-500 hover:text-slate-800 hover:bg-white hover:shadow-sm disabled:opacity-40 disabled:hover:bg-transparent disabled:hover:shadow-none disabled:cursor-not-allowed transition-all"
          >
            <ChevronLeft size={16} strokeWidth={2.5} aria-hidden="true" />
          </button>

          {pageNumbers.map((item, i) =>
            item === '...' ? (
              <span key={`ellipsis-${i}`} aria-hidden="true" className="w-5 text-center text-[0.8rem] font-bold text-slate-400 tracking-widest">…</span>
            ) : (
              <button
                type="button"
                key={item}
                onClick={() => setPage(item as number)}
                aria-label={`Page ${item}`}
                aria-current={item === safePage ? 'page' : undefined}
                className={[
                  'w-8 h-8 text-[0.78rem] font-bold rounded-lg transition-all duration-200',
                  item === safePage
                    ? 'bg-linear-to-r from-[#7C3AED] to-[#D946EF] text-white shadow-md shadow-[#7C3AED]/20'
                    : 'text-slate-600 hover:bg-white hover:text-slate-900 hover:shadow-sm',
                ].join(' ')}
              >
                {item}
              </button>
            )
          )}

          <button
            type="button"
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            disabled={safePage === totalPages}
            aria-label="Next page"
            className="w-8 h-8 flex items-center justify-center rounded-lg text-slate-500 hover:text-slate-800 hover:bg-white hover:shadow-sm disabled:opacity-40 disabled:hover:bg-transparent disabled:hover:shadow-none disabled:cursor-not-allowed transition-all"
          >
            <ChevronRight size={16} strokeWidth={2.5} aria-hidden="true" />
          </button>
        </nav>

        <span aria-live="polite" className="text-[0.72rem] font-semibold text-slate-400 whitespace-nowrap bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-100">
          <span className="text-slate-600">{filtered.length === 0 ? 0 : (safePage - 1) * pageSize + 1}</span>
          {' '}-{' '}
          <span className="text-slate-600">{Math.min(safePage * pageSize, filtered.length)}</span>
          {' '}of{' '}
          <span className="text-slate-600">{filtered.length}</span>
        </span>
      </footer>
    </div>
  )
}

function buildPageNumbers(current: number, total: number): (number | '...')[] {
  if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1)
  const pages: (number | '...')[] = [1]
  if (current > 3) pages.push('...')
  const start = Math.max(2, current - 1)
  const end = Math.min(total - 1, current + 1)
  for (let i = start; i <= end; i++) pages.push(i)
  if (current < total - 2) pages.push('...')
  pages.push(total)
  return pages
}