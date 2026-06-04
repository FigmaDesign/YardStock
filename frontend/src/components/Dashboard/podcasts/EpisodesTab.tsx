import { memo } from 'react'
import PageHeader from './PageHeader'
import FeaturedCard from './FeaturedCard'
import SectionHeader from './SectionHeader'
import EpisodeCard from './EpisodeCard'
import { FEATURED_EPISODE, EPISODES } from './data'

export default memo(function EpisodesTab() {
  return (
    <div className="flex flex-col">
      <PageHeader
        title="Podcasts"
        subtitle="Insights, conversations and ideas from real estate leaders."
      />

      {/* Featured Episode */}
      <div className="px-4 sm:px-5 pb-2">
        <FeaturedCard
          badge={FEATURED_EPISODE.badge}
          badgeVariant="star"
          title={FEATURED_EPISODE.title}
          speaker={FEATURED_EPISODE.speaker}
          role={FEATURED_EPISODE.role}
          duration={FEATURED_EPISODE.duration}
          plays={FEATURED_EPISODE.plays}
        />
      </div>

      {/* Latest Episodes */}
      <SectionHeader title="Latest Episodes" onViewAll={() => {}} />

      <div className="flex flex-col">
        {EPISODES.map((episode) => (
          <EpisodeCard key={episode.id} episode={episode} />
        ))}
      </div>
    </div>
  )
})
