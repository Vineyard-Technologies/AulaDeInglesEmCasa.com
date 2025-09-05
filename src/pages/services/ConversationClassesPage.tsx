import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { MessageSquare, MessageCircle, CheckCircle, Mic, Globe, Coffee } from 'lucide-react'

export const ConversationClassesPage = () => {
  const whatsappNumber = "5567999999999"
  const whatsappMessage = "Olá! Gostaria de saber mais sobre as aulas de conversação em inglês."

  return (
    <div className="min-h-screen bg-background py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Aulas de Conversação em Inglês
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Desenvolva fluência e confiança na conversação com um professor nativo. 
              Foco total na prática oral e compreensão auditiva.
            </p>
          </div>
          
          {/* Hero Section */}
          <Card className="mb-16 overflow-hidden">
            <div className="grid lg:grid-cols-2">
              <div className="p-8 lg:p-12">
                <Badge className="mb-4">Especialidade do Professor</Badge>
                <h2 className="text-3xl font-bold mb-6">
                  Fale Inglês com Confiança
                </h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Aulas focadas exclusivamente na conversação. Aprenda a se expressar 
                  naturalmente, melhore sua pronúncia e ganhe fluência em situações 
                  reais do dia a dia.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    size="lg"
                    onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`, '_blank')}
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Experimentar Grátis
                  </Button>
                  <Button variant="outline" size="lg">
                    Ver Metodologia
                  </Button>
                </div>
              </div>
              <div className="bg-gradient-to-br from-primary to-primary/80 p-8 lg:p-12 text-primary-foreground">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <MessageSquare className="w-12 h-12 mx-auto mb-2" />
                    <div className="text-2xl font-bold">100%</div>
                    <div className="text-sm">Conversação</div>
                  </div>
                  <div className="text-center">
                    <Globe className="w-12 h-12 mx-auto mb-2" />
                    <div className="text-2xl font-bold">Nativo</div>
                    <div className="text-sm">Professor</div>
                  </div>
                  <div className="text-center">
                    <Mic className="w-12 h-12 mx-auto mb-2" />
                    <div className="text-2xl font-bold">Real</div>
                    <div className="text-sm">Situações</div>
                  </div>
                  <div className="text-center">
                    <Coffee className="w-12 h-12 mx-auto mb-2" />
                    <div className="text-2xl font-bold">Relaxado</div>
                    <div className="text-sm">Ambiente</div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
          
          {/* Focus Areas */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Áreas de Foco</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center p-6">
                <CardHeader>
                  <Mic className="w-12 h-12 text-primary mx-auto mb-4" />
                  <CardTitle>Pronúncia e Fluência</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Correção de pronúncia, entonação e ritmo da fala para soar mais natural.
                  </p>
                  <ul className="text-sm space-y-1">
                    <li>• Sons difíceis para brasileiros</li>
                    <li>• Redução de sotaque</li>
                    <li>• Linking sounds</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="text-center p-6">
                <CardHeader>
                  <Globe className="w-12 h-12 text-primary mx-auto mb-4" />
                  <CardTitle>Situações Reais</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Prática de conversação em contextos do dia a dia e profissionais.
                  </p>
                  <ul className="text-sm space-y-1">
                    <li>• Apresentações e meetings</li>
                    <li>• Viagens e turismo</li>
                    <li>• Small talk e networking</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="text-center p-6">
                <CardHeader>
                  <MessageSquare className="w-12 h-12 text-primary mx-auto mb-4" />
                  <CardTitle>Expressões Nativas</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Aprenda phrasal verbs, idioms e expressões que nativos realmente usam.
                  </p>
                  <ul className="text-sm space-y-1">
                    <li>• Phrasal verbs essenciais</li>
                    <li>• Gírias apropriadas</li>
                    <li>• Expressões coloquiais</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
          
          {/* Class Types */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Tipos de Aula</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <Badge className="w-fit">Individual</Badge>
                  <CardTitle>Conversação 1:1</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-primary mb-4">
                    R$ 80<span className="text-lg text-muted-foreground">/hora</span>
                  </div>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Atenção exclusiva</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Tópicos personalizados</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Correção imediata</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Flexibilidade total</span>
                    </li>
                  </ul>
                  <Button className="w-full">Agendar Aula</Button>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <Badge className="w-fit">Grupo</Badge>
                  <CardTitle>Conversation Club</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-primary mb-4">
                    R$ 40<span className="text-lg text-muted-foreground">/hora</span>
                  </div>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Grupos de 4-6 pessoas</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Debates e discussões</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Networking em inglês</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm">Preço acessível</span>
                    </li>
                  </ul>
                  <Button variant="outline" className="w-full">Entrar no Clube</Button>
                </CardContent>
              </Card>
            </div>
          </div>
          
          {/* Topics Examples */}
          <Card className="p-8 mb-16 bg-muted/50">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Tópicos de Conversação</CardTitle>
              <p className="text-muted-foreground">
                Alguns exemplos de temas que praticamos nas aulas
              </p>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-4 gap-4">
                <div className="text-center">
                  <h3 className="font-semibold mb-2">Profissional</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>Job interviews</li>
                    <li>Presentations</li>
                    <li>Meetings</li>
                    <li>Networking</li>
                  </ul>
                </div>
                <div className="text-center">
                  <h3 className="font-semibold mb-2">Viagens</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>Airport/Hotel</li>
                    <li>Ordering food</li>
                    <li>Asking directions</li>
                    <li>Shopping</li>
                  </ul>
                </div>
                <div className="text-center">
                  <h3 className="font-semibold mb-2">Social</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>Small talk</li>
                    <li>Making friends</li>
                    <li>Cultural topics</li>
                    <li>Current events</li>
                  </ul>
                </div>
                <div className="text-center">
                  <h3 className="font-semibold mb-2">Acadêmico</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>Presentations</li>
                    <li>Debates</li>
                    <li>Research topics</li>
                    <li>Academic writing</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* CTA */}
          <Card className="p-8 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground text-center">
            <CardHeader>
              <CardTitle className="text-2xl">Comece a Falar Inglês Hoje!</CardTitle>
              <p className="text-primary-foreground/90">
                Primeira aula de conversação gratuita para avaliar seu nível
              </p>
            </CardHeader>
            <CardContent>
              <Button 
                size="lg" 
                variant="secondary"
                onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`, '_blank')}
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                Agendar Aula Grátis
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
