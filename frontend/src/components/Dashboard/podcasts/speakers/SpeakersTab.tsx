import React from 'react'
import StarIcon from '@mui/icons-material/Star'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import TrendingUpIcon from '@mui/icons-material/TrendingUp'
import GavelIcon from '@mui/icons-material/Gavel'
import ConstructionIcon from '@mui/icons-material/Construction'
import LocationCityIcon from '@mui/icons-material/LocationCity'
import AccountBalanceIcon from '@mui/icons-material/AccountBalance'
import PersonAddIcon from '@mui/icons-material/PersonAdd'
import MicIcon from '@mui/icons-material/Mic'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import PlayArrowIcon from '@mui/icons-material/PlayArrow'
import SpeakerCard from './SpeakerCard'
import { FEATURED_SPEAKER, SPEAKERS } from '../data'
import podcastBg from '../Images/Podcast_bg.png'

const FEATURED_SPEAKER_IMAGE = 'https://i.pravatar.cc/150?img=12'

type ExpertiseType = {
  id: string
  title: string
  subtitle: string
  count: number
  icon: React.ReactNode
  iconBgClass: string
  countColorClass: string
}

const EXPERTISE_AREAS: ExpertiseType[] = [
  {
    id: 'ex-1',
    title: 'Market Analysis',
    subtitle: 'Trends, forecasts & data insights',
    count: 6,
    icon: <TrendingUpIcon style={{ fontSize: 20 }} />,
    iconBgClass: 'bg-blue-600',
    countColorClass: 'text-blue-600',
  },
  {
    id: 'ex-2',
    title: 'Legal & Compliance',
    subtitle: 'RERA, laws & regulations',
    count: 4,
    icon: <GavelIcon style={{ fontSize: 20 }} />,
    iconBgClass: 'bg-purple-600',
    countColorClass: 'text-purple-600',
  },
  {
    id: 'ex-3',
    title: 'Construction',
    subtitle: 'Building & development leaders',
    count: 5,
    icon: <ConstructionIcon style={{ fontSize: 20 }} />,
    iconBgClass: 'bg-orange-500',
    countColorClass: 'text-orange-500',
  },
  {
    id: 'ex-4',
    title: 'Smart Cities',
    subtitle: 'Urban planning & innovation',
    count: 3,
    icon: <LocationCityIcon style={{ fontSize: 20 }} />,
    iconBgClass: 'bg-teal-500',
    countColorClass: 'text-teal-500',
  },
  {
    id: 'ex-5',
    title: 'Finance & Investment',
    subtitle: 'Funding strategies & ROI',
    count: 4,
    icon: <AccountBalanceIcon style={{ fontSize: 20 }} />,
    iconBgClass: 'bg-red-600',
    countColorClass: 'text-red-600',
  },
]

