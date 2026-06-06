import React, { useState } from "react"
import StarIcon from "@mui/icons-material/Star"
import PlayArrowIcon from "@mui/icons-material/PlayArrow"
import PauseIcon from "@mui/icons-material/Pause"
import SkipNextIcon from "@mui/icons-material/SkipNext"
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious"
import VolumeUpIcon from "@mui/icons-material/VolumeUp"
import CloseIcon from "@mui/icons-material/Close"
import AccessTimeIcon from "@mui/icons-material/AccessTime"
import MoreVertIcon from "@mui/icons-material/MoreVert"
import ChevronRightIcon from "@mui/icons-material/ChevronRight"
import BusinessIcon from "@mui/icons-material/Business"
import ConstructionIcon from "@mui/icons-material/Construction"
import GavelIcon from "@mui/icons-material/Gavel"
import LocationCityIcon from "@mui/icons-material/LocationCity"
import TrendingUpIcon from "@mui/icons-material/TrendingUp"
import HeadphonesIcon from "@mui/icons-material/Headphones"

type EpisodeBadgeType = {
  text: string
  colorClass: string
}

type EpisodeType = {
  id: string
  title: string
  author: string
  role: string
  duration: string
  badge: EpisodeBadgeType
}

type TopicType = {
  id: string
  title: string
  subtitle: string
  count: number
  icon: React.ReactNode
  iconBgClass: string
  countColorClass: string
}

const LATEST_EPISODES: EpisodeType[] = [
  {
    id: "e1",
    title: "How Builders Can Scale in 2025",
    author: "Amit Verma",
    role: "Builder E.L.",
    duration: "32:45",
    badge: { text: "REAL\nESTATE\nINSIGHTS", colorClass: "bg-[#6B21A8]" },
  },
  {
    id: "e2",
    title: "Challenges & Opportunities in Real Estate",
    author: "Sandeep Kumar",
    role: "CEO, SmartBuild",
    duration: "28:30",
    badge: { text: "BUILD\nSMART", colorClass: "bg-[#B45309]" },
  },
  {
    id: "e3",
    title: "Legal Aspects Every Investor Should Know",
    author: "Adv. Priya Nair",
    role: "Real Estate Legal",
    duration: "29:10",
    badge: { text: "LEGAL\nPERSPECTIVE", colorClass: "bg-[#5B21B6]" },
  },
  {
    id: "e4",
    title: "Smart City Projects: Future of Urban Living",
    author: "Vikram Patel",
    role: "Urban Planners Co.",
    duration: "35:20",
    badge: { text: "SMART\nCITIES", colorClass: "bg-[#0D9488]" },
  },
  {
    id: "e5",
    title: "Financing Strategies for Real Estate Growth",
    author: "Neera Joshi",
    role: "Financial Advisor",
    duration: "31:05",
    badge: { text: "FINANCE\nFOCUS", colorClass: "bg-[#B91C1C]" },
  },
]

const EXPLORE_TOPICS: TopicType[] = [
  {
    id: "t1",
    title: "Real Estate Insights",
    subtitle: "Market insights, trends & forecasts",
    count: 12,
    icon: <BusinessIcon className="w-4 h-4 @sm:w-5 @sm:h-5 text-white" />,
    iconBgClass: "bg-[#6B21A8]",
    countColorClass: "text-[#6B21A8]",
  },
  {
    id: "t2",
    title: "Builder's Talk",
    subtitle: "Conversations with industry leaders",
    count: 10,
    icon: <ConstructionIcon className="w-4 h-4 @sm:w-5 @sm:h-5 text-white" />,
    iconBgClass: "bg-[#B45309]",
    countColorClass: "text-[#B45309]",
  },
  {
    id: "t3",
    title: "Legal Perspective",
    subtitle: "Laws, regulations & compliance",
    count: 8,
    icon: <GavelIcon className="w-4 h-4 @sm:w-5 @sm:h-5 text-white" />,
    iconBgClass: "bg-[#5B21B6]",
    countColorClass: "text-[#5B21B6]",
  },
  {
    id: "t4",
    title: "Smart Cities",
    subtitle: "Urban development & innovation",
    count: 9,
    icon: <LocationCityIcon className="w-4 h-4 @sm:w-5 @sm:h-5 text-white" />,
    iconBgClass: "bg-[#D946EF]",
    countColorClass: "text-[#A8155F]",
  },
  {
    id: "t5",
    title: "Finance Focus",
    subtitle: "Investment, funding & strategies",
    count: 11,
    icon: <TrendingUpIcon className="w-4 h-4 @sm:w-5 @sm:h-5 text-white" />,
    iconBgClass: "bg-[#B91C1C]",
    countColorClass: "text-[#B91C1C]",
  },
]

