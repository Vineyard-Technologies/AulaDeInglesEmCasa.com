import { Link } from "react-router-dom"
const logoHorizontal = "/AulaDeInglesEmCasaLogo.webp"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-6">
          {/* Logo and Description Section */}
          <div className="flex flex-col items-center md:items-start max-w-sm">
            <Link to="/" className="block mb-4">
              <div className="w-[300px] h-[60px] bg-white rounded-full flex items-center justify-center px-4 hover:bg-gray-50 hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer">
                <img 
                  src={logoHorizontal} 
                  alt="Aula de Inglês em Casa - Andrew Rogers" 
                  className="max-w-full max-h-full object-contain transition-transform duration-300"
                />
              </div>
            </Link>
            <p className="text-primary-foreground/80 text-sm text-center md:text-left leading-relaxed">
              Aula de inglês personalizada com professor americano nativo em Campo Grande, MS. 
            </p>
          </div>
          
          {/* Links and Copyright */}
          <div className="text-center md:text-right text-sm text-primary-foreground/80">
            {/* Legal Links */}
            <div className="mb-3 flex flex-wrap justify-center md:justify-end gap-4">
              <Link to="/mapa-do-site" className="text-primary-foreground hover:underline">
                Mapa do Site
              </Link>
              <Link to="/privacidade" className="text-primary-foreground hover:underline">
                Política de Privacidade
              </Link>
              <Link to="/termos" className="text-primary-foreground hover:underline">
                Termos de Serviço
              </Link>
            </div>
            
            <p className="mb-1">© 2025 <Link to="/" className="text-primary-foreground hover:underline">Aula de Inglês em Casa</Link>. Todos os direitos reservados.</p>
            <p className="mb-1">Este site está licenciado sob a Licença MIT.</p>
            <p>Desenvolvido por <a href="https://vineyardtechnologies.org/" target="_blank" rel="noopener noreferrer" className="text-primary-foreground hover:underline">Vineyard Technologies</a>.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
