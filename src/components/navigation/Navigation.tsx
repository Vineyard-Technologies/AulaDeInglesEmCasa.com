import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { ChevronDown, Menu, X } from 'lucide-react'
import logoHorizontal from '@/assets/images/AulasDeInglesEmCasaLogo.webp'

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const isActive = (path: string) => location.pathname === path

  const navItems = [
    { path: '/', label: 'Início' },
    { path: '/sobre', label: 'Sobre' },
    { path: '/contato', label: 'Contato' },
    { path: '/blog', label: 'Blog' },
  ]

  const serviceItems = [
    { path: '/servicos/aula-online', label: 'Aula Online' },
    { path: '/servicos/aula-individual', label: 'Aula Individual' },
    { path: '/servicos/aula-em-grupo', label: 'Aula em Grupo' },
    { path: '/servicos/aula-conversacao', label: 'Aula de Conversação' },
  ]

  return (
    <nav className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="h-20 flex items-center justify-between">
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
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-foreground hover:text-primary transition-colors ${
                  isActive(item.path) ? 'text-primary font-medium' : ''
                }`}
              >
                {item.label}
              </Link>
            ))}

            {/* Services Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button 
                  variant="ghost" 
                  className={`text-foreground hover:text-primary transition-colors ${
                    location.pathname.startsWith('/servicos') ? 'text-primary font-medium' : ''
                  }`}
                >
                  Serviços
                  <ChevronDown className="ml-1 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                {serviceItems.map((item) => (
                  <DropdownMenuItem key={item.path} asChild>
                    <Link to={item.path} className="w-full">
                      {item.label}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`block px-2 py-2 text-foreground hover:text-primary transition-colors ${
                    isActive(item.path) ? 'text-primary font-medium' : ''
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              
              {/* Mobile Services */}
              <div className="px-2 py-2">
                <div className="text-foreground font-medium mb-2">Serviços</div>
                <div className="ml-4 space-y-1">
                  {serviceItems.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className={`block py-1 text-sm text-muted-foreground hover:text-primary transition-colors ${
                        isActive(item.path) ? 'text-primary font-medium' : ''
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
