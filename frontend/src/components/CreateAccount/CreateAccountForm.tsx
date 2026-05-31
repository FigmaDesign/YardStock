import React from 'react'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined'
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined'
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined'
import BadgeOutlinedIcon from '@mui/icons-material/BadgeOutlined'
import BusinessOutlinedIcon from '@mui/icons-material/BusinessOutlined'
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined'
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined'
import TaskAltIcon from '@mui/icons-material/TaskAlt'
import Dropdown from '../commonfiles/Dropdown'
import FormField from './FormField'
import { ROLE_OPTIONS, SOCIAL } from './constants'

export interface CreateAccountFormProps {
  name: string
  setName: (v: string) => void
  email: string
  setEmail: (v: string) => void
  phone: string
  setPhone: (v: string) => void
  phoneCode: string
  setPhoneCode: (v: string) => void
  company: string
  setCompany: (v: string) => void
  role: string
  setRole: (v: string) => void
  password: string
  setPassword: (v: string) => void
  confirmPassword: string
  setConfirmPassword: (v: string) => void
  showPwd: boolean
  setShowPwd: (v: boolean) => void
  showConfirm: boolean
  setShowConfirm: (v: boolean) => void
  agreed: boolean
  setAgreed: (v: boolean) => void
  errors: Record<string, string>
  onSubmit: (e: React.FormEvent) => void
  onLoginClick?: () => void
  twoColumn?: boolean
  showLoginLink?: boolean
  isMobile?: boolean
}

