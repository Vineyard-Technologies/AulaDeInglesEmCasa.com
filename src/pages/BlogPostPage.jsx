import { useEffect } from "react"
import { useParams, Link, Navigate } from "react-router-dom"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { updateMetaTags } from "@/utils/seo"
import { getBlogPostBySlug, getRelatedPosts } from "@/data/blogPosts"
import { 
  Clock, 
  ArrowLeft, 
  BookOpen,
  ArrowRight
} from "lucide-react"

export function BlogPostPage() {
  const { slug } = useParams()
  const post = getBlogPostBySlug(slug)
  
  if (!post) {
    return <Navigate to="/blog" replace />
  }
  
  const relatedPosts = getRelatedPosts(post)
  
  useEffect(() => {
    updateMetaTags({
      title: `${post.title} | Blog | Aula de Inglês em Casa`,
      description: post.excerpt,
      canonical: `https://auladeinglesemcasa.com/blog/${post.slug}`
    })
  }, [post])

  const formatContent = (content, image = null) => {
    const elements = content.split('\n').map((paragraph, index) => {
      if (paragraph.trim() === '') return null
      
      if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
        return (
          <h3 key={index} className="text-xl font-semibold mt-6 mb-3">
            {paragraph.replace(/\*\*/g, '')}
          </h3>
        )
      }
      
      return (
        <p key={index} className="mb-4 leading-relaxed">
          {paragraph.split(/(\*\*.*?\*\*)/).map((part, partIndex) => {
            if (part.startsWith('**') && part.endsWith('**')) {
              return (
                <strong key={partIndex}>
                  {part.replace(/\*\*/g, '')}
                </strong>
              )
            }
            return part
          })}
        </p>
      )
    }).filter(Boolean)

    // Insert image after 2nd or 3rd paragraph
    if (image && elements.length > 2) {
      const insertIndex = Math.min(3, elements.length - 1) // Insert at index 3 (after 3rd element) or before last
      const imageElement = (
        <div key="inline-image" className="my-6 float-right ml-6 mb-4 w-80 max-w-[50%]">
          <img 
            src={image} 
            alt={post.title}
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      )
      elements.splice(insertIndex, 0, imageElement)
    }

    return elements
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="py-8 bg-muted/50">
        <div className="container mx-auto px-4">
          <Link 
            to="/blog"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar para o Blog
          </Link>
          
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-2 leading-tight">
              {post.title}
            </h1>
            
            <p className="text-muted-foreground mb-4">por <Link to="/sobre" className="hover:text-primary transition-colors">Andrew Rogers</Link></p>
            
            <div className="flex items-center gap-4 text-muted-foreground">
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {post.readTime}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <div className="text-lg leading-relaxed">
                {formatContent(post.content, post.image)}
              </div>
            </div>
            
            {/* Author Bio */}
            <div className="mt-12 p-6 bg-muted/50 rounded-lg">
              <div className="flex items-start gap-4">
                <img 
                  src="/AndrewRogers.webp" 
                  alt="Andrew Rogers"
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div className="flex-grow">
                  <h4 className="font-semibold text-lg mb-2">Andrew Rogers</h4>
                  <p className="text-muted-foreground mb-4">
                    Professor americano de inglês com mais de 10 anos de experiência, incluindo 5 anos 
                    ensinando exclusivamente alunos brasileiros. Mora em Campo Grande, MS e é especializado 
                    em ajudar brasileiros a alcançarem fluência em inglês.
                  </p>
                  <Link to="/sobre">
                    <Button size="lg" className="inline-flex items-center gap-2">
                      Saiba Mais
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl font-bold text-center mb-8">Artigos Relacionados</h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedPosts.map((relatedPost) => (
                  <Card key={relatedPost.id} className="hover:shadow-lg transition-shadow overflow-hidden">
                    {relatedPost.image && (
                      <div className="aspect-video w-full overflow-hidden">
                        <img 
                          src={relatedPost.image} 
                          alt={relatedPost.title}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    )}
                    <CardHeader>
                      <div className="flex items-center justify-end mb-2">
                        <div className="flex items-center gap-1 text-muted-foreground text-sm">
                          <Clock className="w-4 h-4" />
                          {relatedPost.readTime}
                        </div>
                      </div>
                      
                      <CardTitle className="text-lg leading-tight">
                        <Link 
                          to={`/blog/${relatedPost.slug}`}
                          className="hover:text-primary transition-colors"
                        >
                          {relatedPost.title}
                        </Link>
                      </CardTitle>
                      
                      <p className="text-sm text-muted-foreground mt-1">por <Link to="/sobre" className="hover:text-primary transition-colors">Andrew Rogers</Link></p>
                    </CardHeader>
                    
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">
                        {relatedPost.excerpt}
                      </p>
                      
                      <Link 
                        to={`/blog/${relatedPost.slug}`}
                        className="inline-flex items-center gap-1 text-primary hover:text-primary/80 font-medium text-sm transition-colors"
                      >
                        Ler mais
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  )
}