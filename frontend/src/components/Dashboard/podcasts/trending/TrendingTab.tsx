import { useState } from 'react'
// removed unused StarIcon
import TrendingUpIcon from '@mui/icons-material/TrendingUp'
import PlayArrowIcon from '@mui/icons-material/PlayArrow'
import PauseIcon from '@mui/icons-material/Pause'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import WhatshotIcon from '@mui/icons-material/Whatshot'
import SkipNextIcon from '@mui/icons-material/SkipNext'
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious'
import CloseIcon from '@mui/icons-material/Close'
import { FEATURED_TRENDING, TRENDING_EPISODES, TRENDING_TOPICS } from '../data'
import podcastBg from '../Images/Podcast_bg.png'

type TrendingEpisode = (typeof TRENDING_EPISODES)[number]
type TrendingTopic = (typeof TRENDING_TOPICS)[number]

function FeaturedTrending({ onPlay, isPlaying }: { onPlay: () => void; isPlaying: boolean }) {
  return (
    <div
      className="relative w-full rounded-lg overflow-hidden min-h-[160px] @sm:min-h-[320px] shadow-md cursor-pointer"
      onClick={onPlay}
    >
      <img
        src={podcastBg}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-linear-to-br from-[var(--ys-ink)]/92 via-[var(--ys-ink-soft)]/85 to-[var(--ys-ink)]/70" />
      <div className="absolute right-0 top-0 w-1/2 h-full bg-linear-to-l from-[var(--ys-accent-orange)]/20 to-transparent mix-blend-overlay pointer-events-none" />

      <div className="relative z-10 flex flex-col justify-between p-4 @sm:p-8 h-full min-h-[160px] @sm:min-h-[320px]">
        <div className="flex">
          <span className="inline-flex items-center gap-1 @sm:gap-1.5 px-2 @sm:px-3 py-1 @sm:py-1.5 rounded text-[10px] @sm:text-xs font-bold tracking-widest bg-[var(--ys-accent-orange)] text-white shadow-sm uppercase shrink-0">
            <TrendingUpIcon style={{ fontSize: 12 }} />
            {FEATURED_TRENDING.badge}
          </span>
        </div>

        <div className="mt-4 @sm:mt-8 space-y-3 @sm:space-y-6 max-w-lg">
          <div>
            <h2 className="text-xl @sm:text-4xl font-bold text-white leading-tight tracking-tight drop-shadow-sm">
              {FEATURED_TRENDING.title}
            </h2>
            <p className="text-sm @sm:text-base text-white/70 mt-1 @sm:mt-2 leading-snug max-w-sm line-clamp-2">
              {FEATURED_TRENDING.description}
            </p>
          </div>

          <div className="flex items-center gap-2 @sm:gap-3">
            <img
              src="https://i.pravatar.cc/150?img=12"
              alt={FEATURED_TRENDING.speaker}
              className="w-8 h-8 @sm:w-12 @sm:h-12 rounded border @sm:border-2 border-white/20 object-cover shrink-0"
            />
            <div className="flex flex-col min-w-0">
              <p className="text-sm @sm:text-lg font-semibold text-white leading-tight truncate">{FEATURED_TRENDING.speaker}</p>
              <p className="text-[11px] @sm:text-sm font-medium text-slate-300 mt-0.5 @sm:mt-1 truncate">{FEATURED_TRENDING.role}</p>
            </div>
          </div>

          <div className="flex items-center gap-3 @sm:gap-4 pt-1 @sm:pt-2">
            <button
              type="button"
              aria-label={isPlaying ? 'Pause episode' : 'Play episode'}
              className="w-8 h-8 @sm:w-12 @sm:h-12 rounded bg-white flex items-center justify-center shadow-lg hover:bg-gray-50 active:scale-95 transition-all focus:outline-none focus:ring-2 focus:ring-white shrink-0"
              onClick={(e) => { e.stopPropagation(); onPlay() }}
            >
              {isPlaying
                ? <PauseIcon className="text-slate-900" style={{ fontSize: 20 }} />
                : <PlayArrowIcon className="text-slate-900" style={{ fontSize: 20 }} />}
            </button>
            <div className="flex items-center gap-1.5 @sm:gap-2 text-slate-200 min-w-0">
              <AccessTimeIcon style={{ fontSize: 16 }} className="shrink-0" />
              <span className="text-xs @sm:text-sm font-semibold tracking-wide shrink-0">{FEATURED_TRENDING.duration}</span>
              <span className="text-[10px] @sm:text-xs text-slate-400 shrink-0">•</span>
              <span className="text-xs @sm:text-sm font-medium truncate">{FEATURED_TRENDING.plays}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function TrendingEpisodeItem({
  episode,
  onPlay,
  isPlaying,
}: {
  episode: TrendingEpisode
  onPlay: () => void
  isPlaying: boolean
}) {
  return (
    <div
      className="group flex items-center p-2.5 @sm:p-4 gap-2.5 @sm:gap-4 hover:bg-[var(--ys-surface-alt)] rounded-lg hover:border hover:border-[var(--ys-mute)] hover:shadow-sm transition-all duration-200 cursor-pointer w-full"
      onClick={onPlay}
    >
      <div
        className="relative overflow-hidden shrink-0 w-12 h-12 @sm:w-16 @sm:h-16 rounded flex items-center justify-center p-1 @sm:p-1.5"
        style={{ backgroundColor: episode.thumbnailColor }}
      >
        <span
          className={`text-[8px] @sm:text-[10px] font-bold text-white leading-tight text-center whitespace-pre-wrap uppercase tracking-wider transition-opacity duration-200 ${isPlaying ? 'opacity-0' : 'group-hover:opacity-0'}`}
        >
          {episode.thumbnailLabel}
          {episode.thumbnailSubLabel ? `\n${episode.thumbnailSubLabel}` : ''}
        </span>
        <div
          className={`absolute inset-0 bg-black/40 flex items-center justify-center transition-opacity duration-200 ${isPlaying ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}
        >
          {isPlaying
            ? <PauseIcon className="text-white" style={{ fontSize: 24 }} />
            : <PlayArrowIcon className="text-white" style={{ fontSize: 24 }} />}
        </div>
      </div>

      <div className="flex-1 min-w-0 flex flex-col justify-center py-0.5">
        <h3 className={`text-[14px] @sm:text-base font-bold leading-snug truncate ${isPlaying ? 'text-[var(--ys-accent-orange)]' : 'text-[var(--ys-ink)]'}`}>
          {episode.title}
        </h3>
        <p className="text-[11px] @sm:text-sm text-[var(--ys-body)] font-medium mt-0.5 @sm:mt-1 truncate">
          {episode.speaker}
          <span className="mx-1 @sm:mx-1.5 text-[var(--ys-mute)]">•</span>
          {episode.role}
        </p>
      </div>

      <div className="flex items-center gap-2 @sm:gap-4 shrink-0 pl-1 @sm:pl-2">
        <span className="hidden @sm:block text-[11px] @sm:text-sm font-medium text-[var(--ys-body-accent)] tabular-nums shrink-0">
          {episode.duration}
        </span>
        <button
          type="button"
          aria-label="More options"
          className="shrink-0 text-[var(--ys-body-accent)] hover:text-[var(--ys-body)] transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--ys-mute)] rounded p-1 @sm:p-1.5"
          onClick={(e) => e.stopPropagation()}
        >
          <MoreVertIcon style={{ fontSize: 18 }} />
        </button>
      </div>
    </div>
  )
}

function TopicListItem({ topic }: { topic: TrendingTopic }) {
  return (
    <button
      type="button"
      className="flex items-center gap-2.5 @sm:gap-4 p-2.5 @sm:p-4 w-full text-left hover:bg-[var(--ys-surface-alt)] hover:rounded-lg hover:border hover:border-[var(--ys-mute)] hover:shadow-md transition-shadow focus:outline-none focus:ring-2 focus:ring-[var(--ys-mute)] group"
    >
      <div
        className="shrink-0 w-10 h-10 @sm:w-12 @sm:h-12 rounded flex items-center justify-center text-xl"
        style={{ backgroundColor: topic.bgColor }}
      >
        <span role="img" aria-hidden="true">{topic.icon}</span>
      </div>
      <div className="flex-1 min-w-0 py-0.5">
        <h4 className="text-[14px] @sm:text-base font-bold text-[var(--ys-ink)] leading-snug truncate">{topic.label}</h4>
        <p className="text-[11px] @sm:text-xs font-bold mt-1 @sm:mt-1.5" style={{ color: topic.color }}>
          Trending
        </p>
      </div>
      <ChevronRightIcon
        className="shrink-0 text-[var(--ys-body-accent)] group-hover:text-[var(--ys-body)] transition-colors"
        style={{ fontSize: 20 }}
      />
    </button>
  )
}

function PlayerBar({
  episode,
  isPlaying,
  onTogglePlay,
  onClose,
}: {
  episode: TrendingEpisode
  isPlaying: boolean
  onTogglePlay: () => void
  onClose: () => void
}) {
  return (
    <div className="fixed bottom-[60px] left-0 right-0 bg-[#18181b] border-t border-[#27272a] shadow-[0_-8px_24px_rgba(0,0,0,0.3)] z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-3 @sm:px-6 h-[72px] gap-2 @sm:gap-6">
        <div className="flex items-center gap-2 flex-1 min-w-0">
          <div className="flex flex-col min-w-0">
            <p className="text-[13px] font-bold text-white truncate">{episode.title}</p>
            <p className="text-[10px] text-slate-400 truncate mt-0.5">{episode.speaker}</p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center flex-[2] w-full max-w-[400px]">
          <div className="flex items-center gap-3">
            <button type="button" aria-label="Previous" className="text-slate-400 hover:text-white">
              <SkipPreviousIcon fontSize="small" />
            </button>
            <button
              type="button"
              aria-label={isPlaying ? 'Pause' : 'Play'}
              className="w-8 h-8 rounded bg-white flex items-center justify-center"
              onClick={onTogglePlay}
            >
              {isPlaying
                ? <PauseIcon className="text-[#18181b]" />
                : <PlayArrowIcon className="text-[#18181b]" />}
            </button>
            <button type="button" aria-label="Next" className="text-slate-400 hover:text-white">
              <SkipNextIcon fontSize="small" />
            </button>
          </div>
          <div className="w-full h-1 bg-[#4d4d50] rounded-full mt-1 overflow-hidden">
            <div className="h-full bg-emerald-500 w-1/3" />
          </div>
        </div>
        <button type="button" aria-label="Close player" className="text-slate-400 hover:text-white" onClick={onClose}>
          <CloseIcon fontSize="small" />
        </button>
      </div>
    </div>
  )
}

const FEATURED_TRENDING_EPISODE: TrendingEpisode = {
  id: 'tr-featured',
  title: FEATURED_TRENDING.title,
  speaker: FEATURED_TRENDING.speaker,
  role: FEATURED_TRENDING.role,
  duration: FEATURED_TRENDING.duration,
  plays: FEATURED_TRENDING.plays,
  timeAgo: '',
  thumbnailColor: '#1d4ed8',
  thumbnailLabel: 'TRENDING',
  thumbnailSubLabel: 'NOW',
}

export default function TrendingTab() {
  const [playingEpisode, setPlayingEpisode] = useState<TrendingEpisode | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)

  const handlePlay = (episode: TrendingEpisode) => {
    if (playingEpisode?.id === episode.id) setIsPlaying(!isPlaying)
    else { setPlayingEpisode(episode); setIsPlaying(true) }
  }

  return (
    <div
      className={`@container min-h-screen bg-[var(--ys-canvas)] text-[var(--ys-ink)] ${playingEpisode ? 'pb-[132px]' : 'pb-8'} w-full overflow-x-hidden`}
      style={{ fontFamily: "'Outfit', sans-serif" }}
    >
      <div className="max-w-7xl mx-auto px-2 @sm:px-2 @lg:px-8 py-4 @sm:py-8 w-full">
        <header className="mb-4 @sm:mb-8">
          <h1 className="text-2xl @sm:text-4xl font-extrabold text-[var(--ys-ink)] tracking-tight">Trending</h1>
        </header>

        <div className="grid grid-cols-1 @lg:grid-cols-12 gap-4 @sm:gap-8 w-full">
          <div className="@lg:col-span-8 w-full space-y-4 @sm:space-y-8">
            <FeaturedTrending
              onPlay={() => handlePlay(FEATURED_TRENDING_EPISODE)}
              isPlaying={playingEpisode?.id === FEATURED_TRENDING_EPISODE.id && isPlaying}
            />

            <section className="w-full">
              <div className="flex items-center justify-between mb-3 @sm:mb-5">
                <h2 className="text-xl @sm:text-2xl font-bold text-[var(--ys-ink)] tracking-tight">Trending Episodes</h2>
                <button type="button" className="text-xs @sm:text-sm font-semibold text-[var(--ys-accent-orange)] hover:text-[var(--ys-accent-light)]">
                  View all
                </button>
              </div>
              <div className="space-y-2 @sm:space-y-4 w-full">
                {TRENDING_EPISODES.map((episode) => (
                  <TrendingEpisodeItem
                    key={episode.id}
                    episode={episode}
                    onPlay={() => handlePlay(episode)}
                    isPlaying={playingEpisode?.id === episode.id && isPlaying}
                  />
                ))}
              </div>
            </section>
          </div>

          <div className="@lg:col-span-4 w-full space-y-4 @sm:space-y-8">
            <section className="w-full">
              <div className="mb-3 @sm:mb-5">
                <h3 className="text-xl @sm:text-2xl font-bold text-[var(--ys-ink)] tracking-tight">Trending Topics</h3>
              </div>
              <div className="space-y-2 @sm:space-y-4 w-full">
                {TRENDING_TOPICS.map((topic) => (
                  <TopicListItem key={topic.id} topic={topic} />
                ))}
              </div>
            </section>

            <div className="bg-[var(--ys-accent-orange)]/10 rounded-lg p-3 @sm:p-5 flex items-center gap-3 @sm:gap-4 border border-[var(--ys-accent-orange)]/20 w-full">
              <div className="shrink-0 w-10 h-10 rounded bg-[var(--ys-canvas)] flex items-center justify-center text-[var(--ys-accent-orange)] shadow-sm">
                <WhatshotIcon />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-[14px] @sm:text-base font-bold text-[var(--ys-ink)] leading-snug truncate">Stay on trend</h4>
                <p className="text-[11px] @sm:text-sm text-[var(--ys-body)] mt-0.5 truncate">Subscribe for weekly trending picks</p>
              </div>
              <button
                type="button"
                className="shrink-0 bg-linear-to-r from-[var(--ys-accent-orange)] to-[var(--ys-accent-light)] text-white text-xs @sm:text-sm font-bold px-3 py-2 rounded"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {playingEpisode && (
        <PlayerBar
          episode={playingEpisode}
          isPlaying={isPlaying}
          onTogglePlay={() => setIsPlaying(!isPlaying)}
          onClose={() => setPlayingEpisode(null)}
        />
      )}
    </div>
  )
}
