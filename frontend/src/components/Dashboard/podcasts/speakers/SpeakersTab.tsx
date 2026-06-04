import { memo } from 'react'
import { Play } from 'lucide-react'
import PageHeader from '../PageHeader'
import FeaturedCard from '../FeaturedCard'
import SectionHeader from '../SectionHeader'
import SpeakerCard from './SpeakerCard'
import { FEATURED_SPEAKER, SPEAKERS } from '../data'

export default memo(function SpeakersTab() {
  return (
    <div className="flex flex-col">
      <PageHeader
        title="Speakers"
      />

      {/* Featured Speaker Hero */}
      <div className="px-4 sm:px-5 pb-2">
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
            <div className="flex flex-col gap-2.5">
              {/* Session label */}
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  aria-label="Play keynote session"
                  className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-lg shadow-black/20 hover:scale-105 active:scale-95 transition-transform"
                >
                  <Play size={14} fill="#0f172a" stroke="#0f172a" className="ml-0.5" aria-hidden="true" />
                </button>
                <span className="text-[0.75rem] font-semibold text-white">{FEATURED_SPEAKER.sessionLabel}</span>
                <span className="text-white/40">•</span>
                <span className="text-[0.75rem] font-medium text-white/70">{FEATURED_SPEAKER.duration}</span>
              </div>

              {/* Speaker avatars row */}
              <div className="flex items-center gap-1.5">
                {SPEAKERS.slice(0, 4).map((s, i) => (
                  <div
                    key={s.id}
                    className="w-7 h-7 rounded-full border-2 border-[#0f2a52] flex items-center justify-center text-[0.45rem] font-bold text-white shadow-md"
                    style={{
                      backgroundColor: s.avatarColor,
                      marginLeft: i > 0 ? '-6px' : 0,
                      zIndex: 10 - i,
                    }}
                  >
                    {s.avatarInitials}
                  </div>
                ))}
                <div
                  className="w-7 h-7 rounded-full border-2 border-[#0f2a52] bg-white/20 backdrop-blur-sm flex items-center justify-center text-[0.45rem] font-bold text-white"
                  style={{ marginLeft: '-6px', zIndex: 5 }}
                >
                  +{Math.max(0, SPEAKERS.length - 4 + 18)}
                </div>
                <span className="text-[0.68rem] font-medium text-white/70 ml-1.5">
                  {FEATURED_SPEAKER.totalSpeakers}
                </span>
              </div>
            </div>
          }
        />
      </div>

      {/* All Speakers */}
      <SectionHeader title="All Speakers" onViewAll={() => {}} />

      <div className="flex flex-col">
        {SPEAKERS.map((speaker) => (
          <SpeakerCard key={speaker.id} speaker={speaker} />
        ))}
      </div>
    </div>
  )
})
