import { Link } from "react-router-dom"
import logoHorizontal from "@/assets/images/logoHorizontal.webp"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-6">
          {/* Logo Section */}
          <div className="flex items-center">
            <Link to="/" className="block">
              <div className="w-[300px] h-[60px] bg-white rounded-full flex items-center justify-center px-4 hover:bg-gray-50 transition-colors cursor-pointer">
                <img 
                  src={logoHorizontal} 
                  alt="Aulas de Inglês em Casa - Andrew Rogers" 
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            </Link>
          </div>
          
          {/* Copyright and License */}
          <div className="text-center md:text-right text-sm text-primary-foreground/80">
            <p className="mb-1">© 2025 Aulas de Inglês em Casa. Todos os direitos reservados.</p>
            <p className="mb-1">Este site está licenciado sob a <span className="text-primary-foreground">Licença MIT</span>.</p>
            <p>Desenvolvido por <a href="https://vineyardtechnologies.org/" target="_blank" rel="noopener noreferrer" className="text-primary-foreground hover:underline">Vineyard Technologies</a>.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
