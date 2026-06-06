import { useState, useRef, useEffect, useCallback } from 'react'
import MenuIcon from '@mui/icons-material/Menu'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'

interface DashboardHeaderProps {
  onMenuClick?: () => void
  city?: string
  role?: string
  userName?: string
  avatarUrl?: string
}

const CITY_OPTIONS = ['Hyderabad', 'Bengaluru', 'Mumbai', 'Chennai', 'Pune', 'Delhi']
const ROLE_OPTIONS = ['Builder', 'Agent', 'Buyer', 'Investor']

export default function DashboardHeader({
  onMenuClick,
  city: initialCity = 'Hyderabad',
  role: initialRole = 'Builder',
  userName = 'User',
  avatarUrl,
}: DashboardHeaderProps) {
  const [city, setCity] = useState(initialCity)
  const [role, setRole] = useState(initialRole)
  const [cityOpen, setCityOpen] = useState(false)
  const [profileOpen, setProfileOpen] = useState(false)

  const cityRef = useRef<HTMLDivElement>(null)
  const profileRef = useRef<HTMLDivElement>(null)

  const closeAll = useCallback(() => {
    setCityOpen(false)
    setProfileOpen(false)
  }, [])

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      const target = e.target as Node
      if (!cityRef.current?.contains(target) && !profileRef.current?.contains(target)) {
        closeAll()
      }
    }
    function handleKey(e: KeyboardEvent) {
      if (e.key === 'Escape') closeAll()
    }
    document.addEventListener('mousedown', handleClick, { capture: true })
    document.addEventListener('keydown', handleKey, { capture: true })
    return () => {
      document.removeEventListener('mousedown', handleClick, { capture: true })
      document.removeEventListener('keydown', handleKey, { capture: true })
    }
  }, [closeAll])

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-[#e0e3eb] shadow-sm font-['Outfit',sans-serif]">
      <div className="flex items-center justify-between h-12 sm:h-14 px-3 sm:px-2 w-full">
        
        <div className="flex items-center gap-2 sm:gap-1 min-w-0">
          <button
            type="button"
            onClick={onMenuClick}
            className="flex items-center justify-center w-8 h-8 rounded-md text-[#374151] hover:text-[#6B21A8] hover:bg-[#7C3AED]/08 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6B21A8] shrink-0"
          >
            <MenuIcon sx={{ fontSize: 22 }} />
          </button>

          <div className="w-px h-5 bg-[#e0e3eb] shrink-0" />

          <div ref={cityRef} className="relative min-w-0 shrink">
            <button
              type="button"
              onClick={() => { setCityOpen((v) => !v); setProfileOpen(false) }}
              className="flex items-center gap-1.5 px-2 py-1 rounded-md text-[#374151] hover:bg-[#7C3AED]/05 hover:text-[#1A1A2E] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6B21A8] min-w-0"
            >
              <LocationOnIcon sx={{ fontSize: 18 }} className="text-[#6B21A8] shrink-0" />
              <span className="text-[0.85rem] font-semibold text-[#1A1A2E] leading-none truncate pt-0.5">
                {city}
              </span>
              <KeyboardArrowDownIcon
                sx={{ fontSize: 18 }}
                className={`text-[#374151] shrink-0 transition-transform duration-200 ${cityOpen ? 'rotate-180' : ''}`}
              />
            </button>
            
            {cityOpen && (
              <ul className="absolute left-0 top-full mt-2 w-36 bg-white rounded-md shadow-lg border border-[#e0e3eb] z-50 py-1 overflow-hidden">
                {CITY_OPTIONS.map((opt) => (
                  <li
                    key={opt}
                    onClick={() => { setCity(opt); closeAll() }}
                    className={`px-3 py-2 text-[0.8rem] cursor-pointer transition-colors ${
                      opt === city
                        ? 'bg-[#7C3AED]/08 text-[#6B21A8] font-semibold border-l-2 border-[#7C3AED]'
                        : 'text-[#374151] font-medium hover:bg-[#7C3AED]/05 border-l-2 border-transparent'
                    }`}
                  >
                    {opt}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        <div className="flex items-center shrink-0 ml-2">
          <div ref={profileRef} className="relative">
            <button
              type="button"
              onClick={() => { setProfileOpen((v) => !v); setCityOpen(false) }}
              className="flex items-center gap-1.5 p-1 pr-2 rounded-md hover:bg-[#7C3AED]/05 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6B21A8]"
            >
              {avatarUrl ? (
                <img
                  src={avatarUrl}
                  alt={userName}
                  className="w-8 h-8 rounded-full object-cover border border-[#e0e3eb]"
                />
              ) : (
                <AccountCircleIcon sx={{ fontSize: 32 }} className="text-[#94a3b8]" />
              )}
              <KeyboardArrowDownIcon
                sx={{ fontSize: 18 }}
                className={`text-[#64748b] transition-transform duration-200 ${profileOpen ? 'rotate-180' : ''}`}
              />
            </button>

            {profileOpen && (
              <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-md shadow-lg border border-[#e0e3eb] z-50 overflow-hidden">
                <div className="px-3 py-2.5 border-b border-[#e0e3eb] bg-[#f8fafc]">
                  <p className="text-[0.65rem] font-bold text-[#64748b] uppercase tracking-wider mb-1.5">Role</p>
                  <div className="flex flex-col gap-1">
                    {ROLE_OPTIONS.map((r) => (
                      <button
                        key={r}
                        onClick={() => { setRole(r); closeAll() }}
                        className={`text-left text-[0.8rem] px-2 py-1.5 rounded transition-colors ${
                          r === role
                            ? 'bg-[#7C3AED]/10 text-[#6B21A8] font-semibold'
                            : 'text-[#374151] hover:bg-[#e2e8f0] font-medium'
                        }`}
                      >
                        {r}
                      </button>
                    ))}
                  </div>
                </div>

                <ul className="py-1">
                  {['Profile', 'Settings', 'Sign out'].map((item) => (
                    <li
                      key={item}
                      onClick={closeAll}
                      className="px-4 py-2 text-[0.8rem] font-medium text-[#374151] hover:bg-[#7C3AED]/05 hover:text-[#1A1A2E] cursor-pointer transition-colors"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

      </div>
    </header>
  )
}