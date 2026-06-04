import React from 'react'
import { Play, Star, TrendingUp } from 'lucide-react'

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
      className="group relative w-full rounded-lg overflow-hidden min-h-[220px] sm:min-h-[260px] shadow-2xl shadow-black/40 outline outline-1 outline-white/10 hover:outline-white/20 transition-all duration-300 focus-within:ring-2 focus-within:ring-white/50 focus-within:outline-none cursor-pointer"
      tabIndex={0}
    >
      <div aria-hidden="true" className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-105">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a1e42] via-[#0f2a52] to-[#1a3a6b]" />
        
        <div className="absolute inset-0 opacity-20">
          <svg viewBox="0 0 800 300" preserveAspectRatio="xMaxYMax slice" className="absolute right-0 bottom-0 w-[70%] h-full">
            <defs>
              <linearGradient id="skylineGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#1e40af" stopOpacity="0.1" />
              </linearGradient>
            </defs>
            <path d="M400 300 L400 120 L420 120 L420 80 L440 80 L440 120 L460 120 L460 60 L470 50 L480 60 L480 120 L500 120 L500 100 L520 100 L520 140 L540 140 L540 90 L550 85 L560 90 L560 140 L580 140 L580 110 L600 110 L600 70 L610 65 L620 70 L620 110 L640 110 L640 130 L660 130 L660 100 L680 100 L680 150 L700 150 L700 120 L720 120 L720 160 L740 160 L740 130 L760 130 L760 170 L780 170 L780 140 L800 140 L800 300 Z"
              fill="url(#skylineGrad)" />
          </svg>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-[40%] opacity-15">
          <svg viewBox="0 0 400 100" preserveAspectRatio="none" className="w-full h-full">
            <polyline points="0,80 40,70 80,75 120,50 160,55 200,30 240,40 280,20 320,35 360,15 400,25"
              fill="none" stroke="#10b981" strokeWidth="2" />
            <polyline points="0,90 40,85 80,88 120,70 160,75 200,55 240,65 280,45 320,60 360,40 400,50"
              fill="none" stroke="#60a5fa" strokeWidth="1.5" opacity="0.6" />
          </svg>
        </div>
        
        <div className="absolute -right-10 -top-10 w-60 h-60 rounded-full bg-blue-400/10 blur-3xl" />

        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
      </div>

      <div className="relative z-10 flex flex-col justify-between p-2 sm:p-6 h-full min-h-[220px] sm:min-h-[260px]">
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
            <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-md outline outline-1 outline-white/20 flex items-center justify-center text-xs font-bold text-white shadow-inner">
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
              className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-xl shadow-black/40 hover:scale-105 hover:bg-gray-50 active:scale-95 transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white group/btn"
            >
              <Play size={20} fill="#0f172a" stroke="#0f172a" className="ml-1 group-hover/btn:scale-105 transition-transform" aria-hidden="true" />
            </button>
            
            <div className="flex items-center gap-2">
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