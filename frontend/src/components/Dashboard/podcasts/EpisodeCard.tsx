import { memo } from 'react'
import { Play, Clock, MoreVertical, Mic2 } from 'lucide-react'
import type { Episode } from './data'

interface EpisodeCardProps {
  episode: Episode
}

export default memo(function EpisodeCard({ episode }: EpisodeCardProps) {
  return (
    <article className="flex items-center gap-3.5 sm:gap-4 px-4 sm:px-5 py-3.5 sm:py-4 border-b border-slate-100/80 hover:bg-slate-50/50 transition-colors duration-200 group">
      {/* Thumbnail */}
      <div
        className="w-[68px] h-[68px] sm:w-[76px] sm:h-[76px] rounded-lg shrink-0 flex flex-col items-center justify-center relative overflow-hidden shadow-sm"
        style={{ backgroundColor: episode.thumbnailColor }}
      >
        <span className="text-[0.55rem] sm:text-[0.6rem] font-extrabold text-white leading-tight text-center tracking-wider px-1.5">
          {episode.thumbnailLabel}
        </span>
        {episode.thumbnailSubLabel && (
          <span className="text-[0.45rem] sm:text-[0.5rem] font-bold text-white/80 leading-tight text-center tracking-wide mt-0.5">
            {episode.thumbnailSubLabel}
          </span>
        )}
        <Mic2
          size={14}
          className="absolute bottom-1.5 right-1.5 text-white/40"
          strokeWidth={1.5}
          aria-hidden="true"
        />
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <h3 className="text-[0.82rem] sm:text-[0.88rem] font-bold text-[#0f172a] leading-snug line-clamp-2">
          {episode.title}
        </h3>
        <p className="text-[0.7rem] sm:text-[0.75rem] text-slate-500 mt-0.5 truncate">
          {episode.speaker}
          <span className="mx-1 text-slate-300">•</span>
          <span className="text-slate-400">{episode.role}</span>
        </p>
        <div className="flex items-center gap-1.5 mt-1.5 text-[0.65rem] sm:text-[0.7rem] text-slate-400 font-medium">
          <Clock size={12} strokeWidth={2} aria-hidden="true" className="shrink-0" />
          <span>{episode.duration}</span>
          <span className="text-slate-300 mx-0.5">•</span>
          <span>{episode.plays}</span>
          <span className="text-slate-300 mx-0.5">•</span>
          <span>{episode.timeAgo}</span>
        </div>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-1.5 shrink-0">
        <button
          type="button"
          aria-label={`Play ${episode.title}`}
          className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border-2 border-emerald-500 flex items-center justify-center text-emerald-500 hover:bg-emerald-500 hover:text-white active:scale-90 transition-all duration-200"
        >
          <Play size={15} fill="currentColor" className="ml-0.5" aria-hidden="true" />
        </button>
        <button
          type="button"
          aria-label="More options"
          className="w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors opacity-0 group-hover:opacity-100 focus:opacity-100"
        >
          <MoreVertical size={16} aria-hidden="true" />
        </button>
      </div>
    </article>
  )
})
