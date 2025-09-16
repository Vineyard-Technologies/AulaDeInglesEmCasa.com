import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon"
import { LazyLoad, LazyImage, GoogleMap } from "@/components"
import { Link } from "react-router-dom"
import { updateMetaTags, addStructuredData, createEducationServiceSchema, createPersonSchema, pageMetaData } from "@/utils/seo"
import { useTranslations } from "@/data/translations"

// Public asset URLs (no imports needed)
const homepageLogo = "/AulaDeInglesEmCasaIcon.webp"
const cityImage = "/City.webp"
const aulaOnlineImage = "/AulaOnline.webp"
const aulaIndividualImage = "/AulaIndividual.webp"
const aulaEmGrupoImage = "/AulaEmGrupo.webp"
const aulaConversacaoImage = "/AulaDeConversacao.webp"
const andrewRogersImage = "/AndrewRogers.webp"
import { 
  MessageCircle, 
  Mail, 
  MapPin, 
  Clock,
  Users,
  User,
  BookOpen,
  Award,
  CheckCircle,
  Video,
  ArrowRight,
  Flag
} from "lucide-react"

export function HomePage() {
  const whatsappNumber = "5567996161199"
  const t = useTranslations()
  
  useEffect(() => {
    // Update meta tags
    updateMetaTags(pageMetaData.home);
    
    // Add structured data
    const combinedSchema = [
      createEducationServiceSchema(),
      createPersonSchema()
    ];
    addStructuredData(combinedSchema);
  }, [])
  
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative text-primary-foreground py-20 overflow-hidden">
        {/* Background Image */}
        <img 
          src={cityImage} 
          alt="Campo Grande cityscape" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60"></div>
        
        {/* Content */}
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="w-32 h-20 mx-auto flex items-center justify-center">
              <img 
                src={homepageLogo} 
                alt="Aula de Inglês em Casa - Andrew Rogers" 
                className="max-w-full max-h-full object-contain"
              />
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              {t.home.hero.title}
            </h1>
            <p className="text-xl md:text-2xl mb-6 text-primary-foreground/90">
              {t.home.hero.subtitle}
            </p>
            <div className="flex items-center justify-center gap-2 mb-8">
              <MapPin className="w-5 h-5" />
              <span className="text-lg">{t.home.hero.location}</span>
            </div>
            
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
                  {t.actions.email}
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <LazyLoad delay={100}>
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                {t.home.welcome.title}
              </h2>
            </LazyLoad>
            
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <LazyLoad delay={200} animationClass="fade-in-left">
                <div>
                  <p className="text-lg mb-6 text-muted-foreground leading-relaxed">
                    {t.home.welcome.description}
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Flag className="w-6 h-6 text-primary" />
                      <span className="font-medium">{t.home.welcome.feature1}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Users className="w-6 h-6 text-primary" />
                      <span className="font-medium">{t.home.welcome.feature2}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin className="w-6 h-6 text-primary" />
                      <span className="font-medium">{t.home.welcome.feature3}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <BookOpen className="w-6 h-6 text-primary" />
                      <span className="font-medium">{t.home.welcome.feature4}</span>
                    </div>
                  </div>
                </div>
              </LazyLoad>
              
              <LazyLoad delay={300} animationClass="fade-in-right">
                <Card className="p-6 bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer">
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-primary mt-0.5" />
                    <div>
                      <span className="font-medium text-lg block">{t.home.welcome.card.flexibility.title}</span>
                      <span className="text-lg text-muted-foreground">{t.home.welcome.card.flexibility.description}</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Users className="w-5 h-5 text-primary mt-0.5" />
                    <div>
                      <span className="font-medium text-lg block">{t.home.welcome.card.attention.title}</span>
                      <span className="text-lg text-muted-foreground">{t.home.welcome.card.attention.description}</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Award className="w-5 h-5 text-primary mt-0.5" />
                    <div>
                      <span className="font-medium text-lg block">{t.home.welcome.card.progress.title}</span>
                      <span className="text-lg text-muted-foreground">{t.home.welcome.card.progress.description}</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                    <div>
                      <span className="font-medium text-lg block">{t.home.welcome.card.comfort.title}</span>
                      <span className="text-lg text-muted-foreground">{t.home.welcome.card.comfort.description}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              </LazyLoad>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <LazyLoad delay={100}>
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                {t.home.services.title}
              </h2>
            </LazyLoad>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <LazyLoad delay={200} animationClass="fade-in-scale">
              <Card className="hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer h-full flex flex-col">
                <div className="aspect-video w-full overflow-hidden rounded-lg">
                  <LazyImage 
                    src={aulaOnlineImage} 
                    alt="Aula Online" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader className="flex-shrink-0">
                  <CardTitle className="flex items-center gap-2">
                    <Video className="w-5 h-5 text-primary" />
                    {t.home.services.online.title}
                  </CardTitle>
                  <CardDescription>
                    {t.home.services.online.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col">
                  <ul className="space-y-2 text-sm mb-4 flex-grow">
                    {t.home.services.online.features.map((feature, index) => (
                      <li key={index}>• {feature}</li>
                    ))}
                  </ul>
                  <div className="mt-auto">
                    <Button 
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                      asChild
                    >
                      <Link to="/servicos/aula-de-ingles-online" className="flex items-center justify-center gap-2">
                        {t.actions.learnMore}
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
              </LazyLoad>

              <LazyLoad delay={300} animationClass="fade-in-scale">
              <Card className="hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer h-full flex flex-col">
                <div className="aspect-video w-full overflow-hidden rounded-lg">
                  <LazyImage 
                    src={aulaIndividualImage} 
                    alt="Aula Individual" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader className="flex-shrink-0">
                  <CardTitle className="flex items-center gap-2">
                    <User className="w-5 h-5 text-primary" />
                    {t.home.services.individual.title}
                  </CardTitle>
                  <CardDescription>
                    {t.home.services.individual.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col">
                  <ul className="space-y-2 text-sm mb-4 flex-grow">
                    {t.home.services.individual.features.map((feature, index) => (
                      <li key={index}>• {feature}</li>
                    ))}
                  </ul>
                  <div className="mt-auto">
                    <Button 
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                      asChild
                    >
                      <Link to="/servicos/aula-de-ingles-individual" className="flex items-center justify-center gap-2">
                        {t.actions.learnMore}
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
              </LazyLoad>

              <LazyLoad delay={400} animationClass="fade-in-scale">
              <Card className="hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer h-full flex flex-col">
                <div className="aspect-video w-full overflow-hidden rounded-lg">
                  <LazyImage 
                    src={aulaEmGrupoImage} 
                    alt="Aula em Grupo" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader className="flex-shrink-0">
                  <CardTitle className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-primary" />
                    {t.home.services.group.title}
                  </CardTitle>
                  <CardDescription>
                    {t.home.services.group.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col">
                  <ul className="space-y-2 text-sm mb-4 flex-grow">
                    {t.home.services.group.features.map((feature, index) => (
                      <li key={index}>• {feature}</li>
                    ))}
                  </ul>
                  <div className="mt-auto">
                    <Button 
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                      asChild
                    >
                      <Link to="/servicos/aula-de-ingles-em-grupo" className="flex items-center justify-center gap-2">
                        {t.actions.learnMore}
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
              </LazyLoad>

              <LazyLoad delay={500} animationClass="fade-in-scale">
              <Card className="hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer h-full flex flex-col">
                <div className="aspect-video w-full overflow-hidden rounded-lg">
                  <LazyImage 
                    src={aulaConversacaoImage} 
                    alt="Aula de Conversação" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader className="flex-shrink-0">
                  <CardTitle className="flex items-center gap-2">
                    <MessageCircle className="w-5 h-5 text-primary" />
                    {t.home.services.conversation.title}
                  </CardTitle>
                  <CardDescription>
                    {t.home.services.conversation.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col">
                  <ul className="space-y-2 text-sm mb-4 flex-grow">
                    {t.home.services.conversation.features.map((feature, index) => (
                      <li key={index}>• {feature}</li>
                    ))}
                  </ul>
                  <div className="mt-auto">
                    <Button 
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                      asChild
                    >
                      <Link to="/servicos/aula-de-conversacao-de-ingles" className="flex items-center justify-center gap-2">
                        {t.actions.learnMore}
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
              </LazyLoad>
            </div>
          </div>
        </div>
      </section>

      {/* About the Teacher Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <LazyLoad delay={200} animationClass="fade-in-left">
                <div className="text-center md:text-left">
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    {t.home.about.title}
                  </h2>
                  <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                    {t.home.about.description}
                  </p>
                  <Link to="/sobre">
                    <Button size="lg" className="inline-flex items-center gap-2">
                      {t.actions.learnMore}
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </LazyLoad>
              <LazyLoad delay={300} animationClass="fade-in-right">
                <div className="flex justify-center">
                  <Link to="/sobre" className="block">
                    <div className="relative cursor-pointer">
                      <LazyImage 
                        src={andrewRogersImage} 
                        alt="Andrew Rogers - Professor de Inglês" 
                        className="w-80 h-80 object-cover rounded-full shadow-2xl"
                      />
                      <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/20 to-transparent"></div>
                    </div>
                  </Link>
                </div>
              </LazyLoad>
            </div>
          </div>
        </div>
      </section>

      {/* Location & Contact Section */}
      <section className="py-8 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-6 items-center">
              <LazyLoad delay={200} animationClass="fade-in-left">
                <div className="text-center flex flex-col justify-center">
                  <div className="w-24 h-16 mx-auto flex items-center justify-center">
                    <img 
                      src={homepageLogo} 
                      alt="Aula de Inglês em Casa - Andrew Rogers" 
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                  
                  <h2 className="text-3xl md:text-4xl font-bold mb-8">
                    {t.home.cta.title}
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
                        WhatsApp
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
              </LazyLoad>
              
              <LazyLoad delay={300} animationClass="fade-in-right">
                <GoogleMap />
              </LazyLoad>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
