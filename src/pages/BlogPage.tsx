import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { CalendarDays, Clock, User, ArrowRight } from 'lucide-react'

export const BlogPage = () => {
  const blogPosts = [
    {
      id: 1,
      title: "5 Dicas Para Melhorar Sua Pronúncia em Inglês",
      excerpt: "Descubra técnicas simples e eficazes para aperfeiçoar sua pronúncia e soar mais natural ao falar inglês.",
      date: "2024-12-15",
      author: "Andrew Rogers",
      category: "Pronúncia",
      readTime: "5 min",
      featured: true
    },
    {
      id: 2,
      title: "Como Criar o Hábito de Estudar Inglês Todos os Dias",
      excerpt: "Estratégias práticas para incorporar o estudo do inglês na sua rotina diária, mesmo com pouco tempo.",
      date: "2024-12-10",
      author: "Andrew Rogers",
      category: "Estudo",
      readTime: "7 min",
      featured: false
    },
    {
      id: 3,
      title: "Os Erros Mais Comuns dos Brasileiros em Inglês",
      excerpt: "Identifique e corrija os erros mais frequentes que podem atrapalhar sua comunicação em inglês.",
      date: "2024-12-05",
      author: "Andrew Rogers",
      category: "Gramática",
      readTime: "6 min",
      featured: false
    },
    {
      id: 4,
      title: "Inglês para Negócios: Frases Essenciais",
      excerpt: "As expressões e frases mais importantes para se comunicar profissionalmente em inglês.",
      date: "2024-11-28",
      author: "Andrew Rogers",
      category: "Business",
      readTime: "8 min",
      featured: false
    },
    {
      id: 5,
      title: "Apps e Recursos Online para Complementar Suas Aulas",
      excerpt: "Uma seleção dos melhores aplicativos e sites para acelerar seu aprendizado de inglês.",
      date: "2024-11-20",
      author: "Andrew Rogers",
      category: "Tecnologia",
      readTime: "4 min",
      featured: false
    },
    {
      id: 6,
      title: "A Importância da Imersão no Aprendizado de Idiomas",
      excerpt: "Como criar um ambiente de imersão em inglês mesmo estando no Brasil.",
      date: "2024-11-15",
      author: "Andrew Rogers",
      category: "Metodologia",
      readTime: "6 min",
      featured: false
    }
  ]

  const categories = ["Todos", "Pronúncia", "Estudo", "Gramática", "Business", "Tecnologia", "Metodologia"]

  return (
    <div className="min-h-screen bg-background py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">
            Blog de Inglês
          </h1>
          <p className="text-xl text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Dicas, estratégias e insights para acelerar seu aprendizado de inglês. 
            Conteúdo atualizado semanalmente por um professor nativo.
          </p>
          
          {/* Categories Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === "Todos" ? "default" : "outline"}
                size="sm"
                className="mb-2"
              >
                {category}
              </Button>
            ))}
          </div>
          
          {/* Featured Post */}
          {blogPosts.filter(post => post.featured).map((post) => (
            <Card key={post.id} className="mb-12 overflow-hidden hover:shadow-lg transition-shadow">
              <div className="md:flex">
                <div className="md:w-1/3 bg-gradient-to-br from-primary to-primary/80 p-8 text-primary-foreground">
                  <Badge className="bg-accent text-accent-foreground mb-4">
                    Destaque
                  </Badge>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">
                    {post.title}
                  </h2>
                  <p className="text-primary-foreground/90 mb-6">
                    {post.excerpt}
                  </p>
                  <Button variant="secondary" className="group">
                    Ler Artigo
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
                <div className="md:w-2/3 p-8">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      {post.author}
                    </div>
                    <div className="flex items-center gap-1">
                      <CalendarDays className="h-4 w-4" />
                      {new Date(post.date).toLocaleDateString('pt-BR')}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {post.readTime}
                    </div>
                  </div>
                  <Badge variant="outline" className="mb-4">
                    {post.category}
                  </Badge>
                  <p className="text-muted-foreground leading-relaxed">
                    Este artigo aborda técnicas comprovadas que você pode aplicar imediatamente 
                    para melhorar sua pronúncia. Inclui exercícios práticos e recursos de áudio 
                    para treinar em casa. Perfeito para alunos de todos os níveis que querem 
                    soar mais naturais ao falar inglês.
                  </p>
                </div>
              </div>
            </Card>
          ))}
          
          {/* Regular Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.filter(post => !post.featured).map((post) => (
              <Card key={post.id} className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline" className="text-xs">
                      {post.category}
                    </Badge>
                    <span className="text-xs text-muted-foreground">
                      {post.readTime}
                    </span>
                  </div>
                  <CardTitle className="text-lg leading-tight">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <CalendarDays className="h-3 w-3" />
                      {new Date(post.date).toLocaleDateString('pt-BR')}
                    </div>
                    <div className="flex items-center gap-1">
                      <User className="h-3 w-3" />
                      {post.author}
                    </div>
                  </div>
                  
                  <Button variant="ghost" className="w-full mt-4 group text-sm">
                    Ler Mais
                    <ArrowRight className="ml-2 h-3 w-3 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Newsletter Signup */}
          <Card className="mt-16 p-8 bg-muted/50 text-center">
            <CardHeader>
              <CardTitle className="text-2xl">Receba Nossas Dicas por E-mail</CardTitle>
              <p className="text-muted-foreground">
                Cadastre-se para receber dicas semanais de inglês diretamente na sua caixa de entrada.
              </p>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="seu@email.com"
                  className="flex-1 px-4 py-2 border border-input bg-background rounded-md"
                />
                <Button>
                  Inscrever-se
                </Button>
              </div>
              <p className="text-xs text-muted-foreground mt-2">
                Sem spam. Cancele a qualquer momento.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
