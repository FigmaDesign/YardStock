import { useState, useCallback, memo } from 'react'
import YardLogo from '../commonfiles/Images/YardStackLogowithouttext.png'
import ApartmentIcon from '@mui/icons-material/Apartment'
import PeopleIcon from '@mui/icons-material/People'
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee'
import EventNoteIcon from '@mui/icons-material/EventNote'
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined'
import SearchIcon from '@mui/icons-material/Search'

import Sidebar from '../commonfiles/sidebar/Sidebar'
import TabBar from '../commonfiles/TabBar'
import SubTabBar from '../commonfiles/TabBar/SubTabBar'
import { NAV_ITEMS, COMMON_SUBTABS, type SubTabItem, type NavKey } from '../commonfiles/sidebar/data'

interface DashboardProps {
  viewMode?: 'desktop' | 'mobile'
}

const STAT_CARDS = [
  { Icon: ApartmentIcon,     color: '#1d4ed8', bg: '#eff6ff' },
  { Icon: PeopleIcon,        color: '#16a34a', bg: '#f0fdf4' },
  { Icon: CurrencyRupeeIcon, color: '#d97706', bg: '#fffbeb' },
  { Icon: EventNoteIcon,     color: '#dc2626', bg: '#fef2f2' },
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
  subTabs: subTabs ?? [] 
}))

