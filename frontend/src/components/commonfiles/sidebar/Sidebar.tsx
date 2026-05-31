import { ChevronRight, ChevronLeft, Award } from 'lucide-react'
import { NAV_ITEMS, type NavKey } from './data'
import YardLogo from '../Images/YardStackLogowithouttext.png'

interface SidebarProps {
  active?: NavKey
  onNavigate?: (k: NavKey) => void
}

export default function Sidebar({ active = 'dashboard', onNavigate }: SidebarProps) {
  return (
    <aside className="flex flex-col w-[195px] shrink-0 h-full bg-[#0d1f3c] text-white overflow-y-auto">
      <div className="flex flex-col items-center gap-1 pt-7 pb-5 px-4">
        <img
          src={YardLogo}
          alt="Yard logo"
          className="w-10 h-10 object-contain"
        />
        <p className="text-base font-extrabold tracking-[0.06em] mt-1">YARD</p>
        <p className="text-[0.55rem] font-semibold tracking-[0.14em] text-white/60 uppercase">
          Real Estate Intelligence
        </p>
      </div>

      <div className="flex-1 px-3 pb-2 overflow-y-auto">
        <p className="text-[0.6rem] font-bold tracking-[0.18em] text-white/40 uppercase px-2 mb-2">
          Navigation
        </p>
        <ul className="space-y-0.5">
          {NAV_ITEMS.map(({ key, label, Icon, hasArrow }) => {
            const isActive = key === active
            return (
              <li key={key}>
                <button
                  onClick={() => onNavigate?.(key)}
                  className={`w-full flex items-center gap-2.5 px-2.5 py-[7px] rounded-lg text-[0.8rem] transition-all ${
                    isActive
                      ? 'bg-white/10 text-white font-semibold'
                      : 'text-white/70 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  <Icon size={15} style={{ strokeWidth: 1.6 }} />
                  <span className="flex-1 text-left">{label}</span>
                  {hasArrow && <ChevronRight size={13} className="opacity-50" />}
                </button>
              </li>
            )
          })}
        </ul>
      </div>

      <div className="mx-3 mb-3 border border-[#22c55e]/50 rounded-xl p-3 text-center">
        <div className="flex justify-center mb-1">
          <Award size={18} style={{ color: '#f59e0b', strokeWidth: 1.6 }} />
        </div>
        <p className="text-[0.6rem] font-extrabold tracking-[0.16em] text-[#f59e0b] uppercase">
          Premium Platform
        </p>
        <p className="text-[0.6rem] text-white/60 mt-0.5 leading-snug">
          Built for visionaries.<br />Designed for excellence.
        </p>
      </div>

      <button className="flex items-center gap-1 px-5 py-3 text-[0.72rem] text-white/50 hover:text-white/80 transition-colors border-t border-white/10">
        <ChevronLeft size={13} style={{ strokeWidth: 1.6 }} />
        <span>Collapse</span>
      </button>
    </aside>
  )
}
