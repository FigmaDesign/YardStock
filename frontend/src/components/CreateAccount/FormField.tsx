import type { ReactNode } from 'react'

interface FormFieldProps {
  label: string
  id: string
  type?: string
  placeholder: string
  value: string
  onChange: (v: string) => void
  icon: ReactNode
  rightIcon?: ReactNode
  error?: string
  required?: boolean
  isMobile?: boolean
}

export default function FormField({
  label,
  id,
  type = 'text',
  placeholder,
  value,
  onChange,
  icon,
  rightIcon,
  error,
  required,
  isMobile = false,
}: FormFieldProps) {
  const errorId = `${id}-error`

  return (
    <div className="group">
      <label 
        htmlFor={id} 
        className={`block font-semibold text-[var(--ys-ink)] mb-1 transition-colors duration-300 group-focus-within:text-[var(--ys-ink-mid)] ${
          isMobile ? 'text-[0.7rem]' : 'text-[0.78rem]'
        }`}
      >
        {label}
        {required && (
          <span className="text-red-600 ml-0.5" aria-hidden="true">*</span>
        )}
        {required && <span className="sr-only">Required</span>}
      </label>
      
      <div 
        className={`flex items-center border bg-[var(--ys-canvas)] transition-all duration-300 rounded-[8px] motion-reduce:transition-none ${
          error 
            ? 'border-red-500 ring-1 ring-red-100' 
            : 'border-[var(--ys-mute)] hover:border-[var(--ys-body-mid)] focus-within:!border-[var(--ys-ink)] focus-within:ring-1 focus-within:ring-[var(--ys-ink)]/20'
        }`}
      >
        <span 
          aria-hidden="true" 
          className={`text-[var(--ys-body-mid)] shrink-0 transition-colors duration-300 group-focus-within:text-[var(--ys-ink-mid)] motion-reduce:transition-none ${
            isMobile ? 'pl-3' : 'pl-3.5'
          }`}
        >
          {icon}
        </span>
        
        <input
          id={id} 
          type={type} 
          value={value} 
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder} 
          required={required}
          aria-invalid={!!error}
          aria-describedby={error ? errorId : undefined}
          className={`flex-1 text-[var(--ys-ink)] placeholder-[var(--ys-body-mid)] bg-transparent outline-none w-full ${
            isMobile ? 'px-2.5 py-2 text-[0.75rem]' : 'px-3 py-2 text-[0.85rem]'
          }`}
        />
        
        {rightIcon && (
          <span className={`shrink-0 flex items-center justify-center ${isMobile ? 'pr-3' : 'pr-3.5'}`}>
            {rightIcon}
          </span>
        )}
      </div>
      
      {error && (
        <p id={errorId} className="text-red-600 font-medium text-[0.72rem] mt-1" role="alert">
          {error}
        </p>
      )}
    </div>
  )
}