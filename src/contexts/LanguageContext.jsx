import { createContext, useContext, useState, useEffect } from 'react'

const LanguageContext = createContext()

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}

// Helper function to detect browser language
const detectBrowserLanguage = () => {
  if (typeof window === 'undefined') return 'pt' // SSR fallback
  
  // Get the browser's preferred language
  const browserLanguage = navigator.language || navigator.userLanguage
  
  // Check if the browser language starts with 'en' (English variants)
  if (browserLanguage.toLowerCase().startsWith('en')) {
    return 'en'
  }
  
  // For all other languages (including pt, pt-BR, etc.), default to Portuguese
  return 'pt'
}

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    // Priority: 1. localStorage saved preference, 2. browser language, 3. Portuguese fallback
    const savedLanguage = localStorage.getItem('language')
    if (savedLanguage) {
      return savedLanguage
    }
    
    // If no saved preference, detect from browser
    return detectBrowserLanguage()
  })

  const toggleLanguage = () => {
    const newLanguage = language === 'pt' ? 'en' : 'pt'
    setLanguage(newLanguage)
    localStorage.setItem('language', newLanguage)
  }

  useEffect(() => {
    // Update document language attribute for accessibility
    document.documentElement.lang = language === 'pt' ? 'pt-BR' : 'en-US'
    
    // Save the current language to localStorage if it's not already there
    const savedLanguage = localStorage.getItem('language')
    if (!savedLanguage) {
      localStorage.setItem('language', language)
    }
  }, [language])

  const value = {
    language,
    setLanguage,
    toggleLanguage,
    isPortuguese: language === 'pt',
    isEnglish: language === 'en'
  }

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}