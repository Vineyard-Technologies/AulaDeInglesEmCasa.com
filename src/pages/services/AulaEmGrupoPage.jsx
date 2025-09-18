import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { useForm, ValidationError } from '@formspree/react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon"
import { LazyLoad, GoogleMap, RelatedBlogPosts, LazyImage } from "@/components"
import { updateMetaTags, addStructuredData } from "@/utils/seo"
import { BLOG_CATEGORIES } from "@/data/blogPostsBilingual"
import { useTranslations } from "@/data/translations"
import { useLanguage } from "@/contexts/LanguageContext"
import { 
  Users, 
  DollarSign, 
  MessageCircle, 
  CheckCircle, 
  BookOpen,
  Clock,
  Award,
  Target,
  Mail,
  Send
} from "lucide-react"

const aulaEmGrupoMetaData = {
  title: "Aula de Inglês em Grupo | Andrew Rogers | Campo Grande, MS",
  description: "Aula de inglês em pequenos grupos com professor americano nativo. Interação, prática e custo-benefício ideal para aprender inglês.",
  canonical: "https://auladeinglesemcasa.com/servicos/aula-de-ingles-em-grupo"
}

export function AulaEmGrupoPage() {
  const whatsappNumber = "5567996161199"
  const t = useTranslations()
  const { language } = useLanguage()
  
  // Formspree form state
  const [state, handleSubmit] = useForm("mnnbkevq")

  useEffect(() => {
    updateMetaTags(aulaEmGrupoMetaData)
  }, [])

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-primary text-primary-foreground py-20 overflow-hidden">
        {/* Background Image */}
        <img 
          src="/BrightCity.webp" 
          alt="BrightCity background" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <LazyLoad delay={100} animationClass="fade-in-scale">
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-white/20 rounded-full">
                  <Users className="w-12 h-12" />
                </div>
              </div>
            </LazyLoad>
            
            <LazyLoad delay={200} animationClass="fade-in">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                {t.group.hero.title}
              </h1>
            </LazyLoad>
            
            <LazyLoad delay={300} animationClass="fade-in-scale">
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

      {/* About Group Classes Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Content */}
              <LazyLoad delay={100} animationClass="fade-in-left">
                <div className="space-y-6">
                  <h2 className="text-3xl font-bold">{t.group.about.title}</h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>{t.group.about.p1}</p>
                    <p>{t.group.about.p2}</p>
                    <p>{t.group.about.p3}</p>
                  </div>
                </div>
              </LazyLoad>
              
              {/* Image */}
              <LazyLoad delay={200} animationClass="fade-in-right">
                <div className="flex justify-center">
                  <LazyImage 
                    src="/groupInlinePhoto.webp" 
                    alt={t.group.about.imageAlt} 
                    className="w-full max-w-md h-auto rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                  />
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
                  {state.succeeded ? (
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
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      {/* All fields in one row */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">{t.contact.form.fields.name}</Label>
                          <Input
                            type="text"
                            id="name"
                            name="name"
                            required
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="phone">{t.contact.form.fields.phone}</Label>
                          <Input
                            type="tel"
                            id="phone"
                            name="phone"
                          />
                          <ValidationError 
                            prefix="Phone" 
                            field="phone"
                            errors={state.errors}
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="email">{t.contact.form.fields.email}</Label>
                          <Input
                            type="email"
                            id="email"
                            name="email"
                          />
                          <ValidationError 
                            prefix="Email" 
                            field="email"
                            errors={state.errors}
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="message">{t.contact.form.fields.message}</Label>
                          <Input
                            type="text"
                            id="message"
                            name="message"
                            required
                          />
                          <ValidationError 
                            prefix="Message" 
                            field="message"
                            errors={state.errors}
                          />
                        </div>

                        <div className="flex items-end">
                          <Button type="submit" className="w-full" size="lg" disabled={state.submitting}>
                            {state.submitting ? (
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
            <h2 className="text-3xl font-bold text-center mb-12">{t.group.benefits.title}</h2>
          </LazyLoad>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <LazyLoad delay={200} animationClass="fade-in-scale">
              <Card className="hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden cursor-pointer">
                <LazyImage 
                  src="/groupPhoto4.webp" 
                  alt="Grupo de estudantes praticando inglês" 
                  className="w-full h-48 object-cover rounded-lg hover:scale-105 transition-transform duration-300"
                />
                <CardHeader className="text-center">
                  <DollarSign className="w-8 h-8 text-primary mx-auto mb-2" />
                  <CardTitle className="text-lg">{t.group.benefits.costBenefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center">
                    {t.group.benefits.costBenefit.description}
                  </p>
                </CardContent>
              </Card>
            </LazyLoad>

            <LazyLoad delay={300} animationClass="fade-in-scale">
              <Card className="hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden cursor-pointer">
                <LazyImage 
                  src="/groupPhoto1.webp" 
                  alt="Estudantes interagindo em aula de inglês em grupo" 
                  className="w-full h-48 object-cover rounded-lg hover:scale-105 transition-transform duration-300"
                />
                <CardHeader className="text-center">
                  <MessageCircle className="w-8 h-8 text-primary mx-auto mb-2" />
                  <CardTitle className="text-lg">{t.group.benefits.realPractice.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center">
                    {t.group.benefits.realPractice.description}
                  </p>
                </CardContent>
              </Card>
            </LazyLoad>

            <LazyLoad delay={400} animationClass="fade-in-scale">
              <Card className="hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden cursor-pointer">
                <LazyImage 
                  src="/groupPhoto2.webp" 
                  alt="Grupo motivado aprendendo inglês juntos" 
                  className="w-full h-48 object-cover rounded-lg hover:scale-105 transition-transform duration-300"
                />
                <CardHeader className="text-center">
                  <Award className="w-8 h-8 text-primary mx-auto mb-2" />
                  <CardTitle className="text-lg">{t.group.benefits.motivation.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center">
                    {t.group.benefits.motivation.description}
                  </p>
                </CardContent>
              </Card>
            </LazyLoad>

            <LazyLoad delay={500} animationClass="fade-in-scale">
              <Card className="hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden cursor-pointer">
                <LazyImage 
                  src="/groupPhoto3.webp" 
                  alt="Pequeno grupo focado no aprendizado de inglês" 
                  className="w-full h-48 object-cover rounded-lg hover:scale-105 transition-transform duration-300"
                />
                <CardHeader className="text-center">
                  <Target className="w-8 h-8 text-primary mx-auto mb-2" />
                  <CardTitle className="text-lg">{t.group.benefits.smallGroups.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center">
                    {t.group.benefits.smallGroups.description}
                  </p>
                </CardContent>
              </Card>
            </LazyLoad>
          </div>
        </div>
      </section>

      {/* Group Structure Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <LazyLoad delay={100} animationClass="fade-in">
            <h2 className="text-3xl font-bold text-center mb-12">{t.group.methodology.title}</h2>
          </LazyLoad>
          
          <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8">
            <LazyLoad delay={200} animationClass="fade-in-scale">
              <Card className="hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer">
                <CardHeader>
                  <CardTitle className="text-center">{t.group.levels.beginner.title}</CardTitle>
                  <CardDescription className="text-center">{t.group.levels.beginner.level}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                      <span>{t.group.levels.beginner.skills.skill1}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                      <span>{t.group.levels.beginner.skills.skill2}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                      <span>{t.group.levels.beginner.skills.skill3}</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </LazyLoad>

            <LazyLoad delay={300} animationClass="fade-in-scale">
              <Card className="hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer">
                <CardHeader>
                  <CardTitle className="text-center">{t.group.levels.intermediate.title}</CardTitle>
                  <CardDescription className="text-center">{t.group.levels.intermediate.level}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                      <span>{t.group.levels.intermediate.skills.skill1}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                      <span>{t.group.levels.intermediate.skills.skill2}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                      <span>{t.group.levels.intermediate.skills.skill3}</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </LazyLoad>

            <LazyLoad delay={400} animationClass="fade-in-scale">
              <Card className="hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer">
                <CardHeader>
                  <CardTitle className="text-center">{t.group.levels.advanced.title}</CardTitle>
                  <CardDescription className="text-center">{t.group.levels.advanced.level}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                      <span>{t.group.levels.advanced.skills.skill1}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                      <span>{t.group.levels.advanced.skills.skill2}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                      <span>{t.group.levels.advanced.skills.skill3}</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </LazyLoad>
          </div>
        </div>
      </section>

      {/* Perfect For Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <LazyLoad delay={100} animationClass="fade-in">
            <h2 className="text-3xl font-bold text-center mb-12">{t.group.idealFor.title}</h2>
          </LazyLoad>
          
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            <LazyLoad delay={200} animationClass="fade-in-left">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">{t.group.perfectFor.socialInteraction.title}</h3>
                    <p className="text-muted-foreground">{t.group.perfectFor.socialInteraction.description}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">{t.group.perfectFor.costBenefit.title}</h3>
                    <p className="text-muted-foreground">{t.group.perfectFor.costBenefit.description}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">{t.group.perfectFor.motivation.title}</h3>
                    <p className="text-muted-foreground">{t.group.perfectFor.motivation.description}</p>
                  </div>
                </div>
              </div>
            </LazyLoad>

            <LazyLoad delay={300} animationClass="fade-in-right">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">{t.group.perfectFor.conversation.title}</h3>
                    <p className="text-muted-foreground">{t.group.perfectFor.conversation.description}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">{t.group.perfectFor.schedule.title}</h3>
                    <p className="text-muted-foreground">{t.group.perfectFor.schedule.description}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">{t.group.perfectFor.learning.title}</h3>
                    <p className="text-muted-foreground">{t.group.perfectFor.learning.description}</p>
                  </div>
                </div>
              </div>
            </LazyLoad>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-6 items-center">
              <div className="text-center flex flex-col justify-center">
                <div className="w-24 h-16 mx-auto flex items-center justify-center mb-6">
                  <img 
                    src="/AulaDeInglesEmCasaIcon.webp" 
                    alt="Aula de Inglês em Casa - Andrew Rogers" 
                    className="max-w-full max-h-full object-contain hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold mb-8">
                  {t.group.location.title}
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
              
              <GoogleMap />
            </div>
          </div>
        </div>
      </section>

      {/* Related Blog Posts */}
      <RelatedBlogPosts category={BLOG_CATEGORIES.GROUP} />

      {/* CTA Section */}
      <section className="relative py-16 text-primary-foreground overflow-hidden">
        {/* Background Image */}
        <img 
          src="/Parrot.webp" 
          alt="Parrot background" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60"></div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl font-bold mb-4">{t.group.finalCta.title}</h2>
          <p className="text-xl mb-8 text-primary-foreground/90">
            {t.group.finalCta.subtitle}
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
        </div>
      </section>
    </div>
  )
}
