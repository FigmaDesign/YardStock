import PageHeader from '../components/PageHeader'
import FeaturedCard from '../components/FeaturedCard'
import SectionHeader from '../components/SectionHeader'
import EpisodeCard from '../episodes/EpisodeCard'
import { FEATURED_TRENDING, TRENDING_EPISODES, TRENDING_TOPICS } from '../data'

export default function TrendingTab() {
  return (
    <div className="flex flex-col w-full pb-8 sm:pb-12">
      <PageHeader
        title="Trending"
        subtitle="Discover what everyone is listening to right now"
      />

      <div className="px-4 sm:px-6 pb-6 sm:pb-8">
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

      <SectionHeader title="Trending Episodes" onViewAll={() => {}} />

      <div className="flex flex-col gap-2 sm:gap-3 px-2 sm:px-4 pb-6 sm:pb-8">
        {TRENDING_EPISODES.map((episode) => (
          <EpisodeCard key={episode.id} episode={episode} />
        ))}
      </div>

      <SectionHeader title="Trending Topics" onViewAll={() => {}} />

      <div className="flex gap-3 sm:gap-4 px-4 sm:px-6 pb-6 overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        {TRENDING_TOPICS.map((topic) => (
          <button
            key={topic.id}
            type="button"
            className="group flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full border bg-white shadow-sm hover:shadow-md active:scale-95 transition-all duration-300 shrink-0 cursor-pointer focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:outline-none"
            style={{
              borderColor: `${topic.color}40`,
              backgroundColor: topic.bgColor,
            }}
          >
            <span className="text-base sm:text-lg group-hover:scale-110 transition-transform duration-300" aria-hidden="true">
              {topic.icon}
            </span>
            <span
              className="text-sm font-bold whitespace-nowrap tracking-wide"
              style={{ color: topic.color }}
            >
              {topic.label}
            </span>
          </button>
        ))}
      </div>
    </div>
  )
}