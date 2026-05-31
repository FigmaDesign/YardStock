import { useState } from 'react'
import YardLogo from '../commonfiles/Images/YardStackLogowithouttext.png'
import ApartmentIcon from '@mui/icons-material/Apartment'
import PeopleIcon from '@mui/icons-material/People'
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee'
import EventNoteIcon from '@mui/icons-material/EventNote'
import TrendingUpIcon from '@mui/icons-material/TrendingUp'
import TrendingDownIcon from '@mui/icons-material/TrendingDown'
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined'
import SearchIcon from '@mui/icons-material/Search'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord'
import Sidebar from '../commonfiles/sidebar/Sidebar'
import TabBar from '../commonfiles/TabBar'
import { NAV_ITEMS, type NavKey } from '../commonfiles/sidebar/data'

interface DashboardProps {
  viewMode?: 'desktop' | 'mobile'
}

const STAT_CARDS = [
  { label: 'Total Properties', value: '1,248', delta: '+12%', up: true,  Icon: ApartmentIcon,      color: '#1d4ed8', bg: '#eff6ff' },
  { label: 'Active Users',     value: '10,432', delta: '+8%',  up: true,  Icon: PeopleIcon,         color: '#16a34a', bg: '#f0fdf4' },
  { label: 'Revenue (Cr)',     value: '₹24.6',  delta: '+18%', up: true,  Icon: CurrencyRupeeIcon,  color: '#d97706', bg: '#fffbeb' },
  { label: 'Pending Bookings', value: '84',     delta: '-3%',  up: false, Icon: EventNoteIcon,      color: '#dc2626', bg: '#fef2f2' },
]

const RECENT_PROPERTIES = [
  { name: 'Oberoi Sky Garden',   type: 'Residential', location: 'Worli, Mumbai',         price: '₹4.2 Cr',  status: 'Available' },
  { name: 'Phoenix One BKC',     type: 'Commercial',  location: 'BKC, Mumbai',           price: '₹9.8 Cr',  status: 'Under Review' },
  { name: 'Godrej Central Park', type: 'Residential', location: 'Chembur, Mumbai',       price: '₹2.1 Cr',  status: 'Available' },
  { name: 'DLF Horizon Towers',  type: 'Commercial',  location: 'Cyber City, Gurugram',  price: '₹15.5 Cr', status: 'Sold' },
  { name: 'Prestige Lake Ridge', type: 'Villa',       location: 'Kanakapura, Bangalore', price: '₹3.7 Cr',  status: 'Available' },
]

const ACTIVITY = [
  { text: 'New booking for Oberoi Sky Garden',    time: '2 min ago',  dot: '#16a34a' },
  { text: 'Agent Ramesh added 3 new properties',  time: '18 min ago', dot: '#1d4ed8' },
  { text: 'Payment received from Priya Sharma',   time: '1 hr ago',   dot: '#d97706' },
  { text: 'Site visit scheduled — Phoenix BKC',   time: '3 hr ago',   dot: '#16a34a' },
  { text: 'Godrej Central Park marked as Under Review', time: '5 hr ago', dot: '#dc2626' },
]

const SUB_TABS = ['Overview', 'Properties', 'Analytics', 'Customers', 'Reports']

const STATUS_COLOR: Record<string, string> = {
  'Available':    'bg-[#dcfce7] text-[#15803d]',
  'Under Review': 'bg-[#fef9c3] text-[#a16207]',
  'Sold':         'bg-[#fee2e2] text-[#dc2626]',
}

const TAB_ITEMS = NAV_ITEMS.map(({ key, label, Icon, subTabs }) => ({ key, label, Icon, subTabs }))

