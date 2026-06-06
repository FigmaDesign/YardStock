import { useState, useCallback, memo } from 'react'
import ApartmentIcon from '@mui/icons-material/Apartment'
import PeopleIcon from '@mui/icons-material/People'
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee'
import EventNoteIcon from '@mui/icons-material/EventNote'

import TabBar from '../commonfiles/TabBar'
import SubTabBar from '../commonfiles/TabBar/SubTabBar'
import FooterNav from '../commonfiles/FooterNav'
import { NAV_ITEMS, type NavKey } from '../commonfiles/sidebar/data'
import Announcements from './announcements/Announcements'
import Podcasts from './podcasts/Podcasts'
import DashboardHeader from './DashboardHeader'

interface DashboardProps {
  viewMode?: 'desktop' | 'mobile'
}

const STAT_CARDS = [
  { Icon: ApartmentIcon, color: 'var(--ys-ink)', bgGradient: 'from-[var(--ys-canvas-soft)] to-[var(--ys-canvas)]', border: 'border-[var(--ys-mute)]' },
  { Icon: PeopleIcon, color: 'var(--ys-primary)', bgGradient: 'from-[var(--ys-canvas-soft)] to-[var(--ys-canvas)]', border: 'border-[var(--ys-mute)]' },
  { Icon: CurrencyRupeeIcon, color: 'var(--ys-ink-mid)', bgGradient: 'from-[var(--ys-canvas-soft)] to-[var(--ys-canvas)]', border: 'border-[var(--ys-mute)]' },
  { Icon: EventNoteIcon, color: 'var(--ys-ink-soft)', bgGradient: 'from-[var(--ys-canvas-soft)] to-[var(--ys-canvas)]', border: 'border-[var(--ys-mute)]' },
]

const STAGGER_DELAYS = [
  '[animation-delay:0ms]',
  '[animation-delay:65ms]',
  '[animation-delay:130ms]',
  '[animation-delay:195ms]',
] as const

const TAB_ITEMS = NAV_ITEMS.map(({ key, label, Icon, subTabs }) => ({
  key,
  label,
  Icon,
  subTabs: subTabs ?? [],
}))

const StatCards = memo(function StatCards() {
  return (
    <section aria-label="Key Statistics Loading" className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      {STAT_CARDS.map((card, idx) => (
        <div
          key={idx}
          className={`ys-fade-in-up motion-reduce:animate-none motion-reduce:transform-none motion-reduce:opacity-100 ${STAGGER_DELAYS[idx]}`}
        >
          <div
            role="status"
            aria-label="Loading statistic card"
            className={`ys-skeleton rounded-[8px] min-h-[5.5rem] border ${card.border} bg-gradient-to-br ${card.bgGradient} shadow-sm backdrop-blur-sm relative overflow-hidden flex items-center p-4`}
          >
            <card.Icon 
              className="absolute -right-2 -bottom-2 opacity-[0.07]" 
              sx={{ fontSize: 64, color: card.color }} 
              aria-hidden="true"
            />
          </div>
        </div>
      ))}
    </section>
  )
})

const RecentProperties = memo(function RecentProperties() {
  return (
    <section aria-label="Recent Properties Loading" className="ys-fade-in-up motion-reduce:animate-none motion-reduce:transform-none motion-reduce:opacity-100 [animation-delay:180ms]">
      <div
        role="status"
        aria-label="Loading recent properties"
        className="ys-skeleton rounded-[8px] overflow-hidden h-64 border border-[var(--ys-mute)] bg-gradient-to-br from-[var(--ys-canvas)] to-[var(--ys-canvas-soft)] shadow-[0_2px_10px_rgba(0,0,0,0.03)]"
      />
    </section>
  )
})

const ActivityFeed = memo(function ActivityFeed() {
  return (
    <section aria-label="Activity Feed Loading" className="ys-fade-in-up motion-reduce:animate-none motion-reduce:transform-none motion-reduce:opacity-100 [animation-delay:260ms]">
      <div
        role="status"
        aria-label="Loading activity feed"
        className="ys-skeleton rounded-[8px] h-64 border border-[var(--ys-mute)] bg-gradient-to-br from-[var(--ys-canvas)] to-[var(--ys-canvas-soft)] shadow-[0_2px_10px_rgba(0,0,0,0.03)]"
      />
    </section>
  )
})

