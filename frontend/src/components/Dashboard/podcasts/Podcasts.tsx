import { useState, useCallback, memo } from 'react'
import PlayArrowIcon from '@mui/icons-material/PlayArrow'
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import VerifiedIcon from '@mui/icons-material/Verified'
import GraphicEqIcon from '@mui/icons-material/GraphicEq'

import PodcastTabs from './PodcastTabs'
import { PODCAST_EPISODES, type PodcastEpisode } from './data'

interface EpisodeCardProps {
  episode: PodcastEpisode
}

const EpisodeCard = memo(function EpisodeCard({ episode }: EpisodeCardProps) {
  return (
    <div className="flex items-start gap-3 px-4 py-4 border-b border-[var(--color-border-default)] last:border-b-0 hover:bg-[var(--color-bg-muted)]/50 transition-colors duration-150 cursor-pointer group">
      <div className="relative shrink-0 w-[120px] h-[86px] rounded-xl overflow-hidden shadow-sm">
        <img
          src={episode.thumbnail}
          alt={episode.speaker}
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-1.5 left-1.5 flex items-center gap-1 bg-black/70 text-white text-[10px] font-semibold px-1.5 py-0.5 rounded">
          <GraphicEqIcon sx={{ fontSize: 12 }} />
          {episode.duration}
        </div>
      </div>
      <div className="flex-1 min-w-0 pt-0.5">
        <div className="flex items-start justify-between gap-2">
          <div className="min-w-0 flex-1">
            <h3 className="text-[15px] font-bold text-[var(--color-text-primary)] leading-snug line-clamp-2">
              {episode.title}
            </h3>
            <div className="flex items-center gap-1 mt-1.5">
              <GraphicEqIcon sx={{ fontSize: 14 }} className="text-[var(--color-text-secondary)]" />
              <span className="text-[13px] font-semibold text-[var(--color-text-primary)]">
                {episode.speaker}
              </span>
              {episode.verified && (
                <VerifiedIcon sx={{ fontSize: 14 }} className="text-[var(--color-brand-purple-mid)]" />
              )}
            </div>
            <p className="text-[12px] text-[var(--color-text-secondary)] mt-0.5">
              {episode.role}
            </p>
            <p className="text-[11px] text-[var(--color-text-secondary)] mt-1">
              {episode.listens}  •  {episode.timeAgo}
            </p>
          </div>
          <div className="flex items-center gap-1 shrink-0 pt-1">
            <button
              type="button"
              className="w-10 h-10 rounded-full border-2 border-[var(--color-brand-purple-mid)] flex items-center justify-center text-[var(--color-brand-purple-mid)] hover:bg-[var(--color-brand-purple-mid)] hover:text-white transition-all duration-200 active:scale-90"
              aria-label={`Play ${episode.title}`}
            >
              <PlayArrowIcon sx={{ fontSize: 22 }} />
            </button>
            <button
              type="button"
              className="w-10 h-10 flex items-center justify-center text-[var(--color-text-secondary)] hover:text-[var(--color-brand-purple)] transition-colors duration-150"
              aria-label={`Bookmark ${episode.title}`}
            >
              <BookmarkBorderIcon sx={{ fontSize: 22 }} />
            </button>
            <button
              type="button"
              className="w-8 h-8 flex items-center justify-center text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors duration-150"
              aria-label="More options"
            >
              <MoreVertIcon sx={{ fontSize: 20 }} />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
})

export default function Podcasts() {
  const [activeFilter, setActiveFilter] = useState('all')

  const handleFilterChange = useCallback((key: string) => {
    setActiveFilter(key)
  }, [])

  const filteredEpisodes = activeFilter === 'all'
    ? PODCAST_EPISODES
    : PODCAST_EPISODES.filter(ep => ep.category === activeFilter)

  return (
    <div className="flex-1 w-full h-full overflow-y-auto scroll-smooth bg-[var(--color-bg-surface)] [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
      <div className="sticky top-0 z-20 bg-[var(--color-bg-surface)] border-b border-[var(--color-border-default)]">
        <PodcastTabs active={activeFilter} onChange={handleFilterChange} />
      </div>
      <div className="max-w-3xl mx-auto w-full">
        {filteredEpisodes.map((episode) => (
          <EpisodeCard key={episode.id} episode={episode} />
        ))}
        {filteredEpisodes.length === 0 && (
          <div className="flex flex-col items-center justify-center py-16 px-4 text-center">
            <p className="text-lg font-semibold text-[var(--color-text-secondary)]">No episodes found</p>
            <p className="text-sm text-[var(--color-text-secondary)] mt-1">Try selecting a different category</p>
          </div>
        )}
      </div>
    </div>
  )
}