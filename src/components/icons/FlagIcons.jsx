import { US, BR } from 'country-flag-icons/react/3x2'

// Re-export with our naming convention and default styling
export function USFlag({ className = "w-5 h-5", ...props }) {
  return <US className={className} {...props} />
}

export function BrazilFlag({ className = "w-5 h-5", ...props }) {
  return <BR className={className} {...props} />
}