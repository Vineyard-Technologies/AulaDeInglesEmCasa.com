import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap, Award } from "lucide-react"

export function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* About Content */}
      <section className="pt-16 pb-8">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              {/* Biography */}
              <div>
                <h2 className="text-3xl font-bold mb-6">Sobre o professor</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <div className="flex gap-4 items-start">
                    <p className="flex-1">
                      Andrew é do estado de Washington, EUA, nascido e criado na região de Seattle.
                      Estudou no Bellevue College e começou a aprender português em 2015.
                      Casou-se com sua esposa campo-grandense em 2018.
                      Ele era um membro ativo da comunidade de imigrantes brasileiros no oeste de Washington.
                    </p>
                    <img 
                      src="/src/assets/images/Andrew Rogers.webp" 
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

              {/* Qualifications */}
              <div>
                <h2 className="text-3xl font-bold mb-6">Qualificações</h2>
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
            </div>
            
            {/* Photo Gallery */}
            <div className="mt-12">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <img 
                  src="/src/assets/images/AboutPhoto1.webp" 
                  alt="Andrew Rogers ensinando inglês em ambiente profissional" 
                  className="w-full h-48 rounded-lg object-cover"
                />
                <img 
                  src="/src/assets/images/AboutPhoto2.webp" 
                  alt="Andrew Rogers com família em Campo Grande, MS" 
                  className="w-full h-48 rounded-lg object-cover"
                />
                <img 
                  src="/src/assets/images/AboutPhoto3.webp" 
                  alt="Andrew Rogers em atividades comunitárias e voluntariado" 
                  className="w-full h-48 rounded-lg object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
