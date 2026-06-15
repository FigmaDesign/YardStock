import type { SubTabItem } from '../TabBar/SubTabBar'
import micPurple from './Images/mic1.png' 
import activityIcon from './Images/activity.png'
import learnIcon from './Images/learn.png'
import spotlightIcon from './Images/spotlight.png'
import directoryIcon from './Images/directory.png'
import cityIcon from './Images/city.png'

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

export interface NavItem {
  key: NavKey
  label: string
  Icon: string
  hasArrow?: boolean
  subTabs?: SubTabItem[]
}

export const NAV_ITEMS: NavItem[] = [
  { key: 'podcasts',      label: 'RED Expert',     Icon: micPurple },
  { key: 'activityBoard', label: 'Activity Board', Icon: activityIcon },
  { key: 'learn',         label: 'Learn',          Icon: learnIcon },
  { key: 'spotlight',     label: 'Spotlight',      Icon: spotlightIcon },
  { key: 'directory',     label: 'Directory',      Icon: directoryIcon },
  { key: 'cityInventory', label: 'City Inventory', Icon: cityIcon }

/*   { key: 'activityBoard', label: 'Activity Board', Icon: '📢' },
  { key: 'learn',         label: 'Learn',          Icon: '📖' },
  { key: 'spotlight',     label: 'Spotlight',      Icon: '▶️' },
  { key: 'directory',     label: 'Directory',      Icon: '📇' },
  { key: 'cityInventory', label: 'City Inventory', Icon: '🏛️' } */
]