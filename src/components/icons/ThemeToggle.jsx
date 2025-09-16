import { Sun, Moon } from 'lucide-react'

export function ThemeToggle({ theme, onToggle, className = "" }) {
  return (
    <button
      onClick={onToggle}
      className={`relative flex items-center bg-muted rounded-full p-1 w-20 h-10 transition-all duration-300 hover:bg-muted/80 ${className}`}
      aria-label={theme === 'light' ? 'Switch to dark theme' : 'Switch to light theme'}
      title={theme === 'light' ? 'Switch to dark theme' : 'Switch to light theme'}
    >
      {/* Background track */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-100 to-slate-200"></div>
      
      {/* Sliding indicator */}
      <div className={`absolute w-8 h-8 bg-white rounded-full shadow-lg transition-transform duration-300 z-10 flex items-center justify-center ${
        theme === 'light' ? 'transform translate-x-0' : 'transform translate-x-10'
      }`}>
        {theme === 'light' ? (
          <Sun className="w-5 h-5 text-orange-500" />
        ) : (
          <Moon className="w-5 h-5 text-slate-700" />
        )}
      </div>
      
      {/* Icon indicators on track */}
      <div className="relative z-0 flex items-center justify-between w-full px-1">
        <div className={`flex items-center justify-center w-8 h-8 rounded-full transition-opacity duration-300 ${
          theme === 'light' ? 'opacity-100' : 'opacity-40'
        }`}>
          <Sun className="w-4 h-4 text-orange-500" />
        </div>
        <div className={`flex items-center justify-center w-8 h-8 rounded-full transition-opacity duration-300 ${
          theme === 'dark' ? 'opacity-100' : 'opacity-40'
        }`}>
          <Moon className="w-4 h-4 text-slate-700" />
        </div>
      </div>
    </button>
  )
}