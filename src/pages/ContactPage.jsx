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
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const whatsappNumber = "5567996161199"

  useEffect(() => {
    // Update meta tags
    updateMetaTags(pageMetaData.contact);
    
    // Add structured data for the educational service
    addStructuredData(createEducationServiceSchema());
  }, [])

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
