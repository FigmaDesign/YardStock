import { memo } from 'react'
import TuneIcon from '@mui/icons-material/Tune'
import { FILTER_TABS } from './data'

interface ActivityTabsProps {
  active: string
  onChange: (key: string) => void
}

const ActivityTabs = memo(function ActivityTabs({ active, onChange }: ActivityTabsProps) {
  return (
    <div className="flex items-center justify-center gap-3 px-4 py-4 overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
      {FILTER_TABS.map((tab) => {
        const isActive = active === tab.key
        return (
          <button
            key={tab.key}
            type="button"
            onClick={() => onChange(tab.key)}
            className={`shrink-0 flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 active:scale-95 border ${
              isActive
                ? 'bg-[var(--color-brand-purple)] text-white border-[var(--color-brand-purple)] shadow-[0_4px_12px_rgba(107,33,168,0.25)]'
                : 'bg-white text-[var(--color-text-secondary)] border-[var(--color-border-default)] hover:border-[#cfcfdb] hover:bg-gray-50'
            }`}
          >
            <tab.Icon sx={{ fontSize: 18 }} className={isActive ? 'text-white' : ''} style={!isActive ? { color: tab.color } : undefined} />
            <span>{tab.label}</span>
            <span className={isActive ? 'text-white/80' : 'text-[var(--color-text-primary)]'}>{tab.count}</span>
          </button>
        )
      })}
      <button
        type="button"
        className="shrink-0 flex items-center gap-1.5 px-4 py-2 rounded-xl border border-[var(--color-border-default)] bg-white text-[var(--color-text-primary)] hover:bg-gray-50 transition-all duration-200 active:scale-95 font-semibold text-sm"
        aria-label="Filter options"
      >
        <TuneIcon sx={{ fontSize: 18 }} className="text-[var(--color-brand-purple)]" />
        Filter
      </button>
    </div>
  )
})

export default ActivityTabs
