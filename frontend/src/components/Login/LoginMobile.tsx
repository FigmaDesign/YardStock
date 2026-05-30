import React from 'react'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined'
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import ApartmentIcon from '@mui/icons-material/Apartment'
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined'
import VerifiedUserOutlinedIcon from '@mui/icons-material/VerifiedUserOutlined'
import { SOCIAL, MOBILE_STATS } from './constants'

interface LoginMobileProps {
  email: string
  setEmail: (v: string) => void
  password: string
  setPassword: (v: string) => void
  showPwd: boolean
  setShowPwd: (v: boolean) => void
  remember: boolean
  setRemember: (v: boolean) => void
  onSubmit: (e: React.FormEvent) => void
  onCreateAccountClick?: () => void
}

export default function LoginMobile({
  email, setEmail, password, setPassword,
  showPwd, setShowPwd, remember, setRemember,
  onSubmit, onCreateAccountClick,
}: LoginMobileProps) {
  return (
    <div className="h-full overflow-y-auto bg-[#f0f2f5]">
      <div
        className="relative"
        style={{
          backgroundImage: "url('/src/components/commonfiles/Images/Login&create/mobile.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
          paddingBottom: '32px',
        }}
      >
        <div className="absolute inset-0 bg-linear-to-b from-[#050f20]/65 via-[#071428]/55 to-[#0d1a35]/80" />
        <div className="relative z-10 px-5 pt-6 pb-0">
          <div className="flex items-center gap-2.5 mb-6">
            <img src="/src/components/commonfiles/Images/YardStackLogowithouttext.png" alt="Yard" className="w-10 h-10 object-contain" />
            <div>
              <p className="text-white font-extrabold text-[1.15rem] tracking-widest leading-none">YARD</p>
              <p className="text-white/55 text-[0.48rem] tracking-[0.22em] uppercase mt-0.5">REAL ESTATE INTELLIGENCE</p>
            </div>
          </div>

          <h2 className="text-white text-[1.75rem] font-extrabold leading-tight">
            Welcome <span className="text-[#4ade80]">Back</span>
          </h2>
          <p className="text-white/80 text-[0.8rem] mt-2 leading-relaxed max-w-[280px]">
            Sign in to access powerful insights and manage your real estate intelligence.
          </p>

          <div className="grid grid-cols-2 gap-2.5 mt-5">
            {MOBILE_STATS.map(({ Icon, value, label }) => (
              <div key={label} className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 flex items-center gap-3 border border-white/15">
                <Icon sx={{ fontSize: 24, color: '#4ade80' }} />
                <div>
                  <p className="text-white font-extrabold text-[1rem] leading-none">{value}</p>
                  <p className="text-white/65 text-[0.65rem] mt-1">{label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white rounded-t-[28px] -mt-5 relative z-10 shadow-[0_-8px_32px_rgba(0,0,0,0.15)] px-5 pt-6 pb-8">
        <div className="w-10 h-1 bg-[#e5e7eb] rounded-full mx-auto mb-5" />
        <h2 className="text-[1.35rem] font-extrabold text-[#0f1e3d]">
          Login to <span className="text-[#16a34a]">Your</span> Account
        </h2>
        <p className="text-[0.78rem] text-[#6b7280] mt-0.5 mb-5">Enter your credentials to continue</p>

        <form onSubmit={onSubmit} className="space-y-4" noValidate>
          <div>
            <label className="block text-[0.78rem] font-semibold text-[#1a1a2e] mb-1.5">Work Email</label>
            <div className="flex items-center rounded-xl border border-[#e0e3eb] bg-[#f9fafb] focus-within:bg-white focus-within:border-[#16a34a] focus-within:ring-2 focus-within:ring-[#16a34a]/12 transition-all">
              <span className="pl-3.5 text-[#9ca3af] shrink-0"><EmailOutlinedIcon sx={{ fontSize: 18 }} /></span>
              <input type="email" value={email} onChange={e => setEmail(e.target.value)} required
                placeholder="Enter your work email"
                className="flex-1 px-3 py-3 text-[0.85rem] text-[#1a1a2e] placeholder-[#b0b5c0] bg-transparent outline-none" />
            </div>
          </div>

          <div>
            <label className="block text-[0.78rem] font-semibold text-[#1a1a2e] mb-1.5">Password</label>
            <div className="flex items-center rounded-xl border border-[#e0e3eb] bg-[#f9fafb] focus-within:bg-white focus-within:border-[#16a34a] focus-within:ring-2 focus-within:ring-[#16a34a]/12 transition-all">
              <span className="pl-3.5 text-[#9ca3af] shrink-0"><LockOutlinedIcon sx={{ fontSize: 18 }} /></span>
              <input type={showPwd ? 'text' : 'password'} value={password} onChange={e => setPassword(e.target.value)} required
                placeholder="Enter your password"
                className="flex-1 px-3 py-3 text-[0.85rem] text-[#1a1a2e] placeholder-[#b0b5c0] bg-transparent outline-none" />
              <button type="button" onClick={() => setShowPwd(!showPwd)} className="pr-3.5 text-[#9ca3af] shrink-0">
                {showPwd ? <VisibilityOutlinedIcon sx={{ fontSize: 17 }} /> : <VisibilityOffOutlinedIcon sx={{ fontSize: 17 }} />}
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <label className="flex items-center gap-2 cursor-pointer text-[0.8rem] text-[#374151]">
              <input type="checkbox" checked={remember} onChange={e => setRemember(e.target.checked)} className="w-4 h-4 rounded accent-[#16a34a]" />
              Remember me
            </label>
            <button type="button" className="text-[0.8rem] font-semibold text-[#16a34a] hover:underline">Forgot Password?</button>
          </div>

          <button type="submit" className="w-full flex items-center justify-between px-5 py-3.5 rounded-xl font-bold text-[0.95rem] text-white bg-linear-to-r from-[#1d4ed8] via-[#1a7e5a] to-[#16a34a] hover:opacity-90 transition-opacity shadow-md">
            <span className="flex-1 text-center">Login</span>
            <ArrowForwardIcon sx={{ fontSize: 20 }} />
          </button>

          <div className="flex items-center gap-3">
            <div className="flex-1 h-px bg-[#e5e7eb]" />
            <span className="text-[0.63rem] font-semibold text-[#9ca3af] tracking-[0.14em] uppercase">Or sign in with</span>
            <div className="flex-1 h-px bg-[#e5e7eb]" />
          </div>

          <div className="grid grid-cols-3 gap-2.5">
            {SOCIAL.map(({ label, logo }) => (
              <button key={label} type="button" className="flex items-center justify-center gap-2 py-2.5 border border-[#e0e3eb] rounded-xl text-[0.8rem] font-semibold text-[#374151] hover:bg-gray-50 transition-colors shadow-sm">
                <img src={logo} alt={label} className="w-4 h-4 object-contain" />
                <span>{label}</span>
              </button>
            ))}
          </div>

          <p className="text-center text-[0.82rem] text-[#6b7280] pt-1">
            {"Don't have an account? "}
            <button type="button" onClick={onCreateAccountClick} className="text-[#16a34a] font-bold hover:underline">Create Account</button>
          </p>
        </form>

        <div className="flex items-center justify-around mt-5 pt-4 border-t border-[#f0f2f5]">
          {[
            { Icon: VerifiedUserOutlinedIcon, label: 'Bank-Level\nSecurity' },
            { Icon: ApartmentIcon,            label: 'Enterprise\nGrade Platform' },
            { Icon: StarBorderOutlinedIcon,   label: 'Trusted by Top\nDevelopers' },
          ].map(({ Icon, label }) => (
            <div key={label} className="flex flex-col items-center gap-1 text-center">
              <Icon sx={{ fontSize: 20, color: '#16a34a' }} />
              <p className="text-[0.57rem] text-[#6b7280] font-medium leading-tight whitespace-pre-line">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
