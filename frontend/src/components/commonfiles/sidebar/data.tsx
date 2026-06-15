import type { SubTabItem } from '../TabBar/SubTabBar' 

import micPurple from './Images/mic.png' 
import activityIcon from './Images/activity.png'
import learnIcon from './Images/learn.png'
import spotlightIcon from './Images/spotlight.png'
import directoryIcon from './Images/directory.png'
import cityIcon from './Images/city.png'

import micWhite from './Images1/mic1.png'
import activityWhite from './Images1/activity1.png'
import learnWhite from './Images1/learn1.png'
import spotlightWhite from './Images1/spotlight1.png'
import directoryWhite from './Images1/directory1.png'
import cityWhite from './Images1/city1.png'

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
  activeIcon?: string 
  hasArrow?: boolean
  subTabs?: SubTabItem[]
}

export const NAV_ITEMS: NavItem[] = [
  { key: 'podcasts',      label: 'RED Expert',     Icon: micPurple,     activeIcon: micWhite },
  { key: 'activityBoard', label: 'Activity Board', Icon: activityIcon,  activeIcon: activityWhite },
  { key: 'learn',         label: 'Learn',          Icon: learnIcon,     activeIcon: learnWhite },
  { key: 'spotlight',     label: 'Spotlight',      Icon: spotlightIcon, activeIcon: spotlightWhite },
  { key: 'directory',     label: 'Directory',      Icon: directoryIcon, activeIcon: directoryWhite },
  { key: 'cityInventory', label: 'City Inventory', Icon: cityIcon,      activeIcon: cityWhite }
]