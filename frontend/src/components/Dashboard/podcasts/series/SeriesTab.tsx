import React from 'react'
import StarIcon from '@mui/icons-material/Star'
import PlayArrowIcon from '@mui/icons-material/PlayArrow'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import HeadphonesIcon from '@mui/icons-material/Headphones'
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive'
import SeriesCard from './SeriesCard'
import { SERIES_LIST } from '../data'
import podcastBg from '../Images/Podcast_bg.png'

const FEATURED_SERIES = SERIES_LIST[0]

type GenreType = {
  id: string
  title: string
  subtitle: string
  count: number
  iconBgClass: string
  countColorClass: string
  icon: React.ReactNode
}

const GENRES: GenreType[] = [
  {
    id: 'g-1',
    title: 'Real Estate Fundamentals',
    subtitle: 'Beginner to expert in property',
    count: 3,
    icon: <LibraryBooksIcon style={{ fontSize: 20 }} />,
    iconBgClass: 'bg-[#6B21A8]',
    countColorClass: 'text-[#6B21A8]',
  },
  {
    id: 'g-2',
    title: 'Builder Masterclass',
    subtitle: 'Scale your construction business',
    count: 2,
    icon: <HeadphonesIcon style={{ fontSize: 20 }} />,
    iconBgClass: 'bg-[#D946EF]',
    countColorClass: 'text-[#A8155F]',
  },
  {
    id: 'g-3',
    title: 'Legal Deep Dives',
    subtitle: 'RERA, laws & compliance',
    count: 2,
    icon: <LibraryBooksIcon style={{ fontSize: 20 }} />,
    iconBgClass: 'bg-[#5B21B6]',
    countColorClass: 'text-[#5B21B6]',
  },
  {
    id: 'g-4',
    title: 'Market Intelligence',
    subtitle: 'Weekly trends & price analysis',
    count: 4,
    icon: <LibraryBooksIcon style={{ fontSize: 20 }} />,
    iconBgClass: 'bg-[#B45309]',
    countColorClass: 'text-[#B45309]',
  },
  {
    id: 'g-5',
    title: 'City Spotlights',
    subtitle: 'City-by-city real estate guide',
    count: 2,
    icon: <LibraryBooksIcon style={{ fontSize: 20 }} />,
    iconBgClass: 'bg-[#0D9488]',
    countColorClass: 'text-[#115E59]',
  },
]