function FeaturedSpeaker() {
  return (
    <div className="relative w-full rounded-lg overflow-hidden min-h-[160px] @sm:min-h-[320px] shadow-md cursor-pointer">
      <img
        src={podcastBg}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-linear-to-br from-slate-900/92 via-blue-900/85 to-slate-900/70" />
      <div className="absolute right-0 top-0 w-1/2 h-full bg-linear-to-l from-blue-400/20 to-transparent mix-blend-overlay pointer-events-none" />

      <div className="absolute right-4 @sm:right-8 top-1/2 -translate-y-1/2 hidden @sm:block">
        <img
          src={FEATURED_SPEAKER_IMAGE}
          alt={FEATURED_SPEAKER.name}
          className="w-36 h-36 rounded-lg object-cover shadow-2xl shadow-black/50 border-2 border-white/20"
        />
      </div>

      <div className="relative z-10 flex flex-col justify-between p-4 @sm:p-8 h-full min-h-[160px] @sm:min-h-[320px]">
        <div className="flex">
          <span className="inline-flex items-center gap-1 @sm:gap-1.5 px-2 @sm:px-3 py-1 @sm:py-1.5 rounded text-[10px] @sm:text-xs font-bold tracking-widest bg-emerald-500 text-white shadow-sm uppercase shrink-0">
            <StarIcon style={{ fontSize: 12 }} />
            {FEATURED_SPEAKER.badge}
          </span>
        </div>

        <div className="mt-4 @sm:mt-8 space-y-3 @sm:space-y-6 max-w-lg">
          <div>
            <h2 className="text-xl @sm:text-4xl font-bold text-white leading-tight tracking-tight drop-shadow-sm">
              {FEATURED_SPEAKER.name}
            </h2>
            <p className="text-sm @sm:text-base text-white/70 mt-1 @sm:mt-2 leading-snug max-w-sm line-clamp-2">
              {FEATURED_SPEAKER.bio}
            </p>
          </div>

          <div className="flex items-center gap-2 @sm:gap-3">
            <img
              src={FEATURED_SPEAKER_IMAGE}
              alt={FEATURED_SPEAKER.name}
              className="w-8 h-8 @sm:w-12 @sm:h-12 rounded border @sm:border-2 border-white/20 object-cover shrink-0"
            />
            <div className="flex flex-col min-w-0">
              <p className="text-sm @sm:text-lg font-semibold text-white leading-tight truncate">{FEATURED_SPEAKER.name}</p>
              <p className="text-[11px] @sm:text-sm font-medium text-slate-300 mt-0.5 @sm:mt-1 truncate">{FEATURED_SPEAKER.role}</p>
            </div>
          </div>

          <div className="flex items-center gap-3 @sm:gap-4 pt-1 @sm:pt-2">
            <button
              type="button"
              aria-label="Play keynote session"
              className="w-8 h-8 @sm:w-12 @sm:h-12 rounded bg-white flex items-center justify-center shadow-lg hover:bg-gray-50 active:scale-95 transition-all focus:outline-none focus:ring-2 focus:ring-white shrink-0"
            >
              <PlayArrowIcon className="text-slate-900" style={{ fontSize: 20 }} />
            </button>
            <div className="flex items-center gap-1.5 @sm:gap-2 text-slate-200 min-w-0">
              <AccessTimeIcon style={{ fontSize: 16 }} className="shrink-0" />
              <span className="text-xs @sm:text-sm font-semibold tracking-wide shrink-0">{FEATURED_SPEAKER.duration}</span>
              <span className="text-[10px] @sm:text-xs text-slate-400 shrink-0">•</span>
              <span className="text-xs @sm:text-sm font-medium truncate">{FEATURED_SPEAKER.totalSpeakers}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function ExpertiseListItem({ area }: { area: ExpertiseType }) {
  return (
    <button
      type="button"
      className="flex items-center gap-2.5 @sm:gap-4 p-2.5 @sm:p-4 w-full text-left hover:bg-white hover:rounded-lg hover:border hover:border-slate-100 hover:shadow-md transition-shadow focus:outline-none focus:ring-2 focus:ring-slate-200 group"
    >
      <div className={`shrink-0 w-10 h-10 @sm:w-12 @sm:h-12 rounded flex items-center justify-center ${area.iconBgClass}`}>
        <span className="text-white">{area.icon}</span>
      </div>
      <div className="flex-1 min-w-0 py-0.5">
        <h4 className="text-[14px] @sm:text-base font-bold text-slate-900 leading-snug truncate">{area.title}</h4>
        <p className="text-[11px] @sm:text-sm text-slate-600 mt-0.5 @sm:mt-1 truncate">{area.subtitle}</p>
        <p className={`text-[11px] @sm:text-xs font-bold mt-1 @sm:mt-1.5 ${area.countColorClass}`}>
          {area.count} Speakers
        </p>
      </div>
      <ChevronRightIcon
        className="shrink-0 text-slate-400 group-hover:text-slate-600 transition-colors"
        style={{ fontSize: 20 }}
      />
    </button>
  )
}

export default function SpeakersTab() {
  return (
    <div
      className="@container min-h-screen bg-slate-50 text-slate-900 pb-8 w-full overflow-x-hidden"
      style={{ fontFamily: "'Outfit', sans-serif" }}
    >
      <div className="max-w-7xl mx-auto px-2 @sm:px-2 @lg:px-8 py-4 @sm:py-8 w-full">
        <header className="mb-4 @sm:mb-8">
          <h1 className="text-2xl @sm:text-4xl font-extrabold text-slate-900 tracking-tight">Speakers</h1>
        </header>

        <div className="grid grid-cols-1 @lg:grid-cols-12 gap-4 @sm:gap-8 w-full">
          <div className="@lg:col-span-8 w-full space-y-4 @sm:space-y-8">
            <FeaturedSpeaker />

            <section className="w-full">
              <div className="flex items-center justify-between mb-3 @sm:mb-5">
                <h2 className="text-xl @sm:text-2xl font-bold text-slate-900 tracking-tight">All Speakers</h2>
                <button type="button" className="text-xs @sm:text-sm font-semibold text-emerald-500 hover:text-emerald-600">
                  View all
                </button>
              </div>
              <div className="space-y-2 @sm:space-y-4 w-full">
                {SPEAKERS.map((speaker) => (
                  <SpeakerCard key={speaker.id} speaker={speaker} />
                ))}
              </div>
            </section>
          </div>

          <div className="@lg:col-span-4 w-full space-y-4 @sm:space-y-8">
            <section className="w-full">
              <div className="mb-3 @sm:mb-5">
                <h3 className="text-xl @sm:text-2xl font-bold text-slate-900 tracking-tight">Browse by Expertise</h3>
              </div>
              <div className="space-y-2 @sm:space-y-4 w-full">
                {EXPERTISE_AREAS.map((area) => (
                  <ExpertiseListItem key={area.id} area={area} />
                ))}
              </div>
            </section>

            <div className="bg-emerald-50 rounded-lg p-3 @sm:p-5 flex items-center gap-3 @sm:gap-4 border border-emerald-100 w-full">
              <div className="shrink-0 w-10 h-10 rounded bg-white flex items-center justify-center text-emerald-500 shadow-sm">
                <PersonAddIcon />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-[14px] @sm:text-base font-bold text-slate-900 leading-snug truncate">Follow Speakers</h4>
                <p className="text-[11px] @sm:text-sm text-slate-600 mt-0.5 truncate">Get notified for new sessions</p>
              </div>
              <button
                type="button"
                className="shrink-0 bg-emerald-500 text-white text-xs @sm:text-sm font-bold px-3 py-2 rounded"
              >
                Follow
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}