import { memo, useCallback, type ElementType } from 'react'
import { Home, Users, Plus, SlidersHorizontal, Bookmark } from 'lucide-react'

export interface FooterNavItem {
  key: string
  label: string
  Icon: ElementType
}

export const FOOTER_NAV_ITEMS: FooterNavItem[] = [
  { key: 'home',   label: 'Home',   Icon: Home },
  { key: 'leads',  label: 'Leads',  Icon: Users },
  { key: 'post',   label: 'Post',   Icon: Plus },
  { key: 'manage', label: 'Manage', Icon: SlidersHorizontal },
  { key: 'saved',  label: 'Saved',  Icon: Bookmark },
]

interface FooterNavButtonProps {
  item: FooterNavItem
  isActive: boolean
  onClick: (key: string) => void
}

const StandardNavButton = memo(function StandardNavButton({ item, isActive, onClick }: FooterNavButtonProps) {
  const { key, label, Icon } = item

  return (
    <button
      type="button"
      role="tab"
      aria-label={label}
      aria-selected={isActive}
      onClick={() => onClick(key)}
      className="group relative flex flex-1 flex-col items-center justify-center gap-1.5 min-w-0 py-2 sm:py-2.5 px-1 border-none outline-none cursor-pointer bg-transparent transition-all duration-300 ease-out active:scale-[0.92] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c2ef4e]/50 focus-visible:ring-inset motion-reduce:transition-none motion-reduce:transform-none [-webkit-tap-highlight-color:transparent]"
    >
      {isActive && (
        <div
          aria-hidden="true"
          className="absolute inset-x-2 inset-y-1 rounded-lg bg-white/5 border border-white/5 shadow-[0_0_15px_rgba(194,239,78,0.05),inset_0_1px_0_rgba(255,255,255,0.1)] animate-[fadeScale_0.3s_ease-out]"
        />
      )}

      <div className="relative z-10">
        <Icon
          size={20}
          strokeWidth={isActive ? 2.2 : 1.8}
          aria-hidden="true"
          className={`transition-all duration-300 motion-reduce:transition-none ${
            isActive
              ? 'text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.3)] -translate-y-0.5'
              : 'text-[#bdb8c0] group-hover:text-white translate-y-0'
          }`}
        />
      </div>

      <span
        className={`relative z-10 font-['Outfit',sans-serif] text-[10px] uppercase tracking-[0.2px] leading-none transition-all duration-300 motion-reduce:transition-none ${
          isActive
            ? 'font-bold text-white -translate-y-0.5'
            : 'font-semibold text-[#bdb8c0] group-hover:text-white translate-y-0'
        }`}
      >
        {label}
      </span>

      {isActive && (
        <div
          aria-hidden="true"
          className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-1.5 h-[3px] rounded-sm bg-[#c2ef4e] shadow-[0_0_8px_rgba(194,239,78,0.6)] animate-[fadeScale_0.3s_ease-out_0.1s_both]"
        />
      )}
    </button>
  )
})

const PostNavButton = memo(function PostNavButton({ item, isActive, onClick }: FooterNavButtonProps) {
  const { key, label, Icon } = item

  return (
    <button
      type="button"
      role="tab"
      aria-label={label}
      aria-selected={isActive}
      onClick={() => onClick(key)}
      className="group relative flex flex-1 flex-col items-center justify-end min-w-0 py-2 sm:py-2.5 px-1 border-none outline-none cursor-pointer bg-transparent focus-visible:outline-none [-webkit-tap-highlight-color:transparent]"
    >
      <div className="absolute top-[-18px] left-1/2 -translate-x-1/2 z-20">
        <div
          className={`relative flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-tr from-[#422082] to-[#6a5fc1] transition-all duration-300 ease-out border border-[#79628c]/30 group-active:scale-90 ${
            isActive 
              ? 'shadow-[0_0_20px_rgba(106,95,193,0.5)] translate-y-0.5' 
              : 'shadow-[0_4px_16px_rgba(21,15,35,0.6)] hover:-translate-y-0.5 hover:shadow-[0_6px_16px_rgba(106,95,193,0.4)]'
          }`}
        >
          <Icon
            size={24}
            strokeWidth={2.5}
            className={`text-white transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${
              isActive ? 'rotate-[135deg] scale-110' : 'rotate-0 scale-100 group-hover:rotate-90'
            }`}
          />
          <div className="absolute inset-0 rounded-xl bg-gradient-to-b from-white/20 to-transparent opacity-40 pointer-events-none" />
        </div>
      </div>

      <span
        className={`relative z-10 font-['Outfit',sans-serif] text-[10px] uppercase tracking-[0.2px] leading-none transition-all duration-300 mt-[26px] ${
          isActive
            ? 'font-bold text-white'
            : 'font-semibold text-[#bdb8c0] group-hover:text-white'
        }`}
      >
        {label}
      </span>
      
      {isActive && (
        <div
          aria-hidden="true"
          className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-1.5 h-[3px] rounded-sm bg-[#c2ef4e] shadow-[0_0_8px_rgba(194,239,78,0.6)] animate-[fadeScale_0.3s_ease-out_0.1s_both]"
        />
      )}
    </button>
  )
})

interface FooterNavProps {
  active: string
  onChange: (key: string) => void
}

export default memo(function FooterNav({ active, onChange }: FooterNavProps) {
  const handleClick = useCallback((key: string) => onChange(key), [onChange])

  return (
    <nav
      aria-label="Footer Navigation"
      className="shrink-0 relative z-40 bg-[#150f23]/95 backdrop-blur-2xl backdrop-saturate-150 border-t border-[#362d59]"
    >
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-t from-[#150f23] via-[#1f1633]/60 to-transparent" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#79628c]/20 to-transparent" />
      </div>

      <div
        role="tablist"
        aria-orientation="horizontal"
        className="relative z-10 flex items-stretch w-full max-w-lg mx-auto pb-[env(safe-area-inset-bottom)]"
      >
        {FOOTER_NAV_ITEMS.map((item) => {
          const isActive = item.key === active
          
          if (item.key === 'post') {
            return (
              <PostNavButton
                key={item.key}
                item={item}
                isActive={isActive}
                onClick={handleClick}
              />
            )
          }

          return (
            <StandardNavButton
              key={item.key}
              item={item}
              isActive={isActive}
              onClick={handleClick}
            />
          )
        })}
      </div>
    </nav>
  )
})