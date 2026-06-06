export type PodcastCategory = 'Market Analysis' | 'Development' | 'Investment' | 'Policy' | 'PropTech'

export interface Episode {
  id: string
  title: string
  speakerName: string
  company: string
  duration: string
  listenCount: string
  date: string
  imageUrl: string
  category: PodcastCategory
  featured?: boolean
  trending?: boolean
  description: string
}

export interface Series {
  id: string
  title: string
  description: string
  episodeCount: number
  totalDuration: string
  coverUrl: string
  category: PodcastCategory
  featured?: boolean
  trending?: boolean
}

export interface Speaker {
  id: string
  name: string
  role: string
  company: string
  location: string
  totalListens: string
  rating: number
  avatarUrl: string
}

export const EPISODES: Episode[] = [
  {
    id: 'e1',
    title: 'The Future of Luxury Real Estate in Tier 1 Cities',
    speakerName: 'Sarah Jenkins',
    company: 'Prime Developers',
    duration: '45:20',
    listenCount: '12.5k',
    date: '2 days ago',
    imageUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1600',
    category: 'Market Analysis',
    featured: true,
    description: 'An in-depth look at how changing demographics and new wealth creation are reshaping the luxury real estate market across major metropolitan areas.',
  },
  {
    id: 'e2',
    title: 'Sustainable Building Materials: ROI vs Cost',
    speakerName: 'Michael Chen',
    company: 'EcoBuild Architecture',
    duration: '32:15',
    listenCount: '8.2k',
    date: '5 days ago',
    imageUrl: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=800',
    category: 'Development',
    trending: true,
    description: 'Analyzing the long-term financial benefits of sustainable construction versus the immediate capital expenditure.',
  },
  {
    id: 'e3',
    title: 'Navigating RERA Updates 2024',
    speakerName: 'Adv. Rajesh Kumar',
    company: 'Legal Edge Partners',
    duration: '55:10',
    listenCount: '15.1k',
    date: '1 week ago',
    imageUrl: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=800',
    category: 'Policy',
    trending: true,
    description: 'A comprehensive breakdown of the latest RERA amendments and their implications for builders and buyers.',
  },
  {
    id: 'e4',
    title: 'AI in Property Valuation Models',
    speakerName: 'Dr. Emily AI',
    company: 'PropTech Innovations',
    duration: '28:45',
    listenCount: '5.4k',
    date: '1 week ago',
    imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800',
    category: 'PropTech',
    description: 'How machine learning algorithms are outperforming traditional comparative market analysis in predicting property values.',
  },
  {
    id: 'e5',
    title: 'Commercial Real Estate Post-Pandemic',
    speakerName: 'David Thompson',
    company: 'Global CRE',
    duration: '41:30',
    listenCount: '10.2k',
    date: '2 weeks ago',
    imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800',
    category: 'Market Analysis',
    trending: true,
    description: 'The surprising resilience of office spaces and the boom in logistics warehousing.',
  },
]

export const SERIES: Series[] = [
  {
    id: 'ser1',
    title: 'The Master Builder Chronicles',
    description: 'Join industry titans as they share their journey from small-time contractors to real estate magnates. Learn the hard-fought lessons of scaling construction businesses, managing massive projects, and surviving market crashes.',
    episodeCount: 12,
    totalDuration: '10h 45m',
    coverUrl: 'https://images.unsplash.com/photo-1541888087513-56db1ea1d07c?auto=format&fit=crop&q=80&w=1600',
    category: 'Development',
    featured: true,
  },
  {
    id: 'ser2',
    title: 'PropTech Revolution 2024',
    description: 'A deep dive into the technologies disrupting how we buy, sell, and manage real estate.',
    episodeCount: 8,
    totalDuration: '6h 20m',
    coverUrl: 'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=800',
    category: 'PropTech',
    trending: true,
  },
  {
    id: 'ser3',
    title: 'Smart Investment Strategies',
    description: 'Expert advice on building a robust real estate portfolio in volatile markets.',
    episodeCount: 15,
    totalDuration: '12h 30m',
    coverUrl: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=800',
    category: 'Investment',
    trending: true,
  },
  {
    id: 'ser4',
    title: 'Legal Landscapes',
    description: 'Understanding property laws, zoning regulations, and compliance requirements.',
    episodeCount: 6,
    totalDuration: '5h 15m',
    coverUrl: 'https://images.unsplash.com/photo-1505664173622-df756b149b5c?auto=format&fit=crop&q=80&w=800',
    category: 'Policy',
  },
]

export const SPEAKERS: Speaker[] = [
  {
    id: 's1',
    name: 'Sarah Jenkins',
    role: 'Managing Director',
    company: 'Prime Developers',
    location: 'Mumbai, India',
    totalListens: '145k',
    rating: 4.9,
    avatarUrl: 'https://i.pravatar.cc/150?u=sarah',
  },
  {
    id: 's2',
    name: 'Michael Chen',
    role: 'Chief Architect',
    company: 'EcoBuild Architecture',
    location: 'Bengaluru, India',
    totalListens: '89k',
    rating: 4.8,
    avatarUrl: 'https://i.pravatar.cc/150?u=michael',
  },
  {
    id: 's3',
    name: 'Vikram Mehta',
    role: 'CEO',
    company: 'Mehta Realty Group',
    location: 'Delhi NCR, India',
    totalListens: '210k',
    rating: 5.0,
    avatarUrl: 'https://i.pravatar.cc/150?u=vikram',
  },
  {
    id: 's4',
    name: 'Adv. Rajesh Kumar',
    role: 'Senior Partner',
    company: 'Legal Edge Partners',
    location: 'Pune, India',
    totalListens: '112k',
    rating: 4.7,
    avatarUrl: 'https://i.pravatar.cc/150?u=rajesh',
  },
  {
    id: 's5',
    name: 'Dr. Emily AI',
    role: 'Head of Data Science',
    company: 'PropTech Innovations',
    location: 'Hyderabad, India',
    totalListens: '65k',
    rating: 4.6,
    avatarUrl: 'https://i.pravatar.cc/150?u=emily',
  },
  {
    id: 's6',
    name: 'David Thompson',
    role: 'Global Head of CRE',
    company: 'Global CRE',
    location: 'Chennai, India',
    totalListens: '178k',
    rating: 4.9,
    avatarUrl: 'https://i.pravatar.cc/150?u=david',
  },
]