export default function CreateAccountForm(props: CreateAccountFormProps) {
  const {
    name, setName, email, setEmail, phone, setPhone,
    company, setCompany, role, setRole, password, setPassword,
    confirmPassword, setConfirmPassword, showPwd, setShowPwd,
    showConfirm, setShowConfirm, agreed, setAgreed, errors, onSubmit, onLoginClick,
    twoColumn = false, showLoginLink = true, isMobile = false
  } = props

  const phoneField = (
    <div className="group">
      <label className={`block font-semibold text-[#1a1a2e] mb-1 transition-colors group-focus-within:text-[#16a34a] ${isMobile ? 'text-[0.7rem]' : 'text-[0.78rem]'}`}>
        Phone Number<span className="text-red-500 ml-0.5">*</span>
      </label>
      <div className={`flex items-center bg-white border border-[#e0e3eb] group-hover:border-gray-300 focus-within:!border-[#16a34a] focus-within:ring-1 focus-within:ring-[#16a34a]/20 transition-all duration-300 rounded-[8px]`}>
        <span className={`text-[#b0b5c0] shrink-0 group-focus-within:text-[#16a34a] transition-colors ${isMobile ? 'pl-3' : 'pl-3.5'}`}>
          <PhoneOutlinedIcon sx={{ fontSize: isMobile ? 16 : 18 }} />
        </span>
        <input
          id="ca-phone" type="tel" value={phone} onChange={e => setPhone(e.target.value)}
          placeholder={isMobile ? "Enter your mobile number" : "Enter phone number"}
          className={`flex-1 bg-transparent outline-none text-[#1a1a2e] placeholder-[#b0b5c0] ${isMobile ? 'px-2.5 py-2 text-[0.75rem]' : 'px-3 py-2 text-[0.85rem]'}`}
        />
      </div>
      {errors.phone && <p className="text-red-500 text-[0.72rem] mt-1">{errors.phone}</p>}
    </div>
  )

  const roleField = (
    <div className="group">
      <label className={`block font-semibold text-[#1a1a2e] mb-1 transition-colors group-focus-within:text-[#16a34a] ${isMobile ? 'text-[0.7rem]' : 'text-[0.78rem]'}`}>
        Role<span className="text-red-500 ml-0.5">*</span>
      </label>
      <div className={`shadow-sm group-hover:shadow transition-shadow duration-300 ${isMobile ? '[&>div>button]:!rounded-[8px] [&>div>button]:!min-h-[36px] [&>div>button]:!text-[0.75rem] rounded-[8px]' : 'rounded-[8px]'}`}>
        <Dropdown
          options={ROLE_OPTIONS}
          value={role}
          onChange={setRole}
          placeholder="Select your role"
          leftIcon={<BadgeOutlinedIcon sx={{ fontSize: isMobile ? 16 : 16 }} />}
          id="ca-role"
        />
      </div>
      {errors.role && <p className="text-red-500 text-[0.72rem] mt-1">{errors.role}</p>}
    </div>
  )

  const companyField = (
    <FormField
      label="Company / Organization" id="ca-company" placeholder="Enter your company name"
      value={company} onChange={setCompany} isMobile={isMobile}
      icon={<BusinessOutlinedIcon sx={{ fontSize: isMobile ? 16 : 18 }} />}
    />
  )

  const passwordField = (
    <FormField
      label="Password" id="ca-password" type={showPwd ? 'text' : 'password'}
      placeholder="Create a strong password"
      value={password} onChange={setPassword} isMobile={isMobile}
      icon={<LockOutlinedIcon sx={{ fontSize: isMobile ? 16 : 18 }} />}
      rightIcon={
        <button type="button" onClick={() => setShowPwd(!showPwd)} className="text-[#b0b5c0] hover:text-[#4ade80] transition-colors duration-300">
          {showPwd ? <VisibilityOutlinedIcon sx={{ fontSize: isMobile ? 16 : 17 }} /> : <VisibilityOffOutlinedIcon sx={{ fontSize: isMobile ? 16 : 17 }} />}
        </button>
      }
      error={errors.password} required
    />
  )

  const confirmPasswordField = (
    <FormField
      label="Confirm Password" id="ca-confirm" type={showConfirm ? 'text' : 'password'}
      placeholder="Confirm your password"
      value={confirmPassword} onChange={setConfirmPassword} isMobile={isMobile}
      icon={<LockOutlinedIcon sx={{ fontSize: isMobile ? 16 : 18 }} />}
      rightIcon={
        <button type="button" onClick={() => setShowConfirm(!showConfirm)} className="text-[#b0b5c0] hover:text-[#4ade80] transition-colors duration-300">
          {showConfirm ? <VisibilityOutlinedIcon sx={{ fontSize: isMobile ? 16 : 17 }} /> : <VisibilityOffOutlinedIcon sx={{ fontSize: isMobile ? 16 : 17 }} />}
        </button>
      }
      error={errors.confirmPassword} required
    />
  )

  return (
    <form onSubmit={onSubmit} className={isMobile ? "space-y-3.5" : "space-y-3"} noValidate>
      {twoColumn ? (
        <>
          <FormField
            label="Full Name" id="ca-name" placeholder="Enter your full name"
            value={name} onChange={setName} isMobile={isMobile}
            icon={<PersonOutlinedIcon sx={{ fontSize: isMobile ? 16 : 18 }} />}
            error={errors.name} required
          />
          <div className="grid grid-cols-2 gap-4">
            <FormField
              label="Work Email" id="ca-email" type="email" placeholder="Enter your work email"
              value={email} onChange={setEmail} isMobile={isMobile}
              icon={<EmailOutlinedIcon sx={{ fontSize: isMobile ? 16 : 18 }} />}
              error={errors.email} required
            />
            {phoneField}
          </div>
          <div className="grid grid-cols-2 gap-4">
            {companyField}
            {roleField}
          </div>
          <div className="grid grid-cols-2 gap-4">
            {passwordField}
            {confirmPasswordField}
          </div>
        </>
      ) : (
        <>
          <FormField
            label="Full Name" id="ca-name" placeholder="Enter your full name"
            value={name} onChange={setName} isMobile={isMobile}
            icon={<PersonOutlinedIcon sx={{ fontSize: isMobile ? 16 : 18 }} />}
            error={errors.name} required
          />
          <FormField
            label="Work Email" id="ca-email" type="email" placeholder="Enter your work email"
            value={email} onChange={setEmail} isMobile={isMobile}
            icon={<EmailOutlinedIcon sx={{ fontSize: isMobile ? 16 : 18 }} />}
            error={errors.email} required
          />
          {phoneField}
          {companyField}
          {roleField}
          {passwordField}
          {confirmPasswordField}
        </>
      )}

      {!isMobile && (
        <div className="bg-[#f0fdf4] border border-[#bbf7d0] rounded-[8px] p-2.5 flex items-center justify-between gap-3 mt-2 shadow-[0_2px_10px_rgba(22,163,74,0.05)] hover:shadow-[0_4px_15px_rgba(22,163,74,0.1)] transition-all duration-300">
          <div className="flex items-start gap-2.5">
            <SecurityOutlinedIcon sx={{ fontSize: 18, color: '#16a34a', flexShrink: 0, marginTop: '1px' }} />
            <div>
              <p className="text-[0.75rem] font-bold text-[#14532d]">Your security is our priority</p>
              <p className="text-[0.72rem] text-[#166534] leading-relaxed mt-0.5">
                We use advanced encryption and security protocols to protect your data.
              </p>
            </div>
          </div>
          <TaskAltIcon className="animate-[pulse_3s_ease-in-out_infinite]" sx={{ fontSize: 26, color: '#16a34a', flexShrink: 0 }} />
        </div>
      )}

      <label className={`flex items-start gap-2.5 cursor-pointer group ${isMobile ? 'pt-1' : ''}`}>
        <input
          type="checkbox" checked={agreed} onChange={e => setAgreed(e.target.checked)}
          className={`mt-0.5 rounded accent-[#16a34a] shrink-0 transition-transform group-hover:scale-110 ${isMobile ? 'w-3.5 h-3.5' : 'w-4 h-4'}`}
        />
        <span className={`text-[#374151] leading-relaxed ${isMobile ? 'text-[0.72rem]' : 'text-[0.75rem]'}`}>
          I agree to the{' '}
          <button type="button" className="text-[#16a34a] font-semibold hover:text-[#15803d] transition-colors">Terms of Service</button>
          {' '}and{' '}
          <button type="button" className="text-[#16a34a] font-semibold hover:text-[#15803d] transition-colors">Privacy Policy</button>
        </span>
      </label>
      {errors.agreed && <p className="text-red-500 text-[0.72rem] -mt-2">{errors.agreed}</p>}

      <button
        type="submit"
        className={`relative ${isMobile ? 'w-full' : 'w-1/2 mx-auto'} flex items-center justify-center font-bold text-white bg-linear-to-r from-[#1d4ed8] via-[#1a7e5a] to-[#16a34a] hover:-translate-y-0.5 shadow-[0_4px_14px_rgba(22,163,74,0.25)] transition-all duration-300 ${isMobile ? 'py-3 mt-4 text-[0.9rem] rounded-[8px]' : 'py-2.5 px-5 mt-2 text-[0.95rem] rounded-[8px]'}`}
      >
        <span>Create Account</span>
      </button>

      <div className={`flex items-center gap-3 ${isMobile ? 'my-4' : 'my-2'}`}>
        <div className="flex-1 h-px bg-linear-to-r from-transparent to-[#e5e7eb]" />
        <span className={`font-semibold text-[#9ca3af] tracking-[0.14em] uppercase ${isMobile ? 'text-[0.6rem]' : 'text-[0.63rem]'}`}>Or sign up with</span>
        <div className="flex-1 h-px bg-linear-to-l from-transparent to-[#e5e7eb]" />
      </div>

      <div className="grid grid-cols-3 gap-2.5">
        {SOCIAL.map(({ label, logo }) => (
          <button key={label} type="button" className={`flex items-center justify-center gap-2 border border-[#e0e3eb] font-semibold text-[#374151] bg-white hover:bg-gray-50 hover:-translate-y-0.5 transition-all duration-300 ${isMobile ? 'py-2 rounded-[8px] text-[0.75rem]' : 'py-2 rounded-[8px] text-[0.8rem] shadow-sm'}`}>
            <img src={logo} alt={label} className={`object-contain ${isMobile ? 'w-3.5 h-3.5' : 'w-4 h-4'}`} />
            <span>{label}</span>
          </button>
        ))}
      </div>

      {showLoginLink && (
        <p className={`text-center text-[#6b7280] ${isMobile ? 'text-[0.75rem] pt-3' : 'text-[0.82rem] pt-2'}`}>
          Already have an account?{' '}
          <button type="button" onClick={onLoginClick} className="text-[#16a34a] font-bold hover:underline underline transition-all">Login here</button>
        </p>
      )}
    </form>
  )
}