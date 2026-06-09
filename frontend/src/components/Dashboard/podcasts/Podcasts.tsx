import React, { useState, useCallback, useRef, useEffect, memo } from 'react'
import PlayArrowIcon from '@mui/icons-material/PlayArrow'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import VerifiedIcon from '@mui/icons-material/Verified'
import GraphicEqIcon from '@mui/icons-material/GraphicEq'
import DeleteIcon from '@mui/icons-material/Delete'
import ShareIcon from '@mui/icons-material/Share'
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'
import FlagOutlinedIcon from '@mui/icons-material/FlagOutlined'

import PodcastTabs from './PodcastTabs'
import { PODCAST_EPISODES, type PodcastEpisode } from './data'

interface EpisodeCardProps {
  episode: PodcastEpisode
}

const EpisodeCard = memo(function EpisodeCard({ episode }: EpisodeCardProps) {
  const [swipeOffset, setSwipeOffset] = useState(0)
  const [isSwiping, setIsSwiping] = useState(false)
  const [moreOpen, setMoreOpen] = useState(false)
  
  const startX = useRef(0)
  const initialOffset = useRef(0)
  const maxSwipe = 80
  const moreMenuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (moreMenuRef.current && !moreMenuRef.current.contains(event.target as Node)) {
        setMoreOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleTouchStart = (e: React.TouchEvent) => {
    startX.current = e.touches[0].clientX
    initialOffset.current = swipeOffset
    setIsSwiping(true)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    const diff = e.touches[0].clientX - startX.current
    let nextOffset = initialOffset.current + diff
    
    if (nextOffset < 0) nextOffset = 0
    if (nextOffset > maxSwipe) nextOffset = maxSwipe
    
    setSwipeOffset(nextOffset)
  }

  const handleTouchEnd = () => {
    setIsSwiping(false)
    setSwipeOffset((prev) => (prev > maxSwipe / 2 ? maxSwipe : 0))
  }

  const handleMenuAction = (e: React.MouseEvent) => {
    e.stopPropagation()
    setMoreOpen(false)
  }

  return (
    <div className={`relative ${moreOpen ? 'z-50' : 'z-0'}`}>
      <div className="absolute inset-y-0 left-0 w-[80px] bg-red-500 flex flex-col items-center justify-center text-white md:hidden">
        <button 
          type="button"
          className="flex flex-col items-center justify-center w-full h-full active:bg-red-600 transition-colors border-none outline-none cursor-pointer bg-transparent"
          onClick={() => console.log('Delete episode', episode.id)}
        >
          <DeleteIcon sx={{ fontSize: 24 }} />
          <span className="text-[10px] font-semibold mt-1">Delete</span>
        </button>
      </div>

      <div 
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        style={{ 
          transform: `translateX(${swipeOffset}px)`,
          transitionDuration: isSwiping ? '0ms' : '200ms',
        }}
        className={`flex items-start gap-2 px-2 py-2 bg-[var(--color-bg-surface)] hover:bg-[var(--color-bg-muted)] transition-colors cursor-pointer group relative w-full ease-out ${moreOpen ? 'z-50' : 'z-10'}`}
      >
        <div 
          className="relative shrink-0 w-[120px] h-[86px] rounded-xl overflow-hidden shadow-sm flex items-center justify-center"
          aria-label={`Play ${episode.title}`}
          role="button"
          tabIndex={0}
        >
          <img
            src={episode.thumbnail}
            alt={episode.speaker}
            className="absolute inset-0 w-full h-full object-cover"
          />
          
          <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors duration-200 z-10 flex items-center justify-center">
            <div className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-[var(--color-text-primary)] shadow-lg transform scale-75 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200">
              <PlayArrowIcon sx={{ fontSize: 24 }} />
            </div>
          </div>

          <div className="absolute bottom-1.5 left-1.5 z-20 flex items-center gap-1 bg-black/70 text-white text-[10px] font-semibold px-1.5 py-0.5 rounded pointer-events-none group-hover:opacity-0 transition-opacity duration-200">
            <GraphicEqIcon sx={{ fontSize: 12 }} />
            {episode.duration}
          </div>
        </div>
        
        <div className="flex-1 min-w-0 pt-0.5 relative">
          <div className="flex items-start justify-between gap-2">
            <div className="min-w-0 flex-1">
              <h3 className="text-[16px] md:text-[12px] font-bold text-[var(--color-text-primary)] leading-snug line-clamp-2">
                {episode.title}
              </h3>
              
              <div className="flex items-center gap-1.5 mt-1.5">
                <div className="w-[18px] h-[18px] rounded-full overflow-hidden shrink-0 shadow-sm flex items-center justify-center border border-[var(--color-border-default)]">
                  <svg viewBox="0 0 100 100" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <linearGradient id="avatarGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#7C3AED" />
                        <stop offset="100%" stopColor="#D946EF" />
                      </linearGradient>
                    </defs>
                    <circle cx="50" cy="50" r="50" fill="url(#avatarGrad)" />
                    <circle cx="50" cy="38" r="18" fill="#FFFFFF" />
                    <path d="M 20 100 Q 50 60 80 100 Z" fill="#FFFFFF" />
                  </svg>
                </div>
                
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
            </div>
            
            <div className="flex items-center gap-1 shrink-0 pt-1 relative" ref={moreMenuRef}>
              <button
                type="button"
                onClick={(e) => { e.stopPropagation(); setMoreOpen(!moreOpen) }}
                className={`w-8 h-8 flex items-center justify-center rounded-full transition-colors duration-150 border-none bg-transparent cursor-pointer ${
                  moreOpen ? 'text-[var(--color-text-primary)] bg-[var(--color-bg-muted)]' : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-bg-muted)]'
                }`}
                aria-label="More options"
                aria-expanded={moreOpen}
                aria-haspopup="menu"
              >
                <MoreVertIcon sx={{ fontSize: 20 }} />
              </button>

              {moreOpen && (
                <div 
                  className="absolute right-0 top-[110%] w-48 bg-[var(--color-bg-surface)] rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.15)] border border-[var(--color-border-default)] z-[60] py-1.5 origin-top-right animate-[fadeScale_0.2s_ease-out]"
                  role="menu"
                >
                  <button 
                    type="button"
                    onClick={handleMenuAction}
                    className="w-full flex items-center gap-3 px-4 py-2.5 text-[13px] font-medium text-[var(--color-text-secondary)] hover:bg-[var(--color-bg-muted)] hover:text-[var(--color-text-primary)] transition-colors border-none bg-transparent cursor-pointer text-left"
                    role="menuitem"
                  >
                    <ShareIcon sx={{ fontSize: 18 }} />
                    Share episode
                  </button>
                  <button 
                    type="button"
                    onClick={handleMenuAction}
                    className="w-full flex items-center gap-3 px-4 py-2.5 text-[13px] font-medium text-[var(--color-text-secondary)] hover:bg-[var(--color-bg-muted)] hover:text-[var(--color-text-primary)] transition-colors border-none bg-transparent cursor-pointer text-left"
                    role="menuitem"
                  >
                    <BookmarkBorderIcon sx={{ fontSize: 18 }} />
                    Save to playlist
                  </button>
                  
                  <div className="h-px bg-[var(--color-border-default)] my-1.5 w-full" />
                  
                  <button 
                    type="button"
                    onClick={handleMenuAction}
                    className="w-full flex items-center gap-3 px-4 py-2.5 text-[13px] font-medium text-[var(--color-text-secondary)] hover:bg-[var(--color-bg-muted)] hover:text-[var(--color-text-primary)] transition-colors border-none bg-transparent cursor-pointer text-left"
                    role="menuitem"
                  >
                    <VisibilityOffIcon sx={{ fontSize: 18 }} />
                    Remove from feed
                  </button>
                  <button 
                    type="button"
                    onClick={handleMenuAction}
                    className="w-full flex items-center gap-3 px-4 py-2.5 text-[13px] font-medium text-red-500 hover:bg-red-50 transition-colors border-none bg-transparent cursor-pointer text-left"
                    role="menuitem"
                  >
                    <FlagOutlinedIcon sx={{ fontSize: 18 }} />
                    Report episode
                  </button>
                </div>
              )}
            </div>
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
      <div className="sticky top-0 z-20 bg-[var(--color-bg-surface)]">
        <PodcastTabs active={activeFilter} onChange={handleFilterChange} />
      </div>
      <div className="max-w-3xl mx-auto w-full overflow-x-hidden">
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