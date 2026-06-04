import PageHeader from '../components/PageHeader'
import FeaturedCard from '../components/FeaturedCard'
import SectionHeader from '../components/SectionHeader'
import EpisodeCard from './EpisodeCard'
import { FEATURED_EPISODE, EPISODES } from '../data'

export default function EpisodesTab() {
  return (
    <div className="flex flex-col w-full pb-8 sm:pb-12">
      <PageHeader
        title="Podcasts"
        subtitle="Discover trending discussions and expert insights"
      />

      <div className="px-4 sm:px-6 pb-6 sm:pb-8">
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

      <SectionHeader 
        title="Latest Episodes" 
        onViewAll={() => {}} 
      />

      <div className="flex flex-col gap-2 sm:gap-3 px-2 sm:px-4 pb-6">
        {EPISODES.map((episode) => (
          <EpisodeCard key={episode.id} episode={episode} />
        ))}
      </div>
    </div>
  )
}