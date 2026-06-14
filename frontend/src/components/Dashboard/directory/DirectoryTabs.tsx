import { DIRECTORY_TABS } from './data'

interface DirectoryTabsProps {
  active: string
  onChange: (key: string) => void
}

export default function DirectoryTabs({ active, onChange }: DirectoryTabsProps) {
  return (
    <div className="p-3 bg-white border-b">
      <div className="flex gap-2">
        {DIRECTORY_TABS.map((t) => (
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
