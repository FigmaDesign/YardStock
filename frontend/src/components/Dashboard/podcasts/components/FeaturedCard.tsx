import { memo } from 'react'
import { PlayCircle, Clock, Headphones, ListVideo, Info } from 'lucide-react'
import type { Episode, Series } from '../data'

interface FeaturedCardProps {
  type: 'episode' | 'series'
  data: Episode | Series
}

const FeaturedCard = memo(function FeaturedCard({ type, data }: FeaturedCardProps) {
  const isEpisode = type === 'episode'
  const episode = data as Episode
  const series = data as Series

  const bgImage = isEpisode ? episode.imageUrl : series.coverUrl
  const title = isEpisode ? episode.title : series.title
  const badgeText = isEpisode ? 'LATEST EPISODE' : 'FEATURED SERIES'
  
  return (
    <div className="relative rounded-2xl overflow-hidden bg-[var(--ys-ink)] shadow-xl group border border-[var(--ys-mute)]/20 min-h-[360px] md:min-h-[400px] flex items-end">
      
      <div className="absolute inset-0">
        <img 
          src={bgImage} 
          alt=""
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--ys-ink)] via-[var(--ys-ink)]/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--ys-ink)]/90 via-[var(--ys-ink)]/40 to-transparent hidden md:block" />
      </div>

      <div className="relative z-10 w-full md:w-2/3 lg:w-1/2 p-6 md:p-10 flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <span className="bg-[var(--ys-primary)] text-white text-[10px] sm:text-xs font-bold px-3 py-1.5 rounded-sm uppercase tracking-widest shadow-lg">
            {badgeText}
          </span>
          <span className="text-white/90 text-sm font-semibold bg-white/10 px-3 py-1 rounded-sm backdrop-blur-md border border-white/10">
            {data.category}
          </span>
        </div>

        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-[1.1] drop-shadow-md group-hover:text-[var(--ys-primary)] transition-colors">
          {title}
        </h2>

        {isEpisode ? (
          <p className="text-white/80 text-sm md:text-base font-medium flex items-center gap-2">
            <span className="text-white font-bold">{episode.speakerName}</span>
            <span className="text-white/40">•</span>
            <span>{episode.company}</span>
          </p>
        ) : (
          <p className="text-white/80 text-sm md:text-base line-clamp-2 md:line-clamp-3">
            {series.description}
          </p>
        )}

        <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm font-semibold text-white/90 mt-2">
          {isEpisode ? (
            <>
              <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-lg backdrop-blur-sm">
                <Clock className="w-4 h-4 text-[var(--ys-primary)]" /> {episode.duration}
              </span>
              <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-lg backdrop-blur-sm">
                <Headphones className="w-4 h-4 text-[var(--ys-primary)]" /> {episode.listenCount} Listens
              </span>
            </>
          ) : (
            <>
              <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-lg backdrop-blur-sm">
                <ListVideo className="w-4 h-4 text-[var(--ys-primary)]" /> {series.episodeCount} Episodes
              </span>
              <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-lg backdrop-blur-sm">
                <Clock className="w-4 h-4 text-[var(--ys-primary)]" /> {series.totalDuration} Total
              </span>
            </>
          )}
        </div>

        <div className="flex flex-wrap items-center gap-4 mt-4">
          <button className="flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-3.5 bg-white text-[var(--ys-ink)] hover:bg-[var(--ys-canvas)] font-bold rounded-xl transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1">
            <PlayCircle className="w-5 h-5 sm:w-6 sm:h-6" />
            <span className="text-sm sm:text-base">{isEpisode ? 'Play Episode' : 'Start Watching'}</span>
          </button>
          
          <button className="flex items-center gap-2 px-6 py-3 sm:py-3.5 bg-black/40 hover:bg-black/60 text-white font-bold rounded-xl transition-all duration-300 backdrop-blur-md border border-white/20 hover:border-white/40">
            <Info className="w-5 h-5" />
            <span className="text-sm sm:text-base">Details</span>
          </button>
        </div>
      </div>
      
    </div>
  )
})

export default FeaturedCard