export interface CityInventoryTab {
  key: string
  label: string
}

export const CITY_INVENTORY_TABS: CityInventoryTab[] = [
  { key: 'overview', label: 'Overview' },
  { key: 'properties', label: 'Properties' },
  { key: 'stats', label: 'Stats' },
]

export default {} as const
