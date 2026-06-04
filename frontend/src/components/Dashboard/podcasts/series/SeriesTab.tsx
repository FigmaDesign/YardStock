import React from 'react'
import { Play, Clock, ChevronRight, Headphones } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import { SERIES_LIST } from '../data'

export default function SeriesTab() {
  return (
    <div className="flex flex-col w-full pb-8 sm:pb-12">
      <PageHeader
        title="Series"
        subtitle="Deep dives and multi-part explorations"
      />

      <div className="flex flex-col gap-4 sm:gap-6 px-4 sm:px-6 pb-6">
        {SERIES_LIST.map((series) => (
          <article
            key={series.id}
            tabIndex={0}
            className={`group relative rounded-xl border border-slate-100/80 bg-gradient-to-br ${series.bgGradient} bg-white overflow-hidden shadow-sm hover:shadow-xl hover:shadow-slate-200/50 hover:border-slate-200 active:scale-[0.99] transition-all duration-300 cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-400`}
          >
            <div className="flex items-stretch">
              <div
                className="w-2 shrink-0 rounded-l-xl opacity-90 group-hover:opacity-100 transition-opacity"
                style={{ backgroundColor: series.color }}
                aria-hidden="true"
              />

              <div className="flex-1 p-5 sm:p-6 min-w-0">
                <div className="flex items-start justify-between gap-4">
                  <div className="min-w-0 space-y-1">
                    <h3 className="text-base sm:text-lg font-bold text-[#0f172a] leading-snug tracking-tight">
                      {series.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 leading-relaxed line-clamp-2 font-medium">
                      {series.description}
                    </p>
                  </div>

                  <div
                    className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center shrink-0 shadow-inner outline outline-1 outline-black/5 group-hover:scale-105 transition-transform duration-300"
                    style={{ backgroundColor: `${series.color}15` }}
                  >
                    <Headphones size={24} style={{ color: series.color }} strokeWidth={2} aria-hidden="true" />
                  </div>
                </div>

                <div className="flex items-center gap-4 mt-5 pt-4 border-t border-slate-100">
                  <div className="flex items-center gap-2 bg-slate-50 px-2.5 py-1 rounded-full outline outline-1 outline-slate-100">
                    <Play size={12} fill={series.color} stroke={series.color} aria-hidden="true" />
                    <span className="text-xs font-bold tracking-wide" style={{ color: series.color }}>
                      {series.episodeCount} Episodes
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-1.5">
                    <Clock size={14} className="text-slate-400" strokeWidth={2} aria-hidden="true" />
                    <span className="text-xs font-semibold text-slate-500 tracking-wide">
                      {series.totalDuration}
                    </span>
                  </div>
                  
                  <div className="ml-auto">
                    <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-slate-100 transition-colors">
                      <ChevronRight
                        size={18}
                        className="text-slate-400 group-hover:text-[#0f172a] group-hover:translate-x-0.5 transition-all duration-300"
                        aria-hidden="true"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}