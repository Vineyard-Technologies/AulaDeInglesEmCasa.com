import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { WhatsAppIcon } from '@/components/icons/WhatsAppIcon'
const logoHorizontal = '/AulaDeInglesEmCasaLogo.webp'

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const location = useLocation()

  const isActive = (path) => location.pathname === path
  const isServicesActive = () => location.pathname.startsWith('/servicos')

  return (
    <nav className="bg-background border-b sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center py-2.5">
            <div className="bg-gray-200 rounded-lg shadow-2xl px-3 py-[10px]">
              <img 
                src={logoHorizontal} 
                alt="Aula de Inglês em Casa" 
                className="w-[300px] h-[60px]"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`hover:text-primary transition-colors ${isActive('/') ? 'text-primary font-medium' : 'text-muted-foreground'}`}
            >
              Início
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
                Serviços
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              <div className={`absolute top-full left-0 mt-2 w-64 bg-background border rounded-lg shadow-lg py-2 z-50 transition-all duration-200 ${
                isServicesOpen 
                  ? 'opacity-100 transform translate-y-0 visible' 
                  : 'opacity-0 transform -translate-y-2 invisible'
              }`}>
                  <Link
                    to="/servicos/aula-online"
                    className="block px-4 py-3 text-sm hover:bg-muted transition-colors"
                    onClick={() => setIsServicesOpen(false)}
                  >
                    <div className="font-medium">Aula Online</div>
                    <div className="text-muted-foreground text-xs">Flexibilidade total no conforto de casa</div>
                  </Link>
                  <Link
                    to="/servicos/aula-individual"
                    className="block px-4 py-3 text-sm hover:bg-muted transition-colors"
                    onClick={() => setIsServicesOpen(false)}
                  >
                    <div className="font-medium">Aula Individual</div>
                    <div className="text-muted-foreground text-xs">Atenção 100% personalizada</div>
                  </Link>
                  <Link
                    to="/servicos/aula-em-grupo"
                    className="block px-4 py-3 text-sm hover:bg-muted transition-colors"
                    onClick={() => setIsServicesOpen(false)}
                  >
                    <div className="font-medium">Aula em Grupo</div>
                    <div className="text-muted-foreground text-xs">Aprenda com outros alunos</div>
                  </Link>
                  <Link
                    to="/servicos/aula-de-conversacao"
                    className="block px-4 py-3 text-sm hover:bg-muted transition-colors"
                    onClick={() => setIsServicesOpen(false)}
                  >
                    <div className="font-medium">Aula de Conversação</div>
                    <div className="text-muted-foreground text-xs">Desenvolva fluência e confiança</div>
                  </Link>
                </div>
            </div>
            
            <Link 
              to="/sobre" 
              className={`hover:text-primary transition-colors ${isActive('/sobre') ? 'text-primary font-medium' : 'text-muted-foreground'}`}
            >
              Sobre
            </Link>
            
            <Link 
              to="/contato" 
              className={`hover:text-primary transition-colors ${isActive('/contato') ? 'text-primary font-medium' : 'text-muted-foreground'}`}
            >
              Contato
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
                WhatsApp
              </Button>
            </a>
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
                Início
              </Link>
              
              {/* Mobile Services Section */}
              <div className="px-2 py-1">
                <div className="text-sm font-medium text-muted-foreground mb-2">Serviços</div>
                <div className="pl-4 space-y-1">
                  <Link
                    to="/servicos/aula-online"
                    className="block py-1 text-sm hover:text-primary transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Aula Online
                  </Link>
                  <Link
                    to="/servicos/aula-individual"
                    className="block py-1 text-sm hover:text-primary transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Aula Individual
                  </Link>
                  <Link
                    to="/servicos/aula-em-grupo"
                    className="block py-1 text-sm hover:text-primary transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Aula em Grupo
                  </Link>
                  <Link
                    to="/servicos/aula-de-conversacao"
                    className="block py-1 text-sm hover:text-primary transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Aula de Conversação
                  </Link>
                </div>
              </div>
              
              <Link 
                to="/sobre" 
                className={`px-2 py-1 rounded hover:bg-muted transition-colors ${isActive('/sobre') ? 'text-primary font-medium' : 'text-muted-foreground'}`}
                onClick={() => setIsOpen(false)}
              >
                Sobre
              </Link>
              
              <Link 
                to="/contato" 
                className={`px-2 py-1 rounded hover:bg-muted transition-colors ${isActive('/contato') ? 'text-primary font-medium' : 'text-muted-foreground'}`}
                onClick={() => setIsOpen(false)}
              >
                Contato
              </Link>
              
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
