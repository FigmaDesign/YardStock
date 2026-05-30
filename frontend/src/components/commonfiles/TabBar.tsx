import { useRef } from 'react'
import type { ElementType } from 'react'

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

export default function TabBar({ tabs, active, activeSubTab, onChange, onSubTabChange }: TabBarProps) {
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
    <div className="shrink-0" style={{ background: '#0d1f3c' }}>
      <div
        ref={mainRef}
        className="flex overflow-x-auto px-2 pt-2.5 pb-0 gap-1.5"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {tabs.map(({ key, label, Icon }) => {
          const isActive = key === active
          return (
            <button
              key={key}
              onClick={e => handleMainClick(key, e.currentTarget)}
              className="flex flex-col items-center gap-2 px-3.5 pt-3 pb-3.5 shrink-0 rounded-t-2xl min-w-[72px] relative transition-all"
              style={
                isActive
                  ? { background: 'linear-gradient(135deg, #22c55e 0%, #0ea5e9 100%)' }
                  : { background: 'rgba(255,255,255,0.06)' }
              }
            >
              <Icon sx={{ fontSize: 22, color: 'white' }} />
              <span className="text-[0.62rem] font-semibold text-white leading-tight text-center whitespace-pre-wrap max-w-[68px]">
                {label.replace(' ', '\n')}
              </span>
              {isActive && (
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-[3px] bg-[#4ade80] rounded-t-full" />
              )}
            </button>
          )
        })}
      </div>

      {subTabs.length > 0 && (
        <div
          ref={subRef}
          className="flex overflow-x-auto px-2 py-2 gap-1.5"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', background: 'rgba(255,255,255,0.04)' }}
        >
          {subTabs.map(sub => {
            const isActive = sub === activeSubTab
            return (
              <button
                key={sub}
                onClick={e => handleSubClick(sub, e.currentTarget)}
                className="flex items-center justify-center px-4 py-2 shrink-0 rounded-xl text-[0.72rem] font-semibold relative transition-all whitespace-nowrap"
                style={
                  isActive
                    ? { background: 'linear-gradient(135deg, #22c55e 0%, #0ea5e9 100%)', color: 'white' }
                    : { background: 'rgba(255,255,255,0.07)', color: 'rgba(255,255,255,0.75)' }
                }
              >
                {sub}
                {isActive && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-5 h-[2.5px] bg-[#4ade80] rounded-t-full" />
                )}
              </button>
            )
          })}
        </div>
      )}
    </div>
  )
}