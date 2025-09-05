import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
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
  Presentation
} from "lucide-react"

export function HomePage() {
  const whatsappNumber = "5567999999999"
  const whatsappMessage = "Olá! Gostaria de saber mais sobre as aulas de inglês em casa."
  
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary to-primary/80 text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <Avatar className="w-32 h-32 mx-auto mb-6 border-4 border-primary-foreground/20">
              <AvatarImage src="/api/placeholder/300/300" alt="Andrew Rogers" />
              <AvatarFallback className="text-2xl font-bold text-primary bg-primary-foreground">AR</AvatarFallback>
            </Avatar>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Aulas de Inglês em Casa
            </h1>
            <p className="text-xl md:text-2xl mb-6 text-primary-foreground/90">
              Professor Andrew Rogers
            </p>
            <div className="flex items-center justify-center gap-2 mb-8">
              <MapPin className="w-5 h-5" />
              <span className="text-lg">Campo Grande, Mato Grosso do Sul</span>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-accent hover:bg-accent/90 text-accent-foreground"
                onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`, '_blank')}
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10"
                onClick={() => window.open(`tel:+${whatsappNumber}`, '_self')}
              >
                <Phone className="w-5 h-5 mr-2" />
                Ligar Agora
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Classes Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Sobre as Aulas e Materiais
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-lg mb-6 text-muted-foreground leading-relaxed">
                  Nossas aulas são cuidadosamente estruturadas para proporcionar uma experiência de 
                  aprendizado dinâmica e eficaz. Utilizamos materiais modernos e diversificados, 
                  combinando métodos tradicionais com recursos digitais interativos para acelerar 
                  seu progresso no inglês.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <BookOpen className="w-6 h-6 text-primary" />
                    <span>Livros didáticos atualizados</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <FileText className="w-6 h-6 text-primary" />
                    <span>Apostilas personalizadas</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Headphones className="w-6 h-6 text-primary" />
                    <span>Áudios para treino de listening</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Video className="w-6 h-6 text-primary" />
                    <span>Recursos audiovisuais interativos</span>
                  </div>
                </div>
              </div>
              
              <Card className="p-6">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center gap-2">
                    <Presentation className="w-5 h-5" />
                    Estrutura das Aulas
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-secondary mt-0.5" />
                    <span className="text-sm">Aulas de 60 ou 90 minutos</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-secondary mt-0.5" />
                    <span className="text-sm">Material físico e digital incluído</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-secondary mt-0.5" />
                    <span className="text-sm">Exercícios para casa personalizados</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-secondary mt-0.5" />
                    <span className="text-sm">Avaliações periódicas de progresso</span>
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
            
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-primary" />
                    Iniciantes
                  </CardTitle>
                  <CardDescription>
                    Perfeito para quem está começando
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>• Alfabeto e pronúncia básica</li>
                    <li>• Vocabulário essencial</li>
                    <li>• Frases do cotidiano</li>
                    <li>• Gramática fundamental</li>
                  </ul>
                  <div className="mt-4">
                    <Badge variant="secondary">A partir de R$ 80/hora</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-primary" />
                    Intermediário
                  </CardTitle>
                  <CardDescription>
                    Para quem já tem conhecimento básico
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>• Conversação fluente</li>
                    <li>• Gramática avançada</li>
                    <li>• Compreensão auditiva</li>
                    <li>• Escrita e redação</li>
                  </ul>
                  <div className="mt-4">
                    <Badge variant="secondary">A partir de R$ 90/hora</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Award className="w-5 h-5 text-primary" />
                    Avançado
                  </CardTitle>
                  <CardDescription>
                    Aperfeiçoamento e fluência total
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>• Inglês para negócios</li>
                    <li>• Preparação para exames</li>
                    <li>• Refinamento da pronúncia</li>
                    <li>• Conversação nativa</li>
                  </ul>
                  <div className="mt-4">
                    <Badge variant="secondary">A partir de R$ 100/hora</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="mt-12 text-center">
              <Card className="max-w-2xl mx-auto p-6">
                <CardHeader>
                  <CardTitle className="flex items-center justify-center gap-2">
                    <Clock className="w-5 h-5 text-accent" />
                    Horários Flexíveis
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Aulas de segunda a sábado, manhã, tarde ou noite. 
                    Horários adaptados à sua rotina!
                  </p>
                  <div className="flex flex-wrap justify-center gap-2">
                    <Badge>Segunda a Sexta: 7h às 22h</Badge>
                    <Badge>Sábados: 8h às 18h</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Agende Sua Aula Experimental
            </h2>
            <p className="text-lg text-muted-foreground mb-12">
              Entre em contato para agendar sua primeira aula gratuita de 30 minutos. 
              Vou até sua casa em Campo Grande para conhecer suas necessidades!
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer"
                    onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`, '_blank')}>
                <div className="text-center">
                  <MessageCircle className="w-12 h-12 text-accent mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">WhatsApp</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Resposta rápida e agendamento fácil
                  </p>
                  <Button className="w-full bg-accent hover:bg-accent/90">
                    Enviar Mensagem
                  </Button>
                </div>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer"
                    onClick={() => window.open(`tel:+${whatsappNumber}`, '_self')}>
                <div className="text-center">
                  <Phone className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Telefone</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Conversação direta para esclarecer dúvidas
                  </p>
                  <Button variant="outline" className="w-full">
                    Ligar Agora
                  </Button>
                </div>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer"
                    onClick={() => window.open('mailto:andrew.rogers@email.com', '_self')}>
                <div className="text-center">
                  <Mail className="w-12 h-12 text-secondary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">E-mail</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Para informações detalhadas
                  </p>
                  <Button variant="outline" className="w-full">
                    Enviar E-mail
                  </Button>
                </div>
              </Card>
            </div>

            <div className="mt-12 p-6 bg-muted/50 rounded-lg">
              <div className="flex items-center justify-center gap-2 mb-4">
                <MapPin className="w-5 h-5 text-primary" />
                <span className="font-semibold">Área de Atendimento</span>
              </div>
              <p className="text-muted-foreground">
                Atendo em toda Campo Grande, MS. Consulte disponibilidade para bairros mais distantes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-8">
        <div className="container mx-auto px-4 text-center">
          <h3 className="font-bold text-lg mb-2">Andrew Rogers - Aulas de Inglês em Casa</h3>
          <p className="text-primary-foreground/80 mb-4">
            Campo Grande, Mato Grosso do Sul
          </p>
          <div className="flex justify-center gap-4 text-sm">
            <span>Professor Nativo</span>
            <span>•</span>
            <span>Certificação TEFL</span>
            <span>•</span>
            <span>10+ Anos de Experiência</span>
          </div>
        </div>
      </footer>

      {/* WhatsApp Fixed Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button 
          size="lg"
          className="rounded-full w-14 h-14 bg-accent hover:bg-accent/90 shadow-lg"
          onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`, '_blank')}
        >
          <MessageCircle className="w-6 h-6" />
        </Button>
      </div>
    </div>
  )
}
