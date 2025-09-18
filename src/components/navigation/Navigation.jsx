import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Menu, X, ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { WhatsAppIcon } from '@/components/icons/WhatsAppIcon'
import { USFlag, BrazilFlag } from '@/components/icons/FlagIcons'
import { ThemeToggle } from '@/components/icons/ThemeToggle'
import { useLanguage } from '@/contexts/LanguageContext'
import { useTheme } from '@/contexts/ThemeContext'
import { useTranslations } from '@/data/translations'
import { getCorrespondingSlug } from '@/data/blogPostsBilingual'
const logoHorizontal = '/AulaDeInglesEmCasaLogo.webp'

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()
  const { toggleLanguage, isPortuguese, language } = useLanguage()
  const { theme, toggleTheme } = useTheme()
  const t = useTranslations()

  const handleLanguageToggle = () => {
    const currentPath = location.pathname
    const newLanguage = language === 'pt' ? 'en' : 'pt'
    
    // Toggle the language first
    toggleLanguage()
    
    // Check if we're on a blog post page and navigate to translated version
    const blogPostMatch = currentPath.match(/^\/blog\/(.+)$/)
    if (blogPostMatch) {
      const currentSlug = blogPostMatch[1]
      const newSlug = getCorrespondingSlug(currentSlug, language, newLanguage)
      
      if (newSlug) {
        // Navigate to the corresponding blog post in the other language
        navigate(`/blog/${newSlug}`)
      }
    }
  }

  const isActive = (path) => location.pathname === path
  const isServicesActive = () => location.pathname.startsWith('/servicos')

  return (
    <nav className="bg-background border-b sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center py-2.5">
            <div className="bg-gray-200 rounded-lg shadow-2xl px-3 py-[10px] hover:bg-gray-300 hover:shadow-3xl transition-all duration-300 hover:scale-105">
              <img 
                src={logoHorizontal} 
                alt="Aula de Inglês em Casa" 
                className="w-[300px] h-[60px]"
              />
            </div>
          </Link>

          <div className="flex items-center gap-4">
            {/* Theme Toggle */}
            <div className="hidden md:flex items-center">
              <ThemeToggle theme={theme} onToggle={toggleTheme} />
            </div>

            {/* Language Toggle */}
            <div className="hidden md:flex items-center">
              <button
                onClick={handleLanguageToggle}
                className="relative flex items-center bg-muted rounded-full p-1 w-20 h-10 transition-all duration-300 hover:bg-muted/60 hover:shadow-lg hover:scale-105 active:scale-95"
                title={isPortuguese ? "Switch to English" : "Mudar para Português"}
              >
                {/* Background track */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-100 to-green-100"></div>
                
                {/* Sliding indicator */}
                <div className={`absolute w-8 h-8 bg-white rounded-full shadow-lg transition-all duration-300 z-10 flex items-center justify-center hover:shadow-xl hover:bg-gray-50 ${
                  isPortuguese ? 'transform translate-x-0' : 'transform translate-x-10'
                }`}>
                  {isPortuguese ? (
                    <BrazilFlag className="w-5 h-3" />
                  ) : (
                    <USFlag className="w-5 h-3" />
                  )}
                </div>
                
                {/* Flag indicators on track */}
                <div className="relative z-0 flex items-center justify-between w-full px-1">
                  <div className={`flex items-center justify-center w-8 h-8 rounded-full transition-opacity duration-300 ${
                    isPortuguese ? 'opacity-100' : 'opacity-40'
                  }`}>
                    <BrazilFlag className="w-4 h-2.5" />
                  </div>
                  <div className={`flex items-center justify-center w-8 h-8 rounded-full transition-opacity duration-300 ${
                    !isPortuguese ? 'opacity-100' : 'opacity-40'
                  }`}>
                    <USFlag className="w-4 h-2.5" />
                  </div>
                </div>
              </button>
            </div>

            {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`hover:text-primary transition-colors ${isActive('/') ? 'text-primary font-medium' : 'text-muted-foreground'}`}
            >
              {t.nav.home}
            </Link>
            
            {/* Services Dropdown */}
            <div 
              className="relative" 
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button
                className={`flex items-center gap-1 hover:text-primary transition-colors ${isServicesActive() ? 'text-primary font-medium' : 'text-muted-foreground'}`}
              >
                {t.nav.services}
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              <div className={`absolute top-full left-0 mt-2 w-64 bg-background border rounded-lg shadow-lg py-2 z-50 transition-all duration-200 ${
                isServicesOpen 
                  ? 'opacity-100 transform translate-y-0 visible' 
                  : 'opacity-0 transform -translate-y-2 invisible'
              }`}>
                  <Link
                    to="/servicos/aula-de-ingles-online"
                    className="block px-4 py-3 text-sm hover:bg-muted transition-colors"
                    onClick={() => setIsServicesOpen(false)}
                  >
                    <div className="font-medium">{t.nav.online}</div>
                    <div className="text-muted-foreground text-xs">
                      {isPortuguese ? "Flexibilidade total no conforto de casa" : "Total flexibility from home comfort"}
                    </div>
                  </Link>
                  <Link
                    to="/servicos/aula-de-ingles-individual"
                    className="block px-4 py-3 text-sm hover:bg-muted transition-colors"
                    onClick={() => setIsServicesOpen(false)}
                  >
                    <div className="font-medium">{t.nav.individual}</div>
                    <div className="text-muted-foreground text-xs">
                      {isPortuguese ? "Atenção 100% personalizada" : "100% personalized attention"}
                    </div>
                  </Link>
                  <Link
                    to="/servicos/aula-de-ingles-em-grupo"
                    className="block px-4 py-3 text-sm hover:bg-muted transition-colors"
                    onClick={() => setIsServicesOpen(false)}
                  >
                    <div className="font-medium">{t.nav.group}</div>
                    <div className="text-muted-foreground text-xs">
                      {isPortuguese ? "Aprenda com outros alunos" : "Learn with other students"}
                    </div>
                  </Link>
                  <Link
                    to="/servicos/aula-de-conversacao-de-ingles"
                    className="block px-4 py-3 text-sm hover:bg-muted transition-colors"
                    onClick={() => setIsServicesOpen(false)}
                  >
                    <div className="font-medium">{t.nav.conversation}</div>
                    <div className="text-muted-foreground text-xs">
                      {isPortuguese ? "Desenvolva fluência e confiança" : "Develop fluency and confidence"}
                    </div>
                  </Link>
                </div>
            </div>
            
            <Link 
              to="/sobre" 
              className={`hover:text-primary transition-colors ${isActive('/sobre') ? 'text-primary font-medium' : 'text-muted-foreground'}`}
            >
              {t.nav.about}
            </Link>
            
            <Link 
              to="/blog" 
              className={`hover:text-primary transition-colors ${isActive('/blog') || location.pathname.startsWith('/blog') ? 'text-primary font-medium' : 'text-muted-foreground'}`}
            >
              {t.nav.blog}
            </Link>
            
            <Link 
              to="/contato" 
              className={`hover:text-primary transition-colors ${isActive('/contato') ? 'text-primary font-medium' : 'text-muted-foreground'}`}
            >
              {t.nav.contact}
            </Link>
            
            <a
              href="https://wa.me/5567996161199"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="sm"
                className="bg-green-500 hover:bg-green-600 text-white ml-4 px-2"
              >
                <WhatsAppIcon className="w-4 h-4" />
                {t.actions.whatsapp}
              </Button>
            </a>
          </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="text-muted-foreground"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-2">
              <Link 
                to="/" 
                className={`px-2 py-1 rounded hover:bg-muted transition-colors ${isActive('/') ? 'text-primary font-medium' : 'text-muted-foreground'}`}
                onClick={() => setIsOpen(false)}
              >
                {t.nav.home}
              </Link>
              
              {/* Mobile Services Section */}
              <div className="px-2 py-1">
                <div className="text-sm font-medium text-muted-foreground mb-2">{t.nav.services}</div>
                <div className="pl-4 space-y-1">
                  <Link
                    to="/servicos/aula-de-ingles-online"
                    className="block py-1 text-sm hover:text-primary transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {t.nav.online}
                  </Link>
                  <Link
                    to="/servicos/aula-de-ingles-individual"
                    className="block py-1 text-sm hover:text-primary transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {t.nav.individual}
                  </Link>
                  <Link
                    to="/servicos/aula-de-ingles-em-grupo"
                    className="block py-1 text-sm hover:text-primary transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {t.nav.group}
                  </Link>
                  <Link
                    to="/servicos/aula-de-conversacao-de-ingles"
                    className="block py-1 text-sm hover:text-primary transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {t.nav.conversation}
                  </Link>
                </div>
              </div>
              
              <Link 
                to="/sobre" 
                className={`px-2 py-1 rounded hover:bg-muted transition-colors ${isActive('/sobre') ? 'text-primary font-medium' : 'text-muted-foreground'}`}
                onClick={() => setIsOpen(false)}
              >
                {t.nav.about}
              </Link>
              
              <Link 
                to="/blog" 
                className={`px-2 py-1 rounded hover:bg-muted transition-colors ${isActive('/blog') || location.pathname.startsWith('/blog') ? 'text-primary font-medium' : 'text-muted-foreground'}`}
                onClick={() => setIsOpen(false)}
              >
                {t.nav.blog}
              </Link>
              
              <Link 
                to="/contato" 
                className={`px-2 py-1 rounded hover:bg-muted transition-colors ${isActive('/contato') ? 'text-primary font-medium' : 'text-muted-foreground'}`}
                onClick={() => setIsOpen(false)}
              >
                {t.nav.contact}
              </Link>
              
              {/* Mobile Theme Toggle */}
              <div className="px-2 py-1 mt-4">
                <div className="text-sm font-medium text-muted-foreground mb-2">{t.nav.theme}</div>
                <ThemeToggle theme={theme} onToggle={toggleTheme} />
              </div>
              
              {/* Mobile Language Toggle */}
              <div className="px-2 py-1 mt-2">
                <div className="text-sm font-medium text-muted-foreground mb-2">{t.nav.language}</div>
                <div 
                  onClick={handleLanguageToggle}
                  className="relative inline-flex items-center w-20 h-10 bg-gradient-to-r from-blue-100 to-green-100 rounded-full cursor-pointer transition-all duration-300 ease-in-out hover:shadow-lg hover:scale-105 active:scale-95"
                >
                  <div 
                    className={`absolute w-8 h-8 bg-white rounded-full shadow-lg transition-all duration-300 ease-in-out hover:shadow-xl hover:bg-gray-50 ${
                      language === 'pt' ? 'translate-x-1' : 'translate-x-11'
                    }`}
                  />
                  <div className="flex items-center justify-between w-full px-2 relative z-10">
                    <BrazilFlag 
                      className={`w-5 h-5 transition-opacity duration-300 ${
                        language === 'pt' ? 'opacity-100' : 'opacity-40'
                      }`} 
                    />
                    <USFlag 
                      className={`w-5 h-5 transition-opacity duration-300 ${
                        language === 'en' ? 'opacity-100' : 'opacity-40'
                      }`} 
                    />
                  </div>
                </div>
              </div>
              
              <a
                href="https://wa.me/5567996161199"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="sm"
                  className="bg-green-500 hover:bg-green-600 text-white mt-4 w-full px-2"
                  onClick={() => setIsOpen(false)}
                >
                  <WhatsAppIcon className="w-4 h-4" />
                  WhatsApp
                </Button>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
