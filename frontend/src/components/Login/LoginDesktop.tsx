import React, { useId, useState, useCallback } from 'react'
import desktopBg from '../commonfiles/Images/Login&create/Desktop2.png'
import topHeader from '../commonfiles/Images/Login&create/toploginheader.png'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined'
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined'
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined'
import SmsOutlinedIcon from '@mui/icons-material/SmsOutlined'
import SecurityIcon from '@mui/icons-material/Security'
import VerifiedUserOutlinedIcon from '@mui/icons-material/VerifiedUserOutlined'
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined'
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined'
import LanguageIcon from '@mui/icons-material/Language'
import Dropdown from '../commonfiles/Dropdown'
import type { DropdownOption } from '../commonfiles/Dropdown'
import { SOCIAL } from './constants'

const LANG_OPTIONS: DropdownOption[] = [
  { value: 'en', label: 'English' },
  { value: 'hi', label: 'Hindi' },
  { value: 'mr', label: 'Marathi' },
]

interface LoginDesktopProps {
  email: string
  setEmail: (v: string) => void
  password: string
  setPassword: (v: string) => void
  showPwd: boolean
  setShowPwd: (v: boolean) => void
  remember: boolean
  setRemember: (v: boolean) => void
  language: string
  setLanguage: (v: string) => void
  loginMode: 'email' | 'phone'
  setLoginMode: (m: 'email' | 'phone') => void
  phone: string
  setPhone: (v: string) => void
  otp: string
  setOtp: (v: string) => void
  otpSent: boolean
  onSendOtp: () => void
  onSubmit: (e: React.FormEvent) => void
  onCreateAccountClick?: () => void
}

