import React from 'react'
import DashboardIcon from '@mui/icons-material/Dashboard'
import ApartmentIcon from '@mui/icons-material/Apartment'
import PeopleIcon from '@mui/icons-material/People'
import PersonIcon from '@mui/icons-material/Person'
import BarChartIcon from '@mui/icons-material/BarChart'
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee'
import CreditCardIcon from '@mui/icons-material/CreditCard'
import EventNoteIcon from '@mui/icons-material/EventNote'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact'
import CampaignIcon from '@mui/icons-material/Campaign'
import AssessmentIcon from '@mui/icons-material/Assessment'
import SettingsIcon from '@mui/icons-material/Settings'

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

export interface NavItem {
  key: NavKey
  label: string
  Icon: React.ElementType
  hasArrow?: boolean
  subTabs?: string[]
}

export const NAV_ITEMS: NavItem[] = [
  { key: 'dashboard',  label: 'Dashboard',      Icon: DashboardIcon, subTabs: ['Overview', 'Insights', 'Trends'] },
  { key: 'properties', label: 'Properties',      Icon: ApartmentIcon, hasArrow: true, subTabs: ['All Properties', 'Residential', 'Commercial', 'Villa', 'Plots'] },
  { key: 'customers',  label: 'Customers',       Icon: PeopleIcon, hasArrow: true, subTabs: ['All Customers', 'Buyers', 'Sellers', 'Investors'] },
  { key: 'agents',     label: 'Agents',          Icon: PersonIcon, subTabs: ['All Agents', 'Active', 'Pending'] },
  { key: 'analytics',  label: 'Sales Analytics', Icon: BarChartIcon, subTabs: ['Performance', 'Funnel', 'Conversion', 'Revenue Split'] },
  { key: 'revenue',    label: 'Revenue',         Icon: CurrencyRupeeIcon, subTabs: ['Summary', 'Monthly', 'Projections'] },
  { key: 'payments',   label: 'Payments',        Icon: CreditCardIcon, subTabs: ['Received', 'Pending', 'Overdue'] },
  { key: 'bookings',   label: 'Bookings',        Icon: EventNoteIcon, subTabs: ['Upcoming', 'Completed', 'Cancelled'] },
  { key: 'sitevisits', label: 'Site Visits',     Icon: LocationOnIcon, subTabs: ['Scheduled', 'Completed', 'Missed'] },
  { key: 'crm',        label: 'CRM',             Icon: ConnectWithoutContactIcon, subTabs: ['Pipeline', 'Follow-ups', 'Contacts'] },
  { key: 'marketing',  label: 'Marketing',       Icon: CampaignIcon, subTabs: ['Campaigns', 'Leads', 'Social'] },
  { key: 'reports',    label: 'Reports',         Icon: AssessmentIcon, subTabs: ['Weekly', 'Monthly', 'Custom'] },
  { key: 'settings',   label: 'Settings',        Icon: SettingsIcon, hasArrow: true, subTabs: ['General', 'Security', 'Notifications', 'Billing'] },
]
