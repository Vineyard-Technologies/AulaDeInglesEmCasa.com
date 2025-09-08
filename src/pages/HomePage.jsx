import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon"
import { Footer } from "@/components/Footer"
import { Link } from "react-router-dom"
import homepageLogo from "@/assets/images/homepageLogo.webp"
import logoHorizontal from "@/assets/images/logoHorizontal.webp"
import seattleBackground from "@/assets/images/seattle.webp"
import aulasOnlineImage from "@/assets/images/aulasOnlineHomepage.webp"
import aulasIndividuaisImage from "@/assets/images/AulasIndividuaisHomepage.webp"
import aulaEmGrupoImage from "@/assets/images/aulaEmGrupoHomepage.webp"
import aulasConversacaoImage from "@/assets/images/aulasDeConversacaoHomepage.webp"
import andrewRogersImage from "@/assets/images/Andrew Rogers.webp"
import { 
  Phone, 
  MessageCircle, 
  Mail, 
  MapPin, 
  Clock,
  Users,
  BookOpen,
  Award,
  CheckCircle,
  FileText,
  Headphones,
  Video,
  Presentation,
  ArrowRight,
  Flag
} from "lucide-react"

export function HomePage() {
  const whatsappNumber = "5567996161199"
  const whatsappMessage = "Olá! Gostaria de saber mais sobre as aulas de inglês em casa."
  
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section 
        className="relative text-primary-foreground py-20 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${seattleBackground})` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="w-32 h-20 mx-auto flex items-center justify-center">
              <img 
                src={homepageLogo} 
                alt="Aulas de Inglês em Casa - Andrew Rogers" 
                className="max-w-full max-h-full object-contain"
              />
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Aulas de Inglês em Casa
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
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Transforme Seu Futuro com Inglês
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-lg mb-6 text-muted-foreground leading-relaxed">
                  Imagine poder se comunicar com confiança em inglês, abrir novas oportunidades 
                  profissionais e conectar-se com pessoas do mundo todo. Como professor americano 
                  nativo em Campo Grande, estou aqui para tornar esse sonho realidade, 
                  <strong className="text-foreground"> no conforto da sua casa</strong>.
                </p>
                
                <p className="text-lg mb-8 text-muted-foreground leading-relaxed">
                  Cada aula é uma jornada personalizada, adaptada ao seu ritmo e seus objetivos. 
                  Juntos, vamos construir sua fluência de forma natural e divertida.
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
                    <span className="font-medium">Aulas em domicílio em Campo Grande</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <BookOpen className="w-6 h-6 text-primary" />
                    <span className="font-medium">Metodologia personalizada para você</span>
                  </div>
                </div>
              </div>
              
              <Card className="p-6 bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center gap-2 text-xl">
                    <CheckCircle className="w-6 h-6 text-primary" />
                    Por Que Escolher Aulas de Inglês em Casa?
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-secondary mt-0.5" />
                    <div>
                      <span className="font-medium text-sm block">Flexibilidade Total</span>
                      <span className="text-xs text-muted-foreground">Horários que se adaptam à sua rotina</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Users className="w-5 h-5 text-secondary mt-0.5" />
                    <div>
                      <span className="font-medium text-sm block">Atenção Exclusiva</span>
                      <span className="text-xs text-muted-foreground">100% do tempo focado em você</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Award className="w-5 h-5 text-secondary mt-0.5" />
                    <div>
                      <span className="font-medium text-sm block">Progresso Acelerado</span>
                      <span className="text-xs text-muted-foreground">Resultados visíveis desde a primeira aula</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-secondary mt-0.5" />
                    <div>
                      <span className="font-medium text-sm block">Ambiente Confortável</span>
                      <span className="text-xs text-muted-foreground">Aprenda sem pressão, no seu espaço</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Serviços Oferecidos
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="hover:shadow-lg transition-shadow h-full flex flex-col">
                <div className="aspect-video w-full overflow-hidden rounded-lg">
                  <img 
                    src={aulasOnlineImage} 
                    alt="Aulas Online" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader className="flex-shrink-0">
                  <CardTitle className="flex items-center gap-2">
                    <Video className="w-5 h-5 text-primary" />
                    Aulas Online
                  </CardTitle>
                  <CardDescription>
                    Flexibilidade no conforto de casa
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col">
                  <ul className="space-y-2 text-sm mb-4 flex-grow">
                    <li>• Plataformas digitais interativas</li>
                    <li>• Material em tempo real</li>
                    <li>• Gravação das aulas disponível</li>
                    <li>• Horários flexíveis</li>
                  </ul>
                  <Link to="/servicos/aulas-online">
                    <Button className="w-full mt-auto">
                      Saiba Mais
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow h-full flex flex-col">
                <div className="aspect-video w-full overflow-hidden rounded-lg">
                  <img 
                    src={aulasIndividuaisImage} 
                    alt="Aulas Individuais" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader className="flex-shrink-0">
                  <CardTitle className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-primary" />
                    Aulas Individuais
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
                  <Link to="/servicos/aulas-individuais">
                    <Button className="w-full mt-auto">
                      Saiba Mais
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow h-full flex flex-col">
                <div className="aspect-video w-full overflow-hidden rounded-lg">
                  <img 
                    src={aulaEmGrupoImage} 
                    alt="Aulas em Grupo" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader className="flex-shrink-0">
                  <CardTitle className="flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-primary" />
                    Aulas em Grupo
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
                  <Link to="/servicos/aulas-em-grupo">
                    <Button className="w-full mt-auto">
                      Saiba Mais
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow h-full flex flex-col">
                <div className="aspect-video w-full overflow-hidden rounded-lg">
                  <img 
                    src={aulasConversacaoImage} 
                    alt="Aulas de Conversação" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader className="flex-shrink-0">
                  <CardTitle className="flex items-center gap-2">
                    <MessageCircle className="w-5 h-5 text-primary" />
                    Aulas de Conversação
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
                  <Link to="/servicos/aulas-conversacao">
                    <Button className="w-full mt-auto">
                      Saiba Mais
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* About the Teacher Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
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
              <div className="flex justify-center">
                <Link to="/sobre" className="block">
                  <div className="relative cursor-pointer">
                    <img 
                      src={andrewRogersImage} 
                      alt="Andrew Rogers - Professor de Inglês" 
                      className="w-80 h-80 object-cover rounded-full shadow-2xl"
                    />
                    <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/20 to-transparent"></div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location & Contact Section */}
      <section className="py-8 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-6 items-center">
              <div className="text-center flex flex-col justify-center">
                <div className="w-24 h-16 mx-auto flex items-center justify-center">
                  <img 
                    src={homepageLogo} 
                    alt="Aulas de Inglês em Casa - Andrew Rogers" 
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold mb-8">
                  Aulas de Inglês em Casa em Campo Grande, MS
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
              
              <div>
                <div className="bg-background rounded-lg p-4 shadow-lg">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119603.60236497635!2d-54.63553405!3d-20.481099800000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9486e6726b2b9f27%3A0xf5a8469ebc84d2c1!2sCampo%20Grande%2C%20State%20of%20Mato%20Grosso%20do%20Sul!5e0!3m2!1sen!2sbr!4v1757361385073!5m2!1sen!2sbr" 
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
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
