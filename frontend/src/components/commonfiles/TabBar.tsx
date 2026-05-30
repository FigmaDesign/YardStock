import { useRef, type CSSProperties, type ElementType } from 'react'

export interface TabItem {
  key: string
  label: string
  Icon: ElementType
  subTabs?: string[]
}

interface TabBarProps {
  tabs: TabItem[]
  active: string
  activeSubTab: string
  onChange: (key: string) => void
  onSubTabChange: (sub: string) => void
}

const hideScrollbar: CSSProperties = {
  scrollbarWidth: 'none',
  msOverflowStyle: 'none',
}

const activeGradient = 'linear-gradient(135deg, #34d979 0%, #167dff 100%)'

function getMainTabStyle(isActive: boolean): CSSProperties {
  return {
    minHeight: 64,
    minWidth: 96,
    padding: '12px 16px 10px',
    borderTopLeftRadius: isActive ? 40 : 20,
    borderTopRightRadius: isActive ? 40 : 20,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
    WebkitTapHighlightColor: 'transparent',
    background: isActive
      ? activeGradient
      : 'rgba(255, 255, 255, 0.06)',
    border: 'none',
    boxShadow: isActive
      ? '0 0 24px rgba(52, 217, 121, 0.28), 0 12px 24px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.18)'
      : 'inset 0 2px 4px rgba(0, 0, 0, 0.18)',
    transform: isActive ? 'translateY(-8px) scale(1.02)' : 'none',
    opacity: isActive ? 1 : 0.78,
    zIndex: isActive ? 20 : 10,
    marginLeft: isActive ? -2 : 0,
    marginRight: isActive ? -2 : 0,
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  }
}

function getSubTabStyle(isActive: boolean): CSSProperties {
  return {
    minHeight: 44,
    padding: '10px 16px',
    borderRadius: 16,
    WebkitTapHighlightColor: 'transparent',
    background: isActive ? activeGradient : 'rgba(255, 255, 255, 0.04)',
    color: isActive ? '#ffffff' : 'rgba(255, 255, 255, 0.82)',
    border: 'none',
    boxShadow: isActive
      ? '0 0 16px rgba(52, 217, 121, 0.22), inset 0 1px 0 rgba(255, 255, 255, 0.12)'
      : 'inset 0 1px 0 rgba(255, 255, 255, 0.04)',
  }
}

function renderLabel(label: string) {
  return label.split(' ').map((word, i) => (
    <span key={i}>
      {word}
      {i < label.split(' ').length - 1 && <br />}
    </span>
  ))
}

export default function TabBar({
  tabs,
  active,
  activeSubTab,
  onChange,
  onSubTabChange,
}: TabBarProps) {
  const mainRef = useRef<HTMLDivElement>(null)
  const subRef = useRef<HTMLDivElement>(null)

  const activeItem = tabs.find(t => t.key === active)
  const subTabs = activeItem?.subTabs ?? []

  function handleMainClick(key: string, el: HTMLButtonElement | null) {
    const item = tabs.find(t => t.key === key)
    onChange(key)
    if (item?.subTabs?.length) onSubTabChange(item.subTabs[0])
    el?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' })
  }

  function handleSubClick(sub: string, el: HTMLButtonElement | null) {
    onSubTabChange(sub)
    el?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' })
  }

  return (
    <div
      className="shrink-0"
      style={{
        background: '#0d1f3c',
        boxShadow: 'inset 0 -1px 0 rgba(255, 255, 255, 0.04)',
      }}
    >
      {/* Main Tabs - Swiggy-style curved header */}
      <div className="relative">
        <div
          ref={mainRef}
          className="flex gap-0.5 overflow-x-auto px-2 pt-4 pb-2 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden"
          style={hideScrollbar}
        >
          {tabs.map(({ key, label, Icon }, index) => {
            const isActive = key === active
            return (
              <button
                key={key}
                type="button"
                aria-current={isActive ? 'page' : undefined}
                onClick={e => handleMainClick(key, e.currentTarget)}
                className="snap-start relative overflow-hidden"
                style={getMainTabStyle(isActive)}
              >
                {/* Glow effect for active tab */}
                {isActive && (
                  <div
                    className="pointer-events-none absolute inset-0 rounded-[40px_40px_16px_16px]"
                    style={{
                      background: 'radial-gradient(circle at center top, rgba(52,217,121,0.3) 0%, transparent 70%)',
                      transform: 'translateY(-10px)',
                    }}
                  />
                )}

                <div className="relative z-10 flex flex-col items-center gap-1.5">
                  <Icon
                    style={{
                      fontSize: isActive ? 24 : 22,
                      color: isActive ? '#ffffff' : 'rgba(255, 255, 255, 0.88)',
                    }}
                  />
                  <span
                    className={`text-center leading-[1.05rem] ${
                      isActive
                        ? 'text-[13px] font-bold text-white'
                        : 'text-[12px] font-medium text-white/80'
                    }`}
                  >
                    {renderLabel(label)}
                  </span>
                </div>
              </button>
            )
          })}
        </div>
      </div>

      {/* Sub Tabs - Consistent but secondary */}
      {subTabs.length > 0 && (
        <div className="px-2 pb-2.5">
          <div
            ref={subRef}
            className="flex gap-2 overflow-x-auto rounded-[20px] p-1 backdrop-blur-sm snap-x snap-mandatory [&::-webkit-scrollbar]:hidden"
            style={{
              ...hideScrollbar,
              background: 'rgba(255, 255, 255, 0.03)',
            }}
          >
            {subTabs.map(sub => {
              const isActive = sub === activeSubTab
              return (
                <button
                  key={sub}
                  type="button"
                  onClick={e => handleSubClick(sub, e.currentTarget)}
                  className="snap-start whitespace-nowrap text-[12px] font-semibold"
                  style={getSubTabStyle(isActive)}
                >
                  {sub}
                </button>
              )
            })}
          </div>
        </div>
      )}
    </div>
  )
}