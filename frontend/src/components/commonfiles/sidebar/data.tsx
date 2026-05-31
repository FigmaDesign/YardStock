import type React from 'react'
import {
  LayoutDashboard,
  Building2,
  Users,
  UserCheck,
  BarChart3,
  TrendingUp,
  CreditCard,
  CalendarDays,
  MapPin,
  Phone,
  Megaphone,
  FileBarChart,
  Settings,
  PieChart,
  Lightbulb,
  Home,
  Briefcase,
  Trees,
  LandPlot,
  UserCircle,
  ShoppingBag,
  LineChart,
  Filter,
  RefreshCcw,
  DollarSign,
  CalendarCheck,
  CalendarX,
  CalendarRange,
  Flag,
  CheckCircle,
  Clock,
  GitBranch,
  Contact,
  RadioTower,
  Newspaper,
  ShieldCheck,
  Bell,
  Receipt,
  Wrench,
  BarChart2,
  ArrowUpRight,
} from 'lucide-react'

export type NavKey =
  | 'dashboard'
  | 'properties'
  | 'customers'
  | 'agents'
  | 'analytics'
  | 'revenue'
  | 'payments'
  | 'bookings'
  | 'sitevisits'
  | 'crm'
  | 'marketing'
  | 'reports'
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
  {
    key: 'dashboard', label: 'Dashboard', Icon: LayoutDashboard,
    subTabs: [
      { label: 'Overview',  Icon: LayoutDashboard },
      { label: 'Insights',  Icon: Lightbulb },
      { label: 'Trends',    Icon: TrendingUp },
    ],
  },
  {
    key: 'properties', label: 'Properties', Icon: Building2, hasArrow: true,
    subTabs: [
      { label: 'All Properties', Icon: Building2 },
      { label: 'Residential',    Icon: Home },
      { label: 'Commercial',     Icon: Briefcase },
      { label: 'Villa',          Icon: Trees },
      { label: 'Plots',          Icon: LandPlot },
    ],
  },
  {
    key: 'customers', label: 'Customers', Icon: Users, hasArrow: true,
    subTabs: [
      { label: 'All Customers', Icon: Users },
      { label: 'Buyers',        Icon: ShoppingBag },
      { label: 'Sellers',       Icon: UserCircle },
      { label: 'Investors',     Icon: ArrowUpRight },
    ],
  },
  {
    key: 'agents', label: 'Agents', Icon: UserCheck,
    subTabs: [
      { label: 'All Agents', Icon: UserCheck },
      { label: 'Active',     Icon: CheckCircle },
      { label: 'Pending',    Icon: Clock },
    ],
  },
  {
    key: 'analytics', label: 'Sales Analytics', Icon: BarChart3,
    subTabs: [
      { label: 'Performance',   Icon: BarChart3 },
      { label: 'Funnel',        Icon: Filter },
      { label: 'Conversion',    Icon: RefreshCcw },
      { label: 'Revenue Split', Icon: PieChart },
    ],
  },
  {
    key: 'revenue', label: 'Revenue', Icon: TrendingUp,
    subTabs: [
      { label: 'Summary',     Icon: DollarSign },
      { label: 'Monthly',     Icon: BarChart2 },
      { label: 'Projections', Icon: LineChart },
    ],
  },
  {
    key: 'payments', label: 'Payments', Icon: CreditCard,
    subTabs: [
      { label: 'Received', Icon: CheckCircle },
      { label: 'Pending',  Icon: Clock },
      { label: 'Overdue',  Icon: Flag },
    ],
  },
  {
    key: 'bookings', label: 'Bookings', Icon: CalendarDays,
    subTabs: [
      { label: 'Upcoming',  Icon: CalendarRange },
      { label: 'Completed', Icon: CalendarCheck },
      { label: 'Cancelled', Icon: CalendarX },
    ],
  },
  {
    key: 'sitevisits', label: 'Site Visits', Icon: MapPin,
    subTabs: [
      { label: 'Scheduled', Icon: CalendarRange },
      { label: 'Completed', Icon: CheckCircle },
      { label: 'Missed',    Icon: CalendarX },
    ],
  },
  {
    key: 'crm', label: 'CRM', Icon: Phone,
    subTabs: [
      { label: 'Pipeline',   Icon: GitBranch },
      { label: 'Follow-ups', Icon: Phone },
      { label: 'Contacts',   Icon: Contact },
    ],
  },
  {
    key: 'marketing', label: 'Marketing', Icon: Megaphone,
    subTabs: [
      { label: 'Campaigns', Icon: RadioTower },
      { label: 'Leads',     Icon: Users },
      { label: 'Social',    Icon: Newspaper },
    ],
  },
  {
    key: 'reports', label: 'Reports', Icon: FileBarChart,
    subTabs: [
      { label: 'Weekly',  Icon: BarChart2 },
      { label: 'Monthly', Icon: BarChart3 },
      { label: 'Custom',  Icon: Wrench },
    ],
  },
  {
    key: 'settings', label: 'Settings', Icon: Settings, hasArrow: true,
    subTabs: [
      { label: 'General',       Icon: Settings },
      { label: 'Security',      Icon: ShieldCheck },
      { label: 'Notifications', Icon: Bell },
      { label: 'Billing',       Icon: Receipt },
    ],
  },
]
