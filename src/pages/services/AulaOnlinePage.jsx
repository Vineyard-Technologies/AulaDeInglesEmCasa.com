import { useEffect } from "react"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon"
import { updateMetaTags, addStructuredData } from "@/utils/seo"
import { 
  Video, 
  Clock, 
  Users, 
  CheckCircle, 
  Wifi, 
  Monitor,
  Headphones,
  Calendar,
  Mail
} from "lucide-react"

const aulaOnlineMetaData = {
  title: "Aulas de Inglês Online | Andrew Rogers | Campo Grande, MS",
  description: "Aulas de inglês online com professor americano nativo. Flexibilidade de horário, plataforma segura e metodologia personalizada. Agende sua aula!",
  canonical: "https://auladeinglesemcasa.com/servicos/aula-online"
}

export function AulaOnlinePage() {
  const whatsappNumber = "5567996161199"
  
  useEffect(() => {
    updateMetaTags(aulaOnlineMetaData)
  }, [])

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-primary text-primary-foreground py-20 overflow-hidden">
        {/* Background Image */}
        <img 
          src="/Mountains.webp" 
          alt="Mountains background" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-white/20 rounded-full">
                <Video className="w-12 h-12" />
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Aulas de Inglês Online
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90">
              Aprenda inglês no conforto da sua casa com professor americano nativo
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
                  WhatsApp
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
                  Enviar Email
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Vantagens das Aulas Online</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <Clock className="w-8 h-8 text-primary mx-auto mb-2" />
                <CardTitle className="text-lg">Flexibilidade Total</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">
                  Escolha os melhores horários para você, incluindo fins de semana
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <Monitor className="w-8 h-8 text-primary mx-auto mb-2" />
                <CardTitle className="text-lg">Plataforma Segura</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">
                  Utilizamos Google Meet e Zoom para aulas estáveis e seguras
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <Headphones className="w-8 h-8 text-primary mx-auto mb-2" />
                <CardTitle className="text-lg">Áudio de Qualidade</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">
                  Pronúncia clara e nativa para melhor compreensão
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <Users className="w-8 h-8 text-primary mx-auto mb-2" />
                <CardTitle className="text-lg">Atenção Individual</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">
                  Foco total no seu progresso e necessidades específicas
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Como Funcionam as Aulas Online</h2>
          
          <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold mb-3">Agendamento</h3>
              <p className="text-muted-foreground">
                Entre em contato via WhatsApp para agendar sua aula no horário que funcionar melhor para você
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold mb-3">Preparação</h3>
              <p className="text-muted-foreground">
                Você recebe o link da reunião e as orientações necessárias antes da aula
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold mb-3">Aula Personalizada</h3>
              <p className="text-muted-foreground">
                Aula focada no seu nível e objetivos, com material didático compartilhado em tempo real
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Requisitos Técnicos</h2>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Wifi className="w-5 h-5" />
                  O que você precisa
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                    <span>Conexão estável com a internet (mínimo 5 Mbps)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                    <span>Computador, tablet ou celular com câmera</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                    <span>Fones de ouvido ou ambiente silencioso</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                    <span>Caderno e caneta para anotações</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 text-primary-foreground overflow-hidden">
        {/* Background Image */}
        <img 
          src="/MountainsAndBeach.webp" 
          alt="MountainsAndBeach background" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60"></div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl font-bold mb-4">Pronto para Começar?</h2>
          <p className="text-xl mb-8 text-primary-foreground/90">
            Agende sua primeira aula online e experimente a qualidade do ensino personalizado
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
                WhatsApp
              </a>
            </Button>
            
            <a href="mailto:Contato@auladeinglesemcasa.com">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground border-primary-foreground/20"
              >
                <Mail className="w-5 h-5" />
                Enviar Email
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}