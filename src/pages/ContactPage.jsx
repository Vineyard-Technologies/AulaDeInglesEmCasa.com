import { useState, useEffect } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon"
import { LazyLoad, GoogleMap } from "@/components"
import { updateMetaTags, addStructuredData, createEducationServiceSchema, pageMetaData } from "@/utils/seo"
import { useTranslations } from "@/data/translations"
import { useLanguage } from "@/contexts/LanguageContext"

// Public asset URLs (no imports needed)
const homepageLogo = "/AulaDeInglesEmCasaIcon.webp"
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
  const t = useTranslations()
  const { language } = useLanguage()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const whatsappNumber = "5567996161199"

  useEffect(() => {
    // Update meta tags
    updateMetaTags(pageMetaData.contact);
    
    // Add structured data for the educational service
    addStructuredData(createEducationServiceSchema());
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    // Check if at least one contact method is provided
    if (!formData.email && !formData.phone) {
      alert(language === 'pt' 
        ? 'Por favor, forneça pelo menos um email ou telefone para contato.' 
        : 'Please provide at least an email or phone number for contact.')
      return
    }
    
    setIsLoading(true)
    
    try {
      const form = e.target
      const formData = new FormData(form)
      
      const response = await fetch('https://formspree.io/f/mnnbkevq', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      })
      
      if (response.ok) {
        setIsSubmitted(true)
        // Reset form after 5 seconds
        setTimeout(() => {
          setIsSubmitted(false)
          setFormData({ name: '', email: '', phone: '', message: '' })
        }, 5000)
      } else {
        console.error('Form submission error')
        alert(language === 'pt' ? 'Erro ao enviar mensagem. Tente novamente ou use WhatsApp.' : 'Error sending message. Please try again or use WhatsApp.')
      }
    } catch (error) {
      console.error('Form submission error:', error)
      alert(language === 'pt' ? 'Erro ao enviar mensagem. Tente novamente ou use WhatsApp.' : 'Error sending message. Please try again or use WhatsApp.')
    } finally {
      setIsLoading(false)
    }
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Contact Methods */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <LazyLoad delay={100}>
              <h2 className="text-3xl font-bold text-center mb-12">
                {t.contact.title}
              </h2>
            </LazyLoad>
            
            {/* Contact Information */}
            <LazyLoad delay={200}>
              <div className="max-w-2xl mx-auto">
                <div className="grid md:grid-cols-2 gap-8">
                  {/* WhatsApp */}
                  <Card className="text-center p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer">
                    <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <WhatsAppIcon className="w-8 h-8 text-green-500" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{t.contact.whatsapp.title}</h3>
                    <p className="text-muted-foreground mb-4">
                      <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="text-green-500 hover:underline">
                        (67) 99616-1199
                      </a>
                    </p>
                    <a 
                      href={`https://wa.me/${whatsappNumber}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="w-full bg-green-500 hover:bg-green-600 text-white">
                        <WhatsAppIcon className="w-4 h-4 mr-2" />
                        {t.contact.whatsapp.button}
                      </Button>
                    </a>
                  </Card>

                  {/* Email */}
                  <Card className="text-center p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Mail className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{t.contact.email.title}</h3>
                  <p className="text-muted-foreground mb-4">
                    <a href="mailto:contato@auladeinglesemcasa.com" className="text-blue-600 hover:underline">
                      contato@auladeinglesemcasa.com
                    </a>
                  </p>
                  <a href="mailto:contato@auladeinglesemcasa.com">
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                      <Mail className="w-4 h-4 mr-2" />
                      {t.contact.email.button}
                    </Button>
                  </a>
                </Card>
              </div>
            </div>
            </LazyLoad>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <LazyLoad delay={250} animationClass="fade-in">
              <Card>
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">{t.contact.form.title}</CardTitle>
                  <CardDescription>{t.contact.form.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  {!isSubmitted ? (
                    <form
                      action="https://formspree.io/f/mnnbkevq"
                      method="POST"
                      onSubmit={handleSubmit}
                      className="space-y-6"
                    >
                      <div className="space-y-2">
                        <Label htmlFor="name">{t.contact.form.fields.name}</Label>
                        <Input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder={t.contact.form.placeholders.name}
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email">{t.contact.form.fields.email}</Label>
                        <Input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder={t.contact.form.placeholders.email}
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="phone">{t.contact.form.fields.phone}</Label>
                        <Input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder={t.contact.form.placeholders.phone}
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">{t.contact.form.fields.message}</Label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder={t.contact.form.placeholders.message}
                          rows={5}
                          required
                        />
                      </div>

                      <Button type="submit" className="w-full" size="lg" disabled={isLoading}>
                        {isLoading ? (
                          <>
                            <div className="animate-spin w-4 h-4 mr-2 border-2 border-white border-t-transparent rounded-full"></div>
                            {language === 'pt' ? 'Enviando...' : 'Sending...'}
                          </>
                        ) : (
                          <>
                            <Send className="w-4 h-4 mr-2" />
                            {t.contact.form.submit}
                          </>
                        )}
                      </Button>
                    </form>
                  ) : (
                    <div className="text-center py-8">
                      <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <CheckCircle className="w-8 h-8 text-green-500" />
                      </div>
                      <h3 className="text-xl font-semibold mb-2 text-green-600">
                        {t.contact.form.success.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {t.contact.form.success.message}
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </LazyLoad>
          </div>
        </div>
      </section>

      {/* Aula de Inglês em Casa em Campo Grande, MS Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <LazyLoad delay={300} animationClass="fade-in-left">
                <div className="text-center flex flex-col justify-center">
                  <div className="w-24 h-16 mx-auto flex items-center justify-center">
                    <img 
                      src={homepageLogo} 
                      alt="Aula de Inglês em Casa - Andrew Rogers" 
                      className="max-w-full max-h-full object-contain hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  
                  <h2 className="text-3xl md:text-4xl font-bold mb-8">
                    {t.contact.cta.title}
                  </h2>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href={`https://wa.me/${whatsappNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button 
                      size="lg" 
                      className="bg-green-500 hover:bg-green-600 text-white px-4 w-full"
                    >
                      <WhatsAppIcon className="w-5 h-5" />
                      WhatsApp
                    </Button>
                  </a>
                  <a href="mailto:contato@auladeinglesemcasa.com">
                    <Button 
                      size="lg" 
                      className="bg-blue-600 hover:bg-blue-700 text-white w-full"
                    >
                      <Mail className="w-5 h-5" />
                      {t.contact.email.button}
                    </Button>
                  </a>
                </div>
              </div>
              </LazyLoad>
              
              <LazyLoad delay={400} animationClass="fade-in-right">
                <GoogleMap />
              </LazyLoad>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
