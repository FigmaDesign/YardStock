import React from 'react'
import { ChevronRight, Star } from 'lucide-react'
import type { Speaker } from '../data'

interface SpeakerCardProps {
  speaker: Speaker
}

export default function SpeakerCard({ speaker }: SpeakerCardProps) {
  return (
    <article 
      className="flex items-center gap-4 sm:gap-5 px-1 sm:px-5 py-2 sm:py-5 rounded-xl hover:bg-slate-50 transition-all duration-300 group cursor-pointer outline outline-1 outline-transparent hover:outline-slate-200 focus-visible:ring-2 focus-visible:ring-emerald-500/30 focus-visible:outline-none"
      tabIndex={0}
    >
      <div
        className="w-16 h-16 sm:w-20 sm:h-20 rounded-full shrink-0 flex items-center justify-center text-white font-bold text-xl sm:text-2xl shadow-md outline outline-1 outline-black/5 group-hover:scale-105 transition-transform duration-300"
        style={{ backgroundColor: speaker.avatarColor }}
      >
        {speaker.avatarInitials}
      </div>

      <div className="flex-1 min-w-0 space-y-0.5">
        <h3 className="text-base sm:text-lg font-bold text-[#0f172a] leading-tight tracking-tight">
          {speaker.name}
        </h3>
        <p className="text-sm font-bold text-emerald-600">
          {speaker.role}
        </p>
        <p className="text-xs sm:text-sm text-slate-500 mt-1.5 leading-relaxed line-clamp-2 font-medium">
          {speaker.bio}
        </p>
        <div className="flex items-center gap-2 sm:gap-3 mt-2.5 flex-wrap">
          {speaker.badge && (
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-amber-50 outline outline-1 outline-amber-200 text-[0.65rem] sm:text-xs font-bold text-amber-700 shadow-sm">
              <Star size={10} fill="currentColor" aria-hidden="true" className="sm:w-3 sm:h-3" />
              {speaker.badge}
            </span>
          )}
          {speaker.badge && (
            <span className="text-slate-300" aria-hidden="true">•</span>
          )}
          <span className="text-xs font-semibold text-slate-500 tracking-wide">
            {speaker.sessions} Sessions
          </span>
        </div>
      </div>

      <div className="shrink-0 pl-2">
        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full outline outline-1 outline-slate-200 bg-white flex items-center justify-center text-slate-400 group-hover:outline-emerald-200 group-hover:bg-emerald-50 group-hover:text-emerald-600 shadow-sm group-hover:shadow-md transition-all duration-300">
          <ChevronRight size={20} strokeWidth={2.5} className="group-hover:translate-x-0.5 transition-transform duration-300" aria-hidden="true" />
        </div>
      </div>
    </article>
  )
}