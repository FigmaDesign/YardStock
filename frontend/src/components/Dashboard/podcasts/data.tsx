// ── Podcast Data ──────────────────────────────────────────────────
// All static data for the Podcasts section lives here.

export interface Episode {
  id: string
  title: string
  speaker: string
  role: string
  duration: string
  plays: string
  timeAgo: string
  thumbnailColor: string
  thumbnailLabel: string
  thumbnailSubLabel?: string
}

export interface Speaker {
  id: string
  name: string
  role: string
  bio: string
  sessions: number
  badge?: string
  avatarInitials: string
  avatarColor: string
}

export interface TrendingTopic {
  id: string
  label: string
  icon: string
  color: string
  bgColor: string
}

export interface Series {
  id: string
  title: string
  episodeCount: number
  totalDuration: string
  description: string
  color: string
  bgGradient: string
}

// ── Featured Content ─────────────────────────────────────────────

export const FEATURED_EPISODE = {
  title: 'Future of Real Estate in India 2025',
  speaker: 'Rajesh Sharma',
  role: 'Founder, Prime Builders',
  duration: '34:15',
  plays: '2.1K Plays',
  badge: 'Featured Episode',
}

export const FEATURED_TRENDING = {
  title: 'Top Real Estate Trends in India 2025',
  description: 'Market shifts, investment hotspots and opportunities you shouldn\'t miss.',
  speaker: 'Rajesh Sharma',
  role: 'Founder, Prime Builders',
  duration: '28:45',
  plays: '2.6K Plays',
  badge: 'Trending Now',
}

export const FEATURED_SPEAKER = {
  name: 'Rajesh Sharma',
  role: 'Founder, Prime Builders',
  bio: 'Visionary leader with 25+ years of experience in real estate development.',
  sessionLabel: 'Keynote Session',
  duration: '45:30',
  totalSpeakers: '22+ Top Speakers',
  badge: 'Featured Speaker',
}

// ── Episodes ─────────────────────────────────────────────────────

export const EPISODES: Episode[] = [
  {
    id: 'ep-1',
    title: 'How Builders Can Scale Their Business in Tier 2 Cities',
    speaker: 'Ankit Verma',
    role: 'Builder & Investor',
    duration: '28:47',
    plays: '1.8K Plays',
    timeAgo: '2 hours ago',
    thumbnailColor: '#1d4ed8',
    thumbnailLabel: 'REAL ESTATE',
    thumbnailSubLabel: 'INSIGHTS',
  },
  {
    id: 'ep-2',
    title: 'Real Estate Market Trends – Q2 2025',
    speaker: 'Neha Reddy',
    role: 'Market Analyst',
    duration: '26:12',
    plays: '1.4K Plays',
    timeAgo: '1 day ago',
    thumbnailColor: '#16a34a',
    thumbnailLabel: 'MARKET',
    thumbnailSubLabel: 'TRENDS 2025',
  },
  {
    id: 'ep-3',
    title: 'Challenges & Opportunities for Builders in 2025',
    speaker: 'Sandeep Kumar',
    role: 'CEO, Sri Builders',
    duration: '31:05',
    plays: '980 Plays',
    timeAgo: '2 days ago',
    thumbnailColor: '#d97706',
    thumbnailLabel: 'BUILDERS',
    thumbnailSubLabel: 'TALK',
  },
  {
    id: 'ep-4',
    title: 'Legal Aspects Every Builder Must Know',
    speaker: 'Adv. Priya Nair',
    role: 'Real Estate Lawyer',
    duration: '22:30',
    plays: '760 Plays',
    timeAgo: '3 days ago',
    thumbnailColor: '#7c3aed',
    thumbnailLabel: 'LAND',
    thumbnailSubLabel: '& LEGAL TALKS',
  },
  {
    id: 'ep-5',
    title: 'Smart City Projects: What Builders Need to Know',
    speaker: 'Vikram Patel',
    role: 'Urban Planner',
    duration: '25:10',
    plays: '620 Plays',
    timeAgo: '4 days ago',
    thumbnailColor: '#0891b2',
    thumbnailLabel: 'SMART',
    thumbnailSubLabel: 'CITIES',
  },
  {
    id: 'ep-6',
    title: 'Financing Strategies for New Real Estate Developers',
    speaker: 'Meera Joshi',
    role: 'Financial Advisor',
    duration: '33:20',
    plays: '540 Plays',
    timeAgo: '5 days ago',
    thumbnailColor: '#dc2626',
    thumbnailLabel: 'FINANCE',
    thumbnailSubLabel: 'STRATEGIES',
  },
]

// ── Trending Episodes ────────────────────────────────────────────

