import GridViewIcon from '@mui/icons-material/GridView'
import PersonSearchIcon from '@mui/icons-material/PersonSearch'
import SearchIcon from '@mui/icons-material/Search'
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter'
import MenuBookIcon from '@mui/icons-material/MenuBook'

export interface FilterTab {
  key: string
  label: string
  count: number
  Icon: React.ElementType
  color: string
}

export const FILTER_TABS: FilterTab[] = [
  { key: 'all', label: 'All', count: 120, Icon: GridViewIcon, color: '#6B21A8' },
  { key: 'hiring', label: 'Hiring', count: 20, Icon: PersonSearchIcon, color: '#E91E8C' },
  { key: 'lookingFor', label: 'Looking For', count: 50, Icon: SearchIcon, color: '#3B82F6' },
  { key: 'offerings', label: 'Offerings', count: 35, Icon: BusinessCenterIcon, color: '#10B981' },
  { key: 'resources', label: 'Resources', count: 15, Icon: MenuBookIcon, color: '#F59E0B' },
]

export interface ActivityItem {
  id: string
  company: string
  title: string
  tag: string
  tagColor: string
  tagBg: string
  detail: string
  logoText: string
  logoBg: string
  logoColor: string
  verified: boolean
  cardBg?: string
  logoImg?: string
}

export const ACTIVITY_ITEMS: ActivityItem[] = [
  {
    id: 'act-1',
    company: 'ABC Realty',
    title: 'Sales Manager Required',
    tag: 'Sales',
    tagColor: '#E91E8C',
    tagBg: '#FCE7F3',
    detail: '₹8 - 12 LPA',
    logoText: 'ABC\nREALTY',
    logoBg: '#111827',
    logoColor: '#D1D5DB',
    verified: true,
    cardBg: '#FFF5F8',
  },
  {
    id: 'act-2',
    company: 'Prime Builders',
    title: 'Looking for Lead Generation Agency',
    tag: 'Marketing',
    tagColor: '#3B82F6',
    tagBg: '#EFF6FF',
    detail: '₹50,000 / Month',
    logoText: 'PRIME\nBUILDERS',
    logoBg: '#F3F4F6',
    logoColor: '#111827',
    verified: true,
    cardBg: '#F4F8FF',
  },
  {
    id: 'act-3',
    company: 'BuildTech Solutions',
    title: 'Looking for CRM Software',
    tag: 'Technology',
    tagColor: '#3B82F6',
    tagBg: '#EFF6FF',
    detail: '₹30,000 - ₹60,000',
    logoText: '',
    logoBg: '#F3F4F6',
    logoColor: '#111827',
    verified: true,
    cardBg: '#F4F8FF',
    logoImg: 'https://i.pravatar.cc/150?u=bts'
  },
  {
    id: 'act-4',
    company: 'Rahul Marketing Studio',
    title: 'Digital Marketing Services',
    tag: 'Marketing',
    tagColor: '#10B981',
    tagBg: '#D1FAE5',
    detail: 'Starting ₹25,000',
    logoText: '',
    logoBg: '#F3F4F6',
    logoColor: '#111827',
    verified: true,
    cardBg: '#F0FDF4',
    logoImg: 'https://i.pravatar.cc/150?u=rms'
  },
  {
    id: 'act-5',
    company: 'Design Space Studio',
    title: 'Interior Design Services',
    tag: 'Design',
    tagColor: '#10B981',
    tagBg: '#D1FAE5',
    detail: 'Starting ₹40,000',
    logoText: 'DESIGN\nSPACE',
    logoBg: '#F3F4F6',
    logoColor: '#111827',
    verified: true,
    cardBg: '#F0FDF4',
  },
  {
    id: 'act-6',
    company: 'Yardstack Insights',
    title: 'Residential Market Report 2026',
    tag: 'Report',
    tagColor: '#F59E0B',
    tagBg: '#FEF3C7',
    detail: 'Free Download',
    logoText: 'Y',
    logoBg: '#F3F4F6',
    logoColor: '#D946EF',
    verified: true,
    cardBg: '#FFFBEB',
  },
  {
    id: 'act-7',
    company: 'Happy Homes',
    title: 'Architect Required',
    tag: 'Design',
    tagColor: '#E91E8C',
    tagBg: '#FCE7F3',
    detail: '₹6 - 9 LPA',
    logoText: 'HH\nHOMES',
    logoBg: '#F3F4F6',
    logoColor: '#111827',
    verified: true,
    cardBg: '#FFF5F8',
  },
]
