import { useState, useRef, useEffect, memo } from 'react'
import { ClipboardList, Briefcase, Handshake, MapPin, Bookmark, BadgeCheck, X, Phone, MoreVertical } from 'lucide-react'
import type { Post, PostType } from './data'

const TYPE_CONFIG: Record<PostType, { label: string; Icon: React.ElementType; badgeClass: string; textClass: string; iconClass: string }> = {
  requirement: {
    label: 'REQUIREMENT',
    Icon: ClipboardList,
    badgeClass: 'bg-[#422082]/10 border-[#422082]/20',
    textClass: 'text-[#422082]',
    iconClass: 'text-[#422082]',
  },
  jobPost: {
    label: 'JOB POST',
    Icon: Briefcase,
    badgeClass: 'bg-[#fa7faa]/15 border-[#fa7faa]/30',
    textClass: 'text-[#a62b5a]',
    iconClass: 'text-[#a62b5a]',
  },
  vendorRequirement: {
    label: 'VENDOR REQ',
    Icon: Handshake,
    badgeClass: 'bg-[#c2ef4e]/20 border-[#c2ef4e]/40',
    textClass: 'text-[#1f1633]',
    iconClass: 'text-[#1f1633]',
  },
}

interface PostCardProps {
  post: Post
  onView?: () => void
  onContact?: () => void
  onSave?: () => void
  onNotInterested?: () => void
}

const PostCard = memo(function PostCard({ post, onView, onContact, onSave, onNotInterested }: PostCardProps) {
  const [saved, setSaved] = useState(post.saved)
  const [menuOpen, setMenuOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const cfg = TYPE_CONFIG[post.type]

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false)
      }
    }
    if (menuOpen) document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [menuOpen])

  const handleSave = () => {
    setSaved(!saved)
    setMenuOpen(false)
    onSave?.()
  }

  const handleNotInterested = () => {
    setMenuOpen(false)
    onNotInterested?.()
  }

  return (
    <article className="relative flex flex-col p-3 mb-2.5 border border-[#cfcfdb] rounded-[12px] bg-[#ffffff] hover:shadow-[0_8px_24px_rgba(31,22,51,0.06)] transition-all duration-300 box-border w-full group overflow-hidden font-['Outfit',sans-serif]">
      
      <div 
        aria-hidden="true" 
        className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#422082] to-[#6a5fc1] opacity-0 group-hover:opacity-100 transition-opacity duration-300" 
      />

      <div className="flex flex-row gap-2.5 @md:gap-3 items-start w-full">
        
        <div
          className={`shrink-0 flex flex-col items-center justify-center rounded-[8px] w-[50px] h-[58px] @md:w-[60px] @md:h-[68px] gap-0.5 border ${cfg.badgeClass}`}
          aria-hidden="true"
        >
          <span className={`text-[8.5px] @md:text-[9px] font-bold tracking-[0.2px] uppercase leading-tight text-center px-1 ${cfg.textClass}`}>
            {cfg.label}
          </span>
          <cfg.Icon className={`w-[18px] h-[18px] @md:w-5 @md:h-5 mt-0.5 ${cfg.iconClass}`} strokeWidth={2} />
        </div>

        <div className="flex-1 min-w-0 flex flex-col justify-start">
          <h3 className="text-[14px] @md:text-[15px] font-bold text-[#1f1633] leading-snug break-words whitespace-normal transition-colors duration-300 group-hover:text-[#6a5fc1]">
            {post.title}
          </h3>

          <div className="flex items-center flex-wrap gap-1 mt-0.5">
            <span className="text-[12px] @md:text-[13px] font-medium text-[#79628c] break-words">
              {post.company}
            </span>
            {post.verified && (
              <BadgeCheck 
                size={14} 
                className="text-[#422082] shrink-0" 
                fill="currentColor" 
                color="white" 
                aria-label="Verified" 
              />
            )}
            <span className="text-[#cfcfdb] text-[10px] mx-0.5 shrink-0" aria-hidden="true">•</span>
            <span className="text-[11px] font-medium text-[#79628c] shrink-0 whitespace-nowrap">
              {post.timeAgo}
            </span>
          </div>

          <div className="flex items-center flex-wrap gap-1.5 mt-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="shrink-0 inline-flex items-center px-2 py-0.5 rounded-[4px] text-[10px] font-semibold uppercase tracking-[0.2px] bg-[#f9fafb] text-[#1f1633] border border-[#cfcfdb] transition-colors group-hover:border-[#6a5fc1]/30"
              >
                {tag}
              </span>
            ))}
            {post.location && (
              <span className="shrink-0 inline-flex items-center gap-1 text-[11px] font-medium text-[#79628c] ml-0.5">
                <MapPin size={12} aria-hidden="true" className="text-[#6a5fc1]" />
                {post.location}
              </span>
            )}
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between w-full mt-2.5 pt-2.5 border-t border-[#cfcfdb]/60">
        <div className="flex items-center gap-2">
          <button
            onClick={onView}
            aria-label={`View details for ${post.title}`}
            className="flex items-center justify-center px-3.5 py-1.5 rounded-[6px] bg-gradient-to-r from-[#422082] to-[#6a5fc1] text-[11px] @md:text-[12px] font-bold text-white uppercase tracking-[0.2px] hover:shadow-[0_4px_12px_rgba(106,95,193,0.3)] active:scale-95 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6a5fc1]/50"
          >
            View
          </button>
          
          <button
            onClick={onContact}
            aria-label={`Contact ${post.company}`}
            className="flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-[6px] border border-[#cfcfdb] bg-[#ffffff] text-[11px] @md:text-[12px] font-bold text-[#1f1633] uppercase tracking-[0.2px] hover:bg-[#f9fafb] hover:border-[#79628c] active:scale-95 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6a5fc1]/50"
          >
            <Phone size={13} aria-hidden="true" className="text-[#6a5fc1]" />
            <span>Contact</span>
          </button>
        </div>

        <div className="relative" ref={menuRef}>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="More options"
            aria-expanded={menuOpen}
            className="flex items-center justify-center p-1 rounded-[6px] text-[#79628c] hover:bg-[#f0f0f0] hover:text-[#1f1633] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6a5fc1]/50"
          >
            <MoreVertical size={16} />
          </button>

          {menuOpen && (
            <div className="absolute right-0 bottom-full mb-1.5 w-40 bg-[#ffffff] border border-[#cfcfdb] rounded-[8px] shadow-[0_10px_25px_-5px_rgba(31,22,51,0.15)] z-20 py-1 origin-bottom-right animate-in fade-in zoom-in-95 duration-150">
              <button
                onClick={handleSave}
                className="flex items-center gap-2.5 w-full px-3 py-1.5 text-[12px] font-medium text-[#1f1633] hover:bg-[#f9fafb] transition-colors"
              >
                <Bookmark 
                  size={15} 
                  fill={saved ? 'currentColor' : 'none'} 
                  className={saved ? 'text-[#6a5fc1]' : 'text-[#79628c]'} 
                />
                {saved ? 'Saved' : 'Save Post'}
              </button>
              <button
                onClick={handleNotInterested}
                className="flex items-center gap-2.5 w-full px-3 py-1.5 text-[12px] font-medium text-[#fa7faa] hover:bg-[#fff0f5] transition-colors"
              >
                <X size={15} />
                Not Interested
              </button>
            </div>
          )}
        </div>
      </div>
      
    </article>
  )
})

export default PostCard