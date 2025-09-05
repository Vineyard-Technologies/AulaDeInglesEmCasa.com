import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { 
  MessageCircle, 
  MapPin, 
  GraduationCap, 
  Award, 
  Users, 
  BookOpen,
  Globe,
  Star,
  Calendar,
  Phone
} from "lucide-react"

export function AboutPage() {
  const whatsappNumber = "5567999999999"
  const whatsappMessage = "Olá! Vi seu perfil e gostaria de saber mais sobre as aulas de inglês."

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 to-primary/5 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Avatar className="w-40 h-40 mx-auto mb-6 border-4 border-primary/20">
              <AvatarImage src="/api/placeholder/400/400" alt="Andrew Rogers" />
              <AvatarFallback className="text-3xl font-bold text-primary bg-primary/10">AR</AvatarFallback>
            </Avatar>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Sobre Andrew Rogers
            </h1>
            <p className="text-xl text-muted-foreground mb-6">
              Professor de Inglês Especializado em Aulas Domiciliares
            </p>
            <div className="flex items-center justify-center gap-2 mb-8">
              <MapPin className="w-5 h-5 text-primary" />
              <span className="text-lg">Campo Grande, Mato Grosso do Sul</span>
            </div>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              {/* Biography */}
              <div>
                <h2 className="text-3xl font-bold mb-6">Minha História</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Olá! Sou Andrew Rogers, professor de inglês nativo com mais de 10 anos de experiência 
                    ensinando brasileiro. Minha paixão por ensinar começou quando me mudei para o Brasil 
                    e percebi o quanto o inglês pode transformar a vida das pessoas.
                  </p>
                  <p>
                    Especializei-me em aulas domiciliares porque acredito que o aprendizado acontece melhor 
                    em um ambiente confortável e familiar. Cada aluno é único, e meu método de ensino é 
                    completamente personalizado para atender às suas necessidades específicas.
                  </p>
                  <p>
                    Ao longo dos anos, ajudei centenas de estudantes a alcançar seus objetivos, desde 
                    crianças dando os primeiros passos no idioma até executivos se preparando para 
                    reuniões internacionais.
                  </p>
                </div>
              </div>

              {/* Qualifications */}
              <div>
                <h2 className="text-3xl font-bold mb-6">Qualificações</h2>
                <div className="space-y-4">
                  <Card>
                    <CardHeader className="pb-3">
                      <CardTitle className="flex items-center gap-2 text-lg">
                        <GraduationCap className="w-5 h-5 text-primary" />
                        Formação Acadêmica
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• Certificação TEFL (Teaching English as a Foreign Language)</li>
                        <li>• Bacharelado em Educação - University College London</li>
                        <li>• Curso de Especialização em Metodologia de Ensino</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-3">
                      <CardTitle className="flex items-center gap-2 text-lg">
                        <Award className="w-5 h-5 text-primary" />
                        Experiência Profissional
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• 10+ anos ensinando inglês no Brasil</li>
                        <li>• 500+ alunos atendidos com sucesso</li>
                        <li>• Especialista em Business English e Conversação</li>
                        <li>• Preparação para exames internacionais (TOEFL, IELTS)</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Minha Metodologia de Ensino
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle>Personalização Total</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Cada aula é planejada especificamente para você, considerando seu nível, 
                    objetivos e estilo de aprendizagem.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <BookOpen className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle>Método Comunicativo</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Foco na comunicação real e prática, usando situações do dia a dia 
                    para acelerar seu aprendizado.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Globe className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle>Imersão Cultural</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Aprenda não apenas o idioma, mas também a cultura dos países 
                    de língua inglesa.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Resultados Comprovados
            </h2>
            
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-primary mb-2">500+</div>
                <p className="text-muted-foreground">Alunos Atendidos</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">10+</div>
                <p className="text-muted-foreground">Anos de Experiência</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">95%</div>
                <p className="text-muted-foreground">Taxa de Satisfação</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">24/7</div>
                <p className="text-muted-foreground">Suporte via WhatsApp</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              O que Meus Alunos Dizem
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4">
                    "Andrew é um professor excepcional! Suas aulas são dinâmicas e personalizadas. 
                    Em 6 meses consegui a fluência que precisava para meu trabalho."
                  </p>
                  <div className="flex items-center gap-3">
                    <Avatar className="w-10 h-10">
                      <AvatarFallback>MC</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold">Maria Clara</p>
                      <p className="text-sm text-muted-foreground">Executiva de Marketing</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4">
                    "Meu filho estava com dificuldades na escola. Com as aulas do Andrew, 
                    não só melhorou as notas como desenvolveu amor pelo inglês!"
                  </p>
                  <div className="flex items-center gap-3">
                    <Avatar className="w-10 h-10">
                      <AvatarFallback>RS</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold">Roberto Silva</p>
                      <p className="text-sm text-muted-foreground">Pai do João (12 anos)</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4">
                    "Preparação para o IELTS foi perfeita! Andrew conhece muito bem os exames 
                    e me ajudou a conseguir a nota que precisava para estudar no exterior."
                  </p>
                  <div className="flex items-center gap-3">
                    <Avatar className="w-10 h-10">
                      <AvatarFallback>LC</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold">Lucas Costa</p>
                      <p className="text-sm text-muted-foreground">Estudante Universitário</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Vamos Começar Sua Jornada no Inglês?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Agende uma aula experimental gratuita e descubra como posso ajudar você 
              a alcançar seus objetivos no inglês.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-accent hover:bg-accent/90"
                onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`, '_blank')}
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Agendar Aula Experimental
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => window.open(`tel:+${whatsappNumber}`, '_self')}
              >
                <Phone className="w-5 h-5 mr-2" />
                Ligar Agora
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
