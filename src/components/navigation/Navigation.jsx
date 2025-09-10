import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { WhatsAppIcon } from '@/components/icons/WhatsAppIcon'
const logoHorizontal = '/AulaDeInglesEmCasaLogo.webp'

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const isActive = (path) => location.pathname === path

  return (
    <nav className="bg-background border-b sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center py-2.5">
            <img 
              src={logoHorizontal} 
              alt="Aula de Inglês em Casa" 
              className="w-[300px] h-[60px]"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`hover:text-primary transition-colors ${isActive('/') ? 'text-primary font-medium' : 'text-muted-foreground'}`}
            >
              Início
            </Link>
            
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