const FEATURED_EPISODE_DATA: EpisodeType = {
  id: "featured-1",
  title: "Future of Real Estate in India 2025",
  author: "Rajesh Sharma",
  role: "Founder, Finwise Solutions",
  duration: "34:15",
  badge: { text: "FEATURED", colorClass: "bg-slate-800" }
}

function FeaturedEpisode({ onPlay, isPlaying }: { onPlay: () => void, isPlaying: boolean }) {
  return (
    <div className="relative w-full rounded-lg overflow-hidden bg-gradient-to-br from-slate-900 via-purple-950/80 to-slate-900 min-h-[160px] @sm:min-h-[320px] shadow-md cursor-pointer" onClick={onPlay}>
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" viewBox="0 0 100 100">
          <path d="M0 100 L 20 60 L 40 80 L 60 40 L 80 50 L 100 20 L 100 100 Z" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-[#D946EF]/50" />
          <path d="M0 100 L 25 70 L 45 90 L 65 50 L 85 60 L 100 30 L 100 100 Z" fill="none" stroke="currentColor" strokeWidth="1" className="text-[#7C3AED]/50" />
        </svg>
      </div>
      <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-[#D946EF]/10 to-transparent pointer-events-none mix-blend-overlay" />
      <div className="relative z-10 flex flex-col justify-between p-4 @sm:p-8 h-full min-h-[160px] @sm:min-h-[320px]">
        <div className="flex">
          <span className="inline-flex items-center gap-1 @sm:gap-1.5 px-2 @sm:px-3 py-1 @sm:py-1.5 rounded text-[10px] @sm:text-xs font-bold tracking-widest bg-[#6B21A8] text-white shadow-sm uppercase shrink-0">
            <StarIcon className="w-3 h-3 @sm:w-4 @sm:h-4" />
            Featured
          </span>
        </div>
        <div className="mt-4 @sm:mt-8 space-y-3 @sm:space-y-6 max-w-lg">
          <h2 className="text-xl @sm:text-4xl font-bold text-white leading-tight tracking-tight drop-shadow-sm">
            {FEATURED_EPISODE_DATA.title}
          </h2>
          <div className="flex items-center gap-2 @sm:gap-3">
            <img src="https://i.pravatar.cc/150?u=rajesh" alt="Rajesh Sharma" className="w-8 h-8 @sm:w-12 @sm:h-12 rounded border @sm:border-2 border-white/20 object-cover shrink-0" />
            <div className="flex flex-col min-w-0">
              <p className="text-sm @sm:text-lg font-semibold text-white leading-tight truncate">{FEATURED_EPISODE_DATA.author}</p>
              <p className="text-[11px] @sm:text-sm font-medium text-slate-300 mt-0.5 @sm:mt-1 truncate">{FEATURED_EPISODE_DATA.role}</p>
            </div>
          </div>
          <div className="flex items-center gap-3 @sm:gap-4 pt-1 @sm:pt-2">
            <button type="button" className="w-8 h-8 @sm:w-12 @sm:h-12 rounded bg-white flex items-center justify-center shadow-lg hover:bg-gray-50 active:scale-95 transition-all focus:outline-none focus:ring-2 focus:ring-white shrink-0">
              {isPlaying ? <PauseIcon className="text-slate-900 w-4 h-4 @sm:w-6 @sm:h-6" /> : <PlayArrowIcon className="text-slate-900 w-4 h-4 @sm:w-6 @sm:h-6" />}
            </button>
            <div className="flex items-center gap-1.5 @sm:gap-2 text-slate-200 min-w-0">
              <AccessTimeIcon className="w-3 h-3 @sm:w-4 @sm:h-4 shrink-0" />
              <span className="text-xs @sm:text-sm font-semibold tracking-wide shrink-0">{FEATURED_EPISODE_DATA.duration}</span>
              <span className="text-[10px] @sm:text-xs text-slate-400 shrink-0">•</span>
              <span className="text-xs @sm:text-sm font-medium truncate">2.3K Plays</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function EpisodeListItem({ episode, onPlay, isPlaying }: { episode: EpisodeType, onPlay: () => void, isPlaying: boolean }) {
  return (
    <div className="group flex items-center p-2.5 @sm:p-4 gap-2.5 @sm:gap-4 hover:bg-white rounded-lg hover:border hover:border-slate-100 hover:shadow-sm transition-shadow cursor-pointer w-full" onClick={onPlay}>
      <div className={`relative overflow-hidden shrink-0 w-12 h-12 @sm:w-16 @sm:h-16 rounded flex items-center justify-center p-1 @sm:p-1.5 ${episode.badge.colorClass}`}>
        <span className={`text-[8px] @sm:text-[10px] font-bold text-white leading-tight text-center whitespace-pre-wrap uppercase tracking-wider transition-opacity duration-200 ${isPlaying ? 'opacity-0' : 'group-hover:opacity-0'}`}>
          {episode.badge.text}
        </span>
        <div className={`absolute inset-0 bg-black/40 flex items-center justify-center transition-opacity duration-200 ${isPlaying ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}>
          {isPlaying ? <PauseIcon className="text-white w-6 h-6 @sm:w-8 @sm:h-8" /> : <PlayArrowIcon className="text-white w-6 h-6 @sm:w-8 @sm:h-8" />}
        </div>
      </div>
      <div className="flex-1 min-w-0 flex flex-col justify-center py-0.5">
        <h3 className={`text-[14px] @sm:text-base font-bold leading-snug truncate ${isPlaying ? 'text-[#6B21A8]' : 'text-slate-900'}`}>
          {episode.title}
        </h3>
        <p className="text-[11px] @sm:text-sm text-slate-600 font-medium mt-0.5 @sm:mt-1 truncate">
          {episode.author}
          <span className="mx-1 @sm:mx-1.5 text-slate-300">•</span>
          {episode.role}
        </p>
      </div>
      <div className="flex items-center gap-2 @sm:gap-4 shrink-0 pl-1 @sm:pl-2">
        <span className="hidden @sm:block text-[11px] @sm:text-sm font-medium text-slate-400 tabular-nums shrink-0">{episode.duration}</span>
        <button type="button" className="shrink-0 text-slate-400 hover:text-slate-600 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-200 rounded p-1 @sm:p-1.5" onClick={(e) => e.stopPropagation()}>
          <MoreVertIcon className="w-4 h-4 @sm:w-5 @sm:h-5" />
        </button>
      </div>
    </div>
  )
}

function TopicListItem({ topic }: { topic: TopicType }) {
  return (
    <button type="button" className="flex items-center gap-2.5 @sm:gap-4 p-2.5 @sm:p-4 w-full text-left hover:bg-white hover:rounded-lg hover:border hover:border-slate-100 hover:shadow-md transition-shadow focus:outline-none focus:ring-2 focus:ring-slate-200 group">
      <div className={`shrink-0 w-10 h-10 @sm:w-12 @sm:h-12 rounded flex items-center justify-center ${topic.iconBgClass}`}>
        {topic.icon}
      </div>
      <div className="flex-1 min-w-0 py-0.5">
        <h4 className="text-[14px] @sm:text-base font-bold text-slate-900 leading-snug truncate">{topic.title}</h4>
        <p className="text-[11px] @sm:text-sm text-slate-600 mt-0.5 @sm:mt-1 truncate">{topic.subtitle}</p>
        <p className={`text-[11px] @sm:text-xs font-bold mt-1 @sm:mt-1.5 ${topic.countColorClass}`}>
          {topic.count} Episodes
        </p>
      </div>
      <ChevronRightIcon className="shrink-0 text-slate-400 group-hover:text-slate-600 transition-colors w-4 h-4 @sm:w-5 @sm:h-5" />
    </button>
  )
}

function PlayerBar({ episode, isPlaying, onTogglePlay, onClose }: { episode: EpisodeType, isPlaying: boolean, onTogglePlay: () => void, onClose: () => void }) {
  return (
    <div className="fixed bottom-[60px] left-0 right-0 bg-[#18181b] border-t border-[#27272a] shadow-[0_-8px_24px_rgba(0,0,0,0.3)] z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-3 @sm:px-6 h-[72px] gap-2 @sm:gap-6">
        <div className="flex items-center gap-2 flex-1 min-w-0">
          <div className="flex flex-col min-w-0">
            <p className="text-[13px] font-bold text-white truncate">{episode.title}</p>
            <p className="text-[10px] text-slate-400 truncate mt-0.5">{episode.author}</p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center flex-[2] w-full max-w-[400px]">
          <div className="flex items-center gap-3">
            <button className="text-slate-400 hover:text-white"><SkipPreviousIcon fontSize="small" /></button>
            <button className="w-8 h-8 rounded bg-white flex items-center justify-center" onClick={onTogglePlay}>
              {isPlaying ? <PauseIcon className="text-[#18181b]" /> : <PlayArrowIcon className="text-[#18181b]" />}
            </button>
            <button className="text-slate-400 hover:text-white"><SkipNextIcon fontSize="small" /></button>
          </div>
          <div className="w-full h-1 bg-[#4d4d50] rounded-full mt-1 overflow-hidden">
            <div className="h-full bg-gradient-to-r from-[#7C3AED] to-[#D946EF] w-1/3" />
          </div>
        </div>
        <button className="text-slate-400 hover:text-white" onClick={onClose}><CloseIcon fontSize="small" /></button>
      </div>
    </div>
  )
}

export default function EpisodesTab() {
  const [playingEpisode, setPlayingEpisode] = useState<EpisodeType | null>(null)
  const [isPlaying, setIsPlaying] = useState<boolean>(false)

  const handlePlayEpisode = (episode: EpisodeType) => {
    if (playingEpisode?.id === episode.id) setIsPlaying(!isPlaying)
    else { setPlayingEpisode(episode); setIsPlaying(true) }
  }

  return (
    <div className={`@container min-h-screen bg-slate-50 text-slate-900 ${playingEpisode ? 'pb-[132px]' : 'pb-8'} w-full overflow-x-hidden`} style={{ fontFamily: "'Outfit', sans-serif" }}>
      <div className="max-w-7xl mx-auto px-2 @sm:px-2 @lg:px-8 py-4 @sm:py-8 w-full">
        <header className="mb-4 @sm:mb-8">
          <h1 className="text-2xl @sm:text-4xl font-extrabold text-slate-900 tracking-tight">Podcasts</h1>
        </header>
        <div className="grid grid-cols-1 @lg:grid-cols-12 gap-4 @sm:gap-8 w-full">
          <div className="@lg:col-span-8 w-full space-y-4 @sm:space-y-8">
            <FeaturedEpisode onPlay={() => handlePlayEpisode(FEATURED_EPISODE_DATA)} isPlaying={playingEpisode?.id === FEATURED_EPISODE_DATA.id && isPlaying} />
            <section className="w-full">
              <div className="flex items-center justify-between mb-3 @sm:mb-5">
                <h2 className="text-xl @sm:text-2xl font-bold text-slate-900 tracking-tight">Latest Episodes</h2>
                <button className="text-xs @sm:text-sm font-semibold text-[#6B21A8] hover:text-[#5B21B6]">View all</button>
              </div>
              <div className="space-y-2 @sm:space-y-4 w-full">
                {LATEST_EPISODES.map((episode) => (
                  <EpisodeListItem key={episode.id} episode={episode} onPlay={() => handlePlayEpisode(episode)} isPlaying={playingEpisode?.id === episode.id && isPlaying} />
                ))}
              </div>
            </section>
          </div>
          <div className="@lg:col-span-4 w-full space-y-4 @sm:space-y-8">
            <section className="w-full">
              <div className="mb-3 @sm:mb-5">
                <h3 className="text-xl @sm:text-2xl font-bold text-slate-900 tracking-tight">Explore by Topics</h3>
              </div>
              <div className="space-y-2 @sm:space-y-4 w-full">
                {EXPLORE_TOPICS.map((topic) => <TopicListItem key={topic.id} topic={topic} />)}
              </div>
            </section>
            <div className="bg-[#7C3AED]/10 rounded-lg p-3 @sm:p-5 flex items-center gap-3 @sm:gap-4 border border-[#7C3AED]/20 w-full">
              <div className="shrink-0 w-10 h-10 rounded bg-white flex items-center justify-center text-[#6B21A8] shadow-sm">
                <HeadphonesIcon />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-[14px] @sm:text-base font-bold text-slate-900 leading-snug truncate">Love podcasts?</h4>
                <p className="text-[11px] @sm:text-sm text-slate-600 mt-0.5 truncate">Subscribe to never miss an episode</p>
              </div>
              <button className="shrink-0 bg-gradient-to-r from-[#7C3AED] to-[#D946EF] hover:from-[#6B21A8] hover:to-[#E91E8C] text-white text-xs @sm:text-sm font-bold px-3 py-2 rounded transition-all active:scale-95 duration-200">Subscribe</button>
            </div>
          </div>
        </div>
      </div>
      {playingEpisode && <PlayerBar episode={playingEpisode} isPlaying={isPlaying} onTogglePlay={() => setIsPlaying(!isPlaying)} onClose={() => setPlayingEpisode(null)} />}
    </div>
  )
}