import React from 'react'
import CreateAccountForm, { type CreateAccountFormProps } from './CreateAccountForm'
import mobileBg from '../commonfiles/Images/Login&create/mobile.png'
import YardLogo from '../commonfiles/Images/YardStackLogowithouttext.png'
import VerifiedUserOutlinedIcon from '@mui/icons-material/VerifiedUserOutlined'
import ApartmentIcon from '@mui/icons-material/Apartment'
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined'

export default function CreateAccountMobile(props: CreateAccountFormProps) {
  return (
    <main className="h-dvh w-full bg-[#f4f6f9] flex flex-col font-['Outfit',sans-serif] overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] scrollbar-none">
      <header
        className="relative shrink-0 pb-12 ys-fade-in-down motion-reduce:animate-none motion-reduce:transform-none motion-reduce:opacity-100 bg-cover bg-top bg-(image:--mobile-bg)"
        style={{ '--mobile-bg': `url(${mobileBg})` } as React.CSSProperties}
      >
        <div 
          aria-hidden="true"
          className="absolute inset-0 bg-linear-to-b from-[#050f20]/90 via-[#071428]/70 to-[#0d1a35]/95" 
        />
        
        <div className="relative z-10 px-5 pt-10">
          <div className="flex items-center gap-3 mb-6">
            <img 
              src={YardLogo} 
              alt="Yard Logo" 
              aria-hidden="true" 
              className="w-10 h-10 object-contain drop-shadow-md" 
            />
            <div>
              <p className="text-white font-extrabold text-[1.3rem] tracking-[0.15em] leading-none drop-shadow-sm">
                YARD
              </p>
              <p className="text-[#4ade80] font-semibold text-[0.55rem] tracking-[0.22em] uppercase mt-1 drop-shadow-sm">
                Real Estate Intelligence
              </p>
            </div>
          </div>

          <h1 className="text-white text-[1.6rem] font-extrabold leading-tight drop-shadow-lg mt-2">
            Welcome to <span className="text-[#4ade80]">Yard</span>
          </h1>
          <p className="text-white/90 text-[0.75rem] mt-2 leading-relaxed max-w-70 drop-shadow-md">
            Create your account and unlock the power of intelligent real estate insights.
          </p>
        </div>
      </header>

      <section 
        aria-labelledby="mobile-create-account-heading"
        className="relative z-20 -mt-6 pb-15 ys-scale-in motion-reduce:animate-none motion-reduce:transform-none motion-reduce:opacity-100 [animation-delay:80ms]" 
      >
        <div className="bg-white rounded-[8px] p-5 shadow-[0_8px_30px_rgba(0,0,0,0.08)] border border-gray-100">
          <h2 
            id="mobile-create-account-heading" 
            className="text-[#0f1e3d] text-[1.2rem] font-extrabold leading-none mb-1.5"
          >
            Create Your Account
          </h2>
          <p className="text-gray-500 text-[0.75rem] mb-5">
            Fill in the details to get started
          </p>
          
          <CreateAccountForm {...props} showLoginLink={true} isMobile={true} />

        </div>
      </section>
    </main>
  )
}