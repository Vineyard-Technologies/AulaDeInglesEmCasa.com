import { useEffect } from "react"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon"
import { updateMetaTags, addStructuredData } from "@/utils/seo"
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
  title: "Aulas Particulares de Inglês | Andrew Rogers | Campo Grande, MS",
  description: "Aulas particulares de inglês com professor americano nativo. Atenção 100% personalizada, horários flexíveis e metodologia adaptada ao seu ritmo.",
  canonical: "https://auladeinglesemcasa.com/servicos/aula-individual"
}

export function AulaIndividualPage() {
  const whatsappNumber = "5567996161199"
  
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
              Aulas Particulares de Inglês
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90">
              Atenção 100% personalizada com professor americano nativo
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
          <h2 className="text-3xl font-bold text-center mb-12">Por que Escolher Aulas Particulares?</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <Target className="w-8 h-8 text-primary mx-auto mb-2" />
                <CardTitle className="text-lg">Foco Total</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">
                  100% da atenção do professor direcionada para você e seus objetivos específicos
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <BookOpen className="w-8 h-8 text-primary mx-auto mb-2" />
                <CardTitle className="text-lg">Método Personalizado</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">
                  Conteúdo e ritmo adaptados ao seu nível e estilo de aprendizagem
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <Clock className="w-8 h-8 text-primary mx-auto mb-2" />
                <CardTitle className="text-lg">Horário Flexível</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">
                  Agende conforme sua disponibilidade, incluindo fins de semana
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <MessageCircle className="w-8 h-8 text-primary mx-auto mb-2" />
                <CardTitle className="text-lg">Mais Conversação</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">
                  Máximo tempo de prática oral sem divisão com outros alunos
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <Award className="w-8 h-8 text-primary mx-auto mb-2" />
                <CardTitle className="text-lg">Progresso Rápido</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">
                  Aprendizado acelerado com correções e feedback imediatos
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <Calendar className="w-8 h-8 text-primary mx-auto mb-2" />
                <CardTitle className="text-lg">Sem Pressa</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">
                  Aprenda no seu ritmo, sem pressão de acompanhar outros alunos
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Perfect For Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Ideal Para Quem</h2>
          
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>Busca Resultados Rápidos</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                    <span>Precisa do inglês para trabalho ou viagem</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                    <span>Tem prazos específicos para alcançar objetivos</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                    <span>Quer preparação para entrevistas em inglês</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>Prefere Atenção Individual</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                    <span>Se sente tímido em grupos</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                    <span>Quer corrigir erros específicos na pronúncia</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                    <span>Tem necessidades muito específicas de aprendizado</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Nossa Metodologia</h2>
          
          <div className="max-w-4xl mx-auto grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="text-lg font-semibold mb-2">Avaliação</h3>
              <p className="text-muted-foreground text-sm">
                Identificamos seu nível atual e objetivos específicos
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="text-lg font-semibold mb-2">Planejamento</h3>
              <p className="text-muted-foreground text-sm">
                Criamos um plano personalizado para suas necessidades
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="text-lg font-semibold mb-2">Execução</h3>
              <p className="text-muted-foreground text-sm">
                Aulas focadas com material adaptado ao seu ritmo
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                4
              </div>
              <h3 className="text-lg font-semibold mb-2">Acompanhamento</h3>
              <p className="text-muted-foreground text-sm">
                Monitoramento contínuo do progresso e ajustes
              </p>
            </div>
          </div>
        </div>
      </section>

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
          <h2 className="text-3xl font-bold mb-4">Invista no Seu Futuro</h2>
          <p className="text-xl mb-8 text-primary-foreground/90">
            Aulas particulares são o investimento mais eficiente no seu aprendizado de inglês
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
