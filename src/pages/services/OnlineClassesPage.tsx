import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { 
  Monitor, 
  Wifi, 
  Clock, 
  Users, 
  CheckCircle, 
  MessageCircle,
  Video,
  Headphones,
  FileText
} from 'lucide-react'

export const OnlineClassesPage = () => {
  const whatsappNumber = "5567999999999"
  const whatsappMessage = "Olá! Gostaria de saber mais sobre as aulas online de inglês."

  return (
    <div className="min-h-screen bg-background py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Aulas Online de Inglês
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Aprenda inglês no conforto da sua casa com a mesma qualidade das aulas presenciais. 
              Flexibilidade total para se adequar à sua rotina.
            </p>
          </div>
          
          {/* Hero Section */}
          <Card className="mb-16 overflow-hidden">
            <div className="grid lg:grid-cols-2">
              <div className="p-8 lg:p-12">
                <Badge className="mb-4">Modalidade Mais Procurada</Badge>
                <h2 className="text-3xl font-bold mb-6">
                  Tecnologia a Serviço do Seu Aprendizado
                </h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Nossas aulas online utilizam plataformas modernas e recursos interativos 
                  para proporcionar uma experiência de aprendizado dinâmica e eficaz, 
                  sem perder a personalização das aulas individuais.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    size="lg"
                    onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`, '_blank')}
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Agendar Aula Teste
                  </Button>
                  <Button variant="outline" size="lg">
                    Ver Demonstração
                  </Button>
                </div>
              </div>
              <div className="bg-gradient-to-br from-primary to-primary/80 p-8 lg:p-12 text-primary-foreground">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <Monitor className="w-12 h-12 mx-auto mb-2" />
                    <div className="text-2xl font-bold">HD</div>
                    <div className="text-sm">Qualidade</div>
                  </div>
                  <div className="text-center">
                    <Wifi className="w-12 h-12 mx-auto mb-2" />
                    <div className="text-2xl font-bold">24/7</div>
                    <div className="text-sm">Suporte</div>
                  </div>
                  <div className="text-center">
                    <Clock className="w-12 h-12 mx-auto mb-2" />
                    <div className="text-2xl font-bold">Flexível</div>
                    <div className="text-sm">Horários</div>
                  </div>
                  <div className="text-center">
                    <Users className="w-12 h-12 mx-auto mb-2" />
                    <div className="text-2xl font-bold">1:1</div>
                    <div className="text-sm">Individual</div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
          
          {/* Features */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="text-center p-6">
              <CardHeader>
                <Video className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle>Videoconferência HD</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Plataformas profissionais com qualidade de vídeo e áudio superior 
                  para uma comunicação clara e natural.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6">
              <CardHeader>
                <FileText className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle>Material Interativo</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Apostilas digitais, exercícios online e recursos multimídia 
                  compartilhados em tempo real durante a aula.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6">
              <CardHeader>
                <Headphones className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle>Gravações das Aulas</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Acesso às gravações das aulas para revisar conteúdo e 
                  acompanhar seu progresso quando quiser.
                </p>
              </CardContent>
            </Card>
          </div>
          
          {/* Pricing Plans */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Planos e Preços</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="relative">
                <CardHeader className="text-center">
                  <CardTitle>Básico</CardTitle>
                  <div className="text-3xl font-bold text-primary">R$ 70<span className="text-lg text-muted-foreground">/hora</span></div>
                  <p className="text-muted-foreground">Perfeito para começar</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Aulas individuais de 60min</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Material digital incluído</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Suporte por WhatsApp</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Flexibilidade de horários</span>
                    </li>
                  </ul>
                  <Button className="w-full mt-6">Escolher Plano</Button>
                </CardContent>
              </Card>
              
              <Card className="relative border-primary shadow-lg">
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary">
                  Mais Popular
                </Badge>
                <CardHeader className="text-center">
                  <CardTitle>Intermediário</CardTitle>
                  <div className="text-3xl font-bold text-primary">R$ 80<span className="text-lg text-muted-foreground">/hora</span></div>
                  <p className="text-muted-foreground">Ideal para progresso rápido</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Aulas individuais de 90min</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Material premium incluído</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Gravações das aulas</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Exercícios personalizados</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Suporte 24/7</span>
                    </li>
                  </ul>
                  <Button className="w-full mt-6">Escolher Plano</Button>
                </CardContent>
              </Card>
              
              <Card className="relative">
                <CardHeader className="text-center">
                  <CardTitle>Avançado</CardTitle>
                  <div className="text-3xl font-bold text-primary">R$ 90<span className="text-lg text-muted-foreground">/hora</span></div>
                  <p className="text-muted-foreground">Para fluência completa</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Aulas de 90min intensivas</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Material especializado</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Preparação para certificações</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Inglês para negócios</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Mentoria personalizada</span>
                    </li>
                  </ul>
                  <Button className="w-full mt-6">Escolher Plano</Button>
                </CardContent>
              </Card>
            </div>
          </div>
          
          {/* FAQ */}
          <Card className="p-8">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Perguntas Frequentes</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">Preciso de equipamentos especiais?</h3>
                    <p className="text-sm text-muted-foreground">
                      Apenas um computador, tablet ou smartphone com câmera e microfone, 
                      além de uma conexão estável de internet.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Como funciona a primeira aula?</h3>
                    <p className="text-sm text-muted-foreground">
                      A primeira aula é uma avaliação gratuita de 30 minutos onde conhecemos 
                      seus objetivos e testamos a tecnologia.
                    </p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">Posso cancelar uma aula?</h3>
                    <p className="text-sm text-muted-foreground">
                      Sim, com até 4 horas de antecedência. Cancelamentos de última hora 
                      podem ser cobrados.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">As aulas são gravadas?</h3>
                    <p className="text-sm text-muted-foreground">
                      Sim, mediante autorização. As gravações ficam disponíveis por 30 dias 
                      para revisão do conteúdo.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
