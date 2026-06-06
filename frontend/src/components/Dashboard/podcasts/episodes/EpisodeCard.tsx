import { memo } from 'react'
import { PlayCircle, Headphones, Clock } from 'lucide-react'
import type { Episode } from '../data'

interface EpisodeCardProps {
  episode: Episode
}

const EpisodeCard = memo(function EpisodeCard({ episode }: EpisodeCardProps) {
  return (
    <article className="group relative flex bg-[var(--ys-canvas)] border border-[var(--ys-mute)] rounded-2xl overflow-hidden hover:shadow-lg hover:border-[var(--ys-ink-mid)] transition-all duration-300">
      
      <div className="w-32 sm:w-40 shrink-0 relative overflow-hidden">
        <img 
          src={episode.imageUrl} 
          alt=""
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors flex items-center justify-center">
          <PlayCircle className="w-10 h-10 text-white opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:scale-110 duration-300" />
        </div>
        <div className="absolute top-2 left-2 bg-[var(--ys-ink)]/80 backdrop-blur-sm text-white text-[10px] font-bold px-2 py-1 rounded-md">
          {episode.duration}
        </div>
      </div>

      <div className="p-4 sm:p-5 flex flex-col justify-center flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-[10px] font-bold text-[var(--ys-primary)] uppercase tracking-wider bg-[var(--ys-primary)]/10 px-2 py-0.5 rounded-sm">
            {episode.category}
          </span>
          {episode.trending && (
            <span className="flex items-center gap-1 text-[10px] font-bold text-[var(--ys-primary)] uppercase tracking-wider">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--ys-primary)] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[var(--ys-primary)]"></span>
              </span>
              TRENDING
            </span>
          )}
        </div>

        <h3 className="font-bold text-[var(--ys-ink)] text-base sm:text-lg leading-snug mb-1 truncate group-hover:text-[var(--ys-primary)] transition-colors">
          {episode.title}
        </h3>
        
        <p className="text-xs sm:text-sm text-[var(--ys-body)] font-medium truncate mb-3">
          {episode.speakerName} <span className="text-[var(--ys-mute)] mx-1">•</span> {episode.company}
        </p>

        <div className="flex items-center justify-between mt-auto pt-3 border-t border-[var(--ys-mute)]/50">
          <div className="flex items-center gap-3 text-[10px] sm:text-xs font-semibold text-[var(--ys-body-mid)]">
            <span className="flex items-center gap-1">
              <Headphones className="w-3.5 h-3.5 text-[var(--ys-ink-soft)]" /> 
              {episode.listenCount}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-[var(--ys-ink-soft)]" /> 
              {episode.date}
            </span>
          </div>
          
          <button aria-label="Play Episode" className="w-8 h-8 rounded-full bg-[var(--ys-canvas-soft)] flex items-center justify-center text-[var(--ys-ink)] group-hover:bg-[var(--ys-primary)] group-hover:text-white transition-colors">
            <PlayCircle className="w-5 h-5 ml-0.5" />
          </button>
        </div>
      </div>

    </article>
  )
})

export default EpisodeCard