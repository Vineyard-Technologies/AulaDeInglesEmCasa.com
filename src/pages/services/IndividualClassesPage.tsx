import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { 
  Home, 
  User, 
  Clock, 
  Target, 
  CheckCircle, 
  MessageCircle,
  BookOpen,
  Award,
  MapPin
} from 'lucide-react'

export const IndividualClassesPage = () => {
  const whatsappNumber = "5567999999999"
  const whatsappMessage = "Olá! Gostaria de saber mais sobre as aulas individuais de inglês."

  return (
    <div className="min-h-screen bg-background py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Aulas Individuais de Inglês
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Aprendizado 100% personalizado no conforto da sua casa. 
              Atenção exclusiva do professor para acelerar seu progresso.
            </p>
          </div>
          
          {/* Hero Section */}
          <Card className="mb-16 overflow-hidden">
            <div className="grid lg:grid-cols-2">
              <div className="p-8 lg:p-12">
                <Badge className="mb-4">Modalidade Premium</Badge>
                <h2 className="text-3xl font-bold mb-6">
                  Ensino Personalizado em Domicílio
                </h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Com as aulas individuais, você tem 100% da atenção do professor, 
                  currículo adaptado aos seus objetivos e ritmo de aprendizado 
                  personalizado. O professor vai até sua casa com todo o material necessário.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    size="lg"
                    onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`, '_blank')}
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Agendar Avaliação
                  </Button>
                  <Button variant="outline" size="lg">
                    Ver Depoimentos
                  </Button>
                </div>
              </div>
              <div className="bg-gradient-to-br from-primary to-primary/80 p-8 lg:p-12 text-primary-foreground">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <User className="w-12 h-12 mx-auto mb-2" />
                    <div className="text-2xl font-bold">1:1</div>
                    <div className="text-sm">Atenção Exclusiva</div>
                  </div>
                  <div className="text-center">
                    <Home className="w-12 h-12 mx-auto mb-2" />
                    <div className="text-2xl font-bold">Casa</div>
                    <div className="text-sm">Sua Comodidade</div>
                  </div>
                  <div className="text-center">
                    <Target className="w-12 h-12 mx-auto mb-2" />
                    <div className="text-2xl font-bold">100%</div>
                    <div className="text-sm">Personalizado</div>
                  </div>
                  <div className="text-center">
                    <Clock className="w-12 h-12 mx-auto mb-2" />
                    <div className="text-2xl font-bold">Flexível</div>
                    <div className="text-sm">Seu Ritmo</div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
          
          {/* Benefits */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="text-center p-6">
              <CardHeader>
                <Target className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle>Foco Total</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  100% da atenção do professor direcionada para suas necessidades específicas 
                  e dificuldades individuais.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6">
              <CardHeader>
                <BookOpen className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle>Currículo Personalizado</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Material e metodologia adaptados aos seus objetivos, seja inglês para 
                  trabalho, viagens ou estudos.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6">
              <CardHeader>
                <Home className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle>Comodidade Total</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Aulas na sua casa, sem trânsito ou deslocamento. 
                  Ambiente familiar e confortável para o aprendizado.
                </p>
              </CardContent>
            </Card>
          </div>
          
          {/* What's Included */}
          <Card className="mb-16 p-8">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">O que está incluído</CardTitle>
              <p className="text-muted-foreground">
                Tudo que você precisa para ter sucesso no aprendizado do inglês
              </p>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <h3 className="font-semibold">Material Didático Completo</h3>
                      <p className="text-sm text-muted-foreground">
                        Livros, apostilas e recursos digitais adequados ao seu nível
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <h3 className="font-semibold">Avaliação Inicial Gratuita</h3>
                      <p className="text-sm text-muted-foreground">
                        30 minutos para conhecer seu nível e definir objetivos
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <h3 className="font-semibold">Exercícios Personalizados</h3>
                      <p className="text-sm text-muted-foreground">
                        Atividades criadas especialmente para suas necessidades
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <h3 className="font-semibold">Flexibilidade de Horários</h3>
                      <p className="text-sm text-muted-foreground">
                        Agende suas aulas nos horários que funcionam para você
                      </p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <h3 className="font-semibold">Relatórios de Progresso</h3>
                      <p className="text-sm text-muted-foreground">
                        Acompanhamento detalhado da sua evolução
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <h3 className="font-semibold">Suporte Contínuo</h3>
                      <p className="text-sm text-muted-foreground">
                        Tire dúvidas por WhatsApp entre as aulas
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <h3 className="font-semibold">Preparação para Exames</h3>
                      <p className="text-sm text-muted-foreground">
                        TOEFL, IELTS, Cambridge e outros certificados
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <h3 className="font-semibold">Professor Nativo</h3>
                      <p className="text-sm text-muted-foreground">
                        Pronúncia autêntica e cultura do idioma
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Pricing */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Investimento</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center">
                <CardHeader>
                  <CardTitle>Aula Avulsa</CardTitle>
                  <div className="text-3xl font-bold text-primary">R$ 100<span className="text-lg text-muted-foreground">/hora</span></div>
                  <p className="text-muted-foreground">Sem compromisso</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm mb-6">
                    <li>• Aula de 60 minutos</li>
                    <li>• Material incluído</li>
                    <li>• Flexibilidade total</li>
                  </ul>
                  <Button variant="outline" className="w-full">Agendar Aula</Button>
                </CardContent>
              </Card>
              
              <Card className="relative border-primary">
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary">
                  Mais Escolhido
                </Badge>
                <CardHeader className="text-center">
                  <CardTitle>Pacote Mensal</CardTitle>
                  <div className="text-3xl font-bold text-primary">R$ 90<span className="text-lg text-muted-foreground">/hora</span></div>
                  <p className="text-muted-foreground">4 aulas por mês</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm mb-6">
                    <li>• Economia de R$ 40/mês</li>
                    <li>• Aulas de 60 ou 90min</li>
                    <li>• Material premium</li>
                    <li>• Suporte WhatsApp</li>
                  </ul>
                  <Button className="w-full">Escolher Pacote</Button>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardHeader>
                  <CardTitle>Intensivo</CardTitle>
                  <div className="text-3xl font-bold text-primary">R$ 85<span className="text-lg text-muted-foreground">/hora</span></div>
                  <p className="text-muted-foreground">8 aulas por mês</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm mb-6">
                    <li>• Economia de R$ 120/mês</li>
                    <li>• Progresso acelerado</li>
                    <li>• Material especializado</li>
                    <li>• Relatórios semanais</li>
                  </ul>
                  <Button variant="outline" className="w-full">Escolher Pacote</Button>
                </CardContent>
              </Card>
            </div>
          </div>
          
          {/* Service Area */}
          <Card className="p-8 bg-muted/50">
            <CardHeader className="text-center">
              <CardTitle className="flex items-center justify-center gap-2 text-2xl">
                <MapPin className="w-6 h-6" />
                Área de Atendimento
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-muted-foreground mb-6">
                Atendo em domicílio em toda Campo Grande, MS e região metropolitana.
              </p>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div>
                  <h3 className="font-semibold mb-2">Região Central</h3>
                  <p className="text-muted-foreground">Centro, Amambaí, Monte Castelo</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Zona Sul</h3>
                  <p className="text-muted-foreground">Vilas Boas, Chácara Cachoeira</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Outras Regiões</h3>
                  <p className="text-muted-foreground">Consulte disponibilidade</p>
                </div>
              </div>
              <Button 
                className="mt-6"
                onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Gostaria de verificar se vocês atendem na minha região.")}`, '_blank')}
              >
                Verificar Atendimento
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
