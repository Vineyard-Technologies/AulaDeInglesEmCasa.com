import { Link } from "react-router-dom"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { getBlogPostsByCategory } from "@/data/blogPostsBilingual"
import { useLanguage } from "@/contexts/LanguageContext"
import { useTranslations } from "@/data/translations"
import { 
  Clock, 
  ArrowRight,
  BookOpen
} from "lucide-react"

export const RelatedBlogPosts = ({ category, limit = 3, variant = "white" }) => {
  const { language } = useLanguage()
  const t = useTranslations()
  const relatedPosts = getBlogPostsByCategory(category, language).slice(0, limit)
  
  if (relatedPosts.length === 0) {
    return null
  }

  const backgroundClass = variant === "grey" ? "bg-muted/50" : "bg-background"

  return (
    <section className={`py-16 ${backgroundClass}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-primary rounded-full">
                <BookOpen className="w-6 h-6 text-primary-foreground" />
              </div>
            </div>
            <h2 className="text-3xl font-bold mb-4">{t.blog.relatedPosts.title}</h2>
            <p className="text-muted-foreground">
              {t.blog.relatedPosts.subtitle.replace('{category}', category.toLowerCase())}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedPosts.map((post) => (
              <Card key={post.id} className="hover:shadow-lg transition-shadow overflow-hidden">
                {post.image && (
                  <div className="aspect-video w-full overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}
                <CardHeader>
                  <div className="flex items-center justify-end mb-2">
                    <div className="flex items-center gap-1 text-muted-foreground text-sm">
                      <Clock className="w-4 h-4" />
                      {post.readTime} {t.blog.readTime}
                    </div>
                  </div>
                  
                  <CardTitle className="text-lg leading-tight">
                    <Link 
                      to={`/blog/${post.slug}`}
                      className="hover:text-primary transition-colors"
                    >
                      {post.title}
                    </Link>
                  </CardTitle>
                  
                  <p className="text-sm text-muted-foreground mt-1">{t.blog.relatedPosts.by} <Link to="/sobre" className="hover:text-primary transition-colors">Andrew Rogers</Link></p>
                </CardHeader>
                
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    {post.excerpt}
                  </p>
                  
                  <Link 
                    to={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1 text-primary hover:text-primary/80 font-medium text-sm transition-colors"
                  >
                    {t.blog.relatedPosts.readArticle}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Link 
              to="/blog"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors"
            >
              {t.blog.relatedPosts.viewAllArticles}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}