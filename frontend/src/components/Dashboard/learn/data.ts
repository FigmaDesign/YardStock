export interface LearnTab {
  key: string
  label: string
}

export const LEARN_TABS: LearnTab[] = [
  { key: 'all', label: 'All' },
  { key: 'articles', label: 'Articles' },
  { key: 'videos', label: 'Videos' },
]

export default {} as const
