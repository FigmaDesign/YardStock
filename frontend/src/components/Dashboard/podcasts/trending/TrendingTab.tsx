import { memo, useMemo } from 'react'
import { TrendingUp, ArrowUpRight, PlayCircle, Headphones, Clock, Star, Flame, Trophy } from 'lucide-react'
import SectionHeader from '../components/SectionHeader'
import { EPISODES, SERIES, SPEAKERS } from '../data'

export default function TrendingTab() {
  const trendingEpisodes = useMemo(() => EPISODES.filter(e => e.trending).slice(0, 5), [])
  const trendingSeries = useMemo(() => SERIES.filter(s => s.trending).slice(0, 3), [])
  const topSpeakers = useMemo(() => [...SPEAKERS].sort((a, b) => b.rating - a.rating).slice(0, 4), [])

  return (
    <div className="flex flex-col gap-8 pb-8 pt-2">
      
      <section aria-labelledby="trending-overview-heading" className="ys-fade-in-up motion-reduce:animate-none">
        <h2 id="trending-overview-heading" className="sr-only">Trending Overview</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-gradient-to-br from-[var(--ys-ink)] to-[var(--ys-ink-soft)] rounded-2xl p-6 text-white relative overflow-hidden group">
            <div className="absolute -right-6 -top-6 text-white/5 group-hover:scale-110 transition-transform duration-500">
              <Headphones className="w-32 h-32" />
            </div>
            <div className="relative z-10">
              <div className="flex items-center gap-2 text-[var(--ys-primary)] font-bold text-sm mb-2">
                <TrendingUp className="w-4 h-4" /> TOTAL STREAMS THIS WEEK
              </div>
              <div className="text-4xl font-black mb-1">124.5K</div>
              <div className="text-white/80 text-sm flex items-center gap-1">
                <ArrowUpRight className="w-4 h-4 text-emerald-400" /> +12.4% vs last week
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-[var(--ys-primary)] to-[var(--ys-ink-mid)] rounded-2xl p-6 text-white relative overflow-hidden group">
            <div className="absolute -right-6 -top-6 text-white/10 group-hover:scale-110 transition-transform duration-500">
              <Flame className="w-32 h-32" />
            </div>
            <div className="relative z-10">
              <div className="flex items-center gap-2 text-white/80 font-bold text-sm mb-2">
                <Flame className="w-4 h-4" /> HOTTEST CATEGORY
              </div>
              <div className="text-2xl font-black mb-1">Commercial Real Estate</div>
              <div className="text-white/80 text-sm">45K streams this week</div>
            </div>
          </div>

          <div className="bg-[var(--ys-canvas)] border border-[var(--ys-mute)] rounded-2xl p-6 relative overflow-hidden group hover:shadow-md transition-shadow">
            <div className="absolute -right-6 -top-6 text-[var(--ys-mute)]/30 group-hover:scale-110 transition-transform duration-500">
              <Trophy className="w-32 h-32" />
            </div>
            <div className="relative z-10">
              <div className="flex items-center gap-2 text-[var(--ys-body-mid)] font-bold text-sm mb-2 uppercase">
                Top Speaker
              </div>
              <div className="flex items-center gap-3 mt-3">
                <img src={topSpeakers[0]?.avatarUrl} className="w-12 h-12 rounded-full border-2 border-[var(--ys-primary)] object-cover" alt="" />
                <div>
                  <div className="font-bold text-[var(--ys-ink)] text-lg">{topSpeakers[0]?.name}</div>
                  <div className="text-[var(--ys-primary)] text-sm font-semibold">{topSpeakers[0]?.rating} Rating</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        <section aria-labelledby="top-episodes-heading" className="ys-fade-in-up motion-reduce:animate-none [animation-delay:100ms] flex flex-col">
          <div className="flex items-center justify-between mb-5">
            <SectionHeader title="Top 5 Episodes" subtitle="Global ranking this week" />
          </div>
          
          <div className="flex flex-col gap-3 flex-1">
            {trendingEpisodes.map((episode, idx) => (
              <div key={episode.id} className="group flex items-center gap-3 sm:gap-4 p-3 bg-[var(--ys-canvas)] rounded-xl border border-[var(--ys-mute)] hover:border-[var(--ys-ink-mid)] hover:shadow-md transition-all duration-300">
                <div className={`text-xl font-black w-6 text-center ${idx < 3 ? 'text-[var(--ys-primary)]' : 'text-[var(--ys-mute)]'} group-hover:scale-110 transition-transform`}>
                  {idx + 1}
                </div>
                <div className="relative h-14 w-14 sm:h-16 sm:w-16 shrink-0 rounded-lg overflow-hidden border border-[var(--ys-mute)]">
                  <img src={episode.imageUrl} alt="" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                    <PlayCircle className="w-6 h-6 sm:w-8 sm:h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-[var(--ys-ink)] text-sm sm:text-base truncate group-hover:text-[var(--ys-primary)] transition-colors">
                    {episode.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[var(--ys-body)] truncate mt-0.5">
                    {episode.speakerName}
                  </p>
                  <div className="flex items-center gap-3 text-[10px] sm:text-xs font-semibold text-[var(--ys-body-mid)] mt-1.5">
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3 text-[var(--ys-primary)]" /> {episode.duration}</span>
                    <span className="flex items-center gap-1"><Headphones className="w-3 h-3 text-[var(--ys-primary)]" /> {episode.listenCount}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="flex flex-col gap-8 ys-fade-in-up motion-reduce:animate-none [animation-delay:200ms]">
          
          <section aria-labelledby="trending-series-heading">
            <SectionHeader title="Trending Series" subtitle="Most binge-watched collections" />
            <div className="flex flex-col gap-3 mt-5">
              {trendingSeries.map((series, idx) => (
                <div key={series.id} className="group relative rounded-xl overflow-hidden h-28 sm:h-32 border border-[var(--ys-mute)]">
                  <img src={series.coverUrl} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="" />
                  <div className="absolute inset-0 bg-gradient-to-r from-[var(--ys-ink)]/90 to-transparent" />
                  
                  <div className="absolute inset-0 p-4 sm:p-5 flex flex-col justify-center">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="bg-[var(--ys-primary)] text-white text-[10px] font-bold px-2 py-0.5 rounded-sm uppercase tracking-wider">
                        #{idx + 1}
                      </span>
                      <span className="text-white/80 text-xs font-medium">{series.category}</span>
                    </div>
                    <h3 className="text-white font-bold text-lg sm:text-xl drop-shadow-sm group-hover:text-[var(--ys-primary)] transition-colors truncate w-3/4">
                      {series.title}
                    </h3>
                    <p className="text-white/70 text-xs mt-1 truncate w-2/3">
                      {series.episodeCount} Episodes • {series.totalDuration}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section aria-labelledby="rising-speakers-heading">
            <SectionHeader title="Top Rated Speakers" subtitle="Highest listener satisfaction" />
            <div className="grid grid-cols-2 gap-3 mt-5">
              {topSpeakers.slice(0, 4).map((speaker) => (
                <div key={speaker.id} className="flex items-center gap-3 bg-[var(--ys-canvas)] border border-[var(--ys-mute)] rounded-xl p-3 hover:shadow-md transition-shadow group">
                  <img src={speaker.avatarUrl} className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover border-2 border-transparent group-hover:border-[var(--ys-primary)] transition-colors" alt="" />
                  <div className="flex-1 min-w-0">
                    <h4 className="font-bold text-[var(--ys-ink)] text-sm truncate group-hover:text-[var(--ys-primary)] transition-colors">{speaker.name}</h4>
                    <div className="flex items-center gap-1 mt-0.5">
                      <Star className="w-3 h-3 text-[var(--ys-primary)] fill-current" />
                      <span className="text-xs font-bold text-[var(--ys-body)]">{speaker.rating}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

        </div>
      </div>
    </div>
  )
}
