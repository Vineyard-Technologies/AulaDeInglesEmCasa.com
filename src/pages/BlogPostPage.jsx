import { useEffect } from "react"
import { useParams, Link, Navigate } from "react-router-dom"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { LazyLoad, LazyImage } from "@/components"
import { updateMetaTags } from "@/utils/seo"
import { getBlogPostBySlug, getRelatedPosts } from "@/data/blogPostsBilingual"
import { useLanguage } from "@/contexts/LanguageContext"
import { useTranslations } from "@/data/translations"
import { 
  Clock, 
  ArrowLeft, 
  BookOpen,
  ArrowRight
} from "lucide-react"

export function BlogPostPage() {
  const { slug } = useParams()
  const { language } = useLanguage()
  const t = useTranslations()
  const post = getBlogPostBySlug(slug, language)
  
  if (!post) {
    return <Navigate to="/blog" replace />
  }
  
  const relatedPosts = getRelatedPosts(post, language)
  
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
          <h2 key={index} className="text-2xl font-semibold mt-8 mb-4">
            {paragraph.replace(/\*\*/g, '')}
          </h2>
        )
      }
      
      // Process markdown links and bold text
      const processText = (text) => {
        const parts = []
        let lastIndex = 0
        
        // Process both markdown links [text](url) and bold text **text**
        const regex = /(\[([^\]]+)\]\(([^)]+)\))|(\*\*([^*]+)\*\*)/g
        let match
        
        while ((match = regex.exec(text)) !== null) {
          // Add text before the match
          if (match.index > lastIndex) {
            parts.push(text.slice(lastIndex, match.index))
          }
          
          if (match[1]) {
            // Markdown link [text](url)
            const linkText = match[2]
            const linkUrl = match[3]
            parts.push(
              <Link key={`link-${match.index}`} to={linkUrl} className="text-primary hover:underline">
                {linkText}
              </Link>
            )
          } else if (match[4]) {
            // Bold text **text**
            const boldText = match[5]
            parts.push(
              <strong key={`bold-${match.index}`}>
                {boldText}
              </strong>
            )
          }
          
          lastIndex = regex.lastIndex
        }
        
        // Add remaining text
        if (lastIndex < text.length) {
          parts.push(text.slice(lastIndex))
        }
        
        return parts.length > 0 ? parts : [text]
      }
      
      return (
        <p key={index} className="mb-4 leading-relaxed">
          {processText(paragraph)}
        </p>
      )
    }).filter(Boolean)

    // Insert image after 2nd or 3rd paragraph
    if (image && elements.length > 2) {
      const insertIndex = Math.min(3, elements.length - 1) // Insert at index 3 (after 3rd element) or before last
      const imageElement = (
        <div key="inline-image" className="my-6 float-right ml-6 mb-4 w-[50%]">
          <img 
            src={image} 
            alt={post.title}
            className="w-full h-auto rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
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
          <LazyLoad delay={100} animationClass="fade-in-left">
            <Link 
              to="/blog"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              {t.blog.backToBlog}
            </Link>
          </LazyLoad>
          
          <div className="max-w-4xl mx-auto">
            <LazyLoad delay={200} animationClass="fade-in">
              <h1 className="text-3xl md:text-4xl font-bold mb-2 leading-tight">
                {post.title}
              </h1>
              
              <p className="text-muted-foreground mb-4">{t.blog.relatedPosts.by} <Link to="/sobre" className="hover:text-primary transition-colors">Andrew Rogers</Link></p>
              
              <div className="flex items-center gap-4 text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {post.readTime} {t.blog.readTime}
                </div>
              </div>
            </LazyLoad>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <LazyLoad delay={300} animationClass="fade-in">
              <div className="prose prose-lg max-w-none">
                <div className="text-lg leading-relaxed">
                  {formatContent(post.content, post.image)}
                </div>
              </div>
            </LazyLoad>
            
            {/* Author Bio */}
            <LazyLoad delay={400} animationClass="fade-in-scale">
              <div className="mt-12 p-6 bg-muted/50 rounded-lg">
                <div className="flex items-start gap-4">
                  <img 
                    src="/AndrewRogers.webp" 
                    alt="Andrew Rogers"
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div className="flex-grow">
                    <h4 className="font-semibold text-lg mb-2">{t.blog.authorBio.name}</h4>
                    <p className="text-muted-foreground mb-4">
                      {t.blog.authorBio.bio}
                    </p>
                    <Link to="/sobre">
                      <Button size="lg" className="inline-flex items-center gap-2">
                        {t.blog.authorBio.learnMore}
                        <ArrowRight className="w-4 h-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </LazyLoad>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <LazyLoad delay={500} animationClass="fade-in">
                <h2 className="text-2xl font-bold text-center mb-8">{t.blog.relatedPosts.title}</h2>
              </LazyLoad>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedPosts.map((relatedPost, index) => (
                  <LazyLoad key={relatedPost.id} delay={600 + (index * 100)} animationClass="fade-in-scale">
                    <Card className="hover:shadow-lg transition-shadow overflow-hidden">
                      {relatedPost.image && (
                        <div className="aspect-video w-full overflow-hidden">
                          <LazyImage 
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
                            {relatedPost.readTime} {t.blog.readTime}
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
                        
                        <p className="text-sm text-muted-foreground mt-1">{t.blog.relatedPosts.by} <Link to="/sobre" className="hover:text-primary transition-colors">Andrew Rogers</Link></p>
                      </CardHeader>
                      
                      <CardContent>
                        <p className="text-sm text-muted-foreground mb-4">
                          {relatedPost.excerpt}
                        </p>
                        
                        <Link 
                          to={`/blog/${relatedPost.slug}`}
                          className="inline-flex items-center gap-1 text-primary hover:text-primary/80 font-medium text-sm transition-colors"
                        >
                          {t.blog.relatedPosts.readMore}
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </CardContent>
                    </Card>
                  </LazyLoad>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  )
}