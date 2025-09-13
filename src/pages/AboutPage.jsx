import { useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap, Award } from "lucide-react"
import { LazyLoad, LazyImage } from "@/components"
import { updateMetaTags, addStructuredData, createPersonSchema, pageMetaData } from "@/utils/seo"

// Public asset URLs (no imports needed)
const andrewRogersImage = "/AndrewRogers.webp"
const aboutPhoto1 = "/AndrewWithFriends.webp"
const aboutPhoto2 = "/AndrewFamily.webp"
const aboutPhoto3 = "/AndrewWedding.webp"

export function AboutPage() {
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
                  <h2 className="text-3xl font-bold mb-6 text-center md:text-left">Sobre o professor</h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    {/* Mobile layout: image above text, both full width */}
                    <div className="md:hidden">
                      <LazyImage 
                        src={andrewRogersImage} 
                        alt="Andrew Rogers" 
                        className="w-full aspect-square rounded-lg object-cover mb-4"
                      />
                      <p>
                        Andrew é do estado de Washington, EUA, nascido e criado na região de Seattle.
                        Estudou no Bellevue College e começou a aprender português em 2015.
                        Casou-se com sua esposa campo-grandense em 2018.
                        Ele era um membro ativo da comunidade de imigrantes brasileiros no oeste de Washington.
                      </p>
                    </div>
                    
                    {/* Desktop layout: image alongside text */}
                    <div className="hidden md:flex gap-4 items-start">
                      <p className="flex-1">
                        Andrew é do estado de Washington, EUA, nascido e criado na região de Seattle.
                        Estudou no Bellevue College e começou a aprender português em 2015.
                        Casou-se com sua esposa campo-grandense em 2018.
                        Ele era um membro ativo da comunidade de imigrantes brasileiros no oeste de Washington.
                      </p>
                      <LazyImage 
                        src={andrewRogersImage} 
                        alt="Andrew Rogers" 
                        className="w-32 h-32 rounded-lg object-cover flex-shrink-0"
                      />
                    </div>
                  <p>
                    Andrew adquiriu vasta experiência ensinando inglês para brasileiros e estrangeiros sem nunca ter pisado no Brasil.
                    Isso incluiu uma aula on-line via Zoom durante a pandemia de COVID-19.
                    Ele atuou como tradutor em diversas ocasiões para auxiliar brasileiros com serviços sociais.
                  </p>
                  <p>
                    Mudou-se para Campo Grande, Mato Grosso do Sul, em 2023 com a esposa e as três filhas, onde trabalha como desenvolvedor de software freelancer.
                    Ele gosta da culinária brasileira, de participar da igreja local e de explorar a cidade.
                    Ele foi aprovado como Residente Permanente do Brasil e frequentemente visita seus amigos e familiares nos Estados Unidos.
                  </p>
                </div>
              </div>
              </LazyLoad>

              {/* Qualifications */}
              <LazyLoad delay={200} animationClass="fade-in-right">
                <div>
                  <h2 className="text-3xl font-bold mb-6 text-center md:text-left">Qualificações</h2>
                <div className="space-y-4">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-lg">
                        <Award className="w-5 h-5 text-primary" />
                        Experiência Profissional
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• Mais de 10 anos ensinando inglês para falantes não nativos</li>
                        <li>• Mais de 5 anos ensinando inglês para brasileiros</li>
                        <li>• Professor do <a href="https://kcls.org/adult-learners/" target="_blank" rel="noopener noreferrer" className="text-primary underline hover:underline">KCLS Talk Time</a> por 2 anos</li>
                        <li>• Ensinou inglês para imigrantes brasileiros nos Estados Unidos</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-lg">
                        <GraduationCap className="w-5 h-5 text-primary" />
                        Formação Acadêmica
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• Grau de Associado em Serviços de Rede e Sistemas de Computadores pela Bellevue College</li>
                        <li>• Bacharelado em Engenharia de Software pela Anhanguera (em andamento)</li>
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
