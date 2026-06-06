import StarIcon from '@mui/icons-material/Star'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import MicIcon from '@mui/icons-material/Mic'
import type { Speaker } from '../data'

const SPEAKER_IMAGES: Record<string, string> = {
  'sp-1': 'https://i.pravatar.cc/80?img=47',
  'sp-2': 'https://i.pravatar.cc/80?img=68',
  'sp-3': 'https://i.pravatar.cc/80?img=48',
  'sp-4': 'https://i.pravatar.cc/80?img=52',
  'sp-5': 'https://i.pravatar.cc/80?img=12',
}

interface SpeakerCardProps {
  speaker: Speaker
}

export default function SpeakerCard({ speaker }: SpeakerCardProps) {
  const avatarSrc = SPEAKER_IMAGES[speaker.id]

  return (
    <div
      className="group flex items-center p-2.5 @sm:p-4 gap-2.5 @sm:gap-4 hover:bg-white rounded-lg hover:border hover:border-slate-100 hover:shadow-sm transition-all duration-200 cursor-pointer w-full"
      tabIndex={0}
      role="article"
    >
      <img
        src={avatarSrc}
        alt={speaker.name}
        className="shrink-0 w-12 h-12 @sm:w-16 @sm:h-16 rounded-lg object-cover shadow-sm"
        onError={(e) => {
          const img = e.currentTarget
          img.style.display = 'none'
          const fallback = img.nextElementSibling as HTMLElement | null
          if (fallback) fallback.style.display = 'flex'
        }}
      />
      <div
        className="shrink-0 w-12 h-12 @sm:w-16 @sm:h-16 rounded-lg items-center justify-center text-white font-bold text-lg @sm:text-xl shadow-sm"
        style={{ backgroundColor: speaker.avatarColor, display: 'none' }}
      >
        {speaker.avatarInitials}
      </div>

      <div className="flex-1 min-w-0 flex flex-col justify-center py-0.5">
        <div className="flex items-center gap-1 min-w-0">
          <h3 className="text-[14px] @sm:text-base font-bold text-slate-900 leading-snug truncate">
            {speaker.name}
          </h3>
          {speaker.badge && (
            <StarIcon className="shrink-0 text-amber-400" style={{ fontSize: 14 }} aria-hidden="true" />
          )}
        </div>
        <p className="text-[11px] @sm:text-sm text-[#6B21A8] font-semibold mt-0.5 @sm:mt-1 truncate">
          {speaker.role}
        </p>
        <div className="flex items-center gap-1 mt-1 @sm:mt-1.5 flex-wrap">
          <MicIcon className="text-slate-400 shrink-0" style={{ fontSize: 12 }} aria-hidden="true" />
          <span className="text-[10px] @sm:text-xs text-slate-500 font-medium">{speaker.sessions} Sessions</span>
          {speaker.badge && (
            <>
              <span className="text-slate-300 text-[10px] @sm:text-xs mx-1">•</span>
              <span className="text-[10px] @sm:text-xs text-amber-600 font-semibold">{speaker.badge}</span>
            </>
          )}
        </div>
      </div>

      <ChevronRightIcon
        className="shrink-0 text-slate-400 group-hover:text-slate-600 transition-colors"
        style={{ fontSize: 20 }}
        aria-hidden="true"
      />
    </div>
  )
}