function FeaturedSeries() {
  return (
    <div className="relative w-full rounded-lg overflow-hidden min-h-[160px] @sm:min-h-[320px] shadow-md cursor-pointer">
      <img
        src={podcastBg}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div
        className="absolute inset-0"
        style={{ background: `linear-gradient(135deg, ${FEATURED_SERIES.color}ee 0%, ${FEATURED_SERIES.color}99 50%, ${FEATURED_SERIES.color}55 100%)` }}
      />
      <div className="absolute right-0 top-0 w-1/2 h-full bg-linear-to-l from-black/20 to-transparent pointer-events-none" />

      <div className="relative z-10 flex flex-col justify-between p-4 @sm:p-8 h-full min-h-[160px] @sm:min-h-[320px]">
        <div className="flex">
          <span className="inline-flex items-center gap-1 @sm:gap-1.5 px-2 @sm:px-3 py-1 @sm:py-1.5 rounded text-[10px] @sm:text-xs font-bold tracking-widest bg-white/20 text-white shadow-sm uppercase backdrop-blur-sm shrink-0">
            <StarIcon style={{ fontSize: 12 }} />
            Featured Series
          </span>
        </div>

        <div className="mt-4 @sm:mt-8 space-y-3 @sm:space-y-6 max-w-lg">
          <div>
            <h2 className="text-xl @sm:text-4xl font-bold text-white leading-tight tracking-tight drop-shadow-sm">
              {FEATURED_SERIES.title}
            </h2>
            <p className="text-sm @sm:text-base text-white/80 mt-1 @sm:mt-2 leading-snug max-w-sm line-clamp-2">
              {FEATURED_SERIES.description}
            </p>
          </div>

          <div className="flex items-center gap-3 @sm:gap-4 pt-1 @sm:pt-2">
            <button
              type="button"
              aria-label="Play series"
              className="w-8 h-8 @sm:w-12 @sm:h-12 rounded bg-white flex items-center justify-center shadow-lg hover:bg-gray-50 active:scale-95 transition-all focus:outline-none focus:ring-2 focus:ring-white shrink-0"
            >
              <PlayArrowIcon className="text-slate-900" style={{ fontSize: 20 }} />
            </button>
            <div className="flex items-center gap-1.5 @sm:gap-2 text-white/90 min-w-0">
              <AccessTimeIcon style={{ fontSize: 16 }} className="shrink-0" />
              <span className="text-xs @sm:text-sm font-semibold tracking-wide shrink-0">{FEATURED_SERIES.totalDuration}</span>
              <span className="text-[10px] @sm:text-xs text-white/60 shrink-0">•</span>
              <span className="text-xs @sm:text-sm font-medium shrink-0">{FEATURED_SERIES.episodeCount} Episodes</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function GenreListItem({ genre }: { genre: GenreType }) {
  return (
    <button
      type="button"
      className="flex items-center gap-2.5 @sm:gap-4 p-2.5 @sm:p-4 w-full text-left hover:bg-white hover:rounded-lg hover:border hover:border-slate-100 hover:shadow-md transition-shadow focus:outline-none focus:ring-2 focus:ring-slate-200 group"
    >
      <div className={`shrink-0 w-10 h-10 @sm:w-12 @sm:h-12 rounded flex items-center justify-center ${genre.iconBgClass}`}>
        <span className="text-white">{genre.icon}</span>
      </div>
      <div className="flex-1 min-w-0 py-0.5">
        <h4 className="text-[14px] @sm:text-base font-bold text-slate-900 leading-snug truncate">{genre.title}</h4>
        <p className="text-[11px] @sm:text-sm text-slate-600 mt-0.5 @sm:mt-1 truncate">{genre.subtitle}</p>
        <p className={`text-[11px] @sm:text-xs font-bold mt-1 @sm:mt-1.5 ${genre.countColorClass}`}>
          {genre.count} Series
        </p>
      </div>
      <ChevronRightIcon
        className="shrink-0 text-slate-400 group-hover:text-slate-600 transition-colors"
        style={{ fontSize: 20 }}
      />
    </button>
  )
}

export default function SeriesTab() {
  return (
    <div
      className="@container min-h-screen bg-slate-50 text-slate-900 pb-8 w-full overflow-x-hidden"
      style={{ fontFamily: "'Outfit', sans-serif" }}
    >
      <div className="max-w-7xl mx-auto px-2 @sm:px-2 @lg:px-8 py-4 @sm:py-8 w-full">
        <header className="mb-4 @sm:mb-8">
          <h1 className="text-2xl @sm:text-4xl font-extrabold text-slate-900 tracking-tight">Series</h1>
        </header>

        <div className="grid grid-cols-1 @lg:grid-cols-12 gap-4 @sm:gap-8 w-full">
          <div className="@lg:col-span-8 w-full space-y-4 @sm:space-y-8">
            <FeaturedSeries />

            <section className="w-full">
              <div className="flex items-center justify-between mb-3 @sm:mb-5">
                <h2 className="text-xl @sm:text-2xl font-bold text-slate-900 tracking-tight">All Series</h2>
                <button type="button" className="text-xs @sm:text-sm font-semibold text-[#6B21A8] hover:text-[#5B21B6]">
                  View all
                </button>
              </div>
              <div className="space-y-2 @sm:space-y-4 w-full">
                {SERIES_LIST.map((series) => (
                  <SeriesCard key={series.id} series={series} />
                ))}
              </div>
            </section>
          </div>

          <div className="@lg:col-span-4 w-full space-y-4 @sm:space-y-8">
            <section className="w-full">
              <div className="mb-3 @sm:mb-5">
                <h3 className="text-xl @sm:text-2xl font-bold text-slate-900 tracking-tight">Browse by Genre</h3>
              </div>
              <div className="space-y-2 @sm:space-y-4 w-full">
                {GENRES.map((genre) => (
                  <GenreListItem key={genre.id} genre={genre} />
                ))}
              </div>
            </section>

            <div className="bg-[#7C3AED]/10 rounded-lg p-3 @sm:p-5 flex items-center gap-3 @sm:gap-4 border border-[#7C3AED]/20 w-full">
              <div className="shrink-0 w-10 h-10 rounded bg-white flex items-center justify-center text-[#6B21A8] shadow-sm">
                <NotificationsActiveIcon />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-[14px] @sm:text-base font-bold text-slate-900 leading-snug truncate">New series alert</h4>
                <p className="text-[11px] @sm:text-sm text-slate-600 mt-0.5 truncate">Get notified when new series drop</p>
              </div>
              <button
                type="button"
                className="shrink-0 bg-gradient-to-r from-[#7C3AED] to-[#D946EF] hover:from-[#6B21A8] hover:to-[#E91E8C] text-white text-xs @sm:text-sm font-bold px-3 py-2 rounded transition-all active:scale-95 duration-200"
              >
                Notify me
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
