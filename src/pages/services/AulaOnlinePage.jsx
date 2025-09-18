import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon"
import { LazyLoad, LazyImage, GoogleMap, RelatedBlogPosts } from "@/components"
import { updateMetaTags, addStructuredData } from "@/utils/seo"
import { BLOG_CATEGORIES } from "@/data/blogPostsBilingual"
import { useTranslations } from "@/data/translations"
import { useLanguage } from "@/contexts/LanguageContext"
import { 
  Video, 
  Clock, 
  Users, 
  CheckCircle, 
  Wifi, 
  Monitor,
  Headphones,
  Calendar,
  Mail,
  Send
} from "lucide-react"

const aulaOnlineMetaData = {
  title: "Aula de Inglês Online | Andrew Rogers | Campo Grande, MS",
  description: "Aula de inglês online com professor americano nativo. Flexibilidade de horário, plataforma segura e metodologia personalizada. Agende sua aula!",
  canonical: "https://auladeinglesemcasa.com/servicos/aula-de-ingles-online"
}

export function AulaOnlinePage() {
  const whatsappNumber = "5567996161199"
  const t = useTranslations()
  const { language } = useLanguage()
  
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    updateMetaTags(aulaOnlineMetaData)
  }, [])

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

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

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-primary text-primary-foreground py-20 overflow-hidden">
        {/* Background Image */}
        <img 
          src="/Mountains.webp" 
          alt="Mountains background" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <LazyLoad delay={100} animationClass="fade-in">
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-white/20 rounded-full">
                  <Video className="w-12 h-12" />
                </div>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                {t.online.hero.title}
              </h1>
            </LazyLoad>
            
            <LazyLoad delay={200} animationClass="fade-in">
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
                    {t.actions.whatsapp}
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
                    {t.actions.sendEmail}
                  </a>
                </Button>
              </div>
            </LazyLoad>
          </div>
        </div>
      </section>

      {/* About Online Classes Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <LazyLoad delay={200} animationClass="fade-in-left">
                <div>
                  <h2 className="text-3xl font-bold mb-6">{t.online.about.title}</h2>
                  <div className="prose prose-lg max-w-none text-muted-foreground space-y-4 mb-8">
                    <p>{t.online.about.p1}</p>
                    <p>{t.online.about.p2}</p>
                    <p>{t.online.about.p3}</p>
                    <p>{t.online.about.p4}</p>
                  </div>
                </div>
              </LazyLoad>
              <LazyLoad delay={300} animationClass="fade-in-right">
                <div className="lg:order-first">
                  <div className="relative">
                    <LazyImage
                      src="/VideoCall.webp"
                      alt="Aulas de Inglês Online por Videoconferência"
                      className="w-full h-auto rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
              </LazyLoad>
            </div>

            {/* Contact Form - Full Width */}
            <LazyLoad delay={400} animationClass="fade-in">
              <Card className="hover:shadow-lg transition-all duration-300 mt-12">
                <CardHeader className="pb-0">
                  <CardTitle className="flex items-center gap-2">
                    <Mail className="w-5 h-5" />
                    {t.contact.form.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  {!isSubmitted ? (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      {/* All fields in one row */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">{t.contact.form.fields.name}</Label>
                          <Input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
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
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="message">{t.contact.form.fields.message}</Label>
                          <Input
                            type="text"
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                          />
                        </div>

                        <div className="flex items-end">
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
                        </div>
                      </div>
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

      {/* Benefits Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <LazyLoad delay={100} animationClass="fade-in">
            <h2 className="text-3xl font-bold text-center mb-12">{t.online.benefits.title}</h2>
          </LazyLoad>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <LazyLoad delay={200} animationClass="fade-in-scale">
              <Card className="hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer h-full flex flex-col">
                <div className="aspect-video w-full overflow-hidden rounded-lg">
                  <LazyImage
                    src="/Flexible.webp"
                    alt="Flexibilidade Total"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader className="text-center">
                  <CardTitle className="text-lg">{t.online.benefits.flexibility.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center">
                    {t.online.benefits.flexibility.description}
                  </p>
                </CardContent>
              </Card>
            </LazyLoad>

            <LazyLoad delay={300} animationClass="fade-in-scale">
              <Card className="hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer h-full flex flex-col">
                <div className="aspect-video w-full overflow-hidden rounded-lg">
                  <LazyImage
                    src="/Platform.webp"
                    alt="Plataforma Segura"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader className="text-center">
                  <CardTitle className="text-lg">{t.online.benefits.technology.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center">
                    {t.online.benefits.technology.description}
                  </p>
                </CardContent>
              </Card>
            </LazyLoad>

            <LazyLoad delay={400} animationClass="fade-in-scale">
              <Card className="hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer h-full flex flex-col">
                <div className="aspect-video w-full overflow-hidden rounded-lg">
                  <LazyImage
                    src="/Audio.webp"
                    alt="Áudio de Qualidade"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader className="text-center">
                  <CardTitle className="text-lg">{t.online.benefits.recording.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center">
                    {t.online.benefits.recording.description}
                  </p>
                </CardContent>
              </Card>
            </LazyLoad>

            <LazyLoad delay={500} animationClass="fade-in-scale">
              <Card className="hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer h-full flex flex-col">
                <div className="aspect-video w-full overflow-hidden rounded-lg">
                  <LazyImage
                    src="/Attention.webp"
                    alt="Atenção Individual"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader className="text-center">
                  <CardTitle className="text-lg">{t.online.benefits.comfort.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center">
                    {t.online.benefits.comfort.description}
                  </p>
                </CardContent>
              </Card>
            </LazyLoad>
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <LazyLoad delay={100} animationClass="fade-in">
            <h2 className="text-3xl font-bold text-center mb-12">{t.online.methodology.title}</h2>
          </LazyLoad>
          
          <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8">
            <LazyLoad delay={200} animationClass="fade-in-scale">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  1
                </div>
                <h3 className="text-xl font-semibold mb-3">{t.online.methodology.step1.title}</h3>
                <p className="text-muted-foreground">
                  {t.online.methodology.step1.description}
                </p>
              </div>
            </LazyLoad>

            <LazyLoad delay={300} animationClass="fade-in-scale">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  2
                </div>
                <h3 className="text-xl font-semibold mb-3">{t.online.methodology.step2.title}</h3>
                <p className="text-muted-foreground">
                  {t.online.methodology.step2.description}
                </p>
              </div>
            </LazyLoad>

            <LazyLoad delay={400} animationClass="fade-in-scale">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  3
                </div>
                <h3 className="text-xl font-semibold mb-3">{t.online.methodology.step3.title}</h3>
                <p className="text-muted-foreground">
                  {t.online.methodology.step3.description}
                </p>
              </div>
            </LazyLoad>
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto" style={{ maxWidth: '500px' }}>
            <LazyLoad delay={100} animationClass="fade-in">
              <h2 className="text-3xl font-bold text-center mb-8">{t.online.requirements.title}</h2>
            </LazyLoad>
            
            <LazyLoad delay={200} animationClass="fade-in-scale">
              <Card className="hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Wifi className="w-5 h-5" />
                    {t.online.requirements.cardTitle}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                      <span>{t.online.requirements.list.internet}</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                      <span>{t.online.requirements.list.device}</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                      <span>{t.online.requirements.list.audio}</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                      <span>{t.online.requirements.list.materials}</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </LazyLoad>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-6 items-center">
              <LazyLoad delay={200} animationClass="fade-in-left">
                <div className="text-center flex flex-col justify-center">
                  <div className="w-24 h-16 mx-auto flex items-center justify-center mb-6">
                    <img 
                      src="/AulaDeInglesEmCasaIcon.webp" 
                      alt="Aula de Inglês em Casa - Andrew Rogers" 
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                  
                  <h2 className="text-3xl md:text-4xl font-bold mb-8">
                    {t.online.location.title}
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
                        {t.actions.whatsapp}
                      </Button>
                    </a>
                    <a href="mailto:Contato@auladeinglesemcasa.com">
                      <Button 
                        size="lg" 
                        className="bg-primary hover:bg-primary/90 text-primary-foreground border-primary-foreground/20 w-full"
                      >
                        <Mail className="w-5 h-5" />
                        {t.actions.sendEmail}
                      </Button>
                    </a>
                  </div>
                </div>
              </LazyLoad>
              
              <LazyLoad delay={300} animationClass="fade-in-right">
                <GoogleMap />
              </LazyLoad>
            </div>
          </div>
        </div>
      </section>

      {/* Related Blog Posts */}
      <RelatedBlogPosts category={BLOG_CATEGORIES.ONLINE} />

      {/* CTA Section */}
      <section className="relative py-16 text-primary-foreground overflow-hidden">
        {/* Background Image */}
        <img 
          src="/MountainsAndBeach.webp" 
          alt="MountainsAndBeach background" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60"></div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <LazyLoad delay={100} animationClass="fade-in">
            <h2 className="text-3xl font-bold mb-4">{t.online.finalCta.title}</h2>
            <p className="text-xl mb-8 text-primary-foreground/90">
              {t.online.finalCta.subtitle}
            </p>
          </LazyLoad>
          
          <LazyLoad delay={200} animationClass="fade-in">
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
                  {t.actions.whatsapp}
                </a>
              </Button>
              
              <a href="mailto:Contato@auladeinglesemcasa.com">
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 text-primary-foreground border-primary-foreground/20"
                >
                  <Mail className="w-5 h-5" />
                  {t.actions.sendEmail}
                </Button>
              </a>
            </div>
          </LazyLoad>
        </div>
      </section>
    </div>
  )
}