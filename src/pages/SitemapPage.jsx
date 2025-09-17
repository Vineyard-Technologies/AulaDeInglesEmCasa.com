import { useEffect } from "react"
import { Link } from "react-router-dom"
import { updateMetaTags, addStructuredData } from "@/utils/seo"
import { Home, User, MessageCircle, Shield, FileText, Map, Video, Users, Mic, BookOpen } from "lucide-react"
import { getAllBlogPosts } from "@/data/blogPostsBilingual"
import { useLanguage } from "@/contexts/LanguageContext"
import { useTranslations } from "@/data/translations"
import { LazyLoad } from "@/components"

const sitemapMetaData = {
  title: "Mapa do Site | Aula de Inglês em Casa",
  description: "Navegue facilmente pelo nosso site. Encontre todas as páginas da aula de inglês com Andrew Rogers em Campo Grande, MS.",
  canonical: "https://auladeinglesemcasa.com/mapa-do-site"
}

export function SitemapPage() {
  const { language } = useLanguage()
  const t = useTranslations()
  
  useEffect(() => {
    updateMetaTags(sitemapMetaData)
  }, [])

  const pages = [
    {
      title: t.sitemap.pages.home,
      path: "/",
      icon: Home
    },
    {
      title: t.sitemap.pages.about,
      path: "/sobre",
      icon: User
    },
    {
      title: t.sitemap.pages.blog,
      path: "/blog",
      icon: BookOpen
    },
    {
      title: t.sitemap.pages.contact,
      path: "/contato",
      icon: MessageCircle
    }
  ]



  const servicePages = [
    {
      title: t.sitemap.services.online,
      path: "/servicos/aula-de-ingles-online",
      icon: Video
    },
    {
      title: t.sitemap.services.individual,
      path: "/servicos/aula-de-ingles-individual",
      icon: User
    },
    {
      title: t.sitemap.services.group,
      path: "/servicos/aula-de-ingles-em-grupo",
      icon: Users
    },
    {
      title: t.sitemap.services.conversation,
      path: "/servicos/aula-de-conversacao-de-ingles",
      icon: Mic
    }
  ]

  const legalPages = [
    {
      title: t.sitemap.legal.privacy,
      path: "/privacidade",
      icon: Shield
    },
    {
      title: t.sitemap.legal.terms,
      path: "/termos",
      icon: FileText
    }
  ]

  return (
    <div className="min-h-screen bg-background py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <LazyLoad delay={100} animationClass="fade-in">
          <h1 className="text-4xl font-bold text-primary mb-4">{t.sitemap.title}</h1>
          <p className="text-muted-foreground text-lg mb-12">
            {t.sitemap.description}
          </p>
        </LazyLoad>
        
        {/* Main Pages */}
        <LazyLoad delay={200} animationClass="fade-in-left">
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-6">{t.sitemap.sections.mainPages}</h2>
            <div className="grid gap-6 md:grid-cols-2">
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
                      
                      <button className="mt-3 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors text-sm font-medium">
                        {t.sitemap.actions.visitPage}
                      </button>
                    </div>
                  </div>
                </Link>
              )
            })}
            </div>
          </div>
        </LazyLoad>

        {/* Service Pages */}
        <LazyLoad delay={300} animationClass="fade-in-right">
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-6">{t.sitemap.sections.services}</h2>
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
                      
                      <button className="mt-3 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors text-sm font-medium">
                        {t.sitemap.actions.visitPage}
                      </button>
                    </div>
                  </div>
                </Link>
              )
            })}
            </div>
          </div>
        </LazyLoad>

        {/* Legal Pages */}
        <LazyLoad delay={400} animationClass="fade-in-left">
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-6">{t.sitemap.sections.legal}</h2>
            <div className="grid gap-6 md:grid-cols-2">
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
                      
                      <button className="mt-3 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors text-sm font-medium">
                        {t.sitemap.actions.visitPage}
                      </button>
                    </div>
                  </div>
                </Link>
              )
            })}
            </div>
          </div>
        </LazyLoad>
        
        <LazyLoad delay={500} animationClass="fade-in-scale">
          <div className="mt-12 p-6 bg-muted/50 rounded-lg">
          <h3 className="text-lg font-semibold mb-3 text-foreground">{t.sitemap.sections.otherInfo}</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>• <strong>{t.sitemap.info.location}</strong> {t.sitemap.info.locationValue}</p>
              <p>• <strong>{t.sitemap.info.specialty}</strong> {t.sitemap.info.specialtyValue}</p>
              <p>• <strong>{t.sitemap.info.classTypes}</strong> {t.sitemap.info.classTypesValue}</p>
              <p>• <strong>{t.sitemap.info.contact}</strong> <a href="https://wa.me/5567996161199" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">(67) 99616-1199</a></p>
            </div>
          </div>
        </LazyLoad>
      </div>
    </div>
  )
}