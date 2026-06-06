import React from 'react'
import CreateAccountForm, { type CreateAccountFormProps } from './CreateAccountForm'
import mobileBg from '../commonfiles/Images/Login&create/mobile.png'

export default function CreateAccountMobile(props: CreateAccountFormProps) {
  return (
    <main className="h-dvh w-full bg-[var(--ys-canvas)] flex flex-col font-['Outfit',sans-serif] overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] scrollbar-none">
      <header
        className="relative shrink-0 pb-12 ys-fade-in-down motion-reduce:animate-none motion-reduce:transform-none motion-reduce:opacity-100 bg-no-repeat bg-[length:100%_100%] bg-center bg-(image:--mobile-bg)"
        style={{ '--mobile-bg': `url(${mobileBg})` } as React.CSSProperties}
      >
        <div 
          aria-hidden="true"
          className="absolute inset-0 bg-linear-to-b from-[var(--ys-ink)]/90 via-[var(--ys-ink-soft)]/70 to-[var(--ys-ink)]/95" 
        />
        
        <div className="relative z-10 px-5 pt-10">
          <h1 className="text-white text-[1.6rem] font-extrabold leading-tight drop-shadow-lg mt-2">
            Welcome to <span className="text-[var(--ys-primary)]">YardStock</span>
          </h1>
          <p className="text-white/90 text-[0.75rem] mt-2 leading-relaxed max-w-70 drop-shadow-md">
            Create your account and unlock the power of intelligent real estate insights.
          </p>
        </div>
      </header>

      <section 
        aria-labelledby="mobile-create-account-heading"
        className="relative z-20 w-full mt-auto pb-15 ys-scale-in motion-reduce:animate-none motion-reduce:transform-none motion-reduce:opacity-100 [animation-delay:80ms]" 
      >
        <div className="bg-[var(--ys-canvas)] rounded-[8px] p-5 shadow-[0_8px_30px_rgba(0,0,0,0.08)] border border-[var(--ys-mute)]">
          <CreateAccountForm {...props} showLoginLink={true} isMobile={true} />
        </div>
      </section>
    </main>
  )
}