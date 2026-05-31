import { useState } from 'react'
import YardLogo from '../commonfiles/Images/YardStackLogowithouttext.png'
import ApartmentIcon from '@mui/icons-material/Apartment'
import PeopleIcon from '@mui/icons-material/People'
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee'
import EventNoteIcon from '@mui/icons-material/EventNote'
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined'
import SearchIcon from '@mui/icons-material/Search'

import Sidebar from '../commonfiles/sidebar/Sidebar'
import TabBar from '../commonfiles/TabBar'
import { NAV_ITEMS, type NavKey } from '../commonfiles/sidebar/data'

interface DashboardProps {
  viewMode?: 'desktop' | 'mobile'
}

const STAT_CARDS = [
  { Icon: ApartmentIcon,     color: '#1d4ed8', bg: '#eff6ff' },
  { Icon: PeopleIcon,        color: '#16a34a', bg: '#f0fdf4' },
  { Icon: CurrencyRupeeIcon, color: '#d97706', bg: '#fffbeb' },
  { Icon: EventNoteIcon,     color: '#dc2626', bg: '#fef2f2' },
]

const SUB_TABS = ['Overview', 'Properties', 'Analytics', 'Customers', 'Reports']

const TAB_ITEMS = NAV_ITEMS.map(({ key, label, Icon, subTabs }) => ({ 
  key, 
  label, 
  Icon, 
  subTabs: subTabs ?? [] 
}))

function StatCards() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-5">
      {STAT_CARDS.map((_, idx) => (
        <div key={idx} className="bg-white rounded-xl p-3.5 lg:p-4 shadow-[0_1px_6px_rgba(0,0,0,0.04)] border border-[#eef0f3] flex items-center justify-center min-h-[5rem]">
        </div>
      ))}
    </div>
  )
}

function RecentProperties() {
  return (
    <div className="bg-white rounded-2xl shadow-[0_1px_6px_rgba(0,0,0,0.06)] overflow-hidden h-64 border border-[#eef0f3]" />
  )
}

function ActivityFeed() {
  return (
    <div className="bg-white rounded-2xl shadow-[0_1px_6px_rgba(0,0,0,0.06)] h-64 border border-[#eef0f3]" />
  )
}

