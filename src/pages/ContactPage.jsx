import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { 
  MessageCircle, 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send,
  CheckCircle
} from "lucide-react"

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const whatsappNumber = "5567999999999"
  const whatsappMessage = "Olá! Gostaria de agendar uma aula experimental de inglês."

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData)
    setIsSubmitted(true)
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ name: '', email: '', phone: '', message: '' })
    }, 3000)
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 to-primary/5 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Entre em Contato
            </h1>
            <p className="text-xl text-muted-foreground mb-6">
              Estou aqui para responder suas dúvidas e agendar sua aula experimental gratuita
            </p>
            <div className="flex items-center justify-center gap-2">
              <MapPin className="w-5 h-5 text-primary" />
              <span className="text-lg">Campo Grande, Mato Grosso do Sul</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Formas de Contato
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {/* WhatsApp */}
              <Card className="text-center hover:shadow-lg transition-shadow cursor-pointer"
                    onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`, '_blank')}>
                <CardHeader>
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MessageCircle className="w-8 h-8 text-accent" />
                  </div>
                  <CardTitle>WhatsApp</CardTitle>
                  <CardDescription>Resposta rápida e imediata</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    A forma mais rápida de me contatar. Respondo mensagens em até 30 minutos 
                    durante o horário comercial.
                  </p>
                  <Button className="w-full bg-accent hover:bg-accent/90">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Enviar Mensagem
                  </Button>
                </CardContent>
              </Card>

              {/* Phone */}
              <Card className="text-center hover:shadow-lg transition-shadow cursor-pointer"
                    onClick={() => window.open(`tel:+${whatsappNumber}`, '_self')}>
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Phone className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle>Telefone</CardTitle>
                  <CardDescription>Conversa direta e pessoal</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Prefere falar diretamente? Ligue para esclarecer dúvidas e agendar 
                    sua aula experimental.
                  </p>
                  <Button variant="outline" className="w-full">
                    <Phone className="w-4 h-4 mr-2" />
                    Ligar Agora
                  </Button>
                </CardContent>
              </Card>

              {/* Email */}
              <Card className="text-center hover:shadow-lg transition-shadow cursor-pointer"
                    onClick={() => window.open('mailto:andrew.rogers@email.com', '_self')}>
                <CardHeader>
                  <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Mail className="w-8 h-8 text-secondary" />
                  </div>
                  <CardTitle>E-mail</CardTitle>
                  <CardDescription>Para mensagens detalhadas</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Envie suas dúvidas por e-mail. Ideal para mensagens mais detalhadas 
                    e documentos.
                  </p>
                  <Button variant="outline" className="w-full">
                    <Mail className="w-4 h-4 mr-2" />
                    Enviar E-mail
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="grid md:grid-cols-2 gap-12">
              {/* Form */}
              <div>
                <h3 className="text-2xl font-bold mb-6">Envie uma Mensagem</h3>
                {isSubmitted ? (
                  <Card className="p-6 text-center">
                    <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                    <h4 className="text-xl font-semibold mb-2">Mensagem Enviada!</h4>
                    <p className="text-muted-foreground">
                      Obrigado pelo contato! Responderei em breve.
                    </p>
                  </Card>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Label htmlFor="name">Nome Completo</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Seu nome completo"
                      />
                    </div>

                    <div>
                      <Label htmlFor="email">E-mail</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="seu@email.com"
                      />
                    </div>

                    <div>
                      <Label htmlFor="phone">Telefone/WhatsApp</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="(67) 99999-9999"
                      />
                    </div>

                    <div>
                      <Label htmlFor="message">Mensagem</Label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Conte-me sobre seus objetivos com o inglês, nível atual e quando gostaria de começar..."
                        rows={6}
                      />
                    </div>

                    <Button type="submit" className="w-full" size="lg">
                      <Send className="w-4 h-4 mr-2" />
                      Enviar Mensagem
                    </Button>
                  </form>
                )}
              </div>

              {/* Additional Info */}
              <div>
                <h3 className="text-2xl font-bold mb-6">Informações Adicionais</h3>
                
                <Card className="mb-6">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Clock className="w-5 h-5 text-primary" />
                      Horário de Atendimento
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Segunda a Sexta:</span>
                        <span className="font-medium">7h às 22h</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Sábados:</span>
                        <span className="font-medium">8h às 18h</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Domingos:</span>
                        <span className="font-medium text-muted-foreground">Fechado</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="mb-6">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <MapPin className="w-5 h-5 text-primary" />
                      Área de Atendimento
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Atendo em toda Campo Grande, MS. Para bairros mais distantes, 
                      consulte disponibilidade e possíveis taxas de deslocamento.
                    </p>
                    <div className="mt-4 space-y-1 text-sm">
                      <p><strong>Bairros atendidos:</strong></p>
                      <p className="text-muted-foreground">
                        Centro, Jardins, Vila Olinda, Rita Vieira, Chácara Cachoeira, 
                        Nova Lima, Carandá Bosque, e adjacências.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Aula Experimental Gratuita</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      Sua primeira aula é totalmente gratuita! Durante 30 minutos, 
                      faremos uma avaliação do seu nível e conversaremos sobre seus objetivos.
                    </p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Avaliação do nível atual</li>
                      <li>• Discussão sobre objetivos</li>
                      <li>• Apresentação da metodologia</li>
                      <li>• Planejamento personalizado</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Perguntas Frequentes
            </h2>
            
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Qual é o valor das aulas?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Os valores variam de acordo com o nível e duração das aulas. Aulas de 60 minutos 
                    começam em R$ 80 para iniciantes. Oferecemos pacotes mensais com desconto.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Vocês fornecem material didático?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Sim! Todo material necessário está incluído no valor da aula. Fornecemos livros, 
                    apostilas personalizadas e recursos digitais.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Como funciona o agendamento?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    O agendamento é flexível! Você pode marcar aulas via WhatsApp com até 24h de 
                    antecedência. Também oferecemos horários fixos semanais.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Atendem em qual região de Campo Grande?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Atendo em toda Campo Grande, priorizando bairros centrais e da região sul. 
                    Para locais mais distantes, consulte disponibilidade.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
