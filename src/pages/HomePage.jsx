import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon"
import { LazyLoad, LazyImage } from "@/components"
import { Link } from "react-router-dom"
import { updateMetaTags, addStructuredData, createEducationServiceSchema, createPersonSchema, pageMetaData } from "@/utils/seo"

// Public asset URLs (no imports needed)
const homepageLogo = "/AulaDeInglesEmCasaIcon.webp"
const cityImage = "/City.webp"
const aulasOnlineImage = "/AulaOnline.webp"
const aulasIndividuaisImage = "/AulaIndividual.webp"
const aulaEmGrupoImage = "/AulaEmGrupo.webp"
const aulasConversacaoImage = "/AulaDeConversacao.webp"
const andrewRogersImage = "/AndrewRogers.webp"
import { 
  MessageCircle, 
  Mail, 
  MapPin, 
  Clock,
  Users,
  BookOpen,
  Award,
  CheckCircle,
  Video,
  ArrowRight,
  Flag
} from "lucide-react"

export function HomePage() {
  const whatsappNumber = "5567996161199"
  
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
              Aula de Inglês em Casa
            </h1>
            <p className="text-xl md:text-2xl mb-6 text-primary-foreground/90">
              Professor Andrew Christopher Rogers
            </p>
            <div className="flex items-center justify-center gap-2 mb-8">
              <MapPin className="w-5 h-5" />
              <span className="text-lg">Campo Grande, Mato Grosso do Sul</span>
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
                  WhatsApp
                </Button>
              </a>
              <a href="mailto:Contato@auladeinglesemcasa.com">
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 text-primary-foreground border-primary-foreground/20 w-full"
                >
                  <Mail className="w-5 h-5" />
                  Enviar Email
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
                Transforme Seu Futuro com Inglês
              </h2>
            </LazyLoad>
            
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <LazyLoad delay={200} animationClass="fade-in-left">
                <div>
                  <p className="text-lg mb-6 text-muted-foreground leading-relaxed">
                    Imagine poder se comunicar com confiança em inglês, abrir novas oportunidades 
                    profissionais e conectar-se com pessoas do mundo todo. Como professor americano 
                    nativo em Campo Grande, estou aqui para tornar esse sonho realidade, 
                     no conforto da sua casa.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Flag className="w-6 h-6 text-primary" />
                      <span className="font-medium">Professor nativo americano</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Users className="w-6 h-6 text-primary" />
                      <span className="font-medium">Mais de 10 anos de experiência</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin className="w-6 h-6 text-primary" />
                      <span className="font-medium">Aula em domicílio em Campo Grande</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <BookOpen className="w-6 h-6 text-primary" />
                      <span className="font-medium">Metodologia personalizada para você</span>
                    </div>
                  </div>
                </div>
              </LazyLoad>
              
              <LazyLoad delay={300} animationClass="fade-in-right">
                <Card className="p-6 bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-secondary mt-0.5" />
                    <div>
                      <span className="font-medium text-lg block">Flexibilidade Total</span>
                      <span className="text-lg text-muted-foreground">Horários que se adaptam à sua rotina</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Users className="w-5 h-5 text-secondary mt-0.5" />
                    <div>
                      <span className="font-medium text-lg block">Atenção Exclusiva</span>
                      <span className="text-lg text-muted-foreground">100% do tempo focado em você</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Award className="w-5 h-5 text-secondary mt-0.5" />
                    <div>
                      <span className="font-medium text-lg block">Progresso Acelerado</span>
                      <span className="text-lg text-muted-foreground">resultados visíveis desde o início</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-secondary mt-0.5" />
                    <div>
                      <span className="font-medium text-lg block">Ambiente Confortável</span>
                      <span className="text-lg text-muted-foreground">Aprenda sem pressão, no seu espaço</span>
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
                Serviços Oferecidos
              </h2>
            </LazyLoad>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <LazyLoad delay={200} animationClass="fade-in-scale">
              <Card className="hover:shadow-lg transition-shadow h-full flex flex-col">
                <div className="aspect-video w-full overflow-hidden rounded-lg">
                  <LazyImage 
                    src={aulasOnlineImage} 
                    alt="Aula Online" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader className="flex-shrink-0">
                  <CardTitle className="flex items-center gap-2">
                    <Video className="w-5 h-5 text-primary" />
                    Aula Online
                  </CardTitle>
                  <CardDescription>
                    Flexibilidade no conforto de casa
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col">
                  <ul className="space-y-2 text-sm mb-4 flex-grow">
                    <li>• Plataformas digitais interativas</li>
                    <li>• Material em tempo real</li>
                    <li>• Gravação das aula disponível</li>
                    <li>• Horários flexíveis</li>
                  </ul>
                  <div className="flex gap-2 mt-auto">
                    <a
                      href={`https://wa.me/${whatsappNumber}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1"
                    >
                      <Button className="w-full bg-green-500 hover:bg-green-600 text-white">
                        <WhatsAppIcon className="w-4 h-4" />
                      </Button>
                    </a>
                    <a
                      href="mailto:contato@auladeinglesemcasa.com"
                      className="flex-1"
                    >
                      <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                        <Mail className="w-4 h-4" />
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>
              </LazyLoad>

              <LazyLoad delay={300} animationClass="fade-in-scale">
              <Card className="hover:shadow-lg transition-shadow h-full flex flex-col">
                <div className="aspect-video w-full overflow-hidden rounded-lg">
                  <LazyImage 
                    src={aulasIndividuaisImage} 
                    alt="Aula Individual" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader className="flex-shrink-0">
                  <CardTitle className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-primary" />
                    Aula Individual
                  </CardTitle>
                  <CardDescription>
                    Atenção personalizada e foco total
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col">
                  <ul className="space-y-2 text-sm mb-4 flex-grow">
                    <li>• Metodologia personalizada</li>
                    <li>• Ritmo adaptado ao aluno</li>
                    <li>• Atenção exclusiva do professor</li>
                    <li>• Objetivos específicos</li>
                  </ul>
                  <div className="flex gap-2 mt-auto">
                    <a
                      href={`https://wa.me/${whatsappNumber}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1"
                    >
                      <Button className="w-full bg-green-500 hover:bg-green-600 text-white">
                        <WhatsAppIcon className="w-4 h-4" />
                      </Button>
                    </a>
                    <a
                      href="mailto:contato@auladeinglesemcasa.com"
                      className="flex-1"
                    >
                      <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                        <Mail className="w-4 h-4" />
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>
              </LazyLoad>

              <LazyLoad delay={400} animationClass="fade-in-scale">
              <Card className="hover:shadow-lg transition-shadow h-full flex flex-col">
                <div className="aspect-video w-full overflow-hidden rounded-lg">
                  <LazyImage 
                    src={aulaEmGrupoImage} 
                    alt="Aula em Grupo" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader className="flex-shrink-0">
                  <CardTitle className="flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-primary" />
                    Aula em Grupo
                  </CardTitle>
                  <CardDescription>
                    Aprendizado colaborativo
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col">
                  <ul className="space-y-2 text-sm mb-4 flex-grow">
                    <li>• Interação entre alunos</li>
                    <li>• Atividades em grupo</li>
                    <li>• Ambiente motivador</li>
                    <li>• Custo mais acessível</li>
                  </ul>
                  <div className="flex gap-2 mt-auto">
                    <a
                      href={`https://wa.me/${whatsappNumber}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1"
                    >
                      <Button className="w-full bg-green-500 hover:bg-green-600 text-white">
                        <WhatsAppIcon className="w-4 h-4" />
                      </Button>
                    </a>
                    <a
                      href="mailto:contato@auladeinglesemcasa.com"
                      className="flex-1"
                    >
                      <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                        <Mail className="w-4 h-4" />
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>
              </LazyLoad>

              <LazyLoad delay={500} animationClass="fade-in-scale">
              <Card className="hover:shadow-lg transition-shadow h-full flex flex-col">
                <div className="aspect-video w-full overflow-hidden rounded-lg">
                  <LazyImage 
                    src={aulasConversacaoImage} 
                    alt="Aula de Conversação" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader className="flex-shrink-0">
                  <CardTitle className="flex items-center gap-2">
                    <MessageCircle className="w-5 h-5 text-primary" />
                    Aula de Conversação
                  </CardTitle>
                  <CardDescription>
                    Desenvolva fluência e confiança
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col">
                  <ul className="space-y-2 text-sm mb-4 flex-grow">
                    <li>• Foco na comunicação oral</li>
                    <li>• Temas do cotidiano</li>
                    <li>• Correção de pronúncia</li>
                    <li>• Ganho de confiança</li>
                  </ul>
                  <div className="flex gap-2 mt-auto">
                    <a
                      href={`https://wa.me/${whatsappNumber}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1"
                    >
                      <Button className="w-full bg-green-500 hover:bg-green-600 text-white">
                        <WhatsAppIcon className="w-4 h-4" />
                      </Button>
                    </a>
                    <a
                      href="mailto:contato@auladeinglesemcasa.com"
                      className="flex-1"
                    >
                      <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                        <Mail className="w-4 h-4" />
                      </Button>
                    </a>
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
                    Sobre o Professor
                  </h2>
                  <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Andrew Christopher Rogers é um professor americano de inglês com mais de 10 anos de experiência, incluindo 5 anos com somente alunos brasileiros. Ele aprendeu português sozinho e mora em Campo Grande há 2 anos.
                  </p>
                  <Link to="/sobre">
                    <Button size="lg" className="inline-flex items-center gap-2">
                      Saiba Mais
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
                    Aula de Inglês em Casa em Campo Grande, MS
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
                        Enviar Email
                      </Button>
                    </a>
                  </div>
                </div>
              </LazyLoad>
              
              <LazyLoad delay={300} animationClass="fade-in-right">
                <div>
                  <div className="bg-background rounded-lg p-4 shadow-lg">
                    <iframe 
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119603.60236497651!2d-54.63553405!3d-20.481099800000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x444d80abce0fb79b%3A0x396cea11aa65ef09!2sAula%20de%20Ingl%C3%AAs%20em%20Casa!5e0!3m2!1sen!2sbr!4v1757595739185!5m2!1sen!2sbr" 
                      width="100%" 
                      height="250" 
                      style={{ border: 0 }} 
                      allowFullScreen="" 
                      loading="lazy" 
                      referrerPolicy="no-referrer-when-downgrade"
                      className="rounded-lg"
                    ></iframe>
                  </div>
                </div>
              </LazyLoad>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
