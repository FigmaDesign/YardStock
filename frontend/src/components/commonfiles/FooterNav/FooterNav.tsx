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
      aria-label={label}
      aria-current={isActive ? 'page' : undefined}
      onClick={() => onClick(key)}
      className={`
        relative flex flex-col items-center justify-center gap-[3px]
        flex-1 min-w-0 py-2 sm:py-2.5 px-1
        border-none outline-none cursor-pointer bg-transparent
        transition-all duration-300 ease-out
        active:scale-[0.92] active:opacity-80
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ys-primary)]/50 focus-visible:ring-inset
        motion-reduce:transition-none motion-reduce:transform-none
        [-webkit-tap-highlight-color:transparent]
        group
      `}
    >
      {isActive && (
        <div
          aria-hidden="true"
          className="absolute inset-x-2 inset-y-1 rounded-[8px] bg-gradient-to-b from-white/10 to-white/[0.02] border border-white/10 shadow-[0_0_15px_rgba(232,89,12,0.1),inset_0_1px_0_rgba(255,255,255,0.15)] animate-[fadeScale_0.3s_ease-out]"
        />
      )}

      <div className="relative z-10">
        <Icon
          size={20}
          strokeWidth={isActive ? 2.2 : 1.6}
          aria-hidden="true"
          className={`transition-all duration-300 motion-reduce:transition-none ${
            isActive
              ? 'text-[var(--ys-primary)] drop-shadow-[0_0_8px_rgba(232,89,12,0.4)] -translate-y-0.5'
              : 'text-[#8b95a5] group-hover:text-[#c0c8d4] translate-y-0'
          }`}
        />
      </div>

      <span
        className={`relative z-10 text-[0.6rem] leading-none tracking-wide transition-all duration-300 motion-reduce:transition-none ${
          isActive
            ? 'font-bold text-white -translate-y-0.5'
            : 'font-medium text-[#8b95a5] group-hover:text-[#c0c8d4] translate-y-0'
        }`}
      >
        {label}
      </span>

      {isActive && (
        <div
          aria-hidden="true"
          className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-1.5 h-[3px] rounded-sm bg-[var(--ys-primary)] shadow-[0_0_6px_rgba(232,89,12,0.6)] animate-[fadeScale_0.3s_ease-out_0.1s_both]"
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
      aria-label={label}
      aria-current={isActive ? 'page' : undefined}
      onClick={() => onClick(key)}
      className="
        group relative flex flex-col items-center justify-end
        flex-1 min-w-0 py-2 sm:py-2.5 px-1
        border-none outline-none cursor-pointer bg-transparent
        focus-visible:outline-none
        [-webkit-tap-highlight-color:transparent]
      "
    >
      <div className="absolute top-[-16px] left-1/2 -translate-x-1/2 z-20">
        <div className={`
          relative flex items-center justify-center
          w-11 h-11 sm:w-12 sm:h-12 rounded-[8px]
          bg-gradient-to-tr from-[var(--ys-primary)] to-[var(--ys-ink-mid)]
          shadow-[0_4px_16px_rgba(232,89,12,0.3)]
          transition-all duration-300 ease-out
          border border-white/20
          group-active:scale-90
          ${isActive ? 'shadow-[0_0_20px_rgba(232,89,12,0.5)] translate-y-0.5' : 'hover:-translate-y-0.5 hover:shadow-[0_6px_16px_rgba(232,89,12,0.4)]'}
        `}>
          <Icon
            size={22}
            strokeWidth={2.5}
            className={`
              text-white 
              transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]
              ${isActive ? 'rotate-[135deg] scale-110' : 'rotate-0 scale-100 group-hover:rotate-90'}
            `}
          />
          <div className="absolute inset-0 rounded-[8px] bg-gradient-to-b from-white/30 to-transparent opacity-40 pointer-events-none" />
        </div>
      </div>

      <span
        className={`relative z-10 text-[0.6rem] leading-none tracking-wide transition-all duration-300 mt-[22px] sm:mt-[26px] ${
          isActive
            ? 'font-bold text-white'
            : 'font-medium text-[#8b95a5] group-hover:text-[#c0c8d4]'
        }`}
      >
        {label}
      </span>
      
      {isActive && (
        <div
          aria-hidden="true"
          className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-1.5 h-[3px] rounded-sm bg-[var(--ys-primary)] shadow-[0_0_6px_rgba(232,89,12,0.6)] animate-[fadeScale_0.3s_ease-out_0.1s_both]"
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
  const handleClick = useCallback(
    (key: string) => {
      onChange(key)
    },
    [onChange]
  )

  return (
    <nav
      aria-label="Footer Navigation"
      className="shrink-0 relative z-40 bg-[var(--ys-ink)]/90 backdrop-blur-2xl backdrop-saturate-150 border-t border-white/[0.08]"
    >
      <div 
        aria-hidden="true" 
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--ys-ink)]/80 via-[var(--ys-ink-soft)]/40 to-[var(--ys-ink-mid)]/20" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
        <div className="absolute top-0 left-[15%] right-[15%] h-8 bg-gradient-to-b from-white/[0.03] to-transparent" />
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