import { useState, useCallback, memo } from 'react'
import ApartmentIcon from '@mui/icons-material/Apartment'
import PeopleIcon from '@mui/icons-material/People'
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee'
import EventNoteIcon from '@mui/icons-material/EventNote'

import TabBar from '../commonfiles/TabBar'
import SubTabBar from '../commonfiles/TabBar/SubTabBar'
import { NAV_ITEMS, COMMON_SUBTABS, type SubTabItem, type NavKey } from '../commonfiles/sidebar/data'
import Announcements from './announcements/Announcements'
import DashboardHeader from './DashboardHeader'

interface DashboardProps {
  viewMode?: 'desktop' | 'mobile'
}

const STAT_CARDS = [
  { Icon: ApartmentIcon, color: '#1d4ed8', bgGradient: 'from-blue-50/80 to-blue-100/40', border: 'border-blue-100/50' },
  { Icon: PeopleIcon, color: '#16a34a', bgGradient: 'from-green-50/80 to-green-100/40', border: 'border-green-100/50' },
  { Icon: CurrencyRupeeIcon, color: '#d97706', bgGradient: 'from-amber-50/80 to-amber-100/40', border: 'border-amber-100/50' },
  { Icon: EventNoteIcon, color: '#dc2626', bgGradient: 'from-red-50/80 to-red-100/40', border: 'border-red-100/50' },
]

const STAGGER_DELAYS = [
  '[animation-delay:0ms]',
  '[animation-delay:65ms]',
  '[animation-delay:130ms]',
  '[animation-delay:195ms]',
] as const

const SUB_TABS: SubTabItem[] = COMMON_SUBTABS

const TAB_ITEMS = NAV_ITEMS.map(({ key, label, Icon, subTabs }) => ({
  key,
  label,
  Icon,
  subTabs: key === 'announcements' ? [] : (subTabs ?? []),
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
            className={`ys-skeleton rounded-xl min-h-[5.5rem] border ${card.border} bg-gradient-to-br ${card.bgGradient} shadow-sm backdrop-blur-sm relative overflow-hidden flex items-center p-4`}
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
        className="ys-skeleton rounded-xl overflow-hidden h-64 border border-[#eef0f3] bg-gradient-to-br from-white to-[#f8f9fa] shadow-[0_2px_10px_rgba(0,0,0,0.03)]"
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
        className="ys-skeleton rounded-xl h-64 border border-[#eef0f3] bg-gradient-to-br from-white to-[#f8f9fa] shadow-[0_2px_10px_rgba(0,0,0,0.03)]"
      />
    </section>
  )
})

function DesktopDashboard() {
  const [activeTab, setActiveTab] = useState<NavKey>('announcements')
  const [activeSubTab, setActiveSubTab] = useState(SUB_TABS[0].label)

  const activeItem = TAB_ITEMS.find(t => t.key === activeTab)

  const handleTabChange = useCallback((key: string) => {
    setActiveTab(key as NavKey)
    const item = TAB_ITEMS.find(t => t.key === key)
    if (item?.subTabs?.length) {
      setActiveSubTab(item.subTabs[0].label)
    }
  }, [])

  return (
    <main className="flex flex-col h-full overflow-hidden bg-gradient-to-br from-[#f8f9fa] to-[#eef0f3]">
      <DashboardHeader />

      <nav aria-label="Main Navigation" className="shrink-0 bg-white border-b border-[#eef0f3] shadow-sm z-10 px-6">
        <TabBar
          tabs={TAB_ITEMS}
          active={activeTab}
          activeSubTab={activeSubTab}
          onChange={handleTabChange}
          onSubTabChange={setActiveSubTab}
        />
      </nav>

      {activeTab !== 'announcements' && (
        <nav aria-label="Secondary Navigation" className="shrink-0 border-b border-[#eef0f3] bg-white/60 backdrop-blur-md px-6 py-1">
          <SubTabBar subTabs={SUB_TABS} active={activeSubTab} onChange={setActiveSubTab} variant="desktop" />
        </nav>
      )}

      <div className="flex-1 overflow-hidden flex flex-col focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#16a34a]" tabIndex={-1}>
        {activeTab === 'announcements' ? (
          <Announcements />
        ) : (
          <div className="flex-1 overflow-y-auto px-6 py-6">
            <header className="mb-6">
              <p className="text-[0.7rem] font-semibold text-[#6b7280] uppercase tracking-widest truncate">
                {activeItem?.label ?? 'Dashboard'}
              </p>
              <h2 className="text-[1.5rem] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#0f1e3d] to-[#3b4c6b] mt-1 truncate">
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
  const [activeTab, setActiveTab] = useState('announcements')
  const [activeSubTab, setActiveSubTab] = useState('Home')

  const activeItem = TAB_ITEMS.find(t => t.key === activeTab)

  const handleTabChange = useCallback((key: string) => {
    setActiveTab(key)
    const item = TAB_ITEMS.find(t => t.key === key)
    if (item?.subTabs?.length) {
      setActiveSubTab(item.subTabs[0].label)
    }
  }, [])

  return (
    <main className="h-full flex flex-col overflow-hidden bg-gradient-to-br from-[#f8f9fa] to-[#eef0f3]">
      <DashboardHeader />

      <nav aria-label="Main Navigation" className="shrink-0 bg-white shadow-sm z-10">
        <TabBar
          tabs={TAB_ITEMS}
          active={activeTab}
          activeSubTab={activeSubTab}
          onChange={handleTabChange}
          onSubTabChange={setActiveSubTab}
        />
      </nav>

      {activeTab !== 'announcements' && (
        <nav aria-label="Secondary Navigation" className="shrink-0 border-b border-[#eef0f3] bg-white/60 backdrop-blur-md">
          <SubTabBar subTabs={SUB_TABS} active={activeSubTab} onChange={setActiveSubTab} variant="mobile" />
        </nav>
      )}

      <div className="flex-1 overflow-hidden flex flex-col [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] scrollbar-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#16a34a]" tabIndex={-1}>
        {activeTab === 'announcements' ? (
          <Announcements />
        ) : (
          <div className="flex-1 overflow-y-auto px-4 py-5">
            <header className="mb-5">
              <p className="text-[0.65rem] font-semibold text-[#6b7280] uppercase tracking-widest truncate">
                {activeItem?.label ?? 'Dashboard'}
              </p>
              <h2 className="text-[1.2rem] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#0f1e3d] to-[#3b4c6b] mt-1 truncate">
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
    </main>
  )
}

export default function Dashboard({ viewMode = 'desktop' }: DashboardProps) {
  return viewMode === 'mobile' ? <MobileDashboard /> : <DesktopDashboard />
}