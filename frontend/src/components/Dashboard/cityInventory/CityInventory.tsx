import { useState } from 'react'
import CityInventoryTabs from './CityInventoryTabs'

export default function CityInventory() {
  const [active, setActive] = useState('overview')
  return (
    <section className="p-6">
      <CityInventoryTabs active={active} onChange={setActive} />
      <div className="mt-4">City Inventory placeholder for `{active}`</div>
    </section>
  )
}
