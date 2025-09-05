import React from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { 
  Phone, 
  MessageCircle, 
  Mail, 
  MapPin, 
  Clock,
  Send
} from 'lucide-react'

export const ContactPage = () => {
  const whatsappNumber = "5567999999999"
  const whatsappMessage = "Olá! Gostaria de saber mais sobre as aulas de inglês."

  return (
    <div className="min-h-screen bg-background py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">
            Entre em Contato
          </h1>
          <p className="text-xl text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
            Pronto para começar sua jornada no inglês? Entre em contato para agendar 
            sua aula experimental gratuita!
          </p>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold mb-8">Informações de Contato</h2>
              
              <div className="space-y-6">
                <Card className="p-6 cursor-pointer hover:shadow-lg transition-shadow"
                      onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`, '_blank')}>
                  <div className="flex items-start gap-4">
                    <MessageCircle className="w-8 h-8 text-accent mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg mb-2">WhatsApp</h3>
                      <p className="text-muted-foreground mb-3">
                        A forma mais rápida de entrar em contato. Respondo em até 1 hora!
                      </p>
                      <Button className="bg-accent hover:bg-accent/90">
                        Enviar Mensagem
                      </Button>
                    </div>
                  </div>
                </Card>
                
                <Card className="p-6 cursor-pointer hover:shadow-lg transition-shadow"
                      onClick={() => window.open(`tel:+${whatsappNumber}`, '_self')}>
                  <div className="flex items-start gap-4">
                    <Phone className="w-8 h-8 text-primary mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Telefone</h3>
                      <p className="text-muted-foreground mb-3">
                        Ligue diretamente para esclarecer dúvidas e agendar sua aula.
                      </p>
                      <Button variant="outline">
                        Ligar Agora
                      </Button>
                    </div>
                  </div>
                </Card>
                
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <Mail className="w-8 h-8 text-secondary mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg mb-2">E-mail</h3>
                      <p className="text-muted-foreground mb-3">
                        Para informações detalhadas ou orçamentos personalizados.
                      </p>
                      <p className="text-primary font-medium">andrew.rogers@email.com</p>
                    </div>
                  </div>
                </Card>
              </div>
              
              {/* Location and Hours */}
              <div className="mt-8 space-y-6">
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-8 h-8 text-primary mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Área de Atendimento</h3>
                      <p className="text-muted-foreground">
                        Atendo em toda Campo Grande, MS e região metropolitana. 
                        Consulte disponibilidade para outras cidades.
                      </p>
                    </div>
                  </div>
                </Card>
                
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <Clock className="w-8 h-8 text-accent mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Horários de Atendimento</h3>
                      <div className="space-y-1 text-muted-foreground">
                        <p><span className="font-medium">Segunda a Sexta:</span> 7h às 22h</p>
                        <p><span className="font-medium">Sábados:</span> 8h às 18h</p>
                        <p><span className="font-medium">Domingos:</span> Sob consulta</p>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
            
            {/* Contact Form */}
            <div>
              <Card className="p-8">
                <CardHeader className="px-0 pt-0">
                  <CardTitle className="text-2xl">Envie uma Mensagem</CardTitle>
                  <p className="text-muted-foreground">
                    Preencha o formulário abaixo e entrarei em contato em breve.
                  </p>
                </CardHeader>
                <CardContent className="px-0 pb-0">
                  <form className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName">Nome</Label>
                        <Input id="firstName" placeholder="Seu nome" />
                      </div>
                      <div>
                        <Label htmlFor="lastName">Sobrenome</Label>
                        <Input id="lastName" placeholder="Seu sobrenome" />
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="email">E-mail</Label>
                      <Input id="email" type="email" placeholder="seu@email.com" />
                    </div>
                    
                    <div>
                      <Label htmlFor="phone">Telefone</Label>
                      <Input id="phone" placeholder="(67) 99999-9999" />
                    </div>
                    
                    <div>
                      <Label htmlFor="level">Nível de Inglês</Label>
                      <select className="w-full p-2 border border-input bg-background rounded-md">
                        <option value="">Selecione seu nível</option>
                        <option value="iniciante">Iniciante</option>
                        <option value="basico">Básico</option>
                        <option value="intermediario">Intermediário</option>
                        <option value="avancado">Avançado</option>
                        <option value="fluente">Fluente</option>
                      </select>
                    </div>
                    
                    <div>
                      <Label htmlFor="message">Mensagem</Label>
                      <Textarea 
                        id="message" 
                        placeholder="Conte-me sobre seus objetivos com o inglês..."
                        rows={4}
                      />
                    </div>
                    
                    <Button className="w-full" size="lg">
                      <Send className="w-4 h-4 mr-2" />
                      Enviar Mensagem
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