const StatCards = memo(function StatCards() {
  return (
    <section aria-label="Key Statistics Loading" className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-5">
      {STAT_CARDS.map((_, idx) => (
        <div 
          key={idx} 
          className={`ys-fade-in-up motion-reduce:animate-none motion-reduce:transform-none motion-reduce:opacity-100 ${STAGGER_DELAYS[idx]}`} 
        >
          <div 
            role="status"
            aria-label="Loading statistic card"
            className="ys-skeleton rounded-[8px] min-h-20 border border-[#eef0f3] shadow-[0_1px_6px_rgba(0,0,0,0.04)]" 
          />
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
        className="ys-skeleton rounded-[8px] overflow-hidden h-64 border border-[#eef0f3] shadow-[0_1px_6px_rgba(0,0,0,0.06)]" 
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
        className="ys-skeleton rounded-[8px] h-64 border border-[#eef0f3] shadow-[0_1px_6px_rgba(0,0,0,0.06)]" 
      />
    </section>
  )
})

function DesktopDashboard() {
  const [activeNav, setActiveNav] = useState<NavKey>('announcements')
  const [activeSubTab, setActiveSubTab] = useState(SUB_TABS[0].label)

  return (
    <main className="flex h-full overflow-hidden">
      <Sidebar active={activeNav} onNavigate={setActiveNav} />

      <div className="flex-1 flex flex-col overflow-hidden bg-[#f5f6f8] min-w-0">
        <header className="shrink-0 bg-white border-b border-[#eef0f3] px-6 py-3 flex items-center justify-between shadow-[0_1px_4px_rgba(0,0,0,0.04)] gap-4">
          <div className="min-w-0">
            <h1 className="text-[1.15rem] font-extrabold text-[#0f1e3d] leading-none mt-0.5 capitalize truncate">
              {activeNav.replace(/([a-z])([A-Z])/g, '$1 $2')}
            </h1>
          </div>
          
          <div className="flex items-center gap-3 shrink-0">
            <div className="hidden sm:flex items-center gap-2 bg-[#f5f6f8] border border-[#eef0f3] rounded-[8px] px-3 py-2 focus-within:ring-2 focus-within:ring-[#16a34a] focus-within:border-[#16a34a] transition-all duration-200">
              <SearchIcon sx={{ fontSize: 15, color: '#9199a8' }} aria-hidden="true" />
              <input 
                type="search"
                aria-label="Search dashboard"
                placeholder="Search..." 
                className="bg-transparent text-[0.78rem] text-[#374151] placeholder-[#9199a8] outline-none w-36" 
              />
            </div>
            
            <button 
              aria-label="Notifications, 1 unread"
              className="relative w-9 h-9 shrink-0 rounded-[8px] border border-[#eef0f3] bg-white flex items-center justify-center hover:bg-[#f5f6f8] active:scale-[0.93] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#16a34a] transition-all duration-150 motion-reduce:transition-none motion-reduce:transform-none"
            >
              <NotificationsOutlinedIcon sx={{ fontSize: 18, color: '#374151' }} aria-hidden="true" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-[#16a34a] rounded-full" aria-hidden="true" />
            </button>
            
            <button 
              aria-label="User profile menu"
              className="w-9 h-9 shrink-0 rounded-[8px] bg-linear-to-br from-[#16a34a] to-[#15803d] flex items-center justify-center text-white font-extrabold text-[0.85rem] shadow-sm select-none cursor-pointer hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#16a34a] focus-visible:ring-offset-2 focus-visible:ring-offset-[#f5f6f8] active:scale-95 transition-all duration-150 motion-reduce:transition-none motion-reduce:transform-none"
            >
              Y
            </button>
          </div>
        </header>

        <nav aria-label="Secondary Navigation" className="shrink-0 border-b border-[#eef0f3]">
          <SubTabBar subTabs={SUB_TABS} active={activeSubTab} onChange={setActiveSubTab} variant="desktop" />
        </nav>

        <div className="flex-1 overflow-y-auto px-6 py-5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#16a34a]" tabIndex={-1}>
          <StatCards />
          
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
            <div className="lg:col-span-3">
              <RecentProperties />
            </div>
            <div className="lg:col-span-2">
              <ActivityFeed />
            </div>
          </div>
        </div>
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
    <main className="h-full flex flex-col overflow-hidden bg-[#f5f6f8]">
      <header className="shrink-0 bg-[#0d1f3c] px-4 pt-4 pb-3 flex items-center justify-between gap-3">
        <div className="flex items-center gap-2.5 min-w-0">
          <img src={YardLogo} alt="Yard Logo" aria-hidden="true" className="w-8 h-8 object-contain shrink-0" />
          <div className="min-w-0">
            <h1 className="text-[0.85rem] font-extrabold text-white leading-none tracking-wide truncate">YARD</h1>
            <p className="text-[0.5rem] text-white/50 tracking-widest uppercase mt-0.5 truncate">Real Estate Intelligence</p>
          </div>
        </div>
        
        <div className="flex items-center gap-2 shrink-0">
          <button 
            aria-label="Notifications, 1 unread"
            className="relative w-8 h-8 shrink-0 rounded-[8px] bg-white/10 flex items-center justify-center hover:bg-white/20 active:scale-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4ade80] transition-all duration-150 motion-reduce:transition-none motion-reduce:transform-none"
          >
            <NotificationsOutlinedIcon sx={{ fontSize: 17, color: 'white' }} aria-hidden="true" />
            <span className="absolute top-1 right-1 w-1.5 h-1.5 bg-[#4ade80] rounded-full" aria-hidden="true" />
          </button>
          <button 
            aria-label="User profile menu"
            className="w-8 h-8 shrink-0 rounded-[8px] bg-linear-to-br from-[#22c55e] to-[#0ea5e9] flex items-center justify-center text-white font-extrabold text-[0.8rem] shadow-sm select-none active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4ade80] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0d1f3c] transition-transform duration-150 motion-reduce:transition-none motion-reduce:transform-none"
          >
            Y
          </button>
        </div>
      </header>

      <nav aria-label="Main Navigation" className="shrink-0">
        <TabBar
          tabs={TAB_ITEMS}
          active={activeTab}
          activeSubTab={activeSubTab}
          onChange={handleTabChange}
          onSubTabChange={setActiveSubTab}
        />
      </nav>

      <div className="flex-1 overflow-y-auto px-4 py-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] scrollbar-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#16a34a]" tabIndex={-1}>
        <header className="mb-4">
          <p className="text-[0.65rem] font-semibold text-[#9199a8] uppercase tracking-widest truncate">
            {activeItem?.label ?? 'Dashboard'}
          </p>
          <h2 className="text-[1.1rem] font-extrabold text-[#0f1e3d] mt-0.5 truncate">{activeSubTab}</h2>
        </header>

        <StatCards />

        <div className="mb-4">
          <RecentProperties />
        </div>

        <ActivityFeed />
      </div>
    </main>
  )
}

export default function Dashboard({ viewMode = 'desktop' }: DashboardProps) {
  return viewMode === 'mobile' ? <MobileDashboard /> : <DesktopDashboard />
}