import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { GraduationCap, Award, Users, MapPin, Languages, Target } from 'lucide-react'

export const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">
            Sobre Andrew Rogers
          </h1>
          
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="text-center md:text-left">
              <Avatar className="w-48 h-48 mx-auto md:mx-0 mb-6 border-4 border-primary/20">
                <AvatarImage src="/api/placeholder/400/400" alt="Andrew Rogers" />
                <AvatarFallback className="text-4xl font-bold text-primary bg-primary/10">AR</AvatarFallback>
              </Avatar>
              
              <h2 className="text-2xl font-bold mb-4">Professor Nativo de Inglês</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Especialista em aulas particulares e ensino personalizado
              </p>
              
              <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                <Badge variant="secondary">TEFL Certificado</Badge>
                <Badge variant="secondary">10+ Anos</Badge>
                <Badge variant="secondary">200+ Alunos</Badge>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-6">Minha História</h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Olá! Sou Andrew Rogers, professor de inglês nativo com mais de 10 anos de experiência 
                  ensinando estudantes brasileiros. Vim para o Brasil em 2014 e me apaixonei pela cultura 
                  e hospitalidade do povo brasileiro.
                </p>
                <p>
                  Especializo-me em aulas particulares em domicílio, oferecendo um ambiente confortável 
                  e personalizado para o aprendizado. Acredito que cada aluno é único e merece um método 
                  de ensino adaptado às suas necessidades específicas.
                </p>
                <p>
                  Meu objetivo é não apenas ensinar inglês, mas também transmitir confiança aos meus 
                  alunos para que se sintam à vontade para se comunicar em qualquer situação.
                </p>
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <Card className="text-center p-6">
              <CardHeader>
                <GraduationCap className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle>Formação</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>Certificação TEFL/TESOL</li>
                  <li>Bacharel em Educação</li>
                  <li>Especialização em ESL</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6">
              <CardHeader>
                <Award className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle>Experiência</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>10+ anos ensinando</li>
                  <li>200+ alunos atendidos</li>
                  <li>Métodos comprovados</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6">
              <CardHeader>
                <Languages className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle>Especialidades</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>Conversação fluente</li>
                  <li>Inglês para negócios</li>
                  <li>Preparação para exames</li>
                </ul>
              </CardContent>
            </Card>
          </div>
          
          <Card className="p-8 bg-muted/50">
            <CardHeader className="text-center">
              <CardTitle className="flex items-center justify-center gap-2 text-2xl">
                <Target className="w-6 h-6" />
                Minha Missão
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Minha missão é ajudar brasileiros a conquistarem fluência em inglês através de métodos 
                personalizados e eficazes. Acredito que o aprendizado deve ser prazeroso e adaptado 
                ao estilo de vida de cada aluno.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
