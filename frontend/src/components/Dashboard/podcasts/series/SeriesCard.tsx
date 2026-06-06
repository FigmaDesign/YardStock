import HeadphonesIcon from '@mui/icons-material/Headphones'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import PlayArrowIcon from '@mui/icons-material/PlayArrow'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import type { Series } from '../data'

interface SeriesCardProps {
  series: Series
}

export default function SeriesCard({ series }: SeriesCardProps) {
  return (
    <div
      className="group flex items-center p-2.5 @sm:p-4 gap-2.5 @sm:gap-4 hover:bg-[var(--ys-surface-alt)] rounded-lg hover:border hover:border-[var(--ys-mute)] hover:shadow-sm transition-all duration-200 cursor-pointer w-full"
      tabIndex={0}
      role="article"
    >
      <div
        className="shrink-0 w-12 h-12 @sm:w-16 @sm:h-16 rounded-lg flex items-center justify-center shadow-sm"
        style={{ backgroundColor: `${series.color}18` }}
      >
        <HeadphonesIcon style={{ color: series.color, fontSize: 24 }} aria-hidden="true" />
      </div>

      <div className="flex-1 min-w-0 flex flex-col justify-center py-0.5">
        <h3 className="text-[14px] @sm:text-base font-bold text-[var(--ys-ink)] leading-snug truncate">
          {series.title}
        </h3>
        <p className="text-[11px] @sm:text-sm text-[var(--ys-body)] font-medium mt-0.5 @sm:mt-1 truncate">
          {series.description}
        </p>
        <div className="flex items-center gap-2 mt-1 @sm:mt-1.5 flex-wrap">
          <span
            className="inline-flex items-center gap-1 text-[10px] @sm:text-xs font-bold"
            style={{ color: series.color }}
          >
            <PlayArrowIcon style={{ fontSize: 12 }} aria-hidden="true" />
            {series.episodeCount} Episodes
          </span>
          <span className="text-[var(--ys-mute)] text-[10px]">•</span>
          <span className="inline-flex items-center gap-1 text-[10px] @sm:text-xs text-[var(--ys-body-accent)] font-medium">
            <AccessTimeIcon style={{ fontSize: 12 }} aria-hidden="true" />
            {series.totalDuration}
          </span>
        </div>
      </div>

      <ChevronRightIcon
        className="shrink-0 text-[var(--ys-body-accent)] group-hover:text-[var(--ys-body)] transition-colors"
        style={{ fontSize: 20 }}
        aria-hidden="true"
      />
    </div>
  )
}
