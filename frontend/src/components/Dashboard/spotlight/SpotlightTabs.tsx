import { memo } from 'react'
import TuneIcon from '@mui/icons-material/Tune'
import { FILTER_TABS } from './data'

interface SpotlightTabsProps {
  active: string
  onChange: (key: string) => void
}

const SpotlightTabs = memo(function SpotlightTabs({ active, onChange }: SpotlightTabsProps) {
  return (
    <div className="flex items-center gap-2 px-4 py-3 overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
      {FILTER_TABS.map((tab) => (
        <button
          key={tab.key}
          type="button"
          onClick={() => onChange(tab.key)}
          className={`shrink-0 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 active:scale-95 ${
            active === tab.key
              ? 'bg-[var(--color-brand-purple)] text-[var(--color-text-inverse)] shadow-[0_2px_12px_rgba(107,33,168,0.35)]'
              : 'bg-[var(--color-bg-muted)] text-[var(--color-text-secondary)] hover:bg-[var(--color-border-default)] hover:text-[var(--color-text-primary)]'
          }`}
        >
          {tab.label}
        </button>
      ))}
      <button
        type="button"
        className="shrink-0 w-10 h-10 rounded-full flex items-center justify-center bg-[var(--color-bg-muted)] text-[var(--color-text-secondary)] hover:bg-[var(--color-border-default)] hover:text-[var(--color-text-primary)] transition-all duration-200 active:scale-95"
        aria-label="Filter options"
      >
        <TuneIcon sx={{ fontSize: 20 }} />
      </button>
    </div>
  )
})

export default SpotlightTabs
