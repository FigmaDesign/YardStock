import React from 'react'
import { Play } from 'lucide-react'
import PageHeader from '../components/PageHeader'
import FeaturedCard from '../components/FeaturedCard'
import SectionHeader from '../components/SectionHeader'
import SpeakerCard from './SpeakerCard'
import { FEATURED_SPEAKER, SPEAKERS } from '../data'

export default function SpeakersTab() {
  return (
    <div className="flex flex-col w-full pb-8 sm:pb-12">
      <PageHeader
        title="Speakers"
        subtitle="Learn from industry leaders and innovators"
      />

      <div className="px-4 sm:px-6 pb-6 sm:pb-8">
        <FeaturedCard
          badge={FEATURED_SPEAKER.badge}
          badgeVariant="star"
          title={FEATURED_SPEAKER.name}
          subtitle={FEATURED_SPEAKER.bio}
          speaker={FEATURED_SPEAKER.name}
          role={FEATURED_SPEAKER.role}
          duration={FEATURED_SPEAKER.duration}
          plays=""
          extraContent={
            <div className="flex flex-col gap-4 mt-2">
              <div className="flex items-center gap-4">
                <button
                  type="button"
                  aria-label="Play keynote session"
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white flex items-center justify-center shadow-xl shadow-black/30 hover:scale-105 active:scale-95 transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white group/btn"
                >
                  <Play size={16} fill="#0f172a" stroke="#0f172a" className="ml-0.5 group-hover/btn:scale-105 transition-transform" aria-hidden="true" />
                </button>
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-white tracking-wide">{FEATURED_SPEAKER.sessionLabel}</span>
                  <span className="text-xs font-medium text-white/70">{FEATURED_SPEAKER.duration}</span>
                </div>
              </div>

              <div className="flex items-center gap-2 pt-2 border-t border-white/10">
                <div className="flex -space-x-2">
                  {SPEAKERS.slice(0, 4).map((s, i) => (
                    <div
                      key={s.id}
                      className="w-8 h-8 rounded-full border-2 border-[#0f2a52] flex items-center justify-center text-[0.55rem] font-bold text-white shadow-md hover:-translate-y-1 transition-transform cursor-pointer"
                      style={{
                        backgroundColor: s.avatarColor,
                        zIndex: 10 - i,
                      }}
                      title={s.name}
                    >
                      {s.avatarInitials}
                    </div>
                  ))}
                  <div
                    className="w-8 h-8 rounded-full border-2 border-[#0f2a52] bg-white/20 backdrop-blur-md flex items-center justify-center text-[0.55rem] font-bold text-white shadow-sm"
                    style={{ zIndex: 5 }}
                  >
                    +{Math.max(0, SPEAKERS.length - 4 + 18)}
                  </div>
                </div>
                <span className="text-xs font-medium text-white/80 ml-2 tracking-wide">
                  {FEATURED_SPEAKER.totalSpeakers}
                </span>
              </div>
            </div>
          }
        />
      </div>

      <SectionHeader 
        title="All Speakers" 
        onViewAll={() => {}} 
      />

      <div className="flex flex-col gap-2 sm:gap-3 px-2 sm:px-4 pb-6">
        {SPEAKERS.map((speaker) => (
          <SpeakerCard key={speaker.id} speaker={speaker} />
        ))}
      </div>
    </div>
  )
}