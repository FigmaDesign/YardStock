import { memo } from 'react'
import { ChevronRight, Star } from 'lucide-react'
import type { Speaker } from './data'

interface SpeakerCardProps {
  speaker: Speaker
}

export default memo(function SpeakerCard({ speaker }: SpeakerCardProps) {
  return (
    <article className="flex items-center gap-3.5 sm:gap-4 px-4 sm:px-5 py-4 sm:py-5 border-b border-slate-100/80 hover:bg-slate-50/50 transition-colors duration-200 group cursor-pointer">
      {/* Avatar */}
      <div
        className="w-14 h-14 sm:w-16 sm:h-16 rounded-full shrink-0 flex items-center justify-center text-white font-bold text-[0.85rem] sm:text-[0.95rem] shadow-md"
        style={{ backgroundColor: speaker.avatarColor }}
      >
        {speaker.avatarInitials}
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <h3 className="text-[0.88rem] sm:text-[0.95rem] font-bold text-[#0f172a] leading-snug">
          {speaker.name}
        </h3>
        <p className="text-[0.72rem] sm:text-[0.78rem] font-semibold text-emerald-600 mt-0.5">
          {speaker.role}
        </p>
        <p className="text-[0.7rem] sm:text-[0.75rem] text-slate-500 mt-1 leading-relaxed line-clamp-2">
          {speaker.bio}
        </p>
        <div className="flex items-center gap-2 mt-1.5 flex-wrap">
          {speaker.badge && (
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-amber-50 border border-amber-200/60 text-[0.6rem] font-bold text-amber-700">
              <Star size={9} fill="currentColor" aria-hidden="true" />
              {speaker.badge}
            </span>
          )}
          {speaker.badge && (
            <span className="text-slate-300" aria-hidden="true">|</span>
          )}
          <span className="text-[0.68rem] sm:text-[0.72rem] font-medium text-slate-400">
            {speaker.sessions} Sessions
          </span>
        </div>
      </div>

      {/* Arrow */}
      <div className="shrink-0">
        <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 group-hover:border-emerald-300 group-hover:text-emerald-500 transition-colors duration-200">
          <ChevronRight size={16} strokeWidth={2} aria-hidden="true" />
        </div>
      </div>
    </article>
  )
})
