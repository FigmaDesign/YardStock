import type React from 'react'
import {
  Megaphone,
  Mic2,
  /* BookOpen,
  Landmark,
  LayoutGrid,
  CalendarDays,
  BarChart3,
  Settings, */
  Home,
  Users,
  PlusSquare,
  SlidersHorizontal,
  Bookmark,
  Radio,
  Library,
  UserCircle,
  TrendingUp,
  /* GraduationCap,
  FileText,
  Award,
  MapPin,
  Building2,
  Search,
  Filter,
  Star,
  Eye,
  MessageSquare,
  Calendar,
  Clock,
  Ticket,
  PieChart,
  LineChart,
  Activity,
  Wrench,
  Bell,
  Shield,
  User, */
  PlaySquare,
} from 'lucide-react'

export const COMMON_SUBTABS = [
  { label: 'Home',   Icon: Home },
  { label: 'Leads',  Icon: Users },
  { label: 'Post',   Icon: PlusSquare },
  { label: 'Manage', Icon: SlidersHorizontal },
  { label: 'Saved',  Icon: Bookmark },
]

const PODCAST_SUBTABS = [
  { label: 'Episodes',  Icon: Radio },
  { label: 'Series',    Icon: Library },
  { label: 'Speakers',  Icon: UserCircle },
  { label: 'Trending',  Icon: TrendingUp },
]

/* const LEARN_SUBTABS = [
  { label: 'Courses',     Icon: GraduationCap },
  { label: 'Articles',    Icon: FileText },
  { label: 'Certifications', Icon: Award },
  { label: 'Saved',       Icon: Bookmark },
]



const CITY_INVENTORY_SUBTABS = [
  { label: 'Localities',  Icon: MapPin },
  { label: 'Projects',    Icon: Building2 },
  { label: 'Search',      Icon: Search },
  { label: 'Filters',     Icon: Filter },
]

const SHOWCASE_SUBTABS = [
  { label: 'Featured',    Icon: Star },
  { label: 'Latest',      Icon: Clock },
  { label: 'Most Viewed', Icon: Eye },
  { label: 'Reviews',     Icon: MessageSquare },
]

const EVENTS_SUBTABS = [
  { label: 'Upcoming',    Icon: Calendar },
  { label: 'Past',        Icon: Clock },
  { label: 'My Events',   Icon: Ticket },
  { label: 'Saved',       Icon: Bookmark },
]

const ANALYTICS_SUBTABS = [
  { label: 'Overview',    Icon: PieChart },
  { label: 'Performance', Icon: LineChart },
  { label: 'Insights',    Icon: Activity },
  { label: 'Reports',     Icon: FileText },
]

const SETTINGS_SUBTABS = [
  { label: 'General',       Icon: Wrench },
  { label: 'Notifications', Icon: Bell },
  { label: 'Privacy',       Icon: Shield },
  { label: 'Account',       Icon: User },
]
 */
export type NavKey =
  | 'activityBoard'
  | 'podcasts'
  | 'learn'
  | 'spotlight'
  | 'cityInventory'
  | 'showcase'
  | 'events'
  | 'analytics'
  | 'settings'

export interface SubTabItem {
  label: string
  Icon: React.ElementType
}

export interface NavItem {
  key: NavKey
  label: string
  Icon: React.ElementType
  hasArrow?: boolean
  subTabs?: SubTabItem[]
}

export const NAV_ITEMS: NavItem[] = [
  { key: 'podcasts',      label: 'RED Expert', Icon: Mic2,         subTabs: PODCAST_SUBTABS },
  { key: 'activityBoard', label: 'Activity Board', Icon: Megaphone },
/*   { key: 'learn',         label: 'Learn',              Icon: BookOpen,     subTabs: LEARN_SUBTABS }, */
  { key: 'spotlight',     label: 'Spotlight',          Icon: PlaySquare },
/*   { key: 'cityInventory', label: 'City Inventory',     Icon: Landmark,     subTabs: CITY_INVENTORY_SUBTABS },
  { key: 'showcase',      label: 'Showcase',           Icon: LayoutGrid,   subTabs: SHOWCASE_SUBTABS },
  { key: 'events',        label: 'Events',             Icon: CalendarDays, subTabs: EVENTS_SUBTABS },
  { key: 'analytics',     label: 'Analytics',          Icon: BarChart3,    subTabs: ANALYTICS_SUBTABS },
  { key: 'settings',      label: 'Settings',           Icon: Settings,     hasArrow: true, subTabs: SETTINGS_SUBTABS }, */
]

