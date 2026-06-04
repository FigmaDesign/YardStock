import { memo } from 'react'
import { Play, Clock, ChevronRight, Headphones } from 'lucide-react'
import PageHeader from '../PageHeader'
import { SERIES_LIST } from '../data'

export default memo(function SeriesTab() {
  return (
    <div className="flex flex-col">
      <PageHeader
        title="Series"
        
      />

      {/* Series Grid */}
      <div className="flex flex-col gap-3 px-4 sm:px-5 pb-6">
        {SERIES_LIST.map((series) => (
          <article
            key={series.id}
            className={`group relative rounded-lg border border-slate-100/80 bg-gradient-to-br ${series.bgGradient} bg-white overflow-hidden hover:shadow-md hover:border-slate-200/80 active:scale-[0.99] transition-all duration-200 cursor-pointer`}
          >
            <div className="flex items-stretch">
              {/* Color accent bar */}
              <div
                className="w-1.5 shrink-0 rounded-l-lg"
                style={{ backgroundColor: series.color }}
                aria-hidden="true"
              />

              {/* Content */}
              <div className="flex-1 p-4 sm:p-5 min-w-0">
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <h3 className="text-[0.9rem] sm:text-[0.95rem] font-bold text-[#0f172a] leading-snug">
                      {series.title}
                    </h3>
                    <p className="text-[0.72rem] sm:text-[0.78rem] text-slate-500 mt-1 leading-relaxed line-clamp-2">
                      {series.description}
                    </p>
                  </div>

                  {/* Play icon */}
                  <div
                    className="w-10 h-10 sm:w-11 sm:h-11 rounded-lg flex items-center justify-center shrink-0 shadow-sm"
                    style={{ backgroundColor: `${series.color}15` }}
                  >
                    <Headphones size={20} style={{ color: series.color }} strokeWidth={1.8} aria-hidden="true" />
                  </div>
                </div>

                {/* Meta row */}
                <div className="flex items-center gap-3 mt-3">
                  <div className="flex items-center gap-1.5">
                    <Play size={12} fill={series.color} stroke={series.color} aria-hidden="true" />
                    <span className="text-[0.68rem] sm:text-[0.72rem] font-semibold" style={{ color: series.color }}>
                      {series.episodeCount} Episodes
                    </span>
                  </div>
                  <span className="text-slate-300">•</span>
                  <div className="flex items-center gap-1.5">
                    <Clock size={12} className="text-slate-400" strokeWidth={2} aria-hidden="true" />
                    <span className="text-[0.68rem] sm:text-[0.72rem] font-medium text-slate-500">
                      {series.totalDuration}
                    </span>
                  </div>
                  <div className="ml-auto">
                    <ChevronRight
                      size={16}
                      className="text-slate-300 group-hover:text-slate-500 group-hover:translate-x-0.5 transition-all duration-200"
                      aria-hidden="true"
                    />
                  </div>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
})
