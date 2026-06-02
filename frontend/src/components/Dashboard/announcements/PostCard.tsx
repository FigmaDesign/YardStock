import { useState, memo } from 'react'
import { ClipboardList, Briefcase, Handshake, MapPin, Bookmark, BadgeCheck, ArrowRight } from 'lucide-react'
import type { Post, PostType } from './data'

const TYPE_CONFIG: Record<PostType, { label: string; Icon: React.ElementType; badgeClass: string; textClass: string; iconClass: string }> = {
  requirement: {
    label: 'REQUIREMENT',
    Icon: ClipboardList,
    badgeClass: 'bg-[#f0fdf4] border-[#dcfce7]',
    textClass: 'text-[#16a34a]',
    iconClass: 'text-[#16a34a]',
  },
  jobPost: {
    label: 'JOB POST',
    Icon: Briefcase,
    badgeClass: 'bg-[#f0f5ff] border-[#e0e7ff]',
    textClass: 'text-[#4338ca]',
    iconClass: 'text-[#4338ca]',
  },
  vendorRequirement: {
    label: 'VENDOR REQUIREMENT',
    Icon: Handshake,
    badgeClass: 'bg-[#fff7ed] border-[#ffedd5]',
    textClass: 'text-[#c2410c]',
    iconClass: 'text-[#c2410c]',
  },
}

interface PostCardProps {
  post: Post
}

const PostCard = memo(function PostCard({ post }: PostCardProps) {
  const [saved, setSaved] = useState(post.saved)
  const cfg = TYPE_CONFIG[post.type]

  return (
    <article className="relative flex flex-col @md:flex-row items-stretch gap-1 @md:gap-4 p-3 @md:p-4 mb-3 border border-slate-200 rounded-lg bg-white hover:shadow-md transition-all duration-300 box-border w-full group overflow-hidden">
      
      <div 
        aria-hidden="true" 
        className="absolute left-0 top-0 bottom-0 w-1 bg-linear-to-b from-[#183666] to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" 
      />

      <div className="flex flex-row gap-3 items-center @md:items-start shrink-0">
        
        <div
          className={`shrink-0 flex flex-col items-center justify-center rounded-lg w-16 h-18 @md:w-21 @md:h-24 gap-1.5 border ${cfg.badgeClass}`}
          aria-hidden="true"
        >
          <span className={`text-[0.40rem] @md:text-[0.45rem] font-extrabold tracking-wide uppercase leading-tight text-center px-1 ${cfg.textClass}`}>
            {cfg.label}
          </span>
          <cfg.Icon className={`w-5 h-5 @md:w-[22px] @md:h-[22px] ${cfg.iconClass}`} strokeWidth={1.8} />
        </div>

        <div className="flex flex-col justify-center @md:hidden flex-1 min-w-0 pr-8">
          <h3 className="text-[0.85rem] font-bold text-slate-800 leading-snug wrap-break-word transition-colors duration-300 group-hover:text-[#183666]">
            {post.title}
          </h3>
          <div className="flex items-center flex-wrap gap-1 mt-0.5">
            <span className="text-[0.72rem] font-medium text-slate-600 wrap-break-word">
              {post.company}
            </span>
            {post.verified && (
              <BadgeCheck 
                size={14} 
                className="text-[#16a34a] shrink-0" 
                fill="currentColor" 
                color="white" 
                aria-label="Verified" 
              />
            )}
          </div>
        </div>
      </div>

      <div className="flex-1 min-w-0 flex flex-col justify-start py-0.5">
        
        <div className="hidden @md:flex flex-col mb-1.5 pr-10">
          <h3 className="text-[0.95rem] font-bold text-slate-800 leading-snug wrap-break-word transition-colors duration-300 group-hover:text-[#183666]">
            {post.title}
          </h3>
          <div className="flex items-center flex-wrap gap-1 mt-0.5">
            <span className="text-[0.75rem] font-medium text-slate-600 wrap-break-word">
              {post.company}
            </span>
            {post.verified && (
              <BadgeCheck 
                size={14} 
                className="text-[#16a34a] shrink-0" 
                fill="currentColor" 
                color="white" 
                aria-label="Verified" 
              />
            )}
          </div>
        </div>

        <p className="text-[0.75rem] text-slate-500 leading-relaxed font-medium wrap-break-word">
          {post.description}
        </p>

        <div className="flex items-center flex-wrap gap-1.5 mt-2.5">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="shrink-0 inline-flex items-center px-2 py-0.5 rounded-full text-[0.65rem] font-semibold bg-[#f8fafc] text-slate-600 border border-slate-200 transition-colors group-hover:border-slate-300"
            >
              {tag}
            </span>
          ))}
          {post.location && (
            <span className="shrink-0 inline-flex items-center gap-0.5 text-[0.65rem] font-medium text-slate-500 ml-1">
              <MapPin size={11} aria-hidden="true" className="text-slate-400" />
              {post.location}
            </span>
          )}
        </div>
      </div>

      <div className="shrink-0 flex flex-row @md:flex-col items-center @md:items-end justify-between py-0.5 w-full @md:w-auto pt-1 @md:pt-0 border-t border-slate-100 @md:border-none mt-1 @md:mt-0">
        <span className="text-[0.65rem] @md:text-[0.7rem] font-medium text-slate-500 whitespace-nowrap">
          {post.timeAgo}
        </span>

        <div className="flex items-center gap-2">
          {/* Bookmark Button moved here and set to @md:static */}
          <button
            onClick={() => setSaved((s) => !s)}
            aria-label={saved ? 'Remove bookmark' : 'Bookmark this post'}
            className="absolute top-3 right-3 @md:static p-1.5 @md:w-8 @md:h-8 @md:border @md:border-slate-200 rounded-full @md:bg-slate-50 hover:bg-slate-100 transition-all duration-300 text-slate-400 hover:text-slate-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-300 flex items-center justify-center z-10"
          >
            <Bookmark 
              size={17} 
              fill={saved ? 'currentColor' : 'none'} 
              strokeWidth={1.8} 
              className={saved ? 'text-slate-700 @md:text-[#183666]' : ''}
            />
          </button>

          <button
            aria-label={`View details for ${post.title}`}
            className="flex shrink-0 items-center gap-1.5 px-3 py-1.5 @md:px-4 rounded-lg border border-transparent bg-[#183666] shadow-[0_2px_8px_rgba(24,54,102,0.2)] text-[0.72rem] font-bold text-white hover:bg-[#0d1e3a] hover:shadow-[0_4px_12px_rgba(24,54,102,0.3)] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#183666]/50 group/btn"
          >
            <span>View Details</span>
            <ArrowRight size={14} aria-hidden="true" className="transition-transform duration-300 group-hover/btn:translate-x-0.5" />
          </button>
        </div>
      </div>
      
    </article>
  )
})

export default PostCard