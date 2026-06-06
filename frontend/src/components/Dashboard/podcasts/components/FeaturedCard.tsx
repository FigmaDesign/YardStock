import React from 'react'
import { Play, Star, TrendingUp, Clock } from 'lucide-react'
import podcastBg from '../Images/Podcast_bg.png'

interface FeaturedCardProps {
  badge: string
  badgeVariant?: 'star' | 'trending'
  title: string
  subtitle?: string
  speaker: string
  role: string
  duration: string
  plays: string
  extraContent?: React.ReactNode
}

export default function FeaturedCard({
  badge,
  badgeVariant = 'star',
  title,
  subtitle,
  speaker,
  role,
  duration,
  plays,
  extraContent,
}: FeaturedCardProps) {
  const BadgeIcon = badgeVariant === 'trending' ? TrendingUp : Star

  return (
    <div 
      className="group relative w-full rounded-lg overflow-hidden min-h-[220px] sm:min-h-[280px] shadow-2xl shadow-black/30 hover:shadow-black/50 transition-all duration-300 cursor-pointer focus-within:ring-2 focus-within:ring-white/50 focus-within:outline-none"
      tabIndex={0}
    >
      <img
        src={podcastBg}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
      />
      <div
        className="absolute inset-0 bg-linear-to-br from-[#0a1e42]/92 via-[#0f2a52]/85 to-[#1a3a6b]/70"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors duration-300"
        aria-hidden="true"
      />

      <div className="relative z-10 flex flex-col justify-between p-4 sm:p-6 h-full min-h-[220px] sm:min-h-[280px]">
        <div className="flex">
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[0.7rem] font-bold uppercase tracking-widest bg-emerald-500/90 text-white backdrop-blur-md shadow-md shadow-emerald-500/30 outline outline-1 outline-emerald-400/50">
            <BadgeIcon size={14} strokeWidth={2.5} aria-hidden="true" />
            {badge}
          </span>
        </div>

        <div className="mt-auto space-y-4">
          <div className="space-y-1">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight tracking-tighter drop-shadow-md">
              {title}
            </h2>
            {subtitle && (
              <p className="text-sm sm:text-base text-white/80 leading-snug max-w-[85%] font-medium drop-shadow-sm">
                {subtitle}
              </p>
            )}
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white/15 backdrop-blur-md outline outline-2 outline-white/30 flex items-center justify-center text-sm font-bold text-white">
              {speaker.split(' ').map(w => w[0]).join('')}
            </div>
            <div className="flex flex-col">
              <p className="text-sm font-bold text-white leading-tight tracking-wide drop-shadow-sm">{speaker}</p>
              <p className="text-[0.7rem] font-medium text-white/60 mt-0.5">{role}</p>
            </div>
          </div>

          <div className="flex items-center gap-4 pt-1">
            <button
              type="button"
              aria-label="Play episode"
              className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-xl shadow-black/40 hover:scale-110 hover:bg-gray-50 active:scale-95 transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white group/btn"
            >
              <Play size={20} fill="#0f172a" stroke="#0f172a" className="ml-1 group-hover/btn:scale-105 transition-transform" aria-hidden="true" />
            </button>
            
            <div className="flex items-center gap-2">
              <Clock size={14} className="text-white/70" strokeWidth={2} aria-hidden="true" />
              <span className="text-sm font-bold text-white tracking-wide">{duration}</span>
              <span className="text-white/40 text-xs">•</span>
              <span className="text-sm font-medium text-white/70">{plays}</span>
            </div>
          </div>

          {extraContent && (
            <div className="pt-2">
              {extraContent}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}