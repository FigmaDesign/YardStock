import thumb1 from './podcasts/thumb_1.png'
import thumb2 from './podcasts/thumb_2.png'
import thumb3 from './podcasts/thumb_3.png'
import thumb4 from './podcasts/thumb_4.png'
import thumb5 from './podcasts/thumb_5.png'
import thumb6 from './podcasts/thumb_6.png'

export interface TabType {
  key: string;
  label: string;
  color?: string;
  count?: number; 
}

const TAB_COLOR = '#6B7280'; 

export const FILTER_TABS: TabType[] = [
  { key: 'all', label: 'All', color: TAB_COLOR },
  { key: 'interviews', label: 'Interviews', color: TAB_COLOR },
  { key: 'tech', label: 'Technology', color: TAB_COLOR },
  { key: 'business', label: 'Business', color: TAB_COLOR },
  { key: 'news', label: 'News & Politics', color: TAB_COLOR },
  { key: 'education', label: 'Education', color: TAB_COLOR },
  { key: 'comedy', label: 'Comedy', color: TAB_COLOR }, 
  { key: 'true-crime', label: 'True Crime', color: TAB_COLOR },
  { key: 'health', label: 'Health & Fitness', color: TAB_COLOR },
];

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
    category: 'business', 
    verified: true,
  },
  {
    id: 'pe-2',
    title: 'The Future of AI: What to Expect in 2027',
    speaker: 'Ritika Sharma',
    role: 'Tech Analyst',
    duration: '28:10',
    listens: '19.8K listens',
    timeAgo: '3 days ago',
    thumbnail: thumb2,
    category: 'tech',
    verified: true,
  },
  {
    id: 'pe-3',
    title: 'Sit-down with the Founder of NextGen Logistics',
    speaker: 'Amit Verma',
    role: 'Journalist',
    duration: '45:30',
    listens: '8.2K listens',
    timeAgo: '5 days ago',
    thumbnail: thumb3,
    category: 'interviews',
    verified: true,
  },
  {
    id: 'pe-4',
    title: 'Global Market Shifts & Policy Changes This Week',
    speaker: 'Nikhil Gupta',
    role: 'Political Commentator',
    duration: '29:15',
    listens: '7.6K listens',
    timeAgo: '1 week ago',
    thumbnail: thumb4,
    category: 'news',
    verified: false,
  },
  {
    id: 'pe-5',
    title: 'The Psychology of Learning: Retaining Information',
    speaker: 'Neha Iyer',
    role: 'Cognitive Scientist',
    duration: '27:40',
    listens: '15.3K listens',
    timeAgo: '1 week ago',
    thumbnail: thumb5,
    category: 'education',
    verified: true,
  },
  {
    id: 'pe-6',
    title: 'Optimizing Your Circadian Rhythm for Productivity',
    speaker: 'Rahul Prasad',
    role: 'Health Expert',
    duration: '22:18',
    listens: '11.2K listens',
    timeAgo: '1 week ago',
    thumbnail: thumb6,
    category: 'health',
    verified: true,
  },
  {
    id: 'pe-7',
    title: 'The Silicon Valley Startup Heist of 2018',
    speaker: 'Sarah Jenkins',
    role: 'Investigative Reporter',
    duration: '52:10',
    listens: '34.5K listens',
    timeAgo: '2 weeks ago',
    thumbnail: thumb1, 
    category: 'true-crime',
    verified: true,
  },
  {
    id: 'pe-8',
    title: 'Scaling from $1M to $10M ARR',
    speaker: 'David Chen',
    role: 'Venture Capitalist',
    duration: '38:45',
    listens: '22.1K listens',
    timeAgo: '2 weeks ago',
    thumbnail: thumb2, 
    category: 'business',
    verified: true,
  },
  {
    id: 'pe-9',
    title: 'Understanding Quantum Computing Basics',
    speaker: 'Dr. Elena Rostova',
    role: 'Quantum Physicist',
    duration: '41:20',
    listens: '14.9K listens',
    timeAgo: '3 weeks ago',
    thumbnail: thumb3, 
    category: 'tech',
    verified: true,
  },
  {
    id: 'pe-10',
    title: 'Deep Dive: Inside the Mind of a Top CEO',
    speaker: 'Marcus Thorne',
    role: 'Executive Coach',
    duration: '55:00',
    listens: '28.4K listens',
    timeAgo: '1 month ago',
    thumbnail: thumb4, 
    category: 'interviews',
    verified: true,
  }
]