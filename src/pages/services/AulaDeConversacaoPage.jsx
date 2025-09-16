import { useEffect } from "react"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon"
import { LazyLoad, GoogleMap, RelatedBlogPosts, LazyImage } from "@/components"
import { updateMetaTags, addStructuredData } from "@/utils/seo"
import { BLOG_CATEGORIES } from "@/data/blogPostsBilingual"
import { useTranslations } from "@/data/translations"
import { 
  MessageCircle, 
  Mic, 
  Globe, 
  CheckCircle, 
  Clock,
  Users,
  Award,
  BookOpen,
  Mail
} from "lucide-react"

const aulaDeConversacaoMetaData = {
  title: "Aula de Conversação em Inglês | Andrew Rogers | Campo Grande, MS",
  description: "Aula de conversação em inglês com professor americano nativo. Desenvolva fluência, confiança e naturalidade ao falar inglês.",
  canonical: "https://auladeinglesemcasa.com/servicos/aula-de-conversacao-de-ingles"
}

export function AulaDeConversacaoPage() {
  const whatsappNumber = "5567996161199"
  const t = useTranslations()
  
  useEffect(() => {
    updateMetaTags(aulaDeConversacaoMetaData)
  }, [])

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-primary text-primary-foreground py-20 overflow-hidden">
        {/* Background Image */}
        <img 
          src="/CityWithSky.webp" 
          alt="CityWithSky background" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <LazyLoad delay={100} animationClass="fade-in-scale">
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-white/20 rounded-full">
                  <MessageCircle className="w-12 h-12" />
                </div>
              </div>
            </LazyLoad>
            
            <LazyLoad delay={200} animationClass="fade-in">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                {t.conversation.hero.title}
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

      {/* About Conversation Classes Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <LazyLoad delay={100} animationClass="fade-in">
              <h2 className="text-3xl font-bold text-center mb-12">{t.conversation.about.title}</h2>
            </LazyLoad>
            
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Content */}
              <LazyLoad delay={200} animationClass="fade-in-left">
                <div className="space-y-6">
                  <p className="text-lg leading-relaxed">
                    {t.conversation.about.p1}
                  </p>
                  <p className="text-lg leading-relaxed">
                    {t.conversation.about.p2}
                  </p>
                  <p className="text-lg leading-relaxed">
                    {t.conversation.about.p3}
                  </p>
                </div>
              </LazyLoad>
              
              {/* Image */}
              <LazyLoad delay={300} animationClass="fade-in-right">
                <div className="flex justify-center">
                  <LazyImage 
                    src="/conversationInline.webp" 
                    alt={t.conversation.about.imageAlt} 
                    className="w-full max-w-md h-auto rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </LazyLoad>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <LazyLoad delay={100} animationClass="fade-in">
            <h2 className="text-3xl font-bold text-center mb-12">{t.conversation.benefits.title}</h2>
          </LazyLoad>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <LazyLoad delay={200} animationClass="fade-in-scale">
              <Card className="hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer overflow-hidden">
                <LazyImage
                  src="/conversation1.webp"
                  alt={t.conversation.benefits.fluency.title}
                  className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300 rounded-lg"
                />
                <CardHeader className="text-center">
                  <Mic className="w-8 h-8 text-primary mx-auto mb-2" />
                  <CardTitle className="text-lg">{t.conversation.benefits.fluency.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center">
                    {t.conversation.benefits.fluency.description}
                  </p>
                </CardContent>
              </Card>
            </LazyLoad>

            <LazyLoad delay={300} animationClass="fade-in-scale">
              <Card className="hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer overflow-hidden">
                <LazyImage
                  src="/conversation2.webp"
                  alt={t.conversation.benefits.confidence.title}
                  className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300 rounded-lg"
                />
                <CardHeader className="text-center">
                  <Award className="w-8 h-8 text-primary mx-auto mb-2" />
                  <CardTitle className="text-lg">{t.conversation.benefits.confidence.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center">
                    {t.conversation.benefits.confidence.description}
                  </p>
                </CardContent>
              </Card>
            </LazyLoad>

            <LazyLoad delay={400} animationClass="fade-in-scale">
              <Card className="hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer overflow-hidden">
                <LazyImage
                  src="/conversation4.webp"
                  alt={t.conversation.benefits.pronunciation.title}
                  className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300 rounded-lg"
                />
                <CardHeader className="text-center">
                  <Globe className="w-8 h-8 text-primary mx-auto mb-2" />
                  <CardTitle className="text-lg">{t.conversation.benefits.pronunciation.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center">
                    {t.conversation.benefits.pronunciation.description}
                  </p>
                </CardContent>
              </Card>
            </LazyLoad>

            <LazyLoad delay={500} animationClass="fade-in-scale">
              <Card className="hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer overflow-hidden">
                <LazyImage
                  src="/conversation3.webp"
                  alt={t.conversation.benefits.speaking.title}
                  className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300 rounded-lg"
                />
                <CardHeader className="text-center">
                  <Clock className="w-8 h-8 text-primary mx-auto mb-2" />
                  <CardTitle className="text-lg">{t.conversation.benefits.speaking.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center">
                    {t.conversation.benefits.speaking.description}
                  </p>
                </CardContent>
              </Card>
            </LazyLoad>
          </div>
        </div>
      </section>

      {/* Topics Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <LazyLoad delay={100} animationClass="fade-in">
            <h2 className="text-3xl font-bold text-center mb-12">{t.conversation.methodology.title}</h2>
          </LazyLoad>
          
          <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-6">
            <LazyLoad delay={200} animationClass="fade-in-left">
              <Card className="hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer">
                <CardHeader>
                  <CardTitle>{t.conversation.topics.dailyLife.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                      <span>{t.conversation.topics.dailyLife.items.presentations}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                      <span>{t.conversation.topics.dailyLife.items.shopping}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                      <span>{t.conversation.topics.dailyLife.items.travel}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                      <span>{t.conversation.topics.dailyLife.items.medical}</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </LazyLoad>

            <LazyLoad delay={300} animationClass="fade-in-right">
              <Card className="hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer">
                <CardHeader>
                  <CardTitle>{t.conversation.topics.professional.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                      <span>{t.conversation.topics.professional.items.meetings}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                      <span>{t.conversation.topics.professional.items.interviews}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                      <span>{t.conversation.topics.professional.items.negotiations}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                      <span>{t.conversation.topics.professional.items.networking}</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </LazyLoad>

            <Card className="hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer">
              <CardHeader>
                <CardTitle>{t.conversation.topics.cultural.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                    <span>{t.conversation.topics.cultural.items.differences}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                    <span>{t.conversation.topics.cultural.items.expressions}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                    <span>{t.conversation.topics.cultural.items.slang}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                    <span>{t.conversation.topics.cultural.items.etiquette}</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer">
              <CardHeader>
                <CardTitle>{t.conversation.topics.interests.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                    <span>{t.conversation.topics.interests.items.hobbies}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                    <span>{t.conversation.topics.interests.items.technology}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                    <span>{t.conversation.topics.interests.items.news}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                    <span>{t.conversation.topics.interests.items.personal}</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Method Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">{t.conversation.method.title}</h2>
          
          <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                {t.conversation.method.studentSpeaks.percentage}
              </div>
              <h3 className="text-xl font-semibold mb-3">{t.conversation.method.studentSpeaks.title}</h3>
              <p className="text-muted-foreground">
                {t.conversation.method.studentSpeaks.description}
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                {t.conversation.method.teacherGuides.percentage}
              </div>
              <h3 className="text-xl font-semibold mb-3">{t.conversation.method.teacherGuides.title}</h3>
              <p className="text-muted-foreground">
                {t.conversation.method.teacherGuides.description}
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                {t.conversation.method.minimalTheory.percentage}
              </div>
              <h3 className="text-xl font-semibold mb-3">{t.conversation.method.minimalTheory.title}</h3>
              <p className="text-muted-foreground">
                {t.conversation.method.minimalTheory.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Perfect For Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">{t.conversation.idealFor.title}</h2>
          
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-primary mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">{t.conversation.perfectFor.hasGrammar.title}</h3>
                  <p className="text-muted-foreground">{t.conversation.perfectFor.hasGrammar.description}</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-primary mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">{t.conversation.perfectFor.wantsFluency.title}</h3>
                  <p className="text-muted-foreground">{t.conversation.perfectFor.wantsFluency.description}</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-primary mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">{t.conversation.perfectFor.seekNaturalness.title}</h3>
                  <p className="text-muted-foreground">{t.conversation.perfectFor.seekNaturalness.description}</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-primary mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">{t.conversation.perfectFor.hasGoals.title}</h3>
                  <p className="text-muted-foreground">{t.conversation.perfectFor.hasGoals.description}</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-primary mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">{t.conversation.perfectFor.overcomeShy.title}</h3>
                  <p className="text-muted-foreground">{t.conversation.perfectFor.overcomeShy.description}</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-primary mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">{t.conversation.perfectFor.learnsPracticing.title}</h3>
                  <p className="text-muted-foreground">{t.conversation.perfectFor.learnsPracticing.description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-6 items-center">
              <div className="text-center flex flex-col justify-center">
                <div className="w-24 h-16 mx-auto flex items-center justify-center mb-6">
                  <img 
                    src="/AulaDeInglesEmCasaIcon.webp" 
                    alt="Aula de Inglês em Casa - Andrew Rogers" 
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold mb-8">
                  {t.conversation.location.title}
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
      <RelatedBlogPosts category={BLOG_CATEGORIES.CONVERSATION} variant="grey" />

      {/* CTA Section */}
      <section className="relative py-16 text-primary-foreground overflow-hidden">
        {/* Background Image */}
        <img 
          src="/Beach.webp" 
          alt="Beach background" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60"></div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl font-bold mb-4">{t.conversation.finalCta.title}</h2>
          <p className="text-xl mb-8 text-primary-foreground/90">
            {t.conversation.finalCta.subtitle}
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
        </div>
      </section>
    </div>
  )
}
