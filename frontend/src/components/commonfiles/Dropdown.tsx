import { useState, useRef, useEffect, useId, useCallback, useMemo, type KeyboardEvent } from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

export interface DropdownOption {
  value: string
  label: string
}

interface DropdownProps {
  options: DropdownOption[]
  value: string
  onChange: (value: string) => void
  placeholder?: string
  leftIcon?: React.ReactNode
  size?: 'sm' | 'md'
  className?: string
  id?: string
}

export default function Dropdown({
  options,
  value,
  onChange,
  placeholder = 'Select...',
  leftIcon,
  size = 'md',
  className = '',
  id,
}: DropdownProps) {
  const [open, setOpen] = useState(false)
  const [focusedIndex, setFocusedIndex] = useState(-1)
  const containerRef = useRef<HTMLDivElement>(null)
  
  const uid = useId()
  const listId = `${uid}-list`
  
  const selected = useMemo(
    () => options.find((o) => o.value === value),
    [options, value]
  )
  const isSm = size === 'sm'

  useEffect(() => {
    function handler(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    if (open) {
      document.addEventListener('mousedown', handler, { capture: true, passive: true })
    }
    return () => document.removeEventListener('mousedown', handler, { capture: true })
  }, [open])

  useEffect(() => {
    if (open) {
      setFocusedIndex(options.findIndex((o) => o.value === value))
    } else {
      setFocusedIndex(-1)
    }
  }, [open, options, value])

  const handleKeyDown = useCallback(
    (e: KeyboardEvent<HTMLButtonElement>) => {
      if (!open) {
        if (e.key === 'Enter' || e.key === ' ' || e.key === 'ArrowDown' || e.key === 'ArrowUp') {
          e.preventDefault()
          setOpen(true)
        }
        return
      }
      
      switch (e.key) {
        case 'Escape':
          e.preventDefault()
          setOpen(false)
          break
        case 'ArrowDown':
          e.preventDefault()
          setFocusedIndex((i) => Math.min(i + 1, options.length - 1))
          break
        case 'ArrowUp':
          e.preventDefault()
          setFocusedIndex((i) => Math.max(i - 1, 0))
          break
        case 'Home':
          e.preventDefault()
          setFocusedIndex(0)
          break
        case 'End':
          e.preventDefault()
          setFocusedIndex(options.length - 1)
          break
        case 'Enter':
        case ' ':
          e.preventDefault()
          if (focusedIndex >= 0 && focusedIndex < options.length) {
            onChange(options[focusedIndex].value)
            setOpen(false)
          }
          break
        case 'Tab':
          setOpen(false)
          break
      }
    },
    [open, options, focusedIndex, onChange]
  )

  const activeDescendant = open && focusedIndex >= 0 ? `${listId}-option-${focusedIndex}` : undefined

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      <button
        type="button"
        id={id}
        role="combobox"
        aria-expanded={open}
        aria-haspopup="listbox"
        aria-controls={listId}
        aria-activedescendant={activeDescendant}
        aria-label={placeholder}
        onClick={() => setOpen((v) => !v)}
        onKeyDown={handleKeyDown}
        className={`flex items-center gap-1.5 bg-white border rounded-[8px] cursor-pointer outline-none transition-all duration-200 w-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6B21A8] focus-visible:border-[#7C3AED] motion-reduce:transition-none ${
          open ? 'border-[#7C3AED] ring-2 ring-[#7C3AED]/15' : 'border-[#e0e3eb] hover:border-[#7C3AED]'
        } ${
          isSm ? 'px-2 py-[7px] text-[0.75rem]' : 'px-3 py-[8px] text-[0.8rem]'
        } font-semibold text-[#1A1A2E]`}
      >
        {leftIcon && (
          <span aria-hidden="true" className="text-[#6b7280] shrink-0 transition-colors duration-200">
            {leftIcon}
          </span>
        )}
        <span className="flex-1 text-left truncate min-w-0">
          {selected ? (
            selected.label
          ) : (
            <span className="text-[#6b7280] font-normal">{placeholder}</span>
          )}
        </span>
        <ExpandMoreIcon
          aria-hidden="true"
          sx={{ fontSize: isSm ? 14 : 16 }}
          className={`text-[#6b7280] shrink-0 transition-transform duration-200 motion-reduce:transition-none ${
            open ? 'rotate-180' : ''
          }`}
        />
      </button>

      {open && (
        <ul
          id={listId}
          role="listbox"
          aria-label={placeholder}
          className="absolute z-50 mt-1.5 w-full min-w-[110px] bg-white border border-[#e0e3eb] rounded-[8px] shadow-lg overflow-y-auto max-h-72 py-1 origin-top animate-in fade-in zoom-in-95 duration-200 ease-out focus:outline-none [scrollbar-width:thin] [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-thumb]:bg-gray-200 [&::-webkit-scrollbar-thumb]:rounded-full"
        >
          {options.map((opt, i) => {
            const isSelected = opt.value === value
            const isFocused = focusedIndex === i
            
            return (
              <li
                key={opt.value}
                id={`${listId}-option-${i}`}
                role="option"
                aria-selected={isSelected ? 'true' : 'false'}
                onMouseDown={(e) => e.preventDefault()} 
                onClick={() => {
                  onChange(opt.value)
                  setOpen(false)
                }}
                onMouseEnter={() => setFocusedIndex(i)}
                className={`px-3 py-2 text-[0.8rem] cursor-pointer transition-colors duration-150 select-none motion-reduce:transition-none ${
                  isSelected
                    ? 'bg-[#7C3AED]/10 text-[#6B21A8] font-semibold'
                    : 'text-[#374151]'
                } ${isFocused && !isSelected ? 'bg-[#f9fafb]' : ''}`}
              >
                {opt.label}
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}