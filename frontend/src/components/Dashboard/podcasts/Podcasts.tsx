import { memo } from 'react'
import EpisodesTab from './episodes/EpisodesTab'
import SeriesTab from './series/SeriesTab'
import SpeakersTab from './speakers/SpeakersTab'
import TrendingTab from './trending/TrendingTab'

interface PodcastsProps {
  activeSubTab: string
}

const TAB_MAP: Record<string, React.ComponentType> = {
  'Episodes':  EpisodesTab,
  'Series':    SeriesTab,
  'Speakers':  SpeakersTab,
  'Trending':  TrendingTab,
}

export default memo(function Podcasts({ activeSubTab }: PodcastsProps) {
  const ActiveComponent = TAB_MAP[activeSubTab] ?? EpisodesTab

  return (
    <div className="flex-1 overflow-y-auto bg-white [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
      <ActiveComponent />
    </div>
  )
})
