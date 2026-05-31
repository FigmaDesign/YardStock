import CreateAccountForm, { type CreateAccountFormProps } from './CreateAccountForm'
import mobileBg from '../commonfiles/Images/Login&create/mobile.png'
import YardLogo from '../commonfiles/Images/YardStackLogowithouttext.png'

export default function CreateAccountMobile(props: CreateAccountFormProps) {
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
            Welcome to <span className="text-[#4ade80]">Yard</span>
          </h2>
          <p className="text-white/85 text-[0.75rem] mt-2 leading-relaxed max-w-[280px] drop-shadow-md">
            Create your account and unlock the power of intelligent real estate insights.
          </p>
        </div>
      </div>

      <div className="relative z-20 -mt-6 pb-15">
        <div className="bg-white rounded-[8px] p-5 shadow-[0_8px_30px_rgba(0,0,0,0.08)] border border-gray-100">
          <h2 className="text-[#0f1e3d] text-[1.2rem] font-extrabold leading-none mb-1.5">Create Your Account</h2>
          <p className="text-[#6b7280] text-[0.75rem] mb-5">Fill in the details to get started</p>
          
          <CreateAccountForm {...props} showLoginLink={true} isMobile={true} />
        </div>
      </div>
    </div>
  )
}