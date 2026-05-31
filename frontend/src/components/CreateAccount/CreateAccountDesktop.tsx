import VerifiedUserOutlinedIcon from '@mui/icons-material/VerifiedUserOutlined'
import BarChartIcon from '@mui/icons-material/BarChart'
import GroupsIcon from '@mui/icons-material/Groups'
import LanguageIcon from '@mui/icons-material/Language'
import Sidebar from '../commonfiles/sidebar/Sidebar'
import Dropdown from '../commonfiles/Dropdown'
import CreateAccountForm, { type CreateAccountFormProps } from './CreateAccountForm'
import { STATS_DESKTOP } from './constants'
import desktopBg from '../commonfiles/Images/Login&create/Desktop1.png'

interface CreateAccountDesktopProps extends CreateAccountFormProps {
  language: string
  setLanguage: (v: string) => void
}

const LANG_OPTIONS = [
  { value: 'en', label: 'English' },
  { value: 'hi', label: 'Hindi' },
  { value: 'mr', label: 'Marathi' },
]

const FEATURES = [
  { Icon: VerifiedUserOutlinedIcon, title: 'Secure & Trusted',       desc: 'Enterprise-grade security for your data' },
  { Icon: BarChartIcon,             title: 'Smart & Powerful',        desc: 'Advanced analytics for smarter decisions' },
  { Icon: GroupsIcon,               title: 'Built for Professionals', desc: 'Designed for agents, developers & teams' },
]

export default function CreateAccountDesktop({ language, setLanguage, onLoginClick, ...formProps }: CreateAccountDesktopProps) {
  return (
    <div className="h-screen w-full flex overflow-hidden">
      <Sidebar active="dashboard" />

      <div
        className="flex-1 relative bg-cover bg-center"
        style={{ backgroundImage: `url(${desktopBg})` }}
      >
        <div className="absolute inset-0 bg-linear-to-r from-[#050f20]/80 via-[#071428]/60 to-transparent" />
        <div className="relative z-10 flex flex-col justify-between h-full px-10 py-8 max-w-[520px]">
          <div className="mt-2">
            <p className="text-[#4ade80] text-[0.82rem] font-semibold tracking-wider uppercase drop-shadow-sm">Create Your Account</p>
            <div className="w-10 h-0.5 bg-[#4ade80] mt-2 mb-5 shadow-[0_2px_8px_rgba(74,222,128,0.5)]" />
            <h1 className="text-white text-[2.1rem] font-extrabold leading-[1.15] tracking-tight drop-shadow-lg">
              Join India's Most Intelligent<br />Real Estate Platform <span className="text-[#4ade80]">Yard</span>
            </h1>
            <p className="text-white/80 text-[0.9rem] mt-4 leading-relaxed drop-shadow-md">
              Get started and unlock the power of<br />data-driven real estate intelligence.
            </p>
            <div className="mt-7 space-y-2">
              {FEATURES.map(({ Icon, title, desc }) => (
                <div key={title} className="flex items-center gap-3 p-2.5 rounded-[8px] hover:bg-white/10 hover:-translate-y-0.5 border border-transparent hover:border-white/10 transition-all duration-300 cursor-default hover:shadow-[0_8px_24px_rgba(0,0,0,0.2)] group">
                  <div className="bg-[#16a34a] rounded-[8px] p-2.5 shrink-0 shadow-[0_4px_12px_rgba(22,163,74,0.4)] group-hover:scale-110 group-hover:bg-[#15803d] transition-all duration-300">
                    <Icon sx={{ fontSize: 18, color: 'white' }} />
                  </div>
                  <div>
                    <p className="text-white font-semibold text-[0.85rem] group-hover:text-[#4ade80] transition-colors duration-300">{title}</p>
                    <p className="text-white/65 text-[0.73rem] group-hover:text-white/80 transition-colors duration-300">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white/15 backdrop-blur-xl border border-white/20 rounded-[8px] p-2 mb-20 shadow-[0_8px_32px_rgba(0,0,0,0.15)] hover:bg-white/20 hover:shadow-[0_8px_32px_rgba(0,0,0,0.25)] transition-all duration-500 group">
            <div className="flex items-center divide-x divide-white/20 py-1">
              {STATS_DESKTOP.map(({ value, label }) => (
                <div key={label} className="flex-1 text-center px-1 first:pl-0 last:pr-0 transform transition-transform duration-300 group-hover:scale-[1.02]">
                  <p className="text-white font-extrabold text-[1.15rem] drop-shadow-md">{value}</p>
                  <p className="text-white/70 text-[0.68rem] mt-0.5">{label}</p>
                </div>
              ))}
            </div>
            <p className="text-white/80 text-[0.8rem] text-center mt-2 border-t border-white/15 pt-2 pb-1">
              Already have an account?{' '}
              <button type="button" onClick={onLoginClick} className="text-[#4ade80] font-bold hover:text-white hover:underline transition-all underline duration-300">Login here</button>
            </p>
          </div>
        </div>
      </div>

      <div className="w-[640px] shrink-0 bg-white flex flex-col shadow-[-12px_0_40px_rgba(0,0,0,0.12)] z-10 relative">
        <div className="flex justify-end pt-8 px-10 pb-4 shrink-0">
{/*             <span className="text-[0.75rem] font-bold text-[#6b7280] uppercase tracking-wider mr-2.5 mt-0.5">Language:</span> */}
            <Dropdown
              options={LANG_OPTIONS}
              value={language}
              onChange={setLanguage}
              leftIcon={<LanguageIcon sx={{ fontSize: 15 }} />}
              size="sm"
              className="w-32"
            />
          </div>
      

        <div className="flex-1 px-10 flex flex-col justify-start">
          <CreateAccountForm {...formProps} onLoginClick={onLoginClick} twoColumn showLoginLink={false} />
        </div>
      </div>
    </div>
  )
}