import { useEffect } from "react"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon"
import { GoogleMap, RelatedBlogPosts } from "@/components"
import { updateMetaTags, addStructuredData } from "@/utils/seo"
import { BLOG_CATEGORIES } from "@/data/blogPostsBilingual"
import { useTranslations } from "@/data/translations"
import { 
  User, 
  Target, 
  Clock, 
  CheckCircle, 
  BookOpen,
  Award,
  MessageCircle,
  Calendar,
  Mail
} from "lucide-react"

const aulaIndividualMetaData = {
  title: "Aula Particular de Inglês | Andrew Rogers | Campo Grande, MS",
  description: "Aula particular de inglês com professor americano nativo. Atenção 100% personalizada, horários flexíveis e metodologia adaptada ao seu ritmo.",
  canonical: "https://auladeinglesemcasa.com/servicos/aula-de-ingles-individual"
}

export function AulaIndividualPage() {
  const whatsappNumber = "5567996161199"
  const t = useTranslations()
  
  useEffect(() => {
    updateMetaTags(aulaIndividualMetaData)
  }, [])

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-primary text-primary-foreground py-20 overflow-hidden">
        {/* Background Image */}
        <img 
          src="/Boats.webp" 
          alt="Boats background" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-white/20 rounded-full">
                <User className="w-12 h-12" />
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {t.individual.hero.title}
            </h1>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-green-500 hover:bg-green-600 text-white"
                asChild
              >
                <a 
                  href={`https://wa.me/${whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2"
                >
                  <WhatsAppIcon className="w-5 h-5" />
                  {t.actions.whatsapp}
                </a>
              </Button>
              
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground border-primary-foreground/20"
                asChild
              >
                <a 
                  href="mailto:Contato@auladeinglesemcasa.com"
                  className="inline-flex items-center gap-2"
                >
                  <Mail className="w-5 h-5" />
                  {t.actions.sendEmail}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Individual Classes Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold">
                  {t.individual.about.title}
                </h2>
                
                <p className="text-lg text-muted-foreground">
                  {t.individual.about.p1}
                </p>
                
                <p className="text-muted-foreground">
                  {t.individual.about.p2}
                </p>
                
                <p className="text-muted-foreground">
                  {t.individual.about.p3}
                </p>
                
                <p className="text-muted-foreground">
                  {t.individual.about.p4}
                </p>
              </div>
              
              <div className="flex justify-center">
                <img 
                  src="/interior.webp" 
                  alt="Ambiente de Aula Individual de Inglês" 
                  className="w-full max-w-lg h-auto object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">{t.individual.benefits.title}</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <img 
                  src="/IndividualImage-1.webp" 
                  alt="Foco Total - Aula Individual" 
                  className="w-full h-40 object-cover rounded-md mb-4"
                />
                <Target className="w-8 h-8 text-primary mx-auto mb-2" />
                <CardTitle className="text-lg">{t.individual.benefits.focus.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">
                  {t.individual.benefits.focus.description}
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <img 
                  src="/IndividualImage-2.webp" 
                  alt="Método Personalizado - Aula Individual" 
                  className="w-full h-40 object-cover rounded-md mb-4"
                />
                <BookOpen className="w-8 h-8 text-primary mx-auto mb-2" />
                <CardTitle className="text-lg">{t.individual.benefits.method.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">
                  {t.individual.benefits.method.description}
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <img 
                  src="/IndividualImage-3.webp" 
                  alt="Horário Flexível - Aula Individual" 
                  className="w-full h-40 object-cover rounded-md mb-4"
                />
                <Clock className="w-8 h-8 text-primary mx-auto mb-2" />
                <CardTitle className="text-lg">{t.individual.benefits.schedule.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">
                  {t.individual.benefits.schedule.description}
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <img 
                  src="/IndividualImage-4.webp" 
                  alt="Mais Conversação - Aula Individual" 
                  className="w-full h-40 object-cover rounded-md mb-4"
                />
                <MessageCircle className="w-8 h-8 text-primary mx-auto mb-2" />
                <CardTitle className="text-lg">{t.individual.benefits.conversation.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">
                  {t.individual.benefits.conversation.description}
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <img 
                  src="/IndividualImage-5.webp" 
                  alt="Progresso Rápido - Aula Individual" 
                  className="w-full h-40 object-cover rounded-md mb-4"
                />
                <Award className="w-8 h-8 text-primary mx-auto mb-2" />
                <CardTitle className="text-lg">{t.individual.benefits.progress.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">
                  {t.individual.benefits.progress.description}
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <img 
                  src="/IndividualImage-6.webp" 
                  alt="Sem Pressa - Aula Individual" 
                  className="w-full h-40 object-cover rounded-md mb-4"
                />
                <Calendar className="w-8 h-8 text-primary mx-auto mb-2" />
                <CardTitle className="text-lg">{t.individual.benefits.pace.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">
                  {t.individual.benefits.pace.description}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">{t.individual.methodology.title}</h2>
          
          <div className="max-w-4xl mx-auto grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="text-lg font-semibold mb-2">{t.individual.methodology.step1.title}</h3>
              <p className="text-muted-foreground text-sm">
                {t.individual.methodology.step1.description}
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="text-lg font-semibold mb-2">{t.individual.methodology.step2.title}</h3>
              <p className="text-muted-foreground text-sm">
                {t.individual.methodology.step2.description}
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="text-lg font-semibold mb-2">{t.individual.methodology.step3.title}</h3>
              <p className="text-muted-foreground text-sm">
                {t.individual.methodology.step3.description}
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                4
              </div>
              <h3 className="text-lg font-semibold mb-2">{t.individual.methodology.step4.title}</h3>
              <p className="text-muted-foreground text-sm">
                {t.individual.methodology.step4.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Perfect For Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">{t.individual.idealFor.title}</h2>
          
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <img 
                  src="/ideal1.webp" 
                  alt="Busca Resultados Rápidos - Aula Individual" 
                  className="w-full h-40 object-cover rounded-md mb-4"
                />
                <CardTitle>{t.individual.idealFor.quickResults.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                    <span>{t.individual.idealFor.quickResults.need1}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                    <span>{t.individual.idealFor.quickResults.need2}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                    <span>{t.individual.idealFor.quickResults.need3}</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <img 
                  src="/ideal2.webp" 
                  alt="Prefere Atenção Individual - Aula Individual" 
                  className="w-full h-40 object-cover rounded-md mb-4"
                />
                <CardTitle>{t.individual.idealFor.individualAttention.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                    <span>{t.individual.idealFor.individualAttention.need1}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                    <span>{t.individual.idealFor.individualAttention.need2}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                    <span>{t.individual.idealFor.individualAttention.need3}</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-6 items-center">
              <div className="text-center flex flex-col justify-center">
                <div className="w-24 h-16 mx-auto flex items-center justify-center mb-6">
                  <img 
                    src="/AulaDeInglesEmCasaIcon.webp" 
                    alt="Aula de Inglês em Casa - Andrew Rogers" 
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold mb-8">
                  {t.individual.location.title}
                </h2>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href={`https://wa.me/${whatsappNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button 
                      size="lg" 
                      className="bg-green-500 hover:bg-green-600 text-white px-4 w-full"
                    >
                      <WhatsAppIcon className="w-5 h-5" />
                      {t.actions.whatsapp}
                    </Button>
                  </a>
                  <a href="mailto:Contato@auladeinglesemcasa.com">
                    <Button 
                      size="lg" 
                      className="bg-primary hover:bg-primary/90 text-primary-foreground border-primary-foreground/20 w-full"
                    >
                      <Mail className="w-5 h-5" />
                      {t.actions.sendEmail}
                    </Button>
                  </a>
                </div>
              </div>
              
              <GoogleMap />
            </div>
          </div>
        </div>
      </section>

      {/* Related Blog Posts */}
      <RelatedBlogPosts category={BLOG_CATEGORIES.INDIVIDUAL} />

      {/* CTA Section */}
      <section className="relative py-16 text-primary-foreground overflow-hidden">
        {/* Background Image */}
        <img 
          src="/LushForest.webp" 
          alt="LushForest background" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60"></div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl font-bold mb-4">{t.individual.finalCta.title}</h2>
          <p className="text-xl mb-8 text-primary-foreground/90">
            {t.individual.finalCta.subtitle}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-green-500 hover:bg-green-600 text-white"
              asChild
            >
              <a 
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2"
              >
                <WhatsAppIcon className="w-5 h-5" />
                {t.actions.whatsapp}
              </a>
            </Button>
            
            <a href="mailto:Contato@auladeinglesemcasa.com">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground border-primary-foreground/20"
              >
                <Mail className="w-5 h-5" />
                {t.actions.sendEmail}
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
