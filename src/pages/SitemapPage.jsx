import { useEffect } from "react"
import { Link } from "react-router-dom"
import { updateMetaTags, addStructuredData } from "@/utils/seo"
import { Home, User, MessageCircle, Shield, FileText, Map, Video, Users, Mic, BookOpen } from "lucide-react"
import { getAllBlogPosts } from "@/data/blogPostsBilingual"
import { useLanguage } from "@/contexts/LanguageContext"

const sitemapMetaData = {
  title: "Mapa do Site | Aula de Inglês em Casa",
  description: "Navegue facilmente pelo nosso site. Encontre todas as páginas da aula de inglês com Andrew Rogers em Campo Grande, MS.",
  canonical: "https://auladeinglesemcasa.com/mapa-do-site"
}

export function SitemapPage() {
  const { language } = useLanguage()
  
  useEffect(() => {
    updateMetaTags(sitemapMetaData)
  }, [])

  const pages = [
    {
      title: "Início",
      path: "/",
      description: "Página inicial com informações sobre a aula de inglês e serviços oferecidos",
      icon: Home
    },
    {
      title: "Sobre",
      path: "/sobre",
      description: "Conheça Andrew Rogers, professor americano nativo com mais de 10 anos de experiência",
      icon: User
    },
    {
      title: "Contato",
      path: "/contato",
      description: "Entre em contato para agendar sua aula de inglês ou tirar dúvidas",
      icon: MessageCircle
    }
  ]

  const blogPosts = getAllBlogPosts(language)
  
  const blogPages = [
    {
      title: "Blog",
      path: "/blog",
      description: "Artigos e dicas sobre aprendizado de inglês",
      icon: BookOpen
    },
    ...blogPosts.map(post => ({
      title: post.title,
      path: `/blog/${post.slug}`,
      description: post.excerpt,
      icon: BookOpen
    }))
  ]

  const servicePages = [
    {
      title: "Aula de Inglês Online",
      path: "/servicos/aula-de-ingles-online",
      description: "Aula de inglês online com flexibilidade total de horários",
      icon: Video
    },
    {
      title: "Aula de Inglês Particular",
      path: "/servicos/aula-de-ingles-individual",
      description: "Atenção 100% personalizada com professor americano nativo",
      icon: User
    },
    {
      title: "Aula de Inglês em Grupo",
      path: "/servicos/aula-de-ingles-em-grupo",
      description: "Aprenda inglês em pequenos grupos com ótimo custo-benefício",
      icon: Users
    },
    {
      title: "Aula de Conversação de Inglês",
      path: "/servicos/aula-de-conversacao-de-ingles",
      description: "Desenvolva fluência e confiança falando inglês naturalmente",
      icon: Mic
    }
  ]

  const legalPages = [
    {
      title: "Política de Privacidade",
      path: "/privacidade",
      description: "Saiba como protegemos e utilizamos suas informações pessoais",
      icon: Shield
    },
    {
      title: "Termos de Serviço",
      path: "/termos",
      description: "Condições e termos para a aula de inglês e serviços educacionais",
      icon: FileText
    },
    {
      title: "Mapa do Site",
      path: "/mapa-do-site",
      description: "Navegue facilmente por todas as páginas do nosso site",
      icon: Map
    }
  ]

  return (
    <div className="min-h-screen bg-background py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold text-primary mb-4">Mapa do Site</h1>
        <p className="text-muted-foreground text-lg mb-12">
          Navegue facilmente por todas as páginas do nosso site. Encontre rapidamente as informações que você precisa sobre nossa aula de inglês.
        </p>
        
        {/* Main Pages */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Páginas Principais</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {pages.map((page, index) => {
              const IconComponent = page.icon
              return (
                <Link
                  key={index}
                  to={page.path}
                  className="group block p-6 bg-card rounded-lg border hover:border-primary/50 transition-all duration-200 hover:shadow-lg"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    
                    <div className="flex-grow">
                      <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                        {page.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {page.description}
                      </p>
                      
                      <div className="mt-3 text-sm text-primary group-hover:underline">
                        Visitar página →
                      </div>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>

        {/* Service Pages */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Nossos Serviços</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {servicePages.map((page, index) => {
              const IconComponent = page.icon
              return (
                <Link
                  key={index}
                  to={page.path}
                  className="group block p-6 bg-card rounded-lg border hover:border-primary/50 transition-all duration-200 hover:shadow-lg"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    
                    <div className="flex-grow">
                      <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                        {page.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {page.description}
                      </p>
                      
                      <div className="mt-3 text-sm text-primary group-hover:underline">
                        Visitar página →
                      </div>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>

        {/* Blog Pages */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Blog e Artigos</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {blogPages.map((page, index) => {
              const IconComponent = page.icon
              return (
                <Link
                  key={index}
                  to={page.path}
                  className="group block p-6 bg-card rounded-lg border hover:border-primary/50 transition-all duration-200 hover:shadow-lg"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    
                    <div className="flex-grow">
                      <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                        {page.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {page.description}
                      </p>
                      
                      <div className="mt-3 text-sm text-primary group-hover:underline">
                        Visitar página →
                      </div>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>

        {/* Legal Pages */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Informações Legais</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {legalPages.map((page, index) => {
              const IconComponent = page.icon
              return (
                <Link
                  key={index}
                  to={page.path}
                  className="group block p-6 bg-card rounded-lg border hover:border-primary/50 transition-all duration-200 hover:shadow-lg"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    
                    <div className="flex-grow">
                      <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                        {page.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {page.description}
                      </p>
                      
                      <div className="mt-3 text-sm text-primary group-hover:underline">
                        Visitar página →
                      </div>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
        
        <div className="mt-12 p-6 bg-muted/50 rounded-lg">
          <h3 className="text-lg font-semibold mb-3 text-foreground">Outras Informações</h3>
          <div className="space-y-2 text-sm text-muted-foreground">
            <p>• <strong>Localização:</strong> Campo Grande, MS, Brasil</p>
            <p>• <strong>Especialidade:</strong> Aula de inglês com professor americano nativo</p>
            <p>• <strong>Tipos de aula:</strong> Individual, em grupo, online e presencial</p>
            <p>• <strong>Contato:</strong> <a href="https://wa.me/5567996161199" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">(67) 99616-1199</a></p>
          </div>
        </div>
      </div>
    </div>
  )
}