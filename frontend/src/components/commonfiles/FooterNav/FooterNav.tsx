import { memo, useCallback, type ElementType } from 'react'
import { Home, Users, PlusSquare, SlidersHorizontal, Bookmark } from 'lucide-react'

export interface FooterNavItem {
  key: string
  label: string
  Icon: ElementType
}

export const FOOTER_NAV_ITEMS: FooterNavItem[] = [
  { key: 'home',   label: 'Home',   Icon: Home },
  { key: 'leads',  label: 'Leads',  Icon: Users },
  { key: 'post',   label: 'Post',   Icon: PlusSquare },
  { key: 'manage', label: 'Manage', Icon: SlidersHorizontal },
  { key: 'saved',  label: 'Saved',  Icon: Bookmark },
]

interface FooterNavButtonProps {
  item: FooterNavItem
  isActive: boolean
  onClick: (key: string) => void
}

const FooterNavButton = memo(function FooterNavButton({ item, isActive, onClick }: FooterNavButtonProps) {
  const { key, label, Icon } = item

  return (
    <button
      type="button"
      aria-label={label}
      aria-current={isActive ? 'page' : undefined}
      onClick={() => onClick(key)}
      className={`
        footer-nav__btn
        relative flex flex-col items-center justify-center gap-[3px]
        flex-1 min-w-0 py-2.5 px-1
        border-none outline-none cursor-pointer
        bg-transparent
        transition-all duration-300 ease-out
        active:scale-[0.92] active:opacity-80
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#10b981]/50 focus-visible:ring-inset
        motion-reduce:transition-none motion-reduce:transform-none
        [-webkit-tap-highlight-color:transparent]
        group
      `}
    >
      {/* Active glow backdrop */}
      {isActive && (
        <div
          aria-hidden="true"
          className="absolute inset-x-2 inset-y-1 rounded-xl bg-gradient-to-b from-white/20 to-white/5 border border-white/20 shadow-[0_0_20px_rgba(16,185,129,0.15),inset_0_1px_0_rgba(255,255,255,0.2)] animate-[fadeScale_0.3s_ease-out]"
        />
      )}

      {/* Icon */}
      <div className="relative z-10">
        <Icon
          size={20}
          strokeWidth={isActive ? 2.2 : 1.6}
          aria-hidden="true"
          className={`transition-all duration-300 motion-reduce:transition-none ${
            isActive
              ? 'text-[#10b981] drop-shadow-[0_0_8px_rgba(16,185,129,0.4)] -translate-y-0.5'
              : 'text-[#8b95a5] group-hover:text-[#c0c8d4] translate-y-0'
          }`}
        />
      </div>

      {/* Label */}
      <span
        className={`relative z-10 text-[0.6rem] leading-none tracking-wide transition-all duration-300 motion-reduce:transition-none ${
          isActive
            ? 'font-bold text-white -translate-y-0.5'
            : 'font-medium text-[#8b95a5] group-hover:text-[#c0c8d4] translate-y-0'
        }`}
      >
        {label}
      </span>

      {/* Active indicator dot */}
      {isActive && (
        <div
          aria-hidden="true"
          className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#10b981] shadow-[0_0_6px_rgba(16,185,129,0.6)] animate-[fadeScale_0.3s_ease-out_0.1s_both]"
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
      className="
        footer-nav
        shrink-0 relative z-40
        border-t border-white/[0.08]
      "
    >
      {/* Glassmorphism background layers */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        {/* Base dark layer */}
        <div className="absolute inset-0 bg-[#0a1628]/80" />
        {/* Glass blur layer */}
        <div className="absolute inset-0 backdrop-blur-2xl backdrop-saturate-150" />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050d1a]/60 via-[#0d1f3c]/40 to-[#162a52]/20" />
        {/* Top shine edge */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
        {/* Subtle inner glow */}
        <div className="absolute top-0 left-[10%] right-[10%] h-8 bg-gradient-to-b from-white/[0.03] to-transparent rounded-b-full" />
      </div>

      {/* Navigation items */}
      <div
        role="tablist"
        aria-orientation="horizontal"
        className="relative z-10 flex items-stretch w-full max-w-lg mx-auto"
      >
        {FOOTER_NAV_ITEMS.map((item) => (
          <FooterNavButton
            key={item.key}
            item={item}
            isActive={item.key === active}
            onClick={handleClick}
          />
        ))}
      </div>
    </nav>
  )
})
