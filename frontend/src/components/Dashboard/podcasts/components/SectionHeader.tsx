import { memo } from 'react'

interface SectionHeaderProps {
  title: string
  subtitle?: string
}

const SectionHeader = memo(function SectionHeader({ title, subtitle }: SectionHeaderProps) {
  return (
    <div className="flex flex-col">
      <h3 className="text-xl md:text-2xl font-extrabold text-[var(--ys-ink)] flex items-center gap-2">
        {title}
        <span className="w-2 h-2 rounded-full bg-[var(--ys-primary)] inline-block ml-1" />
      </h3>
      {subtitle && (
        <p className="text-[var(--ys-body-mid)] text-sm font-medium mt-1">
          {subtitle}
        </p>
      )}
    </div>
  )
})

export default SectionHeader