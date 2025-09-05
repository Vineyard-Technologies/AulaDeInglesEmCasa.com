import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { 
  Calendar, 
  Clock, 
  User, 
  ArrowRight, 
  BookOpen,
  MessageCircle,
  Lightbulb,
  Target,
  TrendingUp
} from "lucide-react"

export function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: "5 Dicas Para Melhorar Sua Pronúncia em Inglês",
      excerpt: "Descubra técnicas simples e eficazes para aperfeiçoar sua pronúncia e soar mais natural ao falar inglês.",
      date: "2024-03-15",
      readTime: "5 min",
      category: "Pronúncia",
      featured: true
    },
    {
      id: 2,
      title: "Como Criar o Hábito de Estudar Inglês Todos os Dias",
      excerpt: "Estratégias práticas para incorporar o estudo do inglês na sua rotina diária, mesmo com pouco tempo.",
      date: "2024-03-10",
      readTime: "7 min",
      category: "Estudo"
    },
    {
      id: 3,
      title: "Diferenças Entre Inglês Americano e Britânico",
      excerpt: "Entenda as principais diferenças de vocabulário, pronúncia e gramática entre as duas variantes.",
      date: "2024-03-05",
      readTime: "6 min",
      category: "Gramática"
    },
    {
      id: 4,
      title: "Músicas em Inglês: Uma Ferramenta Poderosa de Aprendizado",
      excerpt: "Como usar músicas para melhorar sua compreensão auditiva e expandir seu vocabulário.",
      date: "2024-02-28",
      readTime: "4 min",
      category: "Listening"
    },
    {
      id: 5,
      title: "Business English: Frases Essenciais Para Reuniões",
      excerpt: "Vocabulário e expressões fundamentais para se comunicar profissionalmente em inglês.",
      date: "2024-02-20",
      readTime: "8 min",
      category: "Business"
    },
    {
      id: 6,
      title: "Superando a Timidez ao Falar Inglês",
      excerpt: "Técnicas psicológicas e práticas para ganhar confiança na conversação em inglês.",
      date: "2024-02-15",
      readTime: "6 min",
      category: "Conversação"
    }
  ]

  const categories = ["Todos", "Pronúncia", "Estudo", "Gramática", "Listening", "Business", "Conversação"]

  const whatsappNumber = "5567999999999"
  const whatsappMessage = "Olá! Gostei do seu blog e queria saber mais sobre as aulas de inglês."

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 to-primary/5 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Blog de Inglês
            </h1>
            <p className="text-xl text-muted-foreground mb-6">
              Dicas, técnicas e insights para acelerar seu aprendizado do inglês
            </p>
            <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <BookOpen className="w-4 h-4" />
                <span>Artigos semanais</span>
              </div>
              <div className="flex items-center gap-1">
                <Lightbulb className="w-4 h-4" />
                <span>Dicas práticas</span>
              </div>
              <div className="flex items-center gap-1">
                <Target className="w-4 h-4" />
                <span>Resultados comprovados</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <Badge 
                key={category}
                variant={category === "Todos" ? "default" : "secondary"}
                className="cursor-pointer hover:bg-primary/20 transition-colors"
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold mb-8">Artigo em Destaque</h2>
            
            {blogPosts.filter(post => post.featured).map((post) => (
              <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="md:flex">
                  <div className="md:w-1/3 bg-gradient-to-br from-primary/20 to-primary/10 p-8 flex items-center justify-center">
                    <div className="text-center">
                      <TrendingUp className="w-16 h-16 text-primary mx-auto mb-4" />
                      <Badge className="bg-primary text-primary-foreground">
                        {post.category}
                      </Badge>
                    </div>
                  </div>
                  <div className="md:w-2/3 p-8">
                    <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(post.date).toLocaleDateString('pt-BR')}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{post.readTime} de leitura</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        <span>Andrew Rogers</span>
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-4">{post.title}</h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {post.excerpt}
                    </p>
                    
                    <Button>
                      Ler Artigo Completo
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold mb-8">Artigos Recentes</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.filter(post => !post.featured).map((post) => (
                <Card key={post.id} className="hover:shadow-lg transition-shadow cursor-pointer">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary">{post.category}</Badge>
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Clock className="w-3 h-3" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    <CardTitle className="line-clamp-2">{post.title}</CardTitle>
                    <CardDescription>{post.excerpt}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Avatar className="w-6 h-6">
                          <AvatarFallback className="text-xs">AR</AvatarFallback>
                        </Avatar>
                        <span>Andrew Rogers</span>
                      </div>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(post.date).toLocaleDateString('pt-BR')}</span>
                      </div>
                    </div>
                    
                    <Button variant="ghost" className="w-full mt-4 group">
                      Ler Mais
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
              <CardContent className="p-8 text-center">
                <MessageCircle className="w-16 h-16 text-primary mx-auto mb-6" />
                <h3 className="text-2xl font-bold mb-4">
                  Receba Dicas de Inglês no WhatsApp
                </h3>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Cadastre-se para receber dicas semanais de inglês, exercícios práticos 
                  e conteúdo exclusivo diretamente no seu WhatsApp. É gratuito!
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    size="lg"
                    className="bg-accent hover:bg-accent/90"
                    onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`, '_blank')}
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Receber Dicas Gratuitas
                  </Button>
                </div>
                
                <p className="text-xs text-muted-foreground mt-4">
                  Seus dados estão seguros. Você pode cancelar a qualquer momento.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Author */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <Avatar className="w-32 h-32 border-4 border-primary/20">
                    <AvatarImage src="/api/placeholder/200/200" alt="Andrew Rogers" />
                    <AvatarFallback className="text-2xl font-bold">AR</AvatarFallback>
                  </Avatar>
                  
                  <div className="text-center md:text-left">
                    <h3 className="text-2xl font-bold mb-2">Andrew Rogers</h3>
                    <p className="text-primary font-medium mb-4">
                      Professor de Inglês • 10+ Anos de Experiência
                    </p>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      Professor nativo de inglês especializado em aulas domiciliares em Campo Grande, MS. 
                      Certificado TEFL com mais de 500 alunos atendidos. Apaixonado por ensinar e 
                      compartilhar conhecimento através deste blog.
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Button variant="outline" size="sm">
                        Ver Perfil Completo
                      </Button>
                      <Button 
                        size="sm"
                        onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`, '_blank')}
                      >
                        <MessageCircle className="w-4 h-4 mr-2" />
                        Agendar Aula
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
