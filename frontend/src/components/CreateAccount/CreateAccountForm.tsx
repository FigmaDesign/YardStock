import React, { useId } from 'react'
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

  const formId = useId()

  const phoneField = (
    <div className="group">
      <label 
        htmlFor={`${formId}-phone`}
        className={`block font-semibold text-[#1A1A2E] mb-1 transition-colors group-focus-within:text-[#6B21A8] ${isMobile ? 'text-[0.7rem]' : 'text-[0.78rem]'}`}
      >
        Phone Number<span className="text-[#B91C1C] ml-0.5" aria-hidden="true">*</span>
        <span className="sr-only">Required</span>
      </label>
      <div 
        className={`flex items-center bg-white border ${errors.phone ? 'border-red-500' : 'border-[#e0e3eb] group-hover:border-gray-400'} focus-within:!border-[#7C3AED] focus-within:ring-1 focus-within:ring-[#7C3AED]/20 transition-all duration-300 rounded-[8px] motion-reduce:transition-none`}
      >
        <span 
          aria-hidden="true" 
          className={`text-gray-500 shrink-0 group-focus-within:text-[#6B21A8] transition-colors duration-300 motion-reduce:transition-none ${isMobile ? 'pl-3' : 'pl-3.5'}`}
        >
          <PhoneOutlinedIcon sx={{ fontSize: isMobile ? 16 : 18 }} />
        </span>
        <input
          id={`${formId}-phone`}
          type="tel" 
          value={phone} 
          onChange={e => setPhone(e.target.value)}
          placeholder={isMobile ? "Enter your mobile number" : "Enter phone number"}
          aria-invalid={!!errors.phone}
          aria-describedby={errors.phone ? `${formId}-phone-error` : undefined}
          aria-required="true"
          className={`flex-1 bg-transparent outline-none text-[#1A1A2E] placeholder-gray-500 ${isMobile ? 'px-2.5 py-2 text-[0.75rem]' : 'px-3 py-2 text-[0.85rem]'}`}
        />
      </div>
      {errors.phone && (
        <p id={`${formId}-phone-error`} className="text-[#B91C1C] text-[0.72rem] mt-1 font-medium" role="alert">
          {errors.phone}
        </p>
      )}
    </div>
  )

  const roleField = (
    <div className="group">
      <label 
        id={`${formId}-role-label`}
        className={`block font-semibold text-[#1A1A2E] mb-1 transition-colors group-focus-within:text-[#6B21A8] ${isMobile ? 'text-[0.7rem]' : 'text-[0.78rem]'}`}
      >
        Role<span className="text-[#B91C1C] ml-0.5" aria-hidden="true">*</span>
        <span className="sr-only">Required</span>
      </label>
      <div 
        className={`shadow-sm group-hover:shadow transition-shadow duration-300 motion-reduce:transition-none ${isMobile ? '[&>div>button]:!rounded-[8px] [&>div>button]:!min-h-[36px] [&>div>button]:!text-[0.75rem] rounded-[8px]' : 'rounded-[8px]'}`}
      >
        <Dropdown
          options={ROLE_OPTIONS}
          value={role}
          onChange={setRole}
          placeholder="Select your role"
          leftIcon={<BadgeOutlinedIcon sx={{ fontSize: isMobile ? 16 : 16 }} />}
          id={`${formId}-role`}
        />
      </div>
      {errors.role && (
        <p className="text-[#B91C1C] text-[0.72rem] mt-1 font-medium" role="alert">
          {errors.role}
        </p>
      )}
    </div>
  )

  const companyField = (
    <FormField
      label="Company / Organization" 
      id="ca-company" 
      placeholder="Enter your company name"
      value={company} 
      onChange={setCompany} 
      isMobile={isMobile}
      icon={<BusinessOutlinedIcon sx={{ fontSize: isMobile ? 16 : 18 }} aria-hidden="true" />}
    />
  )

  const passwordField = (
    <FormField
      label="Password" 
      id="ca-password" 
      type={showPwd ? 'text' : 'password'}
      placeholder="Create a strong password"
      value={password} 
      onChange={setPassword} 
      isMobile={isMobile}
      icon={<LockOutlinedIcon sx={{ fontSize: isMobile ? 16 : 18 }} aria-hidden="true" />}
      rightIcon={
        <button 
          type="button" 
          onClick={() => setShowPwd(!showPwd)} 
          aria-label={showPwd ? "Hide password" : "Show password"}
          aria-pressed={showPwd}
          className="text-gray-500 hover:text-[#6B21A8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6B21A8] rounded-[4px] p-0.5 transition-colors duration-300 motion-reduce:transition-none"
        >
          {showPwd ? (
            <VisibilityOutlinedIcon sx={{ fontSize: isMobile ? 16 : 17 }} aria-hidden="true" />
          ) : (
            <VisibilityOffOutlinedIcon sx={{ fontSize: isMobile ? 16 : 17 }} aria-hidden="true" />
          )}
        </button>
      }
      error={errors.password} 
      required
    />
  )

  const confirmPasswordField = (
    <FormField
      label="Confirm Password" 
      id="ca-confirm" 
      type={showConfirm ? 'text' : 'password'}
      placeholder="Confirm your password"
      value={confirmPassword} 
      onChange={setConfirmPassword} 
      isMobile={isMobile}
      icon={<LockOutlinedIcon sx={{ fontSize: isMobile ? 16 : 18 }} aria-hidden="true" />}
      rightIcon={
        <button 
          type="button" 
          onClick={() => setShowConfirm(!showConfirm)} 
          aria-label={showConfirm ? "Hide confirm password" : "Show confirm password"}
          aria-pressed={showConfirm}
          className="text-gray-500 hover:text-[#6B21A8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6B21A8] rounded-[4px] p-0.5 transition-colors duration-300 motion-reduce:transition-none"
        >
          {showConfirm ? (
            <VisibilityOutlinedIcon sx={{ fontSize: isMobile ? 16 : 17 }} aria-hidden="true" />
          ) : (
            <VisibilityOffOutlinedIcon sx={{ fontSize: isMobile ? 16 : 17 }} aria-hidden="true" />
          )}
        </button>
      }
      error={errors.confirmPassword} 
      required
    />
  )

  return (
    <form onSubmit={onSubmit} className={isMobile ? "space-y-3.5" : "space-y-3"} noValidate>
      {twoColumn ? (
        <>
          <FormField
            label="Full Name" 
            id="ca-name" 
            placeholder="Enter your full name"
            value={name} 
            onChange={setName} 
            isMobile={isMobile}
            icon={<PersonOutlinedIcon sx={{ fontSize: isMobile ? 16 : 18 }} aria-hidden="true" />}
            error={errors.name} 
            required
          />
          <div className="grid grid-cols-2 gap-4">
            <FormField
              label="Work Email" 
              id="ca-email" 
              type="email" 
              placeholder="Enter your work email"
              value={email} 
              onChange={setEmail} 
              isMobile={isMobile}
              icon={<EmailOutlinedIcon sx={{ fontSize: isMobile ? 16 : 18 }} aria-hidden="true" />}
              error={errors.email} 
              required
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
            label="Full Name" 
            id="ca-name" 
            placeholder="Enter your full name"
            value={name} 
            onChange={setName} 
            isMobile={isMobile}
            icon={<PersonOutlinedIcon sx={{ fontSize: isMobile ? 16 : 18 }} aria-hidden="true" />}
            error={errors.name} 
            required
          />
          <FormField
            label="Work Email" 
            id="ca-email" 
            type="email" 
            placeholder="Enter your work email"
            value={email} 
            onChange={setEmail} 
            isMobile={isMobile}
            icon={<EmailOutlinedIcon sx={{ fontSize: isMobile ? 16 : 18 }} aria-hidden="true" />}
            error={errors.email} 
            required
          />
          {phoneField}
          {companyField}
          {roleField}
          {passwordField}
          {confirmPasswordField}
        </>
      )}

      {!isMobile && (
        <div 
          className="bg-[#7C3AED]/10 border border-[#7C3AED]/20 rounded-[8px] p-2.5 flex items-center justify-between gap-3 mt-2 shadow-[0_2px_10px_rgba(107,33,168,0.05)] hover:shadow-[0_4px_15px_rgba(107,33,168,0.1)] transition-all duration-300 motion-reduce:transition-none"
          role="status"
          aria-label="Security Information"
        >
          <div className="flex items-start gap-2.5">
            <SecurityOutlinedIcon sx={{ fontSize: 18, color: '#6B21A8', flexShrink: 0, marginTop: '1px' }} aria-hidden="true" />
            <div>
              <p className="text-[0.75rem] font-bold text-[#6B21A8]">Your security is our priority</p>
              <p className="text-[0.72rem] text-[#5B21B6] leading-relaxed mt-0.5">
                We use advanced encryption and security protocols to protect your data.
              </p>
            </div>
          </div>
          <TaskAltIcon 
            className="animate-[pulse_3s_ease-in-out_infinite] motion-reduce:animate-none" 
            sx={{ fontSize: 26, color: '#6B21A8', flexShrink: 0 }} 
            aria-hidden="true" 
          />
        </div>
      )}

      <div className={`flex items-start gap-2.5 group ${isMobile ? 'pt-1' : ''}`}>
        <input
          id={`${formId}-agreed`}
          type="checkbox" 
          checked={agreed} 
          onChange={e => setAgreed(e.target.checked)}
          aria-invalid={!!errors.agreed}
          aria-describedby={errors.agreed ? `${formId}-agreed-error` : undefined}
          aria-required="true"
            className={`mt-0.5 rounded-[8px] accent-[#6B21A8] shrink-0 transition-transform group-hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6B21A8] focus-visible:ring-offset-2 motion-reduce:transition-none motion-reduce:transform-none ${isMobile ? 'w-3.5 h-3.5' : 'w-4 h-4'}`}
        />
        <span className={`text-[#374151] leading-relaxed ${isMobile ? 'text-[0.72rem]' : 'text-[0.75rem]'}`}>
          <label htmlFor={`${formId}-agreed`} className="cursor-pointer">I agree to the </label>
          <button 
            type="button" 
            className="text-[#6B21A8] underline font-semibold hover:text-[#5B21B6] hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6B21A8] rounded-[8px] transition-colors"
          >
            Terms of Service
          </button>
          {' '}and{' '}
          <button 
            type="button" 
            className="text-[#6B21A8] underline font-semibold hover:text-[#5B21B6] hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6B21A8] rounded-[8px] transition-colors"
          >
            Privacy Policy
          </button>
        </span>
      </div>
      {errors.agreed && (
        <p id={`${formId}-agreed-error`} className="text-[#B91C1C] font-medium text-[0.72rem] -mt-2" role="alert">
          {errors.agreed}
        </p>
      )}

      <button
        type="submit"
        className={`relative ${isMobile ? 'w-full' : 'w-1/2 mx-auto'} flex items-center justify-center font-bold text-white bg-linear-to-r from-[#7C3AED] to-[#D946EF] hover:-translate-y-0.5 active:scale-[0.97] active:opacity-90 shadow-[0_4px_14px_rgba(107,33,168,0.25)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6B21A8] focus-visible:ring-offset-2 transition-all duration-200 motion-reduce:transition-none motion-reduce:transform-none ${isMobile ? 'py-3 mt-4 text-[0.9rem] rounded-[8px]' : 'py-2.5 px-5 mt-2 text-[0.95rem] rounded-[8px]'}`}
      >
        <span>Create Account</span>
      </button>

      <div className={`flex items-center gap-3 ${isMobile ? 'my-4' : 'my-2'}`} aria-hidden="true">
        <div className="flex-1 h-px bg-linear-to-r from-transparent to-[#e5e7eb]" />
        <span className={`font-semibold text-gray-500 tracking-[0.14em] uppercase ${isMobile ? 'text-[0.6rem]' : 'text-[0.63rem]'}`}>
          Or sign up with
        </span>
        <div className="flex-1 h-px bg-linear-to-l from-transparent to-[#e5e7eb]" />
      </div>

      <div className="grid grid-cols-3 gap-2.5">
        {SOCIAL.map(({ label, logo }) => (
          <button 
            key={label} 
            type="button" 
            aria-label={`Sign up with ${label}`}
            className={`flex items-center justify-center gap-2 border border-[#e0e3eb] font-semibold text-[#374151] bg-white hover:bg-gray-50 hover:-translate-y-0.5 active:scale-[0.96] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6B21A8] transition-all duration-200 motion-reduce:transition-none motion-reduce:transform-none ${isMobile ? 'py-2 rounded-[8px] text-[0.75rem]' : 'py-2 rounded-[8px] text-[0.8rem] shadow-sm'}`}
          >
            <img src={logo} alt="" aria-hidden="true" className={`object-contain ${isMobile ? 'w-3.5 h-3.5' : 'w-4 h-4'}`} />
            <span>{label}</span>
          </button>
        ))}
      </div>

      {showLoginLink && (
        <p className={`text-center text-gray-600 ${isMobile ? 'text-[0.75rem] pt-3' : 'text-[0.82rem] pt-2'}`}>
          Already have an account?{' '}
          <button 
            type="button" 
            onClick={onLoginClick} 
            className="text-[#6B21A8] font-bold hover:text-[#5B21B6] hover:underline underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6B21A8] rounded-[8px] transition-all duration-200 motion-reduce:transition-none"
          >
            Login here
          </button>
        </p>
      )}
    </form>
  )
}