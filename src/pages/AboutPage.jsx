import { useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap, Award } from "lucide-react"
import { LazyLoad, LazyImage } from "@/components"
import { updateMetaTags, addStructuredData, createPersonSchema, pageMetaData } from "@/utils/seo"
import { useTranslations } from "@/data/translations"

// Public asset URLs (no imports needed)
const andrewRogersImage = "/AndrewRogers.webp"
const aboutPhoto1 = "/AndrewWithFriends.webp"
const aboutPhoto2 = "/AndrewFamily.webp"
const aboutPhoto3 = "/AndrewWedding.webp"

export function AboutPage() {
  const t = useTranslations()
  
  useEffect(() => {
    // Update meta tags
    updateMetaTags(pageMetaData.about);
    
    // Add structured data for the person/teacher
    addStructuredData(createPersonSchema());
  }, [])
  
  return (
    <div className="min-h-screen bg-background">
      {/* About Content */}
      <section className="pt-16 pb-8">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              {/* Biography */}
              <LazyLoad delay={100} animationClass="fade-in-left">
                <div>
                  <h2 className="text-3xl font-bold mb-6 text-center md:text-left">{t.about.bio.title}</h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    {/* Mobile layout: image above text, both full width */}
                    <div className="md:hidden">
                      <LazyImage 
                        src={andrewRogersImage} 
                        alt="Andrew Rogers" 
                        className="w-full aspect-square rounded-lg object-cover mb-4"
                      />
                      <p>
                        {t.about.bio.p1}
                      </p>
                    </div>
                    
                    {/* Desktop layout: image alongside text */}
                    <div className="hidden md:flex gap-4 items-start">
                      <p className="flex-1">
                        {t.about.bio.p1}
                      </p>
                      <LazyImage 
                        src={andrewRogersImage} 
                        alt="Andrew Rogers" 
                        className="w-32 h-32 rounded-lg object-cover flex-shrink-0"
                      />
                    </div>
                  <p>
                    {t.about.bio.p2}
                  </p>
                  <p>
                    {t.about.bio.p3}
                  </p>
                </div>
              </div>
              </LazyLoad>

              {/* Qualifications */}
              <LazyLoad delay={200} animationClass="fade-in-right">
                <div>
                  <h2 className="text-3xl font-bold mb-6 text-center md:text-left">{t.about.qualifications.title}</h2>
                <div className="space-y-4">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-lg">
                        <Award className="w-5 h-5 text-primary" />
                        {t.about.qualifications.experience.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        {t.about.qualifications.experience.items.map((item, index) => (
                          <li key={index}>
                            • {item.includes('{link}') ? (
                              <span dangerouslySetInnerHTML={{
                                __html: item
                                  .replace('{link}', '<a href="https://kcls.org/adult-learners/" target="_blank" rel="noopener noreferrer" class="text-primary underline hover:underline">')
                                  .replace('{/link}', '</a>')
                              }} />
                            ) : (
                              item
                            )}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-lg">
                        <GraduationCap className="w-5 h-5 text-primary" />
                        {t.about.qualifications.education.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        {t.about.qualifications.education.items.map((item, index) => (
                          <li key={index}>• {item}</li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
              </LazyLoad>
            </div>
            
            {/* Photo Gallery */}
            <LazyLoad delay={300}>
              <div className="mt-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <LazyImage 
                    src={aboutPhoto1} 
                    alt="Andrew Rogers ensinando inglês em ambiente profissional" 
                    className="w-full h-48 rounded-lg object-cover"
                  />
                  <LazyImage 
                    src={aboutPhoto2} 
                    alt="Andrew Rogers com família em Campo Grande, MS" 
                    className="w-full h-48 rounded-lg object-cover"
                  />
                  <LazyImage 
                    src={aboutPhoto3} 
                    alt="Andrew Rogers em atividades comunitárias e voluntariado" 
                    className="w-full h-48 rounded-lg object-cover"
                  />
                </div>
              </div>
            </LazyLoad>
          </div>
        </div>
      </section>
    </div>
  )
}