export const TRENDING_EPISODES: Episode[] = [
  {
    id: 'tr-1',
    title: 'Real Estate Market Outlook – H2 2025',
    speaker: 'Neha Reddy',
    role: 'Market Analyst',
    duration: '26:18',
    plays: '1.7K Plays',
    timeAgo: '1 day ago',
    thumbnailColor: '#1d4ed8',
    thumbnailLabel: 'MARKET',
    thumbnailSubLabel: 'OUTLOOK',
  },
  {
    id: 'tr-2',
    title: 'Top 10 Investment Hotspots in India',
    speaker: 'Ankit Verma',
    role: 'Builder & Investor',
    duration: '22:34',
    plays: '1.5K Plays',
    timeAgo: '2 days ago',
    thumbnailColor: '#16a34a',
    thumbnailLabel: 'INVEST',
    thumbnailSubLabel: 'HOTSPOTS',
  },
  {
    id: 'tr-3',
    title: 'Interest Rates & Real Estate – What It Means for You',
    speaker: 'Sandeep Kumar',
    role: 'CEO, Sri Builders',
    duration: '30:12',
    plays: '980 Plays',
    timeAgo: '3 days ago',
    thumbnailColor: '#d97706',
    thumbnailLabel: 'INTEREST',
    thumbnailSubLabel: 'RATES',
  },
  {
    id: 'tr-4',
    title: 'New RERA Updates Every Buyer Should Know',
    speaker: 'Adv. Priya Nair',
    role: 'Real Estate Lawyer',
    duration: '19:45',
    plays: '760 Plays',
    timeAgo: '4 days ago',
    thumbnailColor: '#7c3aed',
    thumbnailLabel: 'RERA',
    thumbnailSubLabel: 'UPDATES',
  },
]

// ── Speakers ─────────────────────────────────────────────────────

export const SPEAKERS: Speaker[] = [
  {
    id: 'sp-1',
    name: 'Neha Reddy',
    role: 'Market Analyst',
    bio: 'Expert in real estate market trends and data-driven insights.',
    sessions: 28,
    badge: 'Top Rated Speaker',
    avatarInitials: 'NR',
    avatarColor: '#1d4ed8',
  },
  {
    id: 'sp-2',
    name: 'Sandeep Kumar',
    role: 'CEO, Sri Builders',
    bio: 'Real estate entrepreneur and strategist with a focus on sustainable growth.',
    sessions: 22,
    avatarInitials: 'SK',
    avatarColor: '#16a34a',
  },
  {
    id: 'sp-3',
    name: 'Adv. Priya Nair',
    role: 'Real Estate Lawyer',
    bio: 'Specializes in real estate laws, compliance and dispute resolution.',
    sessions: 18,
    avatarInitials: 'PN',
    avatarColor: '#7c3aed',
  },
  {
    id: 'sp-4',
    name: 'Ankit Verma',
    role: 'Builder & Investor',
    bio: 'Investor and mentor helping businesses scale in the real estate sector.',
    sessions: 16,
    avatarInitials: 'AV',
    avatarColor: '#d97706',
  },
  {
    id: 'sp-5',
    name: 'Rajesh Sharma',
    role: 'Founder, Prime Builders',
    bio: 'Visionary leader with 25+ years of experience in real estate development.',
    sessions: 14,
    avatarInitials: 'RS',
    avatarColor: '#0f172a',
  },
]

// ── Trending Topics ──────────────────────────────────────────────

export const TRENDING_TOPICS: TrendingTopic[] = [
  { id: 'tt-1', label: 'Market Trends',    icon: '📈', color: '#16a34a', bgColor: '#f0fdf4' },
  { id: 'tt-2', label: 'Investment',        icon: '🏗️', color: '#1d4ed8', bgColor: '#eff6ff' },
  { id: 'tt-3', label: 'Construction',      icon: '🏗️', color: '#d97706', bgColor: '#fffbeb' },
  { id: 'tt-4', label: 'Legal & Policy',    icon: '⚖️', color: '#7c3aed', bgColor: '#f5f3ff' },
  { id: 'tt-5', label: 'Finance',           icon: '💰', color: '#dc2626', bgColor: '#fef2f2' },
]

// ── Series ───────────────────────────────────────────────────────

export const SERIES_LIST: Series[] = [
  {
    id: 'sr-1',
    title: 'Real Estate Masterclass',
    episodeCount: 12,
    totalDuration: '6h 45m',
    description: 'A complete guide to understanding the Indian real estate market from experts.',
    color: '#1d4ed8',
    bgGradient: 'from-blue-500/10 to-blue-600/5',
  },
  {
    id: 'sr-2',
    title: 'Builder\'s Blueprint',
    episodeCount: 8,
    totalDuration: '4h 20m',
    description: 'Strategies and insights for scaling your construction business effectively.',
    color: '#16a34a',
    bgGradient: 'from-green-500/10 to-green-600/5',
  },
  {
    id: 'sr-3',
    title: 'Legal Corner',
    episodeCount: 10,
    totalDuration: '5h 15m',
    description: 'Navigate RERA, property laws, and legal compliance with expert guidance.',
    color: '#7c3aed',
    bgGradient: 'from-violet-500/10 to-violet-600/5',
  },
  {
    id: 'sr-4',
    title: 'Market Pulse Weekly',
    episodeCount: 24,
    totalDuration: '10h 30m',
    description: 'Weekly analysis of market trends, price movements, and investment opportunities.',
    color: '#d97706',
    bgGradient: 'from-amber-500/10 to-amber-600/5',
  },
  {
    id: 'sr-5',
    title: 'City Spotlight',
    episodeCount: 6,
    totalDuration: '3h 10m',
    description: 'Deep dives into specific Indian cities and their real estate potential.',
    color: '#0891b2',
    bgGradient: 'from-cyan-500/10 to-cyan-600/5',
  },
]
