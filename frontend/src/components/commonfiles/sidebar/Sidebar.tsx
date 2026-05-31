import { useState, useEffect, type MouseEvent, type FocusEvent } from 'react'
import { createPortal } from 'react-dom'
import { ChevronLeft, Crown } from 'lucide-react'
import { NAV_ITEMS, type NavKey } from './data'
import YardLogo from '../Images/YardStackLogowithouttext.png'

interface SidebarProps {
  active?: NavKey
  onNavigate?: (k: NavKey) => void
}

interface TooltipState {
  type: 'nav' | 'premium' | null
  label?: string
  x: number
  y: number
}

const HIDDEN: TooltipState = { type: null, x: 0, y: 0 }

function getPos(el: HTMLElement) {
  const r = el.getBoundingClientRect()
  return { x: r.right + 8, y: r.top + r.height / 2 }
}

export default function Sidebar({ active = 'dashboard', onNavigate }: SidebarProps) {
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [tooltip, setTooltip] = useState<TooltipState>(HIDDEN)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const hide = () => setTooltip(HIDDEN)
    window.addEventListener('scroll', hide, true)
    return () => window.removeEventListener('scroll', hide, true)
  }, [])

  const showTooltip = (
    e: MouseEvent<HTMLElement> | FocusEvent<HTMLElement>,
    type: 'nav' | 'premium',
    label?: string
  ) => {
    if (!isCollapsed) return
    const pos = getPos(e.currentTarget)
    setTooltip({ type, label, x: pos.x, y: pos.y })
  }

  const hideTooltip = () => setTooltip(HIDDEN)

  return (
    <aside
      className={`flex flex-col shrink-0 h-full text-white transition-all duration-500 ease-in-out relative z-[9999] shadow-[4px_0_32px_rgba(0,0,0,0.4)] bg-[linear-gradient(175deg,#1a3a6b_0%,#0f2550_30%,#0a1e42_60%,#071a38_80%,#051530_100%)] ${
        isCollapsed ? 'w-[72px]' : 'w-60'
      }`}
    >
      <div className="flex flex-col items-center p-2 overflow-hidden shrink-0">
        <img
          src={YardLogo}
          alt="Yard logo"
          className={`object-contain transition-all duration-500 ease-in-out ${
            isCollapsed ? 'w-8 h-8' : 'w-11 h-11'
          }`}
        />
        <div
          className={`flex flex-col items-center overflow-hidden whitespace-nowrap transition-all duration-500 ease-in-out ${
            isCollapsed ? 'h-0 opacity-0 mt-0' : 'h-9 opacity-100 mt-2.5'
          }`}
        >
          <p className="text-[1.3rem] font-serif tracking-wider leading-none text-white m-0">YARD</p>
          <p className="text-[0.5rem] font-medium tracking-[0.18em] uppercase text-white/55 mt-1.5">
            Real Estate Intelligence
          </p>
        </div>
      </div>
      <div className="flex-1 overflow-y-auto overflow-x-visible pb-4 flex flex-col [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        
        <div
          className={`px-6 mb-3 overflow-hidden transition-all duration-500 ease-in-out ${
            isCollapsed ? 'opacity-0 h-0 hidden' : 'opacity-100 h-auto block'
          }`}
        >
          <p className="text-[0.62rem] font-bold tracking-[0.18em] uppercase text-white/40 m-0">
            Navigation
          </p>
        </div>

        {/* Navigation List */}
        <ul className="list-none p-0 px-1 m-0 flex flex-col gap-0.5 flex-1">
          {NAV_ITEMS.map(({ key, label, Icon }) => {
            const isActive = key === active
            return (
              <li key={key} className="relative group">
                <button
                  onClick={() => onNavigate?.(key)}
                  onMouseEnter={(e) => showTooltip(e, 'nav', label)}
                  onFocus={(e) => showTooltip(e, 'nav', label)}
                  onMouseLeave={hideTooltip}
                  onBlur={hideTooltip}
                  aria-label={label}
                  className={`w-full flex items-center py-2.5 rounded-lg text-[0.85rem] transition-all duration-300 bg-transparent border-none cursor-pointer ${
                    isCollapsed ? 'justify-center px-0' : 'justify-start px-3'
                  } ${
                    isActive
                      ? 'bg-white/10 text-white font-semibold'
                      : 'text-white/75 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  <Icon
                    size={isCollapsed ? 20 : 18}
                    className={`shrink-0 transition-all duration-300 ${
                      isActive ? 'text-white stroke-2' : 'text-white/60 stroke-[1.6]'
                    }`}
                  />
                  <div
                    className={`flex items-center overflow-hidden whitespace-nowrap transition-all duration-500 ease-in-out ${
                      isCollapsed ? 'w-0 opacity-0 ml-0' : 'flex-1 opacity-100 ml-3.5'
                    }`}
                  >
                    <span>{label}</span>
                  </div>
                </button>
              </li>
            )
          })}
        </ul>

        {/* Premium Card */}
        <div
          onMouseEnter={(e) => showTooltip(e, 'premium')}
          onFocus={(e) => showTooltip(e, 'premium')}
          onMouseLeave={hideTooltip}
          onBlur={hideTooltip}
          tabIndex={0}
          className={`relative mx-2 mt-2 mb-4 rounded-[14px] transition-all duration-300 overflow-visible flex flex-col items-center justify-center border border-[#2dd4a0]/35 bg-[linear-gradient(160deg,#0c2248_0%,#071630_60%,#040f22_100%)] shadow-[inset_0_0_24px_rgba(45,212,160,0.1),0_4px_20px_rgba(0,0,0,0.4)] ${
            isCollapsed ? 'p-2.5 cursor-pointer' : 'px-4 pt-5 pb-4 cursor-default'
          }`}
        >
          <div className="absolute bottom-0 left-0 right-0 h-[52%] pointer-events-none">
            <svg viewBox="0 0 100 40" preserveAspectRatio="none" className="w-full h-full">
              <defs>
                <linearGradient id="wave-grad2" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#2dd4a0" stopOpacity="0.55" />
                  <stop offset="100%" stopColor="#0a8f6a" stopOpacity="0.15" />
                </linearGradient>
                <linearGradient id="wave-grad3" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#1ab88a" stopOpacity="0.35" />
                  <stop offset="100%" stopColor="#0a7a5c" stopOpacity="0.05" />
                </linearGradient>
              </defs>
              <path d="M0 20 Q 20 8, 40 18 T 80 16 T 100 20 L 100 40 L 0 40 Z" fill="url(#wave-grad2)" />
              <path d="M0 28 Q 25 14, 50 24 T 100 26 L 100 40 L 0 40 Z" fill="url(#wave-grad3)" />
              <path d="M0 34 Q 30 24, 60 32 T 100 32 L 100 40 L 0 40 Z" fill="rgba(45,212,160,0.18)" />
            </svg>
          </div>

          <div className={`flex justify-center relative z-10 transition-all duration-300 ${isCollapsed ? '' : 'mb-3'}`}>
            <Crown
              size={isCollapsed ? 20 : 30}
              className="text-[#4ade80] stroke-[1.6] drop-shadow-[0_0_12px_rgba(74,222,128,0.35)]"
            />
          </div>

          <div
            className={`text-center transition-all duration-300 relative z-10 flex flex-col items-center w-full ${
              isCollapsed ? 'h-0 opacity-0 overflow-hidden' : 'h-auto opacity-100 mt-1'
            }`}
          >
            <p className="text-[0.66rem] font-extrabold tracking-[0.12em] uppercase w-full px-2 whitespace-nowrap overflow-visible text-[#4ade80] drop-shadow-[0_0_10px_rgba(74,222,128,0.35)] m-0">
              Premium Platform
            </p>
            <p className="text-[0.72rem] mt-2 leading-tight font-medium w-full max-w-[240px] px-2 text-white/90 mb-0">
              Built for visionaries.<br />Designed for excellence.
            </p>
          </div>
        </div>
      </div>

      {/* Collapse Button */}
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        title={isCollapsed ? 'Expand Sidebar' : 'Collapse Sidebar'}
        className={`flex items-center py-4 text-[0.8rem] font-medium transition-colors duration-300 shrink-0 border-none border-t border-t-white/10 bg-[#050f23]/55 text-white/40 hover:text-white/80 cursor-pointer ${
          isCollapsed ? 'justify-center px-0' : 'justify-start gap-3 px-6'
        }`}
      >
        <ChevronLeft
          size={16}
          className={`stroke-2 transition-transform duration-500 ease-in-out ${isCollapsed ? 'rotate-180' : ''}`}
        />
        <span
          className={`overflow-hidden whitespace-nowrap transition-all duration-500 ease-in-out ${
            isCollapsed ? 'w-0 opacity-0' : 'w-auto opacity-100'
          }`}
        >
          Collapse
        </span>
      </button>

      {/* Navigation Tooltip Portal */}
      {mounted && tooltip.type === 'nav' && createPortal(
        <div
          className="fixed -translate-y-1/2 z-[10000] pointer-events-none flex items-center gap-0"
          style={{ left: tooltip.x, top: tooltip.y }}
        >
          <div className="w-0 h-0 shrink-0 border-y-[6px] border-y-transparent border-r-[7px] border-r-[#1a3a6b]" />
          <div className="bg-[linear-gradient(135deg,#1a3a6b_0%,#0f2550_100%)] border border-white/15 rounded-lg px-3.5 py-1.5 text-white/90 text-[13px] font-semibold whitespace-nowrap shadow-[0_4px_16px_rgba(0,0,0,0.5)]">
            {tooltip.label}
          </div>
        </div>,
        document.body
      )}

      {/* Premium Tooltip Portal */}
      {mounted && tooltip.type === 'premium' && createPortal(
        <div
          className="fixed -translate-y-1/2 z-[10000] pointer-events-none flex items-center gap-0"
          style={{ left: tooltip.x, top: tooltip.y }}
        >
          <div className="w-0 h-0 shrink-0 border-y-[7px] border-y-transparent border-r-[8px] border-r-[#0c2248]" />
          <div className="bg-[linear-gradient(160deg,#0c2248_0%,#051a30_100%)] border border-[#4ade80]/30 rounded-xl px-4 py-3 min-w-[180px] shadow-[0_8px_28px_rgba(0,0,0,0.6),0_0_16px_rgba(74,222,128,0.1)]">
            <div className="flex items-center gap-2 mb-2">
              <Crown size={16} className="text-[#4ade80] stroke-[1.8] shrink-0" />
              <span className="text-[#4ade80] text-[11px] font-extrabold tracking-[0.18em] uppercase drop-shadow-[0_0_8px_rgba(74,222,128,0.4)]">
                Premium Platform
              </span>
            </div>
            <p className="text-white/65 text-[11.5px] leading-relaxed m-0">
              Built for visionaries.<br />Designed for excellence.
            </p>
          </div>
        </div>,
        document.body
      )}
    </aside>
  )
}