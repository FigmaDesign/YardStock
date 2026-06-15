export interface FilterTab {
  key: string;
  label: string;
  color?: string;
  count?: number;
}

const TAB_COLOR = '#6B7280'; 

export const FILTER_TABS: FilterTab[] = [
  { key: 'all', label: 'All', color: TAB_COLOR },
  { key: 'real-estate', label: 'Real Estate', color: TAB_COLOR },
  { key: 'construction', label: 'Construction', color: TAB_COLOR },
  { key: 'business', label: 'Business', color: TAB_COLOR },
  { key: 'marketing', label: 'Marketing', color: TAB_COLOR },
  { key: 'finance', label: 'Finance', color: TAB_COLOR },
  { key: 'technology', label: 'Technology', color: TAB_COLOR },
  { key: 'design', label: 'Design', color: TAB_COLOR },
];

export interface SpotlightVideo {
  id: string
  title: string
  views: string
  duration: string
  author: string
  authorInitial: string
  verified: boolean
  gradient: string
}

export const SPOTLIGHT_VIDEOS: SpotlightVideo[] = [
  {
    id: 'sv-1',
    title: 'Modern Living Redefined 🔥',
    views: '12.4K',
    duration: '0:32',
    author: 'Prestige Group',
    authorInitial: 'P',
    verified: true,
    gradient: 'from-[#1e3a8a] to-[#0f172a]',
  },
  {
    id: 'sv-2',
    title: 'Interior Goals You\'ll Love 😍',
    views: '9.8K',
    duration: '0:45',
    author: 'Design Studio X',
    authorInitial: 'D',
    verified: true,
    gradient: 'from-[#78350f] to-[#451a03]',
  },
  {
    id: 'sv-3',
    title: 'Top Projects in Bangalore 📍',
    views: '18.6K',
    duration: '0:28',
    author: 'Yardstack Insights',
    authorInitial: 'Y',
    verified: true,
    gradient: 'from-[#4c1d95] to-[#2e1065]',
  },
  {
    id: 'sv-4',
    title: 'The Future of Real Estate 🚀',
    views: '7.2K',
    duration: '0:36',
    author: 'Real Estate Club',
    authorInitial: 'R',
    verified: true,
    gradient: 'from-[#0369a1] to-[#0c4a6e]',
  },
  {
    id: 'sv-5',
    title: 'Marketing That Actually Works 🎯',
    views: '15.3K',
    duration: '1:02',
    author: 'RED Experts',
    authorInitial: 'R',
    verified: true,
    gradient: 'from-[#831843] to-[#4c0519]',
  },
  {
    id: 'sv-6',
    title: 'Construction Timelapse 🏗️',
    views: '6.7K',
    duration: '0:29',
    author: 'BuildSmart',
    authorInitial: 'B',
    verified: true,
    gradient: 'from-[#b45309] to-[#78350f]',
  },
  {
    id: 'sv-7',
    title: 'Space Planning Done Right ✅',
    views: '5.1K',
    duration: '0:31',
    author: 'Architects Hub',
    authorInitial: 'A',
    verified: true,
    gradient: 'from-[#065f46] to-[#022c22]',
  },
  {
    id: 'sv-8',
    title: 'Bangalore Real Estate Update 📈',
    views: '11.2K',
    duration: '0:47',
    author: 'Market Pulse',
    authorInitial: 'M',
    verified: true,
    gradient: 'from-[#374151] to-[#111827]',
  },
  {
    id: 'sv-9',
    title: 'Sales Tips That Close Deals 🤝',
    views: '8.9K',
    duration: '0:44',
    author: 'Sales Leaders',
    authorInitial: 'S',
    verified: true,
    gradient: 'from-[#1e40af] to-[#172554]',
  },
]
