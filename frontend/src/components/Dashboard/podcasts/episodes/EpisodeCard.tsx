import { Play, MoreVertical, Mic2 } from 'lucide-react'

interface Episode {
  title: string
  speaker: string
  role: string
  thumbnailColor: string
  thumbnailLabel: string
  thumbnailSubLabel?: string
}

interface EpisodeCardProps {
  episode: Episode
}

export default function EpisodeCard({ episode }: EpisodeCardProps) {
  return (
    <article 
      className="flex items-center justify-between px-3 sm:px-4 py-3 sm:py-4 rounded-xl hover:bg-slate-50 transition-all duration-300 group cursor-pointer outline outline-1 outline-transparent hover:outline-slate-200 focus-within:ring-2 focus-within:ring-emerald-500/30 focus-within:outline-none"
      tabIndex={0}
    >
      <div className="flex items-center gap-3 sm:gap-4 min-w-0 pr-3">
        <div
          className="w-[48px] h-[48px] sm:w-[56px] sm:h-[56px] rounded-lg shrink-0 flex flex-col items-center justify-center relative overflow-hidden shadow-sm outline outline-1 outline-black/5"
          style={{ backgroundColor: episode.thumbnailColor }}
        >
          <span className="text-[0.45rem] sm:text-[0.55rem] font-extrabold text-white leading-tight text-center tracking-wider px-1 drop-shadow-sm">
            {episode.thumbnailLabel}
          </span>
          {episode.thumbnailSubLabel && (
            <span className="text-[0.35rem] sm:text-[0.45rem] font-bold text-white/80 leading-tight text-center tracking-wide mt-0.5 drop-shadow-sm">
              {episode.thumbnailSubLabel}
            </span>
          )}
          <Mic2
            size={10}
            className="absolute bottom-1 right-1 text-white/40 sm:hidden block"
            strokeWidth={2}
            aria-hidden="true"
          />
        </div>

        <div className="min-w-0 space-y-0.5">
          <h3 className="text-sm sm:text-base font-bold text-[#0f172a] leading-snug sm:leading-tight truncate">
            {episode.title}
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 font-medium truncate">
            {episode.speaker}
            <span className="mx-1.5 text-slate-300">•</span>
            <span className="text-slate-400">{episode.role}</span>
          </p>
        </div>
      </div>

      <div className="flex items-center gap-2 sm:gap-3 shrink-0">
        <button
          type="button"
          aria-label={`Play ${episode.title}`}
          className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-emerald-500 flex items-center justify-center text-emerald-500 hover:bg-emerald-500 hover:text-white shadow-sm hover:shadow-md hover:shadow-emerald-500/20 active:scale-95 transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-500 group/play"
        >
          <Play size={14} className="ml-0.5 sm:w-4 sm:h-4 group-hover/play:scale-105 transition-transform" fill="currentColor" aria-hidden="true" />
        </button>
        
        <button
          type="button"
          aria-label="More options"
          className="w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-slate-400 hover:text-[#0f172a] hover:bg-slate-200/50 transition-colors sm:opacity-0 sm:group-hover:opacity-100 sm:focus-within:opacity-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-slate-400"
        >
          <MoreVertical size={16} className="sm:w-5 sm:h-5" aria-hidden="true" />
        </button>
      </div>
    </article>
  )
}