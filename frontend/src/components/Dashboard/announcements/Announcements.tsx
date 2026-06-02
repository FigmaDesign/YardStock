import { useState, useMemo } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import AnnouncementTabs from './AnnouncementTabs'
import PostCard from './PostCard'
import { POSTS, ANNOUNCEMENT_TABS, TAB_POST_TYPE_MAP, type AnnouncementTab } from './data'

const PAGE_SIZE_OPTIONS = [5, 10, 20] as const

export default function Announcements() {
  const [activeTab, setActiveTab] = useState<AnnouncementTab>('All Posts')
  const [page, setPage] = useState(1)
  const [pageSize, setPageSize] = useState<5 | 10 | 20>(10)

  const filtered = useMemo(() => {
    const typeFilter = TAB_POST_TYPE_MAP[activeTab]
    if (typeFilter === null) return POSTS
    return POSTS.filter((p) => p.type === typeFilter)
  }, [activeTab])

  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize))
  const safePage = Math.min(page, totalPages)
  const paginated = filtered.slice((safePage - 1) * pageSize, safePage * pageSize)

  function handleTabChange(tab: AnnouncementTab) {
    setActiveTab(tab)
    setPage(1)
  }

  function handlePageSizeChange(size: 5 | 10 | 20) {
    setPageSize(size)
    setPage(1)
  }

  const pageNumbers = buildPageNumbers(safePage, totalPages)

  return (
    <div className="flex flex-col h-full overflow-hidden">
      <AnnouncementTabs active={activeTab} onChange={handleTabChange} />

      <div className="flex-1 overflow-y-auto bg-white divide-y divide-transparent scrollbar-none [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
        {paginated.length === 0 ? (
          <div className="flex items-center justify-center h-40 text-[0.82rem] text-[#9199a8]">
            No posts found in this category.
          </div>
        ) : (
          paginated.map((post) => <PostCard key={post.id} post={post} />)
        )}
      </div>

      <footer className="shrink-0 flex items-center justify-between px-5 py-3 border-t border-[#eef0f3] bg-white gap-3 flex-wrap">
        <div className="flex items-center gap-2 text-[0.75rem] text-[#6b7280]">
          <span>Show</span>
          <select
            value={pageSize}
            onChange={(e) => handlePageSizeChange(Number(e.target.value) as 5 | 10 | 20)}
            aria-label="Posts per page"
            className="border border-[#eef0f3] rounded-md px-2 py-1 text-[0.75rem] text-[#374151] bg-white focus:outline-none focus:ring-2 focus:ring-[#16a34a] cursor-pointer"
          >
            {PAGE_SIZE_OPTIONS.map((n) => (
              <option key={n} value={n}>{n} per page</option>
            ))}
          </select>
        </div>

        <nav aria-label="Pagination" className="flex items-center gap-1">
          <button
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={safePage === 1}
            aria-label="Previous page"
            className="min-w-7 min-h-7 p-1 flex flex-col @md:flex-row items-center justify-center gap-1 rounded-md border border-[#eef0f3] text-[#6b7280] hover:bg-[#f5f6f8] disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
          >
            <ChevronLeft size={13} />
            <span className="text-[10px] @md:text-[0.75rem] leading-none">Prev</span>
          </button>

          {pageNumbers.map((item, i) =>
            item === '...' ? (
              <span key={`ellipsis-${i}`} className="w-7 text-center text-[0.75rem] text-[#9199a8]">…</span>
            ) : (
              <button
                key={item}
                onClick={() => setPage(item as number)}
                aria-label={`Page ${item}`}
                aria-current={item === safePage ? 'page' : undefined}
                className={[
                  'w-7 h-7 text-[0.75rem] font-semibold rounded-md border transition-colors',
                  item === safePage
                    ? 'bg-[#16a34a] text-white border-[#16a34a]'
                    : 'border-[#eef0f3] text-[#374151] hover:bg-[#f5f6f8]',
                ].join(' ')}
              >
                {item}
              </button>
            )
          )}

          <button
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            disabled={safePage === totalPages}
            aria-label="Next page"
            className="min-w-7 min-h-7 p-1 flex flex-col @md:flex-row items-center justify-center gap-1 rounded-md border border-[#eef0f3] text-[#6b7280] hover:bg-[#f5f6f8] disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
          >
            <ChevronRight size={13} />
            <span className="text-[10px] @md:text-[0.75rem] leading-none">Next</span>
          </button>
        </nav>

        <span className="text-[0.72rem] text-[#9199a8] whitespace-nowrap">
          Showing {filtered.length === 0 ? 0 : (safePage - 1) * pageSize + 1} to{' '}
          {Math.min(safePage * pageSize, filtered.length)} of {filtered.length} results
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