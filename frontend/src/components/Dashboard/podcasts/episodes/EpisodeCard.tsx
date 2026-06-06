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
    <article className="group flex items-center justify-between p-2.5 sm:p-3.5 gap-3 sm:gap-4 bg-[#ffffff] rounded-[12px] border border-[#cfcfdb] hover:border-[#79628c]/50 shadow-[0_2px_8px_rgba(31,22,51,0.02)] hover:shadow-[0_8px_24px_rgba(31,22,51,0.06)] transition-all duration-300 cursor-pointer w-full font-['Outfit',sans-serif] motion-reduce:transition-none">
      <div className="flex items-center gap-3 sm:gap-4 flex-1 min-w-0">
        <div
          className="relative overflow-hidden shrink-0 w-12 h-12 sm:w-16 sm:h-16 rounded-[8px] flex items-center justify-center p-1 sm:p-1.5"
          style={{ backgroundColor: episode.thumbnailColor }}
        >
          <span className="text-[8px] sm:text-[10px] font-bold text-white leading-tight text-center whitespace-pre-wrap uppercase tracking-[0.2px] transition-opacity duration-300 group-hover:opacity-0 drop-shadow-sm motion-reduce:transition-none">
            {episode.thumbnailLabel}
          </span>
          <div className="absolute inset-0 bg-[#1f1633]/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-[2px] motion-reduce:transition-none">
            <Play size={18} fill="currentColor" className="text-white sm:w-8 sm:h-8 drop-shadow-md" aria-hidden="true" />
          </div>
        </div>

        <div className="flex-1 min-w-0 flex flex-col justify-center py-0.5">
          <h3 className="text-[14px] sm:text-[16px] font-bold text-[#1f1633] leading-snug truncate transition-colors duration-300 group-hover:text-[#6a5fc1] motion-reduce:transition-none">
            {episode.title}
          </h3>
          <p className="text-[12px] sm:text-[13px] text-[#79628c] font-medium mt-0.5 sm:mt-1 truncate tracking-[0.1px]">
            <span className="text-[#1f1633]">{episode.speaker}</span>
            <span className="mx-1.5 text-[#cfcfdb]">•</span>
            {episode.role}
          </p>
        </div>
      </div>

      <div className="flex items-center gap-2 sm:gap-4 shrink-0 pl-1 sm:pl-2">
        <span className="hidden sm:block text-[12px] sm:text-[13px] font-bold text-[#79628c] tabular-nums shrink-0 tracking-[0.2px]">
          {episode.duration}
        </span>

        <button
          type="button"
          aria-label="More options"
          className="shrink-0 flex items-center justify-center p-1.5 rounded-[6px] text-[#79628c] hover:bg-[#f0f0f0] hover:text-[#1f1633] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6a5fc1]/50 motion-reduce:transition-none"
        >
          <MoreVertical size={16} className="sm:w-5 sm:h-5" aria-hidden="true" />
        </button>
      </div>
    </article>
  )
}