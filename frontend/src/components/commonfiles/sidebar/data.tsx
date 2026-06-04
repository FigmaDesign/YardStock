import type React from 'react'
import {
  Megaphone,
  Mic2,
  BookOpen,
  Film,
  Landmark,
  LayoutGrid,
  CalendarDays,
  BarChart3,
  Settings,
  Home,
  Users,
  PlusSquare,
  SlidersHorizontal,
  Bookmark,
  Radio,
  Library,
  UserCircle,
  TrendingUp,
  GraduationCap,
  FileText,
  Award,
  Play,
  Clapperboard,
  Heart,
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
  User,
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

const LEARN_SUBTABS = [
  { label: 'Courses',     Icon: GraduationCap },
  { label: 'Articles',    Icon: FileText },
  { label: 'Certifications', Icon: Award },
  { label: 'Saved',       Icon: Bookmark },
]

const VIDEO_VAULT_SUBTABS = [
  { label: 'All Videos',  Icon: Play },
  { label: 'Reels',       Icon: Clapperboard },
  { label: 'Favourites',  Icon: Heart },
  { label: 'Trending',    Icon: TrendingUp },
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

export type NavKey =
  | 'announcements'
  | 'podcasts'
  | 'learn'
  | 'videoVault'
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
  { key: 'podcasts',      label: 'RED Expert Conversations', Icon: Mic2,         subTabs: PODCAST_SUBTABS },
  { key: 'announcements', label: 'Announcement Board', Icon: Megaphone },
  { key: 'learn',         label: 'Learn',              Icon: BookOpen,     subTabs: LEARN_SUBTABS },
  { key: 'videoVault',    label: 'Video Vault',        Icon: Film,         subTabs: VIDEO_VAULT_SUBTABS },
  { key: 'cityInventory', label: 'City Inventory',     Icon: Landmark,     subTabs: CITY_INVENTORY_SUBTABS },
  { key: 'showcase',      label: 'Showcase',           Icon: LayoutGrid,   subTabs: SHOWCASE_SUBTABS },
  { key: 'events',        label: 'Events',             Icon: CalendarDays, subTabs: EVENTS_SUBTABS },
  { key: 'analytics',     label: 'Analytics',          Icon: BarChart3,    subTabs: ANALYTICS_SUBTABS },
  { key: 'settings',      label: 'Settings',           Icon: Settings,     hasArrow: true, subTabs: SETTINGS_SUBTABS },
]

