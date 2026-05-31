import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { ChevronLeft, Crown } from 'lucide-react'
import { NAV_ITEMS, type NavKey } from './data'
import YardLogo from '../Images/YardStackLogowithouttext.png'

interface SidebarProps {
  active?: NavKey
  onNavigate?: (k: NavKey) => void
}

interface TooltipState {
  label: string
  x: number
  y: number
  visible: boolean
}

const HIDDEN: TooltipState = { label: '', x: 0, y: 0, visible: false }

function getPos(el: HTMLElement) {
  const r = el.getBoundingClientRect()
  return { x: r.right + 8, y: r.top + r.height / 2 }
}

export default function Sidebar({ active = 'dashboard', onNavigate }: SidebarProps) {
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [navTip, setNavTip] = useState<TooltipState>(HIDDEN)
  const [premTip, setPremTip] = useState<TooltipState>(HIDDEN)

  useEffect(() => {
    const hide = () => {
      setNavTip(HIDDEN)
      setPremTip(HIDDEN)
    }
    window.addEventListener('scroll', hide, true)
    return () => window.removeEventListener('scroll', hide, true)
  }, [])

  return (
    <aside
      className={`flex flex-col shrink-0 h-full text-white transition-all duration-400 ease-in-out relative z-[9999] shadow-[4px_0_32px_rgba(0,0,0,0.4)] ${
        isCollapsed ? 'w-[72px]' : 'w-[240px]'
      }`}
      style={{
        background: 'linear-gradient(175deg, #1a3a6b 0%, #0f2550 30%, #0a1e42 60%, #071a38 80%, #051530 100%)',
      }}
    >
      <div className="flex flex-col items-center p-2 overflow-hidden shrink-0">
        <img
          src={YardLogo}
          alt="Yard logo"
          className={`object-contain transition-all duration-400 ${isCollapsed ? 'w-8 h-8' : 'w-11 h-11'}`}
        />
        <div
          className={`flex flex-col items-center overflow-hidden whitespace-nowrap transition-all duration-400 ${
            isCollapsed ? 'h-0 opacity-0 mt-0' : 'h-[36px] opacity-100 mt-2.5'
          }`}
        >
          <p className="text-[1.3rem] font-serif tracking-[0.05em] leading-none text-white">YARD</p>
          <p className="text-[0.5rem] font-medium tracking-[0.18em] uppercase mt-1.5" style={{ color: 'rgba(255,255,255,0.55)' }}>
            Real Estate Intelligence
          </p>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto overflow-x-visible [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] pb-4 flex flex-col">
        <div className={`px-6 mb-3 overflow-hidden transition-all duration-400 ${
          isCollapsed ? 'opacity-0 h-0 hidden' : 'opacity-100 h-auto block'
        }`}>
          <p className="text-[0.62rem] font-bold tracking-[0.18em] uppercase" style={{ color: 'rgba(255,255,255,0.38)' }}>
            Navigation
          </p>
        </div>

        <ul className="space-y-0.5 px-1 flex-1">
          {NAV_ITEMS.map(({ key, label, Icon }) => {
            const isActive = key === active
            return (
              <li key={key} className="relative group">
                <button
                  onClick={() => onNavigate?.(key)}
                  onMouseEnter={e => {
                    if (!isCollapsed) return
                    const pos = getPos(e.currentTarget as HTMLElement)
                    setNavTip({ label, x: pos.x, y: pos.y, visible: true })
                  }}
                  onFocus={e => {
                    if (!isCollapsed) return
                    const pos = getPos(e.currentTarget as HTMLElement)
                    setNavTip({ label, x: pos.x, y: pos.y, visible: true })
                  }}
                  onMouseLeave={() => setNavTip(HIDDEN)}
                  onBlur={() => setNavTip(HIDDEN)}
                  style={isActive ? { background: 'rgba(255,255,255,0.10)' } : undefined}
                  className={`w-full flex items-center ${isCollapsed ? 'justify-center px-0' : 'justify-start px-3'} py-2.5 rounded-lg text-[0.85rem] transition-all duration-300 ${
                    isActive ? 'text-white font-semibold' : 'hover:bg-white/[0.06] hover:text-white'
                  }`}
                  aria-label={label}
                >
                  <Icon
                    size={isCollapsed ? 20 : 18}
                    style={{
                      strokeWidth: isActive ? 2 : 1.6,
                      color: isActive ? '#ffffff' : 'rgba(255,255,255,0.60)',
                    }}
                    className="shrink-0 transition-all duration-300"
                  />
                  <div className={`flex items-center overflow-hidden whitespace-nowrap transition-all duration-400 ${
                    isCollapsed ? 'w-0 opacity-0 ml-0' : 'flex-1 opacity-100 ml-3.5'
                  }`}>
                    <span style={{ color: isActive ? '#ffffff' : 'rgba(255,255,255,0.75)' }}>{label}</span>
                  </div>
                </button>
              </li>
            )
          })}
        </ul>

        <div
          onMouseEnter={e => {
            if (!isCollapsed) return
            const pos = getPos(e.currentTarget as HTMLElement)
            setPremTip({ label: 'Premium Platform', x: pos.x, y: pos.y, visible: true })
          }}
          onFocus={e => {
            if (!isCollapsed) return
            const pos = getPos(e.currentTarget as HTMLElement)
            setPremTip({ label: 'Premium Platform', x: pos.x, y: pos.y, visible: true })
          }}
          onMouseLeave={() => setPremTip(HIDDEN)}
          onBlur={() => setPremTip(HIDDEN)}
          className={`relative mx-2 mt-2 mb-4 rounded-[14px] transition-all duration-300 overflow-visible flex flex-col items-center justify-center ${
            isCollapsed ? 'p-2.5 cursor-pointer' : 'px-4 pt-5 pb-4'
          }`}
          style={{
            background: 'linear-gradient(160deg, #0c2248 0%, #071630 60%, #040f22 100%)',
            border: '1px solid rgba(45,212,160,0.35)',
            boxShadow: '0 0 24px rgba(45,212,160,0.1) inset, 0 4px 20px rgba(0,0,0,0.4)',
          }}
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
              style={{ color: '#4ade80', strokeWidth: 1.6, filter: 'drop-shadow(0 0 12px rgba(74,222,128,0.35))' }}
            />
          </div>

          <div className={`text-center transition-all duration-300 relative z-10 flex flex-col items-center w-full ${
            isCollapsed ? 'h-0 opacity-0 overflow-hidden' : 'h-auto opacity-100 mt-1'
          }`}>
            <p
              className="text-[0.66rem] font-extrabold tracking-[0.12em] uppercase w-full px-2 whitespace-nowrap overflow-visible"
              style={{ color: '#4ade80', textShadow: '0 0 10px rgba(74,222,128,0.35)' }}
            >
              PREMIUM PLATFORM
            </p>
            <p
              className="text-[0.72rem] mt-2 leading-[1.25] font-medium w-full max-w-[240px] px-2"
              style={{ color: 'rgba(255,255,255,0.9)' }}
            >
              Built for visionaries.<br />Designed for excellence.
            </p>
          </div>
        </div>
      </div>

      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className={`flex items-center ${isCollapsed ? 'justify-center' : 'justify-start gap-3 px-6'} py-4 text-[0.8rem] font-medium transition-colors shrink-0`}
        style={{
          borderTop: '1px solid rgba(255,255,255,0.08)',
          background: 'rgba(5, 15, 35, 0.55)',
          color: 'rgba(255,255,255,0.42)',
        }}
        onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.8)' }}
        onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.42)' }}
        title={isCollapsed ? 'Expand Sidebar' : 'Collapse Sidebar'}
      >
        <ChevronLeft
          size={16}
          className={`transition-transform duration-500 ease-in-out ${isCollapsed ? 'rotate-180' : ''}`}
          style={{ strokeWidth: 2 }}
        />
        <span className={`overflow-hidden whitespace-nowrap transition-all duration-400 ${
          isCollapsed ? 'w-0 opacity-0' : 'w-auto opacity-100'
        }`}>
          Collapse
        </span>
      </button>

      {navTip.visible && createPortal(
        <div
          role="tooltip"
          style={{
            position: 'fixed',
            left: `${navTip.x}px`,
            top: `${navTip.y}px`,
            transform: 'translateY(-50%)',
            zIndex: 10000,
            pointerEvents: 'none',
            display: 'flex',
            alignItems: 'center',
            gap: 0,
          }}
        >
          <div style={{
            width: 0,
            height: 0,
            borderTop: '6px solid transparent',
            borderBottom: '6px solid transparent',
            borderRight: '7px solid #1a3a6b',
            flexShrink: 0,
          }} />
          <div style={{
            background: 'linear-gradient(135deg, #1a3a6b 0%, #0f2550 100%)',
            border: '1px solid rgba(255,255,255,0.15)',
            borderRadius: '8px',
            padding: '6px 14px',
            color: 'rgba(255,255,255,0.92)',
            fontSize: '13px',
            fontWeight: 600,
            whiteSpace: 'nowrap',
            boxShadow: '0 4px 16px rgba(0,0,0,0.5)',
          }}>
            {navTip.label}
          </div>
        </div>,
        document.body
      )}

      {premTip.visible && createPortal(
        <div
          role="tooltip"
          style={{
            position: 'fixed',
            left: `${premTip.x}px`,
            top: `${premTip.y}px`,
            transform: 'translateY(-50%)',
            zIndex: 10000,
            pointerEvents: 'none',
            display: 'flex',
            alignItems: 'center',
            gap: 0,
          }}
        >
          <div style={{
            width: 0,
            height: 0,
            borderTop: '7px solid transparent',
            borderBottom: '7px solid transparent',
            borderRight: '8px solid #0c2248',
            flexShrink: 0,
          }} />
          <div style={{
            background: 'linear-gradient(160deg, #0c2248 0%, #051a30 100%)',
            border: '1px solid rgba(74,222,128,0.3)',
            borderRadius: '12px',
            padding: '12px 16px',
            boxShadow: '0 8px 28px rgba(0,0,0,0.6), 0 0 16px rgba(74,222,128,0.1)',
            minWidth: '180px',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
              <Crown size={16} style={{ color: '#4ade80', strokeWidth: 1.8, flexShrink: 0 }} />
              <span style={{
                color: '#4ade80',
                fontSize: '11px',
                fontWeight: 800,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                textShadow: '0 0 8px rgba(74,222,128,0.4)',
              }}>
                Premium Platform
              </span>
            </div>
            <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '11.5px', lineHeight: 1.4, margin: 0 }}>
              Built for visionaries.<br />Designed for excellence.
            </p>
          </div>
        </div>,
        document.body
      )}
    </aside>
  )
}