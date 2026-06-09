import thumb1 from './podcasts/thumb_1.png'
import thumb2 from './podcasts/thumb_2.png'
import thumb3 from './podcasts/thumb_3.png'
import thumb4 from './podcasts/thumb_4.png'
import thumb5 from './podcasts/thumb_5.png'
import thumb6 from './podcasts/thumb_6.png'

export interface FilterTab {
  key: string
  label: string
  color?: string
}

export const FILTER_TABS: FilterTab[] = [
  { key: 'all', label: 'All' },
  { key: 'realestate', label: 'Real Estate' },
  { key: 'marketing', label: 'Marketing' },
  { key: 'sales', label: 'Sales' },
  { key: 'finance', label: 'Finance' },
  { key: 'construction', label: 'Construction' },
]

export interface PodcastEpisode {
  id: string
  title: string
  speaker: string
  role: string
  duration: string
  listens: string
  timeAgo: string
  thumbnail: string
  category: string
  verified: boolean
}

export const PODCAST_EPISODES: PodcastEpisode[] = [
  {
    id: 'pe-1',
    title: 'How to Build a Personal Brand That Attracts Clients',
    speaker: 'Karan Malhotra',
    role: 'Brand Strategist',
    duration: '32:45',
    listens: '12.4K listens',
    timeAgo: '2 days ago',
    thumbnail: thumb1,
    category: 'marketing',
    verified: true,
  },
  {
    id: 'pe-2',
    title: 'Top 5 Investment Trends in Bangalore You Should Know',
    speaker: 'Ritika Sharma',
    role: 'Real Estate Advisor',
    duration: '28:10',
    listens: '9.8K listens',
    timeAgo: '3 days ago',
    thumbnail: thumb2,
    category: 'realestate',
    verified: true,
  },
  {
    id: 'pe-3',
    title: 'Closing Deals Faster With This Simple Framework',
    speaker: 'Amit Verma',
    role: 'Sales Coach',
    duration: '25:30',
    listens: '18.2K listens',
    timeAgo: '5 days ago',
    thumbnail: thumb3,
    category: 'sales',
    verified: true,
  },
  {
    id: 'pe-4',
    title: 'Understanding Cash Flow for Real Estate Investors',
    speaker: 'Nikhil Gupta',
    role: 'Finance Expert',
    duration: '29:15',
    listens: '7.6K listens',
    timeAgo: '1 week ago',
    thumbnail: thumb4,
    category: 'finance',
    verified: true,
  },
  {
    id: 'pe-5',
    title: 'Common Construction Mistakes & How to Avoid Them',
    speaker: 'Neha Iyer',
    role: 'Construction Consultant',
    duration: '27:40',
    listens: '15.3K listens',
    timeAgo: '1 week ago',
    thumbnail: thumb5,
    category: 'construction',
    verified: true,
  },
  {
    id: 'pe-6',
    title: 'Legal Checklist Before Buying a Property',
    speaker: 'Rahul Prasad',
    role: 'Real Estate Lawyer',
    duration: '22:18',
    listens: '6.2K listens',
    timeAgo: '1 week ago',
    thumbnail: thumb6,
    category: 'realestate',
    verified: true,
  },
]