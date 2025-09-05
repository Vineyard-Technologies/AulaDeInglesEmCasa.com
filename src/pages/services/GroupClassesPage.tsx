import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Users, MessageCircle, CheckCircle, UserPlus, TrendingUp, DollarSign } from 'lucide-react'

export const GroupClassesPage = () => {
  const whatsappNumber = "5567999999999"
  const whatsappMessage = "Olá! Gostaria de saber mais sobre as aulas em grupo de inglês."

  return (
    <div className="min-h-screen bg-background py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Aulas em Grupo de Inglês
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Aprenda inglês em pequenos grupos e economize! Interação social 
              e aprendizado colaborativo com preços mais acessíveis.
            </p>
          </div>
          
          {/* Benefits */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="text-center p-6">
              <CardHeader>
                <DollarSign className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle>Economia de até 40%</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Divida os custos com outros alunos sem perder a qualidade do ensino.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6">
              <CardHeader>
                <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle>Interação Social</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Pratique conversação com outros estudantes em ambiente dinâmico.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6">
              <CardHeader>
                <TrendingUp className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle>Motivação Extra</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  O progresso em grupo gera motivação e compromisso mútuos.
                </p>
              </CardContent>
            </Card>
          </div>
          
          {/* Group Options */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Card>
              <CardHeader>
                <Badge className="w-fit">2-3 Pessoas</Badge>
                <CardTitle>Grupo Pequeno</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-primary mb-4">
                  R$ 60<span className="text-lg text-muted-foreground">/hora por pessoa</span>
                </div>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span className="text-sm">Máximo 3 pessoas</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span className="text-sm">Atenção quase individual</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span className="text-sm">Flexibilidade de horários</span>
                  </li>
                </ul>
                <Button className="w-full">Formar Grupo</Button>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <Badge className="w-fit">4-6 Pessoas</Badge>
                <CardTitle>Grupo Padrão</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-primary mb-4">
                  R$ 45<span className="text-lg text-muted-foreground">/hora por pessoa</span>
                </div>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span className="text-sm">4 a 6 participantes</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span className="text-sm">Interação dinâmica</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span className="text-sm">Máxima economia</span>
                  </li>
                </ul>
                <Button variant="outline" className="w-full">Entrar em Lista</Button>
              </CardContent>
            </Card>
          </div>
          
          {/* How it Works */}
          <Card className="p-8 mb-16">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Como Funciona</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">1</div>
                  <h3 className="font-semibold mb-2">Cadastro</h3>
                  <p className="text-sm text-muted-foreground">Informe seu nível e disponibilidade</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">2</div>
                  <h3 className="font-semibold mb-2">Formação</h3>
                  <p className="text-sm text-muted-foreground">Formamos grupos com níveis similares</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">3</div>
                  <h3 className="font-semibold mb-2">Início</h3>
                  <p className="text-sm text-muted-foreground">Aula experimental gratuita</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">4</div>
                  <h3 className="font-semibold mb-2">Progresso</h3>
                  <p className="text-sm text-muted-foreground">Acompanhamento contínuo</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* CTA */}
          <Card className="p-8 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground text-center">
            <CardHeader>
              <CardTitle className="text-2xl">Pronto para Começar?</CardTitle>
              <p className="text-primary-foreground/90">
                Entre em contato e forme seu grupo de estudos de inglês!
              </p>
            </CardHeader>
            <CardContent>
              <Button 
                size="lg" 
                variant="secondary"
                onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`, '_blank')}
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                Formar Meu Grupo
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