export default function LoginDesktop({
  email, setEmail, password, setPassword,
  showPwd, setShowPwd, remember, setRemember,
  language, setLanguage,
  loginMode, setLoginMode, phone, setPhone,
  otp, setOtp, otpSent, onSendOtp,
  onSubmit, onCreateAccountClick,
}: LoginDesktopProps) {
  const emailId = useId()
  const passwordId = useId()
  const rememberId = useId()
  const phoneId = useId()
  const otpId = useId()

  const [errors, setErrors] = useState<{ email?: string; password?: string; phone?: string; otp?: string }>({})

  const handleLocalSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault()
    const next: { email?: string; password?: string; phone?: string; otp?: string } = {}

    if (loginMode === 'email') {
      if (!email.trim()) next.email = 'Please enter your email address'
      if (!password) next.password = 'Please enter your password'
    } else {
      if (!phone.trim() || phone.replace(/\D/g, '').length < 10) next.phone = 'Please enter a valid phone number'
      if (!otp || otp.length !== 6) next.otp = 'Enter the 6-digit OTP'
    }

    setErrors(next)
    if (Object.keys(next).length === 0) {
      onSubmit(e)
    }
  }, [loginMode, email, password, phone, otp, onSubmit])

  return (
    <main className="h-screen w-full flex overflow-hidden bg-[var(--ys-ink)]">
      <svg aria-hidden="true" className="sr-only" style={{ position: 'absolute', width: 0, height: 0 }}>
        <defs>
          <linearGradient id="loginGradient" x1="0%" x2="100%" y1="0%" y2="0%">
            <stop offset="0%" stopColor="#5C1A10" />
            <stop offset="50%" stopColor="#8B3020" />
            <stop offset="100%" stopColor="#E8590C" />
          </linearGradient>
        </defs>
      </svg>

      <section
        aria-label="Welcome Information"
        className="flex-1 relative bg-cover bg-center bg-no-repeat ys-slide-in-left motion-reduce:transform-none motion-reduce:transition-none motion-reduce:animate-none bg-(image:--desktop-bg)"
        style={{ '--desktop-bg': `url(${desktopBg})` } as React.CSSProperties}
      >
        <div aria-hidden="true" className="absolute inset-0 bg-linear-to-r from-[var(--ys-ink)]/90 via-[var(--ys-ink-soft)]/60 to-transparent" />
        
        <div className="relative z-10 flex flex-col justify-between h-full px-10 py-10 max-w-125">
          <div className="mt-2">
            <p className="text-[var(--ys-primary)] text-[0.82rem] font-semibold tracking-wider uppercase drop-shadow-sm">
              Welcome Back
            </p>
            <div aria-hidden="true" className="w-10 h-0.5 bg-[var(--ys-primary)] mt-2 mb-5 shadow-[0_2px_8px_rgba(232,89,12,0.5)]" />
            <h1 className="text-white text-[2.5rem] font-extrabold leading-[1.15] tracking-tight drop-shadow-lg">
              India's Most Intelligent<br />Real Estate Platform
            </h1>
            <p className="text-white/90 text-[0.95rem] mt-4 leading-relaxed drop-shadow-md">
              Real-time insights. Smarter decisions.<br />Billionaire-grade experience.
            </p>
          </div>
          
          <div 
            className="bg-white/10 backdrop-blur-xl border border-white/15 rounded-[8px] p-4 mb-20 flex items-start gap-3.5 max-w-97.5 shadow-[0_8px_32px_rgba(0,0,0,0.15)] hover:bg-white/15 hover:shadow-[0_8px_32px_rgba(0,0,0,0.25)] transition-all duration-500 group motion-reduce:transition-none"
            role="complementary"
            aria-label="Security Feature Highlight"
          >
            <div aria-hidden="true" className="bg-[var(--ys-primary)] rounded-[8px] p-2.5 shrink-0 shadow-[0_4px_12px_rgba(232,89,12,0.4)] group-hover:scale-110 group-hover:bg-[var(--ys-ink-mid)] transition-all duration-300 motion-reduce:transform-none motion-reduce:transition-none">
              <SecurityIcon sx={{ fontSize: 24, color: 'white' }} />
            </div>
            <div>
              <p className="text-white font-bold text-[0.95rem] group-hover:text-[var(--ys-primary)] transition-colors duration-300 motion-reduce:transition-none">
                Enterprise Grade Security
              </p>
              <p className="text-white/80 text-[0.78rem] mt-0.5 leading-relaxed">
                Your data is protected with bank-level encryption and advanced security protocols.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section 
        aria-label="Login Form Area"
        className="w-120 shrink-0 bg-[var(--ys-canvas)] flex flex-col shadow-[-12px_0_40px_rgba(0,0,0,0.12)] z-10 ys-slide-in-right motion-reduce:transform-none motion-reduce:animate-none"
      >
        <header className="flex justify-end pt-6 px-8 pb-1 shrink-0">
          <Dropdown
            id="login-desktop-language"
            options={LANG_OPTIONS}
            value={language}
            onChange={setLanguage}
            leftIcon={<LanguageIcon sx={{ fontSize: 15 }} aria-hidden="true" />}
            size="sm"
            className="w-32"
          />
        </header>

        <div className="flex-1 px-9 flex flex-col justify-center pb-2 overflow-y-auto">
          <div className="mb-5 -mx-9 -mt-8">
            <img
              src={topHeader}
              alt=""
              aria-hidden="true"
              className="w-full h-28 object-cover border-b border-[var(--ys-mute)] pointer-events-none"
            />
          </div>
          <form 
            onSubmit={handleLocalSubmit} 
            className="space-y-3.5 ys-fade-in-up mt-5 motion-reduce:transform-none motion-reduce:animate-none motion-reduce:opacity-100 [animation-delay:80ms]" 
            noValidate
          >
            {/* Login mode tabs */}
            <div role="tablist" aria-label="Login method" className="flex rounded-[8px] bg-[var(--ys-canvas-soft)] p-1 mb-1 gap-1">
              <button
                role="tab"
                type="button"
                aria-selected={loginMode === 'email' ? 'true' : 'false'}
                onClick={() => setLoginMode('email')}
                className={`flex-1 flex items-center justify-center gap-1.5 py-2 rounded-[8px] text-[0.75rem] font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ys-primary)] motion-reduce:transition-none ${
                  loginMode === 'email'
                    ? 'bg-[var(--ys-canvas)] text-transparent bg-clip-text bg-linear-to-r from-[var(--ys-ink)] via-[var(--ys-ink-mid)] to-[var(--ys-primary)] shadow-sm'
                      : 'text-[var(--ys-body-mid)] hover:text-[var(--ys-ink)]'
                }`}
              >
                <EmailOutlinedIcon sx={ loginMode === 'email' ? { fontSize: 15, fill: 'url(#loginGradient)' } : { fontSize: 15 } } className={loginMode === 'email' ? '' : 'text-[var(--ys-body-mid)]'} aria-hidden="true" />
                Email & Password
              </button>
              <button
                role="tab"
                type="button"
                aria-selected={loginMode === 'phone' ? 'true' : 'false'}
                onClick={() => setLoginMode('phone')}
                  className={`flex-1 flex items-center justify-center gap-1.5 py-2 rounded-[8px] text-[0.75rem] font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ys-primary)] motion-reduce:transition-none ${
                  loginMode === 'phone'
                    ? 'bg-[var(--ys-canvas)] text-transparent bg-clip-text bg-linear-to-r from-[var(--ys-ink)] via-[var(--ys-ink-mid)] to-[var(--ys-primary)] shadow-sm'
                    : 'text-[var(--ys-body-mid)] hover:text-[var(--ys-ink)]'
                }`}
              >
                <PhoneOutlinedIcon sx={ loginMode === 'phone' ? { fontSize: 15, fill: 'url(#loginGradient)' } : { fontSize: 15 } } className={loginMode === 'phone' ? '' : 'text-[var(--ys-body-mid)]'} aria-hidden="true" />
                Phone & OTP
              </button>
            </div>

            {loginMode === 'email' ? (
              <>
                <div className="group">
                  <label htmlFor={emailId} className="block text-[0.78rem] font-semibold text-[var(--ys-ink)] mb-1.5 transition-colors duration-300 group-focus-within:text-[var(--ys-ink-mid)]">
                    Email Address
                  </label>
                  <div className={`flex items-center rounded-[8px] border bg-[var(--ys-canvas)] group-hover:border-[var(--ys-body-mid)] transition-all duration-300 shadow-sm focus-within:shadow-md motion-reduce:transition-none ${errors.email ? 'border-red-500 focus-within:ring-2 focus-within:ring-red-200' : 'border-[var(--ys-mute)] focus-within:border-[var(--ys-ink)]! focus-within:ring-2 focus-within:ring-[var(--ys-ink)]/12'}`}>
                    <span aria-hidden="true" className="pl-3.5 text-[var(--ys-body-mid)] shrink-0 group-focus-within:text-[var(--ys-ink-mid)] transition-colors duration-300">
                      <EmailOutlinedIcon sx={{ fontSize: 18 }} />
                    </span>
                    <input 
                      id={emailId}
                      type="email" 
                      value={email} 
                      onChange={e => setEmail(e.target.value)} 
                      required
                      autoComplete="email"
                      placeholder="Enter your email address"
                      className="flex-1 px-3 py-2 text-[0.85rem] text-[var(--ys-ink)] placeholder-[var(--ys-body-mid)] bg-transparent outline-none w-full" 
                    />
                    </div>
                    {errors.email && <p className="text-red-600 text-[0.75rem] mt-1">{errors.email}</p>}
                </div>

                <div className="group">
                  <label htmlFor={passwordId} className="block text-[0.78rem] font-semibold text-[var(--ys-ink)] mb-1.5 transition-colors duration-300 group-focus-within:text-[var(--ys-ink-mid)]">
                    Password
                  </label>
                  <div className={`flex items-center rounded-[8px] border bg-[var(--ys-canvas)] group-hover:border-[var(--ys-body-mid)] transition-all duration-300 shadow-sm focus-within:shadow-md motion-reduce:transition-none ${errors.password ? 'border-red-500 focus-within:ring-2 focus-within:ring-red-200' : 'border-[var(--ys-mute)] focus-within:border-[var(--ys-ink)]! focus-within:ring-2 focus-within:ring-[var(--ys-ink)]/12'}`}>
                    <span aria-hidden="true" className="pl-3.5 text-[var(--ys-body-mid)] shrink-0 group-focus-within:text-[var(--ys-ink-mid)] transition-colors duration-300">
                      <LockOutlinedIcon sx={{ fontSize: 18 }} />
                    </span>
                    <input 
                      id={passwordId}
                      type={showPwd ? 'text' : 'password'} 
                      value={password} 
                      onChange={e => setPassword(e.target.value)} 
                      required
                      autoComplete="current-password"
                      placeholder="Enter your password"
                      className="flex-1 px-3 py-2 text-[0.85rem] text-[var(--ys-ink)] placeholder-[var(--ys-body-mid)] bg-transparent outline-none w-full" 
                    />
                    <button 
                      type="button" 
                      onClick={() => setShowPwd(!showPwd)} 
                      aria-label={showPwd ? 'Hide password' : 'Show password'}
                      aria-pressed={showPwd}
                      className="mr-2 p-1.5 text-[var(--ys-body-mid)] hover:text-[var(--ys-ink-mid)] shrink-0 rounded-[8px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ys-primary)] transition-colors duration-300 motion-reduce:transition-none"
                    >
                      {showPwd ? <VisibilityOutlinedIcon sx={{ fontSize: 17 }} aria-hidden="true" /> : <VisibilityOffOutlinedIcon sx={{ fontSize: 17 }} aria-hidden="true" />}
                    </button>
                    </div>
                    {errors.password && <p className="text-red-600 text-[0.75rem] mt-1">{errors.password}</p>}
                </div>
              </>
            ) : (
              <>
                <div className="group">
                  <label htmlFor={phoneId} className="block text-[0.78rem] font-semibold text-[var(--ys-ink)] mb-1.5 transition-colors duration-300 group-focus-within:text-[var(--ys-ink-mid)]">
                    Mobile Number
                  </label>
                  <div className={`flex items-center rounded-[8px] border bg-[var(--ys-canvas)] group-hover:border-[var(--ys-body-mid)] transition-all duration-300 shadow-sm focus-within:shadow-md motion-reduce:transition-none ${errors.phone ? 'border-red-500 focus-within:ring-2 focus-within:ring-red-200' : 'border-[var(--ys-mute)] focus-within:border-[var(--ys-ink)]! focus-within:ring-2 focus-within:ring-[var(--ys-ink)]/12'}`}>
                    <span aria-hidden="true" className="pl-3.5 text-[var(--ys-body-mid)] shrink-0 group-focus-within:text-[var(--ys-ink-mid)] transition-colors duration-300">
                      <PhoneOutlinedIcon sx={{ fontSize: 18 }} />
                    </span>
                    <input
                      id={phoneId}
                      type="tel"
                      value={phone}
                      onChange={e => setPhone(e.target.value)}
                      autoComplete="tel"
                      placeholder="Enter your mobile number"
                      className="flex-1 px-3 py-2 text-[0.85rem] text-[var(--ys-ink)] placeholder-[var(--ys-body-mid)] bg-transparent outline-none w-full"
                    />
                    <button
                      type="button"
                      onClick={onSendOtp}
                      disabled={phone.trim().length < 10}
                      className="mr-2 px-3 py-1.5 rounded-[8px] text-[0.72rem] font-bold bg-[var(--ys-primary)] text-white hover:bg-[var(--ys-ink-mid)] disabled:opacity-40 disabled:cursor-not-allowed transition-colors duration-200 shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ys-primary)] motion-reduce:transition-none"
                    >
                      {otpSent ? 'Resend OTP' : 'Send OTP'}
                    </button>
                    </div>
                    {errors.phone && <p className="text-red-600 text-[0.75rem] mt-1">{errors.phone}</p>}
                </div>

                <div className="group">
                  <label htmlFor={otpId} className="block text-[0.78rem] font-semibold text-[var(--ys-ink)] mb-1.5 transition-colors duration-300 group-focus-within:text-[var(--ys-ink-mid)]">
                    OTP
                  </label>
                  <div className={`flex items-center rounded-[8px] border bg-[var(--ys-canvas)] group-hover:border-[var(--ys-body-mid)] transition-all duration-300 shadow-sm focus-within:shadow-md motion-reduce:transition-none ${errors.otp ? 'border-red-500 focus-within:ring-2 focus-within:ring-red-200' : 'border-[var(--ys-mute)] focus-within:border-[var(--ys-ink)]! focus-within:ring-2 focus-within:ring-[var(--ys-ink)]/12'}`}>
                    <span aria-hidden="true" className="pl-3.5 text-[var(--ys-body-mid)] shrink-0 group-focus-within:text-[var(--ys-ink-mid)] transition-colors duration-300">
                      <SmsOutlinedIcon sx={{ fontSize: 18 }} />
                    </span>
                    <input
                      id={otpId}
                      type="text"
                      inputMode="numeric"
                      maxLength={6}
                      value={otp}
                      onChange={e => setOtp(e.target.value.replace(/\D/g, ''))}
                      autoComplete="one-time-code"
                      placeholder="Enter 6-digit OTP"
                      className="flex-1 px-3 py-2 text-[0.85rem] text-[var(--ys-ink)] placeholder-[var(--ys-body-mid)] bg-transparent outline-none w-full tracking-widest"
                    />
                    </div>
                    {otpSent && <p className="text-[var(--ys-primary)] font-normal text-[0.72rem] mt-1">Sent to your number</p>}
                    {errors.otp && <p className="text-red-600 text-[0.75rem] mt-1">{errors.otp}</p>}
                </div>
              </>
            )}

            {loginMode === 'email' && (
            <div className="flex items-center justify-between pt-1">
              <label htmlFor={rememberId} className="flex items-center gap-2 cursor-pointer text-[0.8rem] text-[var(--ys-body)] group">
                  <input 
                  id={rememberId}
                  type="checkbox" 
                  checked={remember} 
                  onChange={e => setRemember(e.target.checked)} 
                  className="w-4 h-4 rounded-[8px] accent-[var(--ys-primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ys-primary)] focus-visible:ring-offset-1 transition-transform group-hover:scale-110 motion-reduce:transform-none" 
                />
                Remember me
              </label>
              <button 
                type="button" 
                className="text-[0.8rem] underline font-semibold text-[var(--ys-ink-mid)] hover:text-[var(--ys-ink)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ys-primary)] rounded-[8px] transition-colors"
              >
                Forgot Password?
              </button>
            </div>
            )}

            <button 
              type="submit" 
              className="w-1/2 mx-auto flex items-center justify-center gap-2 px-5 py-2.5 mt-1 rounded-[8px] font-bold text-[0.95rem] text-white bg-linear-to-r from-[var(--ys-ink)] via-[var(--ys-ink-mid)] to-[var(--ys-primary)] hover:-translate-y-0.5 active:scale-[0.97] active:opacity-90 shadow-[0_4px_14px_rgba(232,89,12,0.25)] hover:shadow-[0_6px_20px_rgba(232,89,12,0.4)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ys-primary)] focus-visible:ring-offset-2 transition-all duration-200 motion-reduce:transform-none motion-reduce:transition-none"
            >
              <span>{loginMode === 'phone' ? 'Verify & Login' : 'Login'}</span>
            </button>

            <div className="flex items-center gap-3 my-2 pt-1" aria-hidden="true">
              <div className="flex-1 h-px bg-linear-to-r from-transparent to-[var(--ys-mute)]" />
              <span className="text-[0.63rem] font-semibold text-[var(--ys-body-mid)] tracking-[0.14em] uppercase">
                Or continue with
              </span>
              <div className="flex-1 h-px bg-linear-to-l from-transparent to-[var(--ys-mute)]" />
            </div>

            <div className="grid grid-cols-3 gap-3">
              {SOCIAL.map(({ label, logo }) => (
                <button 
                  key={label} 
                  type="button" 
                  aria-label={`Log in with ${label}`}
                  className="flex items-center justify-center gap-2 py-2 border border-[var(--ys-mute)] rounded-[8px] text-[0.8rem] font-semibold text-[var(--ys-body)] bg-[var(--ys-canvas)] hover:bg-[var(--ys-canvas-soft)] hover:-translate-y-0.5 active:scale-[0.96] hover:border-[var(--ys-body-mid)] shadow-sm hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ys-primary)] transition-all duration-200 group motion-reduce:transform-none motion-reduce:transition-none"
                >
                  <img src={logo} alt="" aria-hidden="true" className="w-4 h-4 object-contain transition-transform duration-300 group-hover:scale-110 motion-reduce:transform-none" />
                  <span>{label}</span>
                </button>
              ))}
            </div>

            <p className="text-center text-[0.82rem] text-[var(--ys-body)] pt-3">
              Don't have an account?{' '}
              <button 
                type="button" 
                onClick={onCreateAccountClick} 
                className="text-[var(--ys-ink-mid)] underline font-bold hover:text-[var(--ys-ink)] hover:underline inline-flex items-center gap-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ys-primary)] rounded-[8px] transition-all"
              >
                Create Account
              </button>
            </p>
          </form>
        </div>

        <div className="shrink-0 border-t border-[var(--ys-mute)] bg-[var(--ys-canvas-soft)]/50 py-3 px-6 flex items-center justify-around">
          {[
            { Icon: VerifiedUserOutlinedIcon, label: 'Bank-Level\nSecurity' },
            { Icon: AccessTimeOutlinedIcon,   label: '99.9%\nUptime' },
            { Icon: StarBorderOutlinedIcon,   label: 'Trusted by Top\nDevelopers' },
          ].map(({ Icon, label }, i) => (
            <React.Fragment key={label}>
              {i > 0 && <div aria-hidden="true" className="w-px h-7 bg-[var(--ys-mute)]" />}
              <div className="flex flex-col items-center gap-1 text-center px-3 group">
                <Icon sx={{ fontSize: 19 }} className="text-[var(--ys-primary)] transition-transform duration-300 group-hover:scale-110 group-hover:text-[var(--ys-ink-mid)] motion-reduce:transform-none motion-reduce:transition-none" aria-hidden="true" />
                <p className="text-[0.57rem] text-[var(--ys-body-mid)] font-medium leading-tight whitespace-pre-line group-hover:text-[var(--ys-body)] transition-colors">
                  {label}
                </p>
              </div>
            </React.Fragment>
          ))}
        </div>
      </section>
    </main>
  )
}