import { memo, useMemo } from 'react'
import { Headphones, Clock, Users, PlayCircle, Heart, Share2, MoreVertical, Loader2 } from 'lucide-react'
import SectionHeader from '../components/SectionHeader'
import FeaturedCard from '../components/FeaturedCard'
import EpisodeCard from './EpisodeCard'
import { EPISODES } from '../data'

export default function EpisodesTab() {
  const featuredEpisode = useMemo(() => EPISODES.find((e) => e.featured) || EPISODES[0], [])
  const recentEpisodes = useMemo(() => EPISODES.filter((e) => !e.featured).slice(0, 4), [])
  const trendingEpisodes = useMemo(() => EPISODES.filter((e) => e.trending).slice(0, 3), [])

  return (
    <div className="flex flex-col gap-8 pb-8 pt-2">
      <section aria-labelledby="featured-episode-heading" className="ys-fade-in-up motion-reduce:animate-none">
        <h2 id="featured-episode-heading" className="sr-only">Featured Episode</h2>
        <FeaturedCard type="episode" data={featuredEpisode} />
      </section>

      <section aria-labelledby="latest-episodes-heading" className="ys-fade-in-up motion-reduce:animate-none [animation-delay:100ms]">
        <SectionHeader title="Latest Episodes" subtitle="Fresh insights from industry leaders" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-5">
          {recentEpisodes.map((episode) => (
            <EpisodeCard key={episode.id} episode={episode} />
          ))}
        </div>
      </section>

      <section aria-labelledby="trending-episodes-heading" className="ys-fade-in-up motion-reduce:animate-none [animation-delay:200ms] bg-gradient-to-br from-[var(--ys-canvas)] to-[var(--ys-canvas-soft)] -mx-4 px-4 py-8 sm:mx-0 sm:px-6 sm:rounded-2xl border-y sm:border border-[var(--ys-mute)]/60">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 id="trending-episodes-heading" className="text-xl font-bold text-[var(--ys-ink)] flex items-center gap-2">
              Trending Now
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--ys-primary)] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--ys-primary)]"></span>
              </span>
            </h2>
            <p className="text-sm text-[var(--ys-body)] mt-1">Most listened episodes this week</p>
          </div>
          <button className="text-sm font-semibold text-[var(--ys-ink-mid)] hover:text-[var(--ys-primary)] transition-colors">
            View Top 10
          </button>
        </div>
        
        <div className="flex flex-col gap-3">
          {trendingEpisodes.map((episode, idx) => (
            <div key={episode.id} className="group flex items-center gap-4 p-3 rounded-xl hover:bg-white border border-transparent hover:border-[var(--ys-mute)] hover:shadow-sm transition-all duration-300">
              <div className="text-2xl font-black text-[var(--ys-mute)] w-6 text-center group-hover:text-[var(--ys-primary)] transition-colors">
                {idx + 1}
              </div>
              <div className="relative h-16 w-16 shrink-0 rounded-lg overflow-hidden border border-[var(--ys-mute)]">
                <img src={episode.imageUrl} alt="" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                  <PlayCircle className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-bold text-[var(--ys-ink)] truncate group-hover:text-[var(--ys-primary)] transition-colors">
                  {episode.title}
                </h3>
                <p className="text-sm text-[var(--ys-body)] truncate mt-0.5">
                  {episode.speakerName} • {episode.company}
                </p>
              </div>
              <div className="hidden sm:flex items-center gap-4 text-sm text-[var(--ys-body-mid)]">
                <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> {episode.duration}</span>
                <span className="flex items-center gap-1.5"><Headphones className="w-4 h-4" /> {episode.listenCount}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="flex justify-center mt-4">
        <button className="flex items-center gap-2 px-6 py-3 bg-[var(--ys-canvas-soft)] hover:bg-[var(--ys-mute)]/30 text-[var(--ys-ink)] font-semibold rounded-xl transition-all duration-300 border border-[var(--ys-mute)]">
          <Loader2 className="w-4 h-4 animate-spin hidden" />
          Load More Episodes
        </button>
      </div>
    </div>
  )
}