function DesktopDashboard() {
  const [activeNav, setActiveNav] = useState<NavKey>('dashboard')
  const [activeSubTab, setActiveSubTab] = useState(SUB_TABS[0])

  return (
    <div className="flex h-full overflow-hidden">
      <Sidebar active={activeNav} onNavigate={setActiveNav} />

      <div className="flex-1 flex flex-col overflow-hidden bg-[#f5f6f8] min-w-0">
        <div className="shrink-0 bg-white border-b border-[#eef0f3] px-6 py-3 flex items-center justify-between shadow-[0_1px_4px_rgba(0,0,0,0.04)] gap-4">
          <div className="min-w-0">
            <p className="text-[0.65rem] font-semibold text-[#9199a8] uppercase tracking-[0.1em] truncate">Workspace</p>
            <h1 className="text-[1.15rem] font-extrabold text-[#0f1e3d] leading-none mt-0.5 capitalize truncate">
              {activeNav.replace(/([a-z])([A-Z])/g, '$1 $2')}
            </h1>
          </div>
          
          <div className="flex items-center gap-3 shrink-0">
            <div className="hidden sm:flex items-center gap-2 bg-[#f5f6f8] border border-[#eef0f3] rounded-lg px-3 py-2">
              <SearchIcon sx={{ fontSize: 15, color: '#9199a8' }} />
              <input placeholder="Search..." className="bg-transparent text-[0.78rem] text-[#374151] placeholder-[#9199a8] outline-none w-36" />
            </div>
            
            <button className="relative w-9 h-9 shrink-0 rounded-lg border border-[#eef0f3] bg-white flex items-center justify-center hover:bg-[#f5f6f8] transition-colors">
              <NotificationsOutlinedIcon sx={{ fontSize: 18, color: '#374151' }} />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-[#16a34a] rounded-full" />
            </button>
            
            <div className="w-9 h-9 shrink-0 rounded-lg bg-gradient-to-br from-[#16a34a] to-[#15803d] flex items-center justify-center text-white font-extrabold text-[0.85rem] shadow-sm select-none cursor-pointer">
              Y
            </div>
          </div>
        </div>

        <div className="shrink-0 bg-white border-b border-[#eef0f3] px-6 flex items-center overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {SUB_TABS.map(tab => (
            <button
              key={tab}
              onClick={() => setActiveSubTab(tab)}
              className={`px-4 py-3 text-[0.78rem] font-semibold border-b-2 transition-colors whitespace-nowrap shrink-0 ${
                activeSubTab === tab
                  ? 'border-[#16a34a] text-[#16a34a]'
                  : 'border-transparent text-[#6b7280] hover:text-[#374151]'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-5">
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
    </div>
  )
}

function MobileDashboard() {
  const [activeTab, setActiveTab] = useState('dashboard')
  const [activeSubTab, setActiveSubTab] = useState('Overview')

  const activeItem = TAB_ITEMS.find(t => t.key === activeTab)

  return (
    <div className="h-full flex flex-col overflow-hidden bg-[#f5f6f8]">
      <div className="shrink-0 bg-[#0d1f3c] px-4 pt-4 pb-3 flex items-center justify-between gap-3">
        <div className="flex items-center gap-2.5 min-w-0">
          <img src={YardLogo} alt="Yard" className="w-8 h-8 object-contain shrink-0" />
          <div className="min-w-0">
            <p className="text-[0.85rem] font-extrabold text-white leading-none tracking-wide truncate">YARD</p>
            <p className="text-[0.5rem] text-white/50 tracking-widest uppercase mt-0.5 truncate">Real Estate Intelligence</p>
          </div>
        </div>
        
        <div className="flex items-center gap-2 shrink-0">
          <button className="relative w-8 h-8 shrink-0 rounded-lg bg-white/10 flex items-center justify-center">
            <NotificationsOutlinedIcon sx={{ fontSize: 17, color: 'white' }} />
            <span className="absolute top-1 right-1 w-1.5 h-1.5 bg-[#4ade80] rounded-full" />
          </button>
          <div className="w-8 h-8 shrink-0 rounded-lg bg-gradient-to-br from-[#22c55e] to-[#0ea5e9] flex items-center justify-center text-white font-extrabold text-[0.8rem] shadow-sm select-none">
            Y
          </div>
        </div>
      </div>

      <div className="shrink-0">
        <TabBar
          tabs={TAB_ITEMS}
          active={activeTab}
          activeSubTab={activeSubTab}
          onChange={key => {
            setActiveTab(key)
            const item = TAB_ITEMS.find(t => t.key === key)
            if (item?.subTabs?.length) setActiveSubTab(item.subTabs[0].label)
          }}
          onSubTabChange={setActiveSubTab}
        />
      </div>

      {/* Mobile scroll container with hidden scrollbar */}
      <div className="flex-1 overflow-y-auto px-4 py-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        <div className="mb-4">
          <p className="text-[0.65rem] font-semibold text-[#9199a8] uppercase tracking-[0.1em] truncate">
            {activeItem?.label ?? 'Dashboard'}
          </p>
          <h2 className="text-[1.1rem] font-extrabold text-[#0f1e3d] mt-0.5 truncate">{activeSubTab}</h2>
        </div>

        <StatCards />

        <div className="mb-4">
          <RecentProperties />
        </div>

        <ActivityFeed />
      </div>
    </div>
  )
}

export default function Dashboard({ viewMode = 'desktop' }: DashboardProps) {
  return viewMode === 'mobile' ? <MobileDashboard /> : <DesktopDashboard />
}