import { memo, useMemo } from 'react'
import { PlayCircle, Clock, ListVideo, Star, ChevronRight } from 'lucide-react'
import SectionHeader from '../components/SectionHeader'
import SeriesCard from './SeriesCard'
import { SERIES } from '../data'

export default function SeriesTab() {
  const featuredSeries = useMemo(() => SERIES.find((s) => s.featured) || SERIES[0], [])
  const recentSeries = useMemo(() => SERIES.filter((s) => !s.featured), [])

  return (
    <div className="flex flex-col gap-8 pb-8 pt-2">
      <section aria-labelledby="featured-series-heading" className="ys-fade-in-up motion-reduce:animate-none">
        <h2 id="featured-series-heading" className="sr-only">Featured Series</h2>
        <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-[var(--ys-ink)] to-[var(--ys-ink-soft)] text-white shadow-lg border border-[var(--ys-mute)]/20 group">
          <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
          
          <div className="flex flex-col md:flex-row relative z-20">
            <div className="w-full md:w-2/5 shrink-0 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[var(--ys-ink)] hidden md:block z-10" />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--ys-ink)] to-transparent md:hidden z-10" />
              <img 
                src={featuredSeries.coverUrl} 
                alt={featuredSeries.title}
                className="w-full h-64 md:h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute top-4 left-4 bg-[var(--ys-primary)] text-white text-xs font-bold px-3 py-1.5 rounded-full z-20 flex items-center gap-1.5 shadow-lg">
                <Star className="w-3.5 h-3.5 fill-current" />
                FEATURED SERIES
              </div>
            </div>

            <div className="p-6 md:p-8 lg:p-10 flex flex-col justify-center flex-1">
              <div className="flex flex-wrap items-center gap-3 text-sm text-[var(--ys-canvas)] font-medium mb-4">
                <span className="bg-white/10 px-3 py-1 rounded-full backdrop-blur-sm border border-white/10">{featuredSeries.category}</span>
                <span className="flex items-center gap-1.5"><ListVideo className="w-4 h-4" /> {featuredSeries.episodeCount} Episodes</span>
                <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> {featuredSeries.totalDuration}</span>
              </div>
              
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-extrabold mb-3 leading-tight text-white drop-shadow-sm group-hover:text-[var(--ys-primary)] transition-colors">
                {featuredSeries.title}
              </h3>
              
              <p className="text-[var(--ys-canvas)]/90 text-sm md:text-base leading-relaxed mb-8 max-w-2xl">
                {featuredSeries.description}
              </p>

              <div className="flex flex-wrap items-center gap-4 mt-auto">
                <button className="flex items-center gap-2 px-6 py-3 bg-[var(--ys-primary)] hover:bg-[var(--ys-ink-mid)] text-white font-bold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5">
                  <PlayCircle className="w-5 h-5" />
                  Start Watching
                </button>
                <button className="flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl transition-all duration-300 backdrop-blur-sm border border-white/10">
                  View Episodes
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="browse-series-heading" className="ys-fade-in-up motion-reduce:animate-none [animation-delay:100ms]">
        <div className="flex items-center justify-between mb-6">
          <SectionHeader title="Browse Series" subtitle="Curated collections of deep dives" />
          <div className="hidden sm:flex items-center gap-2">
            <span className="text-sm font-semibold text-[var(--ys-body-mid)]">Sort by:</span>
            <select className="bg-[var(--ys-canvas)] border border-[var(--ys-mute)] text-[var(--ys-ink)] text-sm font-semibold rounded-lg px-3 py-2 focus:ring-2 focus:ring-[var(--ys-primary)] outline-none">
              <option>Newest First</option>
              <option>Most Popular</option>
              <option>Alphabetical</option>
            </select>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {recentSeries.map((series) => (
            <SeriesCard key={series.id} series={series} />
          ))}
        </div>
      </section>
    </div>
  )
}
