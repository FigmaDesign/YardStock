import { useState } from 'react'
import LearnTabs from './LearnTabs'

export default function Learn() {
  const [active, setActive] = useState('all')
  return (
    <section className="p-6">
      <LearnTabs active={active} onChange={setActive} />
      <div className="mt-4">Learn section placeholder for `{active}`</div>
    </section>
  )
}