function DesktopDashboard() {
  const [activeTab, setActiveTab] = useState<NavKey>('podcasts')
  const [activeSubTab, setActiveSubTab] = useState(TAB_ITEMS[0]?.subTabs?.[0]?.label ?? '')

  const activeItem = TAB_ITEMS.find(t => t.key === activeTab)
  const currentSubTabs = activeItem?.subTabs ?? []

  const handleTabChange = useCallback((key: string) => {
    setActiveTab(key as NavKey)
    const item = TAB_ITEMS.find(t => t.key === key)
    if (item?.subTabs?.length) {
      setActiveSubTab(item.subTabs[0].label)
    }
  }, [])

  return (
    <main className="flex flex-col h-full overflow-hidden bg-gradient-to-br from-[var(--ys-canvas)] to-[var(--ys-canvas-soft)]">
      <DashboardHeader />

      <nav aria-label="Main Navigation" className="shrink-0 bg-[var(--ys-canvas)] border-b border-[var(--ys-mute)] shadow-sm z-10">
        <TabBar
          tabs={TAB_ITEMS}
          active={activeTab}
          activeSubTab={activeSubTab}
          onChange={handleTabChange}
          onSubTabChange={setActiveSubTab}
        />
      </nav>

      {currentSubTabs.length > 0 && (
        <nav aria-label="Secondary Navigation" className="shrink-0 border-b border-[var(--ys-mute)] bg-[var(--ys-canvas)]/60 backdrop-blur-md px-6 py-1">
          <SubTabBar subTabs={currentSubTabs} active={activeSubTab} onChange={setActiveSubTab} variant="desktop" />
        </nav>
      )}

      <div className="flex-1 overflow-hidden flex flex-col focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[var(--ys-primary)]" tabIndex={-1}>
        {activeTab === 'announcements' ? (
          <Announcements />
        ) : activeTab === 'podcasts' ? (
          <Podcasts activeSubTab={activeSubTab} />
        ) : (
          <div className="flex-1 overflow-y-auto px-6 py-6">
            <header className="mb-6">
              <p className="text-[0.7rem] font-semibold text-[var(--ys-body-mid)] uppercase tracking-widest truncate">
                {activeItem?.label ?? 'Dashboard'}
              </p>
              <h2 className="text-[1.5rem] font-extrabold text-[var(--ys-ink)] mt-1 truncate">
                {activeSubTab}
              </h2>
            </header>
            <StatCards />
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
              <div className="lg:col-span-3">
                <RecentProperties />
              </div>
              <div className="lg:col-span-2">
                <ActivityFeed />
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  )
}

function MobileDashboard() {
  const [activeTab, setActiveTab] = useState('podcasts')
  const [activeSubTab, setActiveSubTab] = useState('')
  const [activeFooterTab, setActiveFooterTab] = useState('home')

  const activeItem = TAB_ITEMS.find(t => t.key === activeTab)
  const currentSubTabs = activeItem?.subTabs ?? []

  const handleTabChange = useCallback((key: string) => {
    setActiveTab(key)
    const item = TAB_ITEMS.find(t => t.key === key)
    if (item?.subTabs?.length) {
      setActiveSubTab(item.subTabs[0].label)
    }
  }, [])

  return (
    <main className="h-full flex flex-col overflow-hidden bg-gradient-to-br from-[var(--ys-canvas)] to-[var(--ys-canvas-soft)]">
      <DashboardHeader />

      <nav aria-label="Main Navigation" className="shrink-0 bg-[var(--ys-canvas)] shadow-sm z-10">
        <TabBar
          tabs={TAB_ITEMS}
          active={activeTab}
          activeSubTab={activeSubTab}
          onChange={handleTabChange}
          onSubTabChange={setActiveSubTab}
        />
      </nav>

      {currentSubTabs.length > 0 && (
        <nav aria-label="Secondary Navigation" className="shrink-0 border-b border-[var(--ys-mute)] bg-[var(--ys-canvas)]/60 backdrop-blur-md">
          <SubTabBar subTabs={currentSubTabs} active={activeSubTab} onChange={setActiveSubTab} variant="mobile" />
        </nav>
      )}

      <div className="flex-1 overflow-hidden flex flex-col [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] scrollbar-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[var(--ys-primary)]" tabIndex={-1}>
        {activeTab === 'announcements' ? (
          <Announcements />
        ) : activeTab === 'podcasts' ? (
          <Podcasts activeSubTab={activeSubTab} />
        ) : (
          <div className="flex-1 overflow-y-auto px-4 py-5">
            <header className="mb-5">
              <p className="text-[0.65rem] font-semibold text-[var(--ys-body-mid)] uppercase tracking-widest truncate">
                {activeItem?.label ?? 'Dashboard'}
              </p>
              <h2 className="text-[1.2rem] font-extrabold text-[var(--ys-ink)] mt-1 truncate">
                {activeSubTab}
              </h2>
            </header>
            <StatCards />
            <div className="mb-5">
              <RecentProperties />
            </div>
            <ActivityFeed />
          </div>
        )}
      </div>

      <FooterNav active={activeFooterTab} onChange={setActiveFooterTab} />
    </main>
  )
}

export default function Dashboard({ viewMode = 'desktop' }: DashboardProps) {
  return viewMode === 'mobile' ? <MobileDashboard /> : <DesktopDashboard />
}