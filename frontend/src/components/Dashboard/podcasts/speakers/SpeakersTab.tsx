import { memo, useMemo } from 'react'
import { MapPin, Building2, Headphones, Star, ExternalLink, ChevronRight, Search } from 'lucide-react'
import SectionHeader from '../components/SectionHeader'
import SpeakerCard from './SpeakerCard'
import { SPEAKERS } from '../data'

export default function SpeakersTab() {
  const topSpeakers = useMemo(() => SPEAKERS.filter(s => s.rating >= 4.9), [])
  const trendingSpeaker = useMemo(() => SPEAKERS.find(s => s.id === 's3') || SPEAKERS[0], [])
  const otherSpeakers = useMemo(() => SPEAKERS.filter(s => s.id !== trendingSpeaker.id), [])

  return (
    <div className="flex flex-col gap-8 pb-8 pt-2">
      
      <section aria-labelledby="featured-speaker-heading" className="ys-fade-in-up motion-reduce:animate-none">
        <h2 id="featured-speaker-heading" className="sr-only">Featured Speaker</h2>
        <div className="bg-[var(--ys-canvas)] rounded-2xl border border-[var(--ys-mute)] shadow-sm overflow-hidden flex flex-col md:flex-row group">
          <div className="w-full md:w-1/3 h-64 md:h-auto relative overflow-hidden bg-[var(--ys-canvas-soft)]">
            <img 
              src={trendingSpeaker.avatarUrl} 
              alt={trendingSpeaker.name}
              className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--ys-ink)] via-[var(--ys-ink)]/20 to-transparent opacity-80" />
            <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
              <div className="bg-[var(--ys-primary)] text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg">
                <Star className="w-3.5 h-3.5 fill-current" />
                SPOTLIGHT
              </div>
              <div className="flex items-center gap-1 text-[var(--ys-primary)] bg-[var(--ys-ink)]/80 backdrop-blur-sm px-2 py-1 rounded-md font-bold text-sm border border-[var(--ys-mute)]/20">
                <Star className="w-4 h-4 fill-current" />
                {trendingSpeaker.rating}
              </div>
            </div>
          </div>

          <div className="p-6 md:p-8 flex-1 flex flex-col justify-center">
            <div className="flex items-center gap-2 text-[var(--ys-primary)] text-sm font-bold mb-3 uppercase tracking-wider">
              {trendingSpeaker.role}
            </div>
            
            <h3 className="text-2xl md:text-3xl font-extrabold text-[var(--ys-ink)] mb-2 group-hover:text-[var(--ys-primary)] transition-colors">
              {trendingSpeaker.name}
            </h3>
            
            <p className="text-[var(--ys-body-mid)] font-medium text-lg mb-4 flex items-center gap-2">
              <Building2 className="w-5 h-5 text-[var(--ys-mute)]" />
              {trendingSpeaker.company}
            </p>

            <p className="text-[var(--ys-body)] leading-relaxed mb-6 max-w-2xl">
              An industry veteran with deep insights into market cycles, sustainable development, and the future of urban living. Known for data-driven predictions and contrarian takes on luxury real estate.
            </p>

            <div className="flex flex-wrap items-center gap-4 text-sm text-[var(--ys-body-mid)] font-medium bg-[var(--ys-canvas-soft)] p-4 rounded-xl border border-[var(--ys-mute)] mb-6">
              <span className="flex items-center gap-2"><Headphones className="w-4 h-4 text-[var(--ys-primary)]" /> {trendingSpeaker.totalListens} Listens</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--ys-mute)]" />
              <span className="flex items-center gap-2"><MapPin className="w-4 h-4 text-[var(--ys-primary)]" /> {trendingSpeaker.location}</span>
            </div>

            <div className="mt-auto flex flex-wrap gap-4">
              <button className="flex items-center gap-2 px-6 py-2.5 bg-[var(--ys-ink)] hover:bg-[var(--ys-ink-soft)] text-white font-bold rounded-xl transition-all duration-300 shadow-md">
                View Profile <ChevronRight className="w-4 h-4" />
              </button>
              <button className="flex items-center gap-2 px-6 py-2.5 bg-[var(--ys-canvas-soft)] hover:bg-[var(--ys-mute)]/50 text-[var(--ys-ink)] font-bold rounded-xl border border-[var(--ys-mute)] transition-all duration-300">
                Browse Episodes
              </button>
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="all-speakers-heading" className="ys-fade-in-up motion-reduce:animate-none [animation-delay:100ms]">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <SectionHeader title="Industry Experts" subtitle="Learn from the best in the business" />
          
          <div className="relative w-full sm:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--ys-body-mid)]" />
            <input 
              type="text" 
              placeholder="Search speakers..." 
              className="w-full pl-9 pr-4 py-2.5 bg-[var(--ys-canvas)] border border-[var(--ys-mute)] rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[var(--ys-primary)] focus:border-transparent transition-all"
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {otherSpeakers.map((speaker) => (
            <SpeakerCard key={speaker.id} speaker={speaker} />
          ))}
        </div>
      </section>

    </div>
  )
}