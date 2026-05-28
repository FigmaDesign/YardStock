import { useEffect, useRef, useState } from 'react'
import { Monitor, Smartphone, ChevronDown } from 'lucide-react'
import './header.css'

export type Page = 'dashboard' | 'forms'
export type ViewMode = 'desktop' | 'mobile'

interface HeaderProps {
  activePage: Page
  onNavigate: (page: Page) => void
  viewMode: ViewMode
  onViewModeChange: (v: ViewMode) => void
}

const PAGE_LABELS: Record<Page, string> = {
  dashboard: 'Dashboard',
  forms: 'Forms',
}

export default function Header({ activePage, onNavigate, viewMode, onViewModeChange }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const mobileMenuRef = useRef<HTMLDivElement>(null)

  // close mobile dropdown on outside click
  useEffect(() => {
    function handler(e: MouseEvent) {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(e.target as Node)) {
        setMobileMenuOpen(false)
      }
    }
    if (mobileMenuOpen) document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [mobileMenuOpen])

  return (
    <header className="ys-header sticky top-0 z-50 bg-white/90 backdrop-blur-xl border-b border-[#e4e7ec] shadow-[0px_1px_8px_rgba(15,31,61,0.06)]">
      <div className="max-w-300 mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 gap-3">

          {/* ── Left: Branding ── */}
          <div className="flex items-center gap-2 shrink-0">
            <div className="w-8 h-8 rounded-md flex items-center justify-center bg-linear-to-br from-[#15803d] to-[#166534] text-white font-bold text-[1.1rem] leading-none shadow-sm select-none">
              Y
            </div>
            <div className="hidden sm:block leading-none">
              <p className="text-[0.88rem] font-extrabold text-[#14532d] tracking-[-0.03em] m-0">
                Yard<span className="text-[#16a34a]">Stack</span>
              </p>
              <p className="text-[0.68rem] text-[#9199a8] font-medium m-0 tracking-wide">Workspace</p>
            </div>
          </div>

          {/* ── Center: Desktop / Mobile view toggle (hidden on small screens) ── */}
          <div className="hidden md:flex flex-1 justify-center">
            <div className="flex items-center bg-[#f0fdf4] border border-[#bbf7d0] rounded-xl p-1 gap-0.5">
              <button
                onClick={() => onViewModeChange('desktop')}
                className={`flex items-center gap-2 px-5 py-1.75 rounded-lg text-[0.76rem] font-bold transition-all duration-200 ${
                  viewMode === 'desktop'
                    ? 'bg-linear-to-br from-[#16a34a] to-[#15803d] text-white shadow-md'
                    : 'text-[#166534] bg-transparent hover:bg-white/80'
                }`}
              >
                <Monitor size={15} strokeWidth={viewMode === 'desktop' ? 2.5 : 2} />
                Desktop View
              </button>
              <button
                onClick={() => onViewModeChange('mobile')}
                className={`flex items-center gap-2 px-5 py-1.75 rounded-lg text-[0.76rem] font-bold transition-all duration-200 ${
                  viewMode === 'mobile'
                    ? 'bg-linear-to-br from-[#16a34a] to-[#15803d] text-white shadow-md'
                    : 'text-[#166534] bg-transparent hover:bg-white/80'
                }`}
              >
                <Smartphone size={15} strokeWidth={viewMode === 'mobile' ? 2.5 : 2} />
                Mobile View
              </button>
            </div>
          </div>

          {/* ── Right: Current View selector ── */}
          <div className="flex items-center gap-2 shrink-0">
            {/* mobile: compact icon-only view toggle */}
            <div className="flex md:hidden items-center gap-1">
              {(['desktop', 'mobile'] as const).map((v) => (
                <button
                  key={v}
                  aria-label={v === 'desktop' ? 'Desktop view' : 'Mobile view'}
                  onClick={() => onViewModeChange(v)}
                  className={`w-8 h-8 flex items-center justify-center rounded-md border transition-all ${
                    viewMode === v
                      ? 'border-[#16a34a] bg-[#16a34a]/10 text-[#16a34a]'
                      : 'border-[#e4e7ec] bg-white text-[#9199a8]'
                  }`}
                >
                  {v === 'desktop' ? <Monitor size={14} strokeWidth={viewMode === v ? 2.5 : 2} /> : <Smartphone size={14} strokeWidth={viewMode === v ? 2.5 : 2} />}
                </button>
              ))}
            </div>

            {/* Desktop: "Current View" label + select */}
            <div className="hidden sm:flex items-center gap-2">
              <span className="text-[0.68rem] font-semibold text-[#9199a8] tracking-[0.08em] uppercase select-none whitespace-nowrap">
                Current View
              </span>
              <div className="relative flex items-center">
                <select
                  title="Current View"
                  value={activePage}
                  onChange={(e) => onNavigate(e.target.value as Page)}
                  className="ys-select appearance-none pl-3 pr-8 py-1.75 text-[0.78rem] font-semibold text-[#14532d] bg-white border border-[#e4e7ec] rounded-md cursor-pointer outline-none hover:border-[#16a34a] transition-colors"
                >
                  {(Object.keys(PAGE_LABELS) as Page[]).map((p) => (
                    <option key={p} value={p}>{PAGE_LABELS[p]}</option>
                  ))}
                </select>
                <ChevronDown size={13} className="absolute right-2 pointer-events-none text-[#9199a8]" />
              </div>
            </div>

            {/* Mobile: dropdown for page switching */}
            <div className="relative sm:hidden" ref={mobileMenuRef}>
              <button
                onClick={() => setMobileMenuOpen(v => !v)}
                className="flex items-center gap-1 px-3 py-1.75 rounded-md border border-[#eef0f3] bg-white text-[0.78rem] font-semibold text-[#0f1f3d] shadow-sm"
              >
                {PAGE_LABELS[activePage]}
                <ChevronDown size={13} className={`text-[#9199a8] transition-transform ${mobileMenuOpen ? 'rotate-180' : ''}`} />
              </button>
              {mobileMenuOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-white rounded-lg border border-[#eef0f3] shadow-lg overflow-hidden z-50">
                  {(Object.keys(PAGE_LABELS) as Page[]).map((p) => (
                    <button
                      key={p}
                      onClick={() => { onNavigate(p); setMobileMenuOpen(false) }}
                      className={`w-full text-left px-4 py-2.5 text-[0.82rem] font-semibold transition-colors ${
                        activePage === p ? 'bg-[#16a34a]/10 text-[#15803d]' : 'text-[#14532d] hover:bg-[#f0fdf4]'
                      }`}
                    >
                      {PAGE_LABELS[p]}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </header>
  )
}
