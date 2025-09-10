import { useState, useEffect } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon"
import { LazyLoad } from "@/components"
import { updateMetaTags, addStructuredData, createEducationServiceSchema, pageMetaData } from "@/utils/seo"

// Public asset URLs (no imports needed)
const homepageLogo = "/AulasDeInglesEmCasaIcon.webp"
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
                Entre em Contato
              </h2>
            </LazyLoad>
            
            {/* Contact Information */}
            <LazyLoad delay={200}>
              <div className="max-w-2xl mx-auto">
                <div className="grid md:grid-cols-2 gap-8">
                  {/* WhatsApp */}
                  <Card className="text-center p-6">
                    <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <WhatsAppIcon className="w-8 h-8 text-green-500" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">WhatsApp</h3>
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
                        Enviar Mensagem
                      </Button>
                    </a>
                  </Card>

                  {/* Email */}
                  <Card className="text-center p-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Mail className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">E-mail</h3>
                  <p className="text-muted-foreground mb-4">
                    <a href="mailto:contato@auladeinglesemcasa.com" className="text-blue-600 hover:underline">
                      contato@auladeinglesemcasa.com
                    </a>
                  </p>
                  <a href="mailto:contato@auladeinglesemcasa.com">
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                      <Mail className="w-4 h-4 mr-2" />
                      Enviar E-mail
                    </Button>
                  </a>
                </Card>
              </div>
            </div>
            </LazyLoad>
          </div>
        </div>
      </section>

      {/* Aulas de Inglês em Casa em Campo Grande, MS Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <LazyLoad delay={300} animationClass="fade-in-left">
                <div className="text-center flex flex-col justify-center">
                  <div className="w-24 h-16 mx-auto flex items-center justify-center">
                    <img 
                      src={homepageLogo} 
                      alt="Aulas de Inglês em Casa - Andrew Rogers" 
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                  
                  <h2 className="text-3xl md:text-4xl font-bold mb-8">
                    Aulas de Inglês em Casa em Campo Grande, MS
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
                      Enviar Email
                    </Button>
                  </a>
                </div>
              </div>
              </LazyLoad>
              
              <LazyLoad delay={400} animationClass="fade-in-right">
                <div>
                  <div className="bg-background rounded-lg p-4 shadow-lg">
                    <iframe 
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119603.60236497635!2d-54.63553405!3d-20.481099800000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9486e6726b2b9f27%3A0xf5a8469ebc84d2c1!2sCampo%20Grande%2C%20State%20of%20Mato%20Grosso%20do%20Sul!5e0!3m2!1sen!2sbr!4v1757361385073!5m2!1sen!2sbr" 
                      width="100%" 
                      height="250" 
                      style={{ border: 0 }} 
                      allowFullScreen="" 
                      loading="lazy" 
                      referrerPolicy="no-referrer-when-downgrade"
                      className="rounded-lg"
                    ></iframe>
                  </div>
                </div>
              </LazyLoad>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
