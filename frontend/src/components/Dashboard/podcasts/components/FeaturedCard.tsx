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
      className="group relative w-full rounded-[18px] overflow-hidden min-h-[220px] sm:min-h-[280px] shadow-[0_8px_32px_rgba(21,15,35,0.4)] hover:shadow-[0_12px_40px_rgba(66,32,130,0.3)] transition-all duration-300 cursor-pointer focus-within:ring-2 focus-within:ring-[#6a5fc1]/50 focus-within:outline-none font-['Outfit',sans-serif]"
      tabIndex={0}
    >
      <img
        src={podcastBg}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
      />
      
      <div
        className="absolute inset-0 bg-gradient-to-br from-[#150f23]/95 via-[#1f1633]/80 to-[#150f23]/95"
        aria-hidden="true"
      />
      
      <div
        className="absolute inset-0 bg-black/0 group-hover:bg-[#1f1633]/20 transition-colors duration-300"
        aria-hidden="true"
      />

      <div className="relative z-10 flex flex-col justify-between p-5 sm:p-7 h-full min-h-[220px] sm:min-h-[280px]">
        <div className="flex">
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-[6px] text-[10px] font-bold uppercase tracking-[0.2px] bg-[#c2ef4e] text-[#1f1633] shadow-[0_2px_8px_rgba(194,239,78,0.2)]">
            <BadgeIcon size={14} strokeWidth={2.5} aria-hidden="true" />
            {badge}
          </span>
        </div>

        <div className="mt-auto space-y-4">
          <div className="space-y-1">
            <h2 className="text-[24px] sm:text-[30px] font-bold text-white leading-tight tracking-tight drop-shadow-md">
              {title}
            </h2>
            {subtitle && (
              <p className="text-[14px] sm:text-[16px] text-[#bdb8c0] leading-snug max-w-[85%] font-medium drop-shadow-sm">
                {subtitle}
              </p>
            )}
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#422082] border border-[#6a5fc1] flex items-center justify-center text-[14px] font-bold text-white shadow-sm">
              {speaker.split(' ').map(w => w[0]).join('')}
            </div>
            <div className="flex flex-col">
              <p className="text-[14px] font-bold text-white leading-tight tracking-[0.2px] drop-shadow-sm">{speaker}</p>
              <p className="text-[12px] font-medium text-[#79628c] mt-0.5">{role}</p>
            </div>
          </div>

          <div className="flex items-center gap-4 pt-1">
            <button
              type="button"
              aria-label="Play episode"
              className="w-12 h-12 rounded-full bg-[#ffffff] group-hover:bg-[#c2ef4e] flex items-center justify-center shadow-[0_4px_16px_rgba(21,15,35,0.5)] active:scale-95 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c2ef4e]/50"
            >
              <Play size={20} fill="#1f1633" stroke="#1f1633" className="ml-1" aria-hidden="true" />
            </button>
            
            <div className="flex items-center gap-2">
              <Clock size={14} className="text-[#6a5fc1]" strokeWidth={2.5} aria-hidden="true" />
              <span className="text-[13px] font-bold text-white tracking-[0.2px]">{duration}</span>
              <span className="text-[#79628c] text-[10px]">•</span>
              <span className="text-[13px] font-medium text-[#bdb8c0]">{plays}</span>
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