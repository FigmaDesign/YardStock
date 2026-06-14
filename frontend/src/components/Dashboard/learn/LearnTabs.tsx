import { LEARN_TABS } from './data'

interface LearnTabsProps {
  active: string
  onChange: (key: string) => void
}

export default function LearnTabs({ active, onChange }: LearnTabsProps) {
  return (
    <div className="p-3 bg-white border-b">
      <div className="flex gap-2">
        {LEARN_TABS.map((t) => (
          <button
            key={t.key}
            onClick={() => onChange(t.key)}
            className={`px-3 py-1 rounded ${active === t.key ? 'bg-violet-600 text-white' : 'bg-gray-100'}`}
          >
            {t.label}
          </button>
        ))}
      </div>
    </div>
  )
}
