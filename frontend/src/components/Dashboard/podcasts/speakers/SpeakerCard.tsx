import { memo } from 'react'
import { MapPin, Building2, Headphones, Star, ArrowRight } from 'lucide-react'
import type { Speaker } from '../data'

interface SpeakerCardProps {
  speaker: Speaker
}

const SpeakerCard = memo(function SpeakerCard({ speaker }: SpeakerCardProps) {
  return (
    <article className="group relative flex flex-col bg-[var(--ys-canvas)] border border-[var(--ys-mute)] rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300">
      
      <div className="h-24 bg-gradient-to-r from-[var(--ys-ink-soft)] to-[var(--ys-ink)] relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_right,var(--ys-primary)_0%,transparent_60%)]" />
      </div>

      <div className="px-5 pb-5 flex-1 flex flex-col items-center text-center -mt-12 relative z-10">
        <div className="w-24 h-24 rounded-full border-4 border-[var(--ys-canvas)] overflow-hidden bg-[var(--ys-canvas-soft)] shadow-md mb-3 group-hover:scale-105 transition-transform duration-500">
          <img 
            src={speaker.avatarUrl} 
            alt={speaker.name}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex items-center gap-1 bg-[var(--ys-canvas-soft)] border border-[var(--ys-mute)] px-2.5 py-0.5 rounded-full text-xs font-bold text-[var(--ys-ink)] mb-2 shadow-sm">
          <Star className="w-3 h-3 text-[var(--ys-primary)] fill-current" />
          {speaker.rating}
        </div>

        <h3 className="text-lg font-bold text-[var(--ys-ink)] group-hover:text-[var(--ys-primary)] transition-colors leading-tight mb-1">
          {speaker.name}
        </h3>
        
        <p className="text-xs font-bold text-[var(--ys-primary)] uppercase tracking-wider mb-2">
          {speaker.role}
        </p>

        <p className="text-sm font-medium text-[var(--ys-body)] flex items-center justify-center gap-1.5 mb-4 w-full truncate">
          <Building2 className="w-4 h-4 text-[var(--ys-mute)] shrink-0" />
          <span className="truncate">{speaker.company}</span>
        </p>

        <div className="mt-auto w-full grid grid-cols-2 gap-2 text-xs font-medium text-[var(--ys-body-mid)] bg-[var(--ys-canvas-soft)] rounded-xl p-3 border border-[var(--ys-mute)]/50">
          <div className="flex flex-col items-center gap-1 border-r border-[var(--ys-mute)]/50">
            <MapPin className="w-4 h-4 text-[var(--ys-ink-soft)]" />
            <span className="truncate w-full text-center">{speaker.location}</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <Headphones className="w-4 h-4 text-[var(--ys-ink-soft)]" />
            <span className="truncate w-full text-center">{speaker.totalListens}</span>
          </div>
        </div>
      </div>

      <div className="p-3 border-t border-[var(--ys-mute)] bg-[var(--ys-canvas-soft)]/50">
        <button className="w-full flex items-center justify-center gap-2 py-2 text-sm font-bold text-[var(--ys-ink)] hover:text-[var(--ys-primary)] bg-[var(--ys-canvas)] hover:bg-white rounded-lg border border-[var(--ys-mute)] shadow-sm hover:shadow transition-all group/btn">
          View Episodes
          <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
        </button>
      </div>

    </article>
  )
})

export default SpeakerCard