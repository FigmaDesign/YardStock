import type React from 'react'
import PrimaryTabBar, { type PrimaryTabItem } from './PrimaryTabBar'
import SubTabBar, { type SubTabItem } from './SubTabBar'

export type { PrimaryTabItem, SubTabItem }

export interface TabItem {
  key: string
  label: string
  Icon: React.ElementType
  subTabs?: SubTabItem[]
}

interface TabBarProps {
  tabs: TabItem[]
  active: string
  activeSubTab: string
  onChange: (key: string) => void
  onSubTabChange: (sub: string) => void
}

export default function TabBar({ tabs, active, activeSubTab, onChange, onSubTabChange }: TabBarProps) {
  const activeItem = tabs.find(t => t.key === active)
  const subTabs = activeItem?.subTabs ?? []

  function handleMainChange(key: string) {
    const item = tabs.find(t => t.key === key)
    onChange(key)
    if (item?.subTabs?.length) {
      onSubTabChange(item.subTabs[0].label)
    }
  }

  return (
    <div style={{ background: '#041e5c', flexShrink: 0 }}>
      <PrimaryTabBar
        tabs={tabs}
        active={active}
        onChange={handleMainChange}
      />
      <SubTabBar
        subTabs={subTabs}
        active={activeSubTab}
        onChange={onSubTabChange}
      />
    </div>
  )
}
