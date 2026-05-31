import React from 'react'
import mobileBg from '../commonfiles/Images/Login&create/mobile.png'
import YardLogo from '../commonfiles/Images/YardStackLogowithouttext.png'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined'
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined'
import ApartmentIcon from '@mui/icons-material/Apartment'
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined'
import VerifiedUserOutlinedIcon from '@mui/icons-material/VerifiedUserOutlined'
import { SOCIAL } from './constants'

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
    <div className="h-[100dvh] w-full bg-[#f4f6f9] flex flex-col font-['Outfit',sans-serif] overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
      <div
        className="relative shrink-0 pb-12"
        style={{
          backgroundImage: `url(${mobileBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
        }}
      >
        <div className="absolute inset-0 bg-linear-to-b from-[#050f20]/90 via-[#071428]/70 to-[#0d1a35]/95" />
        
        <div className="relative z-10 px-5 pt-10">
          <div className="flex items-center gap-3 mb-6">
            <img src={YardLogo} alt="Yard" className="w-10 h-10 object-contain drop-shadow-md" />
            <div>
              <p className="text-white font-extrabold text-[1.3rem] tracking-[0.15em] leading-none drop-shadow-sm">YARD</p>
              <p className="text-[#4ade80] font-semibold text-[0.55rem] tracking-[0.22em] uppercase mt-1 drop-shadow-sm">Real Estate Intelligence</p>
            </div>
          </div>

          <h2 className="text-white text-[1.6rem] font-extrabold leading-tight drop-shadow-lg mt-2">
            Welcome <span className="text-[#4ade80]">Back</span>
          </h2>
          <p className="text-white/85 text-[0.75rem] mt-2 leading-relaxed max-w-[280px] drop-shadow-md">
            Sign in to access powerful insights and manage your real estate intelligence.
          </p>
        </div>
      </div>

      <div className="relative z-20 -mt-6 pb-15 ">
        <div className="bg-white rounded-[8px] p-5 shadow-[0_8px_30px_rgba(0,0,0,0.08)] border border-gray-100">

          <form onSubmit={onSubmit} className="space-y-3.5" noValidate>
            <div className="group">
              <label className="block text-[0.7rem] font-semibold text-[#1a1a2e] mb-1 transition-colors group-focus-within:text-[#16a34a]">Work Email</label>
              <div className="flex items-center rounded-[8px] border border-[#e0e3eb] bg-white group-hover:border-gray-300 focus-within:!border-[#16a34a] focus-within:ring-1 focus-within:ring-[#16a34a]/20 transition-all duration-300">
                <span className="pl-3 text-[#b0b5c0] shrink-0 group-focus-within:text-[#16a34a] transition-colors"><EmailOutlinedIcon sx={{ fontSize: 16 }} /></span>
                <input type="email" value={email} onChange={e => setEmail(e.target.value)} required
                  placeholder="Enter your work email"
                  className="flex-1 px-2.5 py-2 text-[0.75rem] text-[#1a1a2e] placeholder-[#b0b5c0] bg-transparent outline-none" />
              </div>
            </div>

            <div className="group">
              <label className="block text-[0.7rem] font-semibold text-[#1a1a2e] mb-1 transition-colors group-focus-within:text-[#16a34a]">Password</label>
              <div className="flex items-center rounded-[8px] border border-[#e0e3eb] bg-white group-hover:border-gray-300 focus-within:!border-[#16a34a] focus-within:ring-1 focus-within:ring-[#16a34a]/20 transition-all duration-300">
                <span className="pl-3 text-[#b0b5c0] shrink-0 group-focus-within:text-[#16a34a] transition-colors"><LockOutlinedIcon sx={{ fontSize: 16 }} /></span>
                <input type={showPwd ? 'text' : 'password'} value={password} onChange={e => setPassword(e.target.value)} required
                  placeholder="Enter your password"
                  className="flex-1 px-2.5 py-2 text-[0.75rem] text-[#1a1a2e] placeholder-[#b0b5c0] bg-transparent outline-none" />
                <button type="button" onClick={() => setShowPwd(!showPwd)} className="pr-3 text-[#b0b5c0] hover:text-[#4ade80] shrink-0 transition-colors duration-300">
                  {showPwd ? <VisibilityOutlinedIcon sx={{ fontSize: 16 }} /> : <VisibilityOffOutlinedIcon sx={{ fontSize: 16 }} />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between pt-1">
              <label className="flex items-center gap-2 cursor-pointer text-[0.72rem] text-[#374151] group/check">
                <input type="checkbox" checked={remember} onChange={e => setRemember(e.target.checked)} className="w-3.5 h-3.5 rounded accent-[#16a34a] transition-transform group-hover/check:scale-110" />
                Remember me
              </label>
              <button type="button" className="text-[0.72rem] font-semibold text-[#16a34a] hover:text-[#15803d] hover:underline transition-colors">Forgot Password?</button>
            </div>

            <button type="submit" className="w-3/4 mx-auto flex items-center justify-center h-10 rounded-[8px] font-bold text-[0.95rem] text-white bg-linear-to-r from-[#1d4ed8] via-[#1a7e5a] to-[#16a34a] hover:opacity-90 transition-opacity shadow-md">
              <span className="text-center">Login</span>
            </button>

            <div className="flex items-center gap-3 my-4">
              <div className="flex-1 h-px bg-linear-to-r from-transparent to-[#e5e7eb]" />
              <span className="font-semibold text-[#9ca3af] tracking-[0.14em] uppercase text-[0.6rem]">Or sign in with</span>
              <div className="flex-1 h-px bg-linear-to-l from-transparent to-[#e5e7eb]" />
            </div>

            <div className="grid grid-cols-3 gap-2.5">
              {SOCIAL.map(({ label, logo }) => (
                <button key={label} type="button" className="flex items-center justify-center gap-2 border border-[#e0e3eb] font-semibold text-[#374151] bg-white hover:bg-gray-50 hover:-translate-y-0.5 transition-all duration-300 py-2 rounded-[8px] text-[0.75rem]">
                  <img src={logo} alt={label} className="object-contain w-3.5 h-3.5" />
                  <span>{label}</span>
                </button>
              ))}
            </div>

            <p className="text-center text-[#6b7280] text-[0.75rem] pt-3">
              {"Don't have an account? "}
              <button type="button" onClick={onCreateAccountClick} className="text-[#16a34a] font-bold hover:underline transition-all">Create Account</button>
            </p>
          </form>

          <div className="flex items-center justify-around mt-5 pt-4 border-t border-[#f0f2f5]">
            {[
              { Icon: VerifiedUserOutlinedIcon, label: 'Bank-Level\nSecurity' },
              { Icon: ApartmentIcon,            label: 'Enterprise\nGrade Platform' },
              { Icon: StarBorderOutlinedIcon,   label: 'Trusted by Top\nDevelopers' },
            ].map(({ Icon, label }) => (
              <div key={label} className="flex flex-col items-center gap-1 text-center group">
                <Icon sx={{ fontSize: 18, color: '#16a34a' }} className="transition-transform duration-300 group-hover:scale-110 group-hover:text-[#15803d]" />
                <p className="text-[0.55rem] text-[#6b7280] font-medium leading-tight whitespace-pre-line group-hover:text-[#4b5563] transition-colors">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}