export interface DirectoryTab {
  key: string
  label: string
}

export const DIRECTORY_TABS: DirectoryTab[] = [
  { key: 'all', label: 'All' },
  { key: 'agents', label: 'Agents' },
  { key: 'offices', label: 'Offices' },
]

export interface Builder {
  id: string
  name: string
  category: string
  location: string
  verified?: boolean
  logoBg: string
  logoColor: string
  logoText: string
  isFeatured?: boolean
  isRecentlyJoined?: boolean
}

export const BUILDERS: Builder[] = [
  {
    id: 'b-1',
    name: 'Srikara Constructions',
    category: 'Residential - Commercial',
    location: 'Hyderabad',
    verified: true,
    logoBg: '#133E2B',
    logoColor: '#F59E0B',
    logoText: 'SRIKARA',
    isFeatured: true,
  },
  {
    id: 'b-2',
    name: 'Vaishnavi Builders',
    category: 'Residential - Villas',
    location: 'Hyderabad',
    verified: true,
    logoBg: '#1E293B',
    logoColor: '#F59E0B',
    logoText: 'V',
    isFeatured: true,
  },
  {
    id: 'b-3',
    name: 'Prime Builders',
    category: 'Commercial - Infra',
    location: 'Hyderabad',
    verified: true,
    logoBg: '#F8FAFC',
    logoColor: '#3B82F6',
    logoText: 'PRIME',
    isFeatured: true,
  },
  {
    id: 'b-4',
    name: 'Alpha Builders',
    category: 'Residential - Commercial',
    location: 'Hyderabad',
    logoBg: '#0F766E',
    logoColor: '#FFFFFF',
    logoText: 'A',
    isRecentlyJoined: true,
  },
  {
    id: 'b-5',
    name: 'Sumadhura Developers',
    category: 'Residential - Villas',
    location: 'Hyderabad',
    logoBg: '#1E3A8A',
    logoColor: '#FBBF24',
    logoText: 'SUMADHURA',
    isRecentlyJoined: true,
  },
  {
    id: 'b-6',
    name: 'Fortune Infra',
    category: 'Commercial - Industrial',
    location: 'Hyderabad',
    logoBg: '#FFFBEB',
    logoColor: '#F97316',
    logoText: 'F',
    isRecentlyJoined: true,
  },
]

export default {} as const
