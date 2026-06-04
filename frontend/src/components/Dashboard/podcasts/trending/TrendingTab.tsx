import { memo } from 'react'
import PageHeader from '../PageHeader'
import FeaturedCard from '../FeaturedCard'
import SectionHeader from '../SectionHeader'
import EpisodeCard from '../EpisodeCard'
import { FEATURED_TRENDING, TRENDING_EPISODES, TRENDING_TOPICS } from '../data'

export default memo(function TrendingTab() {
  return (
    <div className="flex flex-col">
      <PageHeader
        title="Trending"
      />

      {/* Trending Now Hero */}
      <div className="px-4 sm:px-5 pb-2">
        <FeaturedCard
          badge={FEATURED_TRENDING.badge}
          badgeVariant="trending"
          title={FEATURED_TRENDING.title}
          subtitle={FEATURED_TRENDING.description}
          speaker={FEATURED_TRENDING.speaker}
          role={FEATURED_TRENDING.role}
          duration={FEATURED_TRENDING.duration}
          plays={FEATURED_TRENDING.plays}
        />
      </div>

      {/* Trending Episodes */}
      <SectionHeader title="Trending Episodes" onViewAll={() => {}} />

      <div className="flex flex-col">
        {TRENDING_EPISODES.map((episode) => (
          <EpisodeCard key={episode.id} episode={episode} />
        ))}
      </div>

      {/* Trending Topics */}
      <SectionHeader title="Trending Topics" onViewAll={() => {}} />

      <div className="flex gap-2.5 px-4 sm:px-5 pb-6 overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        {TRENDING_TOPICS.map((topic) => (
          <button
            key={topic.id}
            type="button"
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-full border border-slate-200 bg-white hover:border-slate-300 hover:shadow-sm active:scale-95 transition-all duration-200 shrink-0 cursor-pointer"
            style={{
              borderColor: `${topic.color}30`,
              backgroundColor: topic.bgColor,
            }}
          >
            <span className="text-[0.85rem]" aria-hidden="true">{topic.icon}</span>
            <span
              className="text-[0.72rem] sm:text-[0.78rem] font-semibold whitespace-nowrap"
              style={{ color: topic.color }}
            >
              {topic.label}
            </span>
          </button>
        ))}
      </div>
    </div>
  )
})
