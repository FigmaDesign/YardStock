import { useState, memo } from 'react'
import { ClipboardList, Briefcase, Handshake, MapPin, Bookmark, ArrowRight, BadgeCheck } from 'lucide-react'
import type { Post, PostType } from './data'

const TYPE_CONFIG: Record<PostType, { label: string; Icon: React.ElementType; badgeClass: string; textClass: string; iconClass: string }> = {
  requirement: {
    label: 'REQUIREMENT',
    Icon: ClipboardList,
    badgeClass: 'bg-linear-to-br from-emerald-50 to-teal-100/50 border-teal-200/60 shadow-[inset_0_1px_0_rgba(255,255,255,0.8)]',
    textClass: 'text-teal-800',
    iconClass: 'text-teal-600',
  },
  jobPost: {
    label: 'JOB POST',
    Icon: Briefcase,
    badgeClass: 'bg-linear-to-br from-indigo-50 to-blue-100/50 border-indigo-200/60 shadow-[inset_0_1px_0_rgba(255,255,255,0.8)]',
    textClass: 'text-indigo-800',
    iconClass: 'text-indigo-600',
  },
  vendorRequirement: {
    label: 'VENDOR REQ',
    Icon: Handshake,
    badgeClass: 'bg-linear-to-br from-amber-50 to-orange-100/50 border-amber-200/60 shadow-[inset_0_1px_0_rgba(255,255,255,0.8)]',
    textClass: 'text-amber-800',
    iconClass: 'text-amber-600',
  },
}

interface PostCardProps {
  post: Post
}

const PostCard = memo(function PostCard({ post }: PostCardProps) {
  const [saved, setSaved] = useState(post.saved)
  const cfg = TYPE_CONFIG[post.type]

  return (
    <article className="relative flex flex-col @md:flex-row items-start gap-3 @md:gap-4 px-4 @md:px-5 py-4 @md:py-5 border-b border-slate-100 bg-white hover:bg-linear-to-br hover:from-white hover:to-slate-50/50 transition-all duration-300 group overflow-hidden w-full box-border">
      <div 
        aria-hidden="true" 
        className="absolute left-0 top-0 bottom-0 w-0.75 bg-linear-to-b from-[#183666] to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" 
      />

      <div className="flex items-start gap-3 @md:gap-4 flex-1 min-w-0 w-full">
        <div
          className={`shrink-0 flex flex-col items-center justify-center rounded-xl w-12 h-12 @md:w-14 @md:h-14 gap-1 border ${cfg.badgeClass}`}
          aria-hidden="true"
        >
          <cfg.Icon size={18} strokeWidth={2} className={cfg.iconClass} />
          <span className={`text-[0.40rem] @md:text-[0.42rem] font-extrabold tracking-wider leading-none text-center px-1 ${cfg.textClass}`}>
            {cfg.label}
          </span>
        </div>

        <div className="flex-1 min-w-0 py-0.5">
          <h3 className="text-[0.88rem] @md:text-[0.92rem] font-bold text-slate-900 leading-snug tracking-tight transition-colors duration-300 group-hover:text-[#183666] wrap-break-word">
            {post.title}
          </h3>

          <div className="flex items-center flex-wrap gap-1.5 mt-1 min-w-0">
            <span className="text-[0.72rem] @md:text-[0.75rem] font-semibold text-slate-600 wrap-break-word">{post.company}</span>
            {post.verified && (
              <BadgeCheck size={14} className="text-emerald-500 shrink-0 drop-shadow-sm" aria-label="Verified" />
            )}
          </div>

          <p className="text-[0.72rem] @md:text-[0.75rem] text-slate-500 mt-1.5 leading-relaxed font-medium wrap-break-word">
            {post.description}
          </p>

          <div className="flex items-center gap-2 mt-3 overflow-x-auto scrollbar-none [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden max-w-full pb-0.5">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="shrink-0 inline-flex items-center px-2.5 py-1 rounded-full text-[0.65rem] font-semibold bg-linear-to-b from-white to-slate-50 text-slate-600 border border-slate-200/80 shadow-[0_1px_2px_rgba(0,0,0,0.02)] transition-colors group-hover:border-slate-300/80"
              >
                {tag}
              </span>
            ))}
            {post.location && (
              <span className="shrink-0 inline-flex items-center gap-1 text-[0.68rem] font-medium text-slate-400 ml-1">
                <MapPin size={11} aria-hidden="true" className="text-slate-400" />
                {post.location}
              </span>
            )}
          </div>
        </div>
      </div>

      <div className="shrink-0 flex flex-row @md:flex-col items-center @md:items-end justify-between w-full @md:w-auto gap-3 self-stretch mt-3 @md:mt-0 pt-3 @md:pt-0 border-t border-slate-100/80 @md:border-none">
        <span className="text-[0.68rem] font-medium text-slate-400 tracking-wide order-1 @md:order-0 mr-auto @md:mr-0 wrap-break-word">
          {post.timeAgo}
        </span>

        <div className="flex items-center gap-2.5 order-2 @md:order-0">
          <button
            onClick={() => setSaved((s) => !s)}
            aria-label={saved ? 'Remove bookmark' : 'Bookmark this post'}
            className={[
              'shrink-0 w-8 h-8 rounded-full border shadow-[0_1px_2px_rgba(0,0,0,0.03)] flex items-center justify-center transition-all duration-300',
              saved
                ? 'bg-[#183666]/10 border-[#183666]/30 text-[#183666]'
                : 'bg-linear-to-b from-white to-slate-50 border-slate-200/80 text-slate-400 hover:text-[#183666] hover:border-[#183666]/50 hover:shadow-md',
            ].join(' ')}
          >
            <Bookmark size={13} fill={saved ? 'currentColor' : 'none'} strokeWidth={saved ? 1.5 : 2} />
          </button>

          <button
            aria-label={`View details for ${post.title}`}
            className="shrink-0 flex items-center gap-1.5 px-4 py-1.5 rounded-lg border border-transparent bg-[#183666] shadow-[0_2px_8px_rgba(24,54,102,0.2)] text-[0.72rem] font-bold text-white hover:bg-[#0d1e3a] hover:shadow-[0_4px_12px_rgba(24,54,102,0.3)] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#183666]/50 group/btn"
          >
            View Details
            <ArrowRight size={12} aria-hidden="true" className="transition-transform duration-300 group-hover/btn:translate-x-0.5" />
          </button>
        </div>
      </div>
    </article>
  )
})

export default PostCard