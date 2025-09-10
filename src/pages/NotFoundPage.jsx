import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"
import { updateMetaTags } from "@/utils/seo"
import { 
  Home,
  ArrowLeft,
  Search,
  MessageCircle,
  Mail
} from "lucide-react"

// Public asset URLs
const homepageLogo = "/homepageLogo.webp"

export function NotFoundPage() {
  const whatsappNumber = "5567996161199"

  useEffect(() => {
    // Update meta tags for 404 page
    updateMetaTags({
      title: "Página Não Encontrada | Aulas de Inglês em Casa | Campo Grande, MS",
      description: "A página que você procura não foi encontrada. Volte à página inicial ou entre em contato para agendar suas aulas de inglês em Campo Grande, MS.",
      url: window.location.href,
      image: "https://auladeinglesemcasa.com/homepageLogo.webp"
    });
  }, [])

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* 404 Content */}
      <div className="flex-1 flex items-center justify-center px-4">
        <div className="max-w-2xl mx-auto text-center">
          {/* Logo */}
          <div className="w-32 h-20 mx-auto flex items-center justify-center mb-8">
            <img 
              src={homepageLogo} 
              alt="Aulas de Inglês em Casa - Andrew Rogers" 
              className="max-w-full max-h-full object-contain"
            />
          </div>

          {/* 404 Message */}
          <div className="mb-8">
            <h1 className="text-8xl md:text-9xl font-bold text-primary mb-4">404</h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-4">
              Página Não Encontrada
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-md mx-auto">
              Ops! Parece que a página que você está procurando não existe ou foi movida.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="space-y-4 mb-8">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/">
                <Button size="lg" className="w-full sm:w-auto">
                  <Home className="w-5 h-5 mr-2" />
                  Voltar ao Início
                </Button>
              </Link>
              <Link to="/sobre">
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  <Search className="w-5 h-5 mr-2" />
                  Sobre o Professor
                </Button>
              </Link>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button 
                  size="lg" 
                  className="bg-green-500 hover:bg-green-600 text-white w-full sm:w-auto"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  WhatsApp
                </Button>
              </a>
              <Link to="/contato">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="w-full sm:w-auto"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Contato
                </Button>
              </Link>
            </div>
          </div>

          {/* Helpful Links */}
          <div className="text-sm text-muted-foreground">
            <p className="mb-2">Você pode estar procurando:</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/" className="hover:text-primary transition-colors">
                Página Inicial
              </Link>
              <Link to="/sobre" className="hover:text-primary transition-colors">
                Sobre o Professor
              </Link>
              <Link to="/contato" className="hover:text-primary transition-colors">
                Contato
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
