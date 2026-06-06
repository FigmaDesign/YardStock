import React from 'react'
import EpisodesTab from './episodes/EpisodesTab'
import SeriesTab from './series/SeriesTab'
import SpeakersTab from './speakers/SpeakersTab'
import TrendingTab from './trending/TrendingTab'

interface PodcastsProps {
  activeSubTab: string
}

const TAB_MAP: Record<string, React.ComponentType> = {
  'Episodes': EpisodesTab,
  'Series': SeriesTab,
  'Speakers': SpeakersTab,
  'Trending': TrendingTab,
}

export default function Podcasts({ activeSubTab }: PodcastsProps) {
  const ActiveComponent = TAB_MAP[activeSubTab] ?? EpisodesTab

  return (
    <div className="flex-1 w-full h-full overflow-y-auto scroll-smooth bg-[var(--ys-canvas)] [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
      <div className="max-w-7xl mx-auto w-full">
        <ActiveComponent />
      </div>
    </div>
  )
}