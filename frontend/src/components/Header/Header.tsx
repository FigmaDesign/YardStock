import { useEffect, useRef, useState, useId, useCallback } from 'react'
import { Monitor, Smartphone, ChevronDown } from 'lucide-react'
import Dropdown from '../commonfiles/Dropdown'

export type Page = 'dashboard' | 'forms' | 'login' | 'createAccount'
export type ViewMode = 'desktop' | 'mobile'

interface HeaderProps {
  activePage: Page
  onNavigate: (page: Page) => void
  viewMode: ViewMode
  onViewModeChange: (v: ViewMode) => void
  showViewControls?: boolean
}

const PAGE_LABELS: Record<Page, string> = {
  dashboard: 'Dashboard',
  forms: 'Forms',
  login: 'Login',
  createAccount: 'Create Account',
}

const PAGE_OPTIONS = (Object.keys(PAGE_LABELS) as Page[]).map((p) => ({
  value: p,
  label: PAGE_LABELS[p],
}))

export default function Header({
  activePage,
  onNavigate,
  viewMode,
  onViewModeChange,
  showViewControls = true,
}: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const mobileMenuRef = useRef<HTMLDivElement>(null)
  const menuId = useId()

  const closeMenu = useCallback(() => setMobileMenuOpen(false), [])

  useEffect(() => {
    function handleMouseDown(e: MouseEvent) {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(e.target as Node)) {
        closeMenu()
      }
    }

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        closeMenu()
      }
    }

    if (mobileMenuOpen) {
      document.addEventListener('mousedown', handleMouseDown, { capture: true, passive: true })
      document.addEventListener('keydown', handleKeyDown, { capture: true })
    }

    return () => {
      document.removeEventListener('mousedown', handleMouseDown, { capture: true })
      document.removeEventListener('keydown', handleKeyDown, { capture: true })
    }
  }, [mobileMenuOpen, closeMenu])

  return (
    <header className="sticky top-0 z-50 bg-[var(--ys-canvas)] backdrop-blur-xl border-b border-[var(--ys-mute)] shadow-[0px_1px_8px_rgba(92,26,16,0.06)]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 gap-3">
          <div className="flex items-center gap-2 shrink-0" aria-label="YardStock Logo">
            <div 
              aria-hidden="true"
              className="w-8 h-8 rounded-[8px] flex items-center justify-center bg-gradient-to-br from-[var(--ys-ink)] to-[var(--ys-ink-soft)] text-white font-bold text-[1.1rem] leading-none shadow-sm select-none"
            >
              Y
            </div>
            <div className="hidden sm:block leading-none">
              <p className="text-[0.88rem] font-extrabold text-[var(--ys-ink)] tracking-[-0.03em] m-0">
                Yard<span className="text-[var(--ys-primary)]">Stock</span>
              </p>
            </div>
          </div>

          <nav aria-label="View Controls" className="hidden md:flex flex-1 justify-center">
            {showViewControls && (
              <div 
                role="group"
                aria-label="Select view mode"
                className="flex items-center bg-[var(--ys-canvas-soft)] border border-[var(--ys-mute)] rounded-[8px] p-1 gap-0.5"
              >
                <button
                  type="button"
                  aria-pressed={viewMode === 'desktop'}
                  onClick={() => onViewModeChange('desktop')}
                  className={`flex items-center gap-2 px-5 py-[7px] rounded-[8px] text-[0.76rem] font-bold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ys-primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--ys-canvas-soft)] motion-reduce:transition-none ${
                    viewMode === 'desktop'
                      ? 'bg-gradient-to-br from-[var(--ys-ink)] to-[var(--ys-ink-soft)] text-white shadow-md'
                      : 'text-[var(--ys-ink)] bg-transparent hover:bg-white/80'
                  }`}
                >
                  <Monitor size={15} strokeWidth={viewMode === 'desktop' ? 2.5 : 2} aria-hidden="true" />
                  Desktop View
                </button>
                <button
                  type="button"
                  aria-pressed={viewMode === 'mobile'}
                  onClick={() => onViewModeChange('mobile')}
                  className={`flex items-center gap-2 px-5 py-[7px] rounded-[8px] text-[0.76rem] font-bold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ys-primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--ys-canvas-soft)] motion-reduce:transition-none ${
                    viewMode === 'mobile'
                      ? 'bg-gradient-to-br from-[var(--ys-ink)] to-[var(--ys-ink-soft)] text-white shadow-md'
                      : 'text-[var(--ys-ink)] bg-transparent hover:bg-white/80'
                  }`}
                >
                  <Smartphone size={15} strokeWidth={viewMode === 'mobile' ? 2.5 : 2} aria-hidden="true" />
                  Mobile View
                </button>
              </div>
            )}
          </nav>

          <div className="flex items-center gap-2 shrink-0">
            {showViewControls && (
              <div 
                role="group" 
                aria-label="Select view mode" 
                className="flex md:hidden items-center gap-1"
              >
                {(['desktop', 'mobile'] as const).map((v) => (
                  <button
                    key={v}
                    type="button"
                    aria-label={v === 'desktop' ? 'Desktop view' : 'Mobile view'}
                    aria-pressed={viewMode === v}
                    onClick={() => onViewModeChange(v)}
                    className={`w-8 h-8 flex items-center justify-center rounded-[8px] border transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ys-primary)] focus-visible:ring-offset-1 motion-reduce:transition-none ${
                      viewMode === v
                        ? 'border-[var(--ys-primary)] bg-[var(--ys-primary)]/10 text-[var(--ys-primary)]'
                        : 'border-[var(--ys-mute)] bg-[var(--ys-canvas)] text-[var(--ys-body-mid)] hover:bg-[var(--ys-canvas-soft)] hover:text-[var(--ys-ink)]'
                    }`}
                  >
                    {v === 'desktop' ? (
                      <Monitor size={14} strokeWidth={viewMode === v ? 2.5 : 2} aria-hidden="true" />
                    ) : (
                      <Smartphone size={14} strokeWidth={viewMode === v ? 2.5 : 2} aria-hidden="true" />
                    )}
                  </button>
                ))}
              </div>
            )}

            <div className="hidden sm:flex items-center gap-2">
              <label 
                htmlFor="desktop-page-selector" 
                className="text-[0.68rem] font-semibold text-[var(--ys-body-mid)] tracking-[0.08em] uppercase select-none whitespace-nowrap"
              >
                Current View
              </label>
              <Dropdown
                id="desktop-page-selector"
                options={PAGE_OPTIONS}
                value={activePage}
                onChange={(v) => onNavigate(v as Page)}
                size="sm"
                className="w-36"
              />
            </div>

            <div className="relative sm:hidden" ref={mobileMenuRef}>
              <button
                type="button"
                aria-expanded={mobileMenuOpen}
                aria-haspopup="menu"
                aria-controls={`mobile-menu-${menuId}`}
                onClick={() => setMobileMenuOpen((v) => !v)}
                className="flex items-center gap-1 px-3 py-[7px] rounded-[8px] border border-[var(--ys-mute)] bg-[var(--ys-canvas)] text-[0.78rem] font-semibold text-[var(--ys-ink)] shadow-sm hover:bg-[var(--ys-canvas-soft)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ys-primary)] focus-visible:border-[var(--ys-primary)] transition-all duration-200"
              >
                {PAGE_LABELS[activePage]}
                <ChevronDown 
                  size={13} 
                  aria-hidden="true"
                  className={`text-[var(--ys-body-mid)] transition-transform duration-200 motion-reduce:transition-none ${
                    mobileMenuOpen ? 'rotate-180' : ''
                  }`} 
                />
              </button>
              
              {mobileMenuOpen && (
                <div 
                  id={`mobile-menu-${menuId}`}
                  role="menu"
                  aria-label="Navigation Menu"
                  className="absolute right-0 mt-2 w-40 bg-[var(--ys-canvas)] rounded-[8px] border border-[var(--ys-mute)] shadow-lg overflow-hidden z-50 animate-in fade-in slide-in-from-top-2 duration-200 ease-out"
                >
                  {(Object.keys(PAGE_LABELS) as Page[]).map((p) => {
                    const isActive = activePage === p
                    return (
                      <button
                        key={p}
                        type="button"
                        role="menuitem"
                        aria-current={isActive ? 'page' : undefined}
                        onClick={() => {
                          onNavigate(p)
                          closeMenu()
                        }}
                        className={`w-full text-left px-4 py-2.5 text-[0.82rem] font-semibold transition-colors duration-150 focus-visible:outline-none focus-visible:bg-[var(--ys-canvas-soft)] focus-visible:text-[var(--ys-ink)] motion-reduce:transition-none ${
                          isActive 
                            ? 'bg-[var(--ys-primary)]/10 text-[var(--ys-ink)]' 
                            : 'text-[var(--ys-ink)] hover:bg-[var(--ys-canvas-soft)]'
                        }`}
                      >
                        {PAGE_LABELS[p]}
                      </button>
                    )
                  })}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}