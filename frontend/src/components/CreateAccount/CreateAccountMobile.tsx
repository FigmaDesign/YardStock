import CreateAccountForm, { type CreateAccountFormProps } from './CreateAccountForm'
import { STATS_MOBILE } from './constants'

export default function CreateAccountMobile(props: CreateAccountFormProps) {
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
            Welcome to <span className="text-[#4ade80]">Yard</span>
          </h2>
          <p className="text-white/80 text-[0.8rem] mt-2 leading-relaxed max-w-[280px]">
            Create your account and unlock the power of intelligent real estate insights.
          </p>

          <div className="grid grid-cols-2 gap-2.5 mt-5">
            {STATS_MOBILE.map(({ Icon, value, label }) => (
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
        <h2 className="text-[1.35rem] font-extrabold text-[#0f1e3d]">Create Your Account</h2>
        <p className="text-[0.78rem] text-[#6b7280] mt-0.5 mb-5">Fill in the details to get started</p>
        <CreateAccountForm {...props} />
      </div>
    </div>
  )
}
