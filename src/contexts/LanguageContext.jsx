import { createContext, useContext, useState, useEffect } from 'react'

const LanguageContext = createContext()

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    // Check localStorage for saved preference, default to Portuguese
    return localStorage.getItem('language') || 'pt'
  })

  const toggleLanguage = () => {
    const newLanguage = language === 'pt' ? 'en' : 'pt'
    setLanguage(newLanguage)
    localStorage.setItem('language', newLanguage)
  }

  useEffect(() => {
    // Update document language attribute for accessibility
    document.documentElement.lang = language === 'pt' ? 'pt-BR' : 'en-US'
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