function StatCards() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-5">
      {STAT_CARDS.map(({ label, value, delta, up, Icon, color, bg }) => (
        <div key={label} className="bg-white rounded-2xl p-4 shadow-[0_1px_6px_rgba(0,0,0,0.06)] flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <div className="rounded-xl p-2" style={{ background: bg }}>
              <Icon sx={{ fontSize: 20, color }} />
            </div>
            <span className={`flex items-center gap-0.5 text-[0.7rem] font-bold ${up ? 'text-[#16a34a]' : 'text-[#dc2626]'}`}>
              {up ? <TrendingUpIcon sx={{ fontSize: 13 }} /> : <TrendingDownIcon sx={{ fontSize: 13 }} />}
              {delta}
            </span>
          </div>
          <div>
            <p className="text-[1.2rem] font-extrabold text-[#0f1e3d] leading-none">{value}</p>
            <p className="text-[0.68rem] text-[#6b7280] mt-0.5">{label}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

function RecentProperties() {
  return (
    <div className="bg-white rounded-2xl shadow-[0_1px_6px_rgba(0,0,0,0.06)] overflow-hidden">
      <div className="flex items-center justify-between px-5 py-4 border-b border-[#f0f2f5]">
        <h3 className="text-[0.88rem] font-extrabold text-[#0f1e3d]">Recent Properties</h3>
        <button className="text-[0.72rem] font-semibold text-[#16a34a] hover:underline">View all</button>
      </div>
      <div className="divide-y divide-[#f5f6f8]">
        {RECENT_PROPERTIES.map(({ name, type, location, price, status }) => (
          <div key={name} className="flex items-center gap-3 px-5 py-3">
            <div className="w-8 h-8 rounded-lg bg-[#f0fdf4] flex items-center justify-center shrink-0">
              <ApartmentIcon sx={{ fontSize: 16, color: '#16a34a' }} />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-[0.8rem] font-semibold text-[#0f1e3d] truncate">{name}</p>
              <p className="text-[0.67rem] text-[#9199a8] mt-0.5 truncate">{type} · {location}</p>
            </div>
            <div className="text-right shrink-0">
              <p className="text-[0.78rem] font-bold text-[#0f1e3d]">{price}</p>
              <span className={`text-[0.6rem] font-semibold px-1.5 py-0.5 rounded-full ${STATUS_COLOR[status]}`}>{status}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function ActivityFeed() {
  return (
    <div className="bg-white rounded-2xl shadow-[0_1px_6px_rgba(0,0,0,0.06)]">
      <div className="flex items-center justify-between px-5 py-4 border-b border-[#f0f2f5]">
        <h3 className="text-[0.88rem] font-extrabold text-[#0f1e3d]">Recent Activity</h3>
        <button className="text-[0.72rem] font-semibold text-[#16a34a] hover:underline">Clear all</button>
      </div>
      <div className="px-5 py-2 divide-y divide-[#f5f6f8]">
        {ACTIVITY.map(({ text, time, dot }) => (
          <div key={text} className="flex items-start gap-3 py-3">
            <FiberManualRecordIcon sx={{ fontSize: 9, color: dot, marginTop: '5px', flexShrink: 0 }} />
            <div className="flex-1 min-w-0">
              <p className="text-[0.78rem] text-[#374151] leading-snug">{text}</p>
              <p className="text-[0.65rem] text-[#9199a8] mt-0.5">{time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function DesktopDashboard() {
  const [activeNav, setActiveNav] = useState<NavKey>('dashboard')
  const [activeSubTab, setActiveSubTab] = useState('Overview')

  return (
    <div className="flex h-full overflow-hidden">
      <Sidebar active={activeNav} onNavigate={setActiveNav} />

      <div className="flex-1 flex flex-col overflow-hidden bg-[#f5f6f8]">
        <div className="shrink-0 bg-white border-b border-[#eef0f3] px-6 py-3 flex items-center justify-between shadow-[0_1px_4px_rgba(0,0,0,0.04)]">
          <div>
            <p className="text-[0.65rem] font-semibold text-[#9199a8] uppercase tracking-[0.1em]">Workspace</p>
            <h1 className="text-[1.15rem] font-extrabold text-[#0f1e3d] leading-none mt-0.5 capitalize">{activeNav.replace(/([a-z])([A-Z])/g, '$1 $2')}</h1>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 bg-[#f5f6f8] border border-[#eef0f3] rounded-lg px-3 py-2">
              <SearchIcon sx={{ fontSize: 15, color: '#9199a8' }} />
              <input placeholder="Search..." className="bg-transparent text-[0.78rem] text-[#374151] placeholder-[#9199a8] outline-none w-36" />
            </div>
            <button className="relative w-9 h-9 rounded-lg border border-[#eef0f3] bg-white flex items-center justify-center hover:bg-[#f5f6f8] transition-colors">
              <NotificationsOutlinedIcon sx={{ fontSize: 18, color: '#374151' }} />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-[#16a34a] rounded-full" />
            </button>
            <div className="w-9 h-9 rounded-lg bg-linear-to-br from-[#16a34a] to-[#15803d] flex items-center justify-center text-white font-extrabold text-[0.85rem] shadow-sm select-none cursor-pointer">
              Y
            </div>
          </div>
        </div>

        <div className="shrink-0 bg-white border-b border-[#eef0f3] px-6 flex items-center gap-0">
          {SUB_TABS.map(tab => (
            <button
              key={tab}
              onClick={() => setActiveSubTab(tab)}
              className={`px-4 py-3 text-[0.78rem] font-semibold border-b-2 transition-colors ${
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
          <div className="grid grid-cols-5 gap-4">
            <div className="col-span-3">
              <RecentProperties />
            </div>
            <div className="col-span-2">
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
      <div className="shrink-0 bg-[#0d1f3c] px-4 pt-4 pb-3 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <img src={YardLogo} alt="Yard" className="w-8 h-8 object-contain" />
          <div>
            <p className="text-[0.85rem] font-extrabold text-white leading-none tracking-wide">YARD</p>
            <p className="text-[0.5rem] text-white/50 tracking-widest uppercase mt-0.5">Real Estate Intelligence</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button className="relative w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
            <NotificationsOutlinedIcon sx={{ fontSize: 17, color: 'white' }} />
            <span className="absolute top-1 right-1 w-1.5 h-1.5 bg-[#4ade80] rounded-full" />
          </button>
          <div className="w-8 h-8 rounded-lg bg-linear-to-br from-[#22c55e] to-[#0ea5e9] flex items-center justify-center text-white font-extrabold text-[0.8rem] shadow-sm select-none">
            Y
          </div>
          <button className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
            <MoreVertIcon sx={{ fontSize: 17, color: 'white' }} />
          </button>
        </div>
      </div>

      <TabBar
        tabs={TAB_ITEMS}
        active={activeTab}
        activeSubTab={activeSubTab}
        onChange={key => {
          setActiveTab(key)
          const item = TAB_ITEMS.find(t => t.key === key)
          if (item?.subTabs?.length) setActiveSubTab(item.subTabs[0])
        }}
        onSubTabChange={setActiveSubTab}
      />

      <div className="flex-1 overflow-y-auto px-4 py-4">
        <div className="mb-4">
          <p className="text-[0.65rem] font-semibold text-[#9199a8] uppercase tracking-[0.1em]">{activeItem?.label ?? 'Dashboard'}</p>
          <h2 className="text-[1.1rem] font-extrabold text-[#0f1e3d] mt-0.5">{activeSubTab}</h2>
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
  if (viewMode === 'mobile') return <MobileDashboard />
  return <DesktopDashboard />
}
