import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const isActive = (path) => location.pathname === path

  return (
    <nav className="bg-background border-b sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="text-xl font-bold text-primary">
            Andrew Rogers
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

            {/* Services Dropdown - Hover Trigger */}
            <div className="relative group">
              <button className="flex items-center gap-1 text-muted-foreground hover:text-primary transition-colors py-2">
                Serviços
                <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
              </button>
              
              {/* Dropdown Menu */}
              <div className="absolute top-full left-0 mt-1 w-56 bg-background border rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-2">
                  <Link 
                    to="/servicos/aulas-online" 
                    className="block px-4 py-2 text-sm text-muted-foreground hover:text-primary hover:bg-muted transition-colors"
                  >
                    Aulas Online
                  </Link>
                  <Link 
                    to="/servicos/aulas-individuais" 
                    className="block px-4 py-2 text-sm text-muted-foreground hover:text-primary hover:bg-muted transition-colors"
                  >
                    Aulas Individuais
                  </Link>
                  <Link 
                    to="/servicos/aulas-em-grupo" 
                    className="block px-4 py-2 text-sm text-muted-foreground hover:text-primary hover:bg-muted transition-colors"
                  >
                    Aulas em Grupo
                  </Link>
                  <Link 
                    to="/servicos/aulas-conversacao" 
                    className="block px-4 py-2 text-sm text-muted-foreground hover:text-primary hover:bg-muted transition-colors"
                  >
                    Aulas de Conversação
                  </Link>
                </div>
              </div>
            </div>
            
            <Link 
              to="/blog" 
              className={`hover:text-primary transition-colors ${isActive('/blog') ? 'text-primary font-medium' : 'text-muted-foreground'}`}
            >
              Blog
            </Link>
            
            <Link 
              to="/contato" 
              className={`hover:text-primary transition-colors ${isActive('/contato') ? 'text-primary font-medium' : 'text-muted-foreground'}`}
            >
              Contato
            </Link>
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

              {/* Mobile Services */}
              <div className="px-2">
                <div className="text-sm font-medium text-muted-foreground mb-2">Serviços</div>
                <div className="ml-4 space-y-1">
                  <Link 
                    to="/servicos/aulas-online" 
                    className="block px-2 py-1 text-sm text-muted-foreground hover:text-primary transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Aulas Online
                  </Link>
                  <Link 
                    to="/servicos/aulas-individuais" 
                    className="block px-2 py-1 text-sm text-muted-foreground hover:text-primary transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Aulas Individuais
                  </Link>
                  <Link 
                    to="/servicos/aulas-em-grupo" 
                    className="block px-2 py-1 text-sm text-muted-foreground hover:text-primary transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Aulas em Grupo
                  </Link>
                  <Link 
                    to="/servicos/aulas-conversacao" 
                    className="block px-2 py-1 text-sm text-muted-foreground hover:text-primary transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Aulas de Conversação
                  </Link>
                </div>
              </div>
              
              <Link 
                to="/blog" 
                className={`px-2 py-1 rounded hover:bg-muted transition-colors ${isActive('/blog') ? 'text-primary font-medium' : 'text-muted-foreground'}`}
                onClick={() => setIsOpen(false)}
              >
                Blog
              </Link>
              
              <Link 
                to="/contato" 
                className={`px-2 py-1 rounded hover:bg-muted transition-colors ${isActive('/contato') ? 'text-primary font-medium' : 'text-muted-foreground'}`}
                onClick={() => setIsOpen(false)}
              >
                Contato
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
