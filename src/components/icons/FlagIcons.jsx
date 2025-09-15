export function USFlag({ className = "w-5 h-5", ...props }) {
  return (
    <svg className={className} viewBox="0 0 32 32" {...props}>
      <rect width="32" height="32" fill="#B22234"/>
      <path d="M0,2.5H32v2H0ZM0,6.5H32v2H0ZM0,10.5H32v2H0ZM0,14.5H32v2H0ZM0,18.5H32v2H0ZM0,22.5H32v2H0ZM0,26.5H32v2H0Z" fill="white"/>
      <rect width="12.8" height="17" fill="#3C3B6E"/>
      <g fill="white">
        <circle cx="2" cy="2" r="0.8"/>
        <circle cx="6" cy="2" r="0.8"/>
        <circle cx="10" cy="2" r="0.8"/>
        <circle cx="4" cy="4" r="0.8"/>
        <circle cx="8" cy="4" r="0.8"/>
        <circle cx="12" cy="4" r="0.8"/>
        <circle cx="2" cy="6" r="0.8"/>
        <circle cx="6" cy="6" r="0.8"/>
        <circle cx="10" cy="6" r="0.8"/>
        <circle cx="4" cy="8" r="0.8"/>
        <circle cx="8" cy="8" r="0.8"/>
        <circle cx="12" cy="8" r="0.8"/>
        <circle cx="2" cy="10" r="0.8"/>
        <circle cx="6" cy="10" r="0.8"/>
        <circle cx="10" cy="10" r="0.8"/>
        <circle cx="4" cy="12" r="0.8"/>
        <circle cx="8" cy="12" r="0.8"/>
        <circle cx="12" cy="12" r="0.8"/>
        <circle cx="2" cy="14" r="0.8"/>
        <circle cx="6" cy="14" r="0.8"/>
        <circle cx="10" cy="14" r="0.8"/>
        <circle cx="4" cy="16" r="0.8"/>
        <circle cx="8" cy="16" r="0.8"/>
      </g>
    </svg>
  )
}

export function BrazilFlag({ className = "w-5 h-5", ...props }) {
  return (
    <svg className={className} viewBox="0 0 32 32" {...props}>
      <rect width="32" height="32" fill="#009739"/>
      <path d="M16,4 L28,16 L16,28 L4,16 Z" fill="#FEDD00"/>
      <circle cx="16" cy="16" r="6" fill="#012169"/>
      <path d="M10,16 Q16,12 22,16 Q16,20 10,16" fill="#FEDD00"/>
      <text x="16" y="18" textAnchor="middle" fontSize="3" fill="#009739" fontFamily="serif">
        ORDEM E PROGRESSO
      </text>
    </svg>
  )
}