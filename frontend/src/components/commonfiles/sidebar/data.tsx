export type NavKey =
  | 'activityBoard'
  | 'podcasts'
  | 'learn'
  | 'spotlight'
  | 'directory'
  | 'cityInventory'
  | 'showcase'
  | 'events'
  | 'analytics'
  | 'settings'

import type { ReactNode } from 'react'
import type { SubTabItem } from '../TabBar/SubTabBar'

export interface NavItem {
  key: NavKey
  label: string
  Icon: ReactNode
  hasArrow?: boolean
  subTabs?: SubTabItem[]
}

export const NAV_ITEMS: NavItem[] = [
  { key: 'podcasts',      label: 'RED Expert',     Icon: '🎙️' },
  { key: 'activityBoard', label: 'Activity Board', Icon: '📢' },
  { key: 'learn',         label: 'Learn',          Icon: '📖' },
  { key: 'spotlight',     label: 'Spotlight',      Icon: '▶️' },
  { key: 'directory',     label: 'Directory',      Icon: '📇' },
  { key: 'cityInventory', label: 'City Inventory', Icon: '🏛️' },
/*   { key: 'showcase',      label: 'Showcase',       Icon: '🗂️' },
  { key: 'events',        label: 'Events',         Icon: '📅' },
  { key: 'analytics',     label: 'Analytics',      Icon: '📈' },
  { key: 'settings',      label: 'Settings',       Icon: '⚙️', hasArrow: true }, */
]