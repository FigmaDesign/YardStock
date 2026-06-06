import { Play, MoreVertical } from 'lucide-react'

interface Episode {
  id: string
  title: string
  speaker: string
  role: string
  duration: string
  thumbnailColor: string
  thumbnailLabel: string
}

interface EpisodeCardProps {
  episode: Episode
}

export default function EpisodeCard({ episode }: EpisodeCardProps) {
  return (
    <article className="group flex items-center justify-between p-2.5 sm:p-4 gap-2.5 sm:gap-4 bg-white rounded-lg border border-slate-100 shadow-sm hover:shadow-md transition-shadow cursor-pointer w-full">
      <div className="flex items-center gap-2.5 sm:gap-4 flex-1 min-w-0">
        <div
          className={`relative overflow-hidden shrink-0 w-12 h-12 sm:w-16 sm:h-16 rounded flex items-center justify-center p-1 sm:p-1.5`}
          style={{ backgroundColor: episode.thumbnailColor }}
        >
          <span className="text-[8px] sm:text-[10px] font-bold text-white leading-tight text-center whitespace-pre-wrap uppercase tracking-wider transition-opacity duration-200 group-hover:opacity-0">
            {episode.thumbnailLabel}
          </span>
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            <Play size={18} fill="currentColor" className="text-white sm:w-8 sm:h-8" />
          </div>
        </div>

        <div className="flex-1 min-w-0 flex flex-col justify-center py-0.5">
          <h3 className="text-[14px] sm:text-base font-bold text-slate-900 leading-snug truncate">
            {episode.title}
          </h3>
          <p className="text-[11px] sm:text-sm text-slate-600 font-medium mt-0.5 sm:mt-1 truncate">
            {episode.speaker}
            <span className="mx-1 sm:mx-1.5 text-slate-300">•</span>
            {episode.role}
          </p>
        </div>
      </div>

      <div className="flex items-center gap-2 sm:gap-4 shrink-0 pl-1 sm:pl-2">
        <span className="hidden sm:block text-[11px] sm:text-sm font-medium text-slate-400 tabular-nums shrink-0">
          {episode.duration}
        </span>

        <button
          type="button"
          className="shrink-0 text-slate-400 hover:text-slate-600 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-200 rounded p-1 sm:p-1.5"
        >
          <MoreVertical size={16} className="sm:w-5 sm:h-5" />
        </button>
      </div>
    </article>
  